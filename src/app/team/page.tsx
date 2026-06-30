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
  linkedinUrl?: string;
};

const companyWriteups = [
  {
    label: "About us",
    title: "Who we are",
    image: "/assets/team/about.png",
    body: "Linearised Amplifier Technology & Services Pvt. Ltd. (Linear-AmpTech) is founded and driven by innovative minds from IIT Roorkee, one of India's premier technical institutes. The deep-tech startup targets cyber-physical system design with a focus on radio-frequency circuit and system design.",
  },
  {
    label: "Vision",
    title: "Our vision",
    image: "/assets/team/vision.png",
    body: "To drive disruptive innovation in cyber-physical systems, delivering high-performance, indigenous technology solutions that secure global traction.",
  },
  {
    label: "Mission",
    title: "Our mission",
    image: "/assets/team/mission.png",
    body: "The company is focused on innovation to cater to technical challenges in radio-frequency electronics targeting cyber-physical systems, with strengths in RF front-end component design, GaN-based MMIC and high-power modules, and CMOS/BiCMOS RFIC IP cores with silicon validation.",
  },
];

const team: TeamMember[] = [
  {
    name: "Dr. Karun Rawat",
    role: "Founder & Chairman",
    group: "Leadership",
    image: "/assets/ppt-team/karun.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/karun-rawat-b732784b/",
  },
  {
    name: "Dr. Meenakshi Rawat",
    role: "Founder & Director",
    group: "Leadership",
    image: "/assets/ppt-team/meenakshi-rawat.png",
    linkedinUrl: "https://www.linkedin.com/in/meenakshi-rawat-66675a66/",
  },
  {
    name: "Mr. Vivek Sharma",
    role: "Director",
    group: "Leadership",
    image: "/assets/ppt-team/vivek_1.webp",
    linkedinUrl: "https://www.linkedin.com/in/vivek-sharma-986950121/",
  },
  {
    name: "Dr. Aditya Pal",
    role: "Chief Operating Officer",
    group: "Leadership",
    image: "/assets/ppt-team/aditya-pal.jpg",
    linkedinUrl: "",
  },
  {
    name: "Dr. Garima Shukla",
    role: "Senior RF Design Engineer",
    group: "Development",
    image: "/assets/ppt-team/garima-shukla.jpg",
    linkedinUrl: "",
  },
  {
    name: "Dr. Pawan Shukla",
    role: "Senior RF Design Engineer",
    group: "Development",
    image: "/assets/ppt-team/pawan-shukla.jpeg",
    linkedinUrl: "",
  },
];

const specStrip = [
  { label: "Team", value: `${String(team.length).padStart(2, "0")} Members` },
  { label: "Disciplines", value: "RF · Analog · Semiconductor" },
  { label: "Based in", value: "Roorkee · IIT" },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.26 8.03h4.48V23H.26V8.03ZM8.13 8.03h4.29v2.05h.06c.6-1.13 2.06-2.32 4.23-2.32 4.52 0 5.36 2.98 5.36 6.85V23h-4.47v-7.44c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V23H8.13V8.03Z" />
    </svg>
  );
}

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
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h3 className="font-heading text-lg font-semibold leading-snug text-[color:var(--color-text)]">
                {member.name}
              </h3>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                {member.role}
              </p>
            </div>
            {member.linkedinUrl ? (
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${member.name} on LinkedIn`}
                className="grid size-8 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-[#0a66c2] shadow-[0_1px_2px_rgb(15_23_42/0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0a66c2]/30 hover:bg-[#0a66c2] hover:text-white hover:shadow-[0_10px_24px_rgb(10_102_194/0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a66c2]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <LinkedInIcon className="size-3.5" />
              </a>
            ) : (
              <span
                aria-disabled="true"
                aria-label={`${member.name} LinkedIn profile pending`}
                className="grid size-8 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white text-slate-400 opacity-70"
              >
                <LinkedInIcon className="size-3.5" />
              </span>
            )}
          </div>
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
            The team driving next-generation RF semiconductor technology.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Linear AmpTech brings together experienced RF engineers,
            researchers, and system architects dedicated to developing
            world-class RF and mm-wave front-end solutions.
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
              About Linear-AmpTech
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {companyWriteups.map((item) => (
              <Reveal key={item.label} className="h-full">
                <article className="group relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7 shadow-[0_1px_2px_rgb(15_23_42/0.04)] sm:p-8">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 32vw, 100vw"
                    className="team-card-image-zoom object-cover"
                  />
                  <div className="relative z-10">
                    <h3 className="font-heading text-3xl font-semibold leading-tight tracking-normal text-[color:var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-[1.0625rem] leading-8 text-[color:var(--color-text-muted)] xl:text-lg xl:leading-9">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="max-w-3xl">
            <p className="mb-4 mt-20 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
              People
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
              Meet our Leadership Team
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
