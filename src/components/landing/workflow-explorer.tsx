"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type WorkflowStep = {
  title: string;
  image: string;
  description: string;
};

const workflowSteps: WorkflowStep[] = [
  {
    title: "Design",
    image: "/assets/workflow/11.png",
    description:
      "Define the topology, frequency plan, and device sizing against the target link budget.",
  },
  {
    title: "Simulation",
    image: "/assets/workflow/22.png",
    description:
      "Co-simulate circuit and EM behaviour to converge gain, match, linearity, and stability before silicon.",
  },
  {
    title: "Tapeout",
    image: "/assets/workflow/33.png",
    description:
      "Complete layout, run DRC/LVS sign-off, and hand the GDS to the foundry.",
  },
  {
    title: "Packaging",
    image: "/assets/workflow/44.png",
    description:
      "Attach the die and model the package for thermal and RF performance.",
  },
  {
    title: "Integration",
    image: "/assets/workflow/55.png",
    description:
      "Assemble the front-end into the board and system with bias and control networks.",
  },
  {
    title: "Characterization",
    image: "/assets/workflow/66.png",
    description:
      "Measure S-parameters, output power, efficiency, and linearity across the band.",
  },
  {
    title: "Validation",
    image: "/assets/workflow/77.png",
    description:
      "Correlate measured data to spec and screen for deployment readiness.",
  },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const count = workflowSteps.length;

export function WorkflowExplorer() {
  const [active, setActive] = useState(0);
  const prefersReduced = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
    <div className="mt-8 grid gap-6 lg:mt-10 lg:h-[min(56vh,30rem)] lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
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
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className={cn(
                "group relative flex shrink-0 snap-start items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text)]/20 lg:w-full lg:flex-1",
                isActive
                  ? "border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)]"
                  : "border-transparent hover:bg-[color:var(--color-surface)]",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-0 top-1/2 hidden h-7 w-0.5 -translate-y-1/2 rounded-full transition-colors lg:block",
                  isActive ? "bg-[color:var(--color-text)]" : "bg-transparent",
                )}
              />
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
            </button>
          );
        })}
      </div>

      {/* Featured stage */}
      <div
        id="workflow-panel"
        role="tabpanel"
        aria-labelledby={`workflow-tab-${active}`}
        className="overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] lg:flex lg:h-full lg:flex-col"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-surface-soft)] sm:aspect-[16/9] lg:aspect-auto lg:min-h-0 lg:flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={
                prefersReduced
                  ? false
                  : { opacity: 0, y: 12, filter: "blur(8px)" }
              }
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={
                prefersReduced
                  ? { opacity: 0 }
                  : { opacity: 0, y: -8, filter: "blur(6px)" }
              }
              transition={{ duration: prefersReduced ? 0.15 : 0.5, ease: EASE }}
              className="absolute inset-0"
            >
              <Image
                src={step.image}
                alt={`${step.title} stage schematic`}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-contain p-6 [filter:grayscale(1)_contrast(1.04)]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-end justify-between gap-4 border-t border-[color:var(--color-border)] p-6">
          <div className="min-w-0">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              Stage {String(active + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={prefersReduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{
                  duration: prefersReduced ? 0.12 : 0.35,
                  ease: EASE,
                }}
              >
                <h3 className="mt-2 font-heading text-xl font-semibold text-[color:var(--color-text)] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-[color:var(--color-text-muted)]">
                  {step.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => select(active - 1)}
              aria-label="Previous stage"
              className="grid size-10 place-items-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-muted)] transition-colors hover:border-[color:var(--color-text)]/40 hover:text-[color:var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text)]/20"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => select(active + 1)}
              aria-label="Next stage"
              className="grid size-10 place-items-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-muted)] transition-colors hover:border-[color:var(--color-text)]/40 hover:text-[color:var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text)]/20"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
