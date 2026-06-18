"use client";

import { useEffect, useState } from "react";

type ScrollSummaryBarProps = {
  title: string;
  subtitle: string;
};

export function ScrollSummaryBar({ title, subtitle }: ScrollSummaryBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > 170);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-[8.25rem] z-20 border-b border-[#172F72] bg-[#1E3A8A] text-white shadow-md transition duration-200 md:top-20 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p className="text-sm font-semibold sm:text-base">{title}</p>
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-blue-100 sm:text-sm">{subtitle}</p>
      </div>
    </div>
  );
}
