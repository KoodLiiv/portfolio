'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden luxury-gradient pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(212, 175, 55) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-luxury-gold/20 animate-gradient" 
           style={{ backgroundSize: '400% 400%' }} />

      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-serif">
            <span className="gradient-text">Technical SEO</span>
            <br />
            <span className="text-white">& International Business</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting high-performance digital experiences with a focus on 
            <span className="text-luxury-gold"> luxury branding</span>, 
            <span className="text-luxury-gold"> Core Web Vitals</span>, and 
            <span className="text-luxury-gold"> global SEO strategies</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#case-studies"
              className="px-8 py-3 bg-luxury-gold text-black font-semibold rounded-lg hover:bg-luxury-platinum transition-colors duration-200"
            >
              View Case Studies
            </a>
            <a
              href="#ai-lab"
              className="px-8 py-3 border border-luxury-gold text-luxury-gold font-semibold rounded-lg hover:bg-luxury-gold/10 transition-colors duration-200"
            >
              Explore AI Lab
            </a>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: 'Lighthouse Score', value: '100' },
              { label: 'Core Web Vitals', value: 'Optimized' },
              { label: 'SEO Score', value: '100' },
              { label: 'Accessibility', value: '96' },
            ].map((metric) => (
              <div key={metric.label} className="p-4 bg-black/40 rounded-lg border border-gray-800 backdrop-blur-sm">
                <div className="text-2xl font-bold text-luxury-gold mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-luxury-gold"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
