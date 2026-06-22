import type { Metadata } from "next";

import { ContactSection } from "@/components/landing/contact-section";

export const metadata: Metadata = {
  title: "Contact | Linear Amptech",
  description:
    "Contact Linear Amptech to discuss RF front-end components, GaN MMICs, RFIC IP cores, prototypes, and semiconductor R&D programs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#03060d] text-slate-100">
      <ContactSection />
    </main>
  );
}
