import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import SectionReveal from './SectionReveal'
import { featuredProjects, miniProjects } from '../data/portfolio'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
  { id: 'mini', label: 'Mini Projects' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const visibleFeatured = useMemo(() => {
    if (active === 'mini') return []
    return featuredProjects
  }, [active])

  const visibleMini = useMemo(() => {
    if (active === 'featured') return []
    return miniProjects
  }, [active])

  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-400">
            Production apps with real-time features, payments, and polished UX.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  active === f.id
                    ? 'bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-500/20'
                    : 'border border-white/10 bg-white/5 text-zinc-300 hover:border-white/20'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        <div className="mt-12 space-y-14">
          <AnimatePresence mode="popLayout">
            {(active === 'all' || active === 'featured') && visibleFeatured.length > 0 && (
              <motion.div
                key="featured-block"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid gap-8 lg:grid-cols-2"
              >
                {visibleFeatured.map((project, i) => (
                  <motion.article
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-px shadow-xl shadow-black/30"
                  >
                    <div className="glass-panel h-full rounded-[1.4rem] p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                          <p className="text-sm font-medium text-violet-300/90">{project.subtitle}</p>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-white/10 p-2.5 text-zinc-300 transition hover:border-blue-400/50 hover:text-white"
                            aria-label={`${project.name} live demo`}
                          >
                            <FaExternalLinkAlt className="h-4 w-4" />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-white/10 p-2.5 text-zinc-300 transition hover:border-violet-400/50 hover:text-white"
                            aria-label={`${project.name} GitHub`}
                          >
                            <FaGithub className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                      <p className="mt-4 text-zinc-400">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {project.features.length > 0 && (
                        <ul className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm text-zinc-300">
                          {project.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-violet-500" />
                              {feat}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl transition group-hover:bg-violet-500/25" />
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {(active === 'all' || active === 'mini') && visibleMini.length > 0 && (
            <SectionReveal>
              <h3 className="text-xl font-semibold text-zinc-200">Mini projects</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Smaller builds for practice and experimentation.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleMini.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-panel rounded-2xl border border-white/5 p-5 text-center transition hover:border-violet-500/30"
                  >
                    <span className="font-medium text-zinc-200">{p.name}</span>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          )}
        </div>
      </div>
    </section>
  )
}
