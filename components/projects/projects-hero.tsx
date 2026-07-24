"use client"

import { useRef } from "react"
import { Search } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

interface ProjectsHeroProps {
  search: string
  onSearchChange: (value: string) => void
  resultCount: number
}

export function ProjectsHero({ search, onSearchChange, resultCount }: ProjectsHeroProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-end overflow-hidden px-6 pb-12 pt-36 md:pt-40"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]"
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,170,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Product Showcase
          </span>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            Explore Products
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Discover scalable digital products engineered for real-world impact.
            Each product is a production-ready system built with modern architecture.
          </p>
        </div>

        {/* Search bar */}
        <div
          className={`mt-10 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search by name, tech, or keyword..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full rounded-xl border border-border bg-card py-3.5 pl-11 pr-4 text-sm text-foreground placeholder-muted-foreground transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
            />
            {search && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                {resultCount} {resultCount === 1 ? "result" : "results"}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
