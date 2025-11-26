'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What exactly is a Decision Brief?',
    answer:
      'A Decision Brief is a 1–2 page daily summary that distills your analytics data into clear insights and actionable recommendations. Instead of sifting through multiple dashboards, you get a concise narrative explaining what changed, why it matters, and exactly what to do next.',
  },
  {
    question: 'Do I need a data engineer to set this up?',
    answer:
      'No. ClarityGrid is designed for non-technical users. You simply connect your existing analytics tools through our integrations, and we handle the data processing, cleaning, and analysis automatically. Setup takes about 10 minutes.',
  },
  {
    question: 'What integrations will you support first?',
    answer:
      'We\'re launching with support for Google Analytics 4, Meta Ads, X (Twitter), LinkedIn, Shopify, and Stripe. We\'re also building connectors for Google BigQuery, HubSpot, and CSV imports. More integrations are added based on user feedback.',
  },
  {
    question: 'Will this replace my existing BI tools?',
    answer:
      'ClarityGrid doesn\'t replace your BI tools—it complements them. We focus on daily decision-making, not deep historical analysis. You keep your existing dashboards for detailed exploration, and ClarityGrid gives you the daily "what should I do today?" answer.',
  },
  {
    question: 'How is my data secured?',
    answer:
      'We use industry-standard encryption, secure API connections, and follow SOC 2 compliance practices. Your data is processed securely and never shared with third parties. You can disconnect your integrations and delete your data at any time.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes. There are no long-term contracts. You can cancel your subscription at any time, and you\'ll retain access until the end of your billing period. No questions asked.',
  },
  {
    question: 'How accurate are the AI recommendations?',
    answer:
      'Our AI analyzes patterns across your connected data sources and surfaces statistically significant trends. Recommendations are based on your actual performance data, not generic advice. You can always review the reasoning behind each recommendation in the brief.',
  },
  {
    question: 'What if I have more than 3 team members?',
    answer:
      'The Launch Pass is designed for small teams. If you need more seats, contact us at enterprise@claritygrid.com and we\'ll work out a custom plan that fits your team size and needs.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding bg-black grid-pattern relative">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
            <span className="gradient-text-accent">Essential</span> information
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-sm border border-white/10 card-shadow overflow-hidden hover:glass-card-hover transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 active:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-inset group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-xl font-semibold text-white pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  <motion.svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white flex-shrink-0 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                      id={`faq-answer-${index}`}
                      role="region"
                    >
                      <div className="px-8 py-6 text-gray-300 leading-relaxed text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

