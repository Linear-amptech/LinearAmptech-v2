import type { Metadata } from "next";

import { products } from "@/components/landing/data";
import { ProductPortfolioCard } from "@/components/landing/landing-content-sections";
import { Reveal } from "@/components/landing/reveal";

export const metadata: Metadata = {
  title: "RF & mm-Wave Front End Modules | Linear Amptech",
  description:
    "Fully integrated transmitter, receiver, and radar front-end chip families from Linear Amptech.",
};

const frontEndModuleSlugs = [
  "fully-integrated-transmitter-chip",
  "fully-integrated-receiver-chip",
  "fully-integrated-radar-front-end-chip",
] as const;

const frontEndModules = frontEndModuleSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is NonNullable<typeof product> =>
    Boolean(product),
  );

export default function RfMmWaveFrontEndModulesPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-4">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            Integrated RFICs
          </p>
          <h1 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            RF & mm-Wave Front End Modules
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Fully integrated transmitter, receiver, and radar front-end chips
            based on GF 130nm SiGe BiCMOS technology for high-frequency RF
            systems.
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <Reveal className="container mx-auto max-w-7xl px-4 lg:px-4">
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
              Select an integrated front-end chip
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {frontEndModules.map((product) => (
              <ProductPortfolioCard key={product.slug} product={product} />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
