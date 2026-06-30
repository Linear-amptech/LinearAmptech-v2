import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { rfPassiveComponents } from "@/components/products/rf-passive-components-data";

export const metadata: Metadata = {
  title: "RF Passive Components | Linear Amptech",
  description:
    "Explore Linear Amptech RF passive components including power dividers, 5G base station filters, and UHF power splitters.",
};

export default function RfPassiveComponentsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-4">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            RF Passive Components
          </p>
          <h1 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Low-loss passive RF products for filtering, splitting, and
            combining.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            These RF passive components use dedicated design topologies for low
            loss, high selectivity in filters, and efficient power splitting or
            combining across deployment-focused RF systems.
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto max-w-7xl px-4 lg:px-4">
          <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rfPassiveComponents.map((product) => {
              const operatingBand = product.specs.find(
                (spec) => spec.label.toLowerCase() === "frequency",
              )?.value;

              return (
                <Reveal key={product.slug} className="h-full">
                  <Link
                    href={`/products/rf-passive-components/${product.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(15_23_42/0.10)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--color-surface-soft)]">
                      <Image
                        src={product.heroImage}
                        alt={product.shortName}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="flex min-h-[2.5em] items-start font-heading text-2xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                        {product.shortName}
                      </h3>
                      {operatingBand ? (
                        <div className="mt-4">
                          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-600">
                            Operating band
                          </p>
                          <p className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--color-text)]">
                            {operatingBand}
                          </p>
                        </div>
                      ) : null}
                      <span className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:text-slate-600">
                        View product
                        <ArrowRight
                          className="size-4 transition-transform duration-300 group-hover/link:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
