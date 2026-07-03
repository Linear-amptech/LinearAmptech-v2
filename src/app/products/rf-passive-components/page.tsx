import type { Metadata } from "next";

import { HeroThreads } from "@/components/layout/hero-threads";
import { Reveal } from "@/components/landing/reveal";
import { ProductListingCard } from "@/components/products/product-listing-card";
import { rfPassiveComponents } from "@/components/products/rf-passive-components-data";

export const metadata: Metadata = {
  title: "RF Passive Components | Linear Amptech",
  description:
    "Explore Linear Amptech RF passive components including power dividers, 5G base station filters, and UHF power splitters.",
};

export default function RfPassiveComponentsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative overflow-hidden border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pb-16 pt-32">
        <HeroThreads />
        <Reveal className="container relative mx-auto max-w-7xl px-4 lg:px-4">
          <p className="kicker mb-4">RF Passive Components</p>
          <h1 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
            Low-loss passive RF products for filtering, splitting, and
            combining.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--color-text-muted)]">
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
                  <ProductListingCard
                    title={product.shortName}
                    href={`/products/rf-passive-components/${product.slug}`}
                    image={product.cardImage}
                    band={operatingBand}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
