import { useRef, useState, type SyntheticEvent } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Download } from "@hugeicons/core-free-icons"
import type { AssessmentResult } from "../api/gad"
import { useLanguageStore } from "@/stores/use-language.store"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ResultDocument } from "./result-document"
import { downloadResultPdf } from "../utils/download-result-pdf"

interface ConsentFormProps {
  assessmentResult: AssessmentResult
  userResponses: number[]
}

export function ConsentDialog(props: ConsentFormProps) {
  const lang = useLanguageStore((s) => s.language)
  const isEnglish = lang === "en"

  const [open, setOpen] = useState(false)
  const [name, setName] = useState<string>("")
  const [age, setAge] = useState<string>("")
  const [agreement, setAgreement] = useState<boolean>(false)
  const [isExporting, setIsExporting] = useState(false)

  const captureRef = useRef<HTMLDivElement>(null)
  const resultIdRef = useRef<string>(crypto.randomUUID().slice(0, 8))

  const ageNum = Number(age)
  const isValid =
    name.trim().length > 0 && age !== "" && ageNum > 0 && agreement

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    if (!isValid || isExporting) return

    setIsExporting(true)
    try {
      if (captureRef.current) {
        await downloadResultPdf(
          captureRef.current,
          `gad7-result-${resultIdRef.current}.pdf`
        )
      }
      setOpen(false)
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (isExporting) return
          setOpen(next)
        }}
      >
        <DialogTrigger asChild>
          <Button
            size="lg"
            variant="outline"
            className="flex items-center gap-2"
          >
            {isEnglish ? "Save screening result" : "Simpan hasil skrining"}
            <HugeiconsIcon icon={Download} className="h-5 w-5" />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEnglish ? "Save screening result" : "Simpan hasil skrining"}
            </DialogTitle>
          </DialogHeader>
          <div>
            <form id="consent-form" onSubmit={handleSubmit}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">
                    {isEnglish ? "Name or nickname" : "Nama atau nama samaran"}
                  </FieldLabel>
                  <Input
                    id="name"
                    autoComplete="off"
                    placeholder="Evil Rabbit"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    disabled={isExporting}
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="age">
                    {isEnglish ? "Age" : "Umur"}
                  </FieldLabel>
                  <Input
                    id="age"
                    autoComplete="off"
                    value={age}
                    inputMode="decimal"
                    onChange={(e) => setAge(e.target.value)}
                    disabled={isExporting}
                  />
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="agreement"
                    checked={agreement}
                    onCheckedChange={(checked) =>
                      setAgreement(checked === true)
                    }
                    disabled={isExporting}
                  />
                  <FieldLabel htmlFor="agreement">
                    {isEnglish
                      ? "I confirm I will not use this screening result for any malicious act, and understand it is not a clinical diagnosis."
                      : "Saya menyatakan tidak akan menggunakan hasil skrining ini untuk tindakan yang merugikan, dan memahami bahwa ini bukan merupakan diagnosis klinis."}
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </form>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" size="lg" disabled={isExporting}>
                {isEnglish ? "Cancel" : "Batalkan"}
              </Button>
            </DialogClose>
            <Button
              size="lg"
              form="consent-form"
              disabled={!isValid || isExporting}
            >
              {isExporting
                ? isEnglish
                  ? "Generating..."
                  : "Membuat PDF..."
                : isEnglish
                  ? "Save as PDF"
                  : "Simpan sebagai PDF"}
              <HugeiconsIcon icon={Download} className="h-5 w-5" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="sr-only">
        <ResultDocument
          ref={captureRef}
          respondent={{ name: name.trim() || "-", age: ageNum || 0 }}
          result={props.assessmentResult}
          answers={props.userResponses}
          generatedAt={new Date()}
          locale={lang}
        />
      </div>
    </>
  )
}
