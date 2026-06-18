import type { Metadata } from "next";
import { MatchClient } from "@/components/match-client";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Job Match Analyzer",
  description: "Paste a job description and compare it against Bledar Bunjaku's portfolio context.",
};

export default function MatchPage() {
  return (
    <Section
      eyebrow="Job match"
      title="Analyze how Bledar matches a role"
      description="Paste a job description to get an honest structured fit summary, including strong matches and weaker areas."
      className="border-t-0"
    >
      <MatchClient />
    </Section>
  );
}

