"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Search,
  X,
} from "lucide-react";

import { jobs } from "@/lib/company-data";

const APPLICATION_ENDPOINT = "https://api.linear-amptech.com/job/apply";

const experienceOptions = ["Entry Level", "Mid Level", "Senior Level"];
const workSiteOptions = ["Remote", "On-Site", "Hybrid"];
const employmentTypeOptions = ["Full-Time", "Part-Time", "Contract"];

type Job = (typeof jobs)[number];
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

function normalize(value: string) {
  return value.toLowerCase().replaceAll("-", " ").trim();
}

function matchesOption(values: string[], selected: string) {
  return values.some((value) => normalize(value) === normalize(selected));
}

function isLinkedInUrl(value: string) {
  return /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/.test(
    value.trim(),
  );
}

function isResumeUrl(value: string) {
  return /^https?:\/\/(drive|docs)\.google\.com\/.+/i.test(value.trim());
}

export function CareersBoard() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobs[0] ?? null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [appliedSearchKeyword, setAppliedSearchKeyword] = useState("");
  const [experience, setExperience] = useState("");
  const [workSite, setWorkSite] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [activeApplyJob, setActiveApplyJob] = useState<Job | null>(null);
  const [form, setForm] = useState<ApplicationForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [error, setError] = useState("");

  const filteredJobs = useMemo(() => {
    const keyword = appliedSearchKeyword.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !keyword ||
        job.title.toLowerCase().includes(keyword) ||
        job.location.toLowerCase().includes(keyword) ||
        job.jobTitle.toLowerCase().includes(keyword);
      const matchesExperience =
        !experience || matchesOption(job.experienceLevel, experience);
      const matchesWorkSite =
        !workSite || matchesOption(job.workType, workSite);
      const matchesEmployment =
        !employmentType ||
        normalize(job.employmentType) === normalize(employmentType);

      return (
        matchesSearch &&
        matchesExperience &&
        matchesWorkSite &&
        matchesEmployment
      );
    });
  }, [appliedSearchKeyword, employmentType, experience, workSite]);

  const visibleSelectedJob =
    selectedJob && filteredJobs.some((job) => job.id === selectedJob.id)
      ? selectedJob
      : (filteredJobs[0] ?? null);

  const activeFilters = [
    appliedSearchKeyword && { label: appliedSearchKeyword, clear: "search" },
    experience && { label: experience, clear: "experience" },
    workSite && { label: workSite, clear: "workSite" },
    employmentType && { label: employmentType, clear: "employmentType" },
  ].filter(Boolean) as { label: string; clear: string }[];

  const clearFilter = (filter: string) => {
    if (filter === "search") {
      setAppliedSearchKeyword("");
      setSearchKeyword("");
    }
    if (filter === "experience") setExperience("");
    if (filter === "workSite") setWorkSite("");
    if (filter === "employmentType") setEmploymentType("");
  };

  const applySearch = () => {
    setAppliedSearchKeyword(searchKeyword.trim());
  };

  const updateForm = (field: keyof ApplicationForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitApplication = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!activeApplyJob) return;

    setError("");
    if (!isLinkedInUrl(form.linkedInProfile)) {
      setError("Enter a valid LinkedIn profile URL.");
      return;
    }
    if (!isResumeUrl(form.resumeUrl)) {
      setError("Use a public Google Drive or Google Docs resume URL.");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(APPLICATION_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          mobileNumber: form.mobileNumber,
          educationQualification: form.educationQualification,
          jobTitle: activeApplyJob.title,
          resumeUrl: form.resumeUrl,
          linkedInProfile: form.linkedInProfile,
          gender: form.gender,
        }),
      });

      if (!response.ok) {
        throw new Error("Application submission failed.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (submissionError) {
      setStatus("idle");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Application submission failed.",
      );
    }
  };

  return (
    <section className="relative px-5 pb-24 lg:px-8">
      <div className="container mx-auto grid gap-7">
        <div className="product-card p-5 md:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_auto]">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-cyan-200"
                aria-hidden="true"
              />
              <input
                value={searchKeyword}
                onChange={(event) => setSearchKeyword(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") applySearch();
                }}
                className="h-12 w-full rounded-lg border border-white/10 bg-slate-950/55 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-200/55"
                placeholder="Search job title or location"
              />
            </div>
            <select
              value={experience}
              onChange={(event) => setExperience(event.target.value)}
              className="h-12 rounded-lg border border-white/10 bg-slate-950/55 px-4 text-sm text-white outline-none focus:border-cyan-200/55"
            >
              <option value="">Experience</option>
              {experienceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={workSite}
              onChange={(event) => setWorkSite(event.target.value)}
              className="h-12 rounded-lg border border-white/10 bg-slate-950/55 px-4 text-sm text-white outline-none focus:border-cyan-200/55"
            >
              <option value="">Work site</option>
              {workSiteOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={employmentType}
              onChange={(event) => setEmploymentType(event.target.value)}
              className="h-12 rounded-lg border border-white/10 bg-slate-950/55 px-4 text-sm text-white outline-none focus:border-cyan-200/55"
            >
              <option value="">Employment</option>
              {employmentTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="premium-button"
              onClick={applySearch}
            >
              Find Jobs
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>

          {activeFilters.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {activeFilters.map((filter) => (
                <button
                  key={`${filter.clear}-${filter.label}`}
                  type="button"
                  onClick={() => clearFilter(filter.clear)}
                  className="feature-pill inline-flex items-center gap-2"
                >
                  {filter.label}
                  <X className="size-3.5" aria-hidden="true" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.4fr_0.6fr]">
          <div className="grid gap-4 lg:self-start">
            {filteredJobs.length === 0 ? (
              <article className="product-card p-6">
                <h2 className="text-2xl font-semibold text-white">
                  No matching roles
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Clear one or more filters to view all current openings.
                </p>
              </article>
            ) : (
              filteredJobs.map((job) => (
                <button
                  key={job.id}
                  type="button"
                  onClick={() => {
                    setSelectedJob(job);
                    setActiveApplyJob(null);
                    setStatus("idle");
                    setError("");
                  }}
                  className={`product-card p-5 text-left transition-all duration-300 hover:border-cyan-200/35 ${
                    visibleSelectedJob?.id === job.id
                      ? "border-cyan-200/40 bg-cyan-200/[0.08]"
                      : ""
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    {job.jobTitle}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    {job.title}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                    <span className="feature-pill">
                      <MapPin className="inline size-3.5" aria-hidden="true" />{" "}
                      {job.location}
                    </span>
                    <span className="feature-pill">
                      <BriefcaseBusiness
                        className="inline size-3.5"
                        aria-hidden="true"
                      />{" "}
                      {job.employmentType}
                    </span>
                  </div>
                </button>
              ))
            )}
          </div>

          {visibleSelectedJob && (
            <article className="product-card p-6 md:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                    {visibleSelectedJob.jobTitle}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">
                    {visibleSelectedJob.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActiveApplyJob(visibleSelectedJob);
                    setStatus("idle");
                    setError("");
                  }}
                  className="premium-button"
                >
                  Apply Now
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300">
                <span className="feature-pill">
                  <MapPin className="inline size-3.5" aria-hidden="true" />{" "}
                  {visibleSelectedJob.location}
                </span>
                <span className="feature-pill">
                  <BriefcaseBusiness
                    className="inline size-3.5"
                    aria-hidden="true"
                  />{" "}
                  {visibleSelectedJob.employmentType}
                </span>
                <span className="feature-pill">
                  <CalendarDays
                    className="inline size-3.5"
                    aria-hidden="true"
                  />{" "}
                  Posted {visibleSelectedJob.datePosted}
                </span>
                {visibleSelectedJob.workType.map((type) => (
                  <span key={type} className="feature-pill">
                    {type}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-base leading-7 text-slate-300">
                {visibleSelectedJob.description}
              </p>

              <div className="mt-8 grid gap-7 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Key responsibilities
                  </h3>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
                    {visibleSelectedJob.keyResponsibilities.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Requirements
                  </h3>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
                    {visibleSelectedJob.requirements.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                  <h3 className="mt-7 text-lg font-semibold text-white">
                    Desired skills
                  </h3>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
                    {visibleSelectedJob.desiredSkills.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {activeApplyJob && (
                <form
                  onSubmit={submitApplication}
                  className="mt-8 rounded-lg border border-white/10 bg-slate-950/45 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="section-kicker">Application</p>
                      <h3 className="text-2xl font-semibold text-white">
                        Apply for {activeApplyJob.title}
                      </h3>
                    </div>
                    <button
                      type="button"
                      className="grid size-9 place-items-center rounded-lg border border-white/10 text-slate-300 transition-colors hover:border-cyan-200/35 hover:text-white"
                      onClick={() => setActiveApplyJob(null)}
                      aria-label="Close application form"
                    >
                      <X className="size-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <input
                      required
                      value={form.fullName}
                      onChange={(event) =>
                        updateForm("fullName", event.target.value)
                      }
                      className="h-12 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none focus:border-cyan-200/55"
                      placeholder="Full name"
                    />
                    <select
                      required
                      value={form.gender}
                      onChange={(event) =>
                        updateForm("gender", event.target.value)
                      }
                      className="h-12 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none focus:border-cyan-200/55"
                    >
                      <option value="">Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(event) =>
                        updateForm("email", event.target.value)
                      }
                      className="h-12 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none focus:border-cyan-200/55"
                      placeholder="Email"
                    />
                    <input
                      required
                      value={form.mobileNumber}
                      onChange={(event) =>
                        updateForm("mobileNumber", event.target.value)
                      }
                      className="h-12 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none focus:border-cyan-200/55"
                      placeholder="Mobile number"
                    />
                    <input
                      required
                      value={form.educationQualification}
                      onChange={(event) =>
                        updateForm("educationQualification", event.target.value)
                      }
                      className="h-12 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none focus:border-cyan-200/55"
                      placeholder="Education qualification"
                    />
                    <input
                      required
                      value={form.linkedInProfile}
                      onChange={(event) =>
                        updateForm("linkedInProfile", event.target.value)
                      }
                      className="h-12 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none focus:border-cyan-200/55"
                      placeholder="LinkedIn profile URL"
                    />
                    <input
                      required
                      value={form.resumeUrl}
                      onChange={(event) =>
                        updateForm("resumeUrl", event.target.value)
                      }
                      className="h-12 rounded-lg border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none focus:border-cyan-200/55 md:col-span-2"
                      placeholder="Public Google Drive or Docs resume URL"
                    />
                  </div>

                  {error && (
                    <p className="mt-4 rounded-lg border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                      {error}
                    </p>
                  )}
                  {status === "success" && (
                    <p className="mt-4 rounded-lg border border-cyan-200/25 bg-cyan-200/10 px-4 py-3 text-sm text-cyan-100">
                      Application submitted successfully.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="premium-button mt-5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting"
                      ? "Submitting..."
                      : "Submit Application"}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
