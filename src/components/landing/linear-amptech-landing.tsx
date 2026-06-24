"use client";

import { useEffect, useState } from "react";
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
  Radar,
  RadioTower,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Waves,
  type LucideIcon,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { Reveal } from "@/components/landing/reveal";

type ProductCard = {
  slug?: string;
  title: string;
  description: string;
  tags: string[];
  imagePath: string;
  icon: LucideIcon;
};

type StandardCard = {
  title: string;
  description: string;
  imagePath?: string;
  footer?: string;
  icon: LucideIcon;
};

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
};

const heroSlides: HeroSlide[] = [
  {
    eyebrow: "RF Front-End Technologies",
    title:
      "RF Front-End Technologies for Next-Generation Wireless, Radar, and Defense Systems",
    description:
      "Linear-AmpTech develops GaN power amplifier modules, CMOS/BiCMOS RFICs, mm-wave transceivers, active antennas, and packaging solutions from design to measured prototypes.",
    imagePath: "/assets/hero-section-slider/hero-linear-amptech-rfic-chip.png",
    imageAlt:
      "Premium 3D RFIC semiconductor chip graphic placeholder for the Linear-AmpTech hero",
  },
  {
    eyebrow: "GaN PA Modules",
    title:
      "High-power GaN platforms from module architecture to measured PA hardware.",
    description:
      "Hybrid MIC PA modules and C-Ku band GaN-on-SiC PA chip families support demanding communication, radar, aerospace, and defense front ends.",
    imagePath: "/assets/hero-section-slider/c-ku-band-pa-chip.png",
    imageAlt: "GaN C-Ku band PA chip hero slide placeholder",
  },
  {
    eyebrow: "CMOS / BiCMOS RFICs",
    title: "mm-wave transmitter, receiver, and radar IC capability.",
    description:
      "Si CMOS and SiGe BiCMOS development paths support RFIC IP, 47 GHz transceiver blocks, radar front ends, phase shifting, and phased-array systems.",
    imagePath: "/assets/hero-section-slider/ghz-transmitter-chip.png",
    imageAlt: "mm-wave SiGe BiCMOS RFIC hero slide placeholder",
  },
  {
    eyebrow: "Packaging & Validation",
    title: "Chip-to-package-to-prototype workflows for RF deployment.",
    description:
      "Packaging, integration, measurement, chamber validation, RIS prototypes, and active antenna workflows close the loop from architecture to deployable hardware.",
    imagePath: "/assets/hero-section-slider/c-ku-band-pa-chip.png",
    imageAlt: "Semiconductor wafer packaging and validation hero slide visual",
  },
];

const stats = [
  ["0.5-81 GHz", "Wideband RF expertise"],
  ["GaN", "High-power semiconductor platforms"],
  ["CMOS / BiCMOS", "Scalable RFIC development"],
  ["SiGe", "Ultra-high-frequency integrated solutions"],
] as const;

const productCards: ProductCard[] = [
  {
    slug: "hybrid-mic-pa-modules",
    title: "Hybrid MIC PA Modules",
    description:
      "Complete power amplifier module capability with gain-chain budgeting, power conditioning, VSWR protection, and multiple units in the 0.5-3.25 GHz range.",
    tags: ["0.5-3.25 GHz", "Power conditioning", "VSWR protection"],
    imagePath: "/assets/images/products/hybrid-mic-pa-module.png",
    icon: RadioTower,
  },
  {
    slug: "fully-integrated-c-ku-band-pa-chip",
    title: "Fully Integrated C-Ku Band PA Chip",
    description:
      "5W fully integrated C-Ku band GaN-on-SiC PA chip family with QFN44 and QFN56 variants, completed simulation, tapeout, and measurement.",
    tags: ["5-18 GHz", "4-19.5 GHz", "QFN44 / QFN56"],
    imagePath: "/assets/images/products/c-ku-band-pa-chip.png",
    icon: Cpu,
  },
  {
    slug: "fully-integrated-transmitter-chip",
    title: "Fully Integrated Transmitter Chip",
    description:
      "47.2-48.2 GHz fully integrated transmitter chip in GF 130nm SiGe BiCMOS with 20 dB conversion gain and 15 dBm output power.",
    tags: ["47.2-48.2 GHz", "SiGe BiCMOS", "15 dBm output"],
    imagePath: "/assets/images/products/47ghz-transmitter-chip.png",
    icon: Waves,
  },
  {
    slug: "fully-integrated-receiver-chip",
    title: "Fully Integrated Receiver Chip",
    description:
      "mm-wave receiver IC capability for high-frequency RF front-end systems, radar, phased arrays, and advanced wireless platforms.",
    tags: ["mm-wave", "Receiver IC", "Low noise"],
    imagePath: "/assets/images/products/receiver-chip.png",
    icon: ScanLine,
  },
  {
    slug: "fully-integrated-radar-front-end-chip",
    title: "Radar Front-End Chips",
    description:
      "Integrated radar front-end chip development for MIMO radar, phased-array systems, sensing, and high-frequency RF applications.",
    tags: ["Radar", "MIMO", "Phased array"],
    imagePath: "/assets/images/products/radar-front-end-chip.png",
    icon: Radar,
  },
  {
    slug: "8-bit-phase-shifter-chip",
    title: "8-Bit Phase Shifter Chips",
    description:
      "Compact phase shifter IC solutions for beamforming, phased arrays, mm-wave systems, and active antenna architectures.",
    tags: ["8-bit", "Beamforming", "Phased arrays"],
    imagePath: "/assets/images/products/phase-shifter-chip.png",
    icon: CircuitBoard,
  },
  {
    slug: "active-antenna",
    title: "Active Antenna",
    description:
      "Prototype active antenna systems with RF front-end integration, measurement, and chamber validation workflows.",
    tags: ["Active antenna", "Prototype", "Validation"],
    imagePath: "/assets/images/products/active-antenna.png",
    icon: RadioTower,
  },
  {
    slug: "ris-prototype",
    title: "RIS Prototype",
    description:
      "Reconfigurable intelligent surface prototype capability for next-generation wireless, 6G, and advanced propagation research.",
    tags: ["RIS", "6G", "Prototype"],
    imagePath: "/assets/images/products/ris-prototype.png",
    icon: Boxes,
  },
  {
    slug: "mm-wave-packaging-integration",
    title: "mm-Wave Packaging & Integration",
    description:
      "Advanced packaging and integration workflows for high-frequency chips, modules, antennas, and measured RF systems.",
    tags: ["Packaging", "Integration", "mm-wave"],
    imagePath: "/assets/images/products/mmwave-packaging.png",
    icon: PackageCheck,
  },
];

const technologyCards: StandardCard[] = [
  {
    title: "III-V GaN Technology",
    description:
      "High-power-density PA MMICs and T/R front-end modules up to Ku-band, built for resilient defense, aerospace, and high-power RF systems.",
    footer: "Standalone PA MMIC chips and T/R front-end modules up to Ku-band.",
    imagePath: "/assets/images/technology/gan-technology.png",
    icon: RadioTower,
  },
  {
    title: "Si CMOS Technology",
    description:
      "Scalable RFIC IP for lower 5G FR2 and 6G FR3 bands, including RF-SOI switch concepts, PA IP cores, and analog predistortion.",
    footer:
      "mm-wave FR2 PA IP-core, 6G FR3 transceivers, and analog predistorters.",
    imagePath: "/assets/images/technology/si-cmos-technology.png",
    icon: Cpu,
  },
  {
    title: "SiGe BiCMOS Technology",
    description:
      "mm-wave and sub-THz performance for wireless transceivers, phased-array 6G ICs, MIMO radar, and D-band front-end research.",
    footer:
      "mm-wave FR2 PA, D-band PA, and sub-THz transceivers for radar applications.",
    imagePath: "/assets/images/technology/sige-bicmos-technology.png",
    icon: Waves,
  },
];

const applicationCards: StandardCard[] = [
  {
    title: "Defense and Aerospace RF",
    description:
      "Resilient PA modules, T/R front-end technologies, and high-power RF systems for demanding environments.",
    imagePath: "/assets/images/applications/defense-aerospace-rf.png",
    icon: ShieldCheck,
  },
  {
    title: "6G and Massive MIMO",
    description:
      "FR2/FR3 PA IP cores, analog predistorters, and transceiver blocks for next-generation wireless infrastructure.",
    imagePath: "/assets/images/applications/6g-massive-mimo.png",
    icon: RadioTower,
  },
  {
    title: "MIMO Radar and Phased Arrays",
    description:
      "Radar front-end ICs, phase shifters, beamforming blocks, and high-frequency system integration.",
    imagePath: "/assets/images/applications/mimo-radar-phased-array.png",
    icon: Radar,
  },
  {
    title: "RIS and Active Antenna Systems",
    description:
      "Prototype development, RF validation, chamber testing, and reconfigurable surface research.",
    imagePath: "/assets/images/applications/ris-active-antenna.png",
    icon: Boxes,
  },
];

const capabilityPills = [
  "MIC and MMIC PA Design",
  "GaN HEMT Device Research",
  "RIS and Active Antenna Validation",
  "FPGA and DPD Linearization",
  "Doherty and Waveform Engineering PA",
  "mm-Wave Packaging",
  "RF Measurement and Validation",
];

const workflowSteps = [
  { title: "Architecture & Specification", icon: Factory },
  { title: "Circuit Design & Simulation", icon: CircuitBoard },
  { title: "Layout & Tapeout", icon: Layers3 },
  { title: "Packaging & Integration", icon: PackageCheck },
  { title: "Measurement & Validation", icon: Microscope },
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

function VisualPlaceholder({
  path,
  alt,
  className = "",
  dark = false,
}: {
  path: string;
  alt: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative isolate grid min-h-56 overflow-hidden rounded-[var(--radius-card)] border ${
        dark
          ? "border-white/15 bg-slate-950"
          : "border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)]"
      } ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(16_199_232_/_0.16),transparent_34%,rgb(110_225_93_/_0.14)_72%,transparent)]" />
      <div className="absolute inset-8 rounded-2xl border border-dashed border-[color:var(--color-primary)]/45" />
      <div className="absolute left-8 top-8 h-2 w-16 rounded-full bg-[color:var(--color-primary)]" />
      <div className="absolute bottom-8 right-8 h-2 w-12 rounded-full bg-[color:var(--color-secondary)]" />
      <div className="relative z-10 flex h-full min-h-56 flex-col justify-end p-6">
        <p
          className={`font-heading text-lg font-semibold ${
            dark ? "text-white" : "text-[color:var(--color-text)]"
          }`}
        >
          Visual placeholder
        </p>
        <p
          className={`mt-2 max-w-md text-sm leading-6 ${
            dark ? "text-slate-300" : "text-[color:var(--color-text-muted)]"
          }`}
        >
          {alt}
        </p>
        <code
          className={`mt-4 rounded-lg border px-3 py-2 text-xs ${
            dark
              ? "border-white/15 bg-white/5 text-cyan-200"
              : "border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-primary-deep)]"
          }`}
        >
          {path}
        </code>
      </div>
    </div>
  );
}

function ProductPortfolioCard({ product }: { product: ProductCard }) {
  const Icon = product.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--color-primary)]/70">
      {/* Replace with final product visual: {product.imagePath} */}
      <VisualPlaceholder
        path={product.imagePath}
        alt={`${product.title} product visual placeholder`}
        className="min-h-48 rounded-none border-0 shadow-none"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 grid size-11 place-items-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-primary-deep)]">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-xl font-bold text-[color:var(--color-text)]">
          {product.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[color:var(--color-text-muted)]">
          {product.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-2.5 py-1 text-xs font-medium text-[color:var(--color-text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={product.slug ? `/products/${product.slug}` : "/#contact"}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary)]"
        >
          Learn More
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

function StandardImageCard({ card }: { card: StandardCard }) {
  const Icon = card.icon;

  return (
    <article className="h-full rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
      {card.imagePath ? (
        <>
          {/* Replace with final visual: {card.imagePath} */}
          <VisualPlaceholder
            path={card.imagePath}
            alt={`${card.title} visual placeholder`}
            className="mb-5 min-h-44"
          />
        </>
      ) : null}
      <div className="grid size-11 place-items-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-primary-deep)]">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-heading text-xl font-bold text-[color:var(--color-text)]">
        {card.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[color:var(--color-text-muted)]">
        {card.description}
      </p>
      {card.footer ? (
        <p className="mt-5 border-t border-[color:var(--color-border)] pt-4 text-sm font-semibold leading-6 text-[color:var(--color-primary-deep)]">
          {card.footer}
        </p>
      ) : null}
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
                  className="grid size-12 place-items-center rounded-lg border border-white/15 bg-white/[0.055] text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-200/45 hover:bg-cyan-200/12"
                  onClick={showPreviousSlide}
                  aria-label="Show previous hero slide"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="grid size-12 place-items-center rounded-lg border border-cyan-200/35 bg-cyan-200/12 text-cyan-50 shadow-[0_18px_70px_rgba(34,211,238,0.16)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-100/65 hover:bg-cyan-200/20"
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
              onMouseEnter={() => setIsSliderPaused(true)}
              onMouseLeave={() => setIsSliderPaused(false)}
              onFocus={() => setIsSliderPaused(true)}
              onBlur={() => setIsSliderPaused(false)}
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
              {stats.map(([value, label]) => (
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
          {/* Replace with final company visual: /assets/images/company-wafer-clean.png */}
          <VisualPlaceholder
            path="/assets/images/company-wafer-clean.png"
            alt="Clean semiconductor wafer or RF engineering lab-inspired visual placeholder"
            className="min-h-[500px]"
          />
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
            {productCards.map((product) => (
              <ProductPortfolioCard key={product.title} product={product} />
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
            {technologyCards.map((card) => (
              <StandardImageCard key={card.title} card={card} />
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
            {applicationCards.map((card) => (
              <StandardImageCard key={card.title} card={card} />
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
              {capabilityPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-xl border border-cyan-200/15 bg-cyan-200/10 px-3 py-2 text-sm font-medium text-cyan-50"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
          {/* Replace with final capability visual: /assets/images/capability/rf-lab-validation.png */}
          <VisualPlaceholder
            path="/assets/images/capability/rf-lab-validation.png"
            alt="Premium RF lab measurement and validation setup visual placeholder"
            className="min-h-[440px] border-white/15 bg-white/[0.04]"
            dark
          />
        </Reveal>
      </section>

      <section className="py-24">
        <Reveal className="container mx-auto px-5 lg:px-8">
          <SectionHeader
            label="Workflow"
            title="From architecture to measured prototype."
          />
          {/* Replace with final workflow diagram: /assets/images/process/rf-development-workflow.svg */}
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
            <code className="mt-5 block rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-4 py-3 text-xs text-[color:var(--color-text-muted)]">
              /assets/images/process/rf-development-workflow.svg
            </code>
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
              <a
                href="mailto:sales@linearamptech.com"
                className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-4 transition-colors hover:text-[color:var(--color-primary-deep)]"
              >
                sales@linearamptech.com
              </a>
              <a
                href="tel:+918979617318"
                className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-4 transition-colors hover:text-[color:var(--color-primary-deep)]"
              >
                +91 89796 17318
              </a>
              <p className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] p-4 leading-6">
                Incubation building IHUB DivyaSampark, I.I.T Roorkee, Roorkee,
                Uttarakhand, India 247667
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-[color:var(--color-border)] bg-[color:var(--color-bg)] py-10">
        <div className="container mx-auto flex flex-wrap items-center gap-4 px-5 text-sm text-[color:var(--color-text-muted)] lg:px-8">
          <Sparkles
            className="size-4 text-[color:var(--color-accent-orange)]"
            aria-hidden="true"
          />
          <span>
            Final graphics are intentionally represented as layout-ready
            placeholders until Linear-AmpTech visual assets are supplied.
          </span>
        </div>
      </section>
    </main>
  );
}
