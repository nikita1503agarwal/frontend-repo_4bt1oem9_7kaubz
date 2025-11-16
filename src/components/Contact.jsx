import React from 'react'
import { motion } from 'framer-motion'
import { Github, Send, Phone, Globe, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#050512] to-black">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl sm:text-4xl font-bold text-cyan-100">Contact</motion.h2>

        <form className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="neon-input" />
            <input type="email" placeholder="Email" className="neon-input" />
          </div>
          <input type="text" placeholder="Subject" className="neon-input" />
          <textarea placeholder="Message" rows="6" className="neon-input" />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button type="submit" className="neon-button">Send Transmission</button>
            <a href="mailto:sidharthsharma0009@gmail.com" className="neon-button inline-flex items-center gap-2"><Mail className="w-4 h-4" /> Email Me</a>
            <a href="tel:+917807025168" className="neon-button neon-button-alt inline-flex items-center gap-2"><Phone className="w-4 h-4" /> Call Me</a>
          </div>
        </form>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="https://github.com/celestialsbeings" target="_blank" className="p-2 rounded-full border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition" aria-label="GitHub">
            <Github className="w-5 h-5 text-cyan-200" />
          </a>
          <a href="https://t.me/info_celestialbeing" target="_blank" className="p-2 rounded-full border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition" aria-label="Telegram">
            <Send className="w-5 h-5 text-cyan-200" />
          </a>
          <a href="https://cookieschecker.site" target="_blank" className="p-2 rounded-full border border-white/10 hover:border-cyan-400/40 hover:bg-white/5 transition" aria-label="Business Site">
            <Globe className="w-5 h-5 text-cyan-200" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
