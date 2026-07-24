"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"

const techCategories = [
  {
    label: "Mobile",
    items: [
      { name: "Flutter", shorthand: "Fl" },
      { name: "Kotlin", shorthand: "Kt" },
      { name: "Swift", shorthand: "Sw" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Laravel", shorthand: "La" },
      { name: "Node.js", shorthand: "Nj" },
      { name: "Python", shorthand: "Py" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", shorthand: "Re" },
      { name: "Vue.js", shorthand: "Vu" },
      { name: "Next.js", shorthand: "Nx" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", shorthand: "Pg" },
      { name: "MongoDB", shorthand: "Mg" },
      { name: "Redis", shorthand: "Rd" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", shorthand: "Dk" },
      { name: "Kubernetes", shorthand: "K8" },
      { name: "AWS", shorthand: "Aw" },
    ],
  },
  {
    label: "AI / ML",
    items: [
      { name: "TensorFlow", shorthand: "Tf" },
      { name: "PyTorch", shorthand: "Pt" },
      { name: "OpenAI", shorthand: "Oa" },
    ],
  },
]

export function TechStackSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

  return (
    <section id="stack" ref={ref} className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div
          className={`text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Tech Stack
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Modern Tools, Proven Results
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Leveraging battle-tested technologies across every layer of the stack to deliver
            production-ready platforms at scale.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((cat, catIndex) => (
            <div
              key={cat.label}
              className={`rounded-2xl border border-border bg-card p-6 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(catIndex + 1) * 100}ms` }}
            >
              <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-primary">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center gap-3 rounded-xl bg-secondary px-4 py-3 transition-all duration-300 hover:bg-primary/10 hover:border-primary/20"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary transition-colors group-hover:bg-primary/20">
                      {item.shorthand}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
