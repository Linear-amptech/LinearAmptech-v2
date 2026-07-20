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

import { HeroThreads } from "@/components/layout/hero-threads";
import { Reveal } from "@/components/landing/reveal";
import { RfPowerAmplifierLineup } from "@/components/products/rf-power-amplifier-lineup";
import {
  getRfPowerAmplifier,
  rfPowerAmplifierCategories,
  rfPowerAmplifierTableRows,
} from "@/components/products/rf-power-amplifiers-data";

type ProductPageProps = {
  params: Promise<{ productSlug: string }>;
};

const hybridMicSlug = "hybrid-mic-power-amplifier-modules";

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
  return [
    { productSlug: hybridMicSlug },
    ...rfPowerAmplifierTableRows
      .filter((row) => row.slug)
      .map((row) => ({ productSlug: row.slug! })),
  ];
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params;

  if (productSlug === hybridMicSlug) {
    return {
      title: "Hybrid MIC Power Amplifier Modules | Linear Amptech",
      description:
        "Hybrid MIC PA module lineup with center frequency, output power, efficiency, gain, and mode-of-operation data.",
    };
  }

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

  if (productSlug === hybridMicSlug) {
    const category = rfPowerAmplifierCategories.find(
      (item) => item.slug === hybridMicSlug,
    );

    return (
      <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
        <section className="relative overflow-hidden border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pb-16 pt-32">
          <HeroThreads />
          <Reveal className="container relative mx-auto max-w-7xl px-4 lg:px-4">
            <Link
              href="/products/rf/power-amplifiers"
              className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to RF & mm-Wave Power Amplifiers
            </Link>
            <p className="kicker mb-4">
              {category?.eyebrow ?? "Module lineup"}
            </p>
            <h1 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
              {category?.title ?? "Hybrid MIC Power Amplifier Modules"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--color-text-muted)] xl:text-xl">
              {category?.description ??
                "Hybrid MIC PA modules with wideband operating ranges, output power, efficiency, gain, and mode-of-operation data."}
            </p>
          </Reveal>
        </section>

        <section className="bg-[color:var(--color-surface-soft)] py-24">
          <div className="container mx-auto max-w-7xl px-4 lg:px-4">
            <Reveal>
              <RfPowerAmplifierLineup />
            </Reveal>
          </div>
        </section>
      </main>
    );
  }

  const product = getRfPowerAmplifier(productSlug);

  if (!product) {
    notFound();
  }

  const tableRow = rfPowerAmplifierTableRows.find(
    (row) => row.slug === product.slug,
  );

  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pb-16 pt-32">
        <Reveal className="container mx-auto max-w-7xl px-4 lg:px-4">
          <Link
            href="/products/rf/power-amplifiers"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to RF Power Amplifiers
          </Link>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="kicker mb-4">Power Amplifier</p>
              <h1 className="font-heading text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
                {product.partNumber}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--color-text-muted)] xl:text-xl">
                {product.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {product.applications.map((application) => (
                  <span
                    key={application}
                    className="rounded-full bg-[color:var(--color-accent-wash)] px-4 py-1.5 text-[13px] font-medium text-[color:var(--color-primary-ink)]"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>
            <div className="media-frame">
              {/* Warm inspection plate: the studio module photo sits on a cream
                  matte framed by the dark bezel, reading as a measured capture. */}
              <div className="product-plate aspect-[4/3] p-3">
                <div className="relative h-full w-full">
                  <Image
                    src={product.heroImage}
                    alt={product.partNumber}
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-contain p-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.34fr_0.66fr] lg:px-4">
          <Reveal>
            <aside className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-28">
              <p className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-primary-deep)]">
                Inquiry
              </p>
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-normal text-[color:var(--color-text)]">
                Product inquiry
              </h2>
              <p className="mt-4 text-sm leading-6 text-[color:var(--color-text-muted)] xl:text-base xl:leading-7">
                Share frequency band, output-power target, package needs, and
                integration timeline so the Linear Amptech team can respond with
                the right RF amplifier path.
              </p>
              <Link
                href="/contact"
                className="btn-primary group mt-7 h-12 w-full px-6 text-sm font-semibold"
              >
                Get Quote
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </aside>
          </Reveal>

          <div className="grid gap-8">
            {tableRow ? (
              <Reveal>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
                    <p className="font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      Center Frequency
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                      {tableRow.centerFrequencyGhz} GHz
                    </p>
                  </div>
                  <div className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
                    <p className="font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      Output Power
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                      {tableRow.outputPowerW} W
                    </p>
                  </div>
                  <div className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
                    <p className="font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      Efficiency
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                      {tableRow.efficiency}
                    </p>
                  </div>
                  <div className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
                    <p className="font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      Gain
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                      {tableRow.gainDb} dB
                    </p>
                  </div>
                </div>
              </Reveal>
            ) : null}

            <Reveal>
              <section>
                <p className="font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-primary-deep)]">
                  Key Features
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {product.keyFeatures.map((feature) => {
                    const splitAt = feature.indexOf(":");
                    const label =
                      splitAt >= 0
                        ? feature.slice(0, splitAt).trim()
                        : feature.trim();
                    const value =
                      splitAt >= 0 ? feature.slice(splitAt + 1).trim() : "";
                    return (
                      <article
                        key={feature}
                        className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--color-accent-wash)] text-[color:var(--color-primary-ink)]">
                            <CheckCircle2
                              className="size-5"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="font-mono text-sm font-semibold leading-snug text-[color:var(--color-text-muted)]">
                            {label}
                          </p>
                        </div>
                        {value ? (
                          <p className="mt-3 text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                            {value}
                          </p>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <p className="font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-primary-deep)]">
                  Applications
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {product.applications.map((application) => {
                    const ApplicationIcon = getApplicationIcon(application);

                    return (
                      <article
                        key={application}
                        className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--color-accent-wash)] text-[color:var(--color-primary-ink)]">
                            <ApplicationIcon
                              className="size-5"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                            Application
                          </p>
                        </div>
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
              <section className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-end justify-between gap-4 border-b border-[color:var(--color-border)] pb-5">
                  <div>
                    <p className="font-mono text-[12px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-primary-deep)]">
                      Diagrams
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {product.diagrams.map((diagram) => (
                    <figure
                      key={diagram.src}
                      className="surface-card overflow-hidden"
                    >
                      <div className="media-well aspect-[16/10] rounded-none">
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
