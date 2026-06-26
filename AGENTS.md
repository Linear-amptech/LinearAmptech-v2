<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Linear Amptech frontend

Detailed conventions live in two docs — read them before non-trivial UI work:

@project.md
@DESIGN.md

## Stack & commands

- Package manager is **pnpm** (not npm/yarn). Next.js 16 App Router (`src/app`), React 19, TypeScript strict, Tailwind CSS v4.
- `pnpm dev` · `pnpm build` · `pnpm lint` (eslint) · `pnpm format` (prettier --write .).
- **No test framework is configured** — do not invent or run test commands.
- Path alias: `@/*` → `./src/*`.

## Gotchas

- Tailwind v4 is CSS-first: there is **no `tailwind.config.*`**. Design tokens, shared card classes, and animations live in `src/app/globals.css`. Don't add a config file.
- Husky: pre-commit runs lint-staged (prettier + `eslint --fix` on staged files); **pre-push runs `pnpm build`**, so the build must pass before a push will succeed.
