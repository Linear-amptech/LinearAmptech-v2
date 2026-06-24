# Linear-AmpTech Design System

## 1. Brand Direction

Linear-AmpTech is positioned as a premium RF semiconductor and deep-tech company focused on RF front-end technologies, GaN PA modules, CMOS/BiCMOS RFICs, mm-wave transceivers, active antennas, radar front-end chips, phased arrays, RIS, packaging, validation, and semiconductor R&D.

The website should feel credible, technical, modern, minimal, and trustworthy. The design language uses whitespace, clean technical cards, subtle gradients, precise typography, and layout-ready visual placeholders for final graphics.

## 2. Primary Brand Color

Primary color: teal/cyan.

Teal/cyan is the primary Linear-AmpTech brand color because it represents RF signal waves, wireless communication, precision electronics, and semiconductor technology.

Primary CTA buttons use teal/cyan solids or gradients. Hover and focus states use cyan/teal emphasis.

## 3. Secondary And Accent Colors

Secondary color: green.

Green is the secondary color because it comes from the logo's circuit-leaf symbol and represents innovation, active systems, performance, and progress.

Accent colors: orange and red.

Orange and red should be used sparingly as signal-wave accents only. They should not dominate the interface.

## 4. Theme Color Palette

Light mode:

| Token                   | Value     |
| ----------------------- | --------- |
| `--color-bg`            | `#F7FAFC` |
| `--color-surface`       | `#FFFFFF` |
| `--color-surface-soft`  | `#EEF6F8` |
| `--color-text`          | `#0B1220` |
| `--color-text-muted`    | `#64748B` |
| `--color-border`        | `#E2E8F0` |
| `--color-primary`       | `#10C7E8` |
| `--color-primary-deep`  | `#0891B2` |
| `--color-secondary`     | `#6EE15D` |
| `--color-accent-orange` | `#F59E0B` |
| `--color-accent-red`    | `#EF4444` |

Dark mode:

| Token                   | Value                       |
| ----------------------- | --------------------------- |
| `--color-bg`            | `#050B12`                   |
| `--color-surface`       | `#0D1826`                   |
| `--color-surface-soft`  | `#101F31`                   |
| `--color-text`          | `#F8FAFC`                   |
| `--color-text-muted`    | `#94A3B8`                   |
| `--color-border`        | `rgba(148, 163, 184, 0.18)` |
| `--color-primary`       | `#10C7E8`                   |
| `--color-primary-deep`  | `#14B8A6`                   |
| `--color-secondary`     | `#6EE15D`                   |
| `--color-accent-orange` | `#F59E0B`                   |
| `--color-accent-red`    | `#EF4444`                   |

## 5. Typography System

Headings: Space Grotesk.

Body: Inter.

Use Space Grotesk for hero headings, section headings, card headings, and large labels. Use Inter for navigation, descriptions, buttons, forms, contact information, and metadata.

Recommended scale:

| Role            | Size                                            |
| --------------- | ----------------------------------------------- |
| Hero heading    | 64-76px desktop, 42-48px tablet, 34-40px mobile |
| Section heading | 44-56px desktop, 34-42px tablet, 28-34px mobile |
| Card heading    | 22-28px                                         |
| Body            | 16-18px                                         |
| Small labels    | 12-14px uppercase                               |

## 6. UI Principles

- Clean, minimal, premium, semiconductor-grade, and trustworthy.
- Strong whitespace, clear hierarchy, and accessible contrast.
- Light borders, soft shadows, restrained glow effects, and subtle gradients.
- Icons should be clean line icons with teal/cyan and green accents.
- Avoid noisy neon, cluttered backgrounds, excessive animation, and oversized text everywhere.

## 7. Section Structure

1. Header / Navigation
2. Hero
3. Company intro
4. Product portfolio
5. Technology
6. Applications
7. Capability / R&D engine
8. Process / workflow
9. Contact CTA
10. Footer

## 8. Image / Graphic Requirements

Final visuals should be original Linear-AmpTech assets only. Do not use third-party brand marks, copied website designs, NXP branding, or generic fake logos. Until final graphics are ready, use clean placeholder slots with visible file paths and descriptive alt text.

## 9. Placeholder Image Paths

Hero:

- `/assets/images/hero-linear-amptech-rfic-chip.png`

Company:

- `/assets/images/company-wafer-clean.png`

Products:

- `/assets/images/products/hybrid-mic-pa-module.png`
- `/assets/images/products/c-ku-band-pa-chip.png`
- `/assets/images/products/47ghz-transmitter-chip.png`
- `/assets/images/products/receiver-chip.png`
- `/assets/images/products/radar-front-end-chip.png`
- `/assets/images/products/phase-shifter-chip.png`
- `/assets/images/products/active-antenna.png`
- `/assets/images/products/ris-prototype.png`
- `/assets/images/products/mmwave-packaging.png`

Technology:

- `/assets/images/technology/gan-technology.png`
- `/assets/images/technology/si-cmos-technology.png`
- `/assets/images/technology/sige-bicmos-technology.png`

Applications:

- `/assets/images/applications/defense-aerospace-rf.png`
- `/assets/images/applications/6g-massive-mimo.png`
- `/assets/images/applications/mimo-radar-phased-array.png`
- `/assets/images/applications/ris-active-antenna.png`

Capability:

- `/assets/images/capability/rf-lab-validation.png`

Process:

- `/assets/images/process/rf-development-workflow.svg`

## 10. Component Guidelines

- Use semantic sections with stable IDs for navigation.
- Use reusable cards for products, technologies, applications, stats, workflow steps, and placeholder visuals.
- Keep card dimensions stable and responsive.
- Use CSS variables for colors, radius, shadows, and theme behavior.
- Keep animations subtle: small hover lift, color fade, and theme transitions.

## 11. Button Styles

Primary button:

- Teal/cyan gradient or solid teal/cyan.
- Dark text on bright CTA for contrast.
- 14px bold Inter text.
- 14px radius.
- Subtle shadow, slight hover lift.

Secondary button:

- Transparent or surface background.
- Teal/cyan border.
- Teal/cyan hover fill.
- Same height and radius as primary buttons.

## 12. Card Styles

Light mode cards:

- White surface.
- Light gray border.
- Soft shadow.
- 16-24px radius.

Dark mode cards:

- Dark navy surface.
- Subtle translucent border.
- restrained glass-like feel.
- Cyan/green highlights only where useful.

## 13. Theme System And Toggle Behavior

Theme rule: Light mode is the default for clarity and corporate trust. Dark mode is supported for a premium deep-tech semiconductor feel.

The theme toggle is visible in the header on desktop and mobile. It switches between light and dark mode, stores the selected mode in `localStorage` under `linearamptech-theme`, and applies the theme class to the document element. If no saved preference exists, the site respects `prefers-color-scheme`.

## 14. Light / Dark Mode Usage Rules

- Do not invert colors mechanically.
- Use intentional tokens for surfaces, text, borders, and highlights.
- Hero and R&D sections can remain dark in both modes.
- Product, company, workflow, and contact sections should remain especially clear in light mode.
- Teal/cyan remains the primary technical color in both modes.
- Green remains the active/progress/performance accent.
- Orange/red remain tiny signal accents only.

## 15. Future Image Generation Prompts

Hero graphic prompt:

Create a premium 3D semiconductor website hero graphic for Linear-AmpTech. Show a dark RFIC / semiconductor chip floating or mounted on a circuit-board surface. The chip should have the Linear-AmpTech logo on top and subtle text like "SiGe BiCMOS RFIC". Use glowing teal, cyan, and green RF traces around the chip. The composition should feel clean, minimal, high-end, and semiconductor-industry focused. No third-party logos, no NXP branding, no generic fake brand names. Dark navy background, soft depth of field, restrained glow, premium engineering aesthetic.

Use in: Hero section

File path: `/assets/images/hero-linear-amptech-rfic-chip.png`

Company wafer visual prompt:

Create a clean semiconductor wafer visual for Linear-AmpTech's company section. Show a polished wafer or chip-pattern surface with subtle teal and green highlights. The image should feel professional, minimal, credible, and suitable for a light website section. Avoid clutter, avoid heavy neon, avoid people, avoid third-party logos. Use a modern RF semiconductor research aesthetic.

Use in: Company intro section

File path: `/assets/images/company-wafer-clean.png`

Product card graphic prompt:

Create a consistent product card image for Linear-AmpTech showing a [PRODUCT NAME]. Use a clean semiconductor/RF engineering style, minimal background, teal and green accent lighting, and realistic lab or chip/module presentation. The image should be suitable for a website product card, with clear subject focus, consistent lighting, and no third-party logos. Keep the style premium, technical, and uncluttered.

Use in: Product portfolio cards

Folder: `/assets/images/products/`

Product names:

- Hybrid MIC PA Module
- Fully Integrated C-Ku Band PA Chip
- 47 GHz SiGe BiCMOS Transmitter Chip
- mm-Wave Receiver Chip
- Radar Front-End Chip
- 8-Bit Phase Shifter Chip
- Active Antenna Prototype
- RIS Prototype
- mm-Wave Packaging and Integration

Technology graphic prompt:

Create a clean technology visual for Linear-AmpTech showing [TECHNOLOGY NAME]. The style should be consistent with a premium RF semiconductor website: dark or neutral background, sharp chip/module details, teal and green accent traces, minimal composition, no third-party logos, no text-heavy overlays. Make it look credible for deep-tech semiconductor engineering.

Use in: Technology section

Folder: `/assets/images/technology/`

Technology names:

- III-V GaN Technology
- Si CMOS RFIC Technology
- SiGe BiCMOS mm-Wave Technology

Application graphic prompt:

Create a premium website application graphic for Linear-AmpTech showing [APPLICATION AREA]. Use a clean RF semiconductor visual language with teal/cyan and green accents. The image should feel technical, credible, and deployment-focused. Avoid clutter, avoid third-party branding, and keep the composition suitable for a modern application card.

Use in: Applications section

Folder: `/assets/images/applications/`

Application names:

- Defense and Aerospace RF
- 6G and Massive MIMO
- MIMO Radar and Phased Arrays
- RIS and Active Antenna Systems

Capability / R&D engine graphic prompt:

Create a premium RF semiconductor R&D lab visual for Linear-AmpTech. Show a clean RF measurement and validation environment with instruments, probes, circuit boards, or test setups. Use a dark blue technical mood with teal and green highlights. The scene should feel modern, organized, credible, and high-end. Avoid messy lab clutter, avoid third-party logos, and avoid text overlays.

Use in: Capability / R&D engine section

File path: `/assets/images/capability/rf-lab-validation.png`

Process workflow diagram prompt:

Create a minimal vector-style RF semiconductor development workflow diagram for Linear-AmpTech. Show five stages: Architecture & Specification, Circuit Design & Simulation, Layout & Tapeout, Packaging & Integration, Measurement & Validation. Use clean line icons, teal and green accents, modern spacing, and a premium technical style. The graphic should work on a light website background and be easy to understand.

Use in: Workflow section

File path: `/assets/images/process/rf-development-workflow.svg`

Style consistency instruction for all future images:

Linear-AmpTech brand system, Space Grotesk and Inter inspired layout, teal/cyan primary color, green secondary accent, minimal semiconductor aesthetic, premium RF engineering tone, clean composition, no third-party branding, no clutter, no copied website design.
