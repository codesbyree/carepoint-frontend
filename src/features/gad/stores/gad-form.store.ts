import { create } from "zustand"

interface Store {
  currentQuestion: number
  q1: number
  q2: number
  q3: number
  q4: number
  q5: number
  q6: number
  q7: number
  setQ1: (num: number) => void
  setQ2: (num: number) => void
  setQ3: (num: number) => void
  setQ4: (num: number) => void
  setQ5: (num: number) => void
  setQ6: (num: number) => void
  setQ7: (num: number) => void
  clearForm: () => void
  setCurrentQuestion: (num: number) => void
}

export const useGADForm = create<Store>((set) => ({
  currentQuestion: 1,
  q1: 0,
  q2: 0,
  q3: 0,
  q4: 0,
  q5: 0,
  q6: 0,
  q7: 0,
  setQ1: (q1: number) => set({ q1 }),
  setQ2: (q2: number) => set({ q2 }),
  setQ3: (q3: number) => set({ q3 }),
  setQ4: (q4: number) => set({ q4 }),
  setQ5: (q5: number) => set({ q5 }),
  setQ6: (q6: number) => set({ q6 }),
  setQ7: (q7: number) => set({ q7 }),
  clearForm: () =>
    set({
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
      q5: 0,
      q6: 0,
      q7: 0,
      currentQuestion: 1,
    }),
  setCurrentQuestion: (currentQuestion: number) => set({ currentQuestion }),
}))
