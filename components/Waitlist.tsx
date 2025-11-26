'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist submission here
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section id="waitlist" ref={ref} className="section-padding bg-gray-950">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join the Waitlist
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Be the first to know when ClarityGrid launches. We'll send you
            updates and early access opportunities.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-4 bg-gray-900 border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-gray-700"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-black rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              {submitted ? '✓ Joined!' : 'Join Waitlist'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

