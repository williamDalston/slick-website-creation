'use client'

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Please enter your email')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Invalid email')
      return
    }
    
    setError('')
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
                  className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@claritygrid.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-1"
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  placeholder="your@email.com"
                  required
                  className={`flex-1 px-4 py-2 glass-card border rounded-sm text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 focus:scale-[1.02] ${
                    error
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50'
                      : 'border-white/10 focus:border-white/30'
                  }`}
                  aria-invalid={!!error}
                />
                <button
                  type="submit"
                  disabled={submitted}
                  className="px-4 py-2 bg-white text-black rounded-sm text-sm font-semibold hover:bg-gray-100 hover:scale-105 active:scale-95 active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {submitted ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
              {error && (
                <p className="text-xs text-red-400" role="alert">
                  {error}
                </p>
              )}
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

