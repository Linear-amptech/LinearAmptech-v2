import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, RadioTower } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import {
  rfPowerAmplifierCategories,
  rfPowerAmplifierIntro,
} from "@/components/products/rf-power-amplifiers-data";

export const metadata: Metadata = {
  title: "RF & mm-Wave Power Amplifiers | Linear Amptech",
  description:
    "Linear Amptech RF and mm-wave power amplifier categories, including Hybrid MIC PA modules and GaN-on-SiC MMIC PA chips.",
};

const categoryIcons: Record<string, LucideIcon> = {
  "hybrid-mic-power-amplifier-modules": RadioTower,
  "gan-on-sic-mmic-pa-chips": Cpu,
};

export default function RfPowerAmplifiersPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-4">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            RF Product Line
          </p>
          <h1 className="font-heading max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            RF & mm-Wave Power Amplifiers
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {rfPowerAmplifierIntro.description}
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <Reveal className="container mx-auto max-w-7xl px-4 lg:px-4">
          <div className="mb-10">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
              Categories
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
              Select a power amplifier family
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {rfPowerAmplifierCategories.map((category) => {
              const Icon = categoryIcons[category.slug] ?? RadioTower;

              return (
                <Link
                  key={category.slug}
                  href={category.href}
                  className="group flex min-h-80 flex-col rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7 shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(15_23_42/0.10)]"
                >
                  <div className="grid size-14 place-items-center rounded-xl border border-[color:var(--color-border)] bg-slate-50 text-slate-700">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <p className="mt-7 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                    {category.eyebrow}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                    {category.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[color:var(--color-text-muted)]">
                    {category.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-3 py-1.5 text-sm font-medium text-[color:var(--color-text-muted)]"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-[color:var(--color-text)] transition-colors group-hover:text-slate-600">
                    View
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
