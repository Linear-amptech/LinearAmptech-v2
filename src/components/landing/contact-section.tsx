import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { projectTypeOptions } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { AppSelect } from "@/components/ui/select";
import { companyContact } from "@/lib/company-data";

const detailCards = [
  {
    label: "Phone",
    value: companyContact.phone,
    href: `tel:${companyContact.phone.replaceAll(" ", "")}`,
    icon: Phone,
  },
  {
    label: "Email",
    value: companyContact.email,
    href: `mailto:${companyContact.email}`,
    icon: Mail,
  },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[color:var(--color-surface-soft)] py-24"
    >
      <div className="container mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
              Contact
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
              Build your next silicon innovation with Linear Amptech.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg">
              Share the system, frequency range, architecture target, or
              prototype objective. Linear Amptech can scope RF, analog,
              mixed-signal, and ASIC R&D programs from concept through
              validation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {detailCards.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)] transition-colors hover:border-[color:var(--color-primary)]/50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid size-10 place-items-center rounded-lg bg-[color:var(--color-surface-soft)] text-[color:var(--color-primary-deep)]">
                        <Icon className="size-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[color:var(--color-text)]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-4 rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-[color:var(--color-surface-soft)] text-[color:var(--color-primary-deep)]">
                  <MapPin className="size-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]">
                    Address
                  </p>
                  <div className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
                    {companyContact.addressLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form className="rounded-[var(--radius-card)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-card)] md:p-7">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-[color:var(--color-text)]">
                  <span>Name</span>
                  <input
                    name="name"
                    autoComplete="name"
                    className="h-12 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-4 text-sm text-[color:var(--color-text)] outline-none transition-colors focus:border-[color:var(--color-primary)]/60"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[color:var(--color-text)]">
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="h-12 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-4 text-sm text-[color:var(--color-text)] outline-none transition-colors focus:border-[color:var(--color-primary)]/60"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[color:var(--color-text)]">
                  <span>Company</span>
                  <input
                    name="company"
                    autoComplete="organization"
                    className="h-12 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-4 text-sm text-[color:var(--color-text)] outline-none transition-colors focus:border-[color:var(--color-primary)]/60"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[color:var(--color-text)]">
                  <span>Project type</span>
                  <AppSelect
                    name="projectType"
                    placeholder="Select project type"
                    className="border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-text)] hover:border-[color:var(--color-primary)]/40 focus-visible:border-[color:var(--color-primary)]/60 data-[popup-open]:border-[color:var(--color-primary)]/60 data-[popup-open]:bg-[color:var(--color-surface-soft)]"
                    options={projectTypeOptions.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[color:var(--color-text)] md:col-span-2">
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    className="min-h-40 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-4 py-3 text-sm text-[color:var(--color-text)] outline-none transition-colors focus:border-[color:var(--color-primary)]/60"
                  />
                </label>
                <button className="premium-button md:col-span-2" type="submit">
                  Start a Project
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
