import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Play, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import Starfield from '../components/Starfield.jsx'

export default function SimulationGame() {
  const navigate = useNavigate()

  // Safe back navigation (works even when opened directly)
  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) navigate(-1)
    else navigate('/')
  }

  return (
    <section className="relative min-h-[90dvh] pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-star-gradient twinkle" />
      <Starfield />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-900/40 to-cosmic-900 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-4">
        {/* ✅ Back Button — fixed to top-left corner */}
        <div className="absolute left-6 top-6">
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-white/15 
                       bg-white/5 hover:bg-white/10 transition text-white/80"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center text-4xl md:text-6xl font-extrabold tracking-wide 
                     text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70
                     [text-shadow:_0_0_25px_rgba(180,120,255,0.8)]"
        >
          Simulation Game
        </motion.h1>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-3xl border border-purple-500/40 bg-black/30 backdrop-blur-md p-10 text-center"
        >
          <p className="text-lg text-white/80 mb-8">
            Experience realistic asteroid impact simulations
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <a
              href="https://velora-nebddt.manus.space/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
                         bg-purple-600/80 hover:bg-purple-500 transition font-medium text-white"
            >
              <Play className="h-5 w-5" />
              Open Game in Browser
            </a> */}

            <a
              href="https://drive.google.com/file/d/1FzgFDOetKZY1jCDXnpSsMTN5APms74sa/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
                         border border-purple-400/50 hover:bg-purple-600/40 transition text-white/90"
            >
              <Download className="h-5 w-5" />
              Download Game
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm text-white/50">
          Made with Manus
        </div>
      </div>
    </section>
  )
}
