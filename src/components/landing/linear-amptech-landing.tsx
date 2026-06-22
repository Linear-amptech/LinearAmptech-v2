"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { AboutSection } from "@/components/landing/about-section";
import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { HeroSection } from "@/components/landing/hero-section";
import { IndustriesSection } from "@/components/landing/industries-section";
import { ProductsSection } from "@/components/landing/products-section";
import { ResearchSection } from "@/components/landing/research-section";
import { TechnologySection } from "@/components/landing/technology-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function LinearAmptechLanding() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 90, damping: 28 });
  const glowY = useSpring(mouseY, { stiffness: 90, damping: 28 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03060d] text-slate-100">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/12 blur-3xl"
        style={{ x: glowX, y: glowY }}
      />
      <div aria-hidden="true" className="particle-field" />
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ProductsSection />
      <TechnologySection />
      <IndustriesSection />
      <ResearchSection />
      <SiteFooter />
    </main>
  );
}
