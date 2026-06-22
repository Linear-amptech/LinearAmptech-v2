import type { Metadata } from "next";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Cpu,
  Microscope,
  Radar,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/landing/reveal";

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
    icon: ShieldCheck,
    details: ["Founder", "Chairman", "Linear-AmpTech leadership"],
  },
  {
    name: "Dr. Meenakshi Rawat",
    role: "Founder & Director",
    group: "Leadership Team",
    image: "/assets/ppt-team/meenakshi-rawat.png",
    icon: ShieldCheck,
    details: ["Founder", "Director", "Linear-AmpTech leadership"],
  },
  {
    name: "Mr. Vivek Sharma",
    role: "Director",
    group: "Leadership Team",
    image: "/assets/ppt-team/vivek-sharma.png",
    icon: BriefcaseBusiness,
    details: ["Director", "Leadership Team"],
  },
  {
    name: "Dr. Aditya Pal",
    role: "Chief Operating Officer",
    group: "Leadership Team",
    image: "/assets/ppt-team/aditya-pal.jpg",
    icon: BriefcaseBusiness,
    details: ["Chief Operating Officer", "Operations"],
  },
  {
    name: "Dr. Garima Shukla",
    role: "Senior RF Design Engineer",
    group: "Development Team",
    image: "/assets/ppt-team/garima-shukla.jpg",
    icon: Radar,
    details: ["Senior RF Design Engineer", "Development Team"],
  },
  {
    name: "Dr. Pawan Shukla",
    role: "Senior RF Design Engineer",
    group: "Development Team",
    image: "/assets/ppt-team/pawan-shukla.jpeg",
    icon: Radar,
    details: ["Senior RF Design Engineer", "Development Team"],
  },
  {
    name: "Shreyansh Bansal",
    role: "Embedded Engineer",
    group: "Development Team",
    image: "/assets/ppt-team/shreyansh-bansal.jpeg",
    icon: Cpu,
    details: ["Embedded Engineer", "Development Team"],
  },
  {
    name: "Pravesh Chamoli",
    role: "Software Engineer",
    group: "Development Team",
    image: "/assets/ppt-team/pravesh-chamoli.jpeg",
    icon: Cpu,
    details: ["Software Engineer", "Development Team"],
  },
  {
    name: "Nupoor Sood",
    role: "Research Scholar",
    group: "R&D Team",
    image: "/assets/ppt-team/nupoor-sood.png",
    icon: Microscope,
    details: ["MIC, MMIC PA Design", "GaN HEMT Device", "Doherty PA"],
  },
  {
    name: "Dr. Abdul Sukoor",
    role: "Post-Doc Fellow",
    group: "R&D Team",
    image: "/assets/ppt-team/abdul-sukoor.png",
    icon: Microscope,
    details: ["Doherty PA", "Active Antenna", "RIS", "RF passive structures"],
  },
  {
    name: "Ahmed Zakaria",
    role: "Scientist DRDO, Research Scholar (Part Time)",
    group: "R&D Team",
    image: "/assets/ppt-team/ahmed-zakaria.png",
    icon: Microscope,
    details: ["High Efficiency PA", "Waveform Engineering PA"],
  },
  {
    name: "Amit Singh",
    role: "Research Scholar (Part-time)",
    group: "R&D Team",
    image: "/assets/ppt-team/amit-singh.jpeg",
    icon: Microscope,
    details: ["High Efficiency & Linearized PA Modules"],
  },
  {
    name: "Amrit Panigrahi",
    role: "Research Scholar",
    group: "R&D Team",
    image: "/assets/ppt-team/amrit-panigrahi.png",
    icon: Microscope,
    details: [
      "Waveform Engineering PA",
      "Broadband matching techniques",
      "CMOS PA",
    ],
  },
  {
    name: "Kamini Singh",
    role: "Research Scholar",
    group: "R&D Team",
    image: "/assets/ppt-team/kamini-singh.png",
    icon: Microscope,
    details: ["Doherty PA Design", "High efficiency at back-off PA"],
  },
  {
    name: "Chaitanya Reddy",
    role: "Research Scholar",
    group: "R&D Team",
    image: "/assets/ppt-team/chaitanya-reddy.png",
    icon: Microscope,
    details: [
      "DPD",
      "Linearization techniques",
      "FPGA based embedded system design",
    ],
  },
  {
    name: "B Ganesh P",
    role: "Research Scholar",
    group: "R&D Team",
    image: "/assets/ppt-team/b-ganesh-p.png",
    icon: Microscope,
    details: [
      "Device characterization & modeling",
      "High efficiency PA",
      "MIC/MMIC",
    ],
  },
  {
    name: "Tarun Kumar Suretia",
    role: "Research Scholar",
    group: "R&D Team",
    image: "/assets/ppt-team/tarun-kumar-suretia.png",
    icon: Microscope,
    details: ["In-band harmonic cancellation based PA", "RFIC PA"],
  },
  {
    name: "Sankhraj Suriya",
    role: "Project Assistant (Admin)",
    group: "Support Team",
    image: "/assets/ppt-team/sankhraj-suriya.png",
    icon: Users,
    details: ["Project Assistant", "Admin"],
  },
  {
    name: "Abhishek Chaurasia",
    role: "Technical Assistant",
    group: "Support Team",
    image: "/assets/ppt-team/abhishek-chaurasia.png",
    icon: Users,
    details: ["Technical Assistant"],
  },
  {
    name: "Nitin Verma",
    role: "Lab Assistant",
    group: "Support Team",
    image: "/assets/ppt-team/nitin-verma.png",
    icon: Users,
    details: ["Lab Assistant"],
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#03060d] text-slate-100">
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
            Leadership, development, R&D, and support teams driving
            Linear-AmpTech.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Team members, roles, and research interests are taken from the
            Linear-AmpTech leadership, development, R&D, and support team
            profile.
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
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {member.group}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {member.details.map((detail) => (
                      <span key={detail} className="feature-pill">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
