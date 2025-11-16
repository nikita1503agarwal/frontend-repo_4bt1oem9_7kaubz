import React from 'react'
import { motion } from 'framer-motion'

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
          <div className="flex justify-center">
            <button type="submit" className="neon-button">Send Transmission</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
