import { FaCheckCircle } from 'react-icons/fa'
import SectionReveal from './SectionReveal'
import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
            A quick snapshot of who I am and what I bring to the table.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.08} className="mt-12">
          <div className="glass-panel rounded-3xl p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-zinc-300">{about.summary}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-zinc-200"
                >
                  <FaCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
