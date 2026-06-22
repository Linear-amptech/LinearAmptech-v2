import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { FooterShaderBackground } from "@/components/ui/asd";
import { companyContact } from "@/lib/company-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden border-t border-cyan-200/20 bg-[#02050a] text-slate-100 shadow-[0_-28px_120px_rgba(34,211,238,0.16)]">
      <FooterShaderBackground />
      <div className="absolute inset-0 bg-[#02050a]/45" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
      <div className="relative z-10 mx-auto container px-5 py-14 lg:px-8">
        <div className="flex justify-between flex-wrap gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Quick Links
            </p>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              <Link href="/" className="hover:text-cyan-100">
                Home
              </Link>
              <Link href="/#technology" className="hover:text-cyan-100">
                Technology
              </Link>
              <Link href="/team" className="hover:text-cyan-100">
                Team
              </Link>
              <Link href="/careers" className="hover:text-cyan-100">
                Careers
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Contact Us
            </p>
            <div className="mt-5 grid gap-4 text-sm text-slate-300">
              <a
                href={`tel:${companyContact.phone.replaceAll(" ", "")}`}
                className="flex gap-3 hover:text-cyan-100"
              >
                <Phone
                  className="mt-0.5 size-4 text-cyan-200"
                  aria-hidden="true"
                />
                {companyContact.phone}
              </a>
              <a
                href={`mailto:${companyContact.email}`}
                className="flex gap-3 hover:text-cyan-100"
              >
                <Mail
                  className="mt-0.5 size-4 text-cyan-200"
                  aria-hidden="true"
                />
                {companyContact.email}
              </a>
              <p className="flex gap-3 leading-6">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-cyan-200"
                  aria-hidden="true"
                />
                <span>
                  {companyContact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="Linear Amptech home"
          >
            <span className="grid h-14 w-[96px] place-items-center">
              <Image
                src="/assets/linear-amptech-logo.png"
                alt="Linear Amptech logo"
                width={88}
                height={51}
                className="h-[52px] w-auto object-contain brightness-0 invert"
              />
            </span>
          </Link>
          <p className="text-sm text-slate-400">
            © {companyContact.legalName} {year}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
