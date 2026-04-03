import { motion } from 'framer-motion'
import { ABOUT_BULLETS, USER } from '../constants'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
}

export default function About() {
  const stats = [
    { label: 'Projects Built', value: '3+' },
    { label: 'Languages', value: 'C · Java' },
    { label: 'Focus Area', value: 'AI / ML' },
    { label: 'Location', value: 'Mangaluru' },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-primary to-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">Who I Am</p>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Bullets */}
          <div className="space-y-5">
            {ABOUT_BULLETS.map((bullet, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-4 items-start"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                <p className="text-slate-300 leading-relaxed">{bullet}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors duration-200"
              >
                <p className="text-2xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
