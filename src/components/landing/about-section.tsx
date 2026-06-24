"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { assets, metrics } from "@/components/landing/data";
import { Metric } from "@/components/landing/metric";
import { Reveal } from "@/components/landing/reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-shell border-y border-white/10 bg-[#07101d]/70"
    >
      <motion.div
        aria-hidden="true"
        className="about-wafer-bg"
        initial={{ opacity: 0, filter: "blur(14px)" }}
        whileInView={{ opacity: 0.35, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.25, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Image
          src={assets.siliconWafer}
          alt=""
          fill
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="container relative z-10 mx-auto grid items-center gap-4 px-5 py-24 lg:grid-cols-[0.62fr_0.38fr] lg:px-8">
        <Reveal className="space-y-8">
          <p className="section-kicker">Company</p>
          <h2 className="section-title">
            Building the Future of RF Semiconductor Innovation
          </h2>
          <p className="text-xl leading-9 text-slate-300">
            Linear-AmpTech is a deep-tech semiconductor company advancing RF
            front-end technologies for communication, radar, and next-generation
            wireless systems.
          </p>
          <p className="text-xl leading-9 text-slate-300">
            From{" "}
            <span className="font-semibold">
              high-power GaN modules to CMOS/BiCMOS RFICs and silicon
              validation,
            </span>{" "}
            we transform research-driven innovation into scalable products and
            deployable solutions.
          </p>
          <div className="grid gap-3 sm:grid-cols-4">
            {metrics.map(([value, label], index) => (
              <Metric
                key={label}
                value={value}
                label={label}
                delay={index * 0.08}
              />
            ))}
          </div>
        </Reveal>
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
