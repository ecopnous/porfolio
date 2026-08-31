"use client"

import { useRef, type ReactNode } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  /** Adds a subtle tinted band so consecutive sections read as distinct. */
  tone?: "plain" | "tinted"
  /** Hairline rule at the top edge of the section. */
  divider?: boolean
  tight?: boolean
}

export function Section({
  id,
  children,
  className,
  tone = "plain",
  divider = false,
  tight = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section relative overflow-hidden",
        tight && "section-tight",
        tone === "tinted" && "bg-secondary/40",
        className
      )}
    >
      {divider && (
        <div className="rule-fade absolute inset-x-0 top-0" aria-hidden="true" />
      )}
      <div className="shell relative z-10">{children}</div>
    </section>
  )
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "li" | "article"
}

/** Fades content up the first time it enters the viewport. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })
  const Tag = as

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", isInView && "reveal-in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  /** Secondary content pinned to the right on large screens (counts, links). */
  aside?: ReactNode
  align?: "start" | "center"
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  aside,
  align = "start",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "items-center text-center lg:flex-col lg:items-center",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <span className={cn("eyebrow", align === "center" && "justify-center")}>
          {eyebrow}
        </span>
        <h2 className="display mt-5 text-3xl text-foreground sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>
      {aside && <div className="shrink-0 lg:pb-2 lg:text-right">{aside}</div>}
    </Reveal>
  )
}
