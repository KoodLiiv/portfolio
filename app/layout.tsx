import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: {
    default: 'SEO & International Business Portfolio',
    template: '%s | SEO Portfolio'
  },
  description: 'Professional portfolio showcasing Technical SEO, International Business strategies, and high-performance web development with Next.js 14.',
  keywords: ['SEO', 'International Business', 'Next.js', 'Technical SEO', 'Web Performance', 'Core Web Vitals'],
  authors: [{ name: 'Portfolio Owner' }],
  creator: 'Portfolio Owner',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.example.com',
    siteName: 'SEO & International Business Portfolio',
    title: 'SEO & International Business Portfolio',
    description: 'Professional portfolio showcasing Technical SEO and International Business strategies',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'SEO Portfolio'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO & International Business Portfolio',
    description: 'Professional portfolio showcasing Technical SEO and International Business strategies',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
