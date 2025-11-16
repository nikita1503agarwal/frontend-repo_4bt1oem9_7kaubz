import React from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
  off: { opacity: 0, y: 40, rotateX: -10 },
  on: (i) => ({ opacity: 1, y: 0, rotateX: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

const About = () => {
  const cards = [
    { title: 'Who I Am', text: 'Creative engineer blending design, motion, and code to craft immersive experiences.' },
    { title: 'What I Do', text: 'WebGL/Three.js, real-time motion, system design, and delightful micro-interactions.' },
    { title: 'Philosophy', text: 'Performance-first, accessible, and future-facing. Build delightful, resilient systems.' },
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-[#050512] to-black">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse at top, rgba(56,189,248,0.12), transparent 40%), radial-gradient(ellipse at bottom, rgba(168,85,247,0.12), transparent 40%)' }} />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl sm:text-4xl font-bold text-cyan-100">About Me</motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div key={c.title} custom={i} initial="off" whileInView="on" viewport={{ once: true, amount: 0.4 }} variants={cardVariants} className="group relative rounded-xl p-6 backdrop-blur bg-white/5 border border-white/10 hover:border-cyan-400/40 transition">
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-purple-500/10" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-cyan-200 mb-2">{c.title}</h3>
                <p className="text-cyan-100/80 leading-relaxed">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
