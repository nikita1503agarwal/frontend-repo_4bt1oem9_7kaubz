import React from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
  off: { opacity: 0, y: 40, rotateX: -10 },
  on: (i) => ({ opacity: 1, y: 0, rotateX: 0, transition: { delay: i * 0.08, duration: 0.6 } }),
}

const About = () => {
  const cards = [
    {
      title: 'About',
      text:
        "Computer Science undergraduate focused on backend engineering, automation, and API manipulation. I operate close to the HTTP layer—sessions, cookies, endpoints—and ship products that automate workflows.",
    },
    {
      title: 'What I Built',
      text:
        'I run a cookie-checking automation business by orchestrating requests directly. I have hands-on experience across Linux servers, microcontrollers, and embedded systems, and I keep the stack lean and resilient.',
    },
    {
      title: 'Background',
      text:
        'Certified by IIT Mandi in IoT and control systems. Comfortable with Python, PHP, MySQL, and REST APIs. I prefer working independently, solving real problems with code. Coding and chess keep me in flow.',
    },
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-[#050512] to-black">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at top, rgba(56,189,248,0.12), transparent 40%), radial-gradient(ellipse at bottom, rgba(168,85,247,0.12), transparent 40%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-bold text-cyan-100"
        >
          About Me
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              initial="off"
              whileInView="on"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
              className="group relative rounded-xl p-6 backdrop-blur bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-purple-500/10" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-cyan-200 mb-2">{c.title}</h3>
                <p className="text-cyan-100/80 leading-relaxed">{c.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative h-40 w-40 rounded-2xl overflow-hidden border border-cyan-400/30 bg-white/5 backdrop-blur">
            <div className="absolute inset-0 scanlines opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-purple-500/10" />
            <div className="relative h-full w-full flex items-center justify-center text-cyan-200/80 text-sm">Sidharth — Hologram</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
