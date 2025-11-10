import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // Redirect /a to homepage
  return NextResponse.redirect(new URL('/', request.url), 301);
}

