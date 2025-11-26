import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClarityGrid - Turn chaotic analytics into one daily Decision Brief',
  description: 'ClarityGrid connects your web and social analytics, runs an AI analysis pipeline, and sends you a daily, human-readable Decision Brief with 3–5 concrete actions to take.',
  keywords: 'analytics, AI, decision brief, marketing analytics, data insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}


