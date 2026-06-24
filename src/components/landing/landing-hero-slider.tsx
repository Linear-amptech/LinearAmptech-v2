"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { heroSlides as heroSlideContent } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  imagePath: string;
  imageAlt: string;
};

const heroImages = [
  {
    imagePath: "/assets/hero-section-slider/hero-linear-amptech-rfic-chip.png",
    imageAlt: "Linear-AmpTech RFIC chip hero visual",
  },
  {
    imagePath: "/assets/hero-section-slider/rf-lab-validation.png",
    imageAlt: "Hybrid MIC PA module hero visual",
  },
  {
    imagePath: "/assets/hero-section-slider/ghz-transmitter-chip.png",
    imageAlt: "47 GHz transmitter chip hero visual",
  },
  {
    imagePath: "/assets/hero-section-slider/c-ku-band-pa-chip.png",
    imageAlt: "Semiconductor wafer hero visual",
  },
];

const heroSlides: HeroSlide[] = heroSlideContent.map((slide, index) => {
  const image = heroImages[index % heroImages.length];

  return {
    eyebrow: slide.eyebrow,
    title: slide.title,
    description: slide.description,
    imagePath: image.imagePath,
    imageAlt: image.imageAlt,
  };
});

export function LandingHeroSlider() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.45], [0, 170]);

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
    <section className="relative isolate min-h-screen overflow-hidden bg-[#050b12] pb-20 pt-32 text-white">
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.imagePath}
            className="absolute inset-0 bg-cover bg-[position:66%_50%] bg-no-repeat will-change-transform"
            style={{ backgroundImage: `url(${slide.imagePath})` }}
            initial={false}
            animate={{
              opacity: activeHeroSlide === index ? 1 : 0,
              scale: activeHeroSlide === index ? 1.08 : 1,
            }}
            transition={{
              opacity: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 4.2, ease: "linear" },
            }}
          />
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgb(5_11_18_/_0.9)_0%,rgb(5_11_18_/_0.76)_32%,rgb(5_11_18_/_0.32)_58%,transparent_82%)]"
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-18%] top-12 z-[2] h-[640px] w-[640px] rounded-full border border-cyan-200/10 bg-cyan-200/5 blur-3xl"
        style={{ y: heroY }}
      />

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] items-center px-5 lg:px-8">
        <Reveal>
          <div className="max-w-[47rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="font-heading max-w-[47rem] text-balance text-4xl font-bold leading-[1.02] tracking-normal text-white sm:text-5xl lg:text-7xl">
                  {activeSlide.title}
                </h1>
                <p className="mt-7 max-w-[44rem] text-base leading-8 text-slate-300 sm:text-lg">
                  {activeSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-9 flex w-full max-w-[47rem] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#products"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-control)] bg-[color:var(--color-primary)] px-5 text-sm font-bold text-slate-950 shadow-[0_16px_36px_rgb(16_199_232_/_0.18)] transition hover:-translate-y-0.5 hover:bg-[color:var(--color-primary-deep)]"
                >
                  Explore Products
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="hero-play-toggle"
                  onClick={() => setIsSliderPaused((current) => !current)}
                  aria-label={
                    isSliderPaused
                      ? "Play hero slideshow"
                      : "Pause hero slideshow"
                  }
                  aria-pressed={isSliderPaused}
                >
                  {isSliderPaused ? (
                    <Play className="size-4" aria-hidden="true" />
                  ) : (
                    <Pause className="size-4" aria-hidden="true" />
                  )}
                  <span className="hero-progress-track" aria-hidden="true">
                    <span
                      key={activeHeroSlide}
                      className="hero-progress-fill"
                      data-paused={isSliderPaused}
                    />
                  </span>
                </button>
                <button
                  type="button"
                  className="hero-arrow-button"
                  onClick={showPreviousSlide}
                  aria-label="Show previous hero slide"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="hero-arrow-button is-primary"
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
                  <strong>{slide.eyebrow}</strong>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
