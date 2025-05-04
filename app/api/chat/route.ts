import { google } from '@ai-sdk/google';
import { streamText } from "ai";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const result = await streamText({
      model: google('gemini-2.0-flash'),
      system:
        "Welcome to Legal Sahayak...", // Your system message here
      messages,
    });

    const stream = result.toAIStream();
    return new NextResponse(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error streaming text:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
