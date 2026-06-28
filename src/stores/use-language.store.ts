import { create } from "zustand"
import { createJSONStorage } from "zustand/middleware"
import { persist } from "zustand/middleware"

interface Store {
  language: Languages
  changeLanguage: (lang: Languages) => void
}

export const useLanguageStore = create<Store>()(
  persist(
    (set) => ({
      language: "en",
      changeLanguage: (lang: Languages) => set({ language: lang }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
