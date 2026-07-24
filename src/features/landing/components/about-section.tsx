import { useLanguageStore } from "@/stores/use-language.store"
import { cn } from "@/lib/utils"

import { SectionSafeWrapper } from "./section-safe-wrapper"
import {
  SectionHeader,
  SectionHeaderHeading,
  SectionHeaderLabel,
  SectionHeaderDescription,
} from "./section-header"

export function AboutSection() {
  const language = useLanguageStore((s) => s.language)
  const isEnglish = language === "en"

  const tableHeaders = {
    feature: "",
    screening: isEnglish
      ? "Screening (This platform)"
      : "Skrining (Platform ini)",
    diagnosis: isEnglish ? "Clinical Diagnosis" : "Diagnosis Klinis",
  }

  const tableRows = [
    {
      feature: isEnglish ? "Who performs it" : "Siapa yang melakukan",
      screening: isEnglish ? "You, independently" : "Anda, secara mandiri",
      diagnosis: isEnglish
        ? "A licensed psychologist or psychiatrist"
        : "Psikolog atau psikiater berlisensi",
    },
    {
      feature: isEnglish ? "Time required" : "Waktu yang dibutuhkan",
      screening: isEnglish ? "3–10 minutes" : "3–10 menit",
      diagnosis: isEnglish
        ? "One or more clinical sessions"
        : "Satu atau lebih sesi klinis",
    },
    {
      feature: isEnglish ? "What it tells you" : "Apa yang diberitahukan",
      screening: isEnglish
        ? "Whether symptoms are present and how frequent"
        : "Apakah ada gejala dan seberapa sering",
      diagnosis: isEnglish
        ? "Whether a diagnosed condition is present"
        : "Apakah ada kondisi yang terdiagnosis",
    },
    {
      feature: isEnglish ? "Medical validity" : "Validitas medis",
      screening: isEnglish
        ? "Evidence-based indicator only"
        : "Hanya indikator berbasis bukti",
      diagnosis: isEnglish
        ? "Clinically confirmed conclusion"
        : "Kesimpulan yang dikonfirmasi secara klinis",
    },
    {
      feature: isEnglish ? "Next step" : "Langkah selanjutnya",
      screening: isEnglish
        ? "Consult a professional"
        : "Konsultasi dengan profesional",
      diagnosis: isEnglish
        ? "Treatment or intervention plan"
        : "Rencana perawatan atau intervensi",
    },
  ]

  return (
    <section id="about" className="bg-[#F1ECE6]">
      <SectionSafeWrapper className="flex flex-col gap-12">
        <SectionHeader>
          <SectionHeaderLabel>
            {isEnglish
              ? "Understanding This Platform"
              : "Memahami Platform Ini"}
          </SectionHeaderLabel>
          <SectionHeaderHeading>
            {isEnglish
              ? "What is mental health screening?"
              : "Apa itu skrining kesehatan mental?"}
          </SectionHeaderHeading>
          <SectionHeaderDescription
            className={cn("xl:max-w-170", !isEnglish && "xl:max-w-190")}
          >
            {isEnglish
              ? "Mental health screening is a quick, research-backed check-in that helps you track patterns in your thoughts and emotions. Much like a routine physical, it doesn't provide a formal diagnosis, but rather helps you decide if it's worth seeking professional guidance."
              : "Skrining kesehatan mental adalah pemeriksaan cepat berbasis riset yang membantu Anda melacak pola dalam pikiran dan emosi Anda. Sama seperti pemeriksaan fisik rutin, skrining ini tidak memberikan diagnosis formal, melainkan membantu Anda memutuskan apakah perlu mencari panduan profesional."}
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-border bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead>
                <tr className="border-b border-border">
                  <th className="w-1/4 p-4 font-semibold text-foreground">
                    {tableHeaders.feature}
                  </th>
                  <th className="w-3/8 p-4 font-semibold text-teal-800">
                    {tableHeaders.screening}
                  </th>
                  <th className="w-3/8 bg-teal-800/5 p-4 font-semibold text-teal-900 md:p-6">
                    {tableHeaders.diagnosis}
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, index) => (
                  <tr
                    key={index}
                    className={cn(
                      "text-muted-foreground",
                      index !== tableRows.length - 1 &&
                        "border-b border-border/60"
                    )}
                  >
                    <td className="p-4 font-medium text-foreground/80">
                      {row.feature}
                    </td>
                    <td className="p-4">{row.screening}</td>
                    <td className="bg-teal-800/5 p-4 text-foreground/70">
                      {row.diagnosis}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionSafeWrapper>
    </section>
  )
}
