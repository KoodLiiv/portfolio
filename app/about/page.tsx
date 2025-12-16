'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const personalInterests = [
    {
      title: 'Technology & Innovation',
      description: 'Passionate about exploring emerging technologies, AI advancements, and their practical applications in business and development.',
      icon: '💻'
    },
    {
      title: 'Global Business',
      description: 'Fascinated by international markets, cross-cultural business strategies, and the dynamics of global commerce.',
      icon: '🌍'
    },
    {
      title: 'Continuous Learning',
      description: 'Committed to lifelong learning through coding challenges, technical documentation, and staying current with industry trends.',
      icon: '📚'
    },
    {
      title: 'Performance Optimization',
      description: 'Enthusiastic about web performance, Core Web Vitals, and creating lightning-fast digital experiences.',
      icon: '⚡'
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About - Professional Biography',
            description: 'Learn about my journey from International Business to Technical SEO and Software Development',
          })
        }}
      />

      <main className="min-h-screen luxury-gradient">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(212, 175, 55) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-serif">
              <span className="gradient-text">About Me</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From international boardrooms to code repositories
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className={`grid lg:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Left Column - Photo */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-2 border-luxury-gold/30 shadow-2xl">
                <Image
                  src="/linkkari-photo.jpeg"
                  alt="Professional photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Biography */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-6 gradient-text font-serif">
                  My Journey
                </h2>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    My professional journey began in the dynamic world of <span className="text-luxury-gold font-semibold">International Business</span>, 
                    where I developed a deep understanding of global markets, cross-cultural communication, 
                    and strategic business development. Working across borders taught me the importance 
                    of precision, adaptability, and data-driven decision-making.
                  </p>
                  
                  <p>
                    As digital transformation reshaped the business landscape, I became increasingly 
                    fascinated by the technical foundations that power modern commerce. This curiosity 
                    led me to <span className="text-luxury-gold font-semibold">Technical SEO</span>, where I discovered 
                    the perfect intersection of business strategy and technical implementation.
                  </p>
                  
                  <p>
                    Determined to master the craft, I embarked on an intensive coding journey at 
                    <span className="text-luxury-gold font-semibold"> kood/sisu</span>, Estonia's innovative 
                    peer-to-peer learning institution. Here, I immersed myself in software development, 
                    learning to build high-performance web applications, optimize Core Web Vitals, 
                    and create seamless digital experiences.
                  </p>
                  
                  <p>
                    Today, I bridge the gap between business objectives and technical execution, 
                    specializing in <span className="text-luxury-gold font-semibold">performance optimization</span>, 
                    <span className="text-luxury-gold font-semibold"> SEO-driven development</span>, and 
                    creating digital solutions that drive measurable business results.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 text-luxury-platinum">Core Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Technical SEO', 'Next.js', 'React', 'TypeScript', 'Core Web Vitals', 'International Business'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-r from-luxury-gold/10 to-purple-900/10 border border-luxury-gold/30 rounded-lg text-sm text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Interests Section */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl font-bold text-center mb-12 font-serif">
              <span className="gradient-text">Personal Interests</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {personalInterests.map((interest, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-luxury-gold/50 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-luxury-gold/20"
                >
                  <div className="text-4xl mb-4">{interest.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-luxury-platinum group-hover:text-luxury-gold transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-luxury-gold/10 via-purple-900/10 to-luxury-gold/10 border border-luxury-gold/30 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                Interested in collaboration, have a project in mind, or just want to chat about tech and business?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/KoodLiiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-luxury-platinum transition-colors duration-200"
                >
                  View My Work
                </a>
                <a
                  href="https://www.linkedin.com/in/kristen-liivrand/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-luxury-gold text-luxury-gold font-semibold rounded-lg hover:bg-luxury-gold hover:text-black transition-all duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
