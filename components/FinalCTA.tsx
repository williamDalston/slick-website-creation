'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-black to-gray-950">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            The next best decision you make could start here.
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed">
            If you're running ads, campaigns, or content, you're already paying
            for data. ClarityGrid turns it into decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              className="px-8 py-4 bg-white text-black rounded-sm text-base font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Early Access
            </a>
            <a
              href="#waitlist"
              className="px-8 py-4 border border-white/30 text-white rounded-sm text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Join the Waitlist
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

