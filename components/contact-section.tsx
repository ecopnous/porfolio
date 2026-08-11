"use client"

import { useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Send, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.2 })
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  // TODO: replace this with your real contact email
  const RECIPIENT_EMAIL = "hello@ecopnous.com"

  return (
    <section id="contact" ref={ref} className="relative px-6 py-20 md:py-24">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/3 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div
            className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Get in Touch
            </span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              {"Let's Build Something"}
              <br />
              Extraordinary
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Looking for a technical co-founder, CTO advisor, or engineering partner?
              {"I'm"} open to discussing ambitious projects that push the boundaries of
              what technology can achieve.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/ecopnous-banzuzi-024560255/" },
                { label: "GitHub", href: "https://github.com/ecopnous" },
                { label: "Twitter / X", href: "https://x.com/ecopnous" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <div className="h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
                  <span className="text-sm font-medium">{social.label}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right column - form */}
          <div
            className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-primary/20 bg-card p-12 text-center">
                <div>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Send size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Message Sent</h3>
                  <p className="mt-2 text-muted-foreground">
                    {"I'll"} get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form
                className="space-y-6 rounded-2xl border border-border bg-card p-8 md:p-10"
                onSubmit={(e) => {
                  e.preventDefault()

                  const subjectLine = `[Portfolio Contact] ${subject || "General Inquiry"} — ${name}`
                  const body = `Name: ${name}\nEmail: ${email}\n\nSubject: ${subject || "(not specified)"}\n\nMessage:\n${message}\n\n---\nThis message was sent from the portfolio contact form.`
                  const mailto = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
                    subjectLine
                  )}&body=${encodeURIComponent(body)}`

                  // Open user's mail client with prefilled message
                  window.location.href = mailto

                  setSubmitted(true)
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="Technical Partnership">Technical Partnership</option>
                    <option value="CTO Advisory">CTO Advisory</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Investment Discussion">Investment Discussion</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,212,170,0.3)]"
                >
                  Send Message
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
