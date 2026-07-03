import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
  SectionHeaderLabel,
} from "./section-header"
import { SectionSafeWrapper } from "./section-safe-wrapper"
import { useLanguageStore } from "@/stores/use-language.store"
import { cn } from "@/lib/utils"

export function FeaturedScreeningSection() {
  const language = useLanguageStore((s) => s.language)
  const isEnglish = language === "en"

  return (
    <section id="featured-screening" className="bg-olive-100">
      <SectionSafeWrapper className="flex flex-col gap-12">
        <SectionHeader>
          <SectionHeaderLabel>
            {isEnglish ? "FEATURED SCREENING" : "Skrining Utama"}
          </SectionHeaderLabel>
          <SectionHeaderHeading>
            {isEnglish
              ? "Start with anxiety-the GAD-7"
              : "Mulai dengan kecemasan—GAD-7"}
          </SectionHeaderHeading>
          <SectionHeaderDescription
            className={cn("xl:max-w-170", !isEnglish && "xl:max-w-190")}
          >
            {isEnglish
              ? "The Generalized Anxiety Disorder 7-item scale (GAD-7) is one of the most widely used screening tools in the world. It helps you understand whether what you’re feeling might be anxiety, and how much it’s affecting your daily life."
              : "Generalized Anxiety Disorder 7-item scale (GAD-7) is salah satu alat skrining yang paling banyak digunakan di dunia. Alat ini membantu Anda memahami apakah apa yang Anda rasakan kemungkinan merupakan kecemasan, dan seberapa besar pengaruhnya terhadap kehidupan Anda sehari-hari."}
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 rounded-xl border border-border bg-white p-5 shadow-xl">
          <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
              <p className="text-xl font-semibold text-teal-900 md:text-2xl xl:text-3xl">
                7
              </p>
              <p className="text-sm text-teal-600">
                {isEnglish ? "Questions only" : "Hanya 7 pertanyaan"}
              </p>
            </li>

            <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
              <p className="text-xl font-semibold text-teal-900 md:text-2xl xl:text-3xl">
                {isEnglish ? "~3 min" : "~3 menit"}
              </p>
              <p className="text-sm text-teal-600">
                {isEnglish ? "To complete" : "Waktu pengerjaan"}
              </p>
            </li>

            <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
              <p className="text-xl font-semibold text-teal-900 md:text-2xl xl:text-3xl">
                {isEnglish ? "Free" : "Gratis"}
              </p>
              <p className="text-sm text-teal-600">
                {isEnglish ? "No cost, ever" : "Tanpa biaya, selamanya"}
              </p>
            </li>

            <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
              <p className="text-xl font-semibold text-teal-900 md:text-2xl xl:text-3xl">
                {isEnglish ? "Instant" : "Instan"}
              </p>
              <p className="text-sm text-teal-600">
                {isEnglish ? "Results & guidance" : "Hasil & panduan langsung"}
              </p>
            </li>
          </ul>

          <p className="text-olive-600">
            {isEnglish
              ? "After completing the GAD-7, you’ll receive a score with a plain-language explanation and if needed, a recommendation to speak with one of our campus psychologist."
              : "Setelah menyelesaikan GAD-7, Anda akan menerima skor beserta penjelasan yang mudah dipahami dan, jika diperlukan, rekomendasi untuk berbicara dengan salah satu psikolog kampus kami."}
          </p>

          <Button variant="outline" className="w-max">
            {isEnglish ? "Take the GAD-7 now" : "Mulai GAD-7 sekarang"}
            <HugeiconsIcon icon={ArrowRight02Icon} className="h-5 w-5" />
          </Button>
        </div>
      </SectionSafeWrapper>
    </section>
  )
}
