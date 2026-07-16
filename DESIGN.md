# Linear Amptech — Premium Dark Saffron Design System

A premium dark RF/semiconductor theme built on **depth through an elevation
ladder**, not flat black. Deep blue-tinted near-black grounds, raised card
planes that catch light on their top edge, warm ivory text, cool muted copy, and
a single saffron accent used with restraint. Blue is a subtle tint on surfaces
and shadows — never a section fill.

## Tokens (source of truth: `src/app/globals.css` `:root`)

### Elevation ladder — depth comes from lightness, not downward shadow

| Token                    | Value     | Role                                          |
| ------------------------ | --------- | --------------------------------------------- |
| `--color-bg`             | `#090C13` | Page ground (deep blue-tinted near-black)     |
| `--color-surface-soft`   | `#0E121B` | Recessed insets, form fields, alternate bands |
| `--color-surface`        | `#151B27` | Raised cards, panels, plates                  |
| `--color-surface-raised` | `#1D2431` | Hover / overlay / active elevation            |
| `--color-media-well`     | `#06080E` | Deepest well behind dark chip assets          |

Each step is **perceptibly** lighter than the one below it, so cards read as
raised planes. Never reintroduce pure `#000000` as a surface — it flattens the
ladder and kills all depth.

### Text & borders

| Token                   | Value     | Role                              |
| ----------------------- | --------- | --------------------------------- |
| `--color-text`          | `#F5F3EF` | Warm near-white primary text      |
| `--color-text-muted`    | `#A7B0C0` | Cool muted secondary text         |
| `--color-border`        | `#232B3A` | Hairline that actually reads      |
| `--color-border-strong` | `#2F394B` | Emphasis dividers, ghost controls |

### Saffron system — one fill, one accent, one ink

| Token                   | Value                    | Role                                   |
| ----------------------- | ------------------------ | -------------------------------------- |
| `--color-primary`       | `#EA7317`                | Saffron fill (CTAs, rails)             |
| `--color-primary-hover` | `#FF9036`                | Fill hover — brightens (lifts) on dark |
| `--color-primary-deep`  | `#FF9A3D`                | Text/links/kickers/focus accent        |
| `--color-on-primary`    | `#1A1206`                | Dark ink for labels on saffron fills   |
| `--color-primary-ink`   | `#FFDEC0`                | Text on saffron wash chips             |
| `--color-accent-wash`   | `rgb(234 115 23 / 0.12)` | Low-opacity saffron chip background    |
| `--color-accent-border` | `#E2822E`                | Hover and emphasis border              |

### Restrained blue tint & utility

| Token                 | Value                   | Role                                 |
| --------------------- | ----------------------- | ------------------------------------ |
| `--color-accent-blue` | `#5B7FC7`               | Rare steel-blue highlight (tint use) |
| `--color-blue-wash`   | `rgb(59 95 158 / 0.14)` | Subtle blue-tinted panel wash        |
| `--color-accent-red`  | `#EF4444`               | Form errors only                     |

### Shadows

Shadows carry a soft ambient drop (darker than the ground) **plus a ~1px inset
top highlight** so raised surfaces catch light — the premium lift a black-on-black
shadow can never give. See `--shadow-card`, `--shadow-card-hover`, `--shadow-soft`,
`--shadow-header`. No glow shadows.

## Color Laws

1. Use token colors for surfaces, borders, text, and muted text. No hardcoded
   backgrounds; no pure `#000000` surfaces.
2. Build hierarchy through the elevation ladder
   (`bg` → `surface-soft` → `surface` → `surface-raised`), not through borders
   alone and not through blue section fills.
3. Saffron-filled CTAs use dark ink (`--color-on-primary` on `--color-primary`);
   hover **brightens** (`--color-primary-hover`) because lighter reads as more
   elevated on dark.
4. `--color-primary-deep` is the functional text accent: links, kickers, hover
   text, focus rings. Wash chips use `--color-accent-wash` with
   `--color-primary-ink`.
5. Blue is a **tint only** — on surfaces and shadows. Never flood a section with
   blue, add glow effects, glassmorphism, or backdrop-blur.

## Typography

- Display/headings: **Sora** (`--font-sora`) on all `h1–h6` and `font-heading`.
  Weights 500–600; preserve the heading scale and the letter-spacing tiers.
- Body/UI: **Inter** (`--font-inter`).
- Kickers/labels/spec values: **JetBrains Mono**, uppercase, tracked, compact.

## Recurring Patterns & Shared Classes

Reusable classes live in `src/app/globals.css` (Tailwind v4 is CSS-first here —
no `tailwind.config.*`). Prefer these over re-implementing anatomy inline:

- `.kicker` — mono uppercase section label in the functional saffron accent.
- `.btn-primary` — saffron CTA: gradient fill for dimension, dark ink, inset top
  highlight + dark ambient shadow, hover brightens and lifts. Use for every CTA.
- `.btn-ghost` — secondary/outlined control on the elevation ladder.
- `.surface-card` (+ `.surface-card-interactive`) — the canonical raised card.
- `.field-input` — recessed input well (`surface-soft`) with a saffron focus
  ring; use for all inputs, selects, and textareas.
- `.media-frame` + `.media-well` — elevated dark plate for dark chip/product
  imagery.
- `.product-plate` — intentional light "inspection well" for ivory studio-lit
  product renders, so light photos read as deliberate captures inside the dark
  theme rather than accidental white holes.
- Interior route heroes: dark background, border-b hairline, `.kicker`, Sora h1,
  muted intro.
- Motion: ~0.2s house tempo for hover, scroll reveals via `Reveal`,
  `prefers-reduced-motion` respected.

## Footer

The footer uses `.footer-dark` for the deepest local ground (`--color-media-well`)
so it still has section weight as the "basement" plane. Token-driven.

## Asset Generation

Generate imagery with dark blue-tinted saffron environments, warm saffron edge
lighting, visible semiconductor/RF hardware detail, and no neon, cartoon styling,
or pale paper backdrops unless a specific product image requires inspection
clarity (frame those with `.product-plate`).
