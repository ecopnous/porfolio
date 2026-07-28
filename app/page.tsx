import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { FeaturedProduct } from "@/components/featured-product"
import { ProductPortfolio } from "@/components/product-portfolio"
import { TrustSection } from "@/components/trust-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <FeaturedProduct />
      <ProductPortfolio />
      <TrustSection />
      <ArchitectureSection />
      <TechStackSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
