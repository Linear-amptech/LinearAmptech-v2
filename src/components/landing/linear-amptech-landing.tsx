"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  ChevronLeft,
  ChevronRight,
  CircuitBoard,
  Cpu,
  Factory,
  Layers3,
  Microscope,
  PackageCheck,
  Pause,
  Play,
  Radar,
  RadioTower,
  ShieldCheck,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  applications,
  assets,
  heroSlides as heroSlideContent,
  ipPlatforms,
  metrics,
  products,
  researchFocusRows,
  type Application,
  type IpPlatform,
  type Product,
} from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
};

const heroImages = [
  {
    imagePath: "/assets/hero-section-slider/hero-linear-amptech-rfic-chip.png",
    imageAlt: "Linear-AmpTech RFIC chip hero visual",
  },
  {
    imagePath: "/assets/hero-section-slider/rf-lab-validation.png",
    imageAlt: "Hybrid MIC PA module hero visual",
  },
  {
    imagePath: "/assets/hero-section-slider/ghz-transmitter-chip.png",
    imageAlt: "47 GHz transmitter chip hero visual",
  },
  {
    imagePath: "/assets/hero-section-slider/c-ku-band-pa-chip.png",
    imageAlt: "Semiconductor wafer hero visual",
  },
];

const heroSlides: HeroSlide[] = heroSlideContent.map((slide, index) => {
  const image = heroImages[index % heroImages.length];

  return {
    eyebrow: slide.eyebrow,
    title: slide.title,
    description: slide.description,
    imagePath: image.imagePath,
    imageAlt: image.imageAlt,
  };
});

const applicationIcons = [ShieldCheck, RadioTower, Radar, Boxes] as const;

const workflowSteps = [
  { title: "Architecture & Specification", icon: Factory },
  { title: "Circuit Design & Simulation", icon: CircuitBoard },
  { title: "Layout & Tapeout", icon: Layers3 },
  { title: "Packaging & Integration", icon: PackageCheck },
  { title: "Measurement & Validation", icon: Microscope },
] as const;

const contactItems = [
  {
    href: "mailto:sales@linearamptech.com",
    label: "sales@linearamptech.com",
  },
  {
    href: "tel:+918979617318",
    label: "+91 89796 17318",
  },
];

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
  const Icon = product.icon;

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
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="grid size-11 place-items-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-primary-deep)]">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary)]"
          >
            Learn More
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
          {product.category}
        </p>
        <h3 className="font-heading text-xl font-bold text-[color:var(--color-text)]">
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
  const Icon = platform.icon;

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
        <div className="grid size-11 place-items-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-primary-deep)]">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-heading text-xl font-bold text-[color:var(--color-text)]">
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

function ApplicationCard({
  application,
  index,
}: {
  application: Application;
  index: number;
}) {
  const Icon = applicationIcons[index % applicationIcons.length];

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
        <div className="grid size-11 place-items-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-primary-deep)]">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="mt-5 font-heading text-xl font-bold text-[color:var(--color-text)]">
          {application.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
          {application.description}
        </p>
      </div>
    </article>
  );
}

function HeroSliderSection() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, 170]);

  useEffect(() => {
    if (isSliderPaused) return;

    const interval = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isSliderPaused]);

  const activeSlide = heroSlides[activeHeroSlide];
  const showPreviousSlide = () => {
    setActiveHeroSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };
  const showNextSlide = () => {
    setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.imagePath}
            className="absolute inset-0 bg-cover bg-[position:66%_50%] bg-no-repeat will-change-transform"
            style={{ backgroundImage: `url(${slide.imagePath})` }}
            initial={false}
            animate={{
              opacity: activeHeroSlide === index ? 1 : 0,
              scale: activeHeroSlide === index ? 1.08 : 1,
            }}
            transition={{
              opacity: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 4.2, ease: "linear" },
            }}
          />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgb(5_11_18_/_0.9)_0%,rgb(5_11_18_/_0.76)_32%,rgb(5_11_18_/_0.32)_58%,transparent_82%)]"
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-18%] top-12 z-[2] h-[640px] w-[640px] rounded-full border border-cyan-200/10 bg-cyan-200/5 blur-3xl"
        style={{ y: heroY }}
      />

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] items-center px-5 lg:px-8">
        <Reveal>
          <div className="max-w-[47rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="font-heading max-w-[47rem] text-balance text-4xl font-bold leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-7xl">
                  {activeSlide.title}
                </h1>
                <p className="mt-7 max-w-[44rem] text-base leading-8 text-slate-300 sm:text-lg">
                  {activeSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-9 flex w-full max-w-[47rem] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#products"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-control)] bg-[color:var(--color-primary)] px-5 text-sm font-bold text-slate-950 shadow-[0_16px_36px_rgb(16_199_232_/_0.18)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-primary-deep)]"
                >
                  Explore Products
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="hero-play-toggle"
                  onClick={() => setIsSliderPaused((current) => !current)}
                  aria-label={
                    isSliderPaused
                      ? "Play hero slideshow"
                      : "Pause hero slideshow"
                  }
                  aria-pressed={isSliderPaused}
                >
                  {isSliderPaused ? (
                    <Play className="size-4" aria-hidden="true" />
                  ) : (
                    <Pause className="size-4" aria-hidden="true" />
                  )}
                  <span className="hero-progress-track" aria-hidden="true">
                    <span
                      key={activeHeroSlide}
                      className="hero-progress-fill"
                      data-paused={isSliderPaused}
                    />
                  </span>
                </button>
                <button
                  type="button"
                  className="hero-arrow-button"
                  onClick={showPreviousSlide}
                  aria-label="Show previous hero slide"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="hero-arrow-button is-primary"
                  onClick={showNextSlide}
                  aria-label="Show next hero slide"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div
              className="hero-slider-nav"
              data-paused={isSliderPaused}
              aria-label="Hero slides"
            >
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={activeHeroSlide === index ? "is-active" : ""}
                  onClick={() => setActiveHeroSlide(index)}
                  onMouseEnter={() => setActiveHeroSlide(index)}
                  aria-label={`Show hero slide ${index + 1}`}
                  aria-current={activeHeroSlide === index}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{slide.eyebrow}</strong>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function LinearAmptechLanding() {
  return (
    <main className="overflow-hidden bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <HeroSliderSection />

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
            {applications.map((application, index) => (
              <ApplicationCard
                key={application.title}
                application={application}
                index={index}
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

      <section
        id="contact"
        className="bg-[color:var(--color-surface-soft)] py-24"
      >
        <Reveal className="container mx-auto px-5 lg:px-8">
          <div className="grid gap-10 rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)] lg:grid-cols-[1fr_0.8fr] lg:p-10">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                Contact
              </p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-[color:var(--color-text)] sm:text-4xl">
                Building an RF front-end program?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--color-text-muted)]">
                Talk to Linear-AmpTech about product development, chip
                customization, module integration, packaging, or validation
                support.
              </p>
              <a
                href="mailto:sales@linearamptech.com"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-control)] bg-[color:var(--color-primary)] px-5 text-sm font-bold text-slate-950 shadow-[0_16px_36px_rgb(16_199_232_/_0.18)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-primary-deep)]"
              >
                Contact Engineering Team
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
            <div className="grid content-center gap-4 text-sm text-[color:var(--color-text-muted)]">
              {contactItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-4 transition-colors hover:text-[color:var(--color-primary-deep)]"
                >
                  {item.label}
                </a>
              ))}
              <p className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-4 leading-6">
                Incubation building IHUB DivyaSampark, I.I.T Roorkee, Roorkee,
                Uttarakhand, India 247667
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
