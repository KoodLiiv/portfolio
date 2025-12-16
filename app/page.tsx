import Hero from '@/components/Hero'
import CaseStudies from '@/components/CaseStudies'
import AILab from '@/components/AILab'
import TechnicalProjects from '@/components/TechnicalProjects'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kristen Liivrand',
    jobTitle: 'Technical SEO Specialist & International Business Strategist',
    description: 'Expert in Technical SEO, International Business (BBA), and Full-Stack Development (kood/sisu). Focused on scaling luxury hospitality brands.',
    url: 'https://portfolio.kristenliivrand.com', // Replace with your live Vercel URL
    sameAs: [
      'https://linkedin.com/in/kristen-liivrand/',
      'https://github.com/KoodLiiv',
    ],
    knowsAbout: [
      'Technical SEO',
      'International Business Strategy',
      'Next.js & React',
      'Go Programming',
      'AI & LLM Automation for SEO',
      'Luxury Hospitality Marketing',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      
      {/* New About Me Section */}
      <section className="py-20 bg-black text-white px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 border-b border-gold pb-2 text-platinum">The Journey: From Strategy to Code</h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              My career began with a deep curiosity about global market dynamics, leading me from my home in Finland to Mexico for exchange studies at UDEM. This international transition wasn't just academic; it was the spark for my second venture. I founded dmsp.com.mx, a digital marketing agency where I successfully bridged the gap between European and American markets. Serving clients across both continents gave me a macro-view of how SEO and business strategy must adapt to different cultural and linguistic landscapes.
            </p>
            <p>
             My work with Nooon, a SaaS platform for luxury hotels and influencers, narrowed my focus to the high-stakes world of Luxury Hospitality. It was here that I mastered the art of blending premium brand storytelling with data-driven search strategies. I learned that in the luxury sector, digital presence must be as seamless and high-end as the physical guest experience. This specialized insight is what I now bring to the table for global icons like MGM.
            </p>
            <p>
              While I understood digital channels and marketing strategy, I realized that to truly master the future of search, I needed to understand the "soul" of the web: THE CODE. This led me to kood/sisu, where I have transitioned into a developer capable of building the very architectures I optimize. By combining my International Business BBA and agency background with hands-on mastery of Go, Next.js, and AI automation, I no longer just suggest SEO strategies. I engineer them from the ground up.
            </p>
          </div>
        </div>
      </section>

      <CaseStudies />
      <AILab />
      <TechnicalProjects />
    </>
  )
}