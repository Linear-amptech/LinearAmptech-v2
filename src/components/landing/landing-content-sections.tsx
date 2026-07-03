import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// deployed
import {
  applications,
  ipPlatforms,
  productBands,
  researchFocusRows,
  type Application,
  type IpPlatform,
  type Product,
} from "@/components/landing/data";

import { Reveal } from "@/components/landing/reveal";
import { CompanySection } from "@/components/landing/company-section";
import { RdEngineBackgroundSlider } from "@/components/landing/rd-engine-background-slider";
import { WorkflowSection } from "@/components/landing/workflow-section";
import { AllProdcuts } from "../products/AllProducts";

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

const technologyImages: Partial<Record<IpPlatform["name"], string>> = {
  "III-V GaN Technology": "/assets/technology/gan-hemt-platform-v2.png",
  "Si CMOS Technology": "/assets/technology/si-cmos-platform-v2.png",
  "SiGe BiCMOS Technology": "/assets/technology/sige-bicmos-platform-v2.png",
};

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

function TechnologyCard({ platform }: { platform: IpPlatform }) {
  const platformImage = technologyImages[platform.name] ?? platform.image;

  return (
    <article className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 shadow-[var(--shadow-card)] transition-[box-shadow,border-color] duration-300 hover:border-[#F2C79E] hover:shadow-[var(--shadow-card-hover)]">
      <div className="media-well aspect-[16/10] bg-[color:var(--color-surface-soft)] bg-none">
        <Image
          src={platformImage}
          alt={`${platform.name} technology visual`}
          fill
          sizes="(min-width: 1024px) 31vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-2.5 pt-5 pb-2.5">
        <h3 className="font-heading text-[23px] font-semibold tracking-tight text-[color:var(--color-text)]">
          {platform.name}
        </h3>
        <p className="mt-2.5 mb-5 line-clamp-3 text-sm leading-relaxed text-[color:var(--color-text-muted)]">
          {platform.description}
        </p>
        <div className="mt-auto border-t border-[color:var(--color-border)] pt-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
            Focus
          </p>
          <p className="mt-1.5 line-clamp-2 text-[13px] font-medium leading-relaxed text-[color:var(--color-text)]">
            {platform.focus}
          </p>
        </div>
      </div>
    </article>
  );
}

function ApplicationCard({ application }: { application: Application }) {
  return (
    <article className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 shadow-[var(--shadow-card)] transition-[box-shadow,border-color] duration-300 hover:border-[#F2C79E] hover:shadow-[var(--shadow-card-hover)]">
      <div className="media-well aspect-[16/11]">
        <Image
          src={application.image}
          alt={`${application.title} application visual`}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            application.title === "Defense and Aerospace"
              ? "object-[50%_18%]"
              : application.title === "5G/6G Wireless Infrastructure"
                ? "object-[50%_38%]"
                : application.title === "Radar and AESA System"
                  ? "object-[50%_18%]"
                  : "object-center"
          }`}
        />
      </div>
      <div className="flex flex-1 flex-col px-2.5 pt-4 pb-2.5">
        <h3 className="font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text)]">
          {application.title}
        </h3>
        <p className="mt-2 mb-4 text-sm leading-relaxed text-[color:var(--color-text-muted)]">
          {application.description}
        </p>
      </div>
    </article>
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

      <section
        id="products"
        className="flex min-h-[100svh] items-center bg-[color:var(--color-surface-soft)] py-16"
      >
        <Reveal className="container mx-auto w-full px-4 lg:px-4">
          <SectionHeader
            label="Products"
            title="RF front-end Product Portfolio—from power amplifier modules to advanced RFICs and MMICs."
            intro="The portfolio is organized around component families, validated chip and module options, integration readiness, and customization paths for customer programs."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AllProdcuts />
          </div>
        </Reveal>
      </section>

      <section
        id="technology"
        className="flex min-h-[100svh] items-center py-16"
      >
        <Reveal className="container mx-auto w-full px-4 lg:px-4">
          <SectionHeader
            label="Technology"
            title="Engineering across semiconductor technologies."
          />
          <div className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ipPlatforms.map((platform) => (
              <TechnologyCard key={platform.name} platform={platform} />
            ))}
          </div>
        </Reveal>
      </section>

      <section
        id="applications"
        className="flex min-h-[100svh] items-center bg-[color:var(--color-surface-soft)] py-16"
      >
        <Reveal className="container mx-auto w-full px-4 lg:px-4">
          <SectionHeader
            label="Applications"
            title="RF products shaped around real deployment domains."
            intro="Linear-AmpTech's application framing is anchored in defense RF, 6G, radar, phased arrays, active antennas, and RIS research."
          />
          <div className="mt-16 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <ApplicationCard
                key={application.title}
                application={application}
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section
        id="rd"
        className="relative isolate flex min-h-[calc(100svh-2rem)] items-center overflow-hidden bg-[#121110] text-white"
      >
        <RdEngineBackgroundSlider />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgb(18_17_16_/_0.93)_0%,rgb(18_17_16_/_0.78)_36%,rgb(18_17_16_/_0.36)_68%,rgb(18_17_16_/_0.16)_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto flex min-h-[calc(100svh-17rem)] px-4 lg:px-4">
          <div className="flex max-w-3xl flex-col justify-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#FDEAD7]/80">
              R&D Engine
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-balance text-white sm:text-4xl lg:text-[44px]">
              Semiconductor R&D engine for next-generation RF systems.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/70">
              From RF architecture and silicon realization to packaged hardware
              and measured prototypes, Linear-AmpTech delivers complete
              development capability across the RF semiconductor value chain.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {researchFocusRows.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#FDEAD7]/20 bg-[#FDEAD7]/10 px-4 py-2 text-[13px] font-medium text-[#FDEAD7] transition-colors hover:border-[#EA7317]/50 hover:bg-[#FDEAD7]/15"
                >
                  {pill}
                </span>
              ))}
            </div>
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
              Start your next RF program with Linear-AmpTech.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--color-text-muted)]">
              Talk directly with the engineers who design, tape out, and
              validate the hardware.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-[52px] items-center gap-2.5 rounded-full bg-[#EA7317] px-8 text-[15px] font-semibold text-[#1C1917] shadow-[var(--shadow-card)] transition hover:bg-[#E06A0F] hover:shadow-[0_10px_24px_rgb(28_25_23/0.12)]"
          >
            Contact us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
