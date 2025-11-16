import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Github, Send, Globe, Mail, Download, FolderOpen } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute -inset-32 bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-purple-500/20 blur-3xl" />
      </div>

      {/* HUD scanlines */}
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(transparent, rgba(255,255,255,0.03) 2px, transparent 4px)' }} />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="text-center text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="block hologram-text text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400" data-ghost="Sidharth Sharma">
              Sidharth Sharma
            </span>
            <span className="mt-4 block text-xl sm:text-2xl font-medium text-cyan-200/90">
              Python Developer • Backend • Automation • APIs
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-center text-cyan-100/80 max-w-3xl mx-auto"
          >
            I break the web into requests, automate it, and turn it into products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <div className="flex justify-center gap-4">
              <a href="#projects" className="neon-button inline-flex items-center gap-2">
                <FolderOpen className="w-4 h-4" /> View Projects
              </a>
              <a href="/resume.pdf" className="neon-button neon-button-alt inline-flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <a href="https://github.com/celestialsbeings" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition" aria-label="GitHub">
                <Github className="w-5 h-5 text-cyan-200" />
              </a>
              <a href="https://t.me/info_celestialbeing" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition" aria-label="Telegram">
                <Send className="w-5 h-5 text-cyan-200" />
              </a>
              <a href="https://cookieschecker.site" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition" aria-label="Business Site">
                <Globe className="w-5 h-5 text-cyan-200" />
              </a>
              <a href="mailto:sidharthsharma0009@gmail.com" className="p-2 rounded-full border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition" aria-label="Email">
                <Mail className="w-5 h-5 text-cyan-200" />
              </a>
            </div>
            <p className="text-xs text-cyan-200/60">Himachal Pradesh, India • +91 78070 25168</p>
          </motion.div>
        </div>
      </div>

      {/* subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-cyan-200/80">
          <span className="text-xs tracking-widest">SCROLL</span>
          <span className="mt-2 block h-10 w-px animate-pulse bg-cyan-300/70" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
