import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

import { products } from "@/components/landing/data";
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
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgb(16_199_232_/_0.2),transparent_30%),radial-gradient(circle_at_18%_76%,rgb(110_225_93_/_0.12),transparent_26%)]"
        />
        <div className="container relative z-10 mx-auto flex min-h-[calc(78vh-8rem)] items-center px-5 lg:px-8">
          <Reveal>
            <div className="max-w-5xl">
              <Link
                href="/products"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition-colors hover:text-white"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to products
              </Link>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                <Icon className="size-4" aria-hidden="true" />
                Product
              </div>
              <h1 className="font-heading max-w-5xl text-balance text-4xl font-bold leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-7xl">
                {product.name}
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                {product.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-xl border border-cyan-200/15 bg-cyan-200/10 px-3 py-2 text-sm font-medium text-cyan-50"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-control)] bg-[color:var(--color-primary)] px-5 text-sm font-bold text-slate-950 shadow-[0_16px_36px_rgb(16_199_232_/_0.18)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-primary-deep)]"
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
            <aside className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)] lg:sticky lg:top-28">
              <Link
                href="/products"
                className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary)]"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Products
              </Link>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                Product Specs
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-[color:var(--color-text)]">
                Product inquiry
              </h2>
              <p className="mt-4 text-sm leading-6 text-[color:var(--color-text-muted)]">
                Share frequency band, output-power target, package needs, and
                integration timeline so the Linear Amptech team can respond with
                the right product path.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-control)] bg-[color:var(--color-primary)] px-5 text-sm font-bold text-slate-950 shadow-[0_16px_36px_rgb(16_199_232_/_0.18)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-primary-deep)]"
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
                    className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-soft)]"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                      {spec.label}
                    </p>
                    <p className="mt-3 text-lg font-bold leading-7 text-[color:var(--color-text)]">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4 shadow-[var(--shadow-card)]">
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
              <div className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
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
                <article className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      className="mt-1 size-6 shrink-0 text-[color:var(--color-primary-deep)]"
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="font-heading text-2xl font-bold text-[color:var(--color-text)]">
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
