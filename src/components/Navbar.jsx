import { Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 90, damping: 14 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        
        <Link
          to="/"
          className="flex items-center gap-3 hover:text-purple-300 transition"
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 grid place-items-center shadow-glow">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg tracking-widest font-semibold">VELORA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* Add links here */}
        </nav>

        {/* <a
          href="#screen2"
          className="md:inline-flex hidden rounded-2xl px-4 py-2 bg-purple-600/80 hover:bg-purple-500 transition shadow-glow text-sm font-medium"
        >
          Dive in
        </a> */}
      </div>
    </motion.header>
  )
}
