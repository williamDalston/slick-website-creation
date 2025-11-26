import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'ClarityGrid - Turn chaotic analytics into one daily Decision Brief',
  description: 'ClarityGrid connects your web and social analytics, runs an AI analysis pipeline, and sends you a daily, human-readable Decision Brief with 3–5 concrete actions to take.',
  keywords: 'analytics, AI, decision brief, marketing analytics, data insights',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%' }}>
      <body className="antialiased" style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%' }}>
        <Script id="prevent-horizontal-scroll" strategy="afterInteractive">
          {`
            (function() {
              function preventHorizontalScroll() {
                document.body.style.overflowX = 'hidden';
                document.body.style.maxWidth = '100vw';
                document.body.style.width = '100%';
                document.documentElement.style.overflowX = 'hidden';
                document.documentElement.style.maxWidth = '100vw';
                document.documentElement.style.width = '100%';
              }
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', preventHorizontalScroll);
              } else {
                preventHorizontalScroll();
              }
              window.addEventListener('resize', preventHorizontalScroll);
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}


