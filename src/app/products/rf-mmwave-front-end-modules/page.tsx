import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Radar, Waves } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { products } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

export const metadata: Metadata = {
  title: "RF & mm-Wave Front End Modules | Linear Amptech",
  description:
    "Fully integrated transmitter, receiver, and radar front-end chip families from Linear Amptech.",
};

const frontEndModuleSlugs = [
  "fully-integrated-transmitter-chip",
  "fully-integrated-receiver-chip",
  "fully-integrated-radar-front-end-chip",
] as const;

const categoryCopy: Record<
  (typeof frontEndModuleSlugs)[number],
  { eyebrow: string; icon: LucideIcon }
> = {
  "fully-integrated-transmitter-chip": {
    eyebrow: "Transmitter IC",
    icon: Waves,
  },
  "fully-integrated-receiver-chip": {
    eyebrow: "Receiver IC",
    icon: Waves,
  },
  "fully-integrated-radar-front-end-chip": {
    eyebrow: "Radar Front-End IC",
    icon: Radar,
  },
};

const frontEndModules = frontEndModuleSlugs
  .map((slug) => products.find((product) => product.slug === slug))
  .filter((product): product is NonNullable<typeof product> =>
    Boolean(product),
  );

export default function RfMmWaveFrontEndModulesPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-4">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            Integrated RFICs
          </p>
          <h1 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            RF & mm-Wave Front End Modules
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Fully integrated transmitter, receiver, and radar front-end chips
            based on GF 130nm SiGe BiCMOS technology for high-frequency RF
            systems.
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <Reveal className="container mx-auto max-w-7xl px-4 lg:px-4">
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
              Select an integrated front-end chip
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {frontEndModules.map((product) => {
              const details =
                categoryCopy[
                  product.slug as (typeof frontEndModuleSlugs)[number]
                ];

              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group flex min-h-[34rem] flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(15_23_42/0.10)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-[color:var(--color-border)] bg-white">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  {product.gallery.length > 0 ? (
                    <div className="grid grid-cols-3 gap-2 border-b border-[color:var(--color-border)] bg-white p-3">
                      {product.gallery.slice(0, 3).map((item) => (
                        <div
                          key={`${product.slug}-${item.src}`}
                          className="relative aspect-square overflow-hidden rounded-lg border border-[color:var(--color-border)] bg-white"
                        >
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            sizes="(min-width: 1024px) 10vw, 30vw"
                            className="object-contain p-1.5"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                      {details.eyebrow}
                    </p>

                    <h3 className="mt-5 font-heading text-2xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                      {product.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)]">
                      {product.description}
                    </p>

                    <div className="mt-6 grid gap-2">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-3 py-2 text-sm font-medium text-[color:var(--color-text-muted)]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-[color:var(--color-text)] transition-colors group-hover:text-slate-600">
                      View details
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
