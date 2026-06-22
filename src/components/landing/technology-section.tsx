import Image from "next/image";

import { ipPlatforms, technologySystemRows } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

export function TechnologySection() {
  return (
    <section id="technology" className="section-shell">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="max-w-4xl">
          <p className="section-kicker">IP Strategy</p>
          <h2 className="section-title">
            Three semiconductor technology tracks mapped to frequency and
            application domains.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {ipPlatforms.map((platform, index) => (
            <Reveal key={platform.name}>
              <article className={`platform-card geo-${index % 4}`}>
                <div className="platform-image">
                  <Image
                    src={platform.image}
                    alt={`${platform.name} technology visual`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <platform.icon className="mb-5 size-6 text-cyan-200" />
                  <h3 className="text-2xl font-semibold text-white">
                    {platform.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {platform.description}
                  </p>
                  <p className="mt-5 border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    {platform.focus}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologySystemRows.map((item, index) => (
            <div key={item} className="system-row">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
