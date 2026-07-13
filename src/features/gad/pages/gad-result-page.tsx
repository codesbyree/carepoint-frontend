import { Link, useLocation, useNavigate } from "react-router-dom"
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
import { Button, buttonVariants } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Call, Download } from "@hugeicons/core-free-icons"
import { getSeverityDetails } from "../utils/gad.utils"
import type { AssessmentResult } from "../api/gad"

export function GADResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const result = location.state?.result as AssessmentResult | undefined

  const lang = useLanguageStore((s) => s.language)
  const isEnglish = lang === "en"

  if (!result) {
    navigate("/screening/gad", { replace: true })
    return null
  }

  const severity = getSeverityDetails(result.ml_predicted_severity)

  const titleText = isEnglish
    ? "Generalized Anxiety Disorder Screening Score"
    : "Skor Skrining Gangguan Kecemasan Umum (GAD)"

  return (
    <div className="min-h-dvh bg-olive-100">
      <ScreeningHeader customUrl="/screening/gad" />

      <main className="flex flex-col items-center gap-5 p-6 pt-20">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-teal-900">
              {titleText}
            </CardTitle>
            <CardDescription className="sr-only">{titleText}</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              <div className={cn("rounded-lg border p-2", severity.bgClass)}>
                <p className={severity.subTextClass}>
                  {isEnglish
                    ? "Machine learning prediction"
                    : "Prediksi machine learning"}
                </p>
                <p className={cn("text-2xl font-semibold", severity.textClass)}>
                  {isEnglish ? severity.labelEn : severity.labelId}
                </p>
              </div>

              <div className={cn("rounded-lg border p-2", severity.bgClass)}>
                <p className={severity.subTextClass}>
                  {isEnglish
                    ? "Machine Learning confidence"
                    : "Tingkat kepercayaan prediksi"}
                </p>
                <p className={cn("text-2xl font-semibold", severity.textClass)}>
                  {(result.ml_confidence * 100).toFixed(0)}%
                </p>
              </div>

              <div
                className={cn(
                  "col-span-2 rounded-lg border p-2",
                  severity.bgClass
                )}
              >
                <p className={severity.subTextClass}>
                  {isEnglish ? "GAD-7 Score" : "Skor GAD-7"}
                </p>
                <p className={cn("text-3xl font-semibold", severity.textClass)}>
                  {result.total_score}
                </p>
              </div>
            </div>

            <p className="text-base text-olive-600">
              {isEnglish ? severity.mainTextEn : severity.mainTextId}
            </p>
            <p className="text-base text-olive-600">
              {isEnglish ? severity.subTextEn : severity.subTextId}
            </p>

            <Alert className="mt-2 text-base">
              <HugeiconsIcon icon={Call} className="h-5 w-5" />

              <AlertTitle className="mb-0">
                {isEnglish ? "Book a consultation" : "Jadwalkan konsultasi"}
              </AlertTitle>
              <AlertDescription>
                <p className="mt-1 flex-1">
                  {isEnglish
                    ? "A session with one of our campus psychologists can help you understand what you're experiencing and explore options."
                    : "Sesi dengan salah satu psikolog kampus kami dapat membantu Anda memahami apa yang sedang Anda rasakan dan mengeksplorasi berbagai pilihan yang ada."}
                </p>

                <a
                  href="https://wa.me/6282215057531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "mt-4 flex w-max items-center gap-2"
                  )}
                >
                  <HugeiconsIcon icon={Call} className="h-4 w-4" />
                  {isEnglish ? "Consult now" : "Konsultasi sekarang"}
                </a>
              </AlertDescription>
            </Alert>
          </CardContent>

          <CardFooter className="flex flex-wrap justify-end gap-2">
            <Button
              size="lg"
              variant="outline"
              className="flex items-center gap-2"
            >
              {isEnglish ? "Save screening result" : "Simpan hasil skrining"}
              <HugeiconsIcon icon={Download} className="h-5 w-5" />
            </Button>

            <Link
              to="/screening/gad/form"
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              {isEnglish ? "Retake test" : "Ulangi tes"}
            </Link>
          </CardFooter>
        </Card>

        <span className="block text-center text-sm text-olive-600">
          {isEnglish ? (
            <>
              Your results can be saved privately to your device. <br />
              We do not save or share your results with your faculty or
              university.
            </>
          ) : (
            <>
              Hasil ini dapat disimpan secara privat di perangkat Anda. <br />
              Kami tidak menyimpan atau membagikan hasil Anda kepada fakultas
              atau pihak kampus.
            </>
          )}
        </span>
      </main>
    </div>
  )
}
