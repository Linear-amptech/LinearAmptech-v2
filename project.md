# Linear Amptech Frontend Project Guide

## Source Resources

- Product deck: `/Users/hafizur/Downloads/Content for website.pptx`
- Previous frontend reference: `/Users/hafizur/work/LinearAmptech-v2`
- Product images: `public/assets/ppt-products/`
- Shared landing/product data: `src/components/landing/data.ts`
- Company contact and careers data: `src/lib/company-data.ts`
- Careers application endpoint: `https://api.linear-amptech.com/job/apply`

## Project Structure

- App routes live under `src/app`.
- Shared layout components live under `src/components/layout`.
- Landing page sections live under `src/components/landing`.
- Page-specific client UI lives under a domain folder such as `src/components/careers`.
- shadcn-compatible UI components live under `src/components/ui`.
- Global tokens, reusable component classes, and animation CSS live in `src/app/globals.css`.

## Product Content Rules

- Product cards, the header product dropdown, and detail pages must read from `products` in `src/components/landing/data.ts`.
- Product technical details should stay brief on the website and trace back to the PPT deck.
- Every product needs a stable `slug`, `category`, `image`, `features`, `specs`, and `detailSections`.
- Product detail routes are generated at `/products/[slug]`.
- Product pages should include a hero image, feature pills, specification cards, brief detail sections, and a contact CTA.

## Layout Guidelines

- Section wrappers should use Tailwind's `container` class consistently:
  `container mx-auto px-5 py-24 lg:px-8`
- Keep the dark RF/circuit visual system across all pages.
- Use glass panels for cards:
  `product-card`, `platform-card`, `application-card`, `research-cell`, `team-card`, or equivalent shared classes.
- Cards should use 8px radii or the existing shared card radius.
- Do not scale full cards on hover. For product cards, only the inner image should scale while the card dimensions stay stable.
- Avoid placing cards inside other cards unless the inner element is a real form or modal surface.

## Animation Guidelines

- Use `Reveal` for section entrance animation and keep motion subtle.
- For image reveal effects, prefer opacity and blur changes in the same position instead of large directional movement.
- Circuit backgrounds should move linearly and remain visible without adding a second unrelated line-animation layer.
- Hero slider transitions should be smooth and include direct previous/next controls at the bottom-right.
- Dropdowns should animate with opacity and small vertical movement, using hover and focus-within states.

## Header And Navigation

- The header stays dark/translucent to match the site theme.
- Product navigation appears as a smooth hover dropdown sourced from `products`.
- Product links route to `/products/[slug]`.
- Logo coloring is controlled by CSS/filter treatment, not by changing source logo assets.

## Careers Guidelines

- Careers content is based on the older LinearAmptech-v2 careers page.
- The careers page must include search, experience, work-site, and employment-type filters.
- The job detail view should remain selectable without leaving the careers page.
- Apply forms post to the same API endpoint used by the old site:
  `https://api.linear-amptech.com/job/apply`
- Resume URL input should use public Google Drive or Google Docs links.

## Implementation Notes

- This project uses Next.js app routes, Tailwind CSS, TypeScript, and shadcn-compatible structure.
- Before changing Next.js routing conventions, read the relevant files in `node_modules/next/dist/docs/`.
- Keep source data centralized and avoid copying product specs into multiple components.
