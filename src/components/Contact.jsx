import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionReveal from './SectionReveal'
import { contact } from '../data/portfolio'

const items = [
  { icon: FaPhone, label: 'Phone', value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
  { icon: FaEnvelope, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/ajmalcvaju',
    href: contact.github,
    external: true,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/ajmal-cv',
    href: contact.linkedin,
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
            Open to opportunities and collaborations. Reach out anytime.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="glass-panel group flex items-center gap-4 rounded-2xl p-6 transition hover:border-blue-500/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-violet-600/20 text-blue-200 transition group-hover:scale-105">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-0.5 font-medium text-zinc-100 break-all">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
