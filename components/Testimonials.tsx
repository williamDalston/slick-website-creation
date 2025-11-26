'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import AnimatedGradientBackground from './AnimatedGradientBackground'

const testimonials = [
  {
    quote: 'ClarityGrid saved me 10 hours a week. Instead of jumping between GA4, Meta Ads, and Shopify, I get one clear brief every morning with exactly what to focus on.',
    author: 'Sarah Chen',
    role: 'Marketing Director',
    company: 'TechFlow',
  },
  {
    quote: 'The Decision Briefs are like having a data analyst on your team. We caught a conversion drop-off early and fixed it before it cost us revenue.',
    author: 'Marcus Rodriguez',
    role: 'Founder',
    company: 'Growth Labs',
  },
  {
    quote: 'Finally, analytics that tell me what to DO, not just what happened. ClarityGrid pays for itself in the first week.',
    author: 'Jessica Park',
    role: 'Head of Growth',
    company: 'ScaleUp Co',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="section-padding bg-gray-950 relative overflow-hidden">
      <AnimatedGradientBackground intensity="low" />
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Trusted by teams making data-driven decisions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="glass-card rounded-sm p-8 border border-white/10 card-shadow hover:card-shadow-hover hover:glass-card-hover hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-gray-600 mb-4 group-hover:text-gray-500 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-200 text-lg leading-relaxed mb-6 group-hover:text-white transition-colors">
                  "{testimonial.quote}"
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-base">
                  {testimonial.author}
                </p>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

