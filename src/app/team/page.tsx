import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/landing/reveal";

export const metadata: Metadata = {
  title: "Team | Linear Amptech",
  description:
    "Meet the Linear Amptech team working across RF systems, analog IC design, semiconductor architecture, and advanced electronics R&D.",
};

type TeamMember = {
  name: string;
  role: string;
  group: "Leadership" | "Development";
  image: string;
};

const companyWriteups = [
  {
    label: "About us",
    title: "Who we are",
    body: "Linearised Amplifier Technology & Services Pvt. Ltd. (Linear-AmpTech) is founded and driven by innovative minds from IIT Roorkee, one of India's premier technical institutes. The deep-tech startup targets cyber-physical system design with a focus on radio-frequency circuit and system design.",
  },
  {
    label: "Vision",
    title: "Our vision",
    body: "To drive disruptive innovation in cyber-physical systems, delivering high-performance, indigenous technology solutions that secure global traction.",
  },
  {
    label: "Mission",
    title: "Our mission",
    body: "The company is focused on innovation to cater to technical challenges in radio-frequency electronics targeting cyber-physical systems, with strengths in RF front-end component design, GaN-based MMIC and high-power modules, and CMOS/BiCMOS RFIC IP cores with silicon validation.",
  },
];

const team: TeamMember[] = [
  {
    name: "Dr. Karun Rawat",
    role: "Founder & Chairman",
    group: "Leadership",
    image: "/assets/ppt-team/karun.jpeg",
  },
  {
    name: "Dr. Meenakshi Rawat",
    role: "Founder & Director",
    group: "Leadership",
    image: "/assets/ppt-team/meenakshi-rawat.png",
  },
  {
    name: "Mr. Vivek Sharma",
    role: "Director",
    group: "Leadership",
    image: "/assets/ppt-team/vivek_1.webp",
  },
  {
    name: "Dr. Aditya Pal",
    role: "Chief Operating Officer",
    group: "Leadership",
    image: "/assets/ppt-team/aditya-pal.jpg",
  },
  {
    name: "Dr. Garima Shukla",
    role: "Senior RF Design Engineer",
    group: "Development",
    image: "/assets/ppt-team/garima-shukla.jpg",
  },
  {
    name: "Dr. Pawan Shukla",
    role: "Senior RF Design Engineer",
    group: "Development",
    image: "/assets/ppt-team/pawan-shukla.jpeg",
  },
];

const specStrip = [
  { label: "Team", value: `${String(team.length).padStart(2, "0")} Members` },
  { label: "Disciplines", value: "RF · Analog · Semiconductor" },
  { label: "Based in", value: "Roorkee · IIT" },
];

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <Reveal className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgb(15_23_42/0.10)]">
        <div className="relative aspect-square overflow-hidden bg-[color:var(--color-surface-soft)]">
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            fill
            unoptimized
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-heading text-lg font-semibold leading-snug text-[color:var(--color-text)]">
            {member.name}
          </h3>
          <p className="mt-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
            {member.role}
          </p>
        </div>
      </article>
    </Reveal>
  );
}

export default function TeamPage() {
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
        <Reveal className="container relative z-10 mx-auto max-w-7xl px-4 pb-20 lg:px-4">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-white/45">
            Team
          </p>
          <h1 className="font-heading max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            The engineers and operators building RF semiconductor systems.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Linear Amptech pairs leadership in RF systems and semiconductor
            design with hands-on product engineering — from research and
            prototyping through to deployed silicon.
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
                  <dd className="mt-2 font-mono text-sm uppercase tracking-[0.12em] text-white/80">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto max-w-7xl px-4 lg:px-4">
          <Reveal className="max-w-3xl">
            <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
              Company
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
              About Linear-AmpTech, our vision, and our mission.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {companyWriteups.map((item) => (
              <Reveal key={item.label} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                    {item.label}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl font-semibold leading-tight tracking-normal text-[color:var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-muted)]">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="max-w-3xl">
            <p className="mb-4 mt-20 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
              People
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
              Leadership and technical depth across the company.
            </h2>
            <p className="mt-5 text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg">
              The team spans company leadership, RF engineering, and product
              development with a focus on measurable semiconductor outcomes.
            </p>
          </Reveal>

          <div className="mt-16 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
