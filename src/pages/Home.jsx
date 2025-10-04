import { motion } from 'framer-motion'
import { ChevronDown, Info } from 'lucide-react'
import Starfield from '../components/Starfield.jsx'
import Button from '../components/Button.jsx'
import Explore from '../components/Explore.jsx'
import Members from '../components/Members.jsx'

export default function Home() {
  const scrollToExplore = () => {
    const target = document.getElementById('explore')
    if (!target) return

    // Adjust for your fixed navbar height
    const NAVBAR_H = 80 // px — tweak if needed
    const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_H

    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100dvh] pt-24 flex items-center justify-center">
        <div className="absolute inset-0 bg-star-gradient twinkle" />
        <Starfield />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-900/20 to-cosmic-900 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-6xl md:text-8xl font-extrabold tracking-wide leading-[0.95] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
          >
            VELORA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-5 text-lg md:text-2xl text-white/80"
          >
            When Space Collides with Earth — <span className="text-white">See the Future Before It Happens</span>
          </motion.p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button onClick={scrollToExplore}>
              <ChevronDown className="h-5 w-5 animate-bounce" />
              <span>Dive in</span>
            </Button>

            <Button href="#members">
              <Info className="h-5 w-5" />
              <span> Learn more about Velora</span>
            </Button>
          </div>
        </div>
      </section>

      {/* EXPLORE (anchor wrapper to avoid editing Explore.jsx) */}
      <div id="explore" className="scroll-mt-24">
        <Explore />
      </div>

      {/* MEMBERS */}
      <Members />
    </>
  )
}
