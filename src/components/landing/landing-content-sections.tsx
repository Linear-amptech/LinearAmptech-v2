import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// deployed
import {
  applications,
  ipPlatforms,
  productBands,
  type Product,
} from "@/components/landing/data";

import { Reveal } from "@/components/landing/reveal";
import { ApplicationsShowcase } from "@/components/landing/applications-showcase";
import { CompanySection } from "@/components/landing/company-section";
import { RdEngineBackgroundSlider } from "@/components/landing/rd-engine-background-slider";
import {
  TechnologyShowcase,
  type TechnologyPlatform,
} from "@/components/landing/technology-showcase";
import { WorkflowSection } from "@/components/landing/workflow-section";

// Saffron-tinted card variants, shown only on the landing grid; each lives
// beside its product's assets as card-saffron.png.
const homepageProductImages: Partial<Record<Product["slug"], string>> = {
  "hybrid-mic-pa-modules":
    "/assets/products/rf-power-amplifiers/hybrid-mic-pa-modules/card-saffron-v2.png",
  "fully-integrated-c-ku-band-pa-chip":
    "/assets/products/rf-power-amplifiers/c-ku-band-pa-chip/card-saffron-v6.png",
  "fully-integrated-transmitter-chip":
    "/assets/products/rf-mmwave-front-end-modules/transmitter/card-saffron-v2.png",
  "fully-integrated-receiver-chip":
    "/assets/products/rf-mmwave-front-end-modules/receiver/card-saffron-v2.png",
  "fully-integrated-radar-front-end-chip":
    "/assets/products/rf-mmwave-front-end-modules/radar/card-saffron-v2.png",
  "8-bit-phase-shifter-chip":
    "/assets/products/phase-shifter/card-saffron-v2.png",
};

const technologyPlatforms: TechnologyPlatform[] = ipPlatforms.map(
  ({ name, image, description, focus }) => ({
    name,
    image,
    description,
    focus,
  }),
);

const homepageProductCategories = [
  {
    title: "RF & mm-Wave Power Amplifier",
    eyebrow: "Power amplifier families",
    description:
      "Hybrid MIC modules and GaN-on-SiC MMIC PA chips for high-power RF and mm-wave systems.",
    href: "/products/rf/power-amplifiers",
    image: "/assets/products/categories/power-amplifier-families.png",
    alt: "RF and mm-wave power amplifier module hardware",
  },
  {
    title: "RF & mm-Wave Front End Modules",
    eyebrow: "Integrated RFICs",
    description:
      "Fully integrated transmitter, receiver, and radar front-end chips from the mm-wave portfolio.",
    href: "/products/rf-mmwave-front-end-modules",
    image: "/assets/products/categories/integrated-rfic.png",
    alt: "RF and mm-wave front-end module chip portfolio",
  },
  {
    title: "Phase Shifter IC",
    eyebrow: "Beamforming IC",
    description:
      "Phase-shifting IC capability for phased arrays, radar front ends, and reconfigurable RF systems.",
    href: "/products/8-bit-phase-shifter-chip",
    image: "/assets/products/categories/phase-shifter.png",
    alt: "Phase shifter IC package and circuit hardware",
  },
] as const;

function SectionHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="kicker mb-4">{label}</p>
      <h2 className="font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-[color:var(--color-text)] text-balance sm:text-4xl lg:text-[44px]">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-[17px] leading-relaxed text-[color:var(--color-text-muted)]">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function ProductPortfolioCard({
  product,
  useHomepageImage = false,
}: {
  product: Product;
  useHomepageImage?: boolean;
}) {
  const band = productBands[product.slug];
  const homepageImage = useHomepageImage
    ? homepageProductImages[product.slug]
    : undefined;
  const productImage = homepageImage ?? product.image;

  return (
    <article className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 shadow-[var(--shadow-card)] transition-[box-shadow,border-color] duration-300 hover:border-[#F2C79E] hover:shadow-[var(--shadow-card-hover)]">
      {/* light well: the default dark well shows as thin corner arcs behind these ivory renders */}
      <div className="media-well aspect-[16/10] bg-[color:var(--color-surface-soft)] bg-none">
        <Image
          src={productImage}
          alt={product.alt}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-2.5 pt-5 pb-2.5">
        <h3 className="min-h-[2.75em] font-heading text-[21px] font-semibold leading-snug tracking-tight text-[color:var(--color-text)]">
          <Link
            href={`/products/${product.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {product.name}
          </Link>
        </h3>
        {band ? (
          <div className="mt-1.5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
              Operating band
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--color-text)]">
              {band.label}
            </p>
          </div>
        ) : null}
        <div className="mt-auto pt-3">
          <Link
            href={`/products/${product.slug}`}
            className="group/view relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
          >
            View product
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/view:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

function ProductsSection() {
  return (
    <section
      id="products"
      className="bg-[color:var(--color-surface-soft)] py-16 sm:py-20"
    >
      <Reveal className="container mx-auto w-full px-4 lg:px-4">
        <SectionHeader
          label="Products"
          title="RF front-end Product Portfolio."
          intro="Browse the portfolio by category, from high-power amplifier hardware to integrated mm-wave RFICs and beamforming ICs."
        />
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3 lg:mt-14">
          {homepageProductCategories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group flex h-full min-h-[30rem] flex-col rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 shadow-[var(--shadow-card)] transition-[box-shadow,border-color] duration-300 hover:border-[#F2C79E] hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="media-well relative aspect-[16/10] overflow-hidden rounded-md bg-[color:var(--color-media-well)]">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col px-4 pb-4 pt-7">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
                  {category.eyebrow}
                </p>
                <h3 className="mt-3 font-heading text-[1.55rem] font-semibold leading-tight tracking-normal text-[color:var(--color-text)]">
                  {category.title}
                </h3>
                <p className="mt-5 flex-1 text-[0.95rem] leading-8 text-[color:var(--color-text-muted)]">
                  {category.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text)] transition-colors group-hover:text-[color:var(--color-primary-deep)]">
                  View category
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function LandingContentSections() {
  return (
    <>
      <CompanySection>
        <Reveal>
          <SectionHeader
            label="About us"
            title="Engineering RF semiconductor products from research to deployment."
            intro="Linear-AmpTech transforms RF and semiconductor research into scalable products and deployable solutions across communication, radar, defense, aerospace, and next-generation wireless systems."
          />
          <Link
            href="/team"
            className="group/read-more mt-7 inline-flex items-center gap-1.5 border-b border-[#C2410C]/35 pb-0.5 text-[15px] font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:border-[#C2410C]"
          >
            Read more
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/read-more:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </CompanySection>
      <ProductsSection />

      <TechnologyShowcase platforms={technologyPlatforms} />

      <ApplicationsShowcase applications={applications} />

      <section
        id="rd"
        className="relative isolate min-h-[100svh] overflow-hidden border-y border-[color:var(--color-border)] bg-[color:var(--color-bg)]"
      >
        <RdEngineBackgroundSlider />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgb(250_247_242)_0%,rgb(250_247_242)_28%,rgb(250_247_242_/_0.92)_45%,rgb(250_247_242_/_0.58)_68%,rgb(250_247_242_/_0.16)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[2] bg-[linear-gradient(135deg,rgb(253_234_215_/_0.72)_0%,transparent_44%,rgb(234_115_23_/_0.28)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-[2] h-32 bg-[linear-gradient(180deg,transparent,rgb(250_247_242_/_0.96))]"
        />
        <Reveal className="container relative z-10 mx-auto flex min-h-[100svh] items-center px-4 py-24 lg:px-4">
          <div className="max-w-[46rem]">
            <p className="kicker mb-4">R&D Engine</p>
            <h2 className="font-heading text-3xl font-semibold leading-[1.08] tracking-tight text-[color:var(--color-text)] text-balance sm:text-4xl lg:text-[52px]">
              Semiconductor R&D engine for next-generation RF systems.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[color:var(--color-text-muted)]">
              From RF architecture and silicon realization to packaged hardware
              and measured prototypes, Linear-AmpTech delivers complete
              development capability across the RF semiconductor value chain.
            </p>

            <div className="mt-9 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[
                ["Architecture", "RFIC, MMIC, MIC modules"],
                ["Technology", "GaN, CMOS, SiGe"],
                ["Validation", "Wafer to module"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-l-2 border-[#EA7317] bg-[color:var(--color-surface)] px-4 py-3 shadow-[var(--shadow-card)]"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
                    {label}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-[color:var(--color-text)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* <div className="mt-10 flex max-w-3xl flex-wrap gap-2.5">
              {researchFocusRows.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#F2C79E] bg-[color:var(--color-accent-wash)] px-4 py-2 text-sm font-semibold text-[color:var(--color-primary-ink)] shadow-[var(--shadow-card)]"
                >
                  {pill}
                </span>
              ))}
            </div> */}
          </div>
        </Reveal>
      </section>

      <WorkflowSection />

      <section
        id="contact-cta"
        className="border-t border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] py-20"
      >
        <Reveal className="container mx-auto flex w-full flex-wrap items-center justify-between gap-12 px-4 lg:px-4">
          <div className="max-w-2xl">
            <p className="kicker mb-4">Contact</p>
            <h2 className="font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-[color:var(--color-text)] text-balance sm:text-[42px]">
              Power Your Next RF System with Linear AmpTech Products.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--color-text-muted)]">
              Talk directly with the engineers who design, tape out, and
              validate the hardware.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex h-[52px] items-center gap-2.5 rounded-full bg-[#EA7317] px-8 text-[15px] font-semibold text-[#1C1917] shadow-[var(--shadow-card)] transition hover:bg-[#E06A0F] hover:shadow-[0_10px_24px_rgb(28_25_23/0.12)]"
          >
            Contact us
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
