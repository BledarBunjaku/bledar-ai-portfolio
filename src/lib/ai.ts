type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function generateWithProvider(systemPrompt: string, messages: ChatMessage[]) {
  if (process.env.GROQ_API_KEY) {
    return generateWithGroq(systemPrompt, messages);
  }

  if (process.env.GEMINI_API_KEY) {
    return generateWithGemini(systemPrompt, messages);
  }

  return null;
}

async function generateWithGroq(systemPrompt: string, messages: ChatMessage[]) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.GROQ_MODEL || "llama-3.1-8b-instant",
      temperature: 0.2,
      max_tokens: 700,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((message) => ({ role: message.role, content: message.content })),
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Groq request failed with ${response.status}`);
  }

  const payload = await response.json();
  return payload.choices?.[0]?.message?.content?.trim() || "";
}

async function generateWithGemini(systemPrompt: string, messages: ChatMessage[]) {
  const model = process.env.GEMINI_MODEL || "gemini-1.5-flash";
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemPrompt }],
        },
        contents: messages.map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }],
        })),
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 700,
        },
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Gemini request failed with ${response.status}`);
  }

  const payload = await response.json();
  return payload.candidates?.[0]?.content?.parts?.map((part: { text?: string }) => part.text || "").join("").trim() || "";
}

export function streamText(text: string) {
  const encoder = new TextEncoder();
  const chunks = text.match(/\S+\s*/g) || [text];

  return new ReadableStream({
    async start(controller) {
      for (const chunk of chunks) {
        controller.enqueue(encoder.encode(chunk));
        await new Promise((resolve) => setTimeout(resolve, 12));
      }
      controller.close();
    },
  });
}

