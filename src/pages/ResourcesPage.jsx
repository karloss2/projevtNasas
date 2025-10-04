import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Starfield from '../components/Starfield.jsx'

const resources = [
  { title: 'NASA NEO API', desc: 'Asteroid data & orbits', href: 'https://api.nasa.gov/' },
  { title: 'USGS Earthquake Catalog', desc: 'Earthquake simulation data', href: 'https://earthquake.usgs.gov/fdsnws/event/1/' },
  { title: 'USGS Elevation Data', desc: 'Terrain & tsunami modeling', href: 'https://www.usgs.gov/programs/national-geospatial-program/national-map' },
  { title: 'NASA Planet Positions (JPL Horizons)', desc: 'Planetary position data', href: 'https://ssd.jpl.nasa.gov/horizons' },
  { title: 'NASA SBDB Query', desc: 'Small-Body Database', href: 'https://ssd-api.jpl.nasa.gov/doc/sbdb_query.html' },
  { title: 'NASA Eyes on Asteroids', desc: '3D asteroid visualization', href: 'https://eyes.nasa.gov/apps/asteroids/' },
  { title: 'NEOSSat Data', desc: 'Asteroid tracking data', href: 'https://www.asc-csa.gc.ca/eng/satellites/neossat/' },
  { title: 'Elliptical Orbit Simulator', desc: 'Orbit design tutorial', href: 'https://orbitsimulator.com/' },
]

const fullListSource = 'https://www.spaceappschallenge.org/2025/challenges/meteor-madness/?tab=resources'

export default function ResourcesPage() {
  const navigate = useNavigate()

  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) navigate(-1)
    else navigate('/')
  }

  return (
    <section className="relative min-h-[90dvh] pt-24 pb-20">
      <div className="absolute inset-0 bg-star-gradient twinkle" />
      <Starfield />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-900/30 to-cosmic-900 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-white/15 bg-white/5 hover:bg-white/10 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center text-4xl md:text-6xl font-extrabold tracking-wide
                     text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70
                     [text-shadow:_0_0_20px_rgba(143,109,240,0.6)]"
        >
          Scientific Resources
        </motion.h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <motion.a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group rounded-3xl border border-purple-500/40 bg-black/30
                         backdrop-blur-md p-6 hover:bg-black/40 hover:shadow-glow transition"
            >
              <div className="text-2xl md:text-[26px] font-semibold tracking-wide text-white">
                {r.title}
              </div>
              <div className="mt-2 text-white/70">{r.desc}</div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={fullListSource}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-purple-300 hover:text-purple-200 underline"
          >
            See full list on NASA Space Apps — Meteor Madness (Resources)
          </a>
        </div>
      </div>
    </section>
  )
}
