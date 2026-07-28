"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Clock3, Mail, MoveRight, Sparkles } from "lucide-react"
import type { JournalArticle, JournalCategory } from "@/lib/journal-data"
import { usePublishedCollection } from "@/hooks/use-published-collection"

type Category = "Tout" | JournalCategory

const categories: Category[] = [
  "Tout",
  "Design",
  "Produit",
  "Carnet de bord",
  "Technologie",
]

function EditorialArtwork({
  variant,
  className = "",
}: {
  variant: string
  className?: string
}) {
  const patterns: Record<string, string> = {
    featured:
      "radial-gradient(circle at 68% 36%, rgba(0,212,170,.95) 0 6%, transparent 6.5%), radial-gradient(circle at 35% 68%, rgba(0,180,216,.8) 0 14%, transparent 14.5%), linear-gradient(135deg, #151531 0%, #090916 62%, #0f3040 100%)",
    "02":
      "radial-gradient(circle at 74% 25%, rgba(0,212,170,.75) 0 12%, transparent 12.5%), linear-gradient(145deg, #14142b, #0c0c1c)",
    "03":
      "radial-gradient(ellipse at 35% 60%, rgba(0,180,216,.72) 0 13%, transparent 13.5%), linear-gradient(145deg, #111a32, #0a0a18)",
    "04":
      "radial-gradient(circle at 75% 70%, rgba(0,212,170,.6) 0 8%, transparent 8.5%), linear-gradient(145deg, #172438, #0c0c19)",
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundImage: patterns[variant] }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute -right-10 bottom-7 h-36 w-36 rounded-full border border-white/25" />
      <div className="absolute right-[18%] top-[18%] h-24 w-24 rotate-45 border border-white/20" />
    </div>
  )
}

export function JournalPageContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tout")
  const { items: journalArticles, loading } = usePublishedCollection<JournalArticle>("journalArticles")
  const visiblePosts = useMemo(
    () => journalArticles.filter((post) => activeCategory === "Tout" || post.category === activeCategory),
    [activeCategory]
  )
  const featuredPost = visiblePosts.find((post) => post.featured) ?? visiblePosts[0]
  const remainingPosts = visiblePosts.filter((post) => post !== featuredPost)

  return (
    <div className="overflow-hidden pt-24">
      <section className="relative px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[130px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Journal Ecopnous
          </div>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl">
                Idées, expériences
                <span className="block text-primary">&amp; fragments de futur.</span>
              </h1>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg lg:mb-2">
              Un espace éditorial pour partager les coulisses du travail, les
              apprentissages de terrain et les convictions qui façonnent les
              produits utiles.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/35 px-6 py-5 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        {loading && <p className="py-16 text-center text-sm text-muted-foreground">Chargement des articles…</p>}
        {featuredPost ? (
          <article className="group grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
            <EditorialArtwork variant="featured" className="min-h-72 lg:min-h-[31rem]" />
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  <span>À la une · {featuredPost.category}</span>
                  <span>{featuredPost.date}</span>
                </div>
                <h2 className="mt-10 max-w-xl text-4xl font-bold leading-tight md:text-5xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
              </div>
              <Link
                href={`/journal/${featuredPost.slug}`}
                className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
              >
                Lire l&apos;article <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        ) : !loading && (
          <p className="py-16 text-center text-muted-foreground">Aucun article dans cette catégorie pour le moment.</p>
        )}

        <div className="mt-16 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">En ce moment</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">À explorer ensuite</h2>
          </div>
          <span className="hidden text-sm text-muted-foreground md:block">{remainingPosts.length} articles</span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {remainingPosts.map((post) => (
            <article key={post.number} className="group flex flex-col rounded-2xl border border-border bg-card p-3 transition-transform duration-300 hover:-translate-y-1">
              <EditorialArtwork variant={post.number} className="aspect-[4/3] rounded-xl" />
              <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-primary">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-snug">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock3 size={14} /> {post.readTime} de lecture</span>
                  <Link href={`/journal/${post.slug}`} aria-label={`Lire ${post.title}`} className="text-foreground transition-colors hover:text-primary">
                    <MoveRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="newsletter" className="px-6 pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl bg-foreground px-8 py-10 text-background md:grid-cols-[1fr_auto] md:items-center md:px-12 md:py-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles size={15} /> La lettre de l&apos;atelier
            </div>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
              Une note claire, de temps en temps. Jamais du bruit.
            </h2>
          </div>
          <Link href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
            <Mail size={16} /> Me contacter
          </Link>
        </div>
      </section>
    </div>
  )
}
