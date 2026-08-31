"use client"

import Link from "next/link"
import { ArrowUpRight, Layers } from "lucide-react"
import type { PublicProject } from "@/lib/projects-data"
import { usePublishedCollection } from "@/hooks/use-published-collection"
import { Reveal, Section, SectionHeader } from "@/components/section"

export function ProductPortfolio() {
  const { items: projects } = usePublishedCollection<PublicProject>("projects")

  if (projects.length === 0) return null

  return (
    <Section id="products" divider>
      <SectionHeader
        eyebrow="Product portfolio"
        title={
          <>
            Scalable products,
            <br className="hidden sm:block" /> global impact
          </>
        }
        description="Each product is architected for scale, built with modern stacks, and designed to solve real-world problems across multiple industries."
        aside={
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary"
          >
            View all projects
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        }
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            delay={Math.min(index, 6) * 90}
            className="h-full"
          >
            <article className="surface surface-hover glow-edge group flex h-full flex-col p-7">
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${project.bgColor} ${project.color}`}
                >
                  <Layers size={20} />
                </span>
                <span
                  className={`rounded-full border border-hairline px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${project.color}`}
                >
                  {project.category}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-7 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-all hover:gap-2.5"
              >
                View case study <ArrowUpRight size={14} />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
