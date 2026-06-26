import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  applications,
  ipPlatforms,
  metrics,
  productBands,
  products,
  researchFocusRows,
  type Application,
  type IpPlatform,
  type Product,
} from "@/components/landing/data";

import { Reveal } from "@/components/landing/reveal";
import { CompanySection } from "@/components/landing/company-section";
import { RdEngineBackgroundSlider } from "@/components/landing/rd-engine-background-slider";
import { WorkflowSection } from "@/components/landing/workflow-section";

function SectionHeader({
  label,
  title,
  intro,
  inverted = false,
}: {
  label: string;
  title: string;
  intro?: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] ${
          inverted ? "text-white/45" : "text-[color:var(--color-text-muted)]"
        }`}
      >
        {label}
      </p>
      <h2
        className={`font-heading text-3xl font-bold leading-tight tracking-normal sm:text-4xl lg:text-5xl ${
          inverted ? "text-white" : "text-[color:var(--color-text)]"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            inverted ? "text-slate-300" : "text-[color:var(--color-text-muted)]"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function ProductPortfolioCard({ product }: { product: Product }) {
  const band = productBands[product.slug];
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(15_23_42/0.10)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--color-surface-soft)]">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-[family-name:var(--font-sora)] text-2xl font-semibold leading-snug tracking-tight text-[color:var(--color-text)]">
          <Link
            href={`/products/${product.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {product.name}
          </Link>
        </h3>
        {band ? (
          <div className="mt-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
              Operating band
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--color-text)]">
              {band.label}
            </p>
          </div>
        ) : (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
            {product.description}
          </p>
        )}
        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-text)]">
            View product
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </article>
  );
}

function TechnologyCard({ platform }: { platform: IpPlatform }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(15_23_42/0.10)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--color-surface-soft)]">
        <Image
          src={platform.image}
          alt={`${platform.name} technology visual`}
          fill
          sizes="(min-width: 1024px) 31vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text)]">
          {platform.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
          {platform.description}
        </p>
        <div className="mt-auto border-t border-[color:var(--color-border)] pt-4">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
            Focus
          </p>
          <p className="mt-1.5 text-sm font-medium leading-6 text-[color:var(--color-text)]">
            {platform.focus}
          </p>
        </div>
      </div>
    </article>
  );
}

function ApplicationCard({ application }: { application: Application }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(15_23_42/0.10)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-surface-soft)]">
        <Image
          src={application.image}
          alt={`${application.title} application visual`}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text)]">
          {application.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
          {application.description}
        </p>
        <span
          aria-hidden="true"
          className="mt-5 h-px w-full origin-left scale-x-0 bg-slate-300 transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </div>
    </article>
  );
}

export function LandingContentSections() {
  return (
    <>
      <CompanySection>
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
              Company
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
              Engineering RF semiconductor products from research to deployment.
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg">
              Linear-AmpTech transforms RF and semiconductor research into
              scalable products and deployable solutions across communication,
              radar, defense, aerospace, and next-generation wireless systems.{" "}
              <Link
                href="/team"
                className="group/read-more inline-flex items-center gap-1.5 whitespace-nowrap font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-text)]"
              >
                Read more
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover/read-more:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </p>
          </div>
          <div className="mt-6 grid auto-rows-fr grid-cols-2 gap-3 sm:mt-8">
            {metrics.map(([value, label], index) => {
              return (
                <div
                  key={value}
                  className="group relative flex h-full items-center overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgb(15_23_42/0.08)]"
                >
                  <span className="absolute right-4 top-4 text-[0.7rem] tracking-widest text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-3.5">
                    <div className="min-w-0">
                      <p className="text-xl font-semibold leading-tight tracking-tight text-[color:var(--color-text)]">
                        {value}
                      </p>
                      <p className="mt-1 font-[family-name:var(--font-sora)] text-[0.82rem] leading-snug text-[color:var(--color-text-muted)]">
                        {label}
                      </p>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-slate-300 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                </div>
              );
            })}
          </div>
        </Reveal>
      </CompanySection>

      <section
        id="products"
        className="bg-[color:var(--color-surface-soft)] py-16 sm:py-24"
      >
        <Reveal className="container mx-auto px-5 lg:px-8">
          <SectionHeader
            label="Products"
            title="RF front-end product portfolio from PA modules to mm-wave ICs."
            intro="The portfolio is organized around component families, validated chip and module options, integration readiness, and customization paths for customer programs."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductPortfolioCard key={product.slug} product={product} />
            ))}
          </div>
        </Reveal>
      </section>

      <section id="technology" className="py-16 sm:py-24">
        <Reveal className="container mx-auto px-5 lg:px-8">
          <SectionHeader
            label="Technology"
            title="Engineering across semiconductor technologies."
          />
          <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ipPlatforms.map((platform) => (
              <TechnologyCard key={platform.name} platform={platform} />
            ))}
          </div>
        </Reveal>
      </section>

      <section
        id="applications"
        className="bg-[color:var(--color-surface)] py-16 sm:py-24"
      >
        <Reveal className="container mx-auto px-5 lg:px-8">
          <SectionHeader
            label="Applications"
            title="RF products shaped around real deployment domains."
            intro="Linear-AmpTech's application framing is anchored in defense RF, 6G, radar, phased arrays, active antennas, and RIS research."
          />
          <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <ApplicationCard
                key={application.title}
                application={application}
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative isolate min-h-[calc(100svh-2rem)] overflow-hidden flex items-center bg-[#050b12]  text-white">
        <RdEngineBackgroundSlider />
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgb(5_11_18_/_0.93)_0%,rgb(5_11_18_/_0.78)_36%,rgb(5_11_18_/_0.36)_68%,rgb(5_11_18_/_0.16)_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto flex min-h-[calc(100svh-17rem)] px-5 lg:px-8">
          <div className="flex max-w-3xl flex-col justify-center">
            <SectionHeader
              label="R&D Engine"
              title="Semiconductor R&D engine for next-generation RF systems."
              intro="From RF architecture and silicon realization to packaged hardware and measured prototypes, Linear-AmpTech delivers complete development capability across the RF semiconductor value chain."
              inverted
            />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {researchFocusRows.map((pill) => (
                <span
                  key={pill}
                  className="rounded-lg border border-white/12 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-white/75 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <WorkflowSection />
    </>
  );
}
