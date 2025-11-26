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
                className="px-8 py-4 bg-white text-black rounded-sm text-base font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Early Access
              </a>
              <a
                href="#waitlist"
                className="px-8 py-4 border border-white/30 text-white rounded-sm text-base font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center"
              >
                Join the Waitlist
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm text-gray-400 max-w-2xl leading-relaxed"
            >
              No code. No new dashboards. Just clear decisions in your inbox and
              browser.
            </motion.p>
          </motion.div>
        </div>
      </VideoBackground>
    </section>
  )
}

