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
      className={`section-padding ${reverse ? 'bg-gray-950' : 'bg-black'} overflow-x-hidden`}
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
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              {title}
            </h3>
            <p className="text-xl sm:text-2xl text-gray-300 mb-6 leading-relaxed">{subtitle}</p>
            <p className="text-lg text-gray-400 leading-relaxed">
              {description}
            </p>
          </motion.div>
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -50 : 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {videoSrc ? (
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-gray-900 card-shadow group">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ) : imageSrc ? (
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-gray-900 card-shadow group">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ) : (
              <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-gradient-to-br from-gray-900 to-black card-shadow flex items-center justify-center border border-white/5 group hover:border-white/10 transition-colors">
                <span className="text-gray-500 group-hover:text-gray-400 transition-colors">Visual placeholder</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

