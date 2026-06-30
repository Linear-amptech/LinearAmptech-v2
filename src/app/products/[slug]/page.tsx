import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { products, productBands } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

const allProducts = [...products];

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product | Linear Amptech",
    };
  }

  return {
    title: `${product.name} | Linear Amptech`,
    description: product.description,
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const band = productBands[slug];

  const heroStrip = [
    band ? { label: "Operating band", value: band.label } : null,
    ...product.specs,
  ]
    .filter((item): item is { label: string; value: string } => Boolean(item))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-0 pt-32 text-white">
        <Image
          src={product.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[66%_50%] opacity-25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,#050b12_0%,rgb(5_11_18_/_0.96)_34%,rgb(5_11_18_/_0.66)_64%,rgb(5_11_18_/_0.4)_100%),linear-gradient(180deg,rgb(5_11_18_/_0.3),#050b12_94%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-4 pb-20 lg:px-4">
          <Link
            href="/products"
            className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to products
          </Link>
          <h1 className="font-heading max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            {product.name}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {product.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {product.features.map((feature) => (
              <span
                key={feature}
                className="rounded-lg border border-white/12 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-white/75"
              >
                {feature}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
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
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                Inquiry
              </p>
              <h2 className="font-heading text-2xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                Request a quote
              </h2>
              <p className="mt-4 text-sm leading-6 text-[color:var(--color-text-muted)]">
                Share your application, target environment, integration needs,
                and timeline so the Linear Amptech team can respond with the
                right product path.
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
            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                <div className="flex items-center justify-between gap-3 border-b border-[color:var(--color-border)] px-5 py-3.5">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-text)]">
                    Specifications
                  </p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                    Datasheet
                  </p>
                </div>
                <dl className="divide-y divide-[color:var(--color-border)]">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid gap-1 px-5 py-4 sm:grid-cols-[0.5fr_1fr] sm:items-baseline sm:gap-6"
                    >
                      <dt className="text-[0.8em] text-[color:var(--color-text-muted)]">
                        {spec.label}
                      </dt>
                      <dd className="text-sm font-medium leading-6 text-[color:var(--color-text)] sm:text-right">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* <Reveal>
              <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
              </div>
            </Reveal> */}

            <Reveal>
              <article className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)] sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                  Overview
                </p>
                <div className="mt-6 divide-y divide-[color:var(--color-border)]">
                  {product.detailSections.map((section) => (
                    <div
                      key={section.title}
                      className="py-5 first:pt-0 last:pb-0"
                    >
                      <h2 className="font-heading text-xl font-semibold tracking-normal text-[color:var(--color-text)]">
                        {section.title}
                      </h2>
                      <p className="mt-2.5 text-base leading-7 text-[color:var(--color-text-muted)]">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            {product.gallery.length > 0 ? (
              <Reveal>
                <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                    Gallery
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    {product.gallery.map((item) => (
                      <figure
                        key={`${item.src}-${item.caption}`}
                        className="overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-white"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(min-width: 1024px) 28vw, 100vw"
                            className="object-contain p-3"
                          />
                        </div>
                        <figcaption className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[color:var(--color-text-muted)]">
                          {item.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
