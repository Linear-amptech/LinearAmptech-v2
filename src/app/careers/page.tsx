import type { Metadata } from "next";

import { CareersBoard } from "@/components/careers/careers-board";
import { HeroThreads } from "@/components/layout/hero-threads";
import { Reveal } from "@/components/landing/reveal";
import { jobs } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Careers | Linear Amptech",
  description:
    "Explore open roles at Linear Amptech across embedded hardware, electronics engineering, RF systems, and semiconductor R&D.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative overflow-hidden border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pb-16 pt-32">
        <HeroThreads />
        <Reveal className="container relative mx-auto max-w-7xl px-4">
          <p className="kicker mb-4">Careers</p>
          <h1 className="font-heading max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
            Build hardware that moves from bench to field.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-text-muted)] xl:text-xl">
            Join Linear Amptech in Roorkee to work on embedded hardware, RF
            communication nodes, semiconductor prototyping, and real-world
            electronic systems.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-[color:var(--color-border)]">
        <Reveal className="container mx-auto max-w-7xl px-4">
          <dl className="grid grid-cols-1 divide-y divide-[color:var(--color-border)] sm:grid-cols-3 sm:divide-y-0">
            <div className="flex flex-col gap-3 border-[color:var(--color-border)] py-6 sm:border-r sm:py-9 sm:pr-6">
              <dt className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                <span
                  aria-hidden="true"
                  className="h-[2px] w-[18px] bg-[color:var(--color-primary)]"
                />
                Open Roles
              </dt>
              <dd className="text-xl font-semibold leading-snug tracking-tight text-[color:var(--color-text)] sm:text-2xl">
                {String(jobs.length).padStart(2, "0")} Positions
              </dd>
            </div>
            <div className="flex flex-col gap-3 border-[color:var(--color-border)] py-6 sm:border-r sm:px-6 sm:py-9">
              <dt className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                <span
                  aria-hidden="true"
                  className="h-[2px] w-[18px] bg-[color:var(--color-primary)]"
                />
                Location
              </dt>
              <dd className="text-xl font-semibold leading-snug tracking-tight text-[color:var(--color-text)] sm:text-2xl">
                Roorkee · IIT
              </dd>
            </div>
            <div className="flex flex-col gap-3 py-6 sm:py-9 sm:pl-6">
              <dt className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                <span
                  aria-hidden="true"
                  className="h-[2px] w-[18px] bg-[color:var(--color-primary)]"
                />
                Type
              </dt>
              <dd className="text-xl font-semibold leading-snug tracking-tight text-[color:var(--color-text)] sm:text-2xl">
                On-site · Full-time
              </dd>
            </div>
          </dl>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <Reveal className="max-w-3xl">
            <p className="kicker mb-4">Open Roles</p>
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
              Career paths aligned with RF engineering and product delivery.
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg xl:text-xl">
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
