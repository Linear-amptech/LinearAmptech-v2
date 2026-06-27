import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import { projectTypeOptions } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { AppSelect } from "@/components/ui/select";
import { companyContact } from "@/lib/company-data";

const directory = [
  {
    label: "Phone",
    icon: Phone,
    href: `tel:${companyContact.phone.replaceAll(" ", "")}`,
    lines: [companyContact.phone],
  },
  {
    label: "Email",
    icon: Mail,
    href: `mailto:${companyContact.email}`,
    lines: [companyContact.email],
  },
  {
    label: "Location",
    icon: MapPin,
    href: undefined,
    lines: companyContact.addressLines,
  },
  {
    label: "Response",
    icon: Clock,
    href: undefined,
    lines: ["Within 2 business days · Mon–Fri IST"],
  },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[color:var(--color-surface-soft)] py-16 sm:py-24"
    >
      <div className="container mx-auto max-w-7xl px-4 lg:px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-mono mb-4 text-xs uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
              Contact
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
              Build your next silicon innovation with Linear Amptech.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg">
              Tell us the band, architecture, and target. We scope RF, analog,
              mixed-signal, and ASIC programs from concept to validation.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[0_1px_2px_rgb(15_23_42/0.04)]">
              <dl className="divide-y divide-[color:var(--color-border)]">
                {directory.map((row) => {
                  const Icon = row.icon;
                  const value = (
                    <div className="text-sm font-medium leading-6 text-[color:var(--color-text)] break-words">
                      {row.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  );

                  return (
                    <div
                      key={row.label}
                      className="grid gap-2 px-5 py-4 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-5"
                    >
                      <dt className="flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)] sm:pt-0.5">
                        <span className="grid size-7 place-items-center rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-text-muted)]">
                          <Icon className="size-3.5" aria-hidden="true" />
                        </span>
                        {row.label}
                      </dt>
                      <dd className="sm:text-right">
                        {row.href ? (
                          <a
                            href={row.href}
                            className="inline-block break-words rounded-sm text-sm font-medium leading-6 text-[color:var(--color-text)] underline-offset-4 transition-colors hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text)]/20"
                          >
                            {row.lines[0]}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </Reveal>

          <Reveal>
            <form className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[0_1px_2px_rgb(15_23_42/0.04)] sm:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-[color:var(--color-text-muted)]">
                  <span>Name</span>
                  <input
                    name="name"
                    autoComplete="name"
                    className="min-h-12 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 text-base text-[color:var(--color-text)] placeholder:text-[color:var(--color-text-muted)]/60 outline-none transition-colors focus:border-[color:var(--color-text)]/30 focus:ring-2 focus:ring-[color:var(--color-text)]/10"
                  />
                </label>
                <label className="grid gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-[color:var(--color-text-muted)]">
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="min-h-12 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 text-base text-[color:var(--color-text)] placeholder:text-[color:var(--color-text-muted)]/60 outline-none transition-colors focus:border-[color:var(--color-text)]/30 focus:ring-2 focus:ring-[color:var(--color-text)]/10"
                  />
                </label>
                <label className="grid gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-[color:var(--color-text-muted)]">
                  <span>Company</span>
                  <input
                    name="company"
                    autoComplete="organization"
                    className="min-h-12 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 text-base text-[color:var(--color-text)] placeholder:text-[color:var(--color-text-muted)]/60 outline-none transition-colors focus:border-[color:var(--color-text)]/30 focus:ring-2 focus:ring-[color:var(--color-text)]/10"
                  />
                </label>
                <label className="grid gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-[color:var(--color-text-muted)]">
                  <span>Project type</span>
                  <AppSelect
                    name="projectType"
                    placeholder="Select project type"
                    className="min-h-12 border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-base text-[color:var(--color-text)] hover:border-[color:var(--color-text)]/30 focus-visible:border-[color:var(--color-text)]/30 data-[popup-open]:border-[color:var(--color-text)]/30 data-[popup-open]:bg-[color:var(--color-surface)]"
                    options={projectTypeOptions.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </label>
                <label className="grid gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-[color:var(--color-text-muted)] md:col-span-2">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    className="min-h-40 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-3 text-base text-[color:var(--color-text)] placeholder:text-[color:var(--color-text-muted)]/60 outline-none transition-colors focus:border-[color:var(--color-text)]/30 focus:ring-2 focus:ring-[color:var(--color-text)]/10"
                  />
                </label>
                <div className="flex flex-col gap-4 md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                    Routed straight to our engineering team.
                  </p>
                  <button
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--color-text)] px-6 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-text)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface)] disabled:opacity-50"
                    type="submit"
                  >
                    Start a Project
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
