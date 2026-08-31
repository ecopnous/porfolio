import Link from "next/link"
import { SiteBrand } from "@/components/site-brand"

const navLinks = [
  { name: "Projects", url: "/projects" },
  { name: "Journal", url: "/journal" },
  { name: "Contact", url: "/#contact" },
]

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ecopnous-banzuzi-024560255/",
  },
  { name: "GitHub", url: "https://github.com/ecopnous" },
  { name: "Twitter", url: "https://x.com/ecopnous" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-hairline">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <SiteBrand size="lg" />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Building intelligent, scalable digital systems across fintech, SaaS,
            AI and IoT.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Elsewhere
          </p>
          <ul className="mt-4 space-y-2.5">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rule-fade" />
      <div className="shell flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
        <p>{"© 2026 Ecopnous. All rights reserved."}</p>
        <p>Designed &amp; engineered with precision.</p>
      </div>
    </footer>
  )
}
