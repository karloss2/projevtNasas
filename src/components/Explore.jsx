import { motion } from "framer-motion"
import { Rocket, Zap, Globe } from "lucide-react"
import { Link } from "react-router-dom"

const features = [
  {
    title: "Resources",
    desc: "Scientific data and research materials",
    icon: Rocket,
    gradient: "from-purple-500/40 to-purple-800/40",
    to: "/resources",
  },
  {
    title: "Simulation Game",
    desc: "Interactive asteroid impact simulator",
    icon: Zap,
    gradient: "from-indigo-500/40 to-blue-800/40",
    to: "/game",
  },
  // {
  //   title: "AI Simulation",
  //   desc: "Visualize impact scenarios",
  //   icon: Globe,
  //   gradient: "from-green-400/40 to-emerald-800/40",
  //   href: "https://www.velora.space/ai",
  // },
]

export default function Explore() {
  return (
    <section id="explore" className="relative py-28 bg-cosmic-900/60">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-16 text-white drop-shadow-lg"
        >
          Explore the Universe
        </motion.h2>

        {/* Centered large cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {features.map((f, i) => {
            const Icon = f.icon

            const CardInner = (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl border border-white/10 p-14 backdrop-blur-lg bg-gradient-to-br ${f.gradient} hover:shadow-glow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden cursor-pointer w-[22rem] h-[20rem] flex flex-col items-center justify-center`}
              >
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="p-5 rounded-2xl bg-black/40">
                    <Icon className="h-14 w-14 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white tracking-wide">
                    {f.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed max-w-sm">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            )

            if (f.to) {
              return (
                <Link key={f.title} to={f.to}>
                  {CardInner}
                </Link>
              )
            }

            if (f.href) {
              return (
                <a
                  key={f.title}
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CardInner}
                </a>
              )
            }

            return CardInner
          })}
        </div>
      </div>
    </section>
  )
}
