import type { Metadata } from "next";
import Image from "next/image";

import { CareersBoard } from "@/components/careers/careers-board";
import { Reveal } from "@/components/landing/reveal";

export const metadata: Metadata = {
  title: "Careers | Linear Amptech",
  description:
    "Explore open roles at Linear Amptech across embedded hardware, electronics engineering, RF systems, and semiconductor R&D.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#03060d] text-slate-100">
      <section className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8">
        <Image
          src="/assets/rd-lab.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-28"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#03060d] via-[#03060d]/86 to-[#03060d]/58"
        />
        <Reveal className="container relative mx-auto">
          <p className="section-kicker">Careers</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-normal text-white sm:text-6xl">
            Build hardware that moves from bench to field.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Join Linear Amptech in Roorkee to work on embedded hardware, RF
            communication nodes, semiconductor prototyping, and real-world
            electronic systems.
          </p>
        </Reveal>
      </section>

      <CareersBoard />
    </main>
  );
}
