import type { Metadata } from "next";

import { ContactSection } from "@/components/landing/contact-section";
import { Reveal } from "@/components/landing/reveal";

export const metadata: Metadata = {
  title: "Contact | Linear Amptech",
  description:
    "Contact Linear Amptech to discuss RF front-end components, GaN MMICs, RFIC IP cores, prototypes, and semiconductor R&D programs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgb(16_199_232_/_0.18),transparent_28%),radial-gradient(circle_at_18%_76%,rgb(110_225_93_/_0.1),transparent_26%),linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-secondary)]">
            Contact
          </p>
          <h1 className="font-heading max-w-5xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            Talk with Linear Amptech about RF systems, silicon, and deployment
            programs.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Start a discussion around front-end architectures, semiconductor
            prototypes, measurement plans, or customer-specific R&D work.
          </p>
        </Reveal>
      </section>
      <ContactSection />
    </main>
  );
}
