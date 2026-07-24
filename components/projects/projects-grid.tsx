"use client"

import { useState, useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { projects, type Category } from "@/lib/projects-data"
import { ProjectFilter } from "./project-filter"
import { ProjectCard } from "./project-card"

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div ref={ref}>
      <ProjectFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="mx-auto max-w-7xl px-6 pt-12 pb-32">
        <div
          className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
