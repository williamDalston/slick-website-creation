'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { CheckCircle2, Sparkles } from 'lucide-react'
import AnimatedGradientBackground from './AnimatedGradientBackground'

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

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    try {
      // Send email notification to faradaybach@gmail.com
      // Using a simple approach - you can replace this with your preferred email service
      const emailData = {
        to: 'faradaybach@gmail.com',
        subject: 'New Waitlist Signup - ClarityGrid',
        body: `New waitlist signup:\n\nEmail: ${email}\nSource: Waitlist\nDate: ${new Date().toISOString()}`,
      }
      
      // Log for now (in production, use a proper email service)
      console.log('Email signup:', emailData)
      
      // You can integrate with:
      // - Web3Forms: https://web3forms.com (free, no signup)
      // - Formspree: https://formspree.io (free tier)
      // - EmailJS: https://www.emailjs.com (free tier)
      // - Or set up your own API endpoint
      
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 3000)
    } catch (err) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section id="waitlist" ref={ref} className="section-padding bg-gray-950 grid-pattern relative overflow-hidden">
      <AnimatedGradientBackground intensity="low" />
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Join the <span className="gradient-text-accent">Waitlist</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed">
            Be the first to know when ClarityGrid launches. We'll send you
            updates and early access opportunities.
          </p>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="max-w-md mx-auto"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 bg-green-400/30 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <CheckCircle2 className="relative w-20 h-20 text-green-400" />
                  </div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-white mb-2"
                >
                  You're on the list! 🎉
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300"
                >
                  We'll notify you as soon as ClarityGrid launches.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400"
                >
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span>Early access coming soon</span>
                </motion.div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <div className="flex-1">
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError('')
                    }}
                    placeholder="your@email.com"
                    required
                    className={`w-full px-6 py-4 glass-card border rounded-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 focus:scale-[1.02] ${
                      error
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50'
                        : 'border-white/10 focus:border-white/30'
                    }`}
                    aria-invalid={!!error}
                    aria-describedby={error ? 'email-error' : undefined}
                    whileFocus={{ scale: 1.02 }}
                  />
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        id="email-error"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-2 text-sm text-red-400"
                        role="alert"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <motion.button
                  type="submit"
                  disabled={submitted}
                  className="px-8 py-4 bg-white text-black rounded-sm font-semibold hover:bg-gray-100 hover:scale-[1.02] hover:shadow-lg hover:shadow-white/20 active:scale-[0.98] active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Join Waitlist</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

