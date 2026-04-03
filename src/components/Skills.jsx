import { motion } from 'framer-motion'
import { SKILLS } from '../constants'

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">What I Know</p>
          <h2 className="text-4xl font-bold text-white">Skills & Technologies</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`bg-gradient-to-br ${skill.color} border border-white/10 rounded-xl p-5 flex flex-col items-center gap-3 cursor-default`}
            >
              <span className="text-3xl">{skill.emoji}</span>
              <span className="text-white font-medium text-sm text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
