import type { Metadata } from "next";

import { BackgroundTexture } from "@/components/landing/background-texture";
import { assets, products } from "@/components/landing/data";
import { ProductImageCard } from "@/components/landing/product-image-card";
import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Products | Linear Amptech",
  description:
    "Explore Linear Amptech RF front-end products, GaN power amplifiers, mm-wave RFICs, radar front-end chips, RIS prototypes, and packaging capabilities.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#03060d] text-slate-100">
      <SiteHeader />
      <section className="section-shell relative border-b border-white/10 pb-16 pt-32">
        <BackgroundTexture
          src={assets.circuitBackground}
          opacity="opacity-18"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(34,211,238,0.14),transparent_30%),linear-gradient(180deg,rgba(3,6,13,0.74),#03060d_86%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <p className="section-kicker">All Products</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-normal text-white sm:text-6xl">
            RF front-end products for amplifier, RFIC, radar, antenna, and
            packaging programs.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Browse the product portfolio and open each product page for brief
            specifications, integration notes, and quote requests.
          </p>
        </Reveal>
      </section>

      <section className="relative py-24">
        <div className="container mx-auto grid max-w-7xl items-stretch gap-5 px-5 lg:grid-cols-3 lg:px-8">
          {products.map((product, index) => (
            <Reveal key={product.slug} className="h-full">
              <ProductImageCard product={product} index={index} />
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
