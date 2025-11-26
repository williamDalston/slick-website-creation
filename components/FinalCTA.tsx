'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import AnimatedGradientBackground from './AnimatedGradientBackground'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-black to-gray-950 grid-pattern relative overflow-hidden w-full max-w-full overflow-x-hidden">
      <AnimatedGradientBackground intensity="medium" />
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            The next <span className="gradient-text-accent">best decision</span> you make could start here.
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-6 leading-relaxed">
            If you're running ads, campaigns, or content, you're already paying
            for data. ClarityGrid turns it into decisions.
          </p>
          <p className="text-lg text-gray-400 mb-10">
            Join 500+ teams already using ClarityGrid to make better decisions
            faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#pricing')
                if (element) {
                  const offset = 80
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                  const offsetPosition = elementPosition - offset
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                }
              }}
              className="btn-primary hover:scale-105"
            >
              Get Early Access
            </a>
            <a
              href="#waitlist"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#waitlist')
                if (element) {
                  const offset = 80
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                  const offsetPosition = elementPosition - offset
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                }
              }}
              className="btn-secondary hover:scale-105"
            >
              Join the Waitlist
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

