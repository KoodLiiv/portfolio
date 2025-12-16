import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nooon - Hospitality SaaS Case Study',
  description: 'Comprehensive SEO strategy for a luxury hospitality SaaS platform, focusing on international markets and premium brand positioning.',
  openGraph: {
    title: 'Nooon - Hospitality SaaS Case Study',
    description: 'SEO strategy for luxury hospitality SaaS platform',
  },
}

export default function NooonCaseStudy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Nooon - Hospitality SaaS Case Study',
    description: 'Comprehensive SEO strategy for a luxury hospitality SaaS platform',
    author: {
      '@type': 'Person',
      name: 'SEO Professional',
    },
    datePublished: '2024-01-01',
    keywords: 'SEO, Hospitality, SaaS, International Business',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Link */}
          <Link
            href="/#case-studies"
            className="inline-flex items-center text-luxury-gold hover:text-luxury-platinum mb-8 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Portfolio
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="text-luxury-gold text-sm font-semibold mb-4">
              CASE STUDY / HOSPITALITY SAAS
            </div>
            <h1 className="text-5xl font-bold mb-6 font-serif gradient-text">
              Nooon
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Developing a comprehensive SEO strategy for a luxury hospitality SaaS platform, 
              focusing on international markets and premium brand positioning.
            </p>
          </header>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">+250%</div>
              <div className="text-gray-400">Organic Traffic Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">15+</div>
              <div className="text-gray-400">International Markets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">100%</div>
              <div className="text-gray-400">Core Web Vitals</div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                The Challenge
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Nooon, a premium hospitality SaaS platform, needed to establish a strong 
                  digital presence in highly competitive international markets. The challenge 
                  was to balance luxury brand positioning with technical SEO requirements 
                  while maintaining exceptional performance metrics.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Limited organic visibility in target markets</li>
                  <li>Complex multi-language content requirements</li>
                  <li>Need for premium brand positioning in search results</li>
                  <li>Technical challenges with international site architecture</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                The Solution
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Implemented a comprehensive international SEO strategy combining technical 
                  excellence with luxury brand storytelling:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                    <h3 className="font-bold text-lg mb-3 text-luxury-platinum">
                      Technical SEO
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-400">
                      <li>• Hreflang implementation across 15 markets</li>
                      <li>• Core Web Vitals optimization</li>
                      <li>• Structured data for rich snippets</li>
                      <li>• International site architecture</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                    <h3 className="font-bold text-lg mb-3 text-luxury-platinum">
                      Content Strategy
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-400">
                      <li>• Luxury hospitality content framework</li>
                      <li>• Multi-language SEO content</li>
                      <li>• Premium brand positioning</li>
                      <li>• Industry-specific keyword research</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                The Results
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  The comprehensive SEO strategy delivered exceptional results across all 
                  target markets:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>250% increase</strong> in organic traffic within 6 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>100% Core Web Vitals</strong> passing across all pages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>15 international markets</strong> with top 10 rankings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>Premium brand visibility</strong> in luxury hospitality sector</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'Technical SEO', 'Hreflang', 'Schema.org', 'Core Web Vitals', 'International SEO'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-900 text-gray-300 rounded-lg border border-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  )
}
