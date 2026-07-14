import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

import { useLanguageStore } from "@/stores/use-language.store"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button, buttonVariants } from "@/components/ui/button"

export function RetakeDialogConfirmation() {
  const lang = useLanguageStore((s) => s.language)
  const isEnglish = lang === "en"

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="lg">{isEnglish ? "Retake test" : "Ulangi tes"}</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-base">
            {isEnglish
              ? "Are you sure you want to retake the test?"
              : "Apakah Anda yakin ingin mengulangi tes ini?"}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            {isEnglish
              ? "Your previous test results will be lost. Do you want to proceed?"
              : "Hasil tes Anda sebelumnya akan hilang. Apakah Anda ingin melanjutkan?"}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button size="lg" variant="outline">
              {isEnglish ? "Cancel" : "Batal"}
            </Button>
          </AlertDialogCancel>

          <Link
            to="/screening/gad/form"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            {isEnglish ? "Retake test" : "Ulangi tes"}
          </Link>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
