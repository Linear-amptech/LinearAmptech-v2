"use client";

import { motion } from "framer-motion";

import { BackgroundTexture } from "@/components/landing/background-texture";
import { assets, capabilities } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-shell">
      <BackgroundTexture
        src={assets.circuitBackground}
        opacity="opacity-20"
        className="animate-circuit-background-linear"
      />
      <div className="container mx-auto px-5 py-24 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">
            A full-stack lab for next-generation electronic systems.
          </h2>
        </Reveal>
        <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ title, icon: Icon }, index) => (
            <Reveal key={title} className="h-full">
              <motion.article
                className={`tech-card geo-${index % 4} flex h-full min-h-64 flex-col`}
                whileHover={{ y: -8, rotateX: 2.5, rotateY: -2.5 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  className="mb-8 text-cyan-200"
                >
                  <Icon className="size-6" aria-hidden="true" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <span className="mt-auto block pt-6">
                  <span className="block h-px w-full bg-gradient-to-r from-cyan-300/70 via-blue-500/40 to-transparent" />
                </span>
                <span className="mt-4 block text-xs uppercase tracking-[0.18em] text-slate-500">
                  Node {String(index + 1).padStart(2, "0")}
                </span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
