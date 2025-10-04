import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Starfield from '../components/Starfield.jsx'

export default function AISimulation() {
  const navigate = useNavigate()

  // Safe back navigation (works even if opened directly)
  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) navigate(-1)
    else navigate('/')
  }

  const cards = [
    {
      title: 'Ground Impact',
      desc: 'Simulate asteroid hitting land and resulting earthquake effects',
      href: '#ground-sim', // Replace with real simulation link later
    },
    {
      title: 'Water Impact',
      desc: 'Simulate asteroid hitting ocean and resulting tsunami effects',
      href: '#water-sim', // Replace with real simulation link later
    },
  ]

  return (
    <section className="relative min-h-[90dvh] pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-star-gradient twinkle" />
      <Starfield />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-900/40 to-cosmic-900 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* ✅ Back Button (fixed and reliable) */}
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-white/15 
                     bg-white/5 hover:bg-white/10 transition text-white/80"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center text-4xl md:text-6xl font-extrabold tracking-wide 
                     text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70
                     [text-shadow:_0_0_24px_rgba(170,120,255,0.8)]"
        >
          AI Impact Simulation
        </motion.h1>

        {/* Simulation Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-purple-500/40 bg-black/30 backdrop-blur-md p-10"
            >
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-wide text-white
                           [text-shadow:_0_0_16px_rgba(180,120,255,0.7)] text-center"
              >
                {c.title}
              </h2>
              <p className="mt-3 text-center text-white/75 max-w-xl mx-auto">{c.desc}</p>

              <div className="mt-8 flex justify-center">
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl 
                             bg-purple-600/80 hover:bg-purple-500 transition font-medium text-white
                             border border-purple-400/40"
                >
                  Launch Simulation
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer credit */}
        <div className="mt-10 text-center text-sm text-white/50">
          Made with Manus
        </div>
      </div>
    </section>
  )
}
