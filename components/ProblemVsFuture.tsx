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
            className="bg-gray-900/60 backdrop-blur-sm rounded-sm p-10 border border-red-500/20 card-shadow"
          >
            <h3 className="text-3xl font-bold text-red-400 mb-8 leading-tight">
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
                  className="flex items-start gap-4 text-gray-200 text-lg"
                >
                  <span className="text-red-400 mt-1 text-xl">×</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/60 backdrop-blur-sm rounded-sm p-10 border border-green-500/30 card-shadow"
          >
            <h3 className="text-3xl font-bold text-green-400 mb-8 leading-tight">
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
                  className="flex items-start gap-4 text-gray-200 text-lg"
                >
                  <span className="text-green-400 mt-1 text-xl">✓</span>
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

