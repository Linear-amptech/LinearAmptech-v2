import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { JobApplicationForm } from "@/components/careers/job-application-form";
import { HeroThreads } from "@/components/layout/hero-threads";
import { Reveal } from "@/components/landing/reveal";
import { jobs } from "@/lib/company-data";

type ApplyPageProps = {
  params: Promise<{ jobId: string }>;
};

function getJob(jobId: string) {
  return jobs.find((job) => String(job.id) === jobId);
}

export function generateStaticParams() {
  return jobs.map((job) => ({
    jobId: String(job.id),
  }));
}

export async function generateMetadata({
  params,
}: ApplyPageProps): Promise<Metadata> {
  const { jobId } = await params;
  const job = getJob(jobId);

  if (!job) {
    return {
      title: "Job Not Found | Linear Amptech",
    };
  }

  return {
    title: `Apply for ${job.title} | Linear Amptech`,
    description: `Submit your application for the ${job.title} role at Linear Amptech.`,
  };
}

export default async function ApplyJobPage({ params }: ApplyPageProps) {
  const { jobId } = await params;
  const job = getJob(jobId);

  if (!job) notFound();

  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <section className="relative overflow-hidden border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)] pb-14 pt-32">
        <HeroThreads />
        <Reveal className="container relative mx-auto max-w-7xl px-4">
          <Link
            href="/careers"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-primary-deep)] transition-colors hover:text-[color:var(--color-primary-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary-deep)]/25"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Careers
          </Link>
          <p className="kicker mb-4">Careers Application</p>
          <h1 className="font-heading max-w-5xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-[color:var(--color-text)] sm:text-5xl lg:text-[3.5rem]">
            {job.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--color-text-muted)]">
            Complete the application below with your contact details, LinkedIn
            profile, and a public Google Drive or Docs resume link.
          </p>
        </Reveal>
      </section>

      <section className="border-b border-[color:var(--color-border)]">
        <Reveal className="container mx-auto max-w-7xl px-4">
          <dl className="grid grid-cols-1 divide-y divide-[color:var(--color-border)] sm:grid-cols-3 sm:divide-y-0">
            <div className="flex flex-col gap-3 border-[color:var(--color-border)] py-6 sm:border-r sm:py-9 sm:pr-6">
              <dt className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                <MapPin className="size-4" aria-hidden="true" />
                Location
              </dt>
              <dd className="text-xl font-semibold leading-snug tracking-tight text-[color:var(--color-text)] sm:text-2xl">
                {job.location}
              </dd>
            </div>
            <div className="flex flex-col gap-3 border-[color:var(--color-border)] py-6 sm:border-r sm:px-6 sm:py-9">
              <dt className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                <BriefcaseBusiness className="size-4" aria-hidden="true" />
                Type
              </dt>
              <dd className="text-xl font-semibold leading-snug tracking-tight text-[color:var(--color-text)] sm:text-2xl">
                {job.employmentType}
              </dd>
            </div>
            <div className="flex flex-col gap-3 py-6 sm:py-9 sm:pl-6">
              <dt className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                <CalendarDays className="size-4" aria-hidden="true" />
                Posted
              </dt>
              <dd className="text-xl font-semibold leading-snug tracking-tight text-[color:var(--color-text)] sm:text-2xl">
                {job.datePosted}
              </dd>
            </div>
          </dl>
        </Reveal>
      </section>

      <section className="bg-[color:var(--color-surface-soft)] py-24">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.36fr_0.64fr]">
          <Reveal className="surface-card rounded-2xl p-6 lg:self-start">
            <p className="kicker mb-4">Role Summary</p>
            <h2 className="font-heading text-2xl font-semibold tracking-normal text-[color:var(--color-text)]">
              {job.jobTitle}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[color:var(--color-text-muted)]">
              {job.description}
            </p>
          </Reveal>
          <Reveal>
            <JobApplicationForm job={job} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
