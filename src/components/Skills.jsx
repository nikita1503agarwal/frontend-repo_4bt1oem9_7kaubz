import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Code2, MonitorSmartphone, Zap } from 'lucide-react'

const ring = (value, color) => {
  const dash = 283
  const offset = dash - (dash * value) / 100
  return (
    <svg viewBox="0 0 100 100" className="w-28 h-28">
      <defs>
        <linearGradient id={`grad-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none" />
      <motion.circle
        cx="50" cy="50" r="45" stroke={`url(#grad-${color})`} strokeWidth="10" fill="none" strokeDasharray={dash}
        initial={{ strokeDashoffset: dash }} whileInView={{ strokeDashoffset: offset }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }}
        strokeLinecap="round"
      />
    </svg>
  )
}

const Skill = ({ icon: Icon, label, value }) => (
  <div className="group rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-400/40 transition">
    <div className="flex items-center gap-4">
      <div className="relative">
        {ring(value, label)}
        <div className="absolute inset-0 flex items-center justify-center text-cyan-200 font-semibold">{value}%</div>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-cyan-300 group-hover:text-fuchsia-300 transition" />
          <h4 className="text-cyan-100 font-medium">{label}</h4>
        </div>
        <p className="mt-1 text-sm text-cyan-100/70">Hover to energize</p>
      </div>
    </div>
  </div>
)

const Skills = () => {
  const skills = [
    { icon: Cpu, label: 'Three.js/WebGL', value: 85 },
    { icon: Code2, label: 'TypeScript/React', value: 90 },
    { icon: MonitorSmartphone, label: 'Responsive UX', value: 88 },
    { icon: Zap, label: 'Performance/GSAP', value: 82 },
  ]

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl sm:text-4xl font-bold text-cyan-100">Skills</motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <Skill key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
