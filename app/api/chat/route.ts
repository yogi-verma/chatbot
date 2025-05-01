import { google } from '@ai-sdk/google';
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-2.0-flash'),
    system:
      "Welcome to Legal Sahayak, your AI-powered assistant for Indian legal guidance. I specialize in simplifying laws, procedures, and rights under the Indian Constitution, IPC, CrPC, Consumer Protection Act, Family Law, and more. While I cannot replace a licensed advocate, I can help you understand your legal options, draft basic documents, and navigate processes . Always consult a qualified lawyer for formal advice. How can I assist you today?",
    messages,
  });

  return result.toDataStreamResponse();
}
