import {
  HeroSection,
  CtaSection,
  StepsSection,
  ScreeningsSection,
  FeaturedScreeningSection,
  Navigation,
  AboutSection,
} from "@/features/landing/components"
import { FooterSection } from "@/features/landing/components/footer-section"

export function LandingPage() {
  return (
    <div>
      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedScreeningSection />
        <ScreeningsSection />
        <StepsSection />
        <CtaSection />
      </main>

      <FooterSection />
    </div>
  )
}
