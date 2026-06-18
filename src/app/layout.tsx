import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bledar-ai-portfolio.up.railway.app"),
  title: {
    default: `${siteConfig.name} | Software Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Software engineer building scalable SaaS platforms, AI systems and real-time applications with React, Next.js, NestJS and PostgreSQL.",
  openGraph: {
    title: `${siteConfig.name} | Software Engineer`,
    description:
      "Portfolio platform with Norway SaaS projects, CV, AI assistant and job match analyzer.",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Software Engineer`,
    description: "SaaS platforms, AI systems, real-time applications and production delivery.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-950">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
