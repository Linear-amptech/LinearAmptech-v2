import Image from "next/image";

import { Reveal } from "@/components/landing/reveal";

const workflowSteps = [
  { title: "Design", image: "/assets/workflow/11.png" },
  { title: "Simulation", image: "/assets/workflow/22.png" },
  { title: "Tapeout", image: "/assets/workflow/33.png" },
  { title: "Packaging", image: "/assets/workflow/44.png" },
  { title: "Integration", image: "/assets/workflow/55.png" },
  { title: "Characterization", image: "/assets/workflow/66.png" },
  { title: "Validation", image: "/assets/workflow/77.png" },
] as const;

export function WorkflowSection() {
  return (
    <section className="py-24">
      <Reveal className="container mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
            Workflow
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
            From architecture to measured prototype.
          </h2>
        </div>

        <div className="mt-12">
          <div className="grid gap-2 lg:grid-cols-7">
            {workflowSteps.map((step, index) => {
              return (
                <div
                  key={step.title}
                  className="group relative aspect-square overflow-hidden rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)]"
                >
                  <Image
                    src={step.image}
                    alt={`${step.title} workflow background`}
                    fill
                    sizes="(min-width: 1024px) 13vw, 100vw"
                    className="scale-110 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-black/8 transition-colors duration-500 group-hover:bg-black/4" />
                  <div className="relative flex h-full flex-col items-center justify-center px-2 py-4">
                    <span className="absolute left-2 top-2 font-heading text-sm font-bold leading-none text-[color:var(--color-primary-deep)] transition-transform duration-500 ease-out group-hover:scale-110">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-center font-heading text-lg font-bold leading-6 text-[color:var(--color-text)] transition-transform duration-500 ease-out group-hover:scale-110">
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
