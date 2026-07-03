import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Product listing card matching the homepage ProductPortfolioCard anatomy:
 * padded white plate, inset media-well image, saffron mono band eyebrow.
 */
export function ProductListingCard({
  title,
  href,
  image,
  alt,
  band,
}: {
  title: string;
  href: string;
  image?: string;
  alt?: string;
  band?: string;
}) {
  return (
    <article className="group relative flex h-full flex-col rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 shadow-[var(--shadow-card)] transition-[box-shadow,border-color] duration-300 hover:border-[#F2C79E] hover:shadow-[var(--shadow-card-hover)]">
      {/* light well: the default dark well shows as thin corner arcs behind these ivory renders */}
      <div className="media-well aspect-[16/10] bg-[color:var(--color-surface-soft)] bg-none">
        {image ? (
          <Image
            src={image}
            alt={alt ?? title}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-2.5 pt-5 pb-2.5">
        <h3 className="min-h-[2.75em] font-heading text-[21px] font-semibold leading-snug tracking-tight text-[color:var(--color-text)]">
          <Link
            href={href}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {title}
          </Link>
        </h3>
        {band ? (
          <div className="mt-1.5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[color:var(--color-primary-deep)]">
              Operating band
            </p>
            <p className="mt-1 text-lg font-semibold tracking-tight text-[color:var(--color-text)]">
              {band}
            </p>
          </div>
        ) : null}
        <div className="mt-auto pt-3">
          <Link
            href={href}
            className="group/view relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)]"
          >
            View product
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/view:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
