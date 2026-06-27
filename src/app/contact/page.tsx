import type { Metadata } from "next";
import Image from "next/image";

import { ContactSection } from "@/components/landing/contact-section";
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
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-0 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,#050b12_0%,#07101d_100%)]"
        />
        <div className="absolute inset-y-0 right-0 hidden w-[42vw] lg:block">
          <Image
            src="/assets/particle-background.png"
            alt=""
            fill
            priority
            sizes="42vw"
            className="object-cover opacity-25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,#050b12_0%,rgba(5,11,18,0.7)_38%,rgba(5,11,18,0)_100%)]"
          />
        </div>
        <Reveal className="container relative z-10 mx-auto max-w-7xl px- pb-20 ">
          <p className="font-mono mb-4 text-xs uppercase tracking-[0.18em] text-white/45">
            Contact
          </p>
          <h1 className="font-heading max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Talk with Linear Amptech about RF systems, silicon, and deployment
            programs.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Start a discussion around front-end architectures, semiconductor
            prototypes, measurement plans, or customer-specific R&D work.
          </p>
        </Reveal>
        <div className="relative z-10 border-t border-white/10">
          <div className="container mx-auto max-w-7xl px-4 lg:px-4">
            <dl className="grid grid-cols-1 sm:grid-cols-3">
              {specStrip.map((item, index) => (
                <div
                  key={item.label}
                  className={`border-t border-white/10 py-6 first:border-t-0 sm:border-l sm:border-t-0 sm:py-7 sm:pl-8 sm:pr-6 ${
                    index === 0 ? "sm:border-l-0 sm:pl-0" : ""
                  }`}
                >
                  <dt className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">
                    {item.label}
                  </dt>
                  <dd className="font-mono mt-2 text-sm uppercase tracking-[0.12em] text-white/80">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
