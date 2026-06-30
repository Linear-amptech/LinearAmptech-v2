import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Cpu,
  Layers3,
  RadioTower,
  ScanLine,
  type LucideIcon,
} from "lucide-react";

import { products, productBands } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { rfPassiveComponents } from "@/components/products/rf-passive-components-data";
import { rfPowerAmplifierCategories } from "@/components/products/rf-power-amplifiers-data";

export const metadata: Metadata = {
  title: "Products | Linear Amptech",
  description:
    "Explore Linear Amptech RF power amplifiers, mm-wave front-end ICs, phase shifter ICs, and RF passive components.",
};

type ProductLink = {
  title: string;
  href: string;
  image?: string;
  operatingBand?: string;
};

type ProductCategory = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  icon: LucideIcon;
  items: ProductLink[];
};

const frontEndModuleSlugs = [
  "fully-integrated-transmitter-chip",
  "fully-integrated-receiver-chip",
  "fully-integrated-radar-front-end-chip",
];

const frontEndModules = products.filter((product) =>
  frontEndModuleSlugs.includes(product.slug),
);

const phaseShifter = products.find(
  (product) => product.slug === "8-bit-phase-shifter-chip",
);

const productCategories: ProductCategory[] = [
  {
    title: "RF & mm-Wave Power Amplifier",
    eyebrow: "Power amplifier families",
    description:
      "Hybrid MIC modules and GaN-on-SiC MMIC PA chips for high-power RF and mm-wave systems.",
    href: "/products/rf/power-amplifiers",
    icon: RadioTower,
    items: rfPowerAmplifierCategories.map((category) => ({
      title: category.title,
      href: category.href,
      image: category.image,
      operatingBand: category.operatingBand,
    })),
  },
  {
    title: "RF & mm-Wave Front End Modules",
    eyebrow: "Integrated RFICs",
    description:
      "Fully integrated transmitter, receiver, and radar front-end chips from the mm-wave portfolio.",
    href: "/products/rf-mmwave-front-end-modules",
    icon: Cpu,
    items: frontEndModules.map((product) => ({
      title: product.name,
      href: `/products/${product.slug}`,
      image: product.image,
      operatingBand: productBands[product.slug]?.label,
    })),
  },
  {
    title: "Phase Shifter IC",
    eyebrow: "Beamforming IC",
    description:
      "Phase-shifting IC capability for phased arrays, radar front ends, and reconfigurable RF systems.",
    href: "/products/8-bit-phase-shifter-chip",
    icon: ScanLine,
    items: phaseShifter
      ? [
          {
            title: phaseShifter.name,
            href: `/products/${phaseShifter.slug}`,
            image: phaseShifter.image,
            operatingBand: productBands[phaseShifter.slug]?.label,
          },
        ]
      : [],
  },
  {
    title: "RF Passive Components",
    eyebrow: "Passive RF",
    description:
      "Filters, splitters, dividers, and combiners for signal routing and front-end integration.",
    href: "/products/rf-passive-components",
    icon: Layers3,
    items: rfPassiveComponents.map((product) => ({
      title: product.name,
      href: `/products/rf-passive-components/${product.slug}`,
      image: product.heroImage,
      operatingBand: product.specs.find(
        (spec) => spec.label.toLowerCase() === "frequency",
      )?.value,
    })),
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-4 lg:px-4">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-white/45">
            All Products
          </p>
          <h1 className="font-heading max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            RF Front-End Product Portfolio
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Browse the portfolio by category: power amplifiers, integrated
            front-end ICs, phase shifter ICs, and RF passive components.
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto max-w-7xl px-4 lg:px-4">
          <Reveal>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {productCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.title}
                    href={category.href}
                    className="group flex min-h-72 flex-col rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(15_23_42/0.10)]"
                  >
                    <div className="grid size-12 place-items-center rounded-xl border border-[color:var(--color-border)] bg-slate-50 text-slate-700">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                      {category.eyebrow}
                    </p>
                    <h2 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                      {category.title}
                    </h2>
                    <p className="mt-4 flex-1 text-sm leading-7 text-[color:var(--color-text-muted)]">
                      {category.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text)] transition-colors group-hover:text-slate-600">
                      View category
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-20 space-y-20">
            {productCategories.map((category) => {
              const Icon = category.icon;

              return (
                <Reveal key={category.title}>
                  <section className="border-t border-[color:var(--color-border)] pt-12">
                    <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
                      <div>
                        <div className="grid size-12 place-items-center rounded-xl border border-[color:var(--color-border)] bg-slate-50 text-slate-700">
                          <Icon className="size-5" aria-hidden="true" />
                        </div>
                        <p className="mt-5 font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                          {category.eyebrow}
                        </p>
                        <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                          {category.title}
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)]">
                          {category.description}
                        </p>
                        <Link
                          href={category.href}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:text-slate-600"
                        >
                          Open category
                          <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                      </div>

                      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
                        {category.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgb(15_23_42/0.09)]"
                          >
                            <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--color-surface-soft)]">
                              {item.image ? (
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  sizes="(min-width: 1024px) 34vw, 100vw"
                                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                />
                              ) : null}
                            </div>
                            <div className="flex flex-1 flex-col p-5">
                              <h3 className="flex min-h-[2.5em] items-start font-heading text-xl font-bold leading-tight tracking-normal text-[color:var(--color-text)]">
                                {item.title}
                              </h3>
                              {item.operatingBand ? (
                                <div className="mt-4">
                                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-600">
                                    Operating band
                                  </p>
                                  <p className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--color-text)]">
                                    {item.operatingBand}
                                  </p>
                                </div>
                              ) : null}
                              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[color:var(--color-text)] transition-colors group-hover:text-slate-600">
                                View product
                                <ArrowRight
                                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </section>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
