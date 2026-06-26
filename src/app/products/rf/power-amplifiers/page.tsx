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
          className="absolute inset-0 bg-[linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            RF Product Line
          </p>
          <h1 className="font-heading max-w-5xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-7xl">
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
            <section className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[color:var(--color-border)] pb-5">
                <div>
                  <h2 className="font-heading text-3xl font-bold tracking-normal text-[color:var(--color-text)]">
                    RF Power Amplifier Lineup
                  </h2>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--color-border)]">
                      <th className="px-4 py-3 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-slate-400">
                        Part Number
                      </th>
                      <th className="px-4 py-3 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-slate-400">
                        Center Frequency (GHz)
                      </th>
                      <th className="px-4 py-3 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-slate-400">
                        Output Power (W)
                      </th>
                      <th className="px-4 py-3 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-slate-400">
                        Efficiency
                      </th>
                      <th className="px-4 py-3 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-slate-400">
                        Gain (dB)
                      </th>
                      <th className="px-4 py-3 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-slate-400">
                        Type Mode of Operation
                      </th>
                      <th className="px-4 py-3 font-mono text-[0.7rem] font-medium uppercase tracking-wider text-slate-400">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rfPowerAmplifierTableRows.map((row) => (
                      <tr
                        key={row.partNumber}
                        className="border-b border-[color:var(--color-border)] transition-colors last:border-b-0 hover:bg-[color:var(--color-surface-soft)]"
                      >
                        <td className="px-4 py-4 font-mono font-medium text-[color:var(--color-text)]">
                          {row.slug ? (
                            <Link
                              href={`/products/rf/power-amplifiers/${row.slug}`}
                              className="transition-colors hover:text-[color:var(--color-text-muted)]"
                            >
                              {row.partNumber}
                            </Link>
                          ) : (
                            row.partNumber
                          )}
                        </td>
                        <td className="px-4 py-4 font-mono text-[color:var(--color-text)]">
                          {row.centerFrequencyGhz}
                        </td>
                        <td className="px-4 py-4 font-mono text-[color:var(--color-text)]">
                          {row.outputPowerW}
                        </td>
                        <td className="px-4 py-4 font-mono text-[color:var(--color-text)]">
                          {row.efficiency}
                        </td>
                        <td className="px-4 py-4 font-mono text-[color:var(--color-text)]">
                          {row.gainDb}
                        </td>
                        <td className="px-4 py-4 text-[color:var(--color-text-muted)]">
                          {row.modeOfOperation}
                        </td>
                        <td className="px-4 py-4">
                          {row.slug ? (
                            <Link
                              href={`/products/rf/power-amplifiers/${row.slug}`}
                              className="inline-flex items-center gap-2 font-semibold text-[color:var(--color-text)] transition-colors hover:text-[color:var(--color-text-muted)]"
                            >
                              Details
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
