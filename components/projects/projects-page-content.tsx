"use client"

import { useState } from "react"
import { filterAndSortProjectList, type Category, type PublicProject, type SortOption } from "@/lib/projects-data"
import { ProjectsHero } from "./projects-hero"
import { ProjectFilter } from "./project-filter"
import { ProjectCard } from "./project-card"
import { useInView } from "@/hooks/use-in-view"
import { useRef } from "react"
import { usePublishedCollection } from "@/hooks/use-published-collection"

export function ProjectsPageContent() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const [sort] = useState<SortOption>("featured")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })
  const { items: projects, loading } = usePublishedCollection<PublicProject>("projects")

  const filtered = filterAndSortProjectList(projects, activeCategory, sort, search)

  return (
    <>
      <ProjectsHero
        search={search}
        onSearchChange={setSearch}
        resultCount={filtered.length}
      />

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

          {!loading && filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No projects match your filters.
              </p>
            </div>
          )}
          {loading && <p className="py-20 text-center text-muted-foreground">Chargement des projets…</p>}
        </div>
      </div>
    </>
  )
}
