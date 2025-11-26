'use client'

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission here
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="container-width px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              ClarityGrid
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              ClarityGrid is an independent analytics product designed to turn
              data into daily decisions.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@claritygrid.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
              Get product updates
            </h4>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              className="flex-1 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-sm text-white text-sm placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black rounded-sm text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
            >
                {submitted ? '✓' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-900">
          <p className="text-xs text-gray-600 text-center">
            Design inspired by modern AI missions, built for real-world teams.
          </p>
        </div>
      </div>
    </footer>
  )
}

