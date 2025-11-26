'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function ProblemVsFuture() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const oldWay = [
    '10 tabs of dashboards',
    'No clear narrative',
    'Reactive decisions',
    'Guesswork',
  ]

  const newWay = [
    'One daily brief',
    'Prioritized actions',
    'Proactive experimentation',
    'Measurable learning',
  ]

  return (
    <section ref={ref} className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          aria-hidden="true"
        >
          <source src="/videos/ai-orbit.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container-width px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-6">
              The old way
            </h3>
            <ul className="space-y-4">
              {oldWay.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-red-400 mt-1">×</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border border-green-500/30"
          >
            <h3 className="text-2xl font-bold text-green-400 mb-6">
              The ClarityGrid way
            </h3>
            <ul className="space-y-4">
              {newWay.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

