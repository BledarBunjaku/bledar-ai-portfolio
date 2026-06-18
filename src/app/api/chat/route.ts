import { NextResponse } from "next/server";
import { z } from "zod";
import { generateWithProvider, streamText } from "@/lib/ai";
import { allowedChatQuestions, isAllowedChatQuestion } from "@/lib/chat-questions";
import { getBledarContext, localAssistantAnswer } from "@/lib/context";

const requestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(2000),
      }),
    )
    .min(1)
    .max(12),
});

export async function POST(request: Request) {
  try {
    const payload = requestSchema.parse(await request.json());
    const context = await getBledarContext();
    const lastUserMessage = [...payload.messages].reverse().find((message) => message.role === "user")?.content || "";
    const hasUnsupportedQuestion = payload.messages.some(
      (message) => message.role === "user" && !isAllowedChatQuestion(message.content),
    );

    if (!isAllowedChatQuestion(lastUserMessage) || hasUnsupportedQuestion) {
      return NextResponse.json(
        {
          error: "This AI assistant can only answer the suggested questions. The next version will include a more enhanced chatbot.",
        },
        { status: 400 },
      );
    }

    const systemPrompt = `You are the AI assistant for Bledar Bunjaku's portfolio.

Only answer if the visitor asks one of these exact questions:
${allowedChatQuestions.map((question) => `- ${question}`).join("\n")}

Use only the context below. Do not invent facts.
Keep answers short, professional and useful for recruiters, CTOs and founders.
If unsure, say the detail is not available here and suggest contacting Bledar directly.
Suggest relevant projects when useful.
If asked about availability, mention Bledar is open to remote full-stack or contract work.
If the visitor wants to talk, suggest booking a call.

Context:
${context}`;

    const providerAnswer = await generateWithProvider(systemPrompt, payload.messages);
    const answer = providerAnswer || localAssistantAnswer(lastUserMessage);

    return new Response(streamText(answer), {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid assistant request.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
