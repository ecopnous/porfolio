import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { RemoteCaseStudyContent } from "@/components/projects/case-study-content"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Projet | Ecopnous",
  description: "Une étude de cas Ecopnous.",
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <RemoteCaseStudyContent slug={slug} />
      <Footer />
    </main>
  )
}
