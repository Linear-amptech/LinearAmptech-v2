import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Linear Amptech | Semiconductor, RF, Analog and Mixed-Signal R&D",
  description:
    "Linear Amptech designs advanced semiconductor, RF, analog, and mixed-signal technologies for next-generation communication, aerospace, industrial, and intelligent systems.",
  keywords: [
    "Linear Amptech",
    "semiconductor chip design",
    "RF design",
    "analog IC design",
    "mixed-signal IC",
    "ASIC prototyping",
    "semiconductor R&D",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#03060d] text-slate-100">
        {children}
      </body>
    </html>
  );
}
