import {
  HeroSection,
  CTASection,
  StepSection,
  ScreeningsSection,
  GADSection,
  Navigation,
} from "@/features/landing/components"
import { FooterSection } from "@/features/landing/components/footer-section"

export function LandingPage() {
  return (
    <>
      <Navigation />

      <main>
        <HeroSection />
        <GADSection />
        <ScreeningsSection />
        <StepSection />
        <CTASection />
      </main>

      <FooterSection />
    </>
  )
}
