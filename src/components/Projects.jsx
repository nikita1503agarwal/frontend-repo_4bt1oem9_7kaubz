import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ShieldAlert } from 'lucide-react'

const ProjectCard = ({ project, onOpen }) => (
  <motion.button
    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}
    onClick={() => onOpen(project)}
    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur text-left"
  >
    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style={{ background: 'linear-gradient(120deg, rgba(34,211,238,0.1), rgba(168,85,247,0.1), rgba(236,72,153,0.1))' }} />
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-cyan-100 text-lg font-semibold">{project.title}</h3>
        {project.badge && (
          <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-cyan-400/40 text-cyan-200/90 bg-cyan-400/10">{project.badge}</span>
        )}
      </div>
      <p className="mt-2 text-cyan-100/80">{project.subtitle}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/40 border border-white/10 text-cyan-200">{t}</span>
        ))}
      </div>
    </div>
    <div className="absolute inset-0 border border-transparent group-hover:border-cyan-400/40 transition" />
  </motion.button>
)

const Modal = ({ project, onClose }) => (
  <AnimatePresence>
    {project && (
      <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="absolute inset-0 bg-black/70 backdrop-blur" onClick={onClose} />
        <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
          className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-br from-black to-[#0a0a1a] p-6">
          <h3 className="text-2xl font-bold text-cyan-100">{project.title}</h3>
          {project.disclaimer && (
            <div className="mt-2 text-xs text-amber-300/90 inline-flex items-center gap-1">
              <ShieldAlert className="w-3 h-3" /> {project.disclaimer}
            </div>
          )}
          <p className="mt-3 text-cyan-100/80">{project.description}</p>
          <div className="mt-4 flex gap-3">
            {project.links?.live && (
              <a href={project.links.live} target="_blank" className="inline-flex items-center gap-2 neon-button">
                <ExternalLink className="w-4 h-4" /> Live
              </a>
            )}
            {project.links?.github && (
              <a href={project.links.github} target="_blank" className="inline-flex items-center gap-2 neon-button neon-button-alt">
                <Github className="w-4 h-4" /> Code
              </a>
            )}
          </div>
          <button onClick={onClose} className="absolute top-3 right-3 text-cyan-200/70 hover:text-cyan-100">✕</button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
)

const Projects = () => {
  const [active, setActive] = useState(null)
  const projects = [
    {
      title: 'Cookies Checker — Automated Business',
      subtitle: 'Telegram bot for cookie validation and session management',
      badge: 'Business',
      tags: ['Python', 'Telethon', 'Requests', 'Scraping', 'GraphQL'],
      description:
        'A production Telegram automation that validates cookies, mimics browser behavior, manages sessions, and parses multi-endpoint flows. Powers a small cookie-checking business with resilient retries and analytics hooks.',
      links: { live: 'https://cookieschecker.site' },
    },
    {
      title: 'SPU Brute Forcer — Educational Tool',
      subtitle: 'Demonstrates auth weaknesses with response-aware logic',
      disclaimer: 'For educational and ethical use only',
      tags: ['Python', 'httpx', 'async', 'Requests'],
      description:
        'Custom brute forcing utility built to teach security principles and highlight rate-limits, lockouts, and error-handling patterns. Includes AI-assisted UI and structured logging.',
      links: { github: 'https://github.com/celestialsbeings' },
    },
    {
      title: 'Science Day — NAAC Footfall Counter',
      subtitle: 'Real-time people counter with Wi‑Fi ready design',
      tags: ['ESP8266', 'Ultrasonic', 'LCD I2C', 'EEPROM', 'C++'],
      description:
        'Sensor-driven system counting lab visitors for NAAC reporting. Features auto-reset, local logging, and accurate distance filtering; deployed and used by the college.',
    },
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-[#050512]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl sm:text-4xl font-bold text-cyan-100">Projects</motion.h2>
        <p className="mt-3 text-center text-cyan-100/70 max-w-2xl mx-auto">Hover a project to see quick details. Click to open a holographic sheet with stack and links.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <ProjectCard key={p.title} project={p} onOpen={setActive} />
          ))}
        </div>
      </div>
      <Modal project={active} onClose={() => setActive(null)} />
    </section>
  )
}

export default Projects
