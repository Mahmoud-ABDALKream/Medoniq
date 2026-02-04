import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // Allow downloads with proper MIME type for APK
  if (request.nextUrl.pathname.startsWith('/api/download')) {
    response.headers.set('Content-Type', 'application/vnd.android.package-archive')
  }

  return response
}

export const config = {
  matcher: ['/:path*'],
}
