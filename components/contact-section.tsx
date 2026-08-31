"use client"

import { useState } from "react"
import { Send, ArrowUpRight, Mail } from "lucide-react"
import { Reveal, Section } from "@/components/section"

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ecopnous-banzuzi-024560255/",
  },
  { label: "GitHub", href: "https://github.com/ecopnous" },
  { label: "Twitter / X", href: "https://x.com/ecopnous" },
]

const fieldClass =
  "w-full rounded-xl border border-hairline bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  // TODO: replace this with your real contact email
  const RECIPIENT_EMAIL = "hello@ecopnous.com"

  return (
    <Section id="contact" divider>
      <div
        className="glow-orb pointer-events-none absolute -bottom-24 left-1/2 h-[420px] w-[640px] -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow">Get in touch</span>
          <h2 className="display mt-5 text-3xl text-foreground sm:text-4xl md:text-[2.75rem]">
            {"Let's build something"}
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient">extraordinary</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Looking for a technical co-founder, CTO advisor, or engineering
            partner? {"I'm"} open to discussing ambitious projects that push the
            boundaries of what technology can achieve.
          </p>

          <a
            href={`mailto:${RECIPIENT_EMAIL}`}
            className="surface surface-hover mt-10 flex w-full max-w-sm items-center gap-4 px-5 py-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
              <Mail size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Email
              </span>
              <span className="block truncate text-sm font-semibold text-foreground">
                {RECIPIENT_EMAIL}
              </span>
            </span>
          </a>

          <div className="mt-8 flex flex-col gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
                <span className="text-sm font-medium">{social.label}</span>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 transition-all duration-300 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          {submitted ? (
            <div className="surface flex h-full items-center justify-center p-12 text-center">
              <div>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/12">
                  <Send size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Message sent
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {"I'll"} get back to you within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            <form
              className="surface space-y-5 p-6 sm:p-8 md:p-10"
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
              <div className="grid gap-5 sm:grid-cols-2">
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
                    className={fieldClass}
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
                    className={fieldClass}
                  />
                </div>
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
                  className={fieldClass}
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
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className={`${fieldClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-18px_var(--glow)] transition-all duration-300 hover:brightness-110"
              >
                Send message
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Opens your mail client with the message pre-filled.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  )
}
