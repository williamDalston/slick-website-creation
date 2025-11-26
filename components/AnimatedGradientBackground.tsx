'use client'

import { motion } from 'framer-motion'

interface AnimatedGradientBackgroundProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export default function AnimatedGradientBackground({ 
  className = '', 
  intensity = 'medium' 
}: AnimatedGradientBackgroundProps) {
  const opacity = intensity === 'low' ? 0.1 : intensity === 'medium' ? 0.2 : 0.3

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, ${opacity}) 0%, transparent 50%),
                       radial-gradient(circle at 80% 70%, rgba(147, 51, 234, ${opacity}) 0%, transparent 50%),
                       radial-gradient(circle at 50% 50%, rgba(6, 182, 212, ${opacity * 0.7}) 0%, transparent 50%)`,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

