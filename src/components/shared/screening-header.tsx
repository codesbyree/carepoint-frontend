import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons"
import { useNavigate } from "react-router-dom"

import { Button } from "../ui/button"
import { LanguageSwitcher } from "./language-switcher"

interface Props {
  customUrl?: string
}

export function ScreeningHeader(props: Props) {
  const navigate = useNavigate()

  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="mx-auto flex h-16 w-full max-w-380 items-center justify-between gap-2.5 px-6 md:px-8">
        <Button
          variant="ghost"
          onClick={() =>
            props.customUrl ? navigate(props.customUrl) : navigate(-1)
          }
        >
          <HugeiconsIcon icon={ArrowLeft02Icon} className="w-4 shrink-0" />
          Back
        </Button>

        <LanguageSwitcher />
      </div>
    </header>
  )
}
