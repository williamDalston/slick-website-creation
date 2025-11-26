'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Clock, Lightbulb, Zap, Shield } from 'lucide-react'

const metrics = [
  {
    value: '10+ hours',
    label: 'Saved per week',
    description: 'No more dashboard hopping',
    icon: Clock,
  },
  {
    value: '3-5',
    label: 'Actionable insights daily',
    description: 'Clear next steps, not just data',
    icon: Lightbulb,
  },
  {
    value: '48 hours',
    label: 'Average time to value',
    description: 'See results in your first brief',
    icon: Zap,
  },
  {
    value: '100%',
    label: 'Data privacy guaranteed',
    description: 'Your data never leaves your control',
    icon: Shield,
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
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="text-center p-6 rounded-sm border border-white/5 glass-card hover:glass-card-hover hover:border-white/10 hover:scale-105 transition-all duration-300 group"
                whileHover={{ y: -4 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                  className="flex justify-center mb-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </motion.div>
                </motion.div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {metric.value}
                </div>
                <div className="text-lg sm:text-xl font-semibold text-gray-300 mb-2 group-hover:text-white transition-colors">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{metric.description}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

