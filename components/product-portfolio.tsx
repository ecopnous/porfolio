"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { ArrowUpRight, Layers } from "lucide-react"
import type { PublicProject } from "@/lib/projects-data"
import { usePublishedCollection } from "@/hooks/use-published-collection"

export function ProductPortfolio() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const { items: projects, loading } = usePublishedCollection<PublicProject>("projects")
  const isVisible = isInView || !loading

  if (projects.length === 0) return null

  return (
    <section id="products" ref={ref} className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Product Portfolio
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Scalable Products,
            <br />
            Global Impact
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Each product is architected for scale, built with modern stacks, and
            designed to solve real-world problems across multiple industries.
          </p>
          <Link
            href="/projects"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
          >
            View All Projects <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_50px_rgba(0,212,170,0.06)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 bg-primary/[0.02] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${project.bgColor} ${project.color}`}
                  >
                    <Layers size={22} />
                  </div>
                  <span
                    className={`rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-widest ${project.color}`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-2.5"
                >
                  View Case Study <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
