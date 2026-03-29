import { FaBriefcase } from 'react-icons/fa'
import SectionReveal from './SectionReveal'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
            Professional journey across tech and prior industries.
          </p>
        </SectionReveal>

        <ul className="relative mx-auto mt-14 max-w-2xl space-y-8 border-l border-white/10 pl-8">
          {experience.map((job, i) => (
            <li key={`${job.role}-${job.company}`} className="relative">
              <span className="absolute -left-[39px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-blue-500/50 bg-[#0a0b12]">
                <FaBriefcase className="h-2.5 w-2.5 text-violet-400" />
              </span>
              <SectionReveal delay={i * 0.06}>
                <div className="glass-panel rounded-2xl p-6">
                  <p className="text-sm font-medium text-blue-300/90">{job.period || '—'}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{job.role}</h3>
                  <p className="text-zinc-400">{job.company}</p>
                </div>
              </SectionReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
