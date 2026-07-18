import type { Metadata } from "next";

import { ContactSection } from "@/components/landing/contact-section";
import { HeroThreads } from "@/components/layout/hero-threads";
import { Reveal } from "@/components/landing/reveal";

export const metadata: Metadata = {
  title: "Contact | Linear Amptech",
  description:
    "Contact Linear Amptech to discuss RF front-end components, GaN MMICs, RFIC IP cores, prototypes, and semiconductor R&D programs.",
};

const specStrip = [
  {
    label: "Location",
    value: "Roorkee, IIT · India",
  },
  {
    label: "Disciplines",
    value: "RF · Analog · Mixed-signal · ASIC",
  },
  {
    label: "Engagement",
    value: "Concept → Validation",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative overflow-hidden border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pb-16 pt-32">
        <HeroThreads />
        <Reveal className="container relative mx-auto max-w-7xl px-4">
          <p className="kicker mb-4">Contact</p>
          <h1 className="font-heading max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
            Talk with Linear Amptech about RF systems, silicon, and deployment
            programs.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-text-muted)] xl:text-xl">
            Start a discussion around front-end architectures, semiconductor
            prototypes, measurement plans, or customer-specific R&D work.
          </p>
        </Reveal>
      </section>
      <section className="border-b border-[color:var(--color-border)]">
        <div className="container mx-auto max-w-7xl px-4 lg:px-4">
          <dl className="grid grid-cols-1 sm:grid-cols-3">
            {specStrip.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col gap-2.5 border-t border-[color:var(--color-border)] py-6 first:border-t-0 sm:border-l sm:border-t-0 sm:py-9 sm:pl-8 sm:pr-6 ${
                  index === 0 ? "sm:border-l-0 sm:pl-0" : ""
                }`}
              >
                <dt className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                  <span
                    aria-hidden="true"
                    className="h-[2px] w-[18px] bg-[color:var(--color-primary)]"
                  />
                  {item.label}
                </dt>
                <dd className="text-xl font-semibold leading-snug tracking-tight text-[color:var(--color-text)] sm:text-2xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
