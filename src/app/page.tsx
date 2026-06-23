import { ProjectCard } from "@/components/project-card";
import { ScrollSummaryBar } from "@/components/scroll-summary-bar";
import { Section } from "@/components/section";
import { projects } from "@/data/projects";

const productionStack = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "AI integration",
  "OpenAI",
  "Claude",
  "React Hook Form",
  "Zustand",
  "TanStack Query",
  "NestJS",
  "Express",
  "ASP.NET",
  "REST APIs",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Drizzle",
  "Supabase",
  "Stripe",
  "Socket.IO",
  "Leaflet",
  "React Leaflet",
  "CI/CD",
  "Deployment",
  "Docker",
  "Git",
  "WebSockets",
];

export default function Home() {
  return (
    <>
      <ScrollSummaryBar
        title="Software Engineer building end-to-end SaaS and AI products"
        subtitle="Remote / consultant / contractor - CET"
      />
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h1 className="mx-auto max-w-4xl text-center text-2xl font-normal tracking-tight text-[#0F172A] sm:text-3xl">
            Software Engineer building end-to-end SaaS and AI products
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base font-medium uppercase leading-7 text-slate-900 sm:text-2xl sm:leading-8">
            Remote / consultant / contractor - CET
          </p>

          <div className="mt-10 px-7 text-center rounded-lg border border-slate-200 bg-[#FAFAF8] p-5">
            <p className="text-sm font-semibold text-slate-950">Experience/Skills</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {productionStack.map((item) => (
                <span key={item} className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-sm font-medium text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section title="Projects" className="bg-[#FAFAF8]">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

    </>
  );
}
