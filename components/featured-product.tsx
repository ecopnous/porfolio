"use client"

import Link from "next/link"
import { ArrowUpRight, Shield, TrendingUp, Database } from "lucide-react"
import { Reveal, Section, SectionHeader } from "@/components/section"

const highlights = [
  {
    icon: Shield,
    label: "Bank-Grade Security",
    detail: "Encrypted transactions, granular roles and full audit trail.",
  },
  {
    icon: TrendingUp,
    label: "Real-Time Analytics",
    detail: "Live shop performance, cash movements and margins.",
  },
  {
    icon: Database,
    label: "Scalable Architecture",
    detail: "Multi-shop data model built for national rollouts.",
  },
]

const stack = ["Flutter", "Supabase", "PostgreSQL"]

export function FeaturedProduct() {
  return (
    <Section tone="tinted" divider>
      <div
        className="glow-orb pointer-events-none absolute top-1/3 left-1/2 h-[420px] w-[520px] -translate-x-1/2"
        aria-hidden="true"
      />

      <SectionHeader
        eyebrow="Featured product"
        title="Point-of-sale management"
        description="A centralized platform for telecom and financial service shops — transactions, cash movements, shop performance and financial operations in one place."
        aside={
          <Link
            href="/projects/e-money-business"
            className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-primary/40 hover:text-primary"
          >
            View case study
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        }
      />

      <Reveal className="mt-14">
        <div className="surface grid gap-10 p-6 sm:p-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-14">
          {/* Mockup */}
          <div className="relative flex justify-center">
            <div
              className="glow-orb pointer-events-none absolute inset-x-8 top-10 bottom-10"
              aria-hidden="true"
            />
            <div className="animate-float relative w-[260px] rounded-[2.25rem] border border-hairline bg-background p-2.5 shadow-[var(--shadow-lift)] sm:w-[280px]">
              <img
                src="https://i.ibb.co/cSGpTZJV/Screenshot-20260525-151644.jpg"
                alt="e-Money Business point-of-sale app"
                width={280}
                height={600}
                className="w-full rounded-[1.85rem]"
              />
            </div>
          </div>

          {/* Highlights */}
          <div>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="group flex gap-4 rounded-2xl border border-transparent px-4 py-4 transition-colors duration-300 hover:border-hairline hover:bg-background/50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <item.icon size={18} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-hairline pt-6">
              <span className="mr-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Built with
              </span>
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-hairline px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
