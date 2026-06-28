import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderHeading,
  SectionHeaderLabel,
} from "./section-header"
import { SectionSafeWrapper } from "./section-safe-wrapper"

export function GADSection() {
  return (
    <section id="gad-section" className="bg-olive-100">
      <SectionSafeWrapper className="flex flex-col gap-12">
        <SectionHeader>
          <SectionHeaderLabel>FEATURED SCREENING</SectionHeaderLabel>
          <SectionHeaderHeading>
            Start with anxiety-the GAD-7
          </SectionHeaderHeading>
          <SectionHeaderDescription className="xl:max-w-170">
            The Generalized Anxiety Disorder 7-item scale (GAD-7) is one of the
            most widely used screening tools in the world. It helps you
            understand whether what you’re feeling might be anxiety, and how
            much it’s affecting your daily life.
          </SectionHeaderDescription>
        </SectionHeader>

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 rounded-xl border border-border bg-card p-5 shadow-xl">
          <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
              <p className="text-xl font-semibold text-teal-900 md:text-2xl xl:text-3xl">
                7
              </p>
              <p className="text-sm text-teal-600">Questions only</p>
            </li>

            <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
              <p className="text-xl font-semibold text-teal-900 md:text-2xl xl:text-3xl">
                ~3 min
              </p>
              <p className="text-sm text-teal-600">To complete</p>
            </li>

            <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
              <p className="text-xl font-semibold text-teal-900 md:text-2xl xl:text-3xl">
                Free
              </p>
              <p className="text-sm text-teal-600">No cost, ever</p>
            </li>

            <li className="space-y-1 rounded-md border border-olive-200 bg-olive-50 px-4 py-2">
              <p className="text-xl font-semibold text-teal-900 md:text-2xl xl:text-3xl">
                Instant
              </p>
              <p className="text-sm text-teal-600">Results & guidance</p>
            </li>
          </ul>

          <p className="text-olive-600">
            After completing the GAD-7, you’ll receive a score with a
            plain-language explanation and if needed, a recommendation to speak
            with one of our campus psychologist.
          </p>

          <Button variant="outline" className="w-max">
            Take the GAD-7 now
            <HugeiconsIcon icon={ArrowRight02Icon} className="h-5 w-5" />
          </Button>
        </div>
      </SectionSafeWrapper>
    </section>
  )
}
