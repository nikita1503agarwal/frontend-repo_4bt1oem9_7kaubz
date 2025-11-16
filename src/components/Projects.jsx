import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

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
        <div className="h-6 w-6 rounded-full bg-cyan-400/20 border border-cyan-400/40 group-hover:bg-fuchsia-400/20 group-hover:border-fuchsia-400/40 transition" />
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
          <p className="mt-2 text-cyan-100/80">{project.description}</p>
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
    { title: 'Neon HUD Dashboard', subtitle: 'Interactive data visualizer', tags: ['Three.js', 'WebGL', 'Motion'], description: 'A high-performance HUD-style dashboard with volumetric effects and shader-driven visuals.', links: { live: '#', github: '#' } },
    { title: 'Cyberpunk Portfolio', subtitle: 'Immersive 3D portfolio', tags: ['Spline', 'GSAP', 'React'], description: 'Animated portfolio with holographic UI and micro-interactions tuned to 60fps.', links: { live: '#', github: '#' } },
    { title: 'Glitch Shop', subtitle: 'Micro-animations e-commerce', tags: ['React', 'Framer', 'UX'], description: 'Storefront focused on motion heuristics, fluid transitions, and snappy feedback.', links: { live: '#', github: '#' } },
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-[#050512]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl sm:text-4xl font-bold text-cyan-100">Projects</motion.h2>
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
