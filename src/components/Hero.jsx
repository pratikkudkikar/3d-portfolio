import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { USER } from '../constants'
import GeometricScene from './canvas/GeometricScene'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-primary to-slate-900/50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-semibold tracking-widest text-sm uppercase mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl lg:text-7xl font-extrabold leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-300">
              {USER.name.split(' ')[0]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-slate-300 font-medium mb-4"
          >
            {USER.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-slate-400 text-base leading-relaxed mb-10 max-w-lg"
          >
            {USER.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-7 py-3 bg-accent hover:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-accent/60 hover:border-accent text-accent hover:text-white hover:bg-accent/10 font-semibold rounded-lg transition-all duration-200"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-slate-500 text-sm"
          >
            📍 {USER.location}
          </motion.p>
        </motion.div>

        {/* Right: 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="h-[450px] lg:h-[600px] w-full"
        >
          <Suspense fallback={
            <div className="h-full flex items-center justify-center text-slate-500">
              Loading 3D scene...
            </div>
          }>
            <GeometricScene />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs"
      >
        <span>Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-slate-500 to-transparent"
        />
      </motion.div>
    </section>
  )
}
