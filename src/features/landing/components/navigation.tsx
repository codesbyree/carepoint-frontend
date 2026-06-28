import { Languages } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import LanguageSwitcher from "@/components/shared/language-switcher"

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto grid w-full max-w-380 grid-cols-2 gap-2.5 p-6 py-6 md:px-8 xl:px-16 2xl:px-0">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-teal-900">
            Nusa Putra University
          </p>

          <nav>
            <ul className="flex items-center gap-6 pr-8">
              <li>
                <a
                  href="#s"
                  className={cn(buttonVariants({ variant: "ghost" }))}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#featured-screenings-section"
                  className={cn(buttonVariants({ variant: "ghost" }))}
                >
                  Featured Screening
                </a>
              </li>
              <li>
                <a
                  href="#screenings-section"
                  className={cn(buttonVariants({ variant: "ghost" }))}
                >
                  Screenings
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-end gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
