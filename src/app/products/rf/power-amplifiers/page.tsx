import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  rfPowerAmplifierIntro,
  rfPowerAmplifierTableRows,
} from "@/components/products/rf-power-amplifiers-data";
import { Reveal } from "@/components/landing/reveal";

export const metadata: Metadata = {
  title: "RF Power Amplifiers | Linear Amptech",
  description:
    "Linear Amptech RF power amplifier catalog with product images, table data, and detailed pages.",
};

export default function RfPowerAmplifiersPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgb(16_199_232_/_0.2),transparent_30%),radial-gradient(circle_at_16%_78%,rgb(110_225_93_/_0.1),transparent_26%),linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
            RF Product Line
          </p>
          <h1 className="font-heading max-w-5xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            {rfPowerAmplifierIntro.title}
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            {rfPowerAmplifierIntro.description}
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <section className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[color:var(--color-border)] pb-5">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-[color:var(--color-text)]">
                    RF Power Amplifier Lineup
                  </h2>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full text-left text-sm text-[color:var(--color-text-muted)]">
                  <thead className="bg-[color:var(--color-surface-soft)] text-xs uppercase tracking-[0.18em] text-[color:var(--color-text)]">
                    <tr>
                      <th className="rounded-l-2xl px-4 py-4">Part Number</th>
                      <th className="px-4 py-4">Center Frequency (Ghz)</th>
                      <th className="px-4 py-4">Output Power (W)</th>
                      <th className="px-4 py-4">Efficiency</th>
                      <th className="px-4 py-4">Gain (dB)</th>
                      <th className="px-4 py-4">Type Mode of Operation</th>
                      <th className="rounded-r-2xl px-4 py-4">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rfPowerAmplifierTableRows.map((row) => (
                      <tr
                        key={row.partNumber}
                        className="border-b border-[color:var(--color-border)] last:border-b-0"
                      >
                        <td className="px-4 py-4 font-semibold text-[color:var(--color-text)]">
                          {row.slug ? (
                            <Link
                              href={`/products/rf/power-amplifiers/${row.slug}`}
                              className="transition-colors hover:text-[color:var(--color-primary-deep)]"
                            >
                              {row.partNumber}
                            </Link>
                          ) : (
                            row.partNumber
                          )}
                        </td>
                        <td className="px-4 py-4">{row.centerFrequencyGhz}</td>
                        <td className="px-4 py-4">{row.outputPowerW}</td>
                        <td className="px-4 py-4">{row.efficiency}</td>
                        <td className="px-4 py-4">{row.gainDb}</td>
                        <td className="px-4 py-4">{row.modeOfOperation}</td>
                        <td className="px-4 py-4">
                          {row.slug ? (
                            <Link
                              href={`/products/rf/power-amplifiers/${row.slug}`}
                              className="inline-flex items-center gap-2 font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary)]"
                            >
                              Link
                              <ChevronRight
                                className="size-4"
                                aria-hidden="true"
                              />
                            </Link>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
