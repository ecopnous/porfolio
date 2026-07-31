"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Lightbulb, Layers, Zap } from "lucide-react"

const pillars = [
  {
    icon: Lightbulb,
    title: "Systems Thinking",
    description:
      "Every product begins with deep understanding of the problem space. I design architectures that are modular, maintainable, and ready to evolve as business requirements grow.",
  },
  {
    icon: Layers,
    title: "Scalable Innovation",
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
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })

  return (
    <section id="vision" ref={ref} className="relative px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Vision & Leadership
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Engineering the Future
            <br />
            of Digital Platforms
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            With a decade of experience shipping products at scale, I lead engineering
            teams and architect systems that power industries. My approach combines
            deep technical expertise with strategic product thinking.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(0,212,170,0.06)] ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <pillar.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
