export type RfPowerAmplifierSummary = {
  slug: string;
  partNumber: string;
  summary: string;
  shortSpec: string;
  heroImage: string;
  keyFeatures: string[];
  applications: string[];
  diagrams: { src: string; alt: string }[];
};

export type RfPowerAmplifierTableRow = {
  partNumber: string;
  centerFrequencyGhz: string;
  outputPowerW: string;
  efficiency: string;
  gainDb: string;
  modeOfOperation: string;
  slug?: string;
};

export const rfPowerAmplifierOverviewImages = [
  {
    src: "/assets/products/rf-power-amplifiers/overview/p1.png",
    alt: "Legacy RF power amplifier performance chart 1",
  },
  {
    src: "/assets/products/rf-power-amplifiers/overview/p2.png",
    alt: "Legacy RF power amplifier performance chart 2",
  },
  {
    src: "/assets/products/rf-power-amplifiers/overview/p3.png",
    alt: "Legacy RF power amplifier performance chart 3",
  },
  {
    src: "/assets/products/rf-power-amplifiers/overview/p4.png",
    alt: "Legacy RF power amplifier performance chart 4",
  },
] as const;

export const rfPowerAmplifierProducts: RfPowerAmplifierSummary[] = [
  {
    slug: "lamp-pacf1p9-10w",
    partNumber: "LAMP-PACF1P9-10W",
    summary: "50 Ω, Wideband, 1.5 to 2.5 GHz, 7.7-10 W, 28V, SMA.",
    shortSpec: "1.5-2.5 GHz, 7.7-10 W, 28V, SMA",
    heroImage: "/assets/products/rf-power-amplifiers/lamp-pacf1p9-10w/hero.png",
    keyFeatures: [
      "Frequency:1.5-2.5GHz",
      "Drain efficiency: 60-73%",
      "Output power: 38.9-40.4dBm",
      "Gain at saturation:9.9-11.2 dB",
      "Gain Compression:3-3.5 dB",
    ],
    applications: ["Cellular", "SDRs", "Radars"],
    diagrams: [
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pacf1p9-10w/diagram-1.png",
        alt: "LAMP-PACF1P9-10W diagram 1",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pacf1p9-10w/diagram-2.png",
        alt: "LAMP-PACF1P9-10W diagram 2",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pacf1p9-10w/diagram-3.png",
        alt: "LAMP-PACF1P9-10W diagram 3",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pacf1p9-10w/diagram-4.png",
        alt: "LAMP-PACF1P9-10W diagram 4",
      },
    ],
  },
  {
    slug: "lamp-pamocbj-10w",
    partNumber: "LAMP-PAMOCBJ-10W",
    summary: "50 Ω, Wideband, 1.5 to 2.5 GHz, 7.7-10 W, 28V, SMA.",
    shortSpec: "0.55-3.25 GHz, 8-10 W, 28V, SMA",
    heroImage: "/assets/products/rf-power-amplifiers/lamp-pamocbj-10w/hero.png",
    keyFeatures: [
      "Frequency:0.55-3.25GHz",
      "Drain efficiency: 60-70.1%",
      "Output power: 39.1-41.55dBm",
      "Gain:9.1-11.55 dB",
      "Gain Compression:2-4dB",
      "C/IMD3, < -28 dBc at 3dB back-off of output power",
    ],
    applications: [
      "Transmitters",
      "Laboratory use",
      "Cellular",
      "communication systems",
    ],
    diagrams: [
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocbj-10w/diagram-1.png",
        alt: "LAMP-PAMOCBJ-10W diagram 1",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocbj-10w/diagram-2.png",
        alt: "LAMP-PAMOCBJ-10W diagram 2",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocbj-10w/diagram-3.png",
        alt: "LAMP-PAMOCBJ-10W diagram 3",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocbj-10w/diagram-4.png",
        alt: "LAMP-PAMOCBJ-10W diagram 4",
      },
    ],
  },
  {
    slug: "lamp-pamocce-10w",
    partNumber: "LAMP-PAMOCCE-10W",
    summary: "50 Ω, Wideband, 0.45 to 2.9 GHz, 10W, 28V, SMA.",
    shortSpec: "0.45-2.9 GHz, 10 W, 28V, SMA",
    heroImage: "/assets/products/rf-power-amplifiers/lamp-pamocce-10w/hero.png",
    keyFeatures: [
      "Frequency:0.45-2.9GHz",
      "Drain efficiency: 60-72.9%",
      "Output power: 39.6-41.7dBm",
      "Output power flatness:2dB",
      "Gain:8.6-10.7 dB",
      "Gain Compression:2-4dB",
      "C/IMD3, < -26 dBc at 3dB back-off of output power",
    ],
    applications: [
      "Transmitters",
      "Laboratory use",
      "Cellular",
      "communication systems",
    ],
    diagrams: [
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocce-10w/diagram-1.png",
        alt: "LAMP-PAMOCCE-10W diagram 1",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocce-10w/diagram-2.png",
        alt: "LAMP-PAMOCCE-10W diagram 2",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocce-10w/diagram-3.png",
        alt: "LAMP-PAMOCCE-10W diagram 3",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamocce-10w/diagram-4.png",
        alt: "LAMP-PAMOCCE-10W diagram 4",
      },
    ],
  },
  {
    slug: "lamp-pamoccf-10w",
    partNumber: "LAMP-PAMOCCF-10W",
    summary: "50 Ω, Wideband, 0.5 to 2.2 GHz, 10 W, 28V, SMA.",
    shortSpec: "0.5-2.2 GHz, 10 W, 28V, SMA",
    heroImage: "/assets/products/rf-power-amplifiers/lamp-pamoccf-10w/hero.png",
    keyFeatures: [
      "Frequency:0.5-2.2GHz",
      "Drain efficiency: 60-71%",
      "Output power: 41.3-42.7dBm",
      "Gain at saturation:8-9.4 dB",
      "Gain Compression:3-4 dB",
    ],
    applications: ["Cellular", "SDRs", "Radars"],
    diagrams: [
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamoccf-10w/diagram-1.png",
        alt: "LAMP-PAMOCCF-10W diagram 1",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamoccf-10w/diagram-2.png",
        alt: "LAMP-PAMOCCF-10W diagram 2",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamoccf-10w/diagram-3.png",
        alt: "LAMP-PAMOCCF-10W diagram 3",
      },
      {
        src: "/assets/products/rf-power-amplifiers/lamp-pamoccf-10w/diagram-4.png",
        alt: "LAMP-PAMOCCF-10W diagram 4",
      },
    ],
  },
] as const;

export const rfPowerAmplifierTableRows: RfPowerAmplifierTableRow[] = [
  {
    partNumber: "LAMP-PAMOCBJ-10W",
    centerFrequencyGhz: "0.55-3.5",
    outputPowerW: "8-10",
    efficiency: "60-70",
    gainDb: "9.1-11.5",
    modeOfOperation: "Extended Continuous Class B/J",
    slug: "lamp-pamocbj-10w",
  },
  {
    partNumber: "LAMP-PAMOCCE-10W",
    centerFrequencyGhz: "0.49-2.9",
    outputPowerW: "10",
    efficiency: "60-72",
    gainDb: "8.6-10.7",
    modeOfOperation: "Extended Continuous Class E",
    slug: "lamp-pamocce-10w",
  },
  {
    partNumber: "LAMP-PAMOCCF-10W",
    centerFrequencyGhz: "0.5-2.2",
    outputPowerW: "10",
    efficiency: "60-71",
    gainDb: "8-9.4",
    modeOfOperation: "Extended Continuous Class F",
    slug: "lamp-pamoccf-10w",
  },
  {
    partNumber: "LAMP-PACF1P9-10W",
    centerFrequencyGhz: "1.5-2.5",
    outputPowerW: "10",
    efficiency: "9.9-11.2",
    gainDb: "60-73",
    modeOfOperation: "Extended Continuous Class F",
    slug: "lamp-pacf1p9-10w",
  },
  {
    partNumber: "*LAMP-PACF1P9-10W-HG",
    centerFrequencyGhz: "1.5-2.4",
    outputPowerW: "10",
    efficiency: "47",
    gainDb: "50-55*",
    modeOfOperation: "Extended Continuous Class F",
  },
  {
    partNumber: "LAMP-DPA1P8-50W",
    centerFrequencyGhz: "1.85",
    outputPowerW: "50 (sat.) / 5 (av.)",
    efficiency: "45 (sat.) / 35 (av.)",
    gainDb: "50-55",
    modeOfOperation: "Doherty",
  },
  {
    partNumber: "LAMP-DPA0P75-50W",
    centerFrequencyGhz: "750",
    outputPowerW: "50 (sat.) / 3.1-10 (av.)",
    efficiency: "45 (sat.) / 35 (av.)",
    gainDb: "50-55",
    modeOfOperation: "Doherty",
  },
] as const;

export const rfPowerAmplifierIntro = {
  title: "Radio Frequency Power Amplifier",
  description:
    "The company has a strong research background, with directors from I.I.T-Roorkee who are working in cutting-edge radio frequency technologies. Their recent R&D focus includes intelligent reflecting surfaces, multi-octave GAN MMICs, and millimeter-wave RFICs in CMOS and SiGe BiCMOS. Overall, the company is dedicated to pushing the boundaries of radio frequency technology and providing innovative solutions to their clients.",
} as const;

export const productMenuGroups = [
  {
    id: "rf-design-signal-processing",
    title: "RF Design and Signal Processing",
    href: "/products/rf/power-amplifiers",
    description: "RF systems, amplifier modules, and signal-chain products.",
    panels: [
      {
        title: "Radio Frequency Power Amplifiers",
        href: "/products/rf/power-amplifiers",
        description:
          "Wideband RF power amplifier modules with product pages, diagrams, and table data.",
        links: rfPowerAmplifierProducts.map((product) => ({
          label: product.partNumber,
          href: `/products/rf/power-amplifiers/${product.slug}`,
          meta: product.shortSpec,
        })),
      },
    ],
  },
] as const;

export function getRfPowerAmplifier(slug: string) {
  return rfPowerAmplifierProducts.find((product) => product.slug === slug);
}
