"use client"

import { useState } from "react"
import Image from "next/image"
import {
  getClientMonogram,
  type TrustClient,
} from "@/lib/trust-clients"
import { usePublishedCollection } from "@/hooks/use-published-collection"
import { Reveal, Section, SectionHeader } from "@/components/section"

function ClientLogo({ client }: { client: TrustClient }) {
  const [failed, setFailed] = useState(false)
  const monogram = getClientMonogram(client.name)

  if (!client.logo || failed) {
    return (
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-sm font-bold text-primary"
        aria-hidden="true"
      >
        {monogram}
      </div>
    )
  }

  return (
    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-hairline bg-secondary/60">
      <Image
        src={client.logo}
        alt=""
        width={40}
        height={40}
        className="h-full w-full object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

function ClientCard({ client }: { client: TrustClient }) {
  const className =
    "surface surface-hover group flex h-full items-center gap-4 px-4 py-4"

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
  const { items: storedClients } = usePublishedCollection<
    TrustClient & { imageUrl?: string }
  >("clients")
  const trustClients = storedClients.map((client) => ({
    ...client,
    logo: client.logo || client.imageUrl,
  }))

  if (trustClients.length === 0) return null

  return (
    <Section id="trust" tone="tinted" divider>
      <SectionHeader
        eyebrow="Trusted by"
        title="They trust me"
        description="Companies and teams that turn to us to design, scale, and deploy their digital products."
        aside={
          <p className="text-sm text-muted-foreground">
            <span className="text-3xl font-bold tracking-tight text-foreground">
              {trustClients.length}+
            </span>
            <span className="mt-1 block">partners</span>
          </p>
        }
      />

      <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustClients.map((client, index) => (
          <Reveal
            key={client.id}
            delay={Math.min(index, 8) * 60}
            className="h-full"
          >
            <ClientCard client={client} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
