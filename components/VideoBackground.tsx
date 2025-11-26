'use client'

import { useEffect, useRef } from 'react'

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

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(() => {
        // Autoplay failed, which is fine - browser will handle it
      })
    }
  }, [])

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 gradient-overlay" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

