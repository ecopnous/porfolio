export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <span className="text-[10px] font-bold text-primary-foreground">{"</"}</span>
          </div>
          <span className="text-sm font-semibold text-foreground">TechFounder</span>
        </div>
        <p className="text-xs text-muted-foreground">
          {"© 2026 All rights reserved. Designed & engineered with precision."}
        </p>
        <div className="flex gap-6">
          {["LinkedIn", "GitHub", "Twitter"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
