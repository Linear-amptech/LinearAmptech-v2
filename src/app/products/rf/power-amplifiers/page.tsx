import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {rfPowerAmplifierCategories.map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(15_23_42/0.10)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--color-surface-soft)]">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex min-h-[2.5em] items-start font-heading text-2xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                    {category.title}
                  </h3>
                  <div className="mt-4">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-600">
                      Operating band
                    </p>
                    <p className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--color-text)]">
                      {category.operatingBand}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[color:var(--color-text)] transition-colors group-hover:text-slate-600">
                    View product
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
