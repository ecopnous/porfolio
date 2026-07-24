"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      const elements = heroRef.current.querySelectorAll("[data-parallax]")
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax || "0.5")
        ;(el as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Ambient glow effects */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] animate-glow-pulse"
        data-parallax="0.15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px] animate-glow-pulse animation-delay-600"
        data-parallax="0.1"
        aria-hidden="true"
      />

      {/* Grid pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,170,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="animate-fade-in-up">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Tech Founder & CTO
          </span>
        </div>

        <h1
          className="animate-fade-in-up animation-delay-200 mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          <span className="text-balance">
            Building{" "}
            <span className="text-primary">Intelligent</span>
            <br />
            & Scalable Digital
            <br />
            Systems
          </span>
        </h1>

        <p className="animate-fade-in-up animation-delay-400 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Engineering product-driven platforms that transform industries
          — from fintech to IoT. Architecting systems that scale from
          concept to millions of users.
        </p>

        <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]"
          >
            View Projects
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/#contact"
            className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/80"
          >
            Work With Me
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  )
}
