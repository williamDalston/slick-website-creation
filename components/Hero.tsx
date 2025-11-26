'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, CreditCard, Zap, ArrowRight } from 'lucide-react'
import VideoBackground from './VideoBackground'
import FloatingGradientOrbs from './FloatingGradientOrbs'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full max-w-full">
      <FloatingGradientOrbs />
      <VideoBackground
        src="/videos/hero-loop.mp4"
        poster="/videos/hero-poster.jpg"
        className="min-h-screen"
      >
        <div className="container-width px-4 sm:px-6 lg:px-12 xl:px-16 py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <p className="text-sm sm:text-base text-gray-400 mb-6 tracking-[0.15em] uppercase font-medium">
              A mission to end guesswork in digital decisions
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 text-balance leading-[1.1] tracking-tight">
              <span className="gradient-text-accent">Double the impact</span> of every marketing dollar with AI-guided Decision
              Briefs.
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-10 max-w-3xl leading-relaxed"
            >
              ClarityGrid connects your analytics tools, fuses the data with AI,
              and delivers a daily Decision Brief that tells you what is
              happening, why it matters, and exactly what to do next.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
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
                className="btn-primary inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get Early Access</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
              <motion.a
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
                className="btn-secondary inline-flex items-center justify-center gap-2 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Join the Waitlist</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm text-gray-400 max-w-2xl leading-relaxed mb-6"
            >
              No code. No new dashboards. Just clear decisions in your inbox and
              browser.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </motion.div>
                <span>30-day guarantee</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.1, type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <CreditCard className="w-5 h-5 text-green-400" />
                </motion.div>
                <span>No credit card required</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <Zap className="w-5 h-5 text-green-400" />
                </motion.div>
                <span>Setup in 10 minutes</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </VideoBackground>
    </section>
  )
}

