import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, children, className = "" }: SectionProps) {
  const isDark = className.includes("text-white");

  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && (
              <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${isDark ? "text-blue-200" : "text-[#1E3A8A]"}`}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className={`mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-slate-950"}`}>
                {title}
              </h2>
            )}
            {description && <p className={`mt-4 text-base leading-7 ${isDark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
