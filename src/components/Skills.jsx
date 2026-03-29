import { motion } from 'framer-motion'
import SectionReveal from './SectionReveal'
import { skillCategories } from '../data/portfolio'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
            Technologies I use to design, build, and ship production-ready applications.
          </p>
        </SectionReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10%' }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="glass-panel group rounded-2xl p-6 transition hover:border-blue-500/20"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-300/90">
                {cat.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-transparent px-3 py-1.5 text-sm font-medium text-zinc-200 transition group-hover:border-white/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
