import { SiteBrand } from "@/components/site-brand"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <SiteBrand size="sm" />
        <p className="text-xs text-muted-foreground">
          {"© 2026 All rights reserved. Designed & engineered with precision."}
        </p>
        <div className="flex gap-6">
          {[
            { name: "LinkedIn", url: "https://www.linkedin.com/in/ecopnous-banzuzi-024560255/" },
            { name: "GitHub", url: "https://github.com/ecopnous" },
            { name: "Twitter", url: "https://x.com/ecopnous" }
          ].map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
