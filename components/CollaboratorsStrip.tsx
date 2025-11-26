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
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Connect the tools you already use.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
                  className="flex-shrink-0 px-6 py-3 bg-gray-900 rounded-lg border border-gray-800"
                >
                  <span className="text-gray-300 text-sm font-medium whitespace-nowrap">
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

