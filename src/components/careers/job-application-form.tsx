"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  XCircle,
} from "lucide-react";

import { AppSelect } from "@/components/ui/select";
import type { jobs } from "@/lib/company-data";
// http://localhost:5001
const API_BASE_URL = "http://localhost:5001";

type Job = (typeof jobs)[number];
type ResumeAccessibility = "checking" | "accessible" | "notAccessible" | null;

type ApplicationForm = {
  fullName: string;
  gender: string;
  email: string;
  mobileNumber: string;
  educationQualification: string;
  linkedInProfile: string;
  resumeUrl: string;
};

const initialForm: ApplicationForm = {
  fullName: "",
  gender: "",
  email: "",
  mobileNumber: "",
  educationQualification: "",
  linkedInProfile: "",
  resumeUrl: "",
};

function isLinkedInUrl(value: string) {
  return /^https:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9-]+\/?$/.test(
    value.trim(),
  );
}

function isResumeUrl(value: string) {
  return /^https:\/\/(drive|docs)\.google\.com\/.+/i.test(value.trim());
}

export function JobApplicationForm({ job }: { job: Job }) {
  const resumeCheckId = useRef(0);
  const [form, setForm] = useState<ApplicationForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [error, setError] = useState("");
  const [resumeAccessibility, setResumeAccessibility] =
    useState<ResumeAccessibility>(null);

  const updateForm = (field: keyof ApplicationForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    if (status === "success") setStatus("idle");
  };

  const checkResumeAccessibility = async (url: string) => {
    const currentCheckId = resumeCheckId.current + 1;
    resumeCheckId.current = currentCheckId;

    if (!url.trim()) {
      setResumeAccessibility(null);
      return;
    }

    setResumeAccessibility("checking");

    if (!isResumeUrl(url)) {
      setResumeAccessibility("notAccessible");
      return;
    }

    try {
      const response = await fetch(url, { method: "GET" });
      if (resumeCheckId.current !== currentCheckId) return;
      setResumeAccessibility(
        response.status === 200 ? "accessible" : "notAccessible",
      );
    } catch {
      if (resumeCheckId.current !== currentCheckId) return;
      setResumeAccessibility("notAccessible");
    }
  };

  const updateResumeUrl = (value: string) => {
    updateForm("resumeUrl", value);
    void checkResumeAccessibility(value);
  };

  const submitApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!isLinkedInUrl(form.linkedInProfile)) {
      setError(
        "Please enter a valid LinkedIn profile URL, for example https://www.linkedin.com/in/username.",
      );
      return;
    }

    if (resumeAccessibility !== "accessible") {
      setError(
        "Please provide a public Google Drive or Google Docs resume link. Make sure the link is accessible to anyone, or the URL may be invalid.",
      );
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(`${API_BASE_URL}/job/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          mobileNumber: form.mobileNumber,
          educationQualification: form.educationQualification,
          jobTitle: job.title,
          resumeUrl: form.resumeUrl,
          linkedInProfile: form.linkedInProfile,
          gender: form.gender,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Failed to submit application. Please try again later.",
        );
      }

      setStatus("success");
      setForm(initialForm);
      setResumeAccessibility(null);
    } catch (submissionError) {
      setStatus("idle");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "An error occurred while submitting the form.",
      );
    }
  };

  if (status === "success") {
    return (
      <article className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 text-center shadow-[var(--shadow-card)] md:p-10">
        <CheckCircle2
          className="mx-auto size-14 text-[color:var(--color-primary-deep)]"
          aria-hidden="true"
        />
        <h2 className="font-heading mt-5 text-3xl font-semibold tracking-normal text-[color:var(--color-text)]">
          Thank You
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[color:var(--color-text-muted)]">
          Your application has been successfully submitted. Our team will review
          your application and get back to you soon.
        </p>
        <Link
          href="/careers"
          className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-5 text-sm font-semibold text-[color:var(--color-text)] transition-colors hover:border-[#F2C79E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-deep)]/25"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to Careers
        </Link>
      </article>
    );
  }

  return (
    <form
      onSubmit={submitApplication}
      className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-card)] md:p-8"
    >
      <div className="mb-7 border-b border-[color:var(--color-border)] pb-5">
        <p className="kicker mb-3">Application Form</p>
        <h2 className="font-heading text-3xl font-semibold tracking-normal text-[color:var(--color-text)]">
          Apply for {job.title}
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          value={form.fullName}
          onChange={(event) => updateForm("fullName", event.target.value)}
          className="h-12 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 text-base text-[color:var(--color-text)] outline-none focus:border-[color:var(--color-primary-deep)] focus:ring-2 focus:ring-[color:var(--color-primary-deep)]/15"
          placeholder="Full name"
        />
        <AppSelect
          required
          value={form.gender}
          onValueChange={(nextValue) => updateForm("gender", nextValue)}
          name="gender"
          placeholder="Gender"
          className="border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] hover:border-[color:var(--color-text)]/30 focus-visible:border-[color:var(--color-primary-deep)] data-[popup-open]:border-[color:var(--color-primary-deep)] data-[popup-open]:bg-[color:var(--color-surface)]"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "prefer-not-to-say", label: "Prefer not to say" },
          ]}
        />
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => updateForm("email", event.target.value)}
          className="h-12 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 text-base text-[color:var(--color-text)] outline-none focus:border-[color:var(--color-primary-deep)] focus:ring-2 focus:ring-[color:var(--color-primary-deep)]/15"
          placeholder="Email address"
        />
        <input
          required
          type="tel"
          value={form.mobileNumber}
          onChange={(event) => updateForm("mobileNumber", event.target.value)}
          className="h-12 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 text-base text-[color:var(--color-text)] outline-none focus:border-[color:var(--color-primary-deep)] focus:ring-2 focus:ring-[color:var(--color-primary-deep)]/15"
          placeholder="Mobile number"
        />
        <AppSelect
          required
          value={form.educationQualification}
          onValueChange={(nextValue) =>
            updateForm("educationQualification", nextValue)
          }
          name="educationQualification"
          placeholder="Education qualification"
          className="border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] hover:border-[color:var(--color-text)]/30 focus-visible:border-[color:var(--color-primary-deep)] data-[popup-open]:border-[color:var(--color-primary-deep)] data-[popup-open]:bg-[color:var(--color-surface)]"
          options={[
            { value: "Diploma", label: "Diploma" },
            { value: "Graduate", label: "Graduate" },
            { value: "Post Graduate", label: "Post Graduate" },
            { value: "PhD", label: "PhD" },
          ]}
        />
        <input
          required
          type="url"
          value={form.linkedInProfile}
          onChange={(event) =>
            updateForm("linkedInProfile", event.target.value)
          }
          className="h-12 rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 text-base text-[color:var(--color-text)] outline-none focus:border-[color:var(--color-primary-deep)] focus:ring-2 focus:ring-[color:var(--color-primary-deep)]/15"
          placeholder="LinkedIn profile URL"
        />
        <div className="md:col-span-2">
          <input
            required
            type="url"
            value={form.resumeUrl}
            onChange={(event) => updateResumeUrl(event.target.value)}
            className="h-12 w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 text-base text-[color:var(--color-text)] outline-none focus:border-[color:var(--color-primary-deep)] focus:ring-2 focus:ring-[color:var(--color-primary-deep)]/15"
            placeholder="Public Google Drive or Docs resume URL"
          />
          <div className="mb-2 min-h-5">
            {resumeAccessibility && (
              <p
                className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                  resumeAccessibility === "accessible"
                    ? "text-[color:var(--color-primary-deep)]"
                    : resumeAccessibility === "notAccessible"
                      ? "text-[color:var(--color-accent-red)]"
                      : "text-[color:var(--color-text-muted)]"
                }`}
              >
                {resumeAccessibility === "checking" && (
                  <LoaderCircle
                    className="size-3.5 animate-spin"
                    aria-hidden="true"
                  />
                )}
                {resumeAccessibility === "accessible" && (
                  <CheckCircle2 className="size-3.5" aria-hidden="true" />
                )}
                {resumeAccessibility === "notAccessible" && (
                  <XCircle className="size-3.5" aria-hidden="true" />
                )}
                {resumeAccessibility === "checking" &&
                  "Checking accessibility..."}
                {resumeAccessibility === "accessible" && "Resume accessible"}
                {resumeAccessibility === "notAccessible" &&
                  "Resume not accessible"}
              </p>
            )}
          </div>
          {resumeAccessibility === "notAccessible" && (
            <p className="mt-2 text-sm leading-6 text-[color:var(--color-text-muted)]">
              Please provide a public Google Drive or Google Docs resume link.
              Make sure the link is accessible to anyone, or the URL may be
              invalid.
            </p>
          )}
        </div>
      </div>

      {error && (
        <p className="mt-5 rounded-lg border border-[color:var(--color-accent-red)]/25 bg-[color:var(--color-accent-red)]/10 px-4 py-3 text-sm text-[color:var(--color-accent-red)]">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-1 cursor-pointer inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#EA7317] px-6 text-sm font-semibold text-[#1C1917] shadow-[var(--shadow-card)] transition hover:bg-[#E06A0F] hover:shadow-[0_10px_24px_rgb(28_25_23/0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-surface)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          <>
            Submit Application
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </>
        )}
      </button>
    </form>
  );
}
