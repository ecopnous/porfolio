import Link from "next/link"
import { cn } from "@/lib/utils"

type SiteBrandProps = {
  className?: string
  /** Render as a link to home (default true). */
  asLink?: boolean
  size?: "sm" | "md" | "lg"
}

const sizeClass = {
  sm: "text-sm font-semibold tracking-tight",
  md: "text-lg font-bold tracking-tight",
  lg: "text-xl font-bold tracking-tight",
} as const

export function SiteBrand({
  className,
  asLink = true,
  size = "md",
}: SiteBrandProps) {
  const content = (
    <span className={cn(sizeClass[size], "text-foreground", className)}>
      <span className="text-primary">{"<E />"}</span>
      copnous
    </span>
  )

  if (!asLink) return content

  return (
    <Link href="/" className="inline-flex items-center" aria-label="Ecopnous home">
      {content}
    </Link>
  )
}

export const SITE_NAME = "Ecopnous"
export const SITE_NAME_DISPLAY = "<E />copnous"
