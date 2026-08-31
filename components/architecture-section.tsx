"use client"

import { Server, GitBranch, Shield, Cpu, Globe, Database } from "lucide-react"
import { Reveal, Section, SectionHeader } from "@/components/section"

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
  return (
    <Section id="architecture" divider>
      <div
        className="backdrop-dots pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <SectionHeader
        eyebrow="Engineering & architecture"
        title={
          <>
            Built for scale,
            <br className="hidden sm:block" /> engineered for reliability
          </>
        }
        description="Every system I design follows battle-tested engineering principles. Clean code, scalable infrastructure, and security are non-negotiable."
      />

      {/* Hairline matrix: cells share borders instead of floating as separate cards. */}
      <Reveal className="mt-14">
        <div className="surface overflow-hidden p-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="group relative border-b border-hairline p-7 transition-colors duration-300 last:border-b-0 hover:bg-primary/[0.03] md:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0 md:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary/20">
                    <p.icon size={18} />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
