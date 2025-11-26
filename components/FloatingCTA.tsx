'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const toggleVisibility = () => {
      // Clear any pending timeout
      clearTimeout(timeoutId)
      
      // Show after scrolling past hero, hide near bottom
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const isNearBottom = scrollY + windowHeight > documentHeight - 200
      const shouldShow = scrollY > windowHeight * 0.5 && !isNearBottom
      
      // Delay visibility changes for smoother transitions
      timeoutId = setTimeout(() => {
        setIsVisible(shouldShow)
      }, 300)
    }
    
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    toggleVisibility()
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      clearTimeout(timeoutId)
    }
  }, [])

  const scrollToPricing = () => {
    const element = document.querySelector('#pricing')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 0.85 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            type: 'spring', 
            damping: 30, 
            stiffness: 150,
            opacity: { duration: 0.8 }
          }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 md:hidden pointer-events-auto"
          style={{ 
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: 'calc(100vw - 2rem)',
            width: 'auto'
          }}
        >
          <button
            onClick={scrollToPricing}
            className="px-5 py-2.5 bg-white/90 backdrop-blur-md text-black rounded-full text-sm font-semibold shadow-lg hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center gap-2 border border-white/20"
          >
            <span>Get Early Access</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

