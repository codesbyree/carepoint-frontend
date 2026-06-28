import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

export function SectionSafeWrapper(props: ComponentPropsWithoutRef<"div">) {
  const { children, className, ...rest } = props

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-380 px-6 py-20 md:px-8 xl:px-16",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
