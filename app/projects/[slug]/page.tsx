import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  projects,
  getProjectBySlug,
  getAdjacentProjects,
  toClientProject,
} from "@/lib/projects-data"
import { Navbar } from "@/components/navbar"
import { CaseStudyContent } from "@/components/projects/case-study-content"
import { Footer } from "@/components/footer"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  }
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <CaseStudyContent
        project={toClientProject(project)}
        prevProject={prev ? toClientProject(prev) : null}
        nextProject={next ? toClientProject(next) : null}
      />
      <Footer />
    </main>
  )
}
