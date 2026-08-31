"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react"

const quickFacts = [
  { value: "25+", label: "Products shipped" },
  { value: "6+", label: "Years building" },
  { value: "99.9%", label: "Uptime delivered" },
]

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      const glow = heroRef.current.querySelector("[data-parallax]") as HTMLElement | null
      if (glow) {
        glow.style.transform = `translateY(${scrollY * 0.12}px)`
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 md:pb-24"
    >
      <div className="backdrop-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="glow-orb pointer-events-none absolute top-[12%] right-[4%] h-[520px] w-[520px]"
        data-parallax
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Copy */}
          <div>
            <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-glow-pulse absolute inline-flex h-full w-full rounded-full bg-primary" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              CTO &amp; Co-founder at Zerobug
            </span>

            <h1 className="animate-fade-in-up animation-delay-200 display mt-7 text-[2.75rem] text-foreground sm:text-6xl lg:text-7xl">
              Intelligent systems,
              <br />
              <span className="text-gradient">built to scale.</span>
            </h1>

            <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Product-driven platforms from fintech to IoT — engineered for real
              users and real growth.
            </p>

            <div className="animate-fade-in-up animation-delay-600 mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px_var(--glow)] transition-all duration-300 hover:brightness-110"
              >
                View projects
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors duration-300 hover:border-primary/40"
              >
                <Sparkles size={15} className="text-primary" />
                Work with me
              </Link>
            </div>

            <dl className="animate-fade-in-up animation-delay-800 mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-hairline pt-7">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd>
                    <span className="block text-2xl font-bold tracking-tight text-foreground">
                      {fact.value}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                      {fact.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Portrait */}
          <div className="animate-fade-in-up animation-delay-400 relative mx-auto w-full max-w-[400px] lg:mx-0 lg:justify-self-end">
            <div
              className="absolute -inset-4 rounded-[2.5rem] border border-hairline"
              aria-hidden="true"
            />
            <div
              className="glow-orb absolute -top-8 -left-8 h-40 w-40"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-secondary shadow-[var(--shadow-lift)]">
              <Image
                src="/images/portrait.png"
                alt="Ecopnous portrait"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 400px, 440px"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10"
                aria-hidden="true"
              />
            </div>

            <div className="surface animate-float absolute -bottom-6 -left-4 flex items-center gap-3 px-4 py-3 sm:-left-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Sparkles size={16} />
              </span>
              <span className="text-xs leading-tight">
                <span className="block font-semibold text-foreground">
                  Open to new projects
                </span>
                <span className="text-muted-foreground">Fintech · SaaS · AI · IoT</span>
              </span>
            </div>
          </div>
        </div>

        <a
          href="#vision"
          className="mt-16 hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground lg:inline-flex"
        >
          <ArrowDown size={14} className="animate-float" />
          Scroll
        </a>
      </div>
    </section>
  )
}
