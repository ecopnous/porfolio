"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import {
  clampRating,
  type Testimonial,
} from "@/lib/testimonials-data"
import { usePublishedCollection } from "@/hooks/use-published-collection"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

function Stars({ rating }: { rating: number }) {
  const value = clampRating(rating)

  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < value
        return (
          <Star
            key={index}
            size={16}
            className={
              filled
                ? "fill-primary text-primary"
                : "fill-transparent text-border"
            }
          />
        )
      })}
    </div>
  )
}

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  const [failed, setFailed] = useState(false)
  const initials = testimonial.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")

  if (!testimonial.image || failed) {
    return (
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
        {initials || "?"}
      </div>
    )
  }

  return (
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-border">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        fill
        className="object-cover"
        sizes="56px"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

function TestimonialSlide({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-border bg-card px-6 py-8 md:px-10 md:py-10">
      <Quote
        size={28}
        className="mb-6 text-primary/40"
        aria-hidden="true"
      />

      <Stars rating={testimonial.rating} />

      <p className="mt-5 flex-1 text-base leading-relaxed text-foreground md:text-lg text-pretty">
        “{testimonial.comment}”
      </p>

      <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
        <Avatar testimonial={testimonial} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="truncate text-sm text-muted-foreground">
            {[testimonial.role, testimonial.company].filter(Boolean).join(" · ")}
          </p>
        </div>
      </div>
    </article>
  )
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.15 })
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)
  const [count, setCount] = useState(0)
  const { items: testimonials } = usePublishedCollection<Testimonial>("testimonials")

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return
    setSelected(carouselApi.selectedScrollSnap())
    setCount(carouselApi.scrollSnapList().length)
  }, [])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)
    return () => {
      api.off("reInit", onSelect)
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  // Gentle autoplay while section is visible
  useEffect(() => {
    if (!api || !isInView || testimonials.length < 2) return

    const id = window.setInterval(() => {
      if (api.canScrollNext()) api.scrollNext()
      else api.scrollTo(0)
    }, 6000)

    return () => window.clearInterval(id)
  }, [api, isInView, testimonials.length])

  if (testimonials.length === 0) return null

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <div
          className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Testimonials
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              What partners say
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Real feedback from founders and teams who shipped with Ecopnous.
            </p>
          </div>

          {testimonials.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        <div
          className={`mt-12 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: testimonials.length > 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={`${testimonial.name}-${testimonial.company}`}
                  className="pl-4 md:basis-1/2 lg:basis-1/2"
                >
                  <TestimonialSlide testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {count > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={selected === index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    selected === index
                      ? "w-7 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
