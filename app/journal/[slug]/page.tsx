import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { RemoteJournalArticleContent } from "@/components/journal-article-content"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Article | Journal Ecopnous",
  description: "Une publication du Journal Ecopnous.",
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <RemoteJournalArticleContent slug={slug} />
      <Footer />
    </main>
  )
}
