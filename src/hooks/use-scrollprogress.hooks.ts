import { useState, useEffect } from "react"

function useScrollProgress(
  yScroll: number,
  range: [number, number] = [0, 1],
  progression: number = 1
): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const [start, end] = range

    const handleScroll = () => {
      const raw = Math.min(Math.max(window.scrollY / yScroll, 0), 1)
      const mapped = start + raw * (end - start)
      setProgress(parseFloat((mapped * progression).toFixed(4)))
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [yScroll, range[0], range[1], progression])

  return progress
}

export default useScrollProgress
