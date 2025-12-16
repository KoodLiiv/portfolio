import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DMSP - Global SEO Strategy Case Study',
  description: 'Enterprise-level international SEO architecture with hreflang optimization, multi-regional content strategy, and technical infrastructure.',
  openGraph: {
    title: 'DMSP - Global SEO Strategy Case Study',
    description: 'Enterprise-level international SEO architecture',
  },
}

export default function DMSPCaseStudy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'DMSP - Global SEO Strategy Case Study',
    description: 'Enterprise-level international SEO architecture implementation',
    author: {
      '@type': 'Person',
      name: 'SEO Professional',
    },
    datePublished: '2024-01-01',
    keywords: 'SEO, Enterprise, International, Global Strategy',
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
              CASE STUDY / GLOBAL SEO
            </div>
            <h1 className="text-5xl font-bold mb-6 font-serif gradient-text">
              DMSP
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Implementing enterprise-level international SEO architecture with hreflang 
              optimization, multi-regional content strategy, and scalable technical infrastructure.
            </p>
          </header>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">Top 10</div>
              <div className="text-gray-400">Global Rankings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">5+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">3</div>
              <div className="text-gray-400">Languages</div>
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
                  DMSP required a comprehensive global SEO strategy to establish presence 
                  across 5+ countries and 3 languages. The project demanded enterprise-level 
                  technical architecture capable of handling complex international requirements 
                  while maintaining exceptional performance and user experience.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Complex multi-regional site architecture</li>
                  <li>Need for scalable hreflang implementation</li>
                  <li>Cultural and linguistic content adaptation</li>
                  <li>Performance optimization across global CDN</li>
                  <li>Regional search engine variations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                The Solution
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Developed and implemented a comprehensive international SEO framework 
                  combining technical excellence with strategic content planning:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                    <h3 className="font-bold text-lg mb-3 text-luxury-platinum">
                      Technical Architecture
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-400">
                      <li>• Multi-regional site structure</li>
                      <li>• Advanced hreflang implementation</li>
                      <li>• Global CDN optimization</li>
                      <li>• Regional server routing</li>
                      <li>• Automated schema markup</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                    <h3 className="font-bold text-lg mb-3 text-luxury-platinum">
                      Content & Strategy
                    </h3>
                    <ul className="text-sm space-y-2 text-gray-400">
                      <li>• 3-language content framework</li>
                      <li>• Cultural adaptation strategy</li>
                      <li>• Regional keyword research</li>
                      <li>• Local link building campaigns</li>
                      <li>• Market-specific optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                Implementation Highlights
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-gray-900 to-black border-l-4 border-luxury-gold rounded">
                  <h3 className="font-bold text-lg mb-2 text-luxury-platinum">
                    Hreflang Architecture
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Implemented a robust hreflang system managing 5+ regional variants with 
                    automated validation and monitoring to ensure correct language-region targeting.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-gray-900 to-black border-l-4 border-luxury-gold rounded">
                  <h3 className="font-bold text-lg mb-2 text-luxury-platinum">
                    Performance Optimization
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Achieved 100% Core Web Vitals across all regions through strategic CDN 
                    configuration, image optimization, and edge computing implementation.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-gray-900 to-black border-l-4 border-luxury-gold rounded">
                  <h3 className="font-bold text-lg mb-2 text-luxury-platinum">
                    Regional Content Strategy
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Developed market-specific content strategies with local keyword research, 
                    cultural adaptation, and regional trend analysis for each target market.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                The Results
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  The enterprise-level SEO implementation delivered measurable results across 
                  all target markets:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>Top 10 rankings</strong> for primary keywords in 5+ countries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>3 languages</strong> fully optimized and performing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>Zero hreflang errors</strong> with automated monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>Global performance</strong> maintained across all regions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-luxury-gold mr-3">✓</span>
                    <span><strong>Scalable architecture</strong> supporting future expansion</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-luxury-gold font-serif">
                Technologies & Tools
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'Hreflang', 'CDN', 'Schema.org', 'Core Web Vitals', 'International SEO', 'i18n', 'Analytics'].map((tech) => (
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
