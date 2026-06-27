import type { Metadata } from "next";
import Image from "next/image";

import { CareersBoard } from "@/components/careers/careers-board";
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
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-0 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <div className="absolute inset-y-0 right-0 hidden w-[42vw] lg:block">
          <Image
            src="/assets/particle-background.png"
            alt=""
            fill
            priority
            sizes="42vw"
            className="object-cover opacity-25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,#050b12_0%,rgba(5,11,18,0.7)_38%,rgba(5,11,18,0)_100%)]"
          />
        </div>
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-4 pb-20 ">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/45">
            Careers
          </p>
          <h1 className="font-heading max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Build hardware that moves from bench to field.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Join Linear Amptech in Roorkee to work on embedded hardware, RF
            communication nodes, semiconductor prototyping, and real-world
            electronic systems.
          </p>
        </Reveal>
        <div className="relative z-10 border-t border-white/10">
          <div className="container mx-auto max-w-7xl px-4">
            <dl className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-y-0">
              <div className="border-white/10 py-6 sm:border-r sm:pr-6">
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/45">
                  Open Roles
                </dt>
                <dd className="mt-2 font-mono text-sm uppercase tracking-[0.12em] text-white/80">
                  {String(jobs.length).padStart(2, "0")} Positions
                </dd>
              </div>
              <div className="border-white/10 py-6 sm:border-r sm:px-6">
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/45">
                  Location
                </dt>
                <dd className="mt-2 font-mono text-sm uppercase tracking-[0.12em] text-white/80">
                  Roorkee · IIT
                </dd>
              </div>
              <div className="py-6 sm:pl-6">
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/45">
                  Type
                </dt>
                <dd className="mt-2 font-mono text-sm uppercase tracking-[0.12em] text-white/80">
                  On-site · Full-time
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto max-w-7xl px-4">
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
