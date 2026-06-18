import { readFile } from "node:fs/promises";
import path from "node:path";

let cachedContext: string | null = null;

export async function getBledarContext() {
  if (cachedContext) return cachedContext;
  const contextPath = path.join(process.cwd(), "data", "bledar-context.md");
  cachedContext = await readFile(contextPath, "utf8");
  return cachedContext;
}

export function localAssistantAnswer(question: string) {
  const normalized = question.toLowerCase();

  if (normalized === "what has bledar built?") {
    return "Bledar has built Loopfront, Vaenso, FutureReady, Companion, Safe Search and Employee Management, covering SaaS, AI, real-time applications, payments, dashboards and backend systems.";
  }

  if (normalized === "has bledar worked remotely with nordic teams?") {
    return "Yes. Bledar has worked remotely with Nordic teams, including Norway-focused work and collaboration across remote software engineering projects.";
  }

  if (normalized === "can i book a call with bledar?") {
    return "Yes. You can book a call with Bledar from the booking page or contact him directly to discuss a role, contract work or collaboration.";
  }

  if (normalized.includes("available") || normalized.includes("contract") || normalized.includes("remote")) {
    return "Bledar is available for freelance, contract and remote software engineering work for EU and Norway. If you want to discuss a role, booking a call or contacting him directly is the best next step.";
  }

  if (normalized.includes("next") || normalized.includes("react") || normalized.includes("frontend")) {
    return "Yes. Bledar works with React, Next.js, TypeScript, TailwindCSS, Zustand, TanStack Query and React Hook Form. Relevant projects include Loopfront, Vaenso, Safe Search and Employee Management.";
  }

  if (normalized.includes("nestjs") || normalized.includes("node") || normalized.includes("backend")) {
    return "Yes. Bledar works with Node.js, NestJS, Express.js, Fastify, REST APIs, JWT, Auth0 and backend service design. Relevant projects include Loopfront, Vaenso, FutureReady, Companion and Safe Search.";
  }

  if (normalized.includes("postgres") || normalized.includes("database") || normalized.includes("prisma") || normalized.includes("drizzle")) {
    return "Yes. Bledar works with PostgreSQL, Prisma ORM, Drizzle ORM, Supabase, SQL, migrations and indexes. Vaenso, FutureReady, Companion, Safe Search and Employee Management are relevant examples.";
  }

  if (normalized.includes("ai") || normalized.includes("openai") || normalized.includes("gemini") || normalized.includes("groq")) {
    return "Yes. Bledar has built AI-powered systems and LLM integrations with OpenAI and Claude. Relevant projects include FutureReady, Companion and Vaenso.";
  }

  if (normalized.includes("stripe") || normalized.includes("payment") || normalized.includes("subscription")) {
    return "Yes. Bledar has worked with Stripe subscriptions, billing and webhooks in the Companion AI Diary and Conversation Platform.";
  }

  if (normalized.includes("hire") || normalized.includes("why")) {
    return "Bledar is a strong fit for teams that need production-ready SaaS, AI or real-time application work across frontend, backend, databases, integrations and deployment.";
  }

  return "Bledar has worked on Loopfront, Vaenso, FutureReady, Companion, Safe Search and Employee Management. For details not covered here, contact Bledar directly or book a call.";
}
