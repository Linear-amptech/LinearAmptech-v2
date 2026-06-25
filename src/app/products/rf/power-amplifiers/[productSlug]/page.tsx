import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/landing/reveal";
import { ProductsCatalogSidebar } from "@/components/products/products-catalog-sidebar";
import {
  getRfPowerAmplifier,
  rfPowerAmplifierTableRows,
} from "@/components/products/rf-power-amplifiers-data";

type ProductPageProps = {
  params: Promise<{ productSlug: string }>;
};

export function generateStaticParams() {
  return rfPowerAmplifierTableRows
    .filter((row) => row.slug)
    .map((row) => ({ productSlug: row.slug! }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const product = getRfPowerAmplifier(productSlug);

  if (!product) {
    return {
      title: "RF Power Amplifier | Linear Amptech",
    };
  }

  return {
    title: `${product.partNumber} | Linear Amptech`,
    description: product.summary,
  };
}

export default async function RfPowerAmplifierProductPage({
  params,
}: ProductPageProps) {
  const { productSlug } = await params;
  const product = getRfPowerAmplifier(productSlug);

  if (!product) {
    notFound();
  }

  const tableRow = rfPowerAmplifierTableRows.find(
    (row) => row.slug === product.slug,
  );

  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgb(16_199_232_/_0.18),transparent_30%),linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <div className="container relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <Link
              href="/products/rf/power-amplifiers"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to RF Power Amplifiers
            </Link>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
              Power Amplifier
            </p>
            <h1 className="font-heading max-w-5xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
              {product.partNumber}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {product.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {product.applications.map((application) => (
                <span
                  key={application}
                  className="rounded-xl border border-cyan-200/15 bg-cyan-200/10 px-3 py-2 text-sm font-medium text-cyan-50"
                >
                  {application}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[320px_1fr] lg:px-8">
          <Reveal>
            <ProductsCatalogSidebar
              activeGroupId="rf-design-signal-processing"
              activeHref={`/products/rf/power-amplifiers/${product.slug}`}
            />
          </Reveal>

          <div className="grid gap-8">
            <Reveal>
              <section className="grid gap-8 rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)] xl:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                    Key Features
                  </p>
                  <ul className="mt-5 space-y-3 text-base leading-7 text-[color:var(--color-text-muted)]">
                    {product.keyFeatures.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--color-primary-deep)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                    Applications
                  </p>
                  <ul className="mt-5 space-y-3 text-base leading-7 text-[color:var(--color-text-muted)]">
                    {product.applications.map((application) => (
                      <li key={application} className="flex gap-3">
                        <span className="mt-2 size-2 shrink-0 rounded-full bg-[color:var(--color-secondary)]" />
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>

                  {tableRow ? (
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                          Center Frequency
                        </p>
                        <p className="mt-2 text-lg font-bold text-[color:var(--color-text)]">
                          {tableRow.centerFrequencyGhz} GHz
                        </p>
                      </div>
                      <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                          Output Power
                        </p>
                        <p className="mt-2 text-lg font-bold text-[color:var(--color-text)]">
                          {tableRow.outputPowerW} W
                        </p>
                      </div>
                      <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                          Efficiency
                        </p>
                        <p className="mt-2 text-lg font-bold text-[color:var(--color-text)]">
                          {tableRow.efficiency}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                          Gain
                        </p>
                        <p className="mt-2 text-lg font-bold text-[color:var(--color-text)]">
                          {tableRow.gainDb} dB
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>

                <div className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white">
                    <Image
                      src={product.heroImage}
                      alt={product.partNumber}
                      fill
                      sizes="(min-width: 1280px) 34vw, 100vw"
                      className="object-contain p-3"
                    />
                  </div>
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-end justify-between gap-4 border-b border-[color:var(--color-border)] pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                      Diagrams
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] px-4 py-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:border-[color:var(--color-primary-deep)] hover:bg-[color:var(--color-surface-soft)]"
                  >
                    Request Product Quote
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {product.diagrams.map((diagram) => (
                    <figure
                      key={diagram.src}
                      className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-white">
                        <Image
                          src={diagram.src}
                          alt={diagram.alt}
                          fill
                          sizes="(min-width: 1024px) 38vw, 100vw"
                          className="object-contain p-3"
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
