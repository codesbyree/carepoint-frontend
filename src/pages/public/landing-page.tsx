import {
  HeroSection,
  CtaSection,
  StepsSection,
  ScreeningsSection,
  FeaturedScreeningSection,
  Navigation,
  AboutSection,
  FAQSection,
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
        <FAQSection />
        <CtaSection />
      </main>

      <FooterSection />
    </div>
  )
}
