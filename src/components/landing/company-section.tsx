"use client";

import { useEffect, useRef, useState } from "react";

import { CompanyScrollVideo } from "@/components/landing/company-scroll-video";

type CompanySectionProps = {
  children: React.ReactNode;
};
//

export function CompanySection({ children }: CompanySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  // SSR-safe default: assume motion is allowed; refine on the client. deployed
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
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:px-4 ">
          <div>{children}</div>
          <div className="relative min-h-[500px] overflow-hidden rounded-[var(--radius-card)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/company/scrub/poster.webp"
              alt="Semiconductor wafer visual for Linear-AmpTech"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="scrub-edge-fade" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="company"
        ref={sectionRef}
        className="relative h-[240svh] lg:h-[200vh]"
      >
        <div className="sticky top-0 flex min-h-svh items-center bg-[color:var(--color-bg)] pt-16 pb-8 lg:min-h-screen lg:pb-10 lg:pt-20">
          <div className="container mx-auto flex w-full flex-col items-center justify-center gap-6 bg-[color:var(--color-bg)] px-4 lg:flex-row lg:justify-between lg:gap-12 lg:px-4">
            <div className="hidden w-full lg:order-1 lg:block">{children}</div>
            {/* On mobile the pinned viewport is reserved for the scrubbed
                sequence; the text follows after the animation completes. */}
            <div className="relative order-1 aspect-[9/16] w-[min(98vw,calc(98svh*9/16),320px)] max-w-full overflow-hidden rounded-[var(--radius-card)] sm:w-[min(98vw,calc(98svh*9/16),390px)] lg:order-2 lg:h-auto lg:max-h-[78vh] lg:w-full lg:max-w-[460px]">
              <CompanyScrollVideo scrollTargetRef={sectionRef} />
              <div className="scrub-edge-fade" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[color:var(--color-bg)] px-4 pt-4 pb-20 lg:hidden">
        <div className="container mx-auto">{children}</div>
      </section>
    </>
  );
}
