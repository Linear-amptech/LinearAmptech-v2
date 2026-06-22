"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { ChipScene } from "@/components/landing/chip-scene";
import { heroSlides } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

export function HeroSection() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, 190]);

  useEffect(() => {
    if (isSliderPaused) return;

    const interval = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, [isSliderPaused]);

  const activeSlide = heroSlides[activeHeroSlide];
  const showPreviousSlide = () => {
    setActiveHeroSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };
  const showNextSlide = () => {
    setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section
      id="hero"
      className="hero-grid relative flex min-h-screen items-center overflow-hidden pb-20 pt-28"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-30"
        style={{ y: heroY }}
      >
        <ChipScene />
      </motion.div>
      <div aria-hidden="true" className="circuit-traces" />
      <motion.div
        aria-hidden="true"
        className="hero-chip-background"
        style={{ y: heroY }}
      >
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.title}
            className="absolute  inset-0"
            initial={false}
            animate={{
              opacity: activeHeroSlide === index ? 1 : 0,
              scale: activeHeroSlide === index ? 1 : 1.035,
            }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="container relative z-10 mx-auto grid w-full items-center gap-12 px-5 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <Reveal>
          <div className="max-w-[198rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                  {/* <Sparkles className="size-4" aria-hidden="true" /> */}
                  {activeSlide.eyebrow}
                </div>
                <h1 className="max-w-[98rem] text-balance text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
                  {activeSlide.title}
                </h1>
                <p className="mt-7 max-w-4xl text-lg leading-8 text-slate-300">
                  {activeSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-9 flex w-full max-w-6xl items-center justify-between gap-4">
              <a className="premium-button" href="#products">
                Explore Products
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="grid size-12 place-items-center rounded-lg border border-white/15 bg-white/[0.055] text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-200/45 hover:bg-cyan-200/12"
                  onClick={showPreviousSlide}
                  aria-label="Show previous hero slide"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="grid size-12 place-items-center rounded-lg border border-cyan-200/35 bg-cyan-200/12 text-cyan-50 shadow-[0_18px_70px_rgba(34,211,238,0.16)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-100/65 hover:bg-cyan-200/20"
                  onClick={showNextSlide}
                  aria-label="Show next hero slide"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div
              className="hero-slider-nav"
              data-paused={isSliderPaused}
              aria-label="Hero slides"
              onMouseEnter={() => setIsSliderPaused(true)}
              onMouseLeave={() => setIsSliderPaused(false)}
              onFocus={() => setIsSliderPaused(true)}
              onBlur={() => setIsSliderPaused(false)}
            >
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={activeHeroSlide === index ? "is-active" : ""}
                  onClick={() => setActiveHeroSlide(index)}
                  onMouseEnter={() => setActiveHeroSlide(index)}
                  aria-label={`Show hero slide ${index + 1}`}
                  aria-current={activeHeroSlide === index}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{slide.eyebrow.split("/")[0].trim()}</strong>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
