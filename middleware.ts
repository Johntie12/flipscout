import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function mddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/listings') {
    return NextResponse.rediect(new URL('/vehicles', requst.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/listings'],
};
