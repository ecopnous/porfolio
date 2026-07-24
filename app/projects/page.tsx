import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { ProjectsPageContent } from "@/components/projects/projects-page-content"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Projects | Tech Founder & CTO",
  description:
    "Explore a portfolio of scalable digital products across Fintech, SaaS, AI, Real Estate, and IoT — engineered for global impact.",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ProjectsPageContent />
      <Footer />
    </main>
  )
}
