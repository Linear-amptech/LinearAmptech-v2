import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

import { products, productBands } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

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
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const Icon = product.icon;
  const band = productBands[slug];

  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <Image
          src={product.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[66%_50%] opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,#050b12_0%,rgb(5_11_18_/_0.96)_34%,rgb(5_11_18_/_0.64)_62%,rgb(5_11_18_/_0.82)_100%),linear-gradient(180deg,rgb(5_11_18_/_0.34),#050b12_92%)]"
        />
        <div className="container relative z-10 mx-auto flex min-h-[calc(78vh-8rem)] items-center px-5 lg:px-8">
          <Reveal>
            <div className="max-w-5xl">
              <Link
                href="/products"
                className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-white/70 transition-colors hover:text-white"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to products
              </Link>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                <Icon className="size-4" aria-hidden="true" />
                Product
              </div>
              <h1 className="font-heading max-w-5xl text-balance text-4xl font-bold leading-[1.05] tracking-normal text-white sm:text-5xl lg:text-7xl">
                {product.name}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                {product.description}
              </p>
              {band ? (
                <p className="mt-6 font-mono text-sm text-white/45">
                  <span className="uppercase tracking-[0.2em]">
                    Operating band
                  </span>
                  <span className="mx-3 text-white/20">/</span>
                  <span className="text-base font-semibold text-white/80">
                    {band.label}
                  </span>
                </p>
              ) : null}
              <div className="mt-8 flex flex-wrap gap-3">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-xl border border-white/12 bg-white/[0.05] px-3 py-2 text-sm font-medium text-white/75"
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
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.34fr_0.66fr] lg:px-8">
          <Reveal>
            <aside className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)] lg:sticky lg:top-28">
              <Link
                href="/products"
                className="mb-7 inline-flex items-center gap-2 font-mono text-sm text-[color:var(--color-text-muted)] transition-colors hover:text-[color:var(--color-text)]"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Products
              </Link>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                Product Specs
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                Product inquiry
              </h2>
              <p className="mt-4 text-sm leading-6 text-[color:var(--color-text-muted)]">
                Share frequency band, output-power target, package needs, and
                integration timeline so the Linear Amptech team can respond with
                the right product path.
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
              <div className="grid gap-4 md:grid-cols-2">
                {product.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]"
                  >
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                      {spec.label}
                    </p>
                    <p className="mt-3 font-mono text-lg font-semibold leading-7 text-[color:var(--color-text)]">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[color:var(--color-surface-soft)]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-contain p-3"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                <div className="grid gap-4 md:grid-cols-2">
                  {product.gallery.map((item) => (
                    <figure
                      key={`${item.src}-${item.caption}`}
                      className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)]"
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
                      <figcaption className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-sm font-medium text-[color:var(--color-text-muted)]">
                        {item.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </Reveal>

            {product.detailSections.map((section) => (
              <Reveal key={section.title}>
                <article className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      className="mt-1 size-6 shrink-0 text-[color:var(--color-text-muted)]"
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="font-heading text-2xl font-bold tracking-normal text-[color:var(--color-text)]">
                        {section.title}
                      </h2>
                      <p className="mt-3 text-base leading-7 text-[color:var(--color-text-muted)]">
                        {section.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
