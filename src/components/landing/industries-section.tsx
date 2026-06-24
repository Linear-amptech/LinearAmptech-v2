// import { Satellite } from "lucide-react";
import Image from "next/image";

import { BackgroundTexture } from "@/components/landing/background-texture";
import { applications, assets } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="section-shell border-y border-white/10 bg-[#07101d]/65"
    >
      <BackgroundTexture src={assets.circuitBackground} opacity="opacity-10" />
      <BackgroundTexture
        src={assets.particleBackground}
        opacity="opacity-15"
        className="animate-texture-drift"
      />
      <div className="container mx-auto grid gap-10 px-5 py-24 lg:grid-cols-[0.45fr_0.55fr] lg:px-8">
        <Reveal>
          <p className="section-kicker">Applications</p>
          <h2 className="section-title">
            RF products shaped around real deployment domains.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-400">
            Competitor sites organize around application fit. Linear
            Amptech&apos;s application framing is anchored in defense RF, 6G,
            radar, phased arrays, active antennas, and RIS research.
          </p>
        </Reveal>
      </div>
      <div className="container relative mx-auto grid gap-5 px-5 pb-24 lg:grid-cols-4 lg:px-8">
        {applications.map((application) => (
          <Reveal key={application.title}>
            <article className="application-card">
              <div className="application-image">
                <Image
                  src={application.image}
                  alt={`${application.title} application visual`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">
                  {application.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {application.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
