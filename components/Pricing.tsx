'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const features = [
  'Daily Decision Briefs (web + email)',
  'Connect up to 5 data sources',
  'Up to 3 team members',
  'Priority onboarding call',
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="pricing" ref={ref} className="section-padding bg-black">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple early-access pricing.
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 md:p-12 border border-gray-800"
          >
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                ClarityGrid Launch Pass
              </h3>
              <p className="text-gray-400 text-lg">
                For teams who want signal, not noise.
              </p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-bold text-white">
                  $49
                </span>
                <span className="text-gray-400 text-xl">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
            <a
              href="#checkout"
              className="block w-full text-center px-8 py-4 bg-white text-black rounded-md text-base font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get Early Access
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-gray-500 text-sm mt-6"
          >
            Looking for agency or enterprise usage? Contact us at{' '}
            <a
              href="mailto:enterprise@claritygrid.com"
              className="text-gray-400 hover:text-white underline"
            >
              enterprise@claritygrid.com
            </a>
            .
          </motion.p>
        </div>
      </div>
    </section>
  )
}

