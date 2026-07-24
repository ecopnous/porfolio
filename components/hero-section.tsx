"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 pb-20"
    >
      <div
        className="pointer-events-none absolute top-[18%] right-[8%] h-[480px] w-[480px] rounded-full bg-primary/[0.08] blur-[130px]"
        data-parallax
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,var(--background)_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Copy */}
        <div>
          <p className="animate-fade-in-up text-sm font-medium tracking-[0.2em] text-primary uppercase">
            TechFounder
          </p>

          <h1 className="animate-fade-in-up animation-delay-200 mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
            Intelligent systems,
            <br />
            built to scale.
          </h1>

          <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Product-driven platforms from fintech to IoT — engineered for real
            users and real growth.
          </p>

          <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              View projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              Work with me
            </Link>
          </div>
        </div>

        {/* Portrait */}
        <div className="animate-fade-in-up animation-delay-400 relative mx-auto w-full max-w-[380px] lg:mx-0 lg:max-w-none lg:justify-self-end">
          {/* Offset accent frame */}
          <div
            className="absolute -inset-3 rounded-[2rem] border border-primary/20"
            aria-hidden="true"
          />
          <div
            className="absolute -right-2 -bottom-2 h-24 w-24 rounded-full border border-primary/25"
            aria-hidden="true"
          />
          <div
            className="absolute -top-3 -left-3 h-16 w-16 rounded-full bg-primary/10 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-secondary">
            <Image
              src="/images/portrait.png"
              alt="TechFounder portrait"
              fill
              priority
              className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 380px, 420px"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
