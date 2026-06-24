import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircuitBoard,
  Factory,
  Layers3,
  Microscope,
  PackageCheck,
} from "lucide-react";

import {
  applications,
  assets,
  ipPlatforms,
  metrics,
  products,
  researchFocusRows,
  type Application,
  type IpPlatform,
  type Product,
} from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

const workflowSteps = [
  { title: "Architecture & Specification", icon: Factory },
  { title: "Circuit Design & Simulation", icon: CircuitBoard },
  { title: "Layout & Tapeout", icon: Layers3 },
  { title: "Packaging & Integration", icon: PackageCheck },
  { title: "Measurement & Validation", icon: Microscope },
] as const;

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
        className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] ${
          inverted
            ? "text-[color:var(--color-secondary)]"
            : "text-[color:var(--color-primary-deep)]"
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
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-primary)]/70">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[color:var(--color-surface-soft)]"
        aria-label={`View ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-contain p-4 transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-start justify-end gap-4">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary)]"
          >
            Learn More
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[color:var(--color-text-muted)]">
          {product.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.features.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-2.5 py-1 text-xs font-medium text-[color:var(--color-text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function TechnologyCard({ platform }: { platform: IpPlatform }) {
  return (
    <article className="h-full overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/3] bg-[color:var(--color-surface-soft)]">
        <Image
          src={platform.image}
          alt={`${platform.name} technology visual`}
          fill
          sizes="(min-width: 1024px) 31vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl font-bold text-[color:var(--color-text)]">
          {platform.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
          {platform.description}
        </p>
        <p className="mt-5 border-t border-[color:var(--color-border)] pt-4 text-sm font-semibold leading-6 text-[color:var(--color-primary-deep)]">
          {platform.focus}
        </p>
      </div>
    </article>
  );
}

function ApplicationCard({ application }: { application: Application }) {
  return (
    <article className="h-full overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[var(--shadow-card)]">
      <div className="relative aspect-[4/3] bg-[color:var(--color-surface-soft)]">
        <Image
          src={application.image}
          alt={`${application.title} application visual`}
          fill
          sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl font-bold text-[color:var(--color-text)]">
          {application.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
          {application.description}
        </p>
      </div>
    </article>
  );
}

export function LandingContentSections() {
  return (
    <>
      <section id="company" className="py-24">
        <Reveal className="container mx-auto grid gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionHeader
              label="Company"
              title="Engineering RF semiconductor products from research to deployment."
              intro="Linear-AmpTech transforms RF and semiconductor research into scalable products and deployable solutions across communication, radar, defense, aerospace, and next-generation wireless systems."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {metrics.map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-soft)]"
                >
                  <p className="font-heading text-3xl font-bold text-[color:var(--color-text)]">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[500px] overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] shadow-[var(--shadow-card)]">
            <Image
              src={assets.siliconWafer}
              alt="Semiconductor wafer visual for Linear-AmpTech"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section
        id="products"
        className="bg-[color:var(--color-surface-soft)] py-24"
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

      <section id="technology" className="py-24">
        <Reveal className="container mx-auto px-5 lg:px-8">
          <SectionHeader
            label="Technology"
            title="Engineering across semiconductor technologies."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ipPlatforms.map((platform) => (
              <TechnologyCard key={platform.name} platform={platform} />
            ))}
          </div>
        </Reveal>
      </section>

      <section
        id="applications"
        className="bg-[color:var(--color-surface)] py-24"
      >
        <Reveal className="container mx-auto px-5 lg:px-8">
          <SectionHeader
            label="Applications"
            title="RF products shaped around real deployment domains."
            intro="Linear-AmpTech's application framing is anchored in defense RF, 6G, radar, phased arrays, active antennas, and RIS research."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {applications.map((application) => (
              <ApplicationCard
                key={application.title}
                application={application}
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative isolate overflow-hidden bg-[#050b12] py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(16_199_232_/_0.16),transparent_34%),radial-gradient(circle_at_80%_80%,rgb(110_225_93_/_0.1),transparent_30%)]" />
        <Reveal className="container relative z-10 mx-auto grid gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              label="R&D Engine"
              title="Semiconductor R&D engine for next-generation RF systems."
              intro="From RF architecture and silicon realization to packaged hardware and measured prototypes, Linear-AmpTech delivers complete development capability across the RF semiconductor value chain."
              inverted
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {researchFocusRows.map((pill) => (
                <span
                  key={pill}
                  className="rounded-xl border border-cyan-200/15 bg-cyan-200/10 px-3 py-2 text-sm font-medium text-cyan-50"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[440px] overflow-hidden rounded-[var(--radius-card)] border border-white/15 bg-white/[0.04] shadow-[var(--shadow-card)]">
            <Image
              src={assets.rdLab}
              alt="RF lab measurement and validation setup"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="py-24">
        <Reveal className="container mx-auto px-5 lg:px-8">
          <SectionHeader
            label="Workflow"
            title="From architecture to measured prototype."
          />
          <div className="mt-12 rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
            <div className="grid gap-4 lg:grid-cols-5">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="relative rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-5"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span className="font-heading text-sm font-bold text-[color:var(--color-primary-deep)]">
                        0{index + 1}
                      </span>
                      <Icon
                        className="size-5 text-[color:var(--color-secondary)]"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-heading text-lg font-bold leading-6 text-[color:var(--color-text)]">
                      {step.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
