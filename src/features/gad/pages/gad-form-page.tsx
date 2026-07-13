import { useRef } from "react"
import { useBlocker, useNavigate } from "react-router-dom"
import { useShallow } from "zustand/shallow"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { ScreeningHeader } from "@/components/shared/screening-header"
import { useGADForm } from "../stores/gad-form.store"
import { Button } from "@/components/ui/button"
import { useLanguageStore } from "@/stores/use-language.store"
import { cn } from "@/lib/utils"

const DICTIONARY = {
  en: {
    questions: [
      "How often have you been feeling nervous, anxious, or on edge?",
      "Not being able to stop or control worrying?",
      "Worrying too much about different things?",
      "Trouble relaxing?",
      "Being so restless that it is hard to sit still?",
      "Becoming easily annoyed or irritable?",
      "Feeling afraid as if something awful might happen?",
    ],
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
    ui: {
      stepPrefix: "Question",
      stepSuffix: "of",
      timeframe: "In the past two weeks,",
      btnPrev: "Previous question",
      btnNext: "Next question",
      btnSubmit: "See my result",
      alertTitle: "Are you absolutely sure?",
      alertDesc:
        "You have unsaved changes. Leaving this page will discard them permanently.",
      alertCancel: "Stay on page",
      alertAction: "Discard & leave",
    },
  },
  id: {
    questions: [
      "Seberapa sering Anda merasa gugup, cemas, atau tegang?",
      "Tidak mampu menghentikan atau mengendalikan kekhawatiran?",
      "Terlalu mengkhawatirkan berbagai macam hal?",
      "Kesulitan untuk bersantai?",
      "Merasa sangat gelisah sehingga sulit untuk duduk diam?",
      "Menjadi mudah jengkel atau marah?",
      "Merasa takut seolah-olah sesuatu yang buruk mungkin terjadi?",
    ],
    options: [
      "Tidak sama sekali",
      "Beberapa hari",
      "Lebih dari separuh waktu",
      "Hampir setiap hari",
    ],
    ui: {
      stepPrefix: "Pertanyaan",
      stepSuffix: "dari",
      timeframe: "Dalam dua minggu terakhir,",
      btnPrev: "Pertanyaan sebelumnya",
      btnNext: "Pertanyaan selanjutnya",
      btnSubmit: "Lihat hasil saya",
      alertTitle: "Apakah Anda benar-benar yakin?",
      alertDesc:
        "Anda memiliki perubahan yang belum disimpan. Meninggalkan halaman ini akan menghapusnya secara permanen.",
      alertCancel: "Tetap di halaman",
      alertAction: "Buang & tinggalkan",
    },
  },
}

export function GADFormPage() {
  const lang = useLanguageStore((s) => s.language)
  const isEnglish = lang === "en"
  const content = isEnglish ? DICTIONARY.en : DICTIONARY.id

  const navigate = useNavigate()

  const isSubmittingRef = useRef(false)

  const {
    currentQuestion,
    q1,
    q2,
    q3,
    q4,
    q5,
    q6,
    q7,
    setQ1,
    setQ2,
    setQ3,
    setQ4,
    setQ5,
    setQ6,
    setQ7,
    setCurrentQuestion,
    clearForm,
  } = useGADForm(
    useShallow((s) => ({
      currentQuestion: s.currentQuestion,
      q1: s.q1,
      q2: s.q2,
      q3: s.q3,
      q4: s.q4,
      q5: s.q5,
      q6: s.q6,
      q7: s.q7,
      setQ1: s.setQ1,
      setQ2: s.setQ2,
      setQ3: s.setQ3,
      setQ4: s.setQ4,
      setQ5: s.setQ5,
      setQ6: s.setQ6,
      setQ7: s.setQ7,
      setCurrentQuestion: s.setCurrentQuestion,
      clearForm: s.clearForm,
    }))
  )

  const getCurrentValue = () => {
    switch (currentQuestion) {
      case 1:
        return q1
      case 2:
        return q2
      case 3:
        return q3
      case 4:
        return q4
      case 5:
        return q5
      case 6:
        return q6
      case 7:
        return q7
      default:
        return q1
    }
  }

  const handleOptionSelect = (value: number) => {
    switch (currentQuestion) {
      case 1:
        setQ1(value)
        break
      case 2:
        setQ2(value)
        break
      case 3:
        setQ3(value)
        break
      case 4:
        setQ4(value)
        break
      case 5:
        setQ5(value)
        break
      case 6:
        setQ6(value)
        break
      case 7:
        setQ7(value)
        break
    }
  }

  const isDirty =
    currentQuestion > 1 ||
    q1 > 0 ||
    q2 > 0 ||
    q3 > 0 ||
    q4 > 0 ||
    q5 > 0 ||
    q6 > 0 ||
    q7 > 0

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      isDirty &&
      !isSubmittingRef.current &&
      currentLocation.pathname !== nextLocation.pathname
  )

  const onProceed = () => {
    blocker.proceed?.()
    clearForm()
    setCurrentQuestion(1)
  }

  const handleNext = () => {
    if (currentQuestion < 7) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    const finalScores = { q1, q2, q3, q4, q5, q6, q7 }
    console.log("Submitting GAD-7 Scores:", finalScores)

    isSubmittingRef.current = true
    clearForm()
    navigate("/screening/gad/result", { replace: true })
  }

  const currentQuestionIndex = currentQuestion - 1
  const selectedValue = getCurrentValue()

  const currentOptions = [
    { label: content.options[0], value: 0 },
    { label: content.options[1], value: 1 },
    { label: content.options[2], value: 2 },
    { label: content.options[3], value: 3 },
  ]

  return (
    <div className="min-h-dvh bg-olive-100">
      <ScreeningHeader customUrl="/screening/gad" />

      <main className="mx-auto flex max-w-md flex-col items-center p-6 pt-20">
        <div className="mb-6 text-center">
          <p className="mb-2 text-sm text-teal-700">
            {content.ui.stepPrefix} {currentQuestion} {content.ui.stepSuffix} 7
          </p>
          <div className="mx-auto h-0.5 w-8 rounded-full bg-teal-700" />
        </div>

        <div className="mb-10 text-center">
          <p className="mb-2 text-sm text-olive-600 italic">
            {content.ui.timeframe}
          </p>
          <h1 className="text-xl leading-tight font-bold text-teal-900">
            {content.questions[currentQuestionIndex]}
          </h1>
        </div>

        <div className="mb-12 w-full space-y-2">
          {currentOptions.map((option) => {
            const isSelected = selectedValue === option.value
            return (
              <label
                key={option.value}
                className={cn(
                  "flex cursor-pointer items-center rounded-2xl border bg-white p-4 text-teal-900 transition-colors",
                  isSelected ? "border-teal-700" : "border-border"
                )}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option.value}
                  checked={isSelected}
                  onChange={() => handleOptionSelect(option.value)}
                  className="hidden"
                />
                <div
                  className={`mr-4 flex h-4.5 w-4.5 items-center justify-center rounded-full border ${
                    isSelected ? "border-teal-700" : "border-gray-200"
                  }`}
                >
                  {isSelected && (
                    <div className="h-2 w-2 rounded-full bg-teal-800" />
                  )}
                </div>
                <span className="text-base font-semibold">{option.label}</span>
              </label>
            )
          })}
        </div>

        <div className="flex w-full justify-center gap-2">
          {currentQuestion > 1 && (
            <Button variant="outline" onClick={handlePrev} size="lg">
              {content.ui.btnPrev}
            </Button>
          )}

          {currentQuestion < 7 ? (
            <Button variant="outline" onClick={handleNext} size="lg">
              {content.ui.btnNext}
            </Button>
          ) : (
            <Button onClick={handleSubmit} size="lg">
              {content.ui.btnSubmit}
            </Button>
          )}
        </div>
      </main>

      <AlertDialog open={blocker.state === "blocked"}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{content.ui.alertTitle}</AlertDialogTitle>
            <AlertDialogDescription className="text-base">
              {content.ui.alertDesc}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => blocker.reset?.()}>
              {content.ui.alertCancel}
            </AlertDialogCancel>
            <AlertDialogAction onClick={onProceed}>
              {content.ui.alertAction}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
