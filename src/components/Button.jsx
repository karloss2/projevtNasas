import { motion } from 'framer-motion'

export default function Button({ as = 'a', href, onClick, children, className = '' }) {
  const Comp = as
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      className="relative group"
    >
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500 to-purple-500 opacity-40 blur-lg group-hover:opacity-60 transition" />
      <Comp
        href={href}
        onClick={onClick}
        className={
          'relative inline-flex items-center gap-2 rounded-3xl px-6 py-3 font-medium ' +
          'bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md ' +
          'shadow-glow transition ' + className
        }
      >
        {children}
      </Comp>
    </motion.div>
  )
}
