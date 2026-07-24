"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { value: 25, suffix: "+", label: "Products Shipped" },
  { value: 40, suffix: "+", label: "Systems Architected" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 99.9, suffix: "%", label: "Uptime Delivered" },
]

function AnimatedCounter({
  target,
  suffix,
  shouldAnimate,
}: {
  target: number
  suffix: string
  shouldAnimate: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldAnimate) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current * 10) / 10)
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [shouldAnimate, target])

  return (
    <span>
      {Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.3 })

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-border bg-card p-12 md:p-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl font-bold text-primary md:text-6xl">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    shouldAnimate={isInView}
                  />
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
