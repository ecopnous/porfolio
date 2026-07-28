"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, ChevronLeft, Clock3, Quote } from "lucide-react"
import type { JournalArticle } from "@/lib/journal-data"

function EditorialHeroArt({ number }: { number: string }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "radial-gradient(circle at 72% 35%, rgba(0,212,170,.95) 0 6%, transparent 6.5%), radial-gradient(circle at 30% 74%, rgba(0,180,216,.68) 0 15%, transparent 15.5%), linear-gradient(135deg, #171735 0%, #090916 60%, #10313e 100%)",
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute -right-10 bottom-[-7rem] h-80 w-80 rounded-full border border-white/20" />
      <div className="absolute right-[22%] top-[18%] h-36 w-36 rotate-45 border border-white/20" />
      <span className="absolute bottom-[-.2em] right-[9%] text-[13rem] font-bold leading-none text-white/[.07] md:text-[18rem]">{number}</span>
    </div>
  )
}

export function JournalArticleContent({
  article,
  prevArticle,
  nextArticle,
}: {
  article: JournalArticle
  prevArticle: JournalArticle | null
  nextArticle: JournalArticle | null
}) {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative isolate min-h-[590px] overflow-hidden text-white">
        <EditorialHeroArt number={article.number} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />

        <div className="absolute left-6 top-24 z-10 md:left-8">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/35 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary"
          >
            <ChevronLeft size={16} />
            Tous les articles
          </Link>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-5xl flex-col justify-end px-6 pb-14 pt-36">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <span>{article.category}</span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span className="text-white/65">{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span className="inline-flex items-center gap-1.5 text-white/65"><Clock3 size={13} /> {article.readTime} de lecture</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[.98] tracking-tight md:text-7xl">{article.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{article.excerpt}</p>
        </div>
      </section>

      <article className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem]">
            <div>
              <p className="text-2xl font-medium leading-relaxed text-foreground md:text-3xl">{article.intro}</p>

              <div className="mt-16 space-y-16">
                {article.sections.map((section) => (
                  <section key={section.title}>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{section.eyebrow}</p>
                    <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{section.title}</h2>
                    <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </section>
                ))}
              </div>

              <blockquote className="my-16 border-l-2 border-primary bg-card px-7 py-8 md:px-10">
                <Quote className="text-primary" size={25} />
                <p className="mt-4 text-2xl font-medium leading-relaxed md:text-3xl">{article.quote}</p>
              </blockquote>
            </div>

            <aside className="lg:pt-2">
              <div className="sticky top-28 rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">À retenir</p>
                <ul className="mt-5 space-y-4">
                  {article.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Check size={16} className="mt-0.5 shrink-0 text-primary" /> {takeaway}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="border-y border-border bg-card/50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Continuer la lecture</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {prevArticle ? (
              <Link href={`/journal/${prevArticle.slug}`} className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"><ArrowLeft size={15} /> Article précédent</div>
                <p className="mt-4 text-2xl font-semibold transition-colors group-hover:text-primary">{prevArticle.title}</p>
              </Link>
            ) : <div />}
            {nextArticle ? (
              <Link href={`/journal/${nextArticle.slug}`} className="group rounded-2xl border border-border bg-card p-6 text-right transition-colors hover:border-primary/40">
                <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">Article suivant <ArrowRight size={15} /></div>
                <p className="mt-4 text-2xl font-semibold transition-colors group-hover:text-primary">{nextArticle.title}</p>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  )
}
