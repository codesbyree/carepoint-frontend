import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useLanguageStore } from "@/stores/use-language.store"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScreeningHeader } from "@/components/shared/screening-header"
import { buttonVariants } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { AlertTriangle } from "@hugeicons/core-free-icons"

export function GADInfoPage() {
  const lang = useLanguageStore((s) => s.language)
  const isEnglish = lang === "en"

  const titleText = isEnglish
    ? "Generalized Anxiety Disorder Screening"
    : "Skrining Gangguan Kecemasan Umum (GAD)"

  return (
    <div className="min-h-dvh bg-olive-100">
      <ScreeningHeader customUrl="/" />

      <main className="flex justify-center p-6 pt-20">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-teal-900">
              {titleText}
            </CardTitle>
            <CardDescription className="sr-only">{titleText}</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <p className="text-base text-olive-600">
              {isEnglish
                ? "This short questionnaire helps you understand whether the worrying and nervousness you've been experiencing might be worth discussing with a mental health professional."
                : "Kuesioner singkat ini membantu Anda memahami apakah rasa cemas dan gugup yang Anda alami perlu didiskusikan lebih lanjut dengan profesional kesehatan mental."}
            </p>

            <p className="text-base text-olive-600">
              {isEnglish
                ? "There are no right or wrong answers. Just answer as honestly as you can based on how you've been feeling over the past two weeks."
                : "Tidak ada jawaban benar atau salah. Jawablah sejujur mungkin berdasarkan apa yang Anda rasakan selama dua minggu terakhir."}
            </p>

            <ul className="grid w-full grid-cols-2 gap-2">
              <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
                <p className="text-base font-semibold text-teal-900">7</p>
                <p className="text-xs text-teal-600">
                  {isEnglish ? "Questions only" : "Hanya 7 pertanyaan"}
                </p>
              </li>

              <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
                <p className="text-base font-semibold text-teal-900">
                  {isEnglish ? "~3 min" : "~3 menit"}
                </p>
                <p className="text-xs text-teal-600">
                  {isEnglish ? "To complete" : "Waktu pengerjaan"}
                </p>
              </li>

              <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
                <p className="text-base font-semibold text-teal-900">
                  {isEnglish ? "Free" : "Gratis"}
                </p>
                <p className="text-xs text-teal-600">
                  {isEnglish ? "No cost, ever" : "Tanpa biaya, selamanya"}
                </p>
              </li>

              <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
                <p className="text-base font-semibold text-teal-900">
                  {isEnglish ? "Instant" : "Instan"}
                </p>
                <p className="text-xs text-teal-600">
                  {isEnglish
                    ? "Results & guidance"
                    : "Hasil & panduan langsung"}
                </p>
              </li>
            </ul>

            <Alert className="border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
              <HugeiconsIcon icon={AlertTriangle} />
              <AlertTitle>
                {isEnglish ? "Important Notice" : "Pemberitahuan Penting"}
              </AlertTitle>
              <AlertDescription>
                {isEnglish
                  ? "This is a screening tool, not a diagnostic tool. Your score does not confirm or rule out any mental health condition. Only a licensed professional can provide a diagnosis."
                  : "Alat ini adalah sarana skrining, bukan alat diagnosis. Skor Anda tidak memastikan atau mengesampingkan kondisi kesehatan mental apa pun. Hanya profesional berlisensi yang dapat memberikan diagnosis."}
              </AlertDescription>
            </Alert>
          </CardContent>

          <CardFooter>
            <Link
              to="/screening/gad/form"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "ml-auto"
              )}
            >
              {isEnglish ? "Take the screening" : "Mulai skrining"}
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
