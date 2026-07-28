/**
 * Clients / partners — add entries freely.
 *
 * Required: `name`
 * Recommended: `logo` (path under /public/images/clients/)
 * Optional: `href`, `blurb`
 *
 * Logo + name are always shown. Without a logo file, a monogram is used.
 */

export type TrustClient = {
  name: string
  /** Path like "/images/clients/acme.svg" */
  logo?: string
  href?: string
  blurb?: string
}

export const trustClients: TrustClient[] = [
  {
    name: "NovaBank",
    logo: "/images/clients/novabank.svg",
    blurb: "Fintech",
  },
  {
    name: "Habitatly",
    logo: "/images/clients/habitatly.svg",
    blurb: "Real Estate",
  },
  {
    name: "Stockflow",
    logo: "/images/clients/stockflow.svg",
    blurb: "SaaS",
  },
  {
    name: "PulseAI",
    logo: "/images/clients/pulseai.svg",
    blurb: "AI",
  },
  {
    name: "Sensoriq",
    logo: "/images/clients/sensoriq.svg",
    blurb: "IoT",
  },
  {
    name: "Ledgerly",
    logo: "/images/clients/ledgerly.svg",
    blurb: "Finance",
  },
  {
    name: "BuildMeter",
    logo: "/images/clients/buildmeter.svg",
    blurb: "PropTech",
  },
  {
    name: "OrbitOps",
    logo: "/images/clients/orbitops.svg",
    blurb: "DevOps",
  },
]

export function getClientMonogram(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase()
}
