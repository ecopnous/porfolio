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
import { Reveal, Section, SectionHeader } from "@/components/section"

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
    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-hairline">
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
    <article className="surface relative flex h-full flex-col px-6 py-8 md:px-10 md:py-10">
      <Quote
        size={28}
        className="mb-6 text-primary/40"
        aria-hidden="true"
      />

      <Stars rating={testimonial.rating} />

      <p className="mt-5 flex-1 text-base leading-relaxed text-foreground md:text-lg text-pretty">
        “{testimonial.comment}”
      </p>

      <div className="mt-8 flex items-center gap-4 border-t border-hairline pt-6">
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
  const sectionRef = useRef<HTMLDivElement>(null)
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
    <Section id="testimonials" divider>
      <div ref={sectionRef}>
        <SectionHeader
          eyebrow="Testimonials"
          title="What partners say"
          description="Real feedback from founders and teams who shipped with Ecopnous."
          aside={
            testimonials.length > 1 ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-surface text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-surface text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            ) : undefined
          }
        />

        <Reveal className="mt-12">
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
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    selected === index
                      ? "w-7 bg-primary"
                      : "w-1.5 bg-border hover:bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
