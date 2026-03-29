import { FaGraduationCap } from 'react-icons/fa'
import SectionReveal from './SectionReveal'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
            Academic background and focused training in full-stack development.
          </p>
        </SectionReveal>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6">
          {education.map((edu, i) => (
            <SectionReveal key={edu.title} delay={i * 0.08}>
              <div className="glass-panel flex gap-4 rounded-2xl p-6 sm:gap-6 sm:p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-600/20">
                  <FaGraduationCap className="h-6 w-6 text-violet-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
                  <p className="mt-1 text-zinc-400">{edu.institution}</p>
                  {edu.period && (
                    <p className="mt-2 text-sm font-medium text-blue-300/80">{edu.period}</p>
                  )}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
