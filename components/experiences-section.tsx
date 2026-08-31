"use client"

import { BriefcaseBusiness } from "lucide-react"
import { usePublishedCollection } from "@/hooks/use-published-collection"
import { Reveal, Section, SectionHeader } from "@/components/section"

type Experience = {
  title: string
  subtitle?: string
  description?: string
  category?: string
  imageUrl?: string
}

export function ExperiencesSection() {
  const { items } = usePublishedCollection<Experience>("experiences")

  if (items.length === 0) return null

  return (
    <Section id="experiences" tone="tinted" divider>
      <SectionHeader
        eyebrow="Parcours"
        title="Expériences & collaborations"
        description="Les équipes et produits sur lesquels j'ai travaillé, du cadrage à la mise en production."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5">
        {items.map((experience, index) => (
          <Reveal
            key={experience.id}
            delay={Math.min(index, 6) * 90}
            className="h-full"
          >
            <article className="surface surface-hover flex h-full gap-5 p-6">
              {experience.imageUrl ? (
                <img
                  src={experience.imageUrl}
                  alt=""
                  className="h-12 w-12 shrink-0 rounded-xl object-cover"
                />
              ) : (
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <BriefcaseBusiness size={20} />
                </span>
              )}
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {experience.category || "Expérience"}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                  {experience.title}
                </h3>
                {experience.subtitle && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {experience.subtitle}
                  </p>
                )}
                {experience.description && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {experience.description}
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
