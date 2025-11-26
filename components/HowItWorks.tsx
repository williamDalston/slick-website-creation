'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const steps = [
  {
    title: 'Connect your tools',
    description:
      'Plug in GA4, your social platforms, and any key CSV exports.',
  },
  {
    title: 'AI cleans and fuses the data',
    description:
      'Metrics are aligned to a common model so you get one coherent story, not five conflicting dashboards.',
  },
  {
    title: 'Daily Decision Briefs',
    description:
      'Every morning, ClarityGrid delivers a structured summary, trend explanation, and concrete actions.',
  },
  {
    title: 'Review in your browser or inbox',
    description:
      'View briefs in the web app or receive them in your email or Slack.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="how-it-works" ref={ref} className="section-padding bg-black">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            How ClarityGrid works behind the scenes.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800"
            >
              <div className="text-3xl font-bold text-gray-600 mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
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

