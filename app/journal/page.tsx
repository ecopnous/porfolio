import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { JournalPageContent } from "@/components/journal-page-content"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Journal | Ecopnous",
  description:
    "Notes de terrain, expériences et perspectives sur le design, les produits numériques et la technologie.",
}

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <JournalPageContent />
      <Footer />
    </main>
  )
}
