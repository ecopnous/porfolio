"use client"

import { useMemo, useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import {
  getActiveTechCategories,
  getTechColor,
  getTechMark,
  type TechCategory,
  type TechItem,
} from "@/lib/tech-stack-data"

function TechTile({
  item,
  categoryLabel,
}: {
  item: TechItem
  categoryLabel: string
}) {
  const color = getTechColor(item.name, item.color)
  const mark = getTechMark(item.name, item.mark)

  return (
    <div className="group relative flex min-w-0 items-center gap-3.5 overflow-hidden rounded-xl border border-border bg-card px-3.5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1 opacity-80 transition-all duration-300 group-hover:w-1.5"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold uppercase tracking-tight"
        style={{
          backgroundColor: `${color}22`,
          color,
        }}
      >
        {mark}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-foreground">
          {item.name}
        </p>
        <p className="truncate text-xs text-muted-foreground">
          {item.blurb?.trim() || categoryLabel}
        </p>
      </div>
    </div>
  )
}

function CategoryRow({
  category,
  index,
  isInView,
}: {
  category: TechCategory
  index: number
  isInView: boolean
}) {
  const count = category.items.length
  const countLabel = count === 1 ? "1 skill" : `${count} skills`

  return (
    <div
      className={`grid items-start gap-6 rounded-2xl border border-transparent px-1 py-8 transition-all duration-500 hover:border-border hover:bg-card/40 md:grid-cols-[160px_minmax(0,1fr)] md:gap-10 md:px-6 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${Math.min(index + 1, 8) * 70}ms` }}
    >
      <div className="flex items-center gap-3 pt-1 md:block">
        <span className="hidden h-px w-8 bg-primary/50 md:mb-3 md:block" />
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {category.label}
        </h3>
        <span className="text-xs text-muted-foreground md:mt-2 md:block">
          {countLabel}
        </span>
      </div>

      {/* Auto-fit grid: stays clean with 1 item or 20 */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {category.items.map((item) => (
          <TechTile
            key={`${category.label}-${item.name}`}
            item={item}
            categoryLabel={category.label}
          />
        ))}
      </div>
    </div>
  )
}

export function TechStackSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [active, setActive] = useState("All")

  const categories = useMemo(() => getActiveTechCategories(), [])
  const filters = useMemo(
    () => ["All", ...categories.map((category) => category.label)],
    [categories]
  )

  const visibleCategories =
    active === "All"
      ? categories
      : categories.filter((category) => category.label === active)

  const totalSkills = categories.reduce(
    (sum, category) => sum + category.items.length,
    0
  )

  return (
    <section id="stack" ref={ref} className="relative px-6 py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <div
          className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Tech Stack
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Modern tools,
              <br />
              proven results
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Battle-tested technologies across every layer — chosen for
              reliability, speed, and long-term maintainability.
            </p>
          </div>
          <p className="text-sm text-muted-foreground md:text-right">
            <span className="font-semibold text-foreground">{totalSkills}</span>{" "}
            skills across{" "}
            <span className="font-semibold text-foreground">
              {categories.length}
            </span>{" "}
            areas
          </p>
        </div>

        <div
          className={`mt-12 flex flex-wrap gap-2 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filters.map((filter) => {
            const isActive = active === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-10 space-y-1">
          {visibleCategories.map((category, index) => (
            <CategoryRow
              key={category.label}
              category={category}
              index={index}
              isInView={isInView}
            />
          ))}

          {visibleCategories.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              No skills in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
