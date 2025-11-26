'use client'

import VideoBackground from './VideoBackground'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <VideoBackground
        src="/videos/hero-loop.mp4"
        poster="/videos/hero-poster.jpg"
        className="min-h-screen"
      >
        <div className="container-width px-4 sm:px-6 lg:px-8 py-32 text-center">
          <p className="text-sm sm:text-base text-gray-300 mb-4 tracking-wide uppercase">
            A mission to end guesswork in digital decisions
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight">
            Double the impact of every marketing dollar with AI-guided Decision
            Briefs.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-balance">
            ClarityGrid connects your analytics tools, fuses the data with AI,
            and delivers a daily Decision Brief that tells you what is
            happening, why it matters, and exactly what to do next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="#pricing"
              className="px-8 py-4 bg-white text-black rounded-md text-base font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get Early Access
            </a>
            <a
              href="#waitlist"
              className="px-8 py-4 border-2 border-white text-white rounded-md text-base font-semibold hover:bg-white/10 transition-all"
            >
              Join the Waitlist
            </a>
          </div>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            No code. No new dashboards. Just clear decisions in your inbox and
            browser.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Built for founders, marketers, and small analytics teams.
          </p>
        </div>
      </VideoBackground>
    </section>
  )
}

