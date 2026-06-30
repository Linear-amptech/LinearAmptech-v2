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
  Signal,
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
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-0 pt-32 text-white">
        <Image
          src={product.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_50%] opacity-25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,#050b12_0%,rgb(5_11_18_/_0.96)_34%,rgb(5_11_18_/_0.66)_64%,rgb(5_11_18_/_0.4)_100%),linear-gradient(180deg,rgb(5_11_18_/_0.3),#050b12_94%)]"
        />

        <Reveal className="container relative z-10 mx-auto max-w-7xl px-4 pb-20 lg:px-4">
          <Link
            href="/products/rf-passive-components"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to RF Passive Components
          </Link>
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            RF Passive Component
          </p>
          <h1 className="font-heading max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            {product.name}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {product.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {product.applications.map((application) => (
              <span
                key={application}
                className="rounded-lg border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-white/75"
              >
                {application}
              </span>
            ))}
          </div>
          <Link
            href={`/contact?product=${product.slug}`}
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#050b12] transition-colors hover:bg-white/90"
          >
            Request Product Quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
        <div className="relative z-10 border-t border-white/10">
          <div className="container mx-auto max-w-7xl px-4 lg:px-4">
            <dl className="grid grid-cols-1 sm:grid-cols-3">
              {heroStrip.map((item, index) => (
                <div
                  key={item.label}
                  className={`border-t border-white/10 py-6 first:border-t-0 sm:border-l sm:border-t-0 sm:py-7 sm:pl-8 sm:pr-6 ${
                    index === 0 ? "sm:border-l-0 sm:pl-0" : ""
                  }`}
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-mono text-sm leading-6 text-white/80">
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
            <aside className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)] lg:sticky lg:top-28">
              <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
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
                className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[color:var(--color-text)] px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </aside>
          </Reveal>

          <div className="grid gap-8">
            <Reveal>
              <div className="grid gap-4 md:grid-cols-2">
                {product.specs.map((spec) => (
                  <article
                    key={spec.label}
                    className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]"
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
              <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
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
                <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                  Key Features
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {product.features.map((feature) => (
                    <article
                      key={feature}
                      className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-surface-soft)] text-[color:var(--color-text-muted)]">
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
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-surface-soft)] text-[color:var(--color-text-muted)]">
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
              <section className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                <div className="flex items-end justify-between gap-4 border-b border-[color:var(--color-border)] pb-5">
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
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

            <Reveal>
              <section className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-slate-50 text-slate-700">
                    <Signal className="size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                      Engineering note
                    </p>
                    <p className="mt-2 text-base leading-7 text-[color:var(--color-text-muted)]">
                      Product details were migrated from the previous Linear
                      Amptech passive RF component pages and organized for the
                      revamped catalog experience.
                    </p>
                  </div>
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
