'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Determine active section
      const sections = ['product', 'how-it-works', 'pricing', 'faq']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu on scroll
    if (mobileMenuOpen) {
      const handleScroll = () => setMobileMenuOpen(false)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { href: '#product', label: 'Product', id: 'product' },
    { href: '#how-it-works', label: 'How it Works', id: 'how-it-works' },
    { href: '#pricing', label: 'Pricing', id: 'pricing' },
    { href: '#faq', label: 'FAQ', id: 'faq' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full max-w-full overflow-x-hidden ${
          scrolled
            ? 'bg-black/90 backdrop-blur-lg py-4 border-b border-white/5'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container-width px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-2xl font-bold tracking-tight text-white hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm"
            >
              ClarityGrid
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm px-2 py-1 relative ${
                    activeSection === link.id
                      ? 'text-white font-medium'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      layoutId="activeSection"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, '#pricing')}
                className="px-5 py-2.5 bg-white text-black rounded-sm text-sm font-semibold hover:bg-gray-100 hover:scale-105 active:scale-95 active:bg-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Get Early Access
              </a>
            </div>
            <button
              className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={mobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-black/95 backdrop-blur-xl border-l border-white/10 z-40 md:hidden overflow-y-auto overflow-x-hidden shadow-2xl"
            >
              <div className="p-6 pt-20">
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm px-4 py-3 relative ${
                        activeSection === link.id
                          ? 'text-white bg-white/5'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                      {activeSection === link.id && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-white"
                          layoutId="mobileActiveSection"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  ))}
                  <div className="pt-4 mt-2 border-t border-white/10">
                    <a
                      href="#pricing"
                      onClick={(e) => handleNavClick(e, '#pricing')}
                      className="block w-full px-6 py-3 bg-white text-black rounded-sm text-base font-semibold hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      Get Early Access
                    </a>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

