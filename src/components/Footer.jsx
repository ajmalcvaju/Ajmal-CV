import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { contact } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-zinc-500 sm:text-left">
          © {year} Ajmal CV. Built with React, Vite & Tailwind.
        </p>
        <div className="flex gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="rounded-lg border border-white/10 p-3 text-zinc-400 transition hover:border-white/20 hover:text-white"
            aria-label="Email"
          >
            <FaEnvelope className="h-5 w-5" />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 p-3 text-zinc-400 transition hover:border-white/20 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 p-3 text-zinc-400 transition hover:border-white/20 hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
