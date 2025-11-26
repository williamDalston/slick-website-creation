'use client'

import { motion } from 'framer-motion'

const integrations = [
  'Google Analytics 4',
  'Google BigQuery',
  'Meta Ads',
  'X (Twitter)',
  'LinkedIn',
  'Shopify',
  'Stripe',
  'HubSpot',
]

export default function CollaboratorsStrip() {
  return (
    <section className="section-padding bg-black">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Connect the tools you already use.
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ClarityGrid plugs into your existing analytics stack and turns
            fragmented metrics into a single narrative.
          </p>
        </div>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -50 * integrations.length * 10],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...integrations, ...integrations, ...integrations].map(
              (integration, index) => (
                <div
                  key={`${integration}-${index}`}
                  className="flex-shrink-0 px-8 py-4 bg-gray-900/50 backdrop-blur-sm rounded-sm border border-white/10 card-shadow hover:border-white/20 hover:card-shadow-hover transition-all duration-300"
                >
                  <span className="text-gray-200 text-base font-medium whitespace-nowrap">
                    {integration}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

