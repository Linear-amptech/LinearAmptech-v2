# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 App Router frontend for Linear Amptech. App routes live in `src/app`, with route folders such as `careers`, `contact`, `products`, and `team`. Shared layout components are in `src/components/layout`; landing page sections and shared product data are in `src/components/landing`; domain-specific UI lives in folders such as `src/components/careers` and `src/components/products`. shadcn-compatible primitives live in `src/components/ui`. Shared company data is in `src/lib`, and public assets are under `public`.

Before non-trivial UI work, read `DESIGN.md`. Before changing Next.js routing, rendering, metadata, or framework conventions, read the relevant guide in `node_modules/next/dist/docs/`; this Next.js version may differ from older assumptions.

## Build, Test, and Development Commands

Use pnpm only.

- `pnpm dev`: start the local development server.
- `pnpm build`: create a production build; this also runs on pre-push.
- `pnpm lint`: run ESLint.
- `pnpm format`: format the repo with Prettier.
- `pnpm format:check`: verify formatting without writing changes.

No test framework is configured. Do not add or run test commands unless a framework is explicitly introduced.

## Coding Style & Naming Conventions

Use TypeScript strict patterns and the `@/*` alias for imports from `src`. Follow existing component naming: React components use `PascalCase`, hooks/helpers use `camelCase`, and route folders use lowercase URL segments. Keep product content centralized in `src/components/landing/data.ts`; product routes use stable slugs at `/products/[slug]`.

Tailwind CSS v4 is CSS-first in this repo. Do not add `tailwind.config.*`; design tokens, reusable classes, and animations live in `src/app/globals.css`. Prefer the existing shared classes `kicker`, `media-frame`, and `media-well`, and consume colors via token utilities such as `text-[color:var(--color-text)]` rather than hardcoded palette classes.

## Design & UI Guidelines

Maintain the implemented Linear Amptech visual system: a premium, editorial saffron-light theme (see `DESIGN.md`) — warm ivory surfaces, Sora display headings, warm stone text, and saffron/burnt-orange accents from `src/app/globals.css` (`--color-primary: #EA7317` decorative only, `--color-primary-deep` for links/kickers/focus). No dark sections, no backdrop-blur, no glow shadows, no `slate-*` utilities — except the site footer (`.footer-dark`), a deliberate one-off dark section documented in `DESIGN.md`. If older docs mention dark surfaces or green/teal accents, treat `globals.css` and `DESIGN.md` as the source of truth. Dark imagery always sits inside `media-frame`/`media-well` plates. Use `container mx-auto px-4 py-24 lg:px-4` for section wrappers unless nearby code establishes a better local pattern. Keep cards stable on hover (shadow + border tint only); product cards may scale only the inner image.

## Commit & Pull Request Guidelines

Recent history uses short, imperative summaries such as `fix deploy` and `improved footer`. Keep commits focused and concise. Pull requests should describe the user-facing change, list validation performed (`pnpm lint`, `pnpm build`, formatting), link issues when relevant, and include screenshots or screen recordings for UI changes.

## Security & Configuration Tips

Do not commit secrets, local environment files, or private credentials. Careers applications post to `https://api.linear-amptech.com/job/apply`; preserve that endpoint unless the backend contract changes.
