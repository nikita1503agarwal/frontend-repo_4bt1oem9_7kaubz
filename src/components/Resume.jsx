import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const timeline = [
  { year: '2025', title: 'Senior Creative Engineer', company: 'Neon Labs', desc: 'Leading immersive web experiences, pushing real-time graphics and motion.' },
  { year: '2023', title: 'Creative Developer', company: 'Holo Studio', desc: 'Built interactive brand experiences with WebGL and complex transitions.' },
  { year: '2021', title: 'Frontend Engineer', company: 'HyperUI', desc: 'Shipped performant design systems with modern tooling and testing.' },
]

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-black">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl sm:text-4xl font-bold text-cyan-100">Resume</motion.h2>

        <div className="mt-12 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-400/60 to-purple-500/60" />
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: idx * 0.1 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className={`${idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="inline-block rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200/90">{item.year}</div>
                  <h3 className="mt-2 text-xl font-semibold text-cyan-100">{item.title}</h3>
                  <p className="text-cyan-200/80">{item.company}</p>
                  <p className="mt-2 text-cyan-100/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 neon-button">
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
