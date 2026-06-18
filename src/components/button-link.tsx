import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "border-[#1E3A8A] bg-[#1E3A8A] text-white hover:bg-[#172F72]",
  secondary: "border-slate-300 bg-white text-slate-950 hover:border-[#1E3A8A] hover:text-[#1E3A8A]",
  ghost: "border-transparent bg-transparent text-slate-700 hover:bg-slate-100",
};

export function ButtonLink({ href, children, variant = "primary", className = "", ...props }: ButtonLinkProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-md border px-4 py-2 text-sm font-semibold shadow-sm transition ${variants[variant]} ${className}`;

  if (!href.startsWith("/")) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
