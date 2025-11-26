'use client'

import { motion } from 'framer-motion'
import VideoBackground from './VideoBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
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
              Double the impact of every marketing dollar with AI-guided Decision
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
                className="px-8 py-4 bg-white text-black rounded-sm text-base font-semibold hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
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
                className="px-8 py-4 border border-white/30 text-white rounded-sm text-base font-semibold hover:bg-white/10 hover:border-white/50 active:bg-white/20 transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              >
                Join the Waitlist
              </a>
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
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Setup in 10 minutes</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </VideoBackground>
    </section>
  )
}

