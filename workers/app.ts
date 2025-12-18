import { createRequestHandler } from 'react-router';

declare module 'react-router' {
  export interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
  }
}

const requestHandler = createRequestHandler(() => import('virtual:react-router/server-build'), import.meta.env.MODE);

/**
 * Creates a cache key from the URL, ignoring all query parameters.
 * This ensures the same page is cached regardless of query string variations.
 */
function getCacheKey(request: Request): Request {
  const url = new URL(request.url);
  // Remove all query parameters to create a normalized cache key
  url.search = '';
  return new Request(url.toString(), request);
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const cache = (caches as unknown as { default: Cache }).default;

    // Only cache GET requests
    if (request.method !== 'GET') {
      return requestHandler(request, {
        cloudflare: { env, ctx },
      });
    }

    // Create a cache key ignoring query parameters
    const cacheKey = getCacheKey(request);

    // Check if we have a cached response
    let response = await cache.match(cacheKey);

    if (response) {
      // Return cached response with a header indicating cache hit
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...Object.fromEntries(response.headers),
          'X-Cache-Status': 'HIT',
        },
      });
    }

    // No cache hit, fetch from origin
    response = await requestHandler(request, {
      cloudflare: { env, ctx },
    });

    // Only cache successful responses (2xx status codes)
    if (response.status >= 200 && response.status < 300) {
      // Clone the response since we need to read the body and cache it
      const responseToCache = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...Object.fromEntries(response.headers),
          // Set cache control if not already set (cache for 1 hour)
          'Cache-Control': response.headers.get('Cache-Control') || 'public, max-age=3600',
          'X-Cache-Status': 'MISS',
        },
      });

      // Store in cache (non-blocking)
      ctx.waitUntil(cache.put(cacheKey, responseToCache.clone()));

      return responseToCache;
    }

    // Return non-cacheable responses as-is
    return response;
  },
} satisfies ExportedHandler<Env>;
