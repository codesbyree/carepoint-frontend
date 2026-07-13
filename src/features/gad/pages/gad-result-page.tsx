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
import { Button, buttonVariants } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Call, Download } from "@hugeicons/core-free-icons"
import { getSeverityDetails } from "../utils/gad.utils"

// Helper to determine severity colors and clinically accurate descriptions based on GAD-7 thresholds

export function GADResultPage() {
  const lang = useLanguageStore((s) => s.language)
  const isEnglish = lang === "en"

  // Assuming a score variable here. You would typically pass this via props or state.
  const score = 4
  const severity = getSeverityDetails(score)

  const titleText = isEnglish
    ? "Generalized Anxiety Disorder Screening Score"
    : "Skor Skrining Gangguan Kecemasan Umum (GAD)"

  return (
    <div className="min-h-dvh bg-olive-100">
      <ScreeningHeader />

      <main className="flex flex-col items-center gap-5 p-6 pt-20">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-teal-900">
              {titleText}
            </CardTitle>
            <CardDescription className="sr-only">{titleText}</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <div className={cn("rounded-lg border p-2", severity.bgClass)}>
              <p className={cn("text-3xl font-semibold", severity.textClass)}>
                {score}/21
              </p>
              <p className={severity.subTextClass}>
                {isEnglish ? severity.labelEn : severity.labelId}
              </p>
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
