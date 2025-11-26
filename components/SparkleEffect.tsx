'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface SparkleEffectProps {
  count?: number
  className?: string
}

export default function SparkleEffect({ count = 3, className = '' }: SparkleEffectProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="w-4 h-4 text-blue-400/60" />
        </motion.div>
      ))}
    </div>
  )
}

