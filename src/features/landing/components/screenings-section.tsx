import { useLanguageStore } from "@/stores/use-language.store"
import {
  SectionHeaderDescription,
  SectionHeader,
  SectionHeaderHeading,
  SectionHeaderLabel,
} from "./section-header"
import { SectionSafeWrapper } from "./section-safe-wrapper"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"

import DekoDesktop from "@/assets/landing/tools section deco desktop.svg"
import AnxietyCover from "@/assets/landing/anxiety cover.jpg"
import DepressionCover from "@/assets/landing/depression cover.jpg"
import StressCover from "@/assets/landing/stress cover.jpg"
import WHOCover from "@/assets/landing/wellbeing cover.jpg"
import PSQICover from "@/assets/landing/sleep cover.jpg"
import MBICover from "@/assets/landing/burnout cover.jpg"
import { Button } from "@/components/ui/button"

const screenings = {
  id: [
    {
      status: "Aktif sekarang",
      title: "GAD-7",
      description: "Skrining kecemasan umum. 7 Pertanyaan.",
      image: AnxietyCover,
      active: true,
    },
    {
      status: "Segera hadir",
      title: "PHQ-9",
      description: "Skrining gejala depresi.",
      image: DepressionCover,
      active: false,
    },
    {
      status: "Segera hadir",
      title: "PSS-10",
      description: "Pemeriksaan tingkat stres yang dirasakan.",
      image: StressCover,
      active: false,
    },
    {
      status: "Segera hadir",
      title: "WHO-5",
      description: "Indeks kesejahteraan keseluruhan.",
      image: WHOCover,
      active: false,
    },
    {
      status: "Segera hadir",
      title: "PSQI",
      description: "Penilaian kualitas tidur.",
      image: PSQICover,
      active: false,
    },
    {
      status: "Segera hadir",
      title: "MBI Student",
      description: "Pemeriksaan burnout akademik.",
      image: MBICover,
      active: false,
    },
  ],
  en: [
    {
      status: "Live now",
      title: "GAD-7",
      description: "Generalized anxiety screening. 7 Questions.",
      image: AnxietyCover,
      active: true,
    },
    {
      status: "Coming soon",
      title: "PHQ-9",
      description: "Depression symptom screening.",
      image: DepressionCover,
      active: false,
    },
    {
      status: "Coming soon",
      title: "PSS-10",
      description: "Perceived stress levels check.",
      image: StressCover,
      active: false,
    },
    {
      status: "Coming soon",
      title: "WHO-5",
      description: "Overall wellbeing index.",
      image: WHOCover,
      active: false,
    },
    {
      status: "Coming soon",
      title: "PSQI",
      description: "Sleep quality assessment.",
      image: PSQICover,
      active: false,
    },
    {
      status: "Coming soon",
      title: "MBI Student",
      description: "Academic burnout check.",
      image: MBICover,
      active: false,
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

        <div className="relative z-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {screeningCards.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-3xl shadow-sm"
            >
              <AspectRatio ratio={16 / 9} className="">
                <img
                  src={s.image}
                  alt=""
                  className="transition-transform group-hover:scale-105"
                />
              </AspectRatio>

              <div className="border-boder relative z-10 -mt-6 space-y-4 rounded-tl-2xl rounded-tr-2xl border bg-white p-5">
                <Badge variant={s.active ? "default" : "outline"}>
                  {s.status}
                </Badge>
                <h3 className="text-xl font-medium text-teal-900">{s.title}</h3>
                <p className="text-olive-600">{s.description}</p>

                <Button disabled={!s.active} variant="outline">
                  Take the test
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 h-full w-full">
          <img
            src={DekoDesktop}
            className="h-full w-full object-cover object-top"
            alt=""
          />
        </div>
      </SectionSafeWrapper>
    </section>
  )
}
