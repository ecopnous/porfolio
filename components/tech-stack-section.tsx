"use client"

import { useMemo, useState } from "react"
import {
  getActiveTechCategories,
  getTechColor,
  getTechMark,
  type TechCategory,
  type TechItem,
} from "@/lib/tech-stack-data"
import { Reveal, Section, SectionHeader } from "@/components/section"

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
    <div className="group relative flex min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-hairline bg-surface px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-0.5 opacity-80 transition-all duration-300 group-hover:w-1"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold uppercase tracking-tight"
        style={{ backgroundColor: `${color}22`, color }}
      >
        {mark}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold text-foreground">
          {item.name}
        </p>
        <p className="truncate text-[11px] text-muted-foreground">
          {item.blurb?.trim() || categoryLabel}
        </p>
      </div>
    </div>
  )
}

function CategoryRow({
  category,
  index,
}: {
  category: TechCategory
  index: number
}) {
  const count = category.items.length

  return (
    <Reveal
      delay={Math.min(index, 6) * 70}
      className="grid items-start gap-4 border-t border-hairline py-7 md:grid-cols-[minmax(0,180px)_minmax(0,1fr)] md:gap-10"
    >
      <div className="md:sticky md:top-28">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {category.label}
        </h3>
        <span className="mt-1.5 block text-xs text-muted-foreground">
          {count === 1 ? "1 skill" : `${count} skills`}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <TechTile
            key={`${category.label}-${item.name}`}
            item={item}
            categoryLabel={category.label}
          />
        ))}
      </div>
    </Reveal>
  )
}

export function TechStackSection() {
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
    <Section id="stack" tone="tinted" divider>
      <SectionHeader
        eyebrow="Tech stack"
        title={
          <>
            Modern tools,
            <br className="hidden sm:block" /> proven results
          </>
        }
        description="Battle-tested technologies across every layer — chosen for reliability, speed, and long-term maintainability."
        aside={
          <p className="text-sm text-muted-foreground">
            <span className="text-3xl font-bold tracking-tight text-foreground">
              {totalSkills}
            </span>
            <span className="mt-1 block">
              skills across {categories.length} areas
            </span>
          </p>
        }
      />

      <Reveal className="mt-10 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = active === filter
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-hairline bg-surface text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          )
        })}
      </Reveal>

      <div className="mt-6">
        {visibleCategories.map((category, index) => (
          <CategoryRow key={category.label} category={category} index={index} />
        ))}

        {visibleCategories.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">
            No skills in this category yet.
          </p>
        )}
      </div>
    </Section>
  )
}
