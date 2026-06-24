import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const path = url.pathname;

  // We want to skip redirecting for:
  // - / (home)
  // - /about
  // - /coming-soon
  // - Next.js internal paths, API, and static files
  if (
    path === '/' ||
    path === '/about' ||
    path === '/coming-soon' ||
    path.startsWith('/_next') ||
    path.startsWith('/api') ||
    path.startsWith('/Images') || 
    path === '/favicon.ico' ||
    path.match(/\.(.*)$/) // Skip all files with extensions to allow assets
  ) {
    return NextResponse.next();
  }

  // Redirect all other paths to /coming-soon
 // return NextResponse.redirect(new URL('/coming-soon', request.url));
 return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
