import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { getProject, projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6">
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E3A8A]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <ButtonLink href="/" variant="secondary" className="mb-8">
            Back to home
          </ButtonLink>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{project.overview}</p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-[#1E3A8A] hover:text-[#172F72]"
            >
              Visit project site
            </a>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E3A8A]">Role</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{project.role}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E3A8A]">What to verify</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{project.responsibilities[0]}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E3A8A]">Result</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{project.results[0]}</p>
            </div>
          </div>
        </div>
      </section>
      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-950">Problem</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{project.problem}</p>
          </section>
          <section className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-950">My role</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">{project.role}</p>
          </section>
          <DetailBlock title="Main features" items={project.features} />
          <DetailBlock title="Architecture" items={project.architecture} />
          <DetailBlock title="Technical decisions" items={project.decisions} />
          <DetailBlock title="Challenges" items={project.challenges} />
          <DetailBlock title="Results or impact" items={project.results} />
          <DetailBlock title="What I would improve next" items={project.improvements} />
        </div>
      </Section>
    </>
  );
}
