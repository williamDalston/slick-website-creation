'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import AnimatedGradientBackground from './AnimatedGradientBackground'

const features = [
  'Daily Decision Briefs (web + email)',
  'Connect up to 5 data sources',
  'Up to 3 team members',
  'Priority onboarding call',
  '30-day money-back guarantee',
  'Cancel anytime, no questions asked',
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="pricing" ref={ref} className="section-padding bg-black grid-pattern relative overflow-hidden w-full max-w-full overflow-x-hidden">
      <AnimatedGradientBackground intensity="low" />
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Simple <span className="gradient-text-accent">early-access</span> pricing.
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="glass-card bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-black/80 rounded-sm p-10 md:p-14 border border-white/10 card-shadow hover:glass-card-hover hover:scale-[1.01] transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <div className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                ClarityGrid Launch Pass
              </h3>
              <p className="text-gray-300 text-xl">
                For teams who want signal, not noise.
              </p>
            </div>
            <div className="mb-10">
              <div className="flex items-baseline gap-3">
                <span className="text-6xl md:text-7xl font-bold text-white tracking-tight">
                  $49
                </span>
                <span className="text-gray-400 text-2xl">/month</span>
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
                  className="flex items-start gap-3 text-gray-300 group"
                >
                  <span className="text-green-400 mt-1 text-lg group-hover:scale-110 transition-transform">✓</span>
                  <span className="group-hover:text-white transition-colors">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#checkout"
              className="block w-full text-center px-8 py-5 bg-white text-black rounded-sm text-base font-semibold hover:bg-gray-100 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/20 active:scale-[0.98] active:bg-gray-200 transition-all duration-300 mb-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Get Early Access</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
            <p className="text-center text-gray-400 text-sm mb-4">
              30-day money-back guarantee • Cancel anytime • No credit card
              required
            </p>
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

