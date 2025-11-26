// Prevent horizontal scroll on mobile
if (typeof window !== 'undefined') {
  // Prevent horizontal scroll
  const preventHorizontalScroll = () => {
    // Force body to not scroll horizontally
    document.body.style.overflowX = 'hidden'
    document.body.style.maxWidth = '100vw'
    document.body.style.width = '100%'
    
    // Force html to not scroll horizontally
    document.documentElement.style.overflowX = 'hidden'
    document.documentElement.style.maxWidth = '100vw'
    document.documentElement.style.width = '100%'
    
    // Check for any element causing overflow
    const allElements = document.querySelectorAll('*')
    allElements.forEach((el) => {
      const element = el as HTMLElement
      const rect = element.getBoundingClientRect()
      if (rect.right > window.innerWidth || rect.left < 0) {
        element.style.maxWidth = '100vw'
        element.style.overflowX = 'hidden'
      }
    })
  }
  
  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preventHorizontalScroll)
  } else {
    preventHorizontalScroll()
  }
  
  // Run on resize
  window.addEventListener('resize', preventHorizontalScroll)
  
  // Run on scroll (in case something changes)
  let scrollTimeout: NodeJS.Timeout
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(preventHorizontalScroll, 100)
  }, { passive: true })
}

