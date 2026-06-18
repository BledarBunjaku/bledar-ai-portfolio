import type { Metadata } from "next";
import { ChatClient } from "@/components/chat-client";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "AI Assistant",
  description: "Ask a grounded AI assistant about Bledar Bunjaku's work, projects, skills and availability.",
};

export default function AskPage() {
  return (
    <Section
      eyebrow="AI assistant"
      title="Ask about Bledar's work"
      description="Answers are generated from the local portfolio context and are instructed not to invent facts."
      className="border-t-0"
    >
      <ChatClient />
    </Section>
  );
}

