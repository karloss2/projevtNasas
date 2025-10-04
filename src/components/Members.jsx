import { motion } from 'framer-motion'
import { Rocket, Telescope, Sparkles } from 'lucide-react'

const people = [
  { name: 'Deyali Qassem', role: 'Team leader ,Unity Developer ', icon: Rocket },
  { name: 'Abdelrahman Hussein', role: 'Unity Developer', icon: Telescope },
  { name: 'Israa Alyazouri', role: 'Web Developer, AI Assistants', icon: Sparkles },
  { name: 'Malek Zeghari', role: 'Unity Developer , AI Assistants', icon: Rocket },
  { name: 'Karam Naji', role: 'Web Developer , AI Assistants', icon: Telescope },
  { name: 'Mayar Mualla', role: 'Web Developer , AI Assistants', icon: Sparkles },
]

export default function Members() {
  return (
    <section id="members" className="relative py-24 bg-cosmic-800/30">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
        >
          Velora Members
        </motion.h2>
        <p className="max-w-2xl text-white/70 mb-12">
          A team of passionate innovators exploring the universe through science and creativity.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-500 grid place-items-center shadow-glow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-sm text-white/70">{p.role}</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
