import { HugeiconsIcon } from "@hugeicons/react"
import { Call02Icon, LockKeyhole } from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"

import HeroImageDesktop from "@/assets/landing/hero image desktop.jpg"
import HeroImageTablet from "@/assets/landing/hero image tablet.jpg"
import HeroImageMobile from "@/assets/landing/hero image mobile.jpg"
import { SectionSafeWrapper } from "./section-safe-wrapper"

import { useLanguageStore } from "@/stores/use-language.store"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

export function HeroSection() {
  const language = useLanguageStore((s) => s.language)
  const isEnglish = language === "en"

  return (
    <section id="hero-section" className="overflow-y-hidden bg-olive-100">
      <SectionSafeWrapper className="grid grid-cols-1 gap-2.5 p-0 md:p-0 xl:max-h-192 xl:min-h-192 xl:grid-cols-2 xl:p-0">
        <div className="flex flex-col gap-14 p-6 pt-32 md:p-8 md:pt-32 xl:justify-center xl:p-0 xl:pl-16 2xl:pl-0">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Badge className="relative bg-teal-500 pl-1">
                <span className="h-3 w-3 animate-ping rounded-full bg-teal-700" />
                <span className="absolute top-1/2 left-1.5 h-2 w-2 -translate-y-1/2 rounded-full bg-teal-700" />
                {isEnglish
                  ? "Now available: GAD-7 Anxiety Screening"
                  : "Sekarang tersedia: Skrining Kecemasan GAD-7"}
              </Badge>

              <h1 className="mb-4 text-3xl leading-11 font-semibold text-teal-900 md:text-4xl md:leading-14 xl:text-4xl xl:leading-15 2xl:text-5xl 2xl:leading-17">
                {isEnglish ? (
                  <>
                    Supporting Students Minds,{" "}
                    <br className="hidden md:block" /> Every Step of the Way
                  </>
                ) : (
                  <>
                    Menjaga Pikiran Mahasiswa,{" "}
                    <br className="hidden md:block" /> Di Setiap Langkah
                    Perjalanan
                  </>
                )}
              </h1>

              <p
                className={cn(
                  "font-medium text-olive-600 md:max-w-90",
                  !isEnglish && "md:max-w-125"
                )}
              >
                {isEnglish
                  ? "Nusa Putra University’s free mental health screening platform - a safe, confidential place for all students to check in on their"
                  : "Platform skrining kesehatan mental gratis Universitas Nusa Putra - ruang aman dan rahasia bagi seluruh mahasiswa untuk memeriksa kondisi kesejahteraan diri mereka"}
                wellbeing
              </p>
            </div>

            <div className="flex flex-col gap-2.5 md:flex-row">
              <Link
                to="/screening/gad"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-max px-5"
                )}
              >
                {isEnglish ? "Start GAD-7 screening" : "Mulai skrining GAD-7"}
              </Link>

              <Button className="w-max px-5" size="lg" variant="outline">
                <HugeiconsIcon icon={Call02Icon} className="h-4.5 w-4.5" />
                {isEnglish ? "Book an appointment" : "Buat janji temu"}
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-teal-500 md:text-sm">
            <HugeiconsIcon
              icon={LockKeyhole}
              className="hidden h-4 w-4 text-teal-500 sm:block md:h-4.5 md:w-4.5"
            />

            <div className="flex items-center gap-2 text-nowrap">
              <p>{isEnglish ? "Free" : "Gratis"}</p>
              <span className="block h-1 w-1 rounded-full bg-teal-500" />
              <p>{isEnglish ? "Confidential" : "Rahasia"}</p>
              <span className="block h-1 w-1 rounded-full bg-teal-500" />
              <p>
                {isEnglish
                  ? "For Nusa Putra University Students"
                  : "Untuk Mahasiswa Universitas Nusa Putra"}
              </p>
            </div>
          </div>
        </div>

        <div className="h-full w-full 2xl:w-[calc(((100dvw-(100dvw-1520px))/2)+((100dvw-1520px)/2)-5px)]">
          <img
            className="hidden h-full w-full object-cover xl:block 2xl:w-[200%]"
            src={HeroImageDesktop}
            alt=""
            aria-hidden="true"
          />
          <img
            className="hidden h-full w-full object-cover md:block xl:hidden"
            src={HeroImageTablet}
            alt=""
            aria-hidden="true"
          />
          <img
            className="block h-full w-full object-cover md:hidden"
            src={HeroImageMobile}
            alt=""
            aria-hidden="true"
          />
        </div>
      </SectionSafeWrapper>
    </section>
  )
}
