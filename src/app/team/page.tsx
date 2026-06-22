import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Mail, Radar, ShieldCheck, Waves } from "lucide-react";

import { Reveal } from "@/components/landing/reveal";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Team | Linear Amptech",
  description:
    "Meet the Linear Amptech team working across RF systems, analog IC design, semiconductor architecture, and advanced electronics R&D.",
};

const team = [
  {
    name: "Dr. Aarav Mehta",
    role: "Director, RF Systems",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    icon: Radar,
    summary:
      "Leads high-frequency architecture programs across RF front ends, radar chains, satellite links, and microwave validation.",
    details: [
      "RF and microwave design",
      "Aerospace communication",
      "Measurement strategy",
    ],
  },
  {
    name: "Nisha Rao",
    role: "Principal Analog IC Engineer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    icon: Waves,
    summary:
      "Designs precision analog and mixed-signal blocks for amplifiers, converters, sensing systems, and power-aware silicon.",
    details: ["Low-noise analog", "Mixed-signal ICs", "Signal integrity"],
  },
  {
    name: "Kabir Sen",
    role: "Head of Silicon R&D",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    icon: ShieldCheck,
    summary:
      "Connects semiconductor prototyping, ASIC exploration, lab validation, and product engineering for next-generation electronics.",
    details: ["ASIC architecture", "Prototype validation", "R&D operations"],
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#03060d] text-slate-100">
      <SiteHeader />
      <section className="relative overflow-hidden pb-20 pt-32">
        <Image
          src="/assets/particle-background.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#03060d]/75 via-[#03060d]/85 to-[#03060d]"
        />
        <Reveal className="container relative mx-auto px-5 lg:px-8">
          <p className="section-kicker">Team</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-normal text-white sm:text-6xl">
            Engineers building silicon, RF, and intelligent electronics.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A focused deep-tech group bringing together RF systems, analog and
            mixed-signal IC design, semiconductor prototyping, and lab-grade
            validation.
          </p>
        </Reveal>
      </section>

      <section className="relative pb-24">
        <div className="container mx-auto grid items-stretch gap-5 px-5 lg:grid-cols-3 lg:px-8">
          {team.map((member) => (
            <Reveal key={member.name} className="h-full">
              <article className="team-card group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] shadow-[0_28px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl">
                <div className="relative h-80 overflow-hidden border-b border-white/10">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03060d] via-[#03060d]/18 to-transparent" />
                  <div className="absolute bottom-5 left-5 grid size-12 place-items-center rounded-lg border border-cyan-200/25 bg-cyan-200/10 text-cyan-100">
                    <member.icon className="size-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {member.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
                    {member.role}
                  </p>
                  <p className="mt-5 text-base leading-7 text-slate-300">
                    {member.summary}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {member.details.map((detail) => (
                      <span key={detail} className="feature-pill">
                        {detail}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex gap-3">
                    <a
                      className="learn-button"
                      href="mailto:sales@linearamptech.com"
                    >
                      <Mail className="size-4" aria-hidden="true" />
                      Contact
                    </a>
                    <a
                      className="learn-button"
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="size-4" aria-hidden="true" />
                      Profile
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
