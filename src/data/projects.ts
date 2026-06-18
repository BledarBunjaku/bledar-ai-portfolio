export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  stack: string[];
  responsibilities: string[];
  overview: string;
  problem: string;
  role: string;
  features: string[];
  architecture: string[];
  decisions: string[];
  challenges: string[];
  results: string[];
  improvements: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "loopfront",
    title: "Loopfront Circular Economy SaaS Platform",
    shortDescription:
      "Production SaaS platform used by enterprises and public-sector organizations to reuse materials and reduce environmental impact.",
    stack: ["React", "TypeScript", "ASP.NET", "AI integrations", "REST APIs", "SaaS architecture"],
    url: "https://www.loopfront.com",
    responsibilities: [
      "Developed full-stack features for real-world production usage.",
      "Built scalable backend services and APIs for core platform workflows.",
      "Integrated AI-assisted workflows into production platform features.",
      "Worked on marketplace, resource management, data workflows and platform architecture.",
    ],
    overview:
      "Loopfront is a Norway-based circular economy SaaS platform that helps organizations manage reuse of materials and reduce environmental impact.",
    problem:
      "Enterprise and public-sector users need dependable workflows for resource reuse, marketplace-style coordination and structured data management.",
    role:
      "Bledar contributed full-stack features using React, TypeScript and ASP.NET, working on production-ready platform workflows.",
    features: [
      "Marketplace and resource management flows",
      "Scalable backend APIs",
      "Production SaaS workflows",
      "AI-assisted platform workflows",
      "Structured data workflows",
      "Enterprise and public-sector usage",
    ],
    architecture: [
      "React and TypeScript frontend.",
      "ASP.NET backend services.",
      "API-driven SaaS platform architecture.",
    ],
    decisions: [
      "Focused on maintainable production features.",
      "Kept backend workflows modular and API-oriented.",
      "Worked within an existing production SaaS architecture.",
    ],
    challenges: [
      "Supporting real-world enterprise workflows.",
      "Keeping data flows reliable across resource and marketplace features.",
    ],
    results: [
      "Contributed production features to a live Norwegian SaaS platform.",
      "Helped deliver scalable backend services and user-facing workflows.",
    ],
    improvements: [
      "Continue documenting measurable feature impact and performance metrics.",
      "Expand automated regression coverage around high-value platform workflows.",
    ],
  },
  {
    slug: "vaenso",
    title: "Vaenso Energy Analytics and Service Platform",
    shortDescription:
      "Full-stack energy platform connecting consumers and service providers for energy optimization, metering and facility management.",
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "OpenAI", "Anthropic", "SSE", "S3-compatible storage", "Domain-Driven Design", "File uploads"],
    url: "https://app.dev.vaenso.no",
    responsibilities: [
      "Built backend services for energy metering and facility management.",
      "Designed modular backend architecture using Domain-Driven Design.",
      "Implemented AI chatbot features, onboarding flows, SSE engagement and file uploads.",
    ],
    overview:
      "Vaenso is a Norway-based energy analytics and service platform with dashboards, onboarding, backend services and AI-assisted user workflows.",
    problem:
      "Energy platforms need reliable onboarding, integrations, metering workflows, facility data and responsive user-facing dashboards.",
    role:
      "Bledar worked across backend architecture, APIs, AI chatbot features, onboarding flows and frontend dashboards.",
    features: [
      "Energy metering and facility management services",
      "Onboarding system with external Elhub integration",
      "AI chatbot with multi-provider support",
      "Real-time engagement using Server-Sent Events",
      "File upload system with S3-compatible storage",
      "Frontend dashboards",
    ],
    architecture: [
      "React and TypeScript frontend.",
      "NestJS backend with modular Domain-Driven Design.",
      "PostgreSQL persistence.",
      "LLM provider integrations with OpenAI and Anthropic.",
      "SSE for real-time engagement.",
    ],
    decisions: [
      "Used modular backend architecture for maintainability.",
      "Supported multiple AI providers rather than locking the product to one model vendor.",
      "Used SSE where server-to-client engagement updates were sufficient.",
    ],
    challenges: [
      "Integrating external energy data workflows.",
      "Coordinating AI chatbot behavior with product-specific user flows.",
      "Keeping onboarding and dashboard features coherent across the stack.",
    ],
    results: [
      "Delivered backend services, APIs, onboarding and dashboard functionality for a real energy platform.",
      "Added AI-assisted features and real-time engagement capability.",
    ],
    improvements: [
      "Add deeper monitoring around external integration failures.",
      "Document measurable AI chatbot usage and success metrics.",
    ],
  },
  {
    slug: "futureready",
    title: "FutureReady AI Coaching and Performance Platform",
    shortDescription:
      "AI-driven platform for conversation analysis, intelligent feedback, recommendations and performance improvement.",
    stack: ["NestJS", "PostgreSQL", "AI integrations", "Real-time processing", "Analytics", "Conversation analysis", "Recommendation systems"],
    url: "https://futureready.ai",
    responsibilities: [
      "Developed backend services for processing conversational data.",
      "Integrated AI-powered insights, feedback and recommendation systems.",
      "Contributed to scalable architecture for real-time processing and analytics.",
    ],
    overview:
      "FutureReady is a Norway-based AI coaching platform that analyzes conversations to provide coaching, insights and measurable performance improvements.",
    problem:
      "Conversation-heavy teams need structured analysis, useful feedback and performance insights from unstructured dialogue data.",
    role:
      "Bledar contributed backend services, AI-powered insight workflows and scalable processing architecture.",
    features: [
      "Conversation analysis workflows",
      "AI-driven feedback",
      "Recommendation systems",
      "Analytics workflows",
      "Real-time and performance-focused architecture",
    ],
    architecture: [
      "NestJS backend services.",
      "PostgreSQL data layer.",
      "AI integration layer for insights and recommendations.",
      "Processing workflows for conversational data.",
    ],
    decisions: [
      "Built backend services around structured processing of conversation data.",
      "Focused AI usage on feedback and recommendation workflows.",
      "Designed with scalability and performance in mind.",
    ],
    challenges: [
      "Turning conversational data into useful, structured product insights.",
      "Balancing AI workflows with reliable backend processing.",
    ],
    results: [
      "Contributed to an AI product focused on coaching, feedback and measurable improvement.",
      "Built backend functionality supporting AI-powered analysis.",
    ],
    improvements: [
      "Add more transparent evaluation metrics for AI recommendations.",
      "Expand observability around processing latency and quality.",
    ],
  },
  {
    slug: "companion",
    title: "Companion AI Diary and Conversation Platform",
    shortDescription:
      "AI-powered SaaS platform for conversational interaction, structured diary generation, subscriptions and billing.",
    stack: ["NestJS", "PostgreSQL", "React", "OpenAI", "Claude", "Stripe", "Webhooks", "Session handling"],
    url: "https://com2.ai",
    responsibilities: [
      "Built AI conversation engine with session handling.",
      "Designed diary generation from conversations.",
      "Integrated Stripe subscriptions, billing and webhooks.",
    ],
    overview:
      "Companion is a Norway-based AI diary and conversation platform combining AI conversations, structured diary generation and subscription billing.",
    problem:
      "The product needed reliable AI conversations, diary generation and paid subscription workflows inside one SaaS platform.",
    role:
      "Bledar developed the AI conversation engine, backend APIs, database models, diary generation and Stripe subscription flows.",
    features: [
      "AI conversation engine",
      "Session handling",
      "Diary generation from conversations",
      "Stripe subscriptions",
      "Billing and webhooks",
      "Backend APIs and database models",
      "AI-generated summaries",
    ],
    architecture: [
      "React frontend.",
      "NestJS backend services.",
      "PostgreSQL database.",
      "OpenAI and Claude API integrations.",
      "Stripe billing and webhook integration.",
    ],
    decisions: [
      "Used backend services to keep conversation, diary and billing logic separated.",
      "Used Stripe webhooks for subscription and billing status changes.",
      "Integrated multiple AI providers where useful for product capability.",
    ],
    challenges: [
      "Coordinating AI session state with diary generation.",
      "Keeping billing state reliable across webhook events.",
      "Designing AI-generated output that stays useful for users.",
    ],
    results: [
      "Delivered AI conversation, diary and subscription functionality for a SaaS product.",
      "Created backend foundations for AI-powered user workflows.",
    ],
    improvements: [
      "Add richer AI evaluation and safety checks.",
      "Expand tests around billing and AI session edge cases.",
    ],
  },
  {
    slug: "safe-search",
    title: "Safe Search Search and Rescue Platform",
    shortDescription:
      "Real-time system for coordinating search and rescue operations with geospatial workflows and GPS communication.",
    stack: ["React", "NestJS", "PostgreSQL", "Socket.IO", "React Leaflet", "Leaflet", "Prisma", "GPS tracking"],
    url: "https://safesearch.no",
    responsibilities: [
      "Developed map-based geospatial workflows using React and React Leaflet.",
      "Implemented real-time GPS tracking and communication with Socket.IO.",
      "Built backend services using NestJS, PostgreSQL and Prisma.",
    ],
    overview:
      "Safe Search is a Norway and EU project focused on real-time coordination for search and rescue operations.",
    problem:
      "Search and rescue teams need reliable live communication, GPS tracking and map-based workflows for operational coordination.",
    role:
      "Bledar worked on geospatial frontend workflows, real-time communication and backend services.",
    features: [
      "Map-based geospatial workflows",
      "React Leaflet integration",
      "Real-time GPS tracking",
      "Socket.IO communication",
      "Backend services",
      "Performance optimization for large datasets",
    ],
    architecture: [
      "React frontend with Leaflet mapping.",
      "NestJS backend services.",
      "PostgreSQL and Prisma data layer.",
      "Socket.IO for real-time communication.",
    ],
    decisions: [
      "Used Socket.IO for bidirectional real-time communication.",
      "Used Leaflet for geospatial map features.",
      "Focused performance work on large operational datasets.",
    ],
    challenges: [
      "Keeping map workflows responsive with large datasets.",
      "Handling live GPS and communication data in operational contexts.",
    ],
    results: [
      "Delivered real-time and geospatial functionality for a search and rescue platform.",
      "Built backend and frontend pieces for operational coordination.",
    ],
    improvements: [
      "Add more offline and low-connectivity handling where needed.",
      "Document performance benchmarks for large datasets.",
    ],
  },
  {
    slug: "employee-management",
    title: "Employee Management and CV Generation System",
    shortDescription:
      "Full-stack system for managing employee data and generating structured CV and portfolio documents.",
    stack: ["React", "NestJS", "PostgreSQL", "Dynamic forms", "Document generation"],
    responsibilities: [
      "Designed backend architecture and structured data flows.",
      "Implemented CV generation logic.",
      "Built dynamic frontend forms and workflows.",
    ],
    overview:
      "A Norway-based internal platform for managing employee data and producing structured CV and portfolio documents.",
    problem:
      "Teams need structured employee data and repeatable document generation without manual formatting work.",
    role:
      "Bledar built frontend forms, backend services, data flows and document generation logic.",
    features: [
      "Employee data management",
      "Dynamic frontend forms",
      "Structured CV generation",
      "Portfolio document generation",
      "Backend services",
      "PostgreSQL persistence",
    ],
    architecture: [
      "React frontend forms and workflows.",
      "NestJS backend services.",
      "PostgreSQL structured data model.",
      "Document generation logic built from structured inputs.",
    ],
    decisions: [
      "Used structured data flows to keep generated documents consistent.",
      "Separated form workflows from backend generation logic.",
      "Kept the system focused on repeatable document output.",
    ],
    challenges: [
      "Capturing flexible employee profile data in structured forms.",
      "Generating consistent documents from changing source data.",
    ],
    results: [
      "Delivered a full-stack employee management and CV generation system.",
      "Reduced manual work needed to produce structured profile documents.",
    ],
    improvements: [
      "Add richer template management.",
      "Add approval flows for generated profile updates.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
