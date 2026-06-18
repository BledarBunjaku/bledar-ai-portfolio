"use client";

import { FormEvent, useState } from "react";
import { allowedChatQuestions } from "@/lib/chat-questions";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function ChatClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function ask(question: string) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion || isLoading) return;

    setError("");
    setIsLoading(true);
    const nextMessages: Message[] = [...messages, { role: "user", content: cleanQuestion }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!response.ok || !response.body) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "The assistant could not answer right now.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        setMessages([...nextMessages, { role: "assistant", content: answer }]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected assistant error.");
      setMessages(nextMessages);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-950">Suggested questions</p>
        <p className="mt-2 text-xs leading-5 text-slate-600">
          This AI assistant can only answer these questions for now.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          {allowedChatQuestions.map((question) => (
            <button
              key={question}
              type="button"
              onClick={() => ask(question)}
              className="rounded-md border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700 transition hover:border-blue-300 hover:text-slate-950"
            >
              {question}
            </button>
          ))}
        </div>
      </aside>
      <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="min-h-[420px] space-y-4 p-4 sm:p-6">
          {messages.length === 0 ? (
            <div className="flex min-h-[340px] items-center justify-center text-center">
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Ask about Bledar&apos;s work</h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                  Choose one of the suggested questions. The next version will include a more enhanced chatbot.
                </p>
              </div>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[86%] rounded-lg px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto bg-slate-950 text-white"
                    : "bg-slate-100 text-slate-800"
                }`}
              >
                {message.content || (isLoading ? "Thinking..." : "")}
              </div>
            ))
          )}
        </div>
        {error && <p className="border-t border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-t border-slate-200 p-4 sm:flex-row">
          <input
            value="Free-form questions are disabled for this version."
            disabled
            aria-label="Free-form questions are disabled"
            title="This AI assistant can only answer the suggested questions for now. The next version will include a more enhanced chatbot."
            className="min-h-11 flex-1 rounded-md border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-500 outline-none"
          />
          <div className="flex gap-2">
            <span
              title="This AI assistant can only answer the suggested questions for now. The next version will include a more enhanced chatbot."
              className="inline-flex"
            >
              <button
                type="submit"
                disabled
                className="min-h-11 rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send
              </button>
            </span>
            <button
              type="button"
              onClick={() => {
                setMessages([]);
                setError("");
              }}
              className="min-h-11 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-500"
            >
              Clear
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
