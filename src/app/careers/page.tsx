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
          className="absolute inset-0 bg-[linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/45">
            Careers
          </p>
          <h1 className="font-heading max-w-5xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-7xl">
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
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
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
