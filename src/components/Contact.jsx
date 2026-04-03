import { motion } from 'framer-motion'
import { USER } from '../constants'

const ContactItem = ({ icon, label, value, href }) => (
  <motion.a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
    whileHover={{ x: 6 }}
    className="flex items-center gap-4 p-4 bg-slate-800/50 border border-blue-500/20 rounded-xl hover:border-blue-500/50 transition-all duration-200 group"
  >
    <span className="text-2xl">{icon}</span>
    <div>
      <p className="text-slate-500 text-xs uppercase tracking-widest">{label}</p>
      <p className="text-slate-200 font-medium group-hover:text-accent transition-colors">{value}</p>
    </div>
  </motion.a>
)

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-primary to-slate-900/60">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">Get In Touch</p>
          <h2 className="text-4xl font-bold text-white">Contact</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto">
            Feel free to reach out for collaborations, projects, or just to say hi!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <ContactItem icon="📧" label="Email" value={USER.email} href={`mailto:${USER.email}`} />
          <ContactItem icon="📱" label="Phone" value={USER.phone} href={`tel:${USER.phone}`} />
          <ContactItem icon="💼" label="LinkedIn" value="pratikkudkikar" href={USER.linkedin} />
          <ContactItem icon="🐙" label="GitHub" value="pratikkudkikar" href={USER.github} />
          <ContactItem icon="📸" label="Instagram" value="@pratik_kudkikar___" href={USER.instagram} />
        </motion.div>
      </div>
    </section>
  )
}
