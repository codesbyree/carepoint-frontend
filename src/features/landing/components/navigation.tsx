import { cn } from "@/lib/utils"
import useBreakpoint from "@/hooks/use-breakpoint.hooks"

import { Button, buttonVariants } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/shared/language-switcher"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu02Icon } from "@hugeicons/core-free-icons"
import useScrollProgress from "@/hooks/use-scrollprogress.hooks"

const NAV_LINKS = [
  { href: "#s", label: "Home" },
  { href: "#featured-screenings-section", label: "Featured Screening" },
  { href: "#screenings-section", label: "Screenings" },
]

function NavLinks() {
  return (
    <ul className="flex items-center gap-6 pr-8">
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href}>
          <a href={href} className={cn(buttonVariants({ variant: "ghost" }))}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function Navigation() {
  const br = useBreakpoint()

  if (br !== "desktop") return <MobileNavigation />
  return <DesktopNavigation />
}

function DesktopNavigation() {
  const scrollProgress = useScrollProgress(100, [0, 1], 1)
  const scrolled = scrollProgress >= 1

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-300",
          scrolled && "-top-full"
        )}
      >
        <div className="mx-auto grid w-full max-w-380 grid-cols-2 gap-2.5 p-6 py-6 md:px-8 xl:px-16 2xl:px-0">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-teal-900">
              Nusa Putra University
            </p>
            <nav>
              <NavLinks />
            </nav>
          </div>
          <div className="flex justify-end gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <header
        className={cn(
          "fixed -top-full left-0 z-50 w-full bg-olive-50 transition-all duration-300",
          scrolled && "top-0"
        )}
      >
        <div className="relative mx-auto flex w-full max-w-380 items-center justify-between p-6 py-6 md:px-8 xl:px-16 2xl:px-0">
          <p className="text-lg font-semibold text-teal-900">
            Nusa Putra University
          </p>
          <nav className="absolute left-1/2 -translate-x-1/2">
            <NavLinks />
          </nav>
          <div className="flex justify-end gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </header>
    </>
  )
}

function MobileNavigation() {
  const scrollProgress = useScrollProgress(350, [0, 1], 1)

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full bg-olive-50"
      style={{ background: `rgba(251, 251, 249, ${scrollProgress})` }}
    >
      <div className="mx-auto flex w-full max-w-380 items-center justify-between gap-2.5 p-6 py-4 md:px-8">
        <p className="text-lg font-semibold text-teal-900">
          Nusa Putra University
        </p>

        <div className="flex justify-end gap-4">
          <Button size="icon-lg" variant="ghost">
            <HugeiconsIcon icon={Menu02Icon} />
          </Button>
        </div>
      </div>
    </header>
  )
}
