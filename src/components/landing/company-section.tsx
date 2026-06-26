"use client";

import { useEffect, useRef, useState } from "react";

import { CompanyScrollVideo } from "@/components/landing/company-scroll-video";

type CompanySectionProps = {
  children: React.ReactNode;
};

export function CompanySection({ children }: CompanySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  // SSR-safe default: assume motion is allowed; refine on the client.
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (reduced) {
    return (
      <section id="company" className="py-24">
        <div className="container mx-auto grid gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>{children}</div>
          <div className="relative min-h-[500px] overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] shadow-[var(--shadow-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/company-scrub/poster.webp"
              alt="Semiconductor wafer visual for Linear-AmpTech"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="company" ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex min-h-screen items-center pt-20 pb-8 lg:pt-24 lg:pb-12 bg-[#f1f2f5]">
        <div className="container mx-auto flex w-full justify-between items-center gap-8 px-5 lg:gap-12 lg:px-8 bg-[#f1f2f5]">
          {/* On mobile the video leads (order-1) so the scrubbing frame stays in
              view while pinned; on desktop it returns to the right column. */}
          <div className="order-2 w-full lg:order-1">{children}</div>
          <div className="relative order-1 w-full justify-end   h-[46vh] sm:h-[52vh] lg:order-2 lg:h-auto lg:aspect-[9/16] lg:max-h-[90vh] max-w-[500px]">
            <CompanyScrollVideo scrollTargetRef={sectionRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
