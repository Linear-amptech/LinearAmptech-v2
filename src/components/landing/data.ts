import {
  Atom,
  Cpu,
  Layers3,
  RadioTower,
  Radar,
  Satellite,
  ScanLine,
  Waves,
  type LucideIcon,
} from "lucide-react";

export const assets = {
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
} as const;

export type Capability = {
  title: string;
  icon: LucideIcon;
};

export type Product = {
  name: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  description: string;
  features: string[];
};

export type IpPlatform = {
  name: string;
  icon: LucideIcon;
  image: string;
  description: string;
  focus: string;
};

export type Application = {
  title: string;
  image: string;
  description: string;
};

export type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export const capabilities: Capability[] = [
  { title: "GaN PA MMIC and high-power module design", icon: RadioTower },
  { title: "CMOS and BiCMOS RFIC IP-core development", icon: Cpu },
  { title: "mm-wave and sub-THz transmitter/receiver ICs", icon: Waves },
  { title: "Radar front-end and phased-array RF electronics", icon: Radar },
  { title: "Active antenna and RIS prototype development", icon: Satellite },
  { title: "Chip-to-PCB-to-waveguide packaging", icon: Layers3 },
  { title: "Simulation, tapeout, measurement, and validation", icon: ScanLine },
  { title: "Custom RF product engineering and licensing", icon: Atom },
];

export const productCategories = [
  "Hybrid MIC PA Modules",
  "Fully Integrated PA Chips",
  "Fully Integrated Transmitter Chips",
  "Fully Integrated Receiver Chips",
  "Radar Front-End Chips",
  "8-Bit Phase Shifter Chips",
  "Active Antenna / RIS Prototypes",
  "mm-Wave Packaging & Integration",
];

export const ipPlatforms: IpPlatform[] = [
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

export const products: Product[] = [
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

export const industries = [
  "Defense RF front ends",
  "MIMO radar",
  "6G FR2 / FR3 wireless",
  "Satellite and aerospace links",
  "Massive MIMO transmitters",
  "Reconfigurable intelligent surfaces",
  "mm-wave phased arrays",
  "Cyber-physical systems",
];

export const metrics = [
  ["0.5-81GHz", "Portfolio frequency span"],
  ["GaN", "High-power MMIC focus"],
  ["CMOS", "6G FR2 / FR3 RFIC IP"],
  ["SiGe", "mm-wave and sub-THz ICs"],
] as const;

export const applications: Application[] = [
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

export const heroSlides: HeroSlide[] = [
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
    title: "Chip-to-PCB-to-Waveguide Integration for HF.",
    description:
      "Packaging, transitions, and combining networks for mm-wave assemblies where IC, PCB, waveguide, and measurement constraints meet.",
    image: assets.mmwavePackaging,
  },
];

export const technologySystemRows = [
  "GDS and design specification files",
  "Customization and integration readiness",
  "Simulation, tapeout, and measurement",
  "Build-to-stock and custom development",
];

export const researchFocusRows = [
  "MIC and MMIC PA Design",
  "GaN HEMT Device Research",
  "RIS and Active Antenna Validation",
  "FPGA and DPD Linearization",
  "Doherty and Waveform Engineering PA",
];

export const projectTypeOptions = [
  "GaN PA MMIC or module",
  "CMOS / BiCMOS RFIC IP core",
  "mm-wave transmitter or receiver chip",
  "Radar front-end or phase shifter",
  "RIS / active antenna prototype",
  "Packaging, integration, and validation",
];
