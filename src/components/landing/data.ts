import {
  Atom,
  Cpu,
  Crosshair,
  Layers3,
  RadioTower,
  Radar,
  Satellite,
  ScanLine,
  TriangleAlert,
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
  ganPaModuleNewPhoto: "/assets/technology/gan-pa-module-photo-new.png",

  transceiverChipLayout: "/assets/ppt-products/transceiver-chip-layout.png",
  transceiverChipLayout2: "/assets/technology/sige-bicmos.png",

  radarFrontEndLayout: "/assets/ppt-products/radar-front-end-layout.png",
  dieProbeMicroscope: "/assets/ppt-products/die-probe-microscope.png",
  bondedDieCloseup: "/assets/ppt-products/bonded-die-closeup.png",
  bondedDieCloseup2: "/assets/technology/si-cmos.png",
  sourceHybridMicModule: "/assets/ppt-products/source/pa-module-bench.png",
  sourceHybridMicModule2: "/assets/products/hybrid-mic-pa/1.png",

  sourcePortfolioHybridMicModule:
    "/assets/ppt-products/source/portfolio-hybrid-mic-pa-module.png",
  sourcePortfolioPaChip: "/assets/ppt-products/source/portfolio-pa-chip.png",
  sourceTransceiverCollage:
    "/assets/ppt-products/source/portfolio-transceiver-collage.png",
  sourcePortfolioFrontEndChip:
    "/assets/ppt-products/source/portfolio-front-end-chip.png",
  sourceTxRxLayout: "/assets/ppt-products/source/tx-rx-layout.png",
  sourceTxRxLayout2: "/assets/products/integrated-receiver-chip/1.png",
  sourceTxRxLayout3: "/assets/products/integrated-transmitter-chip/1.png",
  sourceRadarFrontEndChip:
    "/assets/ppt-products/source/radar-front-end-chip.png",
  sourceRadarFrontEndChip2: "/assets/products/radar-frontend-chip/1.png",
  sourcePhaseShifterChip: "/assets/ppt-products/source/phase-shifter-chip.jpg",
  sourcePhaseShifterChip2: "/assets/products/8-bit-phase-shifter/1.png",

  sourceGanPackagedChip: "/assets/ppt-products/source/gan-packaged-chip.jpg",
  sourceGanPaPackagedHardware:
    "/assets/ppt-products/source/gan-pa-packaged-hardware.jpg",
  sourceGanPaPackagedHardware2: "/assets/products/c-ku-band-chip/1.png",
  sourceGanModuleNews: "/assets/ppt-products/source/gan-module-news.jpg",
  sourceGanPaLayoutQfn44: "/assets/ppt-products/source/gan-pa-layout-qfn44.jpg",
  sourceGanPaPerformance: "/assets/ppt-products/source/gan-pa-performance.png",
  sourceGanPaQfn44Performance:
    "/assets/ppt-products/source/gan-pa-qfn44-performance.png",
  sourceGanPaQfn56Performance:
    "/assets/ppt-products/source/gan-pa-qfn56-performance.png",
  defense: "/assets/applications/defense1.png",
  sixG: "/assets/applications/6g.png",
  mimoRadar: "/assets/applications/mimo_radar.png",
  risActive: "/assets/applications/ris_active.png",
} as const;

export type Capability = {
  title: string;
  icon: LucideIcon;
};

export type Product = {
  slug: string;
  name: string;
  icon: LucideIcon;
  image: string;
  alt: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  detailSections: { title: string; body: string }[];
  gallery: { src: string; alt: string; caption: string }[];
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

export const ipPlatforms: IpPlatform[] = [
  {
    name: "III-V GaN Technology",
    icon: RadioTower,
    image: assets.ganPaModuleNewPhoto,
    description:
      "High-power-density PA MMICs and T/R front-end modules up to Ku-band, built for resilient defense and aerospace RF systems.",
    focus: "Standalone PA MMIC chips and T/R front-end modules up to Ku-band.",
  },
  {
    name: "Si CMOS Technology",
    icon: Cpu,
    image: assets.bondedDieCloseup2,
    description:
      "Scalable RFIC IP for lower 5G FR2 and 6G FR3 bands, including RF-SOI switch concepts for 6G reconfigurable intelligent surfaces.",
    focus:
      "mm-wave FR2 PA IP-core, 6G FR3 transceivers, and analog predistorters for massive MIMO Tx.",
  },
  {
    name: "SiGe BiCMOS Technology",
    icon: Waves,
    image: assets.transceiverChipLayout2,
    description:
      "mm-wave and sub-THz performance for wireless transceivers, phased-array 6G ICs, MIMO radar, and D-band front-end research.",
    focus:
      "mm-wave FR2 PA, D-band PA, and sub-THz transceivers for radar applications.",
  },
];

// Operating frequency band per product (GHz), for the spectrum-band cards.
export const productBands: Record<
  string,
  { min: number; max: number; label: string }
> = {
  "hybrid-mic-pa-modules": { min: 0.5, max: 3.25, label: "0.5–3.25 GHz" },
  "fully-integrated-c-ku-band-pa-chip": { min: 4, max: 18, label: "4–18 GHz" },
  "fully-integrated-transmitter-chip": {
    min: 47.2,
    max: 48.2,
    label: "47.2–48.2 GHz",
  },
  "fully-integrated-receiver-chip": {
    min: 47.2,
    max: 48.2,
    label: "47.2–48.2 GHz",
  },
  "fully-integrated-radar-front-end-chip": {
    min: 71,
    max: 81,
    label: "71–81 GHz",
  },
  "8-bit-phase-shifter-chip": { min: 13, max: 17, label: "13–17 GHz" },
};

export const products: Product[] = [
  {
    slug: "hybrid-mic-pa-modules",
    name: "Hybrid MIC PA Modules",
    icon: RadioTower,
    image: assets.sourceHybridMicModule2,
    alt: "Hybrid MIC PA module bench hardware",
    description:
      "Complete power amplifier module capability with gain-chain budgeting, power conditioning, VSWR protection, and multiple units in the 0.5-3.25 GHz range.",
    features: [
      "0.5-3.25 GHz module units",
      "Power conditioning with DC/DC converters",
      "VSWR protection",
    ],
    specs: [
      { label: "Module range", value: "Multiple units within 0.5-3.25 GHz" },
      {
        label: "System work",
        value: "Complete gain chain with power budgeting",
      },
      {
        label: "Power conditioning",
        value: "Power conditioning unit with DC/DC converters",
      },
      { label: "Protection", value: "VSWR protection" },
      { label: "Deck section", value: "Complete Power Amplifier Module" },
    ],
    detailSections: [
      {
        title: "Product brief",
        body: "The product information presents Linear-AmpTech's complete PA module work as a gain-chain and module-level capability, separate from the fully integrated PA chip.",
      },
      {
        title: "Module scope",
        body: "The module scope includes complete gain-chain power budgeting, power conditioning using DC/DC converters, and VSWR protection.",
      },
      {
        title: "Product source",
        body: "This product maps to the Hybrid MIC PA Module content on the Power Amplifier modules and Chip slide.",
      },
    ],
    gallery: [
      {
        src: assets.sourceHybridMicModule,
        alt: "Complete PA module bench hardware",
        caption: "Complete Power Amplifier Module",
      },
      {
        src: assets.sourcePortfolioHybridMicModule,
        alt: "Hybrid MIC PA module portfolio image",
        caption: "Hybrid MIC PA Modules",
      },
      {
        src: assets.sourceGanModuleNews,
        alt: "News clipping and module reference for RF power amplifiers",
        caption: "Module development reference",
      },
    ],
  },
  {
    slug: "fully-integrated-c-ku-band-pa-chip",
    name: "Fully Integrated C-Ku Band PA Chip",
    icon: Cpu,
    image: assets.sourceGanPaPackagedHardware2,
    alt: "Fully integrated C-Ku band power amplifier chip hardware",
    description:
      "5W fully integrated C-Ku band GaN-on-SiC PA chip family with QFN44 and QFN56 variants, completed simulation, tapeout, and measurement.",
    features: [
      "5-18 GHz and 4-19.5 GHz variants",
      "35-39.6 dBm peak power",
      "QFN44 / QFN56",
    ],
    specs: [
      { label: "QFN44 frequency", value: "5-18 GHz" },
      { label: "QFN56 frequency", value: "4-19.5 GHz" },
      { label: "Peak power", value: "35-39.6 dBm at 4 dB compression" },
      { label: "Gain", value: "15-19.6 dB" },
      { label: "PAE", value: "6.4-19.6% / 8.3-16.7%" },
      { label: "Bias", value: "28 V, 1.4 A" },
      { label: "Technology", value: "UMS 250nm GaN-on-SiC MMIC" },
      {
        label: "Chip / package",
        value: "3 mm x 5 mm chip with QFN44; 5 mm x 5 mm chip with QFN56",
      },
    ],
    detailSections: [
      {
        title: "Product brief",
        body: "The product information includes two fully integrated C-Ku band power amplifier chip variants, both using UMS 250nm GaN-on-SiC MMIC technology.",
      },
      {
        title: "Integration and interface",
        body: "QFN44 lists RFIN Pin #7, RFOUT Pin #28, and bias voltage pins #18, #19, and #25. QFN56 lists RFIN Pin #4, RFOUT Pin #39, and bias voltage pins #18, #19, and #25.",
      },
      {
        title: "Licensing and validation",
        body: "Available information states GDS and design specification files, customization options, readiness for integration, simulation complete, tapeout completed, and measurement completed.",
      },
    ],
    gallery: [
      {
        src: assets.sourceGanPaPackagedHardware,
        alt: "Packaged C-Ku band PA chip hardware",
        caption: "Fully Integrated C-Ku Band Power Amplifier hardware",
      },
      {
        src: assets.sourceGanPaLayoutQfn44,
        alt: "C-Ku PA chip layout and package reference",
        caption: "QFN44 chip layout reference",
      },
      {
        src: assets.sourceGanPaQfn44Performance,
        alt: "QFN44 CW output power gain and PAE performance plot",
        caption: "CW Output Power, Gain, PAE Performance (QFN44)",
      },
      {
        src: assets.sourceGanPaQfn56Performance,
        alt: "QFN56 CW output power gain and PAE performance plot",
        caption: "CW Output Power, Gain, PAE Performance (QFN56)",
      },
      {
        src: assets.sourceGanPackagedChip,
        alt: "Packaged GaN PA chip",
        caption: "Fully Integrated PA Chip",
      },
      {
        src: assets.sourcePortfolioPaChip,
        alt: "Fully integrated PA chip portfolio image",
        caption: "PA chip from product portfolio slide",
      },
    ],
  },
  {
    slug: "fully-integrated-transmitter-chip",
    name: "Fully Integrated Transmitter Chip",
    icon: Waves,
    image: assets.sourceTxRxLayout3,
    alt: "Fully integrated transmitter chip layout",
    description:
      "47.2-48.2 GHz fully integrated transmitter chip in GF 130nm SiGe BiCMOS with 20 dB conversion gain and 15 dBm output power.",
    features: ["47.2-48.2 GHz", "20 dB conversion gain", "15 dBm output power"],
    specs: [
      { label: "Frequency", value: "47.2-48.2 GHz" },
      { label: "Conversion gain", value: "20 dB" },
      { label: "IRR", value: "> 26 dBc" },
      { label: "Output power", value: "15 dBm" },
      { label: "LO", value: "19 GHz" },
      { label: "Technology", value: "GF 130nm SiGe BiCMOS" },
      { label: "Layout marker", value: "2 mm x 2 mm" },
      {
        label: "Pin-compatible IC platform",
        value: "IHP SG13G2 130nm SiGe BiCMOS, fT/fMAX 300/500 GHz",
      },
      { label: "Platform die size", value: "4.5 x 2.6 mm2" },
      { label: "Power supplies", value: "1.2 V and 2.5 V" },
      { label: "TX/RX PDC", value: "1.35/1.025 W (LB) and 2.125/1.06 W (HB)" },
    ],
    detailSections: [
      {
        title: "Product brief",
        body: "The product information presents the transmitter as a separate fully integrated chip in the 47.2-48.2 GHz band.",
      },
      {
        title: "Performance",
        body: "The transmitter table lists 20 dB conversion gain, IRR greater than 26 dBc, 15 dBm output power, and 19 GHz LO.",
      },
      {
        title: "Technology",
        body: "The process information identifies GF 130nm SiGe BiCMOS technology for this chip.",
      },
      {
        title: "Pin-compatible IC platform",
        body: "The mm-wave semiconductor IC slide lists IHP SG13G2 130nm SiGe BiCMOS with fT/fMAX of 300/500 GHz, 4.5 x 2.6 mm2 die size, 1.2 V and 2.5 V supplies, and TX/RX PDC values.",
      },
    ],
    gallery: [
      {
        src: assets.sourceTxRxLayout,
        alt: "Fully integrated transmitter chip layout",
        caption: "Transmitter chip layout",
      },
      {
        src: assets.sourceTransceiverCollage,
        alt: "Transmitter and receiver chip collage from portfolio slide",
        caption: "Tx/Rx portfolio reference",
      },
    ],
  },
  {
    slug: "fully-integrated-receiver-chip",
    name: "Fully Integrated Receiver Chip",
    icon: Waves,
    image: assets.sourceTxRxLayout2,
    alt: "Fully integrated receiver chip layout",
    description:
      "47.2-48.2 GHz fully integrated receiver chip in GF 130nm SiGe BiCMOS with 36.3-37 dB voltage gain.",
    features: ["47.2-48.2 GHz", "36.3-37 dB voltage gain", "16.5-20.5 dB NF"],
    specs: [
      { label: "Frequency", value: "47.2-48.2 GHz" },
      { label: "Voltage gain", value: "36.3-37 dB" },
      { label: "Conversion gain", value: "3.9-14.8 dB" },
      { label: "Noise figure", value: "16.5-20.5 dB" },
      { label: "LO", value: "19 GHz" },
      { label: "Technology", value: "GF 130nm SiGe BiCMOS" },
      { label: "Layout marker", value: "2 mm x 2 mm" },
      {
        label: "Pin-compatible IC platform",
        value: "IHP SG13G2 130nm SiGe BiCMOS, fT/fMAX 300/500 GHz",
      },
      { label: "Platform die size", value: "4.5 x 2.6 mm2" },
      { label: "Power supplies", value: "1.2 V and 2.5 V" },
      { label: "TX/RX PDC", value: "1.35/1.025 W (LB) and 2.125/1.06 W (HB)" },
    ],
    detailSections: [
      {
        title: "Product brief",
        body: "The product information presents the receiver as a separate fully integrated chip in the 47.2-48.2 GHz band.",
      },
      {
        title: "Performance",
        body: "The receiver table lists 36.3-37 dB voltage gain, 3.9-14.8 dB conversion gain, 16.5-20.5 dB noise figure, and 19 GHz LO.",
      },
      {
        title: "Technology",
        body: "The process information identifies GF 130nm SiGe BiCMOS technology for this chip.",
      },
      {
        title: "Pin-compatible IC platform",
        body: "The mm-wave semiconductor IC slide lists IHP SG13G2 130nm SiGe BiCMOS with fT/fMAX of 300/500 GHz, 4.5 x 2.6 mm2 die size, 1.2 V and 2.5 V supplies, and TX/RX PDC values.",
      },
    ],
    gallery: [
      {
        src: assets.sourceTxRxLayout,
        alt: "Fully integrated receiver chip layout",
        caption: "Receiver chip layout",
      },
      {
        src: assets.sourceTransceiverCollage,
        alt: "Transmitter and receiver chip collage from portfolio slide",
        caption: "Tx/Rx portfolio reference",
      },
    ],
  },
  {
    slug: "fully-integrated-radar-front-end-chip",
    name: "Fully Integrated Radar Front-End Chip",
    icon: Radar,
    image: assets.sourceRadarFrontEndChip2,
    alt: "Fully integrated radar front-end chip",
    description:
      "71-81 GHz fully integrated radar front-end chip in GF 130nm SiGe BiCMOS with 10.5 dBm Tx output power and 37 dB receiver conversion gain.",
    features: [
      "71-81 GHz",
      "10.5 dBm Tx output",
      "37 dB receiver conversion gain",
    ],
    specs: [
      { label: "RF frequency", value: "71-81 GHz" },
      { label: "Tx output power", value: "10.5 dBm" },
      { label: "Receiver conversion gain", value: "37 dB" },
      { label: "Noise figure", value: "8.5 dB" },
      { label: "LO", value: "19 GHz" },
      { label: "Technology", value: "GF 130nm SiGe BiCMOS" },
      { label: "Layout marker", value: "2 mm x 2 mm" },
    ],
    detailSections: [
      {
        title: "Product brief",
        body: "The product information lists this as a separate fully integrated radar front-end chip under fully integrated front-end chips.",
      },
      {
        title: "Performance",
        body: "The radar front-end table lists 71-81 GHz RF frequency, 10.5 dBm Tx output power, 37 dB receiver conversion gain, 8.5 dB noise figure, and 19 GHz LO.",
      },
      {
        title: "Technology",
        body: "The process information identifies GF 130nm SiGe BiCMOS technology for this chip.",
      },
    ],
    gallery: [
      {
        src: assets.sourceRadarFrontEndChip,
        alt: "Radar front-end chip layout",
        caption: "Fully Integrated Radar Front-End Chip",
      },
      {
        src: assets.sourcePortfolioFrontEndChip,
        alt: "Front-end chip portfolio image",
        caption: "Portfolio front-end chip reference",
      },
    ],
  },
  {
    slug: "8-bit-phase-shifter-chip",
    name: "8-Bit Phase Shifter Chip",
    icon: ScanLine,
    image: assets.sourcePhaseShifterChip2,
    alt: "8-bit phase shifter chip",
    description:
      "13-17 GHz 8-bit phase shifter chip in TSMC 65nm Bulk CMOS with 1.5 degree phase resolution.",
    features: [
      "13-17 GHz",
      "-10 to 12.5 dB gain variation",
      "1.5 degree phase resolution",
    ],
    specs: [
      { label: "Frequency", value: "13-17 GHz" },
      { label: "Gain variation", value: "-10 to 12.5 dB" },
      { label: "Phase resolution", value: "1.5 degrees" },
      { label: "Technology", value: "TSMC 65nm Bulk CMOS" },
      { label: "Chip marker", value: "1 mm x 1.382 mm" },
    ],
    detailSections: [
      {
        title: "Product brief",
        body: "The product information lists the 8-bit phase shifter chip as a separate product beside the radar front-end chip.",
      },
      {
        title: "Performance",
        body: "The phase shifter table lists 13-17 GHz operation, -10 to 12.5 dB gain variation, and 1.5 degree phase resolution.",
      },
      {
        title: "Technology",
        body: "The process information identifies TSMC 65nm Bulk CMOS technology for this chip.",
      },
    ],
    gallery: [
      {
        src: assets.sourcePhaseShifterChip,
        alt: "8-bit phase shifter chip",
        caption: "8-Bit Phase Shifter Chip",
      },
    ],
  },
];

// Cyber-physical systems & AI products. Kept separate from `products` so they
// do not appear in the landing portfolio or the IC dropdown column; resolved by
// the shared /products/[slug] detail route alongside `products`.
export const cyberPhysicalProducts: Product[] = [
  {
    slug: "shotscope",
    name: "ShotScope",
    icon: Crosshair,
    image: "/assets/products/shotscope/hero.png",
    alt: "ShotScope acoustic sensor array with control display",
    description:
      "ShotScope is an acoustic gunshot-detection and sniper-localization system that uses an array of acoustic sensors to detect and pinpoint the source of gunfire, reporting shooter locations to a central control map over LoRa.",
    features: [
      "Acoustic sensor array",
      "Gunshot source localization",
      "LoRa central control",
      "Map-based situational awareness",
    ],
    specs: [
      {
        label: "Detection",
        value: "Acoustic gunshot detection and source location",
      },
      { label: "Sensing", value: "Array of distributed acoustic sensors" },
      { label: "Connectivity", value: "LoRa link to central control" },
      { label: "Output", value: "Shooter location on a map GUI" },
      { label: "Coverage", value: "Ground-level and high-rise threats" },
      { label: "Use", value: "Border surveillance and combat operations" },
    ],
    detailSections: [
      {
        title: "The problem",
        body: "A rising number of concealed threats near borders pose a critical security risk. Existing visual detection systems are slow and inaccurate, and current systems focus solely on ground-level threats, leaving high-rise shooters undetected.",
      },
      {
        title: "Enhanced cross-border surveillance",
        body: "In the chaos of cross-border firing, an array of acoustic sensors offers a comprehensive auditory landscape of the battlefield. Strategically positioned along the border, these sensors detect the telltale sounds of gunfire amidst the surrounding environment.",
      },
      {
        title: "Next-gen gunshot detection",
        body: "The system connects to central control via LoRa technology. On detection it instantly pinpoints shooter locations on an intuitive map GUI, providing immediate situational awareness for faster threat response.",
      },
      {
        title: "Why it matters",
        body: "Central control of gunshot incidents and their locations is crucial for national security. In combat, identifying the source of gunfire is essential — empowering human ears with technology to swiftly detect and locate hidden snipers.",
      },
    ],
    gallery: [
      {
        src: "/assets/products/shotscope/sensors.png",
        alt: "Multiple ShotScope sensors operating during cross-border firing",
        caption: "Multiple sensors in action",
      },
    ],
  },
  {
    slug: "wait-system",
    name: "WAIT System",
    icon: TriangleAlert,
    image: "/assets/products/wait-system/hero.png",
    alt: "WAIT System roadside warning unit, front and side view",
    description:
      "WAIT — Warning Ahead of Intersections and Turns — is a radar-based early-warning system for blind turns and rural highway intersections that detects approaching vehicles and alerts drivers with dynamic warning signs.",
    features: [
      "Radar vehicle detection",
      "Dynamic warning signage",
      "LoRaWAN connectivity",
      "Standalone roadside unit",
    ],
    specs: [
      {
        label: "Detection",
        value: "Radar-based approaching-vehicle detection",
      },
      {
        label: "Connectivity",
        value: "LoRaWAN with end-to-end encryption and channel hopping",
      },
      { label: "Compute", value: "Jetson Xavier main unit" },
      { label: "Alerting", value: "Warning light, horn, and dynamic signage" },
      {
        label: "Power",
        value: "DC-DC converter, autonomous roadside operation",
      },
      {
        label: "Application",
        value: "Blind turns and rural highway intersections",
      },
    ],
    detailSections: [
      {
        title: "Overview",
        body: "Driving on rural roads can be risky, especially in winter when fog reduces visibility. Blind intersections and turns in hilly terrain are dangerous for drivers who may be slow to respond. The WAIT System uses radar to detect approaching vehicles and alert drivers with dynamic warning signs, and can be deployed with road infrastructure to automatically manage traffic in remote locations prone to jams.",
      },
      {
        title: "How it works",
        body: "Roadside units detect vehicles approaching each arm of a blind intersection or turn and trigger dynamic signage, a warning light, and a horn so drivers slow before the hazard. A Jetson Xavier main unit handles sensing and control, with a DC-DC converter and LoRaWAN backhaul for remote, autonomous operation.",
      },
      {
        title: "Connectivity",
        body: "Built on LoRaWAN: the application runs in seconds, with full control over gateway parameters, end-to-end encryption, spreading factors, and channel hopping — and no changes required on the network side.",
      },
      {
        title: "Cyber-physical context",
        body: "WAIT is part of Linear-AmpTech's cyber-physical systems work, integrating physical roadside devices with a cyber interface to monitor and control traffic for applications such as traffic solutions and Industry 4.0.",
      },
    ],
    gallery: [
      {
        src: "/assets/products/wait-system/architecture.png",
        alt: "WAIT System unit component breakdown with camera, radar, light, horn, and Jetson Xavier",
        caption: "System architecture",
      },
      {
        src: "/assets/products/wait-system/deployment.png",
        alt: "WAIT System deployed on a rural roadside",
        caption: "Field deployment",
      },
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
  ["0.5-81GHz", "Wideband RF expertise"],
  ["GaN", "High-power semiconductor platforms"],
  ["CMOS", "Scalable RFIC development"],
  ["SiGe", "Ultra-high-frequency integrated solutions"],
] as const;

export const applications: Application[] = [
  {
    title: "Defense and Aerospace RF",
    image: assets.defense,
    description:
      "Resilient PA modules, T/R front-end modules, and Ku-band RF electronics for high-reliability mission systems.",
  },
  {
    title: "6G and Massive MIMO",
    image: assets.sixG,
    description:
      "FR2/FR3 PA IP cores, analog predistorters, and transceiver blocks for scalable high-frequency communication.",
  },
  {
    title: "MIMO Radar and Phased Arrays",
    image: assets.mimoRadar,
    description:
      "mm-wave radar front-end chips, phase shifting, packaging transitions, and power combining for array systems.",
  },
  {
    title: "RIS and Active Antenna Systems",
    image: assets.risActive,
    description:
      "Prototype development and chamber validation for active antenna matching networks and reconfigurable surfaces.",
  },
];

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "IP Core / RF / MMIC Products",
    title: "Creating Difference with RF Front-End Technology.",
    description:
      "Indigenous RF front-end components, GaN-based MMICs, high-power modules, CMOS/BiCMOS RFIC IP cores, and silicon-validated systems for cyber-physical.",
    image: assets.heroChip,
  },
  {
    eyebrow: "GaN Power Amplifier Modules",
    title: "C-Ku Band Power Built for Demanding RF Systems.",
    description:
      "Fully integrated GaN-on-SiC PA modules and chips targeting high-power, high-reliability communication, radar, aerospace, and defense front ends.",
    image: assets.ganPaModuleNewPhoto,
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
    image: assets.rdLab,
  },
  {
    eyebrow: "mm-Wave Packaging and Integration",
    title: "Chip-to-PCB-to-Waveguide Integration for HF.",
    description:
      "Packaging, transitions, and combining networks for mm-wave assemblies where IC, PCB, waveguide, and measurement constraints meet.",
    image: assets.radarFrontEndLayout,
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
