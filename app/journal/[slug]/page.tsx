import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"
import { JournalArticleContent } from "@/components/journal-article-content"
import { Navbar } from "@/components/navbar"
import {
  getAdjacentArticles,
  getArticleBySlug,
  journalArticles,
} from "@/lib/journal-data"

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) return { title: "Article introuvable | Ecopnous" }

  return {
    title: `${article.title} | Journal Ecopnous`,
    description: article.excerpt,
  }
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  const { prev, next } = getAdjacentArticles(slug)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <JournalArticleContent
        article={article}
        prevArticle={prev}
        nextArticle={next}
      />
      <Footer />
    </main>
  )
}
