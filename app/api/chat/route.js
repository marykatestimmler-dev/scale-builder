import Anthropic from '@anthropic-ai/sdk';
import { systemPrompt } from '../../../lib/systemPrompt';

// Simple in-memory rate limiter
const rateLimit = new Map();
const RATE_LIMIT = 20; // requests per hour
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

function getClientIp(request) {
  // Try to get the client IP from headers (works in production with proxies)
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  const ip = request.headers.get('x-real-ip');
  if (ip) {
    return ip;
  }

  // Fallback for local development
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

    // Validate messages array
    if (!Array.isArray(messages)) {
      return Response.json(
        { error: 'Messages must be an array' },
        { status: 400 }
      );
    }

    // Initialize Anthropic client
    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Call Claude API
    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8192,
      system: systemPrompt,
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
    console.error('API Error:', error);

    // Handle specific error types
    if (error.status === 401) {
      return Response.json(
        { error: 'Authentication failed. Check your API key.' },
        { status: 401 }
      );
    }

    if (error.status === 429) {
      return Response.json(
        { error: 'Claude API rate limit exceeded. Please try again later.' },
        { status: 429 }
      );
    }

    if (error.status === 500) {
      return Response.json(
        { error: 'Claude API server error. Please try again later.' },
        { status: 503 }
      );
    }

    return Response.json(
      { error: `Error processing request: ${error.message}` },
      { status: 500 }
    );
  }
}
