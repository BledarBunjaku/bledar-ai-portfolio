import { NextResponse } from "next/server";
import { z } from "zod";
import { generateWithProvider } from "@/lib/ai";
import { getBledarContext } from "@/lib/context";

const requestSchema = z.object({
  jobDescription: z.string().min(80, "Paste a longer job description.").max(12000),
});

function localMatch(jobDescription: string) {
  const jd = jobDescription.toLowerCase();
  const checks = [
    ["React", jd.includes("react")],
    ["Next.js", jd.includes("next")],
    ["TypeScript", jd.includes("typescript") || jd.includes("ts")],
    ["NestJS", jd.includes("nestjs") || jd.includes("nest.js")],
    ["Node.js", jd.includes("node")],
    ["PostgreSQL", jd.includes("postgres") || jd.includes("sql")],
    ["Stripe", jd.includes("stripe") || jd.includes("subscription")],
    ["AI integrations", jd.includes("ai") || jd.includes("openai") || jd.includes("claude") || jd.includes("llm")],
    ["Real-time systems", jd.includes("socket") || jd.includes("websocket") || jd.includes("real-time") || jd.includes("sse")],
    ["Docker/Railway/CI-CD", jd.includes("docker") || jd.includes("railway") || jd.includes("deployment") || jd.includes("ci/cd")],
  ] as const;
  const strong = checks.filter(([, matched]) => matched).map(([name]) => name);
  const score = Math.min(92, 55 + strong.length * 5);

  return `Match score: ${score}%

Strong matches:
${strong.length ? strong.map((item) => `- ${item}`).join("\n") : "- Full-stack SaaS product delivery"}

Partial matches:
- Background jobs and deployment debugging are in Bledar's context, but exact production scale depends on the role.
- AI provider fit depends on whether the role uses OpenAI, Claude or another provider.

Missing or weaker areas:
- AWS, Kubernetes and other cloud platforms should be treated as missing unless the job allows Railway/Docker-oriented deployment experience.
- Any skill not listed in Bledar's portfolio context should be confirmed directly.

Relevant projects:
- Loopfront
- Vaenso
- FutureReady
- Companion
- Safe Search

Suggested short message:
Bledar looks like a strong fit because he has delivered production SaaS, AI and real-time application work using React, Next.js, NestJS, PostgreSQL, OpenAI/Claude integrations, Stripe and Socket.IO for Norway and EU projects.`;
}

export async function POST(request: Request) {
  try {
    const { jobDescription } = requestSchema.parse(await request.json());
    const context = await getBledarContext();
    const systemPrompt = `You are a job match analyzer for Bledar Bunjaku.

Use only the portfolio context below. Do not exaggerate.
Mention only skills from the context. Be honest about missing skills.
Return exactly these sections:
Match score:
Strong matches:
Partial matches:
Missing or weaker areas:
Relevant projects:
Suggested short message:

Context:
${context}`;

    const result =
      (await generateWithProvider(systemPrompt, [
        {
          role: "user",
          content: `Analyze this job description against Bledar's context:\n\n${jobDescription}`,
        },
      ])) || localMatch(jobDescription);

    return NextResponse.json({ result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid match analyzer request.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
