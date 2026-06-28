import { Languages } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 z-50 hidden w-full">
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
              <a
                href="#screenings-section"
                className={cn(buttonVariants({ variant: "ghost" }))}
              >
                Screenings
              </a>
            </ul>
          </nav>
        </div>

        <div className="flex justify-end gap-4">
          <Button variant="outline">
            <HugeiconsIcon icon={Languages} className="h-4.5 w-4.5" />
            Eng
          </Button>
        </div>
      </div>
    </header>
  )
}
