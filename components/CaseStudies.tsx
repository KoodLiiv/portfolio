import Link from 'next/link'

interface CaseStudy {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  metrics: {
    label: string
    value: string
  }[]
  image?: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'nooon',
    title: 'Nooon - Hospitality SaaS Platform',
    category: 'Hospitality SaaS',
    description: 'Developed a comprehensive SEO strategy for a luxury hospitality SaaS platform, focusing on international markets and brand positioning.',
    tags: ['Technical SEO', 'International', 'SaaS', 'Hospitality'],
    metrics: [
      { label: 'Organic Traffic', value: '+250%' },
      { label: 'International Markets', value: '15+' },
      { label: 'Core Web Vitals', value: '100%' },
    ]
  },
  {
    id: 'dmsp',
    title: 'DMSP - Global SEO Strategy',
    category: 'Global SEO',
    description: 'Implemented enterprise-level international SEO architecture with hreflang optimization, multi-regional content strategy, and technical infrastructure.',
    tags: ['Enterprise SEO', 'Hreflang', 'Multi-regional', 'Technical'],
    metrics: [
      { label: 'Global Rankings', value: 'Top 3' },
      { label: 'Countries', value: '25+' },
      { label: 'Languages', value: '12' },
    ]
  }
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-serif">
            <span className="gradient-text">Featured Case Studies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world success stories in Technical SEO and International Business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-luxury-gold transition-all duration-300 hover:shadow-2xl hover:shadow-luxury-gold/20"
            >
              {/* Content */}
              <div className="p-8">
                <div className="text-sm text-luxury-gold font-semibold mb-2">
                  {study.category}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-serif group-hover:text-luxury-gold transition-colors">
                  {study.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-xl font-bold text-luxury-gold mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/case-studies/${study.id}`}
                  className="inline-flex items-center text-luxury-gold hover:text-luxury-platinum transition-colors group"
                >
                  View Case Study
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/0 to-luxury-gold/0 group-hover:from-luxury-gold/5 group-hover:to-luxury-gold/10 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
