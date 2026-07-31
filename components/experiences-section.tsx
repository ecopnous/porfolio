"use client"

import { BriefcaseBusiness } from "lucide-react"
import { usePublishedCollection } from "@/hooks/use-published-collection"

type Experience = {
  title: string
  subtitle?: string
  description?: string
  category?: string
  imageUrl?: string
}

export function ExperiencesSection() {
  const { items, loading } = usePublishedCollection<Experience>("experiences")

  if (loading || items.length === 0) return null

  return (
    <section id="experiences" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">Parcours</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Expériences & collaborations</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((experience) => (
            <article key={experience.id} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
              {experience.imageUrl ? <img src={experience.imageUrl} alt="" className="h-12 w-12 rounded-xl object-cover" /> : <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><BriefcaseBusiness size={21} /></div>}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-primary">{experience.category || "Expérience"}</p>
                <h3 className="mt-2 text-xl font-bold">{experience.title}</h3>
                {experience.subtitle && <p className="mt-1 text-sm text-muted-foreground">{experience.subtitle}</p>}
                {experience.description && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{experience.description}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
