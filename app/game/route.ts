import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect('https://game.robokidsedu.com/login', 302);
}
