"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { projectTypeOptions } from "@/components/landing/data";
import { Reveal } from "@/components/landing/reveal";
import { AppSelect } from "@/components/ui/select";
import { companyContact } from "@/lib/company-data";
// http://localhost:5001/contact
// process.env.NEXT_PUBLIC_API_URL
const API_BASE_URL = "process.env.NEXT_PUBLIC_API_URL";

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
  const [projectType, setProjectType] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [error, setError] = useState("");

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setError("");

    if (!name || !email || !company || !projectType) {
      setError("Please complete all required fields before submitting.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          companyName: company,
          projectType,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit your message. Please try again.");
      }

      formElement.reset();
      setProjectType("");
      setStatus("success");
    } catch (submissionError) {
      setStatus("idle");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "An error occurred while submitting the form.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-[color:var(--color-surface-soft)] py-16 sm:py-24"
    >
      <div className="container mx-auto max-w-7xl px-4 lg:px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex h-full flex-col">
            <p className="kicker mb-4">Contact</p>
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-normal text-[color:var(--color-text)] sm:text-4xl lg:text-5xl">
              Build your next silicon innovation with Linear Amptech.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg xl:text-xl">
              Tell us the band, architecture, and target. We scope RF, analog,
              mixed-signal, and ASIC programs from concept to validation.
            </p>

            <div className="surface-card mt-8 flex flex-1 flex-col overflow-hidden rounded-lg">
              <dl className="flex flex-1 flex-col divide-y divide-[color:var(--color-border-strong)]">
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
                      className="grid flex-1 content-center gap-2 px-5 py-4 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-5"
                    >
                      <dt className="flex items-center gap-2.5 text-xs font-medium text-[color:var(--color-text-muted)] sm:pt-0.5">
                        <span className="grid size-7 place-items-center rounded-md border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-[color:var(--color-text-muted)]">
                          <Icon className="size-3.5" aria-hidden="true" />
                        </span>
                        {row.label}
                      </dt>
                      <dd className="sm:text-right">
                        {row.href ? (
                          <a
                            href={row.href}
                            className="inline-block break-words rounded-sm text-sm font-medium leading-6 text-[color:var(--color-text)] underline-offset-4 transition-colors hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-deep)]/30"
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

          <Reveal className="h-full">
            <form
              onSubmit={submitContact}
              className="surface-card flex h-full flex-col rounded-lg p-6 sm:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-xs font-medium text-[color:var(--color-text-muted)]">
                  <span>Name</span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="field-input min-h-12 px-4 text-base"
                  />
                </label>
                <label className="grid gap-2 text-xs font-medium text-[color:var(--color-text-muted)]">
                  <span>Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="field-input min-h-12 px-4 text-base"
                  />
                </label>
                <label className="grid gap-2 text-xs font-medium text-[color:var(--color-text-muted)]">
                  <span>Company</span>
                  <input
                    required
                    name="company"
                    autoComplete="organization"
                    className="field-input min-h-12 px-4 text-base"
                  />
                </label>
                <label className="grid gap-2 text-xs font-medium text-[color:var(--color-text-muted)]">
                  <span>Project type</span>
                  <AppSelect
                    required
                    name="projectType"
                    value={projectType}
                    onValueChange={(nextValue) => {
                      setProjectType(nextValue);
                      setError("");
                      if (status === "success") setStatus("idle");
                    }}
                    placeholder="Select project type"
                    className="min-h-12 border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] text-base text-[color:var(--color-text)] hover:border-[color:var(--color-border-strong)] focus-visible:border-[color:var(--color-primary-deep)] focus-visible:ring-[color:var(--color-primary-deep)]/15 data-[popup-open]:border-[color:var(--color-primary-deep)] data-[popup-open]:bg-[color:var(--color-surface-soft)]"
                    options={projectTypeOptions.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </label>
              </div>
              <label className="mt-4 flex flex-1 flex-col gap-2 text-xs font-medium text-[color:var(--color-text-muted)]">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={6}
                  className="field-input min-h-40 flex-1 px-4 py-3 text-base"
                />
              </label>
              {error && (
                <p className="mt-4 rounded-lg border border-[color:var(--color-accent-red)]/25 bg-[color:var(--color-accent-red)]/10 px-4 py-3 text-sm text-[color:var(--color-accent-red)]">
                  {error}
                </p>
              )}
              {status === "success" && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface-soft)] px-4 py-3 text-sm text-[color:var(--color-text)]">
                  <CheckCircle2
                    className="size-4 text-[color:var(--color-primary-deep)]"
                    aria-hidden="true"
                  />
                  Your message has been submitted successfully.
                </p>
              )}
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end">
                <button
                  className="btn-primary group h-12 px-6 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface)] disabled:opacity-50"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <LoaderCircle
                        className="size-4 animate-spin"
                        aria-hidden="true"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Start a Project
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
