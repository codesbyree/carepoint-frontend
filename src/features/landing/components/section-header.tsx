import { cn } from "@/lib/utils"
import type { ComponentPropsWithoutRef } from "react"

export function SectionHeader(props: ComponentPropsWithoutRef<"div">) {
  const { children, className, ...rest } = props
  return (
    <div className={cn("flex flex-col items-center", className)} {...rest}>
      {children}
    </div>
  )
}

export function SectionHeaderLabel(props: ComponentPropsWithoutRef<"span">) {
  const { children, className, ...rest } = props
  return (
    <span
      className={cn(
        "mb-2 text-center text-sm font-medium text-teal-500 uppercase",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
}

export function SectionHeaderHeading(props: ComponentPropsWithoutRef<"h2">) {
  const { children, className, ...rest } = props
  return (
    <h2
      className={cn(
        "mb-6 text-center text-2xl font-semibold md:text-3xl xl:text-4xl",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  )
}

export function SectionHeaderDescription(props: ComponentPropsWithoutRef<"p">) {
  const { children, className, ...rest } = props
  return (
    <p className={cn("text-center text-olive-600", className)} {...rest}>
      {children}
    </p>
  )
}
