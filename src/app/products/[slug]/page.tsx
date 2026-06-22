import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

import { BackgroundTexture } from "@/components/landing/background-texture";
import { assets, products } from "@/components/landing/data";
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
    <main className="min-h-screen bg-[#03060d] text-slate-100">
      <section className="section-shell relative pb-20 pt-32">
        <BackgroundTexture
          src={assets.circuitBackground}
          opacity="opacity-20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(34,211,238,0.14),transparent_32%),linear-gradient(180deg,rgba(3,6,13,0.68),#03060d_88%)]"
        />
        <div className="container relative z-10 mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.58fr_0.42fr] lg:items-center lg:px-8">
          <Reveal>
            <Link
              href="/#products"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to products
            </Link>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
              <Icon className="size-4" aria-hidden="true" />
              {product.category}
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-normal text-white sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {product.features.map((feature) => (
                <span key={feature} className="feature-pill">
                  {feature}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="product-card overflow-hidden p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.38fr_0.62fr] lg:px-8">
          <Reveal>
            <aside className="product-card p-6 lg:sticky lg:top-28">
              <p className="section-kicker">Product Specs</p>
              <h2 className="text-3xl font-semibold text-white">
                Request a Product Quote
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Share your frequency band, output-power target, package needs,
                and integration timeline so the Linear Amptech team can respond
                with the right product path.
              </p>
              <Link href="/contact" className="premium-button mt-7 w-full">
                Get Quote
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </aside>
          </Reveal>

          <div className="grid gap-6">
            <Reveal>
              <div className="grid gap-4 md:grid-cols-2">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="product-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      {spec.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold leading-7 text-white">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {product.detailSections.map((section) => (
              <Reveal key={section.title}>
                <article className="product-card p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      className="mt-1 size-6 shrink-0 text-cyan-200"
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="text-2xl font-semibold text-white">
                        {section.title}
                      </h2>
                      <p className="mt-3 text-base leading-7 text-slate-300">
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
