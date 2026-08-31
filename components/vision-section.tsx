"use client"

import { Lightbulb, Layers, Zap } from "lucide-react"
import { Reveal, Section, SectionHeader } from "@/components/section"

const pillars = [
  {
    icon: Lightbulb,
    title: "Systems Thinking",
    description:
      "Every product begins with deep understanding of the problem space. I design architectures that are modular, maintainable, and ready to evolve as business requirements grow.",
  },
  {
    icon: Layers,
    title: "Industrial deployment",
    description:
      "From monolith to microservices, I engineer platforms with horizontal scalability baked in. Each system is built to handle 10x growth without rearchitecting.",
  },
  {
    icon: Zap,
    title: "Product-Led Engineering",
    description:
      "Technology serves the user. I bridge the gap between technical excellence and product impact, ensuring every line of code drives measurable business outcomes.",
  },
]

export function VisionSection() {
  return (
    <Section id="vision" divider>
      <SectionHeader
        eyebrow="Vision & Leadership"
        title={
          <>
            Engineering the future
            <br className="hidden sm:block" /> of digital platforms
          </>
        }
        description="With years of experience in large-scale product deployment, I lead engineering teams and design systems that support entire industrial sectors — combining deep technical expertise with a strategic product vision."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 120} className="h-full">
            <article className="surface surface-hover glow-edge group h-full p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                  <pillar.icon size={20} />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
