import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kibrom Getachew - AI/ML Engineer',
  description: 'Portfolio showcasing AI, Machine Learning, and Deep Learning projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}