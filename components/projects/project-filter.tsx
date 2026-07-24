"use client"

import { categories, type Category } from "@/lib/projects-data"

interface ProjectFilterProps {
  activeCategory: Category
  onCategoryChange: (category: Category) => void
}

export function ProjectFilter({
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 px-6">
      <div className="mx-auto max-w-7xl w-full">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(0,212,170,0.2)]"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
