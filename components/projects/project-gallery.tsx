"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const isOpen = activeIndex !== null
  const count = images.length

  const close = useCallback(() => setActiveIndex(null), [])

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + count) % count
    )
  }, [count])

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % count
    )
  }, [count])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") showPrev()
      if (event.key === "ArrowRight") showNext()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, close, showPrev, showNext])

  if (count === 0) return null

  const [featured, ...rest] = images

  return (
    <>
      <div className="mt-12 grid gap-3 md:grid-cols-12 md:grid-rows-2 md:min-h-[480px]">
        {/* Featured shot */}
        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          className="group relative col-span-12 aspect-[16/10] overflow-hidden rounded-2xl border border-border md:col-span-8 md:row-span-2 md:aspect-auto md:min-h-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Image
            src={featured}
            alt={`${title} — view 1`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 66vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border/50 bg-card/80 text-foreground backdrop-blur-md">
              <Expand size={20} />
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
            <p className="text-sm font-medium text-foreground">Featured view</p>
            <span className="rounded-md bg-background/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm">
              1 / {count}
            </span>
          </div>
        </button>

        {/* Supporting shots */}
        {rest.map((img, i) => {
          const index = i + 1
          return (
            <button
              key={img}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative col-span-12 aspect-[16/10] overflow-hidden rounded-2xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:col-span-4 md:aspect-auto md:min-h-0 ${
                rest.length === 1 ? "md:row-span-2" : ""
              }`}
            >
              <Image
                src={img}
                alt={`${title} — view ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-background/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-card/80 text-foreground backdrop-blur-md">
                  <Expand size={16} />
                </span>
              </div>
              <span className="absolute bottom-3 right-3 rounded-md bg-background/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground backdrop-blur-sm">
                {index + 1} / {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Lightbox */}
      {isOpen && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} gallery viewer`}
          className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-8">
            <div>
              <p className="text-sm font-semibold text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground">
                {activeIndex + 1} / {count}
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              <X size={18} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 md:px-16">
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous image"
                  className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary md:left-6"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next image"
                  className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary md:right-6"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <div className="relative h-full w-full max-w-6xl">
              <Image
                key={images[activeIndex]}
                src={images[activeIndex]}
                alt={`${title} — view ${activeIndex + 1}`}
                fill
                className="object-contain animate-in fade-in duration-300"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {count > 1 && (
            <div className="flex justify-center gap-2 overflow-x-auto px-4 pb-6">
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`View image ${i + 1}`}
                  aria-current={i === activeIndex}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 ${
                    i === activeIndex
                      ? "border-primary ring-1 ring-primary/40 opacity-100"
                      : "border-border opacity-50 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}
