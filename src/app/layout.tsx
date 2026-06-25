import type { Metadata } from "next";
import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Linear-AmpTech | RF Front-End Semiconductor Technologies",
  description:
    "Linear-AmpTech develops GaN power amplifier modules, CMOS/BiCMOS RFICs, mm-wave transceivers, active antennas, packaging, and validation solutions.",
  keywords: [
    "Linear-AmpTech",
    "RF front-end technologies",
    "GaN power amplifier modules",
    "CMOS RFIC",
    "BiCMOS RFIC",
    "mm-wave transceivers",
    "phased arrays",
    "semiconductor R&D",
  ],
};

const themeBootstrap = `
(() => {
  try {
    const savedTheme = localStorage.getItem("linearamptech-theme");
    const theme = savedTheme || "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
