"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"
import {
  getClientMonogram,
  type TrustClient,
} from "@/lib/trust-clients"
import { usePublishedCollection } from "@/hooks/use-published-collection"

function ClientLogo({ client }: { client: TrustClient }) {
  const [failed, setFailed] = useState(false)
  const monogram = getClientMonogram(client.name)

  if (!client.logo || failed) {
    return (
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary"
        aria-hidden="true"
      >
        {monogram}
      </div>
    )
  }

  return (
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary/60 p-2">
      <Image
        src={client.logo}
        alt=""
        width={40}
        height={40}
        className="h-8 w-8 object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

function ClientCard({ client }: { client: TrustClient }) {
  const className =
    "group flex items-center gap-4 rounded-xl border border-border/70 bg-card/50 px-4 py-4 transition-all duration-300 hover:border-primary/25 hover:bg-card"

  const content = (
    <>
      <ClientLogo client={client} />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
          {client.name}
        </p>
        {client.blurb && (
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {client.blurb}
          </p>
        )}
      </div>
    </>
  )

  if (client.href) {
    return (
      <a
        href={client.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={client.name}
      >
        {content}
      </a>
    )
  }

  return <div className={className}>{content}</div>
}

export function TrustSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })
  const { items: storedClients, loading } = usePublishedCollection<TrustClient & { imageUrl?: string }>("clients")
  const isVisible = isInView || !loading
  const trustClients = storedClients.map((client) => ({
    ...client,
    logo: client.logo || client.imageUrl,
  }))

  if (trustClients.length === 0) return null

  return (
    <section id="trust" ref={ref} className="relative overflow-hidden px-6 py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-secondary/30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div
          className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="max-w-xl">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Trusted by
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              They trust me
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Companies and teams that turn to us to design, scale, and deploy their digital products.
            </p>
          </div>
          <p className="text-sm text-muted-foreground md:text-right">
            <span className="font-semibold text-foreground">
              {trustClients.length}+
            </span>{" "}
            partners
          </p>
        </div>

        <div
          className={`mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {trustClients.map((client, index) => (
            <div
              key={client.id}
              className="transition-all duration-500"
              style={{
                transitionDelay: isVisible
                  ? `${Math.min(index, 8) * 60}ms`
                  : undefined,
              }}
            >
              <ClientCard client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
