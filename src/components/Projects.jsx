import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-primary to-slate-900/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">What I've Built</p>
          <h2 className="text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className={`bg-gradient-to-br ${project.color} border ${project.border} rounded-2xl p-7 flex flex-col gap-5 backdrop-blur-sm`}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/10 text-slate-200 text-xs font-medium rounded-full border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {project.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2 items-start text-sm text-slate-300">
                    <span className="text-accent mt-0.5">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
