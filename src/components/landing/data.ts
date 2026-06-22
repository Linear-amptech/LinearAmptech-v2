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
  sourceHybridMicModule: "/assets/ppt-products/source/pa-module-bench.png",
  sourcePortfolioHybridMicModule:
    "/assets/ppt-products/source/portfolio-hybrid-mic-pa-module.png",
  sourcePortfolioPaChip: "/assets/ppt-products/source/portfolio-pa-chip.png",
  sourceTransceiverCollage:
    "/assets/ppt-products/source/portfolio-transceiver-collage.png",
  sourcePortfolioFrontEndChip:
    "/assets/ppt-products/source/portfolio-front-end-chip.png",
  sourceTxRxLayout: "/assets/ppt-products/source/tx-rx-layout.png",
  sourceRadarFrontEndChip:
    "/assets/ppt-products/source/radar-front-end-chip.png",
  sourcePhaseShifterChip: "/assets/ppt-products/source/phase-shifter-chip.jpg",
  sourceGanPackagedChip: "/assets/ppt-products/source/gan-packaged-chip.jpg",
  sourceGanPaPackagedHardware:
    "/assets/ppt-products/source/gan-pa-packaged-hardware.jpg",
  sourceGanModuleNews: "/assets/ppt-products/source/gan-module-news.jpg",
  sourceGanPaLayoutQfn44: "/assets/ppt-products/source/gan-pa-layout-qfn44.jpg",
  sourceGanPaPerformance: "/assets/ppt-products/source/gan-pa-performance.png",
  sourceGanPaQfn44Performance:
    "/assets/ppt-products/source/gan-pa-qfn44-performance.png",
  sourceGanPaQfn56Performance:
    "/assets/ppt-products/source/gan-pa-qfn56-performance.png",
  sourceActiveAntennaPrototype:
    "/assets/ppt-products/source/active-antenna-prototype.png",
  sourceActiveMatchingNetwork:
    "/assets/ppt-products/source/active-matching-network.png",
  sourceActiveAntennaLnaSection:
    "/assets/ppt-products/source/active-antenna-lna-section.png",
  sourceActiveAntennaReturnLoss:
    "/assets/ppt-products/source/active-antenna-return-loss.png",
  sourceActiveAntennaPattern:
    "/assets/ppt-products/source/active-antenna-pattern.png",
  sourceActiveAntennaGain:
    "/assets/ppt-products/source/active-antenna-gain.png",
  sourceActiveAntennaEPattern:
    "/assets/ppt-products/source/active-antenna-e-pattern.png",
  sourceActiveAntennaHPattern:
    "/assets/ppt-products/source/active-antenna-h-pattern.png",
  sourceRisFrontSideArray:
    "/assets/ppt-products/source/ris-front-side-array.png",
  sourceRisFrontSideClose:
    "/assets/ppt-products/source/ris-front-side-close.png",
  sourceRisBackSideClose: "/assets/ppt-products/source/ris-back-side-close.png",
  sourceRisBackSideArray: "/assets/ppt-products/source/ris-back-side-array.png",
  sourcePackagingTransitionDiagram:
    "/assets/ppt-products/source/packaging-transition-diagram.png",
  sourcePackagingPrototypePhoto:
    "/assets/ppt-products/source/packaging-prototype-photo.jpg",
  sourcePackagingChipPcbWaveguide:
    "/assets/ppt-products/source/packaging-chip-pcb-waveguide.png",
  sourcePackagingRadialCombiner:
    "/assets/ppt-products/source/packaging-radial-combiner.png",
} as const;

export type Capability = {
  title: string;
  icon: LucideIcon;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
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

export const productCategories = [
  "Hybrid MIC PA Modules",
  "Fully Integrated PA Chips",
  "Fully Integrated Transmitter Chips",
  "Fully Integrated Receiver Chips",
  "Radar Front-End Chips",
  "8-Bit Phase Shifter Chips",
  "Active Antenna",
  "RIS Prototype",
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
    slug: "hybrid-mic-pa-modules",
    name: "Hybrid MIC PA Modules",
    category: "Hybrid MIC PA Modules",
    icon: RadioTower,
    image: assets.sourceHybridMicModule,
    alt: "Hybrid MIC PA module bench hardware from Linear Amptech PPT",
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
        body: "The PPT presents Linear-AmpTech's complete PA module work as a gain-chain and module-level capability, separate from the fully integrated PA chip.",
      },
      {
        title: "Module scope",
        body: "The module scope includes complete gain-chain power budgeting, power conditioning using DC/DC converters, and VSWR protection.",
      },
      {
        title: "PPT source",
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
        alt: "News clipping and module proof for RF power amplifiers",
        caption: "Module development proof from PPT",
      },
    ],
  },
  {
    slug: "fully-integrated-c-ku-band-pa-chip",
    name: "Fully Integrated C-Ku Band PA Chip",
    category: "Fully Integrated PA Chips",
    icon: Cpu,
    image: assets.sourceGanPaPackagedHardware,
    alt: "Fully integrated C-Ku band power amplifier chip hardware from PPT",
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
        body: "The PPT includes two fully integrated C-Ku band power amplifier chip variants, both using UMS 250nm GaN-on-SiC MMIC technology.",
      },
      {
        title: "Integration and interface",
        body: "QFN44 lists RFIN Pin #7, RFOUT Pin #28, and bias voltage pins #18, #19, and #25. QFN56 lists RFIN Pin #4, RFOUT Pin #39, and bias voltage pins #18, #19, and #25.",
      },
      {
        title: "Licensing and validation",
        body: "The deck states GDS and design specification files, customization options, readiness for integration, simulation complete, tapeout completed, and measurement completed.",
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
    category: "Fully Integrated Transmitter Chips",
    icon: Waves,
    image: assets.sourceTxRxLayout,
    alt: "Fully integrated transmitter chip layout from PPT",
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
        body: "The PPT presents the transmitter as a separate fully integrated chip in the 47.2-48.2 GHz band.",
      },
      {
        title: "Performance",
        body: "The transmitter table lists 20 dB conversion gain, IRR greater than 26 dBc, 15 dBm output power, and 19 GHz LO.",
      },
      {
        title: "Technology",
        body: "The deck identifies GF 130nm SiGe BiCMOS technology for this chip.",
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
        caption: "Tx/Rx portfolio proof",
      },
    ],
  },
  {
    slug: "fully-integrated-receiver-chip",
    name: "Fully Integrated Receiver Chip",
    category: "Fully Integrated Receiver Chips",
    icon: Waves,
    image: assets.sourceTxRxLayout,
    alt: "Fully integrated receiver chip layout from PPT",
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
        body: "The PPT presents the receiver as a separate fully integrated chip in the 47.2-48.2 GHz band.",
      },
      {
        title: "Performance",
        body: "The receiver table lists 36.3-37 dB voltage gain, 3.9-14.8 dB conversion gain, 16.5-20.5 dB noise figure, and 19 GHz LO.",
      },
      {
        title: "Technology",
        body: "The deck identifies GF 130nm SiGe BiCMOS technology for this chip.",
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
        caption: "Tx/Rx portfolio proof",
      },
    ],
  },
  {
    slug: "fully-integrated-radar-front-end-chip",
    name: "Fully Integrated Radar Front-End Chip",
    category: "Fully Integrated Radar Front-End Chips",
    icon: Radar,
    image: assets.sourceRadarFrontEndChip,
    alt: "Fully integrated radar front-end chip from PPT",
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
        body: "The PPT lists this as a separate fully integrated radar front-end chip under fully integrated front-end chips.",
      },
      {
        title: "Performance",
        body: "The radar front-end table lists 71-81 GHz RF frequency, 10.5 dBm Tx output power, 37 dB receiver conversion gain, 8.5 dB noise figure, and 19 GHz LO.",
      },
      {
        title: "Technology",
        body: "The deck identifies GF 130nm SiGe BiCMOS technology for this chip.",
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
        caption: "Portfolio front-end chip proof",
      },
    ],
  },
  {
    slug: "8-bit-phase-shifter-chip",
    name: "8-Bit Phase Shifter Chip",
    category: "8-Bit Phase Shifter Chips",
    icon: ScanLine,
    image: assets.sourcePhaseShifterChip,
    alt: "8-bit phase shifter chip from PPT",
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
        body: "The PPT lists the 8-bit phase shifter chip as a separate product beside the radar front-end chip.",
      },
      {
        title: "Performance",
        body: "The phase shifter table lists 13-17 GHz operation, -10 to 12.5 dB gain variation, and 1.5 degree phase resolution.",
      },
      {
        title: "Technology",
        body: "The deck identifies TSMC 65nm Bulk CMOS technology for this chip.",
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
  {
    slug: "active-antenna-non-foster-circuits",
    name: "Active Antenna: Non-Foster Circuits",
    category: "Active Antenna",
    icon: Satellite,
    image: assets.sourceActiveAntennaPrototype,
    alt: "Active antenna prototype from PPT",
    description:
      "Antenna integrated with active matching network and LNA section for LF/DF applications.",
    features: [
      "60 MHz-1.31 GHz return loss",
      "182.48% FBW",
      ">40 dB enhanced gain after LNA",
    ],
    specs: [
      { label: "Return loss", value: ">= 6 dB from 60 MHz-1.31 GHz" },
      { label: "Fractional bandwidth", value: "182.48% FBW" },
      { label: "Miniaturized volume", value: "0.45 / 10^6" },
      {
        label: "Peak gain",
        value: "0.2 dB without LNA; > 40 dB after LNA integration",
      },
      {
        label: "Radiation pattern",
        value: "Figure-of-eight E-pattern and omni-direction H-pattern",
      },
      { label: "Application", value: "LF/DF applications" },
    ],
    detailSections: [
      {
        title: "Product brief",
        body: "The PPT presents Active Antenna: Non Foster Circuits with antenna, active matching network, and LNA section proof objects.",
      },
      {
        title: "Measured response",
        body: "Return loss is listed as at least 6 dB from 60 MHz to 1.31 GHz, with 182.48% fractional bandwidth.",
      },
      {
        title: "Pattern and gain",
        body: "The deck lists a figure-of-eight E-pattern, omni-direction H-pattern, 0.2 dB peak gain without LNA, and more than 40 dB enhanced gain after LNA integration.",
      },
    ],
    gallery: [
      {
        src: assets.sourceActiveAntennaPrototype,
        alt: "Active antenna prototype",
        caption: "Active antenna prototype",
      },
      {
        src: assets.sourceActiveMatchingNetwork,
        alt: "Active matching network",
        caption: "Non-Foster active matching network",
      },
      {
        src: assets.sourceActiveAntennaLnaSection,
        alt: "LNA section",
        caption: "LNA section",
      },
      {
        src: assets.sourceActiveAntennaReturnLoss,
        alt: "Return loss plot",
        caption: "Return loss from 60 MHz-1.31 GHz",
      },
      {
        src: assets.sourceActiveAntennaPattern,
        alt: "Radiation pattern plot",
        caption: "Radiation pattern proof",
      },
      {
        src: assets.sourceActiveAntennaGain,
        alt: "Gain plot",
        caption: "Gain after LNA integration",
      },
      {
        src: assets.sourceActiveAntennaEPattern,
        alt: "E-pattern plot",
        caption: "Figure-of-eight E-pattern",
      },
      {
        src: assets.sourceActiveAntennaHPattern,
        alt: "H-pattern plot",
        caption: "Omni-direction H-pattern",
      },
    ],
  },
  {
    slug: "ris-prototype-developed",
    name: "RIS Prototype Developed",
    category: "RIS Prototype",
    icon: Layers3,
    image: assets.sourceRisFrontSideArray,
    alt: "RIS prototype front side from PPT",
    description:
      "Reconfigurable intelligent surface prototype hardware with front-side and back-side proof images from the PPT.",
    features: ["Front side", "Back side", "Prototype developed"],
    specs: [
      { label: "Prototype status", value: "RIS prototype developed" },
      {
        label: "Front side",
        value: "Front-side array and close-up hardware shown in PPT",
      },
      {
        label: "Back side",
        value: "Back-side array and close-up hardware shown in PPT",
      },
    ],
    detailSections: [
      {
        title: "Product brief",
        body: "The PPT presents the RIS prototype as developed hardware, with separate front-side and back-side images.",
      },
      {
        title: "Hardware proof",
        body: "The frontend now uses the actual front-side and back-side RIS images extracted from slide 12.",
      },
    ],
    gallery: [
      {
        src: assets.sourceRisFrontSideArray,
        alt: "RIS prototype front side array",
        caption: "RIS prototype front side",
      },
      {
        src: assets.sourceRisFrontSideClose,
        alt: "RIS front side close-up",
        caption: "Front-side close-up",
      },
      {
        src: assets.sourceRisBackSideClose,
        alt: "RIS back side close-up",
        caption: "Back-side close-up",
      },
      {
        src: assets.sourceRisBackSideArray,
        alt: "RIS prototype back side array",
        caption: "RIS prototype back side",
      },
    ],
  },
  {
    slug: "mm-wave-packaging-integration",
    name: "Packaging & Integration at mm-Wave",
    category: "Packaging & Integration at mm-wave",
    icon: Layers3,
    image: assets.sourcePackagingChipPcbWaveguide,
    alt: "Chip-PCB-waveguide packaging integration from PPT",
    description:
      "2-way power combining, chip-PCB-waveguide transitions at 47 GHz, and 4-way radial power divider/combiner concepts.",
    features: [
      "2-way power combining",
      "47 GHz transition",
      "4-way radial combiner",
    ],
    specs: [
      {
        label: "Power combining",
        value: "2-way power combining (chip-to-PCB-to-waveguide)",
      },
      {
        label: "Transition",
        value: "Chip-PCB-waveguide transition in Tx/Rx at 47 GHz",
      },
      {
        label: "Divider/combiner",
        value: "4-way radial power divider/combiner",
      },
      { label: "Integration path", value: "Chip-to-PCB-to-waveguide" },
    ],
    detailSections: [
      {
        title: "Product brief",
        body: "The PPT lists three mm-wave packaging and integration proof objects: 2-way power combining, 47 GHz chip-PCB-waveguide transition, and 4-way radial power divider/combiner.",
      },
      {
        title: "Transition design",
        body: "The transition work is described as chip-PCB-waveguide transition in Tx/Rx at 47 GHz.",
      },
      {
        title: "Power combining",
        body: "The deck includes 2-way power combining and 4-way radial power divider/combiner for chip-to-PCB-to-waveguide systems.",
      },
    ],
    gallery: [
      {
        src: assets.sourcePackagingTransitionDiagram,
        alt: "Packaging transition diagram",
        caption: "2-way power combining transition diagram",
      },
      {
        src: assets.sourcePackagingPrototypePhoto,
        alt: "Packaging prototype photo",
        caption: "Chip-PCB-waveguide prototype photo",
      },
      {
        src: assets.sourcePackagingChipPcbWaveguide,
        alt: "Chip-PCB-waveguide transition",
        caption: "Chip-PCB-waveguide transition in Tx/Rx at 47 GHz",
      },
      {
        src: assets.sourcePackagingRadialCombiner,
        alt: "4-way radial combiner",
        caption: "4-way radial power divider/combiner",
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
      "Indigenous RF front-end components, GaN-based MMICs, high-power modules, CMOS/BiCMOS RFIC IP cores, and silicon-validated systems for cyber-physical.",
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
