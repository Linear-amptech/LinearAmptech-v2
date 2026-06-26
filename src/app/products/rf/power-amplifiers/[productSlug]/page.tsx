import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Antenna,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  FlaskConical,
  MessageSquare,
  Radar,
  RadioTower,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/landing/reveal";
import {
  getRfPowerAmplifier,
  rfPowerAmplifierTableRows,
} from "@/components/products/rf-power-amplifiers-data";

type ProductPageProps = {
  params: Promise<{ productSlug: string }>;
};

function getApplicationIcon(application: string): LucideIcon {
  const value = application.toLowerCase();

  if (value.includes("transmitter")) {
    return RadioTower;
  }

  if (value.includes("laboratory") || value.includes("lab")) {
    return FlaskConical;
  }

  if (value.includes("cellular")) {
    return Smartphone;
  }

  if (value.includes("communication")) {
    return MessageSquare;
  }

  if (value.includes("radar")) {
    return Radar;
  }

  if (value.includes("sdr")) {
    return Cpu;
  }

  return Antenna;
}

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
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div className="absolute inset-y-0 right-0 z-0 w-full opacity-85 lg:w-[58%] lg:opacity-100">
          <Image
            src={product.heroImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-contain object-center p-8 drop-shadow-[0_24px_60px_rgb(0_0_0_/_0.42)] sm:p-12 lg:p-16"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-[linear-gradient(90deg,#050b12_0%,rgb(5_11_18_/_0.98)_36%,rgb(5_11_18_/_0.68)_56%,rgb(5_11_18_/_0.18)_78%,rgb(5_11_18_/_0.06)_100%),linear-gradient(180deg,rgb(5_11_18_/_0.08),#050b12_98%)]"
        />
        <div className="container relative z-10 mx-auto flex min-h-[calc(78vh-8rem)] max-w-7xl items-center px-5 lg:px-8">
          <Reveal>
            <div className="max-w-5xl">
              <Link
                href="/products/rf/power-amplifiers"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to RF Power Amplifiers
              </Link>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                Power Amplifier
              </p>
              <h1 className="font-heading max-w-5xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-7xl">
                {product.partNumber}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {product.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {product.applications.map((application) => (
                  <span
                    key={application}
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white/80"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.34fr_0.66fr] lg:px-8">
          <Reveal>
            <aside className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)] lg:sticky lg:top-28">
              <Link
                href="/products/rf/power-amplifiers"
                className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:text-[color:var(--color-text-muted)]"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                RF Power Amplifiers
              </Link>
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                Product Specs
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                Product inquiry
              </h2>
              <p className="mt-4 text-sm leading-6 text-[color:var(--color-text-muted)]">
                Share frequency band, output-power target, package needs, and
                integration timeline so the Linear Amptech team can respond with
                the right RF amplifier path.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-text)] px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </aside>
          </Reveal>

          <div className="grid gap-8">
            {tableRow ? (
              <Reveal>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      Center Frequency
                    </p>
                    <p className="mt-3 font-mono text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                      {tableRow.centerFrequencyGhz} GHz
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      Output Power
                    </p>
                    <p className="mt-3 font-mono text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                      {tableRow.outputPowerW} W
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      Efficiency
                    </p>
                    <p className="mt-3 font-mono text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                      {tableRow.efficiency}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      Gain
                    </p>
                    <p className="mt-3 font-mono text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                      {tableRow.gainDb} dB
                    </p>
                  </div>
                </div>
              </Reveal>
            ) : null}

            <Reveal>
              <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[color:var(--color-surface-soft)]">
                  <Image
                    src={product.heroImage}
                    alt={product.partNumber}
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <section>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                  Key Features
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {product.keyFeatures.map((feature) => (
                    <article
                      key={feature}
                      className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]"
                    >
                      <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-[color:var(--color-surface-soft)] text-[color:var(--color-text-muted)]">
                        <CheckCircle2 className="size-5" aria-hidden="true" />
                      </div>
                      <p className="text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                        {feature}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                  Applications
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {product.applications.map((application) => {
                    const ApplicationIcon = getApplicationIcon(application);

                    return (
                      <article
                        key={application}
                        className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]"
                      >
                        <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-[color:var(--color-surface-soft)] text-[color:var(--color-text-muted)]">
                          <ApplicationIcon
                            className="size-5"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                          Application
                        </p>
                        <p className="mt-3 text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                          {application}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                <div className="flex items-end justify-between gap-4 border-b border-[color:var(--color-border)] pb-5">
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      Diagrams
                    </p>
                  </div>
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
