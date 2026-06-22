import { assets, metrics } from "@/components/landing/data";
import { Metric } from "@/components/landing/metric";
import { ParallaxImage } from "@/components/landing/parallax-image";
import { Reveal } from "@/components/landing/reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-shell border-y border-white/10 bg-[#07101d]/70"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal className="space-y-8">
          <p className="section-kicker">Company</p>
          <h2 className="section-title">
            Deep-tech company focused on RF circuit and system design.
          </h2>
          <p className="text-xl leading-9 text-slate-300">
            Linearised Amplifier Technology & Services Pvt. Ltd. is founded and
            driven by innovative minds from IIT Roorkee. The company targets
            cyber-physical system design with a focus on radio-frequency circuit
            and system design, spanning GaN MMICs, high-power modules,
            CMOS/BiCMOS RFIC IP cores, and silicon validation.
          </p>
          <div className="grid gap-3 sm:grid-cols-4">
            {metrics.map(([value, label], index) => (
              <Metric
                key={label}
                value={value}
                label={label}
                delay={index * 0.08}
              />
            ))}
          </div>
        </Reveal>
        <Reveal>
          <ParallaxImage
            src={assets.siliconWafer}
            alt="Blue silicon wafer used for Linear Amptech semiconductor research"
            className="min-h-[360px] lg:min-h-[520px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
