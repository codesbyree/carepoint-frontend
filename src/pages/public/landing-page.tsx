import {
  HeroSection,
  CtaSection,
  StepsSection,
  ScreeningsSection,
  FeaturedScreeningSection,
  Navigation,
} from "@/features/landing/components"
import { FooterSection } from "@/features/landing/components/footer-section"

export function LandingPage() {
  return (
    <div>
      <Navigation />

      <main>
        <HeroSection />
        <FeaturedScreeningSection />
        <ScreeningsSection />
        <StepsSection />
        <CtaSection />
      </main>

      <FooterSection />
    </div>
  )
}
