import { HugeiconsIcon } from "@hugeicons/react"
import { Call02Icon } from "@hugeicons/core-free-icons"
import { useLanguageStore } from "@/stores/use-language.store"

import { SectionSafeWrapper } from "./section-safe-wrapper"

export function FooterSection() {
  const language = useLanguageStore((s) => s.language)
  const isEnglish = language === "en"

  return (
    <footer id="footer" className="bg-teal-900">
      <SectionSafeWrapper className="flex flex-col gap-9">
        <div className="flex flex-col justify-between gap-12 xl:flex-row">
          <div className="space-y-2.5">
            <h2 className="text-2xl text-olive-50">Nusa Putra University</h2>
            <p className="text-olive-50/70">
              Jl. Raya Cibolang No. 21 Sukabumi, West Java Indonesia
            </p>
          </div>

          <div className="flex flex-col gap-9 md:flex-row md:gap-16">
            <div className="space-y-6">
              <p className="text-olive-50">
                {isEnglish ? "SCREENINGS" : "SKRINING"}
              </p>

              <ul className="flex flex-col gap-4">
                <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
                  {isEnglish ? "Anxiety screening" : "Skrining kecemasan"}
                </li>
                <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
                  {isEnglish ? "Depression screening" : "Skrining depresi"}
                </li>
                <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
                  {isEnglish
                    ? "Stress level screening"
                    : "Skrining tingkat stres"}
                </li>
                <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
                  {isEnglish ? "Wellbeing screening" : "Skrining kesejahteraan"}
                </li>
                <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
                  {isEnglish
                    ? "Sleep quality screening"
                    : "Skrining kualitas tidur"}
                </li>
                <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
                  {isEnglish ? "Burnout screening" : "Skrining burnout"}
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-olive-50">
                {isEnglish ? "SUPPORT" : "DUKUNGAN"}
              </p>

              <ul className="flex flex-col gap-4">
                <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
                  {isEnglish ? "Book a session" : "Buat janji temu"}
                </li>
                <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
                  {isEnglish ? "Contact us" : "Hubungi kami"}
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <p className="text-olive-50">{isEnglish ? "Account" : "Akun"}</p>

              <ul className="flex flex-col gap-4">
                <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
                  {isEnglish ? "Login" : "Masuk"}
                </li>
                <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
                  {isEnglish ? "Register" : "Daftar"}
                </li>
                <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
                  {isEnglish ? "My results" : "Hasil saya"}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <span className="block h-px w-full bg-teal-700" />

        <div className="grid grid-cols-1 gap-16 xl:grid-cols-[1fr_473px]">
          <p className="text-olive-50">
            {isEnglish
              ? "© Nusa Putra University. All rights reserved."
              : "© Universitas Nusa Putra. Hak cipta dilindungi undang-undang."}
          </p>

          <ul className="flex flex-col justify-between gap-4 md:flex-row md:gap-9 xl:gap-16">
            <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
              {isEnglish ? "Privacy Policy" : "Kebijakan Privasi"}
            </li>
            <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
              {isEnglish ? "Terms of Use" : "Syarat Ketentuan"}
            </li>
            <li className="transition-color cursor-pointer text-olive-50/70 hover:text-olive-50/90">
              {isEnglish ? "Accessibility" : "Aksesibilitas"}
            </li>
          </ul>
        </div>

        <div className="flex items-start gap-2 rounded-2xl bg-olive-200 p-4">
          <HugeiconsIcon
            icon={Call02Icon}
            className="mt-0.5 shrink-0 text-red-500"
          />

          <p className="text-sm font-medium text-olive-600">
            {isEnglish
              ? "Crisis or emergency? If you or someone you know needs immediate help, please call the national mental health crisis line: 119 ext. 8 (Indonesia, 24/7) or go to your nearest emergency service."
              : "Krisis atau darurat? Jika Anda atau seseorang yang Anda kenal membutuhkan bantuan segera, hubungi layanan krisis kesehatan mental nasional: 119 ext. 8 (Indonesia, 24/7) atau kunjungi layanan darurat terdekat."}
          </p>
        </div>
      </SectionSafeWrapper>
    </footer>
  )
}
