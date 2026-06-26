import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/landing/reveal";
// some changes
export const metadata: Metadata = {
  title: "Team | Linear Amptech",
  description:
    "Meet the Linear Amptech team working across RF systems, analog IC design, semiconductor architecture, and advanced electronics R&D.",
};

const team = [
  {
    name: "Dr. Karun Rawat",
    role: "Founder & Chairman",
    group: "Leadership Team",
    image: "/assets/ppt-team/karun-rawat.png",
    details: ["Founder", "Chairman", "Linear-AmpTech leadership"],
  },
  {
    name: "Dr. Meenakshi Rawat",
    role: "Founder & Director",
    group: "Leadership Team",
    image: "/assets/ppt-team/meenakshi-rawat.png",
    details: ["Founder", "Director", "Linear-AmpTech leadership"],
  },
  {
    name: "Mr. Vivek Sharma",
    role: "Director",
    group: "Leadership Team",
    image: "/assets/ppt-team/vivek-sharma.png",
    details: ["Director", "Leadership Team"],
  },
  {
    name: "Dr. Aditya Pal",
    role: "Chief Operating Officer",
    group: "Leadership Team",
    image: "/assets/ppt-team/aditya-pal.jpg",
    details: ["Chief Operating Officer", "Operations"],
  },
  {
    name: "Dr. Garima Shukla",
    role: "Senior RF Design Engineer",
    group: "Development Team",
    image: "/assets/ppt-team/garima-shukla.jpg",
    details: ["Senior RF Design Engineer", "Development Team"],
  },
  {
    name: "Dr. Pawan Shukla",
    role: "Senior RF Design Engineer",
    group: "Development Team",
    image: "/assets/ppt-team/pawan-shukla.jpeg",
    details: ["Senior RF Design Engineer", "Development Team"],
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative isolate overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
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
        </div>
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-white/45">
            Team
          </p>
          <h1 className="font-heading max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineers and operators building RF semiconductor systems from
            concept to validation.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Linear Amptech combines leadership in RF systems, semiconductor
            design, product engineering, and execution across research,
            prototyping, and deployment programs.
          </p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
              People
            </p>
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[color:var(--color-text)] sm:text-4xl lg:text-[2.75rem]">
              Leadership and technical depth across the company.
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg">
              The team spans company leadership, RF engineering, and product
              development with a focus on measurable semiconductor outcomes.
            </p>
          </Reveal>

          <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member) => (
              <Reveal key={member.name} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(15_23_42/0.10)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--color-surface-soft)]">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      fill
                      unoptimized
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                      {member.group}
                    </p>
                    <h2 className="mt-3 font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text)]">
                      {member.name}
                    </h2>
                    <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slate-400">
                      {member.role}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {member.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-2.5 py-1 text-xs font-medium text-[color:var(--color-text-muted)]"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
