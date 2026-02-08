import Anthropic from '@anthropic-ai/sdk';
import { systemPrompt, systemPromptBase } from '../../../lib/systemPrompt';
import { scalesData, getScaleById } from '../../../lib/scalesData';

// Allow longer execution on Vercel Pro (ignored on free plan, but streaming fixes timeout anyway)
export const maxDuration = 60;

// Simple in-memory rate limiter
const rateLimit = new Map();
const RATE_LIMIT = 20;
const RATE_WINDOW = 60 * 60 * 1000;

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
    const clientIp = getClientIp(request);
    if (!checkRateLimit(clientIp)) {
      return Response.json(
        { error: 'Rate limit exceeded. Maximum 20 requests per hour.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { messages } = body;

    if (!Array.isArray(messages)) {
      return Response.json(
        { error: 'Messages must be an array' },
        { status: 400 }
      );
    }

    // Scan conversation for scale IDs mentioned
    const conversationText = messages.map(m => m.content).join(' ');
    const idMatches = conversationText.match(/\[id:([^\]]+)\]/g) || [];
    const mentionedIds = idMatches.map(m => m.replace('[id:', '').replace(']', ''));

    const selectedScales = scalesData.scales.filter(s => {
      if (mentionedIds.includes(s.id)) return true;
      const lowerText = conversationText.toLowerCase();
      if (s.shortName && lowerText.includes(s.shortName.toLowerCase())) return true;
      if (s.name && lowerText.includes(s.name.toLowerCase())) return true;
      return false;
    });

    let dynamicPrompt = systemPrompt;

    if (selectedScales.length > 0) {
      const topScales = selectedScales.slice(0, 3);
      const scaleDetails = topScales.map(s => JSON.stringify(s, null, 2)).join('\n\n');
      dynamicPrompt += '\n\n## Full Scale Data (for assessment generation)\nUse this data to generate the assessment. It contains all items, response format, and scoring:\n\n' + scaleDetails;
    }

    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Use streaming to avoid Vercel timeout on free plan
    const stream = await client.messages.stream({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8192,
      system: dynamicPrompt,
      messages: messages,
    });

    // Create a ReadableStream that sends text chunks as they arrive
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === 'content_block_delta' && event.delta?.text) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('API Error:', error?.message || error);

    const errorMessage = error?.message || 'Unknown error';
    const errorStatus = error?.status || 500;

    if (errorStatus === 401) {
      return Response.json({ error: 'Authentication failed. Check your API key.' }, { status: 401 });
    }
    if (errorStatus === 429) {
      return Response.json({ error: 'Claude API rate limit exceeded. Please try again in a minute.' }, { status: 429 });
    }
    return Response.json({ error: 'API error: ' + errorMessage }, { status: 500 });
  }
}
