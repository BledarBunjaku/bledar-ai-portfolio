import Image from "next/image";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";
import { ButtonLink } from "./button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src={siteConfig.profileImageUrl}
            alt="Bledar Bunjaku"
            width={48}
            height={48}
            priority
            className="h-12 w-12 shrink-0 rounded-md object-cover object-[center_28%]"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-semibold text-slate-950">{siteConfig.name}</span>
            <span className="block truncate text-xs text-slate-500">{siteConfig.role} / Available for contract work</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
          >
            LinkedIn
          </a>
          <ButtonLink href={`mailto:${siteConfig.email}`} className="hidden lg:inline-flex">
            Email
          </ButtonLink>
        </div>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-slate-200 px-4 py-2 md:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={siteConfig.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-950"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}
