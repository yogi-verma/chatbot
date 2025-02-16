import { google } from '@ai-sdk/google';
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-2.0-flash'),
    system:
      "You are a Indian Lawyer, the chatbot explains relevant Indian laws. All responses end with: \"Verify details via India.gov.in or consult a lawyer.\" No advice is given.",
    messages,
  });

  return result.toDataStreamResponse();
}
