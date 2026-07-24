"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Server,
  Database,
  Layers,
  GitBranch,
  TrendingUp,
  Zap,
  BarChart3,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import type { ClientProject } from "@/lib/projects-data"
import { ProjectVideo } from "./project-video"
import { ProjectGallery } from "./project-gallery"

interface CaseStudyContentProps {
  project: ClientProject
  prevProject: ClientProject | null
  nextProject: ClientProject | null
}

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function CaseStudyContent({
  project,
  prevProject,
  nextProject,
}: CaseStudyContentProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        {/* Back button — below fixed navbar */}
        <div className="absolute top-24 left-6 z-40 md:left-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
          >
            <ChevronLeft size={16} />
            All Projects
          </Link>
        </div>

        <div className="relative h-[60vh] min-h-[450px]">
          <Image
            src={project.bannerImage}
            alt={`${project.title} banner`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

          <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
            <div className="mx-auto max-w-5xl">
              <span
                className={`inline-flex rounded-full border border-border/50 bg-card/60 backdrop-blur-sm px-4 py-1.5 text-xs font-medium uppercase tracking-widest ${project.color}`}
              >
                {project.category}
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Overview
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Project Overview
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <AnimatedSection className="lg:col-span-2" delay={100}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                Description
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {project.overview.description}
              </p>
            </AnimatedSection>

            <div className="space-y-8">
              <AnimatedSection delay={200}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  Business Context
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.overview.businessContext}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  Target Users
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.overview.targetUsers}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo Video */}
      {project.youtubeVideoId && (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <AnimatedSection>
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Watch Demo
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                See it in action
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                A walkthrough of the product experience — core flows, interface,
                and how it solves the problem end to end.
              </p>
            </AnimatedSection>

            <AnimatedSection className="mt-10" delay={150}>
              <ProjectVideo
                videoId={project.youtubeVideoId}
                title={project.title}
              />
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Problem */}
      <section className="px-6 py-20 bg-card/50">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              The Challenge
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Problem Statement
            </h2>
            <div className="mt-8 rounded-2xl border border-border bg-card p-8 md:p-10">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.problem}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              The Approach
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Solution
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={100}>
              <div className="rounded-2xl border border-border bg-card p-8 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <Layers size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Strategy
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.solution.strategy}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="rounded-2xl border border-border bg-card p-8 h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-6">
                  <GitBranch size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Technical Approach
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.solution.technicalApproach}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6 py-20 bg-card/50">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Engineering
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              System Architecture
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Server,
                title: "Backend",
                content: project.architecture.backend,
              },
              {
                icon: Database,
                title: "Database",
                content: project.architecture.database,
              },
              {
                icon: TrendingUp,
                title: "Scalability",
                content: project.architecture.scalability,
              },
              {
                icon: Layers,
                title: "System Design",
                content: project.architecture.systemDesign,
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-card p-6 h-full transition-all duration-300 hover:border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.content}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Capabilities
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Core Features
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-6 h-full transition-all duration-300 hover:border-primary/20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-4">
                    <Zap size={18} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-20 bg-card/50">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Visual Showcase
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Gallery
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Click any frame to open the full viewer — navigate with arrows or
              your keyboard.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={120}>
            <ProjectGallery images={project.gallery} title={project.title} />
          </AnimatedSection>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Outcomes
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Results & Impact
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Impact",
                content: project.results.impact,
              },
              {
                icon: Zap,
                title: "Performance",
                content: project.results.performance,
              },
              {
                icon: BarChart3,
                title: "Business Results",
                content: project.results.business,
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="rounded-2xl border border-border bg-card p-6 h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-4">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.content}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-6 py-20 bg-card/50">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Stack
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
              Technologies Used
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:border-primary/30 hover:text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Navigation */}
      <section className="px-6 py-16 border-t border-border">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card px-6 py-4 transition-all duration-300 hover:border-primary/30"
              >
                <ArrowLeft
                  size={18}
                  className="text-muted-foreground transition-transform duration-300 group-hover:-translate-x-1 group-hover:text-primary"
                />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Previous Project
                  </p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-4 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-primary"
            >
              All Projects
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center justify-end gap-3 rounded-xl border border-border bg-card px-6 py-4 transition-all duration-300 hover:border-primary/30"
              >
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1">
                    Next Project
                  </p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className="text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
