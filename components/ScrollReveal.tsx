'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  speed?: number
}

export default function ScrollReveal({ 
  children, 
  className = '',
  direction = 'up',
  speed = 0.5 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const directions = {
    up: useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]),
    down: useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]),
    left: useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]),
    right: useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]),
  }

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const translateKey = direction === 'up' || direction === 'down' ? 'y' : 'x'
  const translateValue = directions[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        [translateKey]: translateValue,
        opacity,
      }}
    >
      {children}
    </motion.div>
  )
}

