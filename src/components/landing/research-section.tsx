import { Orbit, Shield } from "lucide-react";
import Image from "next/image";

import { assets, researchFocusRows } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

export function ResearchSection() {
  return (
    <section id="research" className="rd-cinematic section-shell">
      <Image
        src={assets.rdLab}
        alt="Linear Amptech semiconductor R&D laboratory with RF measurement equipment"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#02050a]/72" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-28 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <Reveal className="rd-panel">
          <Shield className="size-8 text-cyan-200" aria-hidden="true" />
          <h2 className="mt-8 text-3xl font-semibold text-white sm:text-4xl">
            R&D pipeline from circuit architecture to measured prototypes.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Linear Amptech&apos;s deck shows a practical development path:
            RFIC/MMIC design, simulation, GDS/specification handoff, tapeout,
            packaging, module integration, chamber testing, and measurement.
          </p>
        </Reveal>
        <Reveal className="grid content-center gap-4 sm:grid-cols-2">
          {researchFocusRows.map((item) => (
            <div key={item} className="research-cell">
              <Orbit className="size-5 text-cyan-200" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
