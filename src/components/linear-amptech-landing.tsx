"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ArrowRight,
  Atom,
  Cpu,
  Gauge,
  Layers3,
  Microscope,
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
import { useEffect, useRef } from "react";
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
};

const capabilities: [string, LucideIcon][] = [
  ["RF and microwave design", RadioTower],
  ["Analog IC design", Gauge],
  ["Mixed-signal systems", Waves],
  ["ASIC and custom silicon", Cpu],
  ["PCB and system-level prototyping", Layers3],
  ["Simulation, testing, and validation", ScanLine],
  ["Semiconductor R&D", Atom],
  ["High-frequency communication systems", Radar],
];

const products = [
  {
    name: "LA-RF Core",
    icon: RadioTower,
    image: assets.laRfCore,
    alt: "LA-RF Core RF front-end semiconductor module with glowing signal field",
    description:
      "High-performance RF front-end design platform for wireless, satellite, radar, and 5G/6G applications.",
    features: [
      "Wideband front-end blocks",
      "Radar-grade link budgets",
      "EM-aware RF validation",
    ],
  },
  {
    name: "LA-Analog Nexus",
    icon: Waves,
    image: assets.laAnalogNexus,
    alt: "LA-Analog Nexus precision analog semiconductor platform with metallic mixed-signal components",
    description:
      "Precision analog and mixed-signal IC design solution for amplifiers, data converters, sensors, and power-aware electronics.",
    features: [
      "Low-noise signal chains",
      "Converter architecture support",
      "Power-aware analog modeling",
    ],
  },
  {
    name: "LA-Silicon Lab",
    icon: Microscope,
    image: assets.laSiliconLab,
    alt: "LA-Silicon Lab layered silicon architecture and semiconductor prototyping visualization",
    description:
      "Advanced R&D platform for custom ASIC, semiconductor prototyping, RF simulation, and chip architecture development.",
    features: [
      "Custom ASIC exploration",
      "Prototype-to-validation flow",
      "RF simulation workbench",
    ],
  },
];

const industries = [
  "Wireless communication",
  "Aerospace and defense",
  "Satellite systems",
  "Automotive electronics",
  "Industrial automation",
  "IoT and edge devices",
  "Research labs",
  "Consumer electronics",
];

const metrics = [
  ["28+", "Silicon and RF domains"],
  ["6G", "Communication-ready research"],
  ["120GHz", "High-frequency exploration"],
  ["ASIC", "Prototype acceleration"],
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
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
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
          <Image
            src={assets.heroChip}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                <Sparkles className="size-4" aria-hidden="true" />
                Semiconductor R&D / RF Systems / ASIC Innovation
              </div>
              <h1 className="max-w-5xl text-balance text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Engineering the Future of Silicon, RF, and Intelligent
                Electronics.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Linear Amptech designs advanced semiconductor, RF, analog, and
                mixed-signal technologies for next-generation communication,
                aerospace, industrial, and intelligent systems.
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
              Deep semiconductor engineering from architecture to validation.
            </h2>
            <p className="text-xl leading-9 text-slate-300">
              Linear Amptech is a chip design and R&D company focused on RF,
              analog, mixed-signal ICs, semiconductor innovation, prototyping,
              and product engineering. The team blends silicon architecture,
              electromagnetic design, circuit-level rigor, and lab-grade
              validation for systems that operate at the edge of frequency,
              precision, and reliability.
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
          opacity="opacity-10"
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
          <Reveal className="max-w-3xl">
            <p className="section-kicker">Products</p>
            <h2 className="section-title">
              Three premium platforms for RF, analog, and custom silicon R&D.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              Productized engineering workflows for teams building
              high-frequency communication, intelligent sensing, aerospace
              electronics, and custom semiconductor systems.
            </p>
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
          <Reveal className="max-w-3xl">
            <p className="section-kicker">Technology</p>
            <h2 className="section-title">
              Layered silicon visuals, signal waves, traces, and architecture
              systems.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="tech-image-panel">
                <ParallaxImage
                  src={assets.rfSignalWave}
                  alt="RF signal waveform and radar visualization for microwave systems"
                  className="min-h-[330px]"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    RF and microwave systems
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    High-frequency design workflows for signal integrity,
                    front-end architecture, satellite links, radar chains, and
                    next-generation wireless systems.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="tech-image-panel">
                <ParallaxImage
                  src={assets.analogCircuit}
                  alt="Analog and mixed-signal circuit architecture with glowing schematic overlays"
                  className="min-h-[330px]"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    Analog and mixed-signal design
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    Precision circuit design, simulation and validation loops,
                    custom semiconductor architecture, converters, amplifiers,
                    sensors, and power-aware electronics.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Signal integrity",
              "Simulation and validation",
              "Custom semiconductor architecture",
              "Mixed-signal verification",
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
            <p className="section-kicker">Industries</p>
            <h2 className="section-title">
              Built for demanding electronic environments.
            </h2>
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
              R&D for future silicon programs.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Linear Amptech advances innovation through simulation, lab
              testing, semiconductor prototyping, measurement, validation, and
              future technology development.
            </p>
          </Reveal>
          <Reveal className="grid content-center gap-4 sm:grid-cols-2">
            {[
              "Custom IC Architecture",
              "RF Simulation",
              "Prototype Validation",
              "Lab Measurement",
              "Silicon Research",
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
                  <option>RF front-end design</option>
                  <option>Analog or mixed-signal IC</option>
                  <option>ASIC or custom silicon</option>
                  <option>Simulation and validation</option>
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
