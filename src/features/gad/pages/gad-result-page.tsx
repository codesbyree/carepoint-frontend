import { motion } from "motion/react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Call } from "@hugeicons/core-free-icons"
import { useLocation, useNavigate } from "react-router-dom"

import {
  getSeverityDetailsByML,
  getSeverityDetailsByScore,
} from "../utils/gad.utils"
import { cn } from "@/lib/utils"
import type { AssessmentResult } from "../api/gad"
import { useLanguageStore } from "@/stores/use-language.store"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { ConsentDialog, RetakeDialogConfirmation } from "../components"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ScreeningHeader } from "@/components/shared/screening-header"

export function GADResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const result = location.state?.result as AssessmentResult | undefined
  const userResponses = location.state?.userResponses as number[] | undefined

  const lang = useLanguageStore((s) => s.language)
  const isEnglish = lang === "en"

  if (!result || !userResponses) {
    navigate("/screening/gad", { replace: true })
    return null
  }

  const severityByScore = getSeverityDetailsByScore(result.total_score)
  const severityByML = getSeverityDetailsByML(result.ml_predicted_severity)

  const titleText = isEnglish
    ? "Generalized Anxiety Disorder Screening Score"
    : "Skor Skrining Gangguan Kecemasan Umum (GAD)"

  return (
    <div className="min-h-dvh bg-olive-100">
      <ScreeningHeader customUrl="/screening/gad" />

      <main className="p-6 pt-20">
        <motion.div
          className="flex flex-col items-center gap-5"
          transition={{
            type: "spring",
            bounce: 0.1, // Adds that slight, subtle iOS-style tap bounce
            damping: 28, // Controls how fast the spring stops (prevents excessive wobble)
            stiffness: 300, // Controls the tension and speed
            mass: 1, // Default mass
          }}
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        >
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-teal-900">
                {titleText}
              </CardTitle>
              <CardDescription className="sr-only">{titleText}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-2">
                <div
                  className={cn("rounded-lg border p-2", severityByML.bgClass)}
                >
                  <p className={severityByML.subTextClass}>
                    {isEnglish
                      ? "Machine learning prediction"
                      : "Prediksi machine learning"}
                  </p>
                  <p
                    className={cn(
                      "text-lg font-semibold md:text-xl",
                      severityByML.textClass
                    )}
                  >
                    {isEnglish ? severityByML.labelEn : severityByML.labelId}
                  </p>
                </div>

                <div
                  className={cn("rounded-lg border p-2", severityByML.bgClass)}
                >
                  <p className={severityByML.subTextClass}>
                    {isEnglish
                      ? "Machine Learning confidence"
                      : "Tingkat kepercayaan prediksi"}
                  </p>
                  <p
                    className={cn(
                      "text-lg font-semibold md:text-xl",
                      severityByML.textClass
                    )}
                  >
                    {(result.ml_confidence * 100).toFixed(0)}%
                  </p>
                </div>

                <div
                  className={cn(
                    "rounded-lg border p-2",
                    severityByScore.bgClass
                  )}
                >
                  <p className={severityByScore.subTextClass}>
                    {isEnglish ? "GAD-7 Score" : "Skor GAD-7"}
                  </p>
                  <p
                    className={cn(
                      "text-lg font-semibold md:text-xl",
                      severityByScore.textClass
                    )}
                  >
                    {result.total_score}
                  </p>
                </div>

                <div
                  className={cn(
                    "rounded-lg border p-2",
                    severityByScore.bgClass
                  )}
                >
                  <p className={severityByScore.subTextClass}>
                    {isEnglish ? "Screening result" : "Hasil skrining"}
                  </p>
                  <p
                    className={cn(
                      "text-lg font-semibold md:text-xl",
                      severityByScore.textClass
                    )}
                  >
                    {isEnglish
                      ? severityByScore.labelEn
                      : severityByScore.labelId}
                  </p>
                </div>
              </div>

              <p className="text-base text-olive-600">
                {isEnglish
                  ? severityByScore.mainTextEn
                  : severityByScore.mainTextId}
              </p>
              <p className="text-base text-olive-600">
                {isEnglish
                  ? severityByScore.subTextEn
                  : severityByScore.subTextId}
              </p>

              <Alert
                className={cn(
                  "mt-2 hidden text-base",
                  ["Moderate", "Severe"].includes(result.rule_based_severity) &&
                    "grid"
                )}
              >
                <HugeiconsIcon icon={Call} className="h-5 w-5" />

                <AlertTitle className="mb-0">
                  {isEnglish ? "Book a consultation" : "Jadwalkan konsultasi"}
                </AlertTitle>
                <AlertDescription>
                  <p className="mt-1 flex-1">
                    <strong className="mb-1 block text-sm font-semibold text-red-600">
                      {isEnglish
                        ? "• Exclusive for Nusa Putra University students"
                        : "• Khusus untuk mahasiswa Universitas Nusa Putra"}
                    </strong>
                    {isEnglish
                      ? "A session with one of our campus psychologists can help you understand what you're experiencing and explore options."
                      : "Sesi bersama psikolog kampus dapat membantu Anda memahami diri dan menemukan solusi."}
                  </p>

                  <a
                    href="https://wa.me/6282215057531"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "mt-4 flex w-max items-center gap-2 no-underline!"
                    )}
                  >
                    <HugeiconsIcon icon={Call} className="h-4 w-4" />
                    {isEnglish
                      ? "Consult now (WhatsApp)"
                      : "Konsultasi sekarang (WhatsApp)"}
                  </a>
                </AlertDescription>
              </Alert>

              <Alert
                className={cn(
                  "hidden text-base",
                  result.rule_based_severity === "Severe" && "grid"
                )}
              >
                <HugeiconsIcon icon={Call} className="h-5 w-5" />

                <AlertTitle className="mb-0">
                  {isEnglish
                    ? "Indonesia National Mental Health Helpline"
                    : "Layanan Hotline Kesehatan Jiwa Nasional"}
                </AlertTitle>
                <AlertDescription>
                  <p className="mt-1 flex-1">
                    {isEnglish
                      ? "Access free, confidential psychological support provided by the government via hotline 119 ext. 8."
                      : "Layanan dukungan psikologis gratis dan rahasia dari pemerintah melalui hotline 119 ext. 8."}
                  </p>

                  <a
                    href="tel:119,8"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "mt-4 flex w-max items-center gap-2 no-underline!"
                    )}
                  >
                    <HugeiconsIcon icon={Call} className="h-4 w-4" />
                    {isEnglish
                      ? "Call now (Phone)"
                      : "Hubungi sekarang (Telp.)"}
                  </a>
                </AlertDescription>
              </Alert>
            </CardContent>

            <CardFooter className="flex flex-wrap justify-end gap-2">
              <ConsentDialog
                assessmentResult={result}
                userResponses={userResponses}
              />
              <RetakeDialogConfirmation />
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
        </motion.div>
      </main>
    </div>
  )
}
