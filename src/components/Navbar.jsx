import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '../constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-md border-b border-blue-500/20 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white tracking-wider">
          <span className="text-accent">P</span>K
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-accent transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-primary/95 backdrop-blur-md border-t border-blue-500/20 px-6 py-4"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-accent transition-colors font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
