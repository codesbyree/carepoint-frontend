import { useLanguageStore } from "@/stores/use-language.store"
import { Button } from "@/components/ui/button"
import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
  SectionHeaderLabel,
} from "./section-header"
import { HugeiconsIcon } from "@hugeicons/react"
import { Call02Icon } from "@hugeicons/core-free-icons"

import CtaCoverDesktop from "@/assets/landing/cta cover desktop.webp"
import CtaCoverTablet from "@/assets/landing/cta cover tablet.webp"
import CtaCoverMobile from "@/assets/landing/cta cover mobile.webp"

const content = {
  id: {
    label: "Siap Memulai?",
    heading: "Kesejahteraanmu penting di sini.",
    description:
      "Baik kamu sedang kesulitan atau sekadar ingin tahu kondisimu - meluangkan lima menit untuk dirimu sendiri hari ini bisa membuat perbedaan nyata.",
    primaryCta: "Mulai skrining GAD-7",
    secondaryCta: "Buat janji",
  },
  en: {
    label: "Ready to Start?",
    heading: "Your wellbeing matters here.",
    description:
      "Whether you're struggling or just curious about how you're doing - taking five minutes for yourself today can make a real difference.",
    primaryCta: "Start GAD-7 screening",
    secondaryCta: "Book an appointment",
  },
}

export function CtaSection() {
  const language = useLanguageStore((s) => s.language)
  const t = content[language]

  return (
    <section className="px-4 py-12 md:px-8 lg:px-16">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-teal-800">
          <img
            className="hidden h-full w-full object-cover xl:block 2xl:w-[200%]"
            src={CtaCoverDesktop}
            alt=""
            aria-hidden="true"
          />
          <img
            className="hidden h-full w-full object-cover md:block xl:hidden"
            src={CtaCoverTablet}
            alt=""
            aria-hidden="true"
          />
          <img
            className="block h-full w-full object-cover md:hidden"
            src={CtaCoverMobile}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-16 text-center md:py-20 lg:py-24">
          <SectionHeader>
            <SectionHeaderLabel className="text-olive-50/70">
              {t.label}
            </SectionHeaderLabel>
            <SectionHeaderHeading className="text-olive-50">
              {t.heading}
            </SectionHeaderHeading>
            <SectionHeaderDescription className="max-w-100 text-olive-50/70">
              {t.description}
            </SectionHeaderDescription>
          </SectionHeader>

          <div className="mt-2 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="w-full bg-teal-700 text-white hover:bg-teal-600 sm:w-auto"
            >
              {t.primaryCta}
            </Button>

            <Button className="w-max px-5" size="lg" variant="outline">
              {t.secondaryCta}
              <HugeiconsIcon icon={Call02Icon} className="h-4.5 w-4.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
