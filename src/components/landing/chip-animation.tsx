import Image from "next/image";

export function ChipAnimation() {
  return (
    <section className="relative bg-[color:var(--color-surface-soft)] py-24">
      <div className="container mx-auto px-4 lg:px-4">
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="absolute inset-0 rounded-[var(--radius-card)] bg-[radial-gradient(circle_at_50%_50%,rgb(16_199_232_/_0.14),transparent_56%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 shadow-[var(--shadow-card)]">
            <div className="relative aspect-[1672/941] overflow-hidden rounded-[calc(var(--radius-card)-0.35rem)] bg-[color:var(--color-surface-soft)]">
              <Image
                src="/assets/chip-animation/final_scroll_image.png"
                alt="RFIC chip design overview"
                fill
                priority
                sizes="(min-width: 1280px) 78vw, (min-width: 1024px) 88vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
