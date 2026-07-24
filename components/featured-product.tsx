"use client"

import { useRef } from "react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { ArrowUpRight, Smartphone, Shield, TrendingUp, Database } from "lucide-react"

const highlights = [
  { icon: Shield, label: "Bank-Grade Security" },
  { icon: TrendingUp, label: "Real-Time Analytics" },
  { icon: Database, label: "Scalable Architecture" },
]

export function FeaturedProduct() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/4 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            Featured Product
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            Fintech Bookkeeping Platform
          </h2>
        </div>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">
          {/* Mobile Mockup */}
          <div
            className={`flex items-center justify-center transition-all duration-1000 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative mx-auto w-[280px] rounded-[2.5rem] border-2 border-border bg-card p-3 shadow-[0_0_60px_rgba(0,212,170,0.08)] animate-float">
                <div className="overflow-hidden rounded-[2rem] bg-secondary">
                  {/* Status bar */}
                  <div className="flex items-center justify-between bg-card px-5 py-3">
                    <span className="text-[10px] text-muted-foreground">9:41</span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-3 rounded-sm bg-muted-foreground" />
                      <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                    </div>
                  </div>
                  {/* App content mockup */}
                  <div className="space-y-4 px-5 pb-6 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Smartphone size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-foreground">FinTrack Pro</div>
                        <div className="text-[10px] text-muted-foreground">Dashboard</div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-card p-4">
                      <div className="text-[10px] text-muted-foreground mb-1">Total Balance</div>
                      <div className="text-xl font-bold text-foreground">$124,563.00</div>
                      <div className="mt-1 text-[10px] text-primary flex items-center gap-1">
                        <TrendingUp size={10} /> +12.4% this month
                      </div>
                    </div>
                    <div className="space-y-2">
                      {["Revenue", "Expenses", "Profit"].map((item, i) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-lg bg-card p-3"
                        >
                          <span className="text-[10px] text-muted-foreground">{item}</span>
                          <div
                            className="h-1.5 rounded-full bg-primary/30"
                            style={{ width: `${60 - i * 15}px` }}
                          >
                            <div
                              className="h-1.5 rounded-full bg-primary"
                              style={{ width: `${80 - i * 20}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {["Send", "Receive", "Reports"].map((action) => (
                        <div
                          key={action}
                          className="flex flex-col items-center gap-1 rounded-lg bg-card p-2"
                        >
                          <div className="h-6 w-6 rounded-full bg-primary/10" />
                          <span className="text-[8px] text-muted-foreground">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              A comprehensive mobile-first bookkeeping platform designed for modern businesses.
              Built with Flutter for cross-platform performance, backed by a robust Laravel API,
              and secured with bank-grade encryption protocols.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <h.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{h.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Flutter", "Laravel", "PostgreSQL", "Redis", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/projects/bookkeeping-mobile-app"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold transition-all hover:gap-3"
            >
              View Case Study <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
