/**
 * Tech Stack data — add skills freely without touching the UI.
 *
 * Minimal item: `{ name: "TypeScript" }`
 * Optional: `mark` (2 letters), `color` (hex), `blurb` (short note)
 *
 * Add a new category object anytime; empty categories are ignored.
 */

export type TechItem = {
  name: string
  /** Optional 2-letter mark. Auto-generated from name if omitted. */
  mark?: string
  /** Optional brand/accent hex. Auto-picked if omitted. */
  color?: string
  /** Optional short line under the name. */
  blurb?: string
}

export type TechCategory = {
  label: string
  items: TechItem[]
}

const COLOR_PALETTE = [
  "#42A5F5",
  "#A78BFA",
  "#FB7185",
  "#F87171",
  "#4ADE80",
  "#60A5FA",
  "#22D3EE",
  "#34D399",
  "#A3A3A3",
  "#818CF8",
  "#38BDF8",
  "#FBBF24",
  "#FB923C",
  "#F97316",
  "#A3E635",
  "#2DD4BF",
  "#C084FC",
  "#E879F9",
] as const

function hashString(value: string): number {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    hash = value.charCodeAt(i) + ((hash << 5) - hash)
  }
  return Math.abs(hash)
}

export function getTechMark(name: string, mark?: string): string {
  if (mark?.trim()) return mark.trim().slice(0, 3)
  const clean = name.replace(/[^a-zA-Z0-9]/g, "")
  if (clean.length >= 2) return clean.slice(0, 2)
  return name.slice(0, 2).toUpperCase()
}

export function getTechColor(name: string, color?: string): string {
  if (color?.trim()) return color.trim()
  return COLOR_PALETTE[hashString(name) % COLOR_PALETTE.length]
}

export const techCategories: TechCategory[] = [
  {
    label: "Mobile",
    items: [
      { name: "Flutter", color: "#42A5F5" },
      { name: "Kotlin", color: "#A78BFA" },
      { name: "Swift", color: "#FB7185" },
      { name: "React Native", color: "#22D3EE", mark: "RN" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Laravel", color: "#F87171" },
      { name: "Node.js", color: "#4ADE80", mark: "Nj" },
      { name: "Python", color: "#60A5FA" },
      { name: "Go", color: "#22D3EE", mark: "Go" },
      { name: "NestJS", color: "#E11D48", mark: "Ne" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", color: "#22D3EE" },
      { name: "Vue.js", color: "#34D399", mark: "Vu" },
      { name: "Next.js", color: "#A3A3A3", mark: "Nx" },
      { name: "TypeScript", color: "#60A5FA", mark: "TS" },
      { name: "Tailwind CSS", color: "#38BDF8", mark: "Tw" },
    ],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", color: "#818CF8", mark: "Pg" },
      { name: "MongoDB", color: "#4ADE80", mark: "Mg" },
      { name: "Redis", color: "#F87171" },
      { name: "MySQL", color: "#FBBF24", mark: "My" },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", color: "#38BDF8" },
      { name: "Kubernetes", color: "#60A5FA", mark: "K8" },
      { name: "AWS", color: "#FBBF24" },
      { name: "CI/CD", color: "#A78BFA", mark: "CI" },
      { name: "Terraform", color: "#7C3AED", mark: "Tf" },
    ],
  },
  {
    label: "AI / ML",
    items: [
      { name: "TensorFlow", color: "#FB923C", mark: "TF" },
      { name: "PyTorch", color: "#F97316", mark: "Pt" },
      { name: "OpenAI", color: "#A3E635", mark: "OI" },
      { name: "LangChain", color: "#34D399", mark: "LC" },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", color: "#F87171" },
      { name: "Figma", color: "#E879F9" },
      { name: "GraphQL", color: "#E879F9", mark: "GQ" },
      { name: "Prisma", color: "#2DD4BF" },
    ],
  },
]

/** Categories that actually contain at least one skill. */
export function getActiveTechCategories(): TechCategory[] {
  return techCategories.filter((category) => category.items.length > 0)
}
