"use client"

import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

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
    setMounted(true)
  }, [])

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

  const lightbox =
    mounted &&
    isOpen &&
    activeIndex !== null &&
    createPortal(
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${title} gallery viewer`}
        className="fixed inset-0 z-[200] flex items-center justify-center"
      >
        {/* Backdrop — click to close */}
        <button
          type="button"
          aria-label="Close gallery"
          onClick={close}
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Close */}
        <button
          type="button"
          onClick={close}
          aria-label="Close gallery"
          className="absolute top-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 md:top-6 md:right-6"
        >
          <X size={20} />
        </button>

        {/* Counter */}
        <div className="absolute top-5 left-4 z-30 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm md:top-7 md:left-6">
          {activeIndex + 1} / {count}
        </div>

        {/* Prev / Next */}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous image"
              className="absolute left-3 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute right-3 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {/* Centered image */}
        <div
          className="relative z-20 flex max-h-[78vh] max-w-[92vw] items-center justify-center md:max-w-[80vw]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt={`${title} — view ${activeIndex + 1}`}
            width={1600}
            height={1000}
            className="h-auto max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            sizes="80vw"
            priority
          />
        </div>

        {/* Thumbnails */}
        {count > 1 && (
          <div className="absolute inset-x-0 bottom-4 z-30 flex justify-center gap-2 px-4 md:bottom-6">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`View image ${i + 1}`}
                aria-current={i === activeIndex}
                className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-md border transition-all duration-300 md:h-14 md:w-20 ${
                  i === activeIndex
                    ? "border-white opacity-100 ring-1 ring-white/50"
                    : "border-white/20 opacity-45 hover:opacity-80"
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
      </div>,
      document.body
    )

  return (
    <>
      <div className="mt-12 grid gap-3 md:grid-cols-12 md:grid-rows-2 md:min-h-[480px]">
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

      {lightbox}
    </>
  )
}
