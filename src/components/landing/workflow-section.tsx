import { Reveal } from "@/components/landing/reveal";
import { WorkflowExplorer } from "@/components/landing/workflow-explorer";

export function WorkflowSection() {
  return (
    <section className="flex min-h-[100svh] flex-col justify-center pb-10 pt-16">
      <Reveal className="container mx-auto px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
            Workflow
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl">
            From architecture to measured prototype.
          </h2>
        </div>

        <WorkflowExplorer />
      </Reveal>
    </section>
  );
}
