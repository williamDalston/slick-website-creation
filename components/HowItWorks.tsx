'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Plug2, Sparkles, FileText, Mail } from 'lucide-react'

const steps = [
  {
    title: 'Connect your tools',
    description:
      'Plug in GA4, your social platforms, and any key CSV exports.',
    icon: Plug2,
  },
  {
    title: 'AI cleans and fuses the data',
    description:
      'Metrics are aligned to a common model so you get one coherent story, not five conflicting dashboards.',
    icon: Sparkles,
  },
  {
    title: 'Daily Decision Briefs',
    description:
      'Every morning, ClarityGrid delivers a structured summary, trend explanation, and concrete actions.',
    icon: FileText,
  },
  {
    title: 'Review in your browser or inbox',
    description:
      'View briefs in the web app or receive them in your email or Slack.',
    icon: Mail,
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="how-it-works" ref={ref} className="section-padding bg-black grid-pattern relative">
      <div className="container-width">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            How <span className="gradient-text-accent">ClarityGrid</span> works behind the scenes.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="glass-card rounded-sm p-8 border border-white/10 card-shadow hover:card-shadow-hover hover:glass-card-hover hover:border-white/20 transition-all duration-300 group cursor-default hover:scale-[1.02] hover:-translate-y-1"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl font-bold text-gray-500 group-hover:text-gray-400 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200, damping: 15 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="text-white/60 group-hover:text-white transition-colors"
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No new BI tool to learn – ClarityGrid lives on top of the data you
            already have.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

