import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { rfPowerAmplifierProducts } from "@/components/products/rf-power-amplifiers-data";
import { AllProdcuts } from "@/components/products/AllProducts";

export const metadata: Metadata = {
  title: "Products | Linear Amptech",
  description:
    "Explore Linear Amptech RF front-end products, GaN power amplifiers, mm-wave RFICs, radar front-end chips, RIS prototypes, and packaging capabilities.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-4">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            All Products
          </p>
          <h1 className="font-heading max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            RF Front-End Solutions for High-Performance Wireless Systems
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Explore our portfolio of RF semiconductor products and integrated
            front-end solutions designed for communication, radar, sensing, and
            aerospace applications.
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <Reveal className="container mx-auto max-w-7xl px-4 lg:px-4">
          <div className="mb-10 overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
            <div className="grid gap-0 lg:grid-cols-[0.38fr_0.62fr]">
              <div className="border-b border-[color:var(--color-border)] bg-white p-6 lg:border-b-0 lg:border-r">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                  RF Product Line
                </p>
                <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                  RF Power Amplifiers
                </h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)]">
                  Explore the RF power amplifier lineup with detailed pages,
                  product images, and performance data.
                </p>
                <Link
                  href="/products/rf/power-amplifiers"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:text-[color:var(--color-text-muted)]"
                >
                  Open RF Power Amplifiers
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="grid gap-0 divide-y divide-[color:var(--color-border)] md:grid-cols-2 md:divide-x md:divide-y-0">
                {rfPowerAmplifierProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/rf/power-amplifiers/${product.slug}`}
                    className="group p-5 transition-colors "
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white">
                        <Image
                          src={product.heroImage}
                          alt={product.partNumber}
                          fill
                          sizes="80px"
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-base font-semibold tracking-tight text-[color:var(--color-text)]">
                          {product.partNumber}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
                          {product.shortSpec}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text)] transition-colors group-hover:text-[color:var(--color-text-muted)]">
                          View Details
                          <ChevronRight
                            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="container mx-auto grid max-w-7xl auto-rows-fr items-stretch gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-4">
          <AllProdcuts />
        </div>
      </section>
    </main>
  );
}
