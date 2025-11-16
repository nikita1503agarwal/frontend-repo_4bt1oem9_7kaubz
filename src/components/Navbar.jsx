import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const items = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center justify-between rounded-full border border-white/10 bg-black/50 backdrop-blur px-4 py-2">
          <a href="#home" className="text-cyan-200 font-semibold tracking-wider">NEON</a>
          <div className="hidden md:flex items-center gap-2">
            {items.map((i) => (
              <a key={i.href} href={i.href} className="px-3 py-1 rounded-full text-cyan-100/80 hover:text-cyan-100 hover:bg-white/5 border border-transparent hover:border-cyan-400/40 transition">
                {i.label}
              </a>
            ))}
          </div>
        </motion.nav>
      </div>
    </div>
  )
}

export default Navbar
