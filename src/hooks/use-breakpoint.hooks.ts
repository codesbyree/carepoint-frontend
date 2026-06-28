import { useState, useEffect, useCallback } from "react"

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
}

function getBreakpoint(width: number): Breakpoint {
  if (width < BREAKPOINTS.mobile) return "mobile"
  if (width < BREAKPOINTS.tablet) return "tablet"
  return "desktop"
}

function useBreakpoint(debounceMs = 150): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    getBreakpoint(window.innerWidth)
  )

  const handleResize = useCallback(() => {
    const next = getBreakpoint(window.innerWidth)
    setBreakpoint((prev) => (prev !== next ? next : prev))
  }, [])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const debouncedResize = () => {
      clearTimeout(timer)
      timer = setTimeout(handleResize, debounceMs)
    }

    window.addEventListener("resize", debouncedResize)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", debouncedResize)
    }
  }, [handleResize, debounceMs])

  return breakpoint
}

export default useBreakpoint
