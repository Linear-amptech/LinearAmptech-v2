"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ArrowRight,
  Atom,
  Cpu,
  Layers3,
  Orbit,
  RadioTower,
  Radar,
  Satellite,
  ScanLine,
  Shield,
  Sparkles,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const assets = {
  heroChip: "/assets/hero-chip.png",
  siliconWafer: "/assets/silicon-wafer.png",
  rfSignalWave: "/assets/rf-signal-wave.png",
  analogCircuit: "/assets/analog-circuit.png",
  rdLab: "/assets/rd-lab.png",
  laRfCore: "/assets/la-rf-core.png",
  laAnalogNexus: "/assets/la-analog-nexus.png",
  laSiliconLab: "/assets/la-silicon-lab.png",
  circuitBackground: "/assets/circuit-background.png",
  particleBackground: "/assets/particle-background.png",
  hybridPaModule: "/assets/ppt-products/hybrid-pa-module.png",
  ganPaModulePhoto: "/assets/ppt-products/gan-pa-module-photo.png",
  transceiverChipLayout: "/assets/ppt-products/transceiver-chip-layout.png",
  radarFrontEndLayout: "/assets/ppt-products/radar-front-end-layout.png",
  risFrontSide: "/assets/ppt-products/ris-front-side.png",
  risLabValidation: "/assets/ppt-products/ris-lab-validation.png",
  mmwavePackaging: "/assets/ppt-products/mmwave-packaging.png",
  chipPcbWaveguide: "/assets/ppt-products/chip-pcb-waveguide.png",
  dieProbeMicroscope: "/assets/ppt-products/die-probe-microscope.png",
  bondedDieCloseup: "/assets/ppt-products/bonded-die-closeup.png",
};

const capabilities: [string, LucideIcon][] = [
  ["GaN PA MMIC and high-power module design", RadioTower],
  ["CMOS and BiCMOS RFIC IP-core development", Cpu],
  ["mm-wave and sub-THz transmitter/receiver ICs", Waves],
  ["Radar front-end and phased-array RF electronics", Radar],
  ["Active antenna and RIS prototype development", Satellite],
  ["Chip-to-PCB-to-waveguide packaging", Layers3],
  ["Simulation, tapeout, measurement, and validation", ScanLine],
  ["Custom RF product engineering and licensing", Atom],
];

const productCategories = [
  "Hybrid MIC PA Modules",
  "Fully Integrated PA Chips",
  "Fully Integrated Transmitter Chips",
  "Fully Integrated Receiver Chips",
  "Radar Front-End Chips",
  "8-Bit Phase Shifter Chips",
  "Active Antenna / RIS Prototypes",
  "mm-Wave Packaging & Integration",
];

const ipPlatforms = [
  {
    name: "III-V GaN Technology",
    icon: RadioTower,
    image: assets.ganPaModulePhoto,
    description:
      "High-power-density PA MMICs and T/R front-end modules up to Ku-band, built for resilient defense and aerospace RF systems.",
    focus: "Standalone PA MMIC chips and T/R front-end modules up to Ku-band.",
  },
  {
    name: "Si CMOS Technology",
    icon: Cpu,
    image: assets.bondedDieCloseup,
    description:
      "Scalable RFIC IP for lower 5G FR2 and 6G FR3 bands, including RF-SOI switch concepts for 6G reconfigurable intelligent surfaces.",
    focus:
      "mm-wave FR2 PA IP-core, 6G FR3 transceivers, and analog predistorters for massive MIMO Tx.",
  },
  {
    name: "SiGe BiCMOS Technology",
    icon: Waves,
    image: assets.transceiverChipLayout,
    description:
      "mm-wave and sub-THz performance for wireless transceivers, phased-array 6G ICs, MIMO radar, and D-band front-end research.",
    focus:
      "mm-wave FR2 PA, D-band PA, and sub-THz transceivers for radar applications.",
  },
];

const products = [
  {
    name: "C-Ku Band GaN Power Amplifier",
    icon: RadioTower,
    image: assets.ganPaModulePhoto,
    alt: "Linear Amptech C-Ku band GaN power amplifier module hardware",
    description:
      "Fully integrated 5W C-Ku band power amplifier with completed simulation, tapeout, packaging, and measurement.",
    features: [
      "5-18 GHz / 4-19.5 GHz variants",
      "35-39.6 dBm peak power",
      "UMS 250nm GaN-on-SiC",
    ],
  },
  {
    name: "47 GHz Tx / Rx RFIC Chips",
    icon: Waves,
    image: assets.transceiverChipLayout,
    alt: "Linear Amptech fully integrated transmitter and receiver chip layout",
    description:
      "Pin-compatible transmitter and receiver ICs developed in GF 130nm SiGe BiCMOS for 47.2-48.2 GHz systems.",
    features: [
      "20 dB Tx conversion gain",
      "36.3-37 dB Rx voltage gain",
      "GF 130nm SiGe BiCMOS",
    ],
  },
  {
    name: "Radar Front-End and Phase Shifter Chips",
    icon: Radar,
    image: assets.radarFrontEndLayout,
    alt: "Linear Amptech radar front-end and phase shifter chip layout",
    description:
      "Integrated radar front-end and 8-bit phase shifter chip capabilities for phased-array and high-frequency radar systems.",
    features: [
      "71-81 GHz radar front end",
      "8.5 dB noise figure",
      "1.5 degree phase resolution",
    ],
  },
  {
    name: "Active Antenna and RIS Prototype",
    icon: Satellite,
    image: assets.risFrontSide,
    alt: "Linear Amptech RIS prototype front-side antenna array",
    description:
      "Prototype work in active antennas, non-Foster matching networks, and reconfigurable intelligent surface validation.",
    features: [
      "60 MHz-1.31 GHz return loss band",
      "8x8 RIS prototype",
      "Anechoic chamber validation",
    ],
  },
  {
    name: "mm-Wave Packaging and Integration",
    icon: Layers3,
    image: assets.mmwavePackaging,
    alt: "Linear Amptech chip-to-PCB-to-waveguide packaging integration diagram",
    description:
      "Packaging and transition design for chip-to-PCB-to-waveguide mm-wave assemblies and power combining networks.",
    features: [
      "47 GHz chip-PCB-waveguide transitions",
      "2-way power combining",
      "4-way radial divider/combiner",
    ],
  },
];

const industries = [
  "Defense RF front ends",
  "MIMO radar",
  "6G FR2 / FR3 wireless",
  "Satellite and aerospace links",
  "Massive MIMO transmitters",
  "Reconfigurable intelligent surfaces",
  "mm-wave phased arrays",
  "Cyber-physical systems",
];

const metrics = [
  ["0.5-81GHz", "Portfolio frequency span"],
  ["GaN", "High-power MMIC focus"],
  ["CMOS", "6G FR2 / FR3 RFIC IP"],
  ["SiGe", "mm-wave and sub-THz ICs"],
];

const applications = [
  {
    title: "Defense and Aerospace RF",
    image: assets.hybridPaModule,
    description:
      "Resilient PA modules, T/R front-end modules, and Ku-band RF electronics for high-reliability mission systems.",
  },
  {
    title: "6G and Massive MIMO",
    image: assets.dieProbeMicroscope,
    description:
      "FR2/FR3 PA IP cores, analog predistorters, and transceiver blocks for scalable high-frequency communication.",
  },
  {
    title: "MIMO Radar and Phased Arrays",
    image: assets.chipPcbWaveguide,
    description:
      "mm-wave radar front-end chips, phase shifting, packaging transitions, and power combining for array systems.",
  },
  {
    title: "RIS and Active Antenna Systems",
    image: assets.risLabValidation,
    description:
      "Prototype development and chamber validation for active antenna matching networks and reconfigurable surfaces.",
  },
];

const heroSlides = [
  {
    eyebrow: "IP Core / RF Front-End Components / MMIC Products",
    title: "Creating Difference with RF Front-End Technology.",
    description:
      "Indigenous RF front-end components, GaN-based MMICs, high-power modules, CMOS/BiCMOS RFIC IP cores, and silicon-validated systems for cyber-physical electronics.",
    image: assets.heroChip,
  },
  {
    eyebrow: "GaN Power Amplifier Modules",
    title: "C-Ku Band Power Built for Demanding RF Systems.",
    description:
      "Fully integrated GaN-on-SiC PA modules and chips targeting high-power, high-reliability communication, radar, aerospace, and defense front ends.",
    image: assets.ganPaModulePhoto,
  },
  {
    eyebrow: "SiGe BiCMOS RFIC Development",
    title: "47 GHz Transmitter and Receiver IC Capability.",
    description:
      "Pin-compatible transmitter and receiver ICs for mm-wave systems, backed by silicon layout, simulation, packaging, and validation workflows.",
    image: assets.transceiverChipLayout,
  },
  {
    eyebrow: "Active Antenna / RIS Prototype",
    title: "RF Prototyping from Array Hardware to Chamber Testing.",
    description:
      "RIS and active antenna development with prototype arrays, RF measurement setups, and validation in controlled lab environments.",
    image: assets.risLabValidation,
  },
  {
    eyebrow: "mm-Wave Packaging and Integration",
    title: "Chip-to-PCB-to-Waveguide Integration for High Frequencies.",
    description:
      "Packaging, transitions, and combining networks for mm-wave assemblies where IC, PCB, waveguide, and measurement constraints meet.",
    image: assets.mmwavePackaging,
  },
];

function FloatingChip() {
  const chipRef = useRef<Mesh>(null);
  const waferRef = useRef<Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const elapsed = clock.getElapsedTime();
    if (chipRef.current) {
      chipRef.current.rotation.x =
        -0.38 + pointer.y * 0.18 + Math.sin(elapsed * 0.7) * 0.05;
      chipRef.current.rotation.y = 0.58 + pointer.x * 0.25 + elapsed * 0.08;
      chipRef.current.position.y = Math.sin(elapsed * 1.2) * 0.12;
    }
    if (waferRef.current) {
      waferRef.current.rotation.z = elapsed * 0.14;
      waferRef.current.rotation.x = 1.28;
    }
  });

  return (
    <group>
      <mesh ref={waferRef} position={[0, -0.12, -0.5]}>
        <torusGeometry args={[1.92, 0.018, 32, 160]} />
        <meshStandardMaterial
          color="#52e4ff"
          emissive="#0b6c88"
          emissiveIntensity={0.45}
          metalness={0.8}
          roughness={0.22}
        />
      </mesh>
      <mesh position={[0, -0.12, -0.5]} rotation={[1.28, 0, 0]}>
        <circleGeometry args={[1.82, 96]} />
        <meshStandardMaterial
          color="#09182a"
          emissive="#042037"
          emissiveIntensity={0.22}
          metalness={0.72}
          roughness={0.18}
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh ref={chipRef}>
        <boxGeometry args={[2.15, 1.45, 0.16]} />
        <meshStandardMaterial
          color="#0b1420"
          emissive="#052b44"
          emissiveIntensity={0.38}
          metalness={0.96}
          roughness={0.2}
        />
      </mesh>
      {Array.from({ length: 18 }).map((_, index) => {
        const x = -1.22 + index * 0.144;
        return (
          <mesh key={`pin-top-${index}`} position={[x, 0.84, 0.02]}>
            <boxGeometry args={[0.052, 0.18, 0.045]} />
            <meshStandardMaterial
              color="#b8f3ff"
              emissive="#2bdcff"
              emissiveIntensity={0.45}
              metalness={0.5}
            />
          </mesh>
        );
      })}
      {Array.from({ length: 18 }).map((_, index) => {
        const x = -1.22 + index * 0.144;
        return (
          <mesh key={`pin-bottom-${index}`} position={[x, -0.84, 0.02]}>
            <boxGeometry args={[0.052, 0.18, 0.045]} />
            <meshStandardMaterial
              color="#d7f8ff"
              emissive="#27b9ff"
              emissiveIntensity={0.4}
              metalness={0.5}
            />
          </mesh>
        );
      })}
      {Array.from({ length: 10 }).map((_, index) => {
        const y = -0.6 + index * 0.133;
        return (
          <mesh key={`trace-${index}`} position={[0, y, 0.095]}>
            <boxGeometry
              args={[1.52 - Math.abs(index - 4.5) * 0.08, 0.014, 0.01]}
            />
            <meshStandardMaterial
              color="#69efff"
              emissive="#00bfff"
              emissiveIntensity={0.8}
            />
          </mesh>
        );
      })}
      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[0.72, 0.46, 0.035]} />
        <meshStandardMaterial
          color="#12263d"
          emissive="#0a85a8"
          emissiveIntensity={0.55}
          metalness={0.75}
          roughness={0.18}
        />
      </mesh>
      <pointLight position={[0, 0, 1.7]} color="#66e7ff" intensity={2.2} />
    </group>
  );
}

function ChipScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.25, 4.6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 3, 3]} intensity={2.2} color="#dffaff" />
      <FloatingChip />
    </Canvas>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 42, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.82, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

function Metric({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      className="metric-tile"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <motion.strong
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: delay + 0.15 }}
      >
        {value}
      </motion.strong>
      <span>{label}</span>
    </motion.div>
  );
}

function BackgroundTexture({
  src,
  className = "",
  opacity = "opacity-20",
}: {
  src: string;
  className?: string;
  opacity?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className={`object-cover ${opacity}`}
      />
    </div>
  );
}

function ParallaxImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-28, 28]);

  return (
    <motion.div ref={ref} className={`image-panel ${className}`} style={{ y }}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      <span aria-hidden="true" className="image-scanline" />
    </motion.div>
  );
}

function ProductImageCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <motion.article
      className={`product-card product-image-card geo-${index % 4}`}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
    >
      <div className="product-visual">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 1024px) 28vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="relative z-10 p-6 sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="product-icon">
            <product.icon className="size-7" aria-hidden="true" />
          </div>
          <a href="#contact" className="learn-button product-learn">
            Learn More
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
        <p className="mt-3 text-base leading-7 text-slate-300">
          {product.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <span key={feature} className="feature-pill">
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function LinearAmptechLanding() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 90, damping: 28 });
  const glowY = useSpring(mouseY, { stiffness: 90, damping: 28 });
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, 190]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 6200);

    return () => window.clearInterval(interval);
  }, []);

  const activeSlide = heroSlides[activeHeroSlide];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03060d] text-slate-100">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/12 blur-3xl"
        style={{ x: glowX, y: glowY }}
      />
      <div aria-hidden="true" className="particle-field" />
      <SiteHeader />

      <section
        id="hero"
        className="hero-grid relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 lg:px-8"
      >
        <BackgroundTexture
          src={assets.particleBackground}
          opacity="opacity-25"
        />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 z-0 opacity-30"
          style={{ y: heroY }}
        >
          <ChipScene />
        </motion.div>
        <div aria-hidden="true" className="circuit-traces" />
        <motion.div
          aria-hidden="true"
          className="hero-chip-background"
          style={{ y: heroY }}
        >
          {heroSlides.map((slide, index) => (
            <motion.div
              key={slide.title}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: activeHeroSlide === index ? 1 : 0,
                scale: activeHeroSlide === index ? 1 : 1.035,
              }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                <Sparkles className="size-4" aria-hidden="true" />
                {activeSlide.eyebrow}
              </div>
              <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                {activeSlide.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                {activeSlide.description}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a className="premium-button" href="#products">
                  Explore Products
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
                <a className="secondary-button" href="#contact">
                  Start a Project
                  <Zap className="size-4" aria-hidden="true" />
                </a>
              </div>
              <div className="hero-slider-nav" aria-label="Hero slides">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={activeHeroSlide === index ? "is-active" : ""}
                    onClick={() => setActiveHeroSlide(index)}
                    aria-label={`Show hero slide ${index + 1}`}
                    aria-current={activeHeroSlide === index}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{slide.eyebrow.split("/")[0].trim()}</strong>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
        <motion.a
          href="#about"
          className="scroll-indicator"
          aria-label="Scroll to about section"
          animate={{ y: [0, 9, 0], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span />
        </motion.a>
      </section>

      <section
        id="about"
        className="section-shell border-y border-white/10 bg-[#07101d]/70"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal className="space-y-8">
            <p className="section-kicker">Company</p>
            <h2 className="section-title">
              IIT Roorkee-origin deep-tech company focused on RF circuit and
              system design.
            </h2>
            <p className="text-xl leading-9 text-slate-300">
              Linearised Amplifier Technology & Services Pvt. Ltd. is founded
              and driven by innovative minds from IIT Roorkee. The company
              targets cyber-physical system design with a focus on
              radio-frequency circuit and system design, spanning GaN MMICs,
              high-power modules, CMOS/BiCMOS RFIC IP cores, and silicon
              validation.
            </p>
            <div className="grid gap-3 sm:grid-cols-4">
              {metrics.map(([value, label], index) => (
                <Metric
                  key={label}
                  value={value}
                  label={label}
                  delay={index * 0.08}
                />
              ))}
            </div>
          </Reveal>
          <Reveal>
            <ParallaxImage
              src={assets.siliconWafer}
              alt="Blue silicon wafer used for Linear Amptech semiconductor research"
              className="min-h-[360px] lg:min-h-[520px]"
            />
          </Reveal>
        </div>
      </section>

      <section id="capabilities" className="section-shell">
        <BackgroundTexture
          src={assets.circuitBackground}
          opacity="opacity-25"
          className="animate-circuit-background-linear"
        />
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="section-kicker">Capabilities</p>
            <h2 className="section-title">
              A full-stack lab for next-generation electronic systems.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(([title, Icon], index) => (
              <Reveal key={title as string}>
                <motion.article
                  className={`tech-card geo-${index % 4} min-h-44`}
                  whileHover={{ y: -8, rotateX: 2.5, rotateY: -2.5 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    className="mb-8 text-cyan-200"
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <span className="mt-6 block h-px w-full bg-gradient-to-r from-cyan-300/70 via-blue-500/40 to-transparent" />
                  <span className="mt-4 block text-xs uppercase tracking-[0.18em] text-slate-500">
                    Node {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="products"
        className="section-shell border-y border-white/10 bg-[#050b15]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal className="max-w-4xl">
            <p className="section-kicker">Products</p>
            <h2 className="section-title">
              RF front-end product portfolio from PA modules to mm-wave ICs.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              The portfolio is organized like a semiconductor product catalogue:
              component families, validated chip/module options, integration
              readiness, and customization paths for customer programs.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <div className="product-category-rail">
              {productCategories.map((category, index) => (
                <a key={category} href="#products" className="category-link">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {category}
                </a>
              ))}
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.name}>
                <ProductImageCard product={product} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="section-shell">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <Reveal className="max-w-4xl">
            <p className="section-kicker">IP Strategy</p>
            <h2 className="section-title">
              Three semiconductor technology tracks mapped to frequency and
              application domains.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {ipPlatforms.map((platform, index) => (
              <Reveal key={platform.name}>
                <article className={`platform-card geo-${index % 4}`}>
                  <div className="platform-image">
                    <Image
                      src={platform.image}
                      alt={`${platform.name} technology visual`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <platform.icon className="mb-5 size-6 text-cyan-200" />
                    <h3 className="text-2xl font-semibold text-white">
                      {platform.name}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-300">
                      {platform.description}
                    </p>
                    <p className="mt-5 border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                      {platform.focus}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "GDS and design specification files",
              "Customization and integration readiness",
              "Simulation, tapeout, and measurement",
              "Build-to-stock and custom development",
            ].map((item, index) => (
              <div key={item} className="system-row">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        id="industries"
        className="section-shell border-y border-white/10 bg-[#07101d]/65"
      >
        <BackgroundTexture
          src={assets.circuitBackground}
          opacity="opacity-10"
        />
        <BackgroundTexture
          src={assets.particleBackground}
          opacity="opacity-15"
          className="animate-texture-drift"
        />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.45fr_0.55fr] lg:px-8">
          <Reveal>
            <p className="section-kicker">Applications</p>
            <h2 className="section-title">
              RF products shaped around real deployment domains.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              Competitor sites organize around application fit. Linear
              Amptech&apos;s application framing is anchored in defense RF, 6G,
              radar, phased arrays, active antennas, and RIS research.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => (
                <div key={industry} className="industry-row">
                  <Satellite
                    className="size-4 text-cyan-200"
                    aria-hidden="true"
                  />
                  <span>{industry}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-5 px-5 pb-24 lg:grid-cols-4 lg:px-8">
          {applications.map((application) => (
            <Reveal key={application.title}>
              <article className="application-card">
                <div className="application-image">
                  <Image
                    src={application.image}
                    alt={`${application.title} application visual`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">
                    {application.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {application.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="research" className="rd-cinematic section-shell">
        <Image
          src={assets.rdLab}
          alt="Linear Amptech semiconductor R&D laboratory with RF measurement equipment"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#02050a]/72" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-28 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <Reveal className="rd-panel">
            <Shield className="size-8 text-cyan-200" aria-hidden="true" />
            <h2 className="mt-8 text-3xl font-semibold text-white sm:text-4xl">
              R&D pipeline from circuit architecture to measured prototypes.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Linear Amptech&apos;s deck shows a practical development path:
              RFIC/MMIC design, simulation, GDS/specification handoff, tapeout,
              packaging, module integration, chamber testing, and measurement.
            </p>
          </Reveal>
          <Reveal className="grid content-center gap-4 sm:grid-cols-2">
            {[
              "MIC and MMIC PA Design",
              "GaN HEMT Device Research",
              "Doherty and Waveform Engineering PA",
              "RIS and Active Antenna Validation",
              "FPGA and DPD Linearization",
            ].map((item) => (
              <div key={item} className="research-cell">
                <Orbit className="size-5 text-cyan-200" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        id="contact"
        className="section-shell border-t border-white/10 bg-[#02050a]"
      >
        <BackgroundTexture
          src={assets.particleBackground}
          opacity="opacity-20"
        />
        <div aria-hidden="true" className="contact-wafer-bg">
          <Image
            src={assets.siliconWafer}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">
              Build your next silicon innovation with Linear Amptech.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
              Share the system, frequency range, architecture target, or
              prototype objective. Linear Amptech can scope RF, analog,
              mixed-signal, and ASIC R&D programs from concept through
              validation.
            </p>
          </Reveal>
          <Reveal>
            <form className="contact-form">
              <label>
                <span>Name</span>
                <input name="name" autoComplete="name" />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label>
                <span>Company</span>
                <input name="company" autoComplete="organization" />
              </label>
              <label>
                <span>Project type</span>
                <select name="projectType" defaultValue="">
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option>GaN PA MMIC or module</option>
                  <option>CMOS / BiCMOS RFIC IP core</option>
                  <option>mm-wave transmitter or receiver chip</option>
                  <option>Radar front-end or phase shifter</option>
                  <option>RIS / active antenna prototype</option>
                  <option>Packaging, integration, and validation</option>
                </select>
              </label>
              <label className="sm:col-span-2">
                <span>Message</span>
                <textarea name="message" rows={5} />
              </label>
              <button className="premium-button sm:col-span-2" type="submit">
                Start a Project
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
