import { NextResponse } from 'next/server';

export async function GET(request, res) {
  return NextResponse.json({ message: 'Hello from Next.js!' });
}
