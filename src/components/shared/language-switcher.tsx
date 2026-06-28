import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button"

import { useLanguageStore } from "@/stores/use-language.store"
import { HugeiconsIcon } from "@hugeicons/react"
import { Languages } from "@hugeicons/core-free-icons"
import { useShallow } from "zustand/shallow"

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguageStore(
    useShallow((s) => ({
      language: s.language,
      changeLanguage: s.changeLanguage,
    }))
  )
  const isEnglish = language === "en"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <HugeiconsIcon icon={Languages} className="h-4.5 w-4.5" />
          {isEnglish ? "English" : "Indonesia"}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            {!isEnglish ? "Select a language" : "Pilih bahasa"}
          </DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={isEnglish}
            onCheckedChange={() => changeLanguage("en")}
          >
            {!isEnglish ? "English" : "Bahasa Inggris"}
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={!isEnglish}
            onCheckedChange={() => changeLanguage("id")}
          >
            {!isEnglish ? "Indonesian" : "Bahasa Indonesia"}
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
