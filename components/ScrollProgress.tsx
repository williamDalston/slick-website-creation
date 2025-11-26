'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-900/50 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-white via-blue-400 to-white"
        style={{ 
          width: `${scrollProgress}%`,
          boxShadow: `0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(96, 165, 250, 0.3)`
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </div>
  )
}

