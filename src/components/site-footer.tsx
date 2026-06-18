import { siteConfig } from "@/data/site";
import { ButtonLink } from "./button-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
            Senior full-stack engineering for SaaS, AI product workflows, APIs, databases, payments and production delivery.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">
              {siteConfig.phone}
            </a>
            <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href="/ask" variant="secondary" className="border-white/20 bg-white text-slate-950">
            Ask assistant
          </ButtonLink>
          <ButtonLink href={siteConfig.linkedinUrl} variant="ghost" className="text-white hover:bg-white/10">
            LinkedIn
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}
