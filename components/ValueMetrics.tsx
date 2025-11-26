'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const metrics = [
  {
    value: '10+ hours',
    label: 'Saved per week',
    description: 'No more dashboard hopping',
  },
  {
    value: '3-5',
    label: 'Actionable insights daily',
    description: 'Clear next steps, not just data',
  },
  {
    value: '48 hours',
    label: 'Average time to value',
    description: 'See results in your first brief',
  },
  {
    value: '100%',
    label: 'Data privacy guaranteed',
    description: 'Your data never leaves your control',
  },
]

export default function ValueMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="section-padding bg-black">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Real value, measurable results
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See why teams choose ClarityGrid to turn their analytics into daily
            decisions
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="text-center p-6 rounded-sm border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
                {metric.value}
              </div>
              <div className="text-lg sm:text-xl font-semibold text-gray-300 mb-2">
                {metric.label}
              </div>
              <div className="text-sm text-gray-500">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

