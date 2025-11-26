'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'

interface LottieAnimationProps {
  animationData: object
  className?: string
  loop?: boolean
  autoplay?: boolean
  playOnView?: boolean
}

export default function LottieAnimation({
  animationData,
  className = '',
  loop = true,
  autoplay = true,
  playOnView = false,
}: LottieAnimationProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  if (playOnView && isInView && lottieRef.current) {
    lottieRef.current.play()
  }

  return (
    <div ref={ref} className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        className="w-full h-full"
      />
    </div>
  )
}

