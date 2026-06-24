import type { Metadata } from "next";

import { CareersBoard } from "@/components/careers/careers-board";
import { Reveal } from "@/components/landing/reveal";

export const metadata: Metadata = {
  title: "Careers | Linear Amptech",
  description:
    "Explore open roles at Linear Amptech across embedded hardware, electronics engineering, RF systems, and semiconductor R&D.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgb(16_199_232_/_0.18),transparent_28%),radial-gradient(circle_at_18%_76%,rgb(110_225_93_/_0.1),transparent_26%),linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
            Careers
          </p>
          <h1 className="font-heading max-w-5xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            Build hardware that moves from bench to field.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Join Linear Amptech in Roorkee to work on embedded hardware, RF
            communication nodes, semiconductor prototyping, and real-world
            electronic systems.
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
              Open Roles
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
              Career paths aligned with RF engineering and product delivery.
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg">
              Browse current openings, review role details, and submit an
              application directly from the job board.
            </p>
          </Reveal>
          <CareersBoard />
        </div>
      </section>
    </main>
  );
}
