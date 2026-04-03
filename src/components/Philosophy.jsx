import { motion } from 'framer-motion'
import { PHILOSOPHY } from '../constants'

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">Guiding Principle</p>
          <h2 className="text-4xl font-bold text-white">Philosophy</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-blue-900/30 to-slate-800/30 border border-blue-500/20 rounded-2xl p-10 lg:p-14"
        >
          {/* Decorative quotes */}
          <span className="absolute top-6 left-8 text-7xl text-blue-500/10 font-serif leading-none select-none">"</span>
          <span className="absolute bottom-2 right-8 text-7xl text-blue-500/10 font-serif leading-none select-none">"</span>

          <p className="text-2xl lg:text-3xl font-semibold text-blue-200 leading-relaxed mb-8 font-[serif]">
            {PHILOSOPHY.sanskrit}
          </p>

          <div className="w-16 h-px bg-accent/50 mx-auto mb-8" />

          <p className="text-slate-300 text-lg leading-relaxed italic mb-8 max-w-2xl mx-auto">
            "{PHILOSOPHY.english}"
          </p>

          <p className="text-accent font-semibold tracking-wide text-sm">— {PHILOSOPHY.citation}</p>
        </motion.div>
      </div>
    </section>
  )
}
