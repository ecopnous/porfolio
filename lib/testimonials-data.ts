/**
 * Testimonials — add entries freely without touching the UI.
 *
 * Required: name, company, comment, rating (1–5)
 * Optional: image (path under /public), role
 */

export type Testimonial = {
  name: string
  company: string
  /** Role / title, e.g. "CTO" */
  role?: string
  /** Rating from 1 to 5 */
  rating: number
  comment: string
  /** Path like "/images/testimonials/anna.jpg" */
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    company: "NovaBank",
    role: "Head of Product",
    rating: 5,
    image: "/placeholder-user.jpg",
    comment:
      "Ecopnous turned a complex fintech roadmap into a clean, scalable platform. Delivery was sharp, communication was clear, and the architecture still supports our growth today.",
  },
  {
    name: "Marcus Webb",
    company: "Habitatly",
    role: "CEO",
    rating: 5,
    image: "/placeholder-user.jpg",
    comment:
      "We needed a technical partner who could think product and systems at the same time. The result exceeded expectations — faster releases, stronger reliability, and a team that finally ships with confidence.",
  },
  {
    name: "Amina Diallo",
    company: "PulseAI",
    role: "Engineering Lead",
    rating: 5,
    image: "/placeholder-user.jpg",
    comment:
      "Rare mix of depth and pragmatism. From API design to production ops, every decision felt intentional. Our AI messaging stack is more stable and easier to evolve.",
  },
  {
    name: "Jonas Keller",
    company: "Stockflow",
    role: "COO",
    rating: 4,
    image: "/placeholder-user.jpg",
    comment:
      "Clear priorities, strong ownership, and excellent technical judgment. The inventory platform launched on time and continues to scale with our warehouses.",
  },
]

export function clampRating(rating: number): number {
  if (!Number.isFinite(rating)) return 0
  return Math.min(5, Math.max(0, Math.round(rating)))
}
