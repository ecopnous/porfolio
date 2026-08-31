"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Section } from "@/components/section"

const stats = [
  {
    value: 25,
    suffix: "+",
    label: "Products shipped",
    detail: "From MVP to production platforms",
  },
  {
    value: 40,
    suffix: "+",
    label: "Systems architected",
    detail: "Scalable backends & infrastructures",
  },
  {
    value: 6,
    suffix: "+",
    label: "Years of experience",
    detail: "Building digital products end to end",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime delivered",
    detail: "Reliability as a product feature",
  },
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

    let frame = 0
    const steps = 48
    const duration = 1600
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const next = target * eased
      setCount(Number.isInteger(target) ? Math.floor(next) : Math.floor(next * 10) / 10)
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setCount(target)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [shouldAnimate, target])

  return (
    <span>
      {Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}
      <span className="text-primary">{suffix}</span>
    </span>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.25 })

  return (
    <Section tone="tinted" divider>
      <div
        className="glow-orb pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 opacity-50"
        aria-hidden="true"
      />

      <div ref={ref}>
        <div
          className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-xl">
            <span className="eyebrow">Impact</span>
            <h2 className="display mt-5 text-3xl text-foreground sm:text-4xl md:text-[2.75rem]">
              Numbers that reflect real delivery
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
            A snapshot of shipped products, systems designed, and reliability
            maintained across production environments.
          </p>
        </div>

        <div className="surface mt-14 grid overflow-hidden p-0 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative border-b border-hairline px-6 py-9 transition-all duration-700 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(odd)]:border-r md:border-b-0 md:[&:nth-child(odd)]:border-r-0 ${index < stats.length - 1 ? "md:border-r md:border-hairline" : ""
                } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                0{index + 1}
              </span>

              <div className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  shouldAnimate={isInView}
                />
              </div>

              <p className="mt-4 text-sm font-semibold text-foreground">
                {stat.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
