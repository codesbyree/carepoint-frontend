import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu02Icon } from "@hugeicons/core-free-icons"

import useBreakpoint from "@/hooks/use-breakpoint.hooks"
import useScrollProgress from "@/hooks/use-scrollprogress.hooks"

import { Button, buttonVariants } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/shared/language-switcher"
import { useLanguageStore } from "@/stores/use-language.store"

const NAV_LINKS = [
  { href: "#", label: { id: "Beranda", en: "Home" } },
  { href: "#about", label: { id: "Tentang", en: "About" } },
  {
    href: "#featured-screening",
    label: { id: "Featured Screening", en: "Featured Screening" },
  },
  { href: "#screenings", label: { id: "Skrining", en: "Screenings" } },
  { href: "#faq", label: { id: "FAQ", en: "FAQ" } },
]

function NavLinks() {
  const language = useLanguageStore((s) => s.language)

  return (
    <ul className="flex items-center 2xl:gap-4 2xl:pr-8">
      {NAV_LINKS.map(({ href, label }) => (
        <li key={href}>
          <a href={href} className={cn(buttonVariants({ variant: "ghost" }))}>
            {label[language]}
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
        <div className="relative mx-auto grid w-full max-w-380 grid-cols-2 gap-2.5 p-6 py-6 md:px-8 xl:px-16 2xl:px-0">
          <div className="flex w-full items-center justify-between xl:gap-0">
            <p className="font-semibold text-nowrap text-teal-900">
              CarePoint NPU
            </p>
            <nav className="absolute left-1/2 -translate-x-1/2 xl:static xl:left-0 xl:translate-x-0">
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
          <p className="font-semibold text-teal-900">CarePoint NPU</p>
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
        <p className="text-lg font-semibold text-teal-900">CarePoint NPU</p>

        <div className="flex justify-end gap-4">
          <Button size="icon-lg" variant="ghost">
            <HugeiconsIcon icon={Menu02Icon} />
          </Button>
        </div>
      </div>
    </header>
  )
}
