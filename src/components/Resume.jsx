import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const experience = [
  {
    period: '08/2024 – 09/2024',
    place: 'IIT Mandi',
    title: 'Intern — Human Motion Analysis',
    desc: [
      'Integrated microcontrollers and sensors; programmed via Arduino IDE',
      'Focused on high‑frequency data capture and memory optimization',
      'Explored alternative MCU platforms and improved sampling rates',
    ],
  },
  {
    period: '06/2024 – 09/2024',
    place: 'IIT Mandi',
    title: 'Intern — Smart Polyhouse Automation',
    desc: [
      'Led web platform design and supported IoT hardware integration',
      'Synchronized polyhouse sensors to stream data to a custom server',
      'Automated actuators (fans, misters) to stabilize climate',
    ],
  },
  {
    period: '07/2023 – 08/2023',
    place: 'IIT Mandi',
    title: 'Intern — Digital Olfaction',
    desc: [
      'Designed sensor‑actuator workflows for smell‑diffusing systems',
      'Implemented real‑time control logic for consistent output',
    ],
  },
]

const education = [
  {
    title: 'B.Sc. (Major) — Computer Science',
    org: 'Govt. Degree College Kullu',
    meta: 'Jul 2022 – Jul 2025 • CGPA: 6.2',
    link: 'https://www.gckullu.ac.in',
  },
  {
    title: 'Higher Secondary — Non‑Medical',
    org: 'D.A.V. Senior Secondary School',
    meta: 'Year: 2022 • Score: 7.1',
  },
]

const certs = [
  {
    title: 'IoT Automation — IIT Mandi (2024)',
    desc: 'IoT architecture, sensor‑actuator integration, cloud connectivity, MQTT/HTTP; built automation with ESP8266 & Arduino',
  },
  {
    title: 'Model Predictive Control — IIT Mandi (2023)',
    desc: 'Dynamic modeling, cost functions, constrained optimization; applied MPC to robotics/control simulations',
  },
  {
    title: 'Science Day Project — GDC Kullu (Jan 2023)',
    desc: 'Real‑time footfall counter actively used by the college',
  },
]

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-black">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl sm:text-4xl font-bold text-cyan-100">Experience & Resume</motion.h2>

        {/* Timeline */}
        <div className="mt-12 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-cyan-400/60 to-purple-500/60" />
          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: idx * 0.08 }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className={`${idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="inline-block rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-200/90">{item.period}</div>
                  <h3 className="mt-2 text-xl font-semibold text-cyan-100">{item.title}</h3>
                  <p className="text-cyan-200/80">{item.place}</p>
                  <ul className="mt-2 list-disc pl-5 text-cyan-100/80 space-y-1">
                    {item.desc.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-cyan-100 text-center">Education</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((e, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold text-cyan-100">{e.title}</h4>
                <p className="text-cyan-200/80">{e.org}</p>
                <p className="text-cyan-100/70 text-sm">{e.meta}</p>
                {e.link && (
                  <a className="mt-3 inline-block text-cyan-300 hover:text-fuchsia-300 transition text-sm" target="_blank" href={e.link}>Visit</a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-cyan-100 text-center">Certifications & Awards</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {certs.map((c, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="font-semibold text-cyan-100">{c.title}</p>
                <p className="text-cyan-100/80 text-sm mt-2">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download */}
        <div className="mt-12 flex justify-center">
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 neon-button">
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
