import { USER } from '../constants'

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 border-t border-blue-500/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} <span className="text-accent font-semibold">Pratik Kudkikar</span>. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href={USER.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors text-sm">GitHub</a>
          <a href={USER.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors text-sm">LinkedIn</a>
          <a href={USER.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent transition-colors text-sm">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
