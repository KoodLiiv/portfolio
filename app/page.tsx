import Hero from '@/components/Hero'
import CaseStudies from '@/components/CaseStudies'
import AILab from '@/components/AILab'
import TechnicalProjects from '@/components/TechnicalProjects'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'SEO & International Business Professional',
    jobTitle: 'Technical SEO Specialist & International Business Strategist',
    description: 'Specialist in Technical SEO, International Business, and high-performance web development',
    url: 'https://portfolio.example.com',
    sameAs: [
      'https://linkedin.com/in/profile',
      'https://github.com/profile',
    ],
    knowsAbout: [
      'Technical SEO',
      'International Business',
      'Next.js',
      'Core Web Vitals',
      'Web Performance',
      'AI & LLM Workflows',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <CaseStudies />
      <AILab />
      <TechnicalProjects />
    </>
  )
}
