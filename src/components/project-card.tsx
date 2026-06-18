import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
      <div className="flex h-full flex-col">
        <div>
          <h3 className="font-serif text-xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{project.shortDescription}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 8).map((item) => (
            <span key={item} className="rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-900">
              {item}
            </span>
          ))}
        </div>
        <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
          {project.responsibilities.slice(0, 3).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E3A8A]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#1E3A8A] bg-[#1E3A8A] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#172F72]"
          >
            Read case study
          </Link>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
            >
              Live site
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
