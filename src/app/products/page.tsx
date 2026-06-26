import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import {
  products,
  productBands,
  type Product,
} from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { rfPowerAmplifierProducts } from "@/components/products/rf-power-amplifiers-data";

export const metadata: Metadata = {
  title: "Products | Linear Amptech",
  description:
    "Explore Linear Amptech RF front-end products, GaN power amplifiers, mm-wave RFICs, radar front-end chips, RIS prototypes, and packaging capabilities.",
};

function ProductListingCard({ product }: { product: Product }) {
  const Icon = product.icon;
  const band = productBands[product.slug];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(15_23_42/0.10)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--color-surface-soft)]">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 grid size-10 place-items-center rounded-lg border border-white/15 bg-[#050b12]/40 text-white backdrop-blur-md">
          <Icon className="size-5" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-bold leading-snug tracking-normal text-[color:var(--color-text)]">
          <Link
            href={`/products/${product.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {product.name}
          </Link>
        </h3>
        {band ? (
          <div className="mt-5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
              Operating band
            </p>
            <p className="mt-1 font-mono text-2xl font-semibold tracking-tight text-[color:var(--color-text)]">
              {band.label}
            </p>
          </div>
        ) : (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
            {product.description}
          </p>
        )}
        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text)]">
            View product
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            All Products
          </p>
          <h1 className="font-heading max-w-5xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-7xl">
            RF Front-End Solutions for High-Performance Wireless Systems
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore our portfolio of RF semiconductor products and integrated
            front-end solutions designed for communication, radar, sensing, and
            aerospace applications.
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <Reveal className="container mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-10 overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
            <div className="grid gap-0 lg:grid-cols-[0.38fr_0.62fr]">
              <div className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-6 lg:border-b-0 lg:border-r">
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
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:text-[color:var(--color-text-muted)]"
                >
                  Open RF Power Amplifiers
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="grid gap-0 divide-y divide-[color:var(--color-border)] md:grid-cols-2 md:divide-x md:divide-y-0">
                {rfPowerAmplifierProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/rf/power-amplifiers/${product.slug}`}
                    className="group p-5 transition-colors hover:bg-[color:var(--color-surface-soft)]"
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
                          View page
                          <ChevronRight className="size-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="container mx-auto grid max-w-7xl auto-rows-fr items-stretch gap-6 px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {products.map((product) => (
            <Reveal key={product.slug} className="h-full">
              <ProductListingCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
