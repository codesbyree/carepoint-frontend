import { useLanguageStore } from "@/stores/use-language.store"
import {
  SectionHeaderDescription,
  SectionHeader,
  SectionHeaderHeading,
  SectionHeaderLabel,
} from "./section-header"
import { SectionSafeWrapper } from "./section-safe-wrapper"
import { Badge } from "@/components/ui/badge"

import DekoDesktop from "@/assets/landing/tools section deco desktop.svg"

import AnxietyCover from '@/assets/landing/anxiety cover.jpg'
import DepressionCover from '@/assets/landing/anxiety cover.jpg'
import StressCover from '@/assets/landing/anxiety cover.jpg'
import AnxietyCover from '@/assets/landing/anxiety cover.jpg'
import AnxietyCover from '@/assets/landing/anxiety cover.jpg'
import AnxietyCover from '@/assets/landing/anxiety cover.jpg'



const screenings = {
  id: [
    {
      status: "Aktif sekarang",
      title: "GAD-7",
      description: "Skrining kecemasan umum. 7 Pertanyaan.",
    },
    {
      status: "Segera hadir",
      title: "PHQ-9",
      description: "Skrining gejala depresi.",
    },
    {
      status: "Segera hadir",
      title: "PSS-10",
      description: "Pemeriksaan tingkat stres yang dirasakan.",
    },
    {
      status: "Segera hadir",
      title: "WHO-5",
      description: "Indeks kesejahteraan keseluruhan.",
    },
    {
      status: "Segera hadir",
      title: "PSQI",
      description: "Penilaian kualitas tidur.",
    },
    {
      status: "Segera hadir",
      title: "MBI Student",
      description: "Pemeriksaan burnout akademik.",
    },
  ],
  en: [
    {
      status: "Live now",
      title: "GAD-7",
      description: "Generalized anxiety screening. 7 Questions.",
    },
    {
      status: "Coming soon",
      title: "PHQ-9",
      description: "Depression symptom screening.",
    },
    {
      status: "Coming soon",
      title: "PSS-10",
      description: "Perceived stress levels check.",
    },
    {
      status: "Coming soon",
      title: "WHO-5",
      description: "Overall wellbeing index.",
    },
    {
      status: "Coming soon",
      title: "PSQI",
      description: "Sleep quality assessment.",
    },
    {
      status: "Coming soon",
      title: "MBI Student",
      description: "Academic burnout check.",
    },
  ],
}

export function ScreeningsSection() {
  const language = useLanguageStore((s) => s.language)

  const screeningCards = screenings[language]

  return (
    <section id="gad-section" className="bg-olive-100">
      <SectionSafeWrapper className="relative flex flex-col gap-12">
        <SectionHeader className="relative z-10">
          <SectionHeaderLabel>All Screening Tools</SectionHeaderLabel>
          <SectionHeaderHeading>More tools coming soon</SectionHeaderHeading>
          <SectionHeaderDescription className="xl:max-w-95">
            We’re rolling out validated screenings gradually. GAD-7 is live now
            - the rest are on the way.
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="relative z-10 grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {screeningCards.map((s) => (
            <article key={s.title}>
              <Badge>{s.status}</Badge>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 h-full w-full">
          <img
            src={DekoDesktop}
            className="h-full w-full object-contain object-bottom"
            alt=""
          />
        </div>
      </SectionSafeWrapper>
    </section>
  )
}
