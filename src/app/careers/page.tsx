import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  RadioTower,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { companyContact, jobs } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Careers | Linear Amptech",
  description:
    "Explore open roles at Linear Amptech across embedded hardware, electronics engineering, RF systems, and semiconductor R&D.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#03060d] text-slate-100">
      <SiteHeader />
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
        <div className="relative mx-auto max-w-7xl">
          <p className="section-kicker">Careers</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-normal text-white sm:text-6xl">
            Build hardware that moves from bench to field.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Join Linear Amptech in Roorkee to work on embedded hardware, RF
            communication nodes, semiconductor prototyping, and real-world
            electronic systems.
          </p>
        </div>
      </section>

      <section className="relative px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.36fr_0.64fr]">
          <aside className="rounded-lg border border-white/10 bg-white/[0.045] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:sticky lg:top-28 lg:self-start">
            <RadioTower className="size-8 text-cyan-200" aria-hidden="true" />
            <h2 className="mt-6 text-2xl font-semibold text-white">
              Open positions
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Data sourced from the existing LinearAmptech-v2 careers page.
              Applications can be sent directly to the company contact email.
            </p>
            <a
              href={`mailto:${companyContact.email}`}
              className="premium-button mt-7 w-full"
            >
              Email HR
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </aside>

          <div className="grid gap-5">
            {jobs.map((job) => (
              <article key={job.id} className="product-card">
                <div className="relative z-10">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                        {job.jobTitle}
                      </p>
                      <h2 className="mt-2 text-3xl font-semibold text-white">
                        {job.title}
                      </h2>
                    </div>
                    <a
                      href={`mailto:${companyContact.email}?subject=Application for ${encodeURIComponent(job.title)}`}
                      className="learn-button"
                    >
                      Apply Now
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300">
                    <span className="feature-pill">
                      <MapPin className="inline size-3.5" aria-hidden="true" />{" "}
                      {job.location}
                    </span>
                    <span className="feature-pill">
                      <BriefcaseBusiness
                        className="inline size-3.5"
                        aria-hidden="true"
                      />{" "}
                      {job.employmentType}
                    </span>
                    <span className="feature-pill">
                      <CalendarDays
                        className="inline size-3.5"
                        aria-hidden="true"
                      />{" "}
                      Posted {job.datePosted}
                    </span>
                    {job.workType.map((type) => (
                      <span key={type} className="feature-pill">
                        {type}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-base leading-7 text-slate-300">
                    {job.description}
                  </p>

                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Key responsibilities
                      </h3>
                      <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
                        {job.keyResponsibilities.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Requirements
                      </h3>
                      <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
                        {job.requirements.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                      <h3 className="mt-7 text-lg font-semibold text-white">
                        Desired skills
                      </h3>
                      <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
                        {job.desiredSkills.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
