export const allowedChatQuestions = [
  "What has Bledar built?",
  "Does Bledar know Next.js?",
  "Has Bledar worked with PostgreSQL?",
  "Has Bledar built AI products?",
  "Has Bledar worked with Stripe?",
  "Has Bledar worked remotely with Nordic teams?",
  "Why should we hire Bledar?",
  "Can I book a call with Bledar?",
] as const;

export function isAllowedChatQuestion(question: string) {
  return allowedChatQuestions.includes(question.trim() as (typeof allowedChatQuestions)[number]);
}
