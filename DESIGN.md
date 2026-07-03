# Linear Amptech — Saffron Light Design System

A premium, editorial light theme in the Claude/Anthropic style: warm paper surfaces,
serif display headlines, one saturated saffron accent used with restraint, generous
whitespace. Typography and spacing do the heavy lifting — never effects.

## Tokens (source of truth: `src/app/globals.css` `:root`)

| Token                  | Value     | Role                                          |
| ---------------------- | --------- | --------------------------------------------- |
| `--color-bg`           | `#FAF7F2` | Warm ivory page background — never pure white |
| `--color-surface`      | `#FFFFFF` | Cards, panels, plates                         |
| `--color-surface-soft` | `#F3EEE5` | Warm paper — alternate section bands          |
| `--color-text`         | `#1C1917` | Warm near-black                               |
| `--color-text-muted`   | `#57534E` | Warm stone gray                               |
| `--color-border`       | `#E7E0D5` | Warm hairline                                 |
| `--color-primary`      | `#EA7317` | Deep saffron — decorative ONLY                |
| `--color-primary-deep` | `#B93D0B` | Burnt orange — functional accent              |
| `--color-primary-ink`  | `#9A3412` | Text on saffron wash                          |
| `--color-accent-wash`  | `#FDEAD7` | Saffron wash — chips, badges                  |
| `--color-media-well`   | `#121110` | Warm charcoal wells behind dark imagery       |
| `--color-accent-red`   | `#ef4444` | Form errors only                              |

Shadows are warm and layered (`--shadow-card`, `--shadow-card-hover`,
`--shadow-soft`, `--shadow-header`) — never glows, never cool `rgb(15 23 42 …)`.

## Color laws (WCAG-derived — non-negotiable)

1. `#EA7317` is decorative only (2.8:1 on ivory): button fills, hairline ticks,
   progress fills, icon strokes, ornament. Never text, never focus rings.
2. Saffron-filled buttons take near-black labels (`#1C1917` on `#EA7317`), hover
   `#E06A0F`. Never white text on saffron.
3. `--color-primary-deep` is the functional accent: links, kickers, hover text,
   focus rings (`--ring` points at it).
4. Wash chips: `--color-accent-wash` background with `--color-primary-ink` text.
5. No dark sections, no backdrop-blur/translucency, no glow shadows, no cool grays
   (`slate-*` is banned) — every neutral is warm stone. **Exception:** the site
   footer (`.footer-dark`) is a deliberate dark section — see "Footer" below.

## Typography

- Display/headings: **Sora** (`--font-sora`) — wired to all `h1–h6` and the
  `font-heading` utility. Letter-spacing tiers in globals.css (h1 −0.02em,
  h2 −0.015em, h3+ −0.01em). Keep weights 500–600; never below 16px. A geometric
  tech grotesque — conventional for the semiconductor register while keeping
  character; do not swap in a generic UI sans for headings.
- Body/UI: **Inter** (`--font-inter`).
- Kickers/labels/spec values: **JetBrains Mono** via `font-mono`, uppercase,
  tracked +0.2em, 11–12px.

## Recurring patterns (reuse, don't reinvent)

- `.kicker` — mono uppercase label in the functional accent. Every section starts
  with one.
- `.media-frame` + `.media-well` — the dark-asset plate: white frame card with a
  charcoal well inside. ALL dark chip renders/photography sit in wells so they read
  as intentional technical plates on the ivory page. Never bleed dark imagery into
  the background.
- Hero band (interior routes): ivory section, `border-b` hairline, `pt-32 pb-16`,
  `.kicker` + Sora h1 (`text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold
leading-[1.05] tracking-tight text-balance`) + muted intro.
- Stat/spec strips: hairline band (`border-y`), tiles with a saffron tick
  (`h-[2px] w-[18px] bg-[#EA7317]`), mono muted uppercase label, mono value.
- Cards: white surface, warm border, `--shadow-card`; hover = `--shadow-card-hover`
  - border tint `#F2C79E`. Cards never translate/scale — only inner images may
    scale (1.05, 500–700ms).
- CTAs: saffron pill (`rounded-full bg-[#EA7317] text-[#1C1917] font-semibold
hover:bg-[#E06A0F]` + soft shadow lift). Quiet links: `--color-primary-deep`
  with a 35%-alpha bottom border that fills on hover.
- Motion: 0.2s house tempo for hover, scroll reveals via `Reveal`
  (`@/components/landing/reveal`), `prefers-reduced-motion` respected globally.
- `::selection` is burnt orange with warm white text.

## Footer

The one intentional dark section on the site. `.footer-dark` (globals.css)
shadows `--color-surface` → `--color-media-well` (`#121110`, the site's
existing near-black token), `--color-text` → `--color-bg` (warm ivory), and
`--color-text-muted` → `#D8B99C` (warm tan, ≥7:1 on the dark bg), scoped
to the footer subtree — existing token classnames elsewhere are unaffected.
`--color-primary` is left global, so `FloatingPaths` keeps drawing its
saffron traces (now at higher container opacity to read against the dark
bg) — glowing circuit lines on a warm dark ground, on-brand for an RF/
semiconductor company.

## Asset generation (future, one by one)

Base prompt for regenerating imagery to match the theme: product renders on warm
ivory/paper backgrounds, saffron accent lighting, stone-gray metals, no dark
backdrops, no neon. Until regenerated, dark assets stay framed in media wells.
