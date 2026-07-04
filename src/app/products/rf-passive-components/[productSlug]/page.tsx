import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FlaskConical,
  RadioTower,
  Router,
  Satellite,
  Split,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/landing/reveal";
import {
  getRfPassiveComponent,
  rfPassiveComponents,
} from "@/components/products/rf-passive-components-data";

type ProductPageProps = {
  params: Promise<{ productSlug: string }>;
};

function getApplicationIcon(application: string): LucideIcon {
  const value = application.toLowerCase();

  if (value.includes("5g") || value.includes("base station")) {
    return Router;
  }

  if (value.includes("ku-band") || value.includes("vhf")) {
    return Waves;
  }

  if (value.includes("combiner") || value.includes("splitter")) {
    return Split;
  }

  if (value.includes("instrument") || value.includes("measurement")) {
    return FlaskConical;
  }

  if (value.includes("iot")) {
    return Satellite;
  }

  return RadioTower;
}

export function generateStaticParams() {
  return rfPassiveComponents.map((product) => ({
    productSlug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const product = getRfPassiveComponent(productSlug);

  if (!product) {
    return {
      title: "RF Passive Component | Linear Amptech",
    };
  }

  return {
    title: `${product.shortName} | Linear Amptech`,
    description: product.summary,
  };
}

export default async function RfPassiveComponentProductPage({
  params,
}: ProductPageProps) {
  const { productSlug } = await params;
  const product = getRfPassiveComponent(productSlug);

  if (!product) {
    notFound();
  }

  const heroStrip = product.specs.slice(0, 3);

  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pt-32">
        <Reveal className="container mx-auto max-w-7xl px-4 pb-16 lg:px-4">
          <Link
            href="/products/rf-passive-components"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to RF Passive Components
          </Link>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="kicker mb-4">RF Passive Component</p>
              <h1 className="font-heading text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
                {product.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--color-text-muted)]">
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
              <Link
                href={`/contact?product=${product.slug}`}
                className="group mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-[#EA7317] px-6 text-sm font-semibold text-[#1C1917] transition-colors hover:bg-[#E06A0F]"
              >
                Request Product Quote
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <div className="media-frame">
              {/* light well: the default dark well shows as thin corner arcs behind light imagery */}
              <div className="media-well aspect-[4/3] bg-[color:var(--color-surface-soft)] bg-none">
                <Image
                  src={product.heroImage}
                  alt={product.shortName}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
        <div className="border-t border-[color:var(--color-border)]">
          <div className="container mx-auto max-w-7xl px-4 lg:px-4">
            <dl className="grid grid-cols-1 sm:grid-cols-3">
              {heroStrip.map((item, index) => (
                <div
                  key={item.label}
                  className={`flex flex-col gap-3 border-t border-[color:var(--color-border)] py-6 first:border-t-0 sm:border-l sm:border-t-0 sm:py-7 sm:pl-8 sm:pr-6 ${
                    index === 0 ? "sm:border-l-0 sm:pl-0" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="h-[2px] w-[18px] bg-[#EA7317]"
                  />
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                    {item.label}
                  </dt>
                  <dd className="font-mono text-sm leading-6 text-[color:var(--color-text)]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.34fr_0.66fr] lg:px-4">
          <Reveal>
            <aside className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-28">
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-primary-deep)]">
                Inquiry
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                Product inquiry
              </h2>
              <p className="mt-4 text-sm leading-6 text-[color:var(--color-text-muted)]">
                Share frequency band, interface needs, power handling, and
                integration constraints so the Linear Amptech team can recommend
                the right passive RF component path.
              </p>
              <Link
                href={`/contact?product=${product.slug}`}
                className="group mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#EA7317] px-6 text-sm font-semibold text-[#1C1917] transition-colors hover:bg-[#E06A0F]"
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
            <Reveal>
              <div className="grid gap-4 md:grid-cols-2">
                {product.specs.map((spec) => (
                  <article
                    key={spec.label}
                    className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
                  >
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      {spec.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                      {spec.value}
                    </p>
                  </article>
                ))}
              </div>
            </Reveal>

            {/* <Reveal>
              <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 shadow-[var(--shadow-card)]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={product.heroImage}
                    alt={product.shortName}
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </Reveal> */}

            <Reveal>
              <section>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-primary-deep)]">
                  Key Features
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {product.features.map((feature) => (
                    <article
                      key={feature}
                      className="flex items-center rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-accent-wash)] text-[color:var(--color-primary-ink)]">
                          <CheckCircle2 className="size-5" aria-hidden="true" />
                        </div>
                        <p className="text-base font-semibold leading-7 text-[color:var(--color-text)]">
                          {feature}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-primary-deep)]">
                  Applications
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {product.applications.map((application) => {
                    const ApplicationIcon = getApplicationIcon(application);

                    return (
                      <article
                        key={application}
                        className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-accent-wash)] text-[color:var(--color-primary-ink)]">
                            <ApplicationIcon
                              className="size-5"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
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
              <section className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
                <div className="flex items-end justify-between gap-4 border-b border-[color:var(--color-border)] pb-5">
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-primary-deep)]">
                      Diagrams
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                      Product diagrams and measured references
                    </h2>
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
