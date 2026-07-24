"use client"

import { useState } from "react"
import { Play, ExternalLink } from "lucide-react"
import { extractYouTubeVideoId } from "@/lib/projects-data"

interface ProjectVideoProps {
  /** Bare YouTube ID or full URL (watch / youtu.be / embed / shorts). */
  videoId: string
  title: string
}

export function ProjectVideo({ videoId, title }: ProjectVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const id = extractYouTubeVideoId(videoId)

  if (!id) return null

  const thumbnail = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
  const watchUrl = `https://www.youtube.com/watch?v=${id}`
  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_40px_rgba(0,0,0,0.15)]">
      {isPlaying ? (
        <iframe
          key={id}
          src={embedUrl}
          title={`${title} — product demo`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play ${title} demo video`}
          className="group absolute inset-0 w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={`${title} video thumbnail`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 transition-opacity duration-300 group-hover:via-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(0,212,170,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:bg-primary md:h-20 md:w-20">
              <Play size={28} className="ml-1 fill-current" />
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 md:p-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-primary">
                Product Demo
              </p>
              <p className="mt-1 text-sm font-semibold text-white md:text-base">
                Watch {title} in action
              </p>
            </div>
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
            >
              YouTube <ExternalLink size={12} />
            </a>
          </div>
        </button>
      )}
    </div>
  )
}
