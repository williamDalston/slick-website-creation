'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface SectionClusterProps {
  title: string
  subtitle: string
  description: string
  videoSrc?: string
  imageSrc?: string
  reverse?: boolean
}

export default function SectionCluster({
  title,
  subtitle,
  description,
  videoSrc,
  imageSrc,
  reverse = false,
}: SectionClusterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className={`section-padding ${reverse ? 'bg-gray-950' : 'bg-black'}`}
    >
      <div className="container-width">
        <div
          className={`flex flex-col ${
            reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
          } items-center gap-12 lg:gap-16`}
        >
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {title}
            </h3>
            <p className="text-lg text-gray-400 mb-4">{subtitle}</p>
            <p className="text-base text-gray-500 leading-relaxed">
              {description}
            </p>
          </motion.div>
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -50 : 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {videoSrc ? (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
            ) : imageSrc ? (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-gray-600">Visual placeholder</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

