import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { BackgroundTexture } from "@/components/landing/background-texture";
import { assets, projectTypeOptions } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-shell border-t border-white/10 bg-[#02050a]"
    >
      <BackgroundTexture src={assets.particleBackground} opacity="opacity-20" />
      <div aria-hidden="true" className="contact-wafer-bg">
        <Image
          src={assets.siliconWafer}
          alt=""
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">
            Build your next silicon innovation with Linear Amptech.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
            Share the system, frequency range, architecture target, or prototype
            objective. Linear Amptech can scope RF, analog, mixed-signal, and
            ASIC R&D programs from concept through validation.
          </p>
        </Reveal>
        <Reveal>
          <form className="contact-form">
            <label>
              <span>Name</span>
              <input name="name" autoComplete="name" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
            <label>
              <span>Company</span>
              <input name="company" autoComplete="organization" />
            </label>
            <label>
              <span>Project type</span>
              <select name="projectType" defaultValue="">
                <option value="" disabled>
                  Select project type
                </option>
                {projectTypeOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="sm:col-span-2">
              <span>Message</span>
              <textarea name="message" rows={5} />
            </label>
            <button className="premium-button sm:col-span-2" type="submit">
              Start a Project
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
