'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email address')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    setError('')
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
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Join the Waitlist
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed">
            Be the first to know when ClarityGrid launches. We'll send you
            updates and early access opportunities.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder="your@email.com"
                required
                className={`w-full px-6 py-4 bg-gray-900/50 backdrop-blur-sm border rounded-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 ${
                  error
                    ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50'
                    : 'border-white/10 focus:border-white/30'
                }`}
                aria-invalid={!!error}
                aria-describedby={error ? 'email-error' : undefined}
              />
              {error && (
                <p
                  id="email-error"
                  className="mt-2 text-sm text-red-400"
                  role="alert"
                >
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="px-8 py-4 bg-white text-black rounded-sm font-semibold hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Joined!
                </span>
              ) : (
                'Join Waitlist'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

