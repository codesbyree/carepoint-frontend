import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu02Icon, CancelIcon } from "@hugeicons/core-free-icons"

import useBreakpoint from "@/hooks/use-breakpoint.hooks"
import useScrollProgress from "@/hooks/use-scrollprogress.hooks"
import { useLanguageStore } from "@/stores/use-language.store"

import { Button, buttonVariants } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/shared/language-switcher"

const NAV_LINKS = [
  { href: "#", label: { id: "Beranda", en: "Home" } },
  { href: "#about", label: { id: "Tentang", en: "About" } },
  {
    href: "#featured-screening",
    label: { id: "Skrining Unggulan", en: "Featured Screening" },
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
  const language = useLanguageStore((s) => s.language)

  const [open, setOpen] = useState(false)
  const scrollProgress = useScrollProgress(350, [0, 1], 1)

  const toggleNav = () => setOpen(!open)
  const closeNav = () => setOpen(false)

  useEffect(() => {
    if (open) {
      document.body.classList.add("stop-scroll")
    } else {
      document.body.classList.remove("stop-scroll")
    }

    return () => {
      document.body.classList.remove("stop-scroll")
    }
  }, [open])

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full bg-olive-50"
      style={{
        background: `rgba(251, 251, 249, ${open ? 1 : scrollProgress})`,
      }}
    >
      <div className="mx-auto flex h-16 w-full max-w-380 items-center justify-between gap-2.5 px-6 md:px-8">
        <p className="text-lg font-semibold text-teal-900">CarePoint NPU</p>

        <div className="flex justify-end gap-2">
          <LanguageSwitcher />
          <Button
            size="icon-lg"
            variant="outline"
            className="bg-transparent"
            onClick={toggleNav}
          >
            {open ? (
              <HugeiconsIcon icon={CancelIcon} />
            ) : (
              <HugeiconsIcon icon={Menu02Icon} />
            )}
          </Button>
        </div>

        <nav
          className={cn(
            "fixed -top-full right-0 left-0 flex h-[calc(100dvh-64px)] flex-col transition-all xl:hidden",
            open && "top-16"
          )}
        >
          <ul className="flex flex-col bg-white">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block p-4 px-6 outline outline-transparent transition-all hover:bg-olive-50 focus:outline-blue-500 active:bg-olive-50 md:px-8"
                  onClick={closeNav}
                >
                  {label[language]}
                </a>
              </li>
            ))}
          </ul>

          <span
            aria-hidden="true"
            className={cn(
              "block flex-1 bg-zinc-950/35 opacity-0 transition-opacity delay-100",
              open && "opacity-100"
            )}
            onClick={closeNav}
          />
        </nav>
      </div>
    </header>
  )
}
