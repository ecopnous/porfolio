"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

type TechItem = {
  name: string
  mark: string
  color: string
}

type TechCategory = {
  label: string
  items: TechItem[]
}

const techCategories: TechCategory[] = [
  {
    label: "Mobile",
    items: [
      { name: "Flutter", mark: "Fl", color: "#42A5F5" },
      { name: "Kotlin", mark: "Kt", color: "#A78BFA" },
      { name: "Swift", mark: "Sw", color: "#FB7185" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Laravel", mark: "La", color: "#F87171" },
      { name: "Node.js", mark: "Nj", color: "#4ADE80" },
      { name: "Python", mark: "Py", color: "#60A5FA" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", mark: "Re", color: "#22D3EE" },
      { name: "Vue.js", mark: "Vu", color: "#34D399" },
      { name: "Next.js", mark: "Nx", color: "#A3A3A3" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", mark: "Pg", color: "#818CF8" },
      { name: "MongoDB", mark: "Mg", color: "#4ADE80" },
      { name: "Redis", mark: "Rd", color: "#F87171" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", mark: "Dk", color: "#38BDF8" },
      { name: "Kubernetes", mark: "K8", color: "#60A5FA" },
      { name: "AWS", mark: "Aw", color: "#FBBF24" },
    ],
  },
  {
    label: "AI / ML",
    items: [
      { name: "TensorFlow", mark: "Tf", color: "#FB923C" },
      { name: "PyTorch", mark: "Pt", color: "#F97316" },
      { name: "OpenAI", mark: "Oi", color: "#A3E635" },
    ],
  },
]

export function TechStackSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })
  const [active, setActive] = useState("All")

  const categories = ["All", ...techCategories.map((c) => c.label)]
  const visibleCategories =
    active === "All"
      ? techCategories
      : techCategories.filter((c) => c.label === active)

  return (
    <section id="stack" ref={ref} className="relative py-32 px-6">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Tech Stack
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Modern tools,
            <br />
            proven results
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Battle-tested technologies across every layer — chosen for
            reliability, speed, and long-term maintainability.
          </p>
        </div>

        {/* Category filter */}
        <div
          className={`mt-12 flex flex-wrap gap-2 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((cat) => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Tech rows */}
        <div className="mt-10 space-y-2">
          {visibleCategories.map((cat, catIndex) => (
            <div
              key={cat.label}
              className={`group/row grid items-start gap-6 rounded-2xl border border-transparent px-1 py-8 transition-all duration-500 hover:border-border hover:bg-card/40 md:grid-cols-[160px_1fr] md:gap-10 md:px-6 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(catIndex + 1) * 80}ms` }}
            >
              <div className="flex items-center gap-3 pt-2 md:block">
                <span className="hidden h-px w-8 bg-primary/50 md:mb-3 md:block" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {cat.label}
                </h3>
                <span className="text-xs text-muted-foreground md:mt-2 md:block">
                  {cat.items.length} tools
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                  >
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 w-1 opacity-80 transition-all duration-300 group-hover:w-1.5"
                      style={{ backgroundColor: item.color }}
                      aria-hidden="true"
                    />
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold tracking-tight"
                      style={{
                        backgroundColor: `${item.color}22`,
                        color: item.color,
                      }}
                    >
                      {item.mark}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{cat.label}</p>
                    </div>
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
