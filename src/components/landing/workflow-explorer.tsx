"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

import { Reveal } from "@/components/landing/reveal";
import { cn } from "@/lib/utils";

type WorkflowStep = {
  title: string;
  image: string;
  description: string;
};

const workflowSteps: WorkflowStep[] = [
  {
    title: "Design",
    image: "/assets/workflow/1_1.png",
    description:
      "Define the topology, frequency plan, and device sizing against the target link budget.",
  },
  {
    title: "Simulation",
    image: "/assets/workflow/2_2.png",
    description:
      "Co-simulate circuit and EM behaviour to converge gain, match, linearity, and stability before silicon.",
  },
  {
    title: "Tapeout",
    image: "/assets/workflow/3_3.png",
    description:
      "Complete layout, run DRC/LVS sign-off, and hand the GDS to the foundry.",
  },
  {
    title: "Packaging",
    image: "/assets/workflow/4_4.png",
    description:
      "Attach the die and model the package for thermal and RF performance.",
  },
  {
    title: "Integration",
    image: "/assets/workflow/5_5.png",
    description:
      "Assemble the front-end into the board and system with bias and control networks.",
  },
  {
    title: "Characterization",
    image: "/assets/workflow/6_6.png",
    description:
      "Measure S-parameters, output power, efficiency, and linearity across the band.",
  },
  {
    title: "Validation",
    image: "/assets/workflow/7_7.png",
    description:
      "Correlate measured data to spec and screen for deployment readiness.",
  },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const count = workflowSteps.length;

export function WorkflowExplorer() {
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const prefersReduced = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const previousProgressRef = useRef(0);
  const completedDownwardRunRef = useRef(false);

  // Scroll progress across the tall pinning container.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Pin (scroll-driven stage advance) only on large screens with motion allowed.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setPinned(mq.matches && !prefersReduced);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [prefersReduced]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!pinned) return;
    const previousProgress = previousProgressRef.current;
    const scrollingUp = progress < previousProgress;
    previousProgressRef.current = progress;

    setIsScrollingUp(scrollingUp);

    if (scrollingUp && completedDownwardRunRef.current) {
      setActive(count - 1);
      return;
    }

    const index = Math.min(
      count - 1,
      Math.max(0, Math.round(progress * (count - 1))),
    );
    setActive((prev) => (prev === index ? prev : index));

    if (!scrollingUp && index === count - 1 && progress > 0.92) {
      completedDownwardRunRef.current = true;
    }
  });

  const select = (index: number) => setActive((index + count) % count);

  const focusTab = (index: number) => {
    const next = (index + count) % count;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        focusTab(active + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        focusTab(active - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(count - 1);
        break;
      default:
        break;
    }
  };

  const step = workflowSteps[active];

  return (
    // Tall track on desktop so the inner panel pins while stages advance on scroll.
    <section ref={sectionRef} className="relative lg:h-[280vh]">
      <div className="flex min-h-[100svh] flex-col justify-center pb-10 pt-16 lg:sticky lg:top-0 lg:h-[100svh]">
        <Reveal className="container mx-auto px-4 lg:px-4">
          <div className="max-w-3xl">
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
              Workflow
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
              From architecture to measured prototype.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:mt-10 lg:h-[min(60vh,33rem)] lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
            {/* Index — vertical list on desktop, horizontal scroll strip on mobile */}
            <div
              role="tablist"
              aria-label="RF development workflow stages"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:h-full lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
            >
              {workflowSteps.map((item, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={item.title}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`workflow-tab-${index}`}
                    aria-selected={isActive}
                    aria-controls="workflow-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => select(index)}
                    onMouseEnter={() => select(index)}
                    onFocus={() => setActive(index)}
                    className={cn(
                      "group relative flex shrink-0 snap-start flex-col rounded-xl border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text)]/20 lg:w-full lg:flex-1",
                      isActive
                        ? "border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)]"
                        : "border-transparent hover:bg-[color:var(--color-surface)]",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-0 top-1/2 hidden h-7 w-0.5 -translate-y-1/2 rounded-full transition-colors lg:block",
                        isActive
                          ? "bg-[color:var(--color-text)]"
                          : "bg-transparent",
                      )}
                    />
                    <span className="flex items-center gap-3">
                      <span
                        className={cn(
                          "font-mono text-xs tabular-nums transition-colors",
                          isActive
                            ? "text-[color:var(--color-text)]"
                            : "text-[color:var(--color-text-muted)]",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "font-heading text-sm font-semibold leading-snug transition-colors",
                          isActive
                            ? "text-[color:var(--color-text)]"
                            : "text-[color:var(--color-text-muted)] group-hover:text-[color:var(--color-text)]",
                        )}
                      >
                        {item.title}
                      </span>
                    </span>
                    {isActive ? (
                      <span className="mt-2 max-w-sm text-xs leading-5 text-[color:var(--color-text-muted)]">
                        {item.description}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            {/* Featured stage */}
            <div
              id="workflow-panel"
              role="tabpanel"
              aria-labelledby={`workflow-tab-${active}`}
              className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] lg:h-full"
            >
              <div className="relative aspect-[16/10] h-full overflow-hidden bg-white sm:aspect-[16/9] lg:aspect-auto">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={active}
                    initial={
                      prefersReduced || isScrollingUp
                        ? false
                        : { opacity: 0, scale: 1.015, filter: "blur(3px)" }
                    }
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={
                      prefersReduced || isScrollingUp
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 0.995, filter: "blur(2px)" }
                    }
                    transition={{
                      duration: prefersReduced || isScrollingUp ? 0.08 : 0.28,
                      ease: EASE,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={step.image}
                      alt={`${step.title} stage schematic`}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
