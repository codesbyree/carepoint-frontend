import { useLanguageStore } from "@/stores/use-language.store"
import {
  SectionHeader,
  SectionHeaderHeading,
  SectionHeaderLabel,
} from "./section-header"
import { SectionSafeWrapper } from "./section-safe-wrapper"

import StepOneBadge from "@/assets/landing/list item 1.svg"
import StepTwoBadge from "@/assets/landing/list item 2.svg"
import StepThreeBadge from "@/assets/landing/list item 3.svg"
import StepCover from "@/assets/landing/step cover desktop.jpg"

const content = {
  id: {
    label: "Cara Kerjanya",
    heading: "Tiga langkah mudah",
    steps: [
      {
        title: "Daftar atau masuk",
        description:
          "Buat akun mahasiswa Nusa Putra gratis kamu untuk menyimpan hasil dan melacak kesejahteraan kamu dari waktu ke waktu.",
      },
      {
        title: "Ikuti skrining",
        description:
          "Jawab serangkaian pertanyaan jujur dengan kecepatan kamu sendiri. Mulai dengan GAD-7 untuk kecemasan, atau pilih topik yang paling relevan untukmu.",
      },
      {
        title: "Dapatkan hasil & buat janji",
        description:
          "Lihat hasil instan kamu dan - jika kamu ingin mendiskusikannya - pesan sesi dengan salah satu psikolog kampus berlisensi kami hanya dalam beberapa klik.",
      },
    ],
  },
  en: {
    label: "How It Works",
    heading: "Three simple steps",
    steps: [
      {
        title: "Register or log in",
        description:
          "Create your free Nusa Putra student account to save your results and track your wellbeing over time.",
      },
      {
        title: "Take a screening",
        description:
          "Answer a short set of honest questions at your own pace. Start with the GAD-7 for anxiety, or pick the topic most relevant to you.",
      },
      {
        title: "Get results & book a support",
        description:
          "View your instant result and - if you'd like to talk it through - book a session with one of our licensed campus psychologists in just a few clicks.",
      },
    ],
  },
}

const stepBadges = [StepOneBadge, StepTwoBadge, StepThreeBadge]

export function StepsSection() {
  const language = useLanguageStore((s) => s.language)
  const t = content[language]

  return (
    <section id="how-it-works" className="bg-white">
      <SectionSafeWrapper className="grid grid-cols-1 gap-12 lg:grid-cols-2 xl:gap-17">
        <div className="row-start-2 w-full overflow-hidden xl:row-start-1">
          <img src={StepCover} alt="" className="h-full w-full object-cover" />
        </div>

        <div className="order-1 flex w-full flex-col gap-12 lg:order-2">
          <SectionHeader className="items-start">
            <SectionHeaderLabel>{t.label}</SectionHeaderLabel>
            <SectionHeaderHeading className="mb-0">
              {t.heading}
            </SectionHeaderHeading>
          </SectionHeader>

          <ol className="flex flex-col gap-7">
            {t.steps.map((step, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="shrink-0">
                  <img
                    src={stepBadges[index]!}
                    alt={String(index + 1)}
                    className="h-8 w-8 md:h-17 md:w-17"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-semibold text-teal-900">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-olive-600">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </SectionSafeWrapper>
    </section>
  )
}
