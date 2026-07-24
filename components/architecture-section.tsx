"use client"

import { useRef } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Server, GitBranch, Shield, Cpu, Globe, Database } from "lucide-react"

const principles = [
  {
    icon: Server,
    title: "Microservices Architecture",
    description:
      "Decomposed monoliths into loosely coupled services with event-driven communication, enabling independent deployments and horizontal scaling.",
  },
  {
    icon: Database,
    title: "Database Design at Scale",
    description:
      "Designed sharded databases, implemented CQRS patterns, and optimized query performance across PostgreSQL, MongoDB, and Redis clusters.",
  },
  {
    icon: GitBranch,
    title: "CI/CD & DevOps",
    description:
      "Automated deployment pipelines with Docker, Kubernetes, and Terraform. Zero-downtime deployments with blue-green strategies.",
  },
  {
    icon: Shield,
    title: "Security-First Approach",
    description:
      "Implemented OAuth 2.0, JWT authentication, and end-to-end encryption. SOC2 and GDPR compliance across all platforms.",
  },
  {
    icon: Cpu,
    title: "Clean Architecture",
    description:
      "Enforced domain-driven design with clear separation of concerns. Maintainable, testable codebases that scale with team growth.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description:
      "Multi-region AWS deployments with CDN optimization, auto-scaling groups, and 99.99% uptime SLAs across production systems.",
  },
]

export function ArchitectureSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section id="architecture" ref={ref} className="relative py-32 px-6">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0 bg-secondary/30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Engineering & Architecture
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Built for Scale,
            <br />
            Engineered for Reliability
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every system I design follows battle-tested engineering principles.
            Clean code, scalable infrastructure, and security are non-negotiable.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className={`group rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/30 hover:bg-card ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <p.icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
