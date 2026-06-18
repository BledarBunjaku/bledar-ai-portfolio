import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Section } from "@/components/section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Call",
  description: "Book a 20-minute intro call with Bledar Bunjaku.",
};

export default function BookPage() {
  const hasBookingUrl = Boolean(siteConfig.bookingUrl);
  const emailSubject = encodeURIComponent("Intro call with Bledar");
  const emailBody = encodeURIComponent(
    "Hi Bledar,\n\nI would like to book a 20-minute intro call.\n\nMy timezone:\nPreferred days/times:\nRole/project context:\n\nThanks,",
  );

  return (
    <Section
      eyebrow="Booking"
      title="Book a 20-minute intro call"
      description="If you are hiring for a SaaS, AI systems, real-time application or full-stack engineering role, choose a time or send your timezone and preferred slots."
      className="border-t-0"
    >
      <div className="max-w-3xl rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row">
          {hasBookingUrl ? (
            <ButtonLink href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book Google Meet
            </ButtonLink>
          ) : (
            <ButtonLink href={`mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`}>
              Request a call by email
            </ButtonLink>
          )}
          <ButtonLink href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
            Message on LinkedIn
          </ButtonLink>
        </div>
        <p className="mt-5 text-sm text-slate-500">
          {hasBookingUrl
            ? "The booking page should show times in your local timezone and create an online meeting automatically."
            : "The public scheduler link is being updated. Email Bledar with your timezone and preferred times to arrange a call."}
        </p>
        <div className="mt-6 border-t border-slate-200 pt-5">
          <p className="text-sm font-semibold text-slate-950">Direct contact</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
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
        </div>
      </div>
    </Section>
  );
}
