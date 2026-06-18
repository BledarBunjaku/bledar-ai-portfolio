import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  description: "Bledar Bunjaku CV PDF.",
};

export default function CvPage() {
  return (
    <Section
      eyebrow="CV"
      title="Bledar Bunjaku CV"
      description="Download or review Bledar's software engineering CV."
      className="border-t-0 bg-white"
    >
      <div className="mb-6 flex flex-col gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
          <a href={`mailto:${siteConfig.email}`} className="font-medium text-[#1E3A8A] hover:text-[#172F72]">
            {siteConfig.email}
          </a>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="font-medium text-[#1E3A8A] hover:text-[#172F72]">
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#1E3A8A] hover:text-[#172F72]"
          >
            LinkedIn
          </a>
        </div>
        <ButtonLink href={siteConfig.cvUrl} target="_blank" rel="noopener noreferrer">
          Download CV
        </ButtonLink>
      </div>
      <iframe
        src={siteConfig.cvUrl}
        title="Bledar Bunjaku CV"
        className="h-[80vh] w-full rounded-lg border border-slate-200 bg-white"
      />
    </Section>
  );
}
