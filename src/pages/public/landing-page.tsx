import {
  HeroSection,
  CtaSection,
  StepsSection,
  ScreeningsSection,
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
        <StepsSection />
        <ScreeningsSection />
        <FAQSection />
        <CtaSection />
      </main>

      <FooterSection />
    </div>
  )
}
