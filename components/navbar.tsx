"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { SiteBrand } from "@/components/site-brand"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Journal", href: "/journal" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 24)
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-20 transition-opacity duration-500",
          scrolled ? "opacity-100" : "opacity-0"
        )}
        aria-hidden="true"
      >
        <div className="h-full w-full bg-background/88 backdrop-blur-xl" />
        <div className="rule-fade" />
      </div>

      <nav className="shell relative flex h-20 items-center justify-between">
        <SiteBrand />

        <div className="hidden items-center gap-1 md:flex">
          <div className="mr-2 flex items-center gap-1 rounded-full border border-hairline bg-surface p-1 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm transition-colors duration-300",
                  isActive(link.href)
                    ? "bg-primary/12 font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <Link
            href="/#contact"
            className="ml-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_var(--glow)] transition-all duration-300 hover:brightness-110"
          >
            Work with me
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-surface text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className="h-px origin-left bg-primary transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      {mobileOpen && (
        <div className="md:hidden">
          <div className="border-b border-hairline bg-background/95 backdrop-blur-xl">
            <div className="shell flex flex-col gap-1 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "rounded-xl px-3 py-3 text-base transition-colors",
                    isActive(link.href)
                      ? "bg-primary/10 font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-3 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Work with me
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
