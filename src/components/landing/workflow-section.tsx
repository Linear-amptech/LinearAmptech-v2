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

// const workflowSteps2 = [
//   { title: "Design", image: "/assets/workflow/111.png" },
//   { title: "Simulation", image: "/assets/workflow/222.png" },
//   { title: "Tapeout", image: "/assets/workflow/333.png" },
//   { title: "Packaging", image: "/assets/workflow/444.png" },
//   { title: "Integration", image: "/assets/workflow/555.png" },
//   { title: "Characterization", image: "/assets/workflow/666.png" },
//   { title: "Validation", image: "/assets/workflow/777.png" },
// ] as const;

export function WorkflowSection() {
  return (
    <section className="py-24">
      <Reveal className="container mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
            Workflow
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
            From architecture to measured prototype.
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 lg:grid-cols-7">
          {workflowSteps.map((step, index) => (
            <li key={step.title} className="group flex flex-col">
              <div className="relative aspect-square overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-shadow duration-300 group-hover:shadow-[0_14px_32px_rgb(15_23_42/0.10)]">
                <Image
                  src={step.image}
                  alt={`${step.title} workflow visual`}
                  fill
                  sizes="(min-width: 1024px) 13vw, (min-width: 640px) 24vw, 45vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <span className="mt-4 font-mono text-xs tracking-widest text-slate-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-heading text-sm font-semibold leading-snug text-[color:var(--color-text)]">
                {step.title}
              </h3>
            </li>
          ))}
        </ol>

        {/* <div className="mt-12">
          <div className="grid gap-2 lg:grid-cols-7">
            {workflowSteps2.map((step, index) => {
              return (
                <div
                  key={step.title}
                  className="group overflow-hidden rounded-md border border-[color:var(--color-border)] bg-white shadow-[var(--shadow-soft)]"
                >
                  <div className="relative aspect-square overflow-hidden bg-[color:var(--color-surface-soft)]">
                    <Image
                      src={step.image}
                      alt={`${step.title} workflow background`}
                      fill
                      sizes="(min-width: 1024px) 13vw, 100vw"
                      className=" scale-110 object-cover transition-transform duration-700 ease-out group-hover:scale-120"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/1" />
                    <span className="absolute left-2 top-2 font-heading text-sm font-bold leading-none text-[color:var(--color-primary-deep)] transition-transform duration-500 ease-out group-hover:scale-110">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="bg-white py-3 transition-transform duration-500 ease-out group-hover:scale-105">
                    <h3 className="text-center font-heading text-lg font-bold leading-6 text-[color:var(--color-text)]">
                      {step.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </Reveal>
    </section>
  );
}
