import { LandingContentSections } from "@/components/landing/landing-content-sections";
import { LandingHeroSlider } from "@/components/landing/landing-hero-slider";

export default function LinearAmptechLanding() {
  return (
    <main className="overflow-hidden bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <LandingHeroSlider />
      <LandingContentSections />
    </main>
  );
}
