'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface VideoBackgroundProps {
  src: string
  poster?: string
  children: React.ReactNode
  className?: string
}

export default function VideoBackground({
  src,
  poster,
  children,
  className = '',
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        setIsLoading(false)
        video.play().catch(() => {
          // Autoplay failed, which is fine - browser will handle it
        })
      }
      
      const handleError = () => {
        setHasError(true)
        setIsLoading(false)
      }
      
      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('error', handleError)
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('error', handleError)
      }
    }
  }, [])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black animate-pulse" />
      )}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      )}
      <div className="absolute inset-0 gradient-overlay" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}


