import { HomeHashScroll } from "@/components/landing/home-hash-scroll";
import { LandingContentSections } from "@/components/landing/landing-content-sections";
import { LandingHeroSlider } from "@/components/landing/landing-hero-slider";

export default function LinearAmptechLanding() {
  return (
    <main className="overflow-x-clip bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <HomeHashScroll />
      <LandingHeroSlider />
      <LandingContentSections />
    </main>
  );
}
