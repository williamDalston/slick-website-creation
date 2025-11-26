'use client'

import { motion } from 'framer-motion'

export default function FloatingGradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large blue orb */}
      <motion.div
        className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        style={{
          top: '10%',
          left: '10%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Medium purple orb */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
        style={{
          top: '60%',
          right: '15%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      
      {/* Small cyan orb */}
      <motion.div
        className="absolute w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl"
        style={{
          bottom: '20%',
          left: '50%',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
    </div>
  )
}

