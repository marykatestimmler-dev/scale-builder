import Anthropic from '@anthropic-ai/sdk';
import { systemPrompt, systemPromptBase } from '../../../lib/systemPrompt';
import { scalesData, getScaleById } from '../../../lib/scalesData';

// Allow longer execution on Vercel (up to 60s)
export const maxDuration = 60;

// Simple in-memory rate limiter
const rateLimit = new Map();
const RATE_LIMIT = 20; // requests per hour
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const ip = request.headers.get('x-real-ip');
  if (ip) return ip;
  return 'unknown';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - RATE_WINDOW;
  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, [now]);
    return true;
  }
  const requests = rateLimit.get(ip).filter(t => t > windowStart);
  requests.push(now);
  rateLimit.set(ip, requests);
  return requests.length <= RATE_LIMIT;
}

export async function POST(request) {
  try {
    // Check rate limit
    const clientIp = getClientIp(request);
    if (!checkRateLimit(clientIp)) {
      return Response.json(
        { error: 'Rate limit exceeded. Maximum 20 requests per hour.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { messages } = body;

    if (!Array.isArray(messages)) {
      return Response.json(
        { error: 'Messages must be an array' },
        { status: 400 }
      );
    }

    // Scan conversation for scale IDs mentioned (e.g., [id:uwes-9])
    const conversationText = messages.map(m => m.content).join(' ');
    const idMatches = conversationText.match(/\[id:([^\]]+)\]/g) || [];
    const mentionedIds = idMatches.map(m => m.replace('[id:', '').replace(']', ''));

    // Also do loose name matching for scales the user/assistant mentioned by name
    const selectedScales = scalesData.scales.filter(s => {
      if (mentionedIds.includes(s.id)) return true;
      const lowerText = conversationText.toLowerCase();
      if (s.shortName && lowerText.includes(s.shortName.toLowerCase())) return true;
      if (s.name && lowerText.includes(s.name.toLowerCase())) return true;
      return false;
    });

    // Build dynamic system prompt: base + slim catalog always, full data only when scales detected
    let dynamicPrompt = systemPrompt; // ~15KB total (base + slim catalog)

    if (selectedScales.length > 0) {
      // Only include top 3 scales' full data to keep prompt manageable
      const topScales = selectedScales.slice(0, 3);
      const scaleDetails = topScales.map(s => JSON.stringify(s, null, 2)).join('\n\n');
      dynamicPrompt += '\n\n## Full Scale Data (for assessment generation)\nUse this data to generate the assessment. It contains all items, response format, and scoring:\n\n' + scaleDetails;
    }

    // Initialize Anthropic client
    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Call Claude API
    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8192,
      system: dynamicPrompt,
      messages: messages,
    });

    // Extract and return the response
    if (response.content && response.content.length > 0) {
      return Response.json({
        content: response.content[0].text,
      });
    } else {
      return Response.json(
        { error: 'No content in response' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API Error:', error?.message || error);
    console.error('Error status:', error?.status);
    console.error('Error type:', error?.type || error?.name);

    // Return detailed error info so the frontend can display it
    const errorMessage = error?.message || 'Unknown error';
    const errorStatus = error?.status || 500;

    if (errorStatus === 401) {
      return Response.json(
        { error: 'Authentication failed. Check your API key.' },
        { status: 401 }
      );
    }

    if (errorStatus === 429) {
      return Response.json(
        { error: 'Claude API rate limit exceeded. Please try again in a minute.' },
        { status: 429 }
      );
    }

    return Response.json(
      { error: 'API error: ' + errorMessage },
      { status: 500 }
    );
  }
}
