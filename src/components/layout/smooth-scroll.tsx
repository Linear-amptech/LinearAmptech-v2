"use client";

import { useCallback, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";

const easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
const anchorScrollOptions = {
  duration: 1.05,
  easing,
  offset: -72,
};

function getAnchorScrollOptions(hash: string) {
  if (hash === "#applications" || hash === "#technology") {
    return {
      ...anchorScrollOptions,
      offset: 0,
    };
  }

  return anchorScrollOptions;
}

/**
 * Page-wide smooth (inertial) scrolling via Lenis.
 *
 * Lenis smooths the *native* window scroll, so framer-motion `useScroll`,
 * sticky/fixed positioning, and the Company scroll-scrubbed video all keep
 * tracking without extra wiring. Disabled when the user prefers reduced motion.
 */
export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const previousPathnameRef = useRef<string | null>(null);

  const scrollToHash = useCallback((hash: string, attempts = 14) => {
    if (!hash) {
      return;
    }

    const attemptScroll = (remainingAttempts: number) => {
      requestAnimationFrame(() => {
        const target = document.querySelector<HTMLElement>(hash);

        if (!target) {
          if (remainingAttempts > 0) {
            window.setTimeout(() => attemptScroll(remainingAttempts - 1), 50);
          }

          return;
        }

        const lenis = lenisRef.current;
        const scrollOptions = getAnchorScrollOptions(hash);

        if (lenis) {
          lenis.scrollTo(target, scrollOptions);
          return;
        }

        const top =
          target.getBoundingClientRect().top +
          window.scrollY +
          scrollOptions.offset;

        window.scrollTo({ top, left: 0, behavior: "smooth" });
      });
    };

    attemptScroll(attempts);
  }, []);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      // Exponential ease-out — settles quickly, feels premium, never floaty.
      easing,
      smoothWheel: true,
      anchors: anchorScrollOptions,
      stopInertiaOnNavigate: true,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const scrollToCurrentHash = () => {
      if (
        window.location.hash === "#technology" ||
        window.location.hash === "#applications"
      ) {
        return;
      }

      scrollToHash(window.location.hash);
    };

    window.addEventListener("hashchange", scrollToCurrentHash);
    scrollToCurrentHash();

    return () => window.removeEventListener("hashchange", scrollToCurrentHash);
  }, [scrollToHash]);

  useEffect(() => {
    if (previousPathnameRef.current === null) {
      previousPathnameRef.current = pathname;
      return;
    }

    if (previousPathnameRef.current === pathname) return;

    previousPathnameRef.current = pathname;

    if (window.location.hash) {
      if (
        window.location.hash === "#technology" ||
        window.location.hash === "#applications"
      ) {
        return;
      }

      scrollToHash(window.location.hash);
      return;
    }

    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, scrollToHash]);

  return null;
}
