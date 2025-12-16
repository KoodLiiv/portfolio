import React from 'react'

const projects = [
  {
    title: "Pathfinder Engine",
    category: "Backend / Algorithms",
    description: "A high-performance graph navigation engine built in Go. Implements optimized search algorithms to solve complex routing problems with minimal latency.",
    skills: ["Go", "Algorithms", "Optimization"],
    impact: "Principles of crawl-path optimization applied to large-scale site architectures."
  },
  {
    title: "SimpleBank Logic",
    category: "Systems / Fintech",
    description: "A robust financial system developed in Go, focusing on data integrity, concurrent transaction handling, and secure API design.",
    skills: ["Go", "SQL", "Concurrency"],
    impact: "Demonstrates the ability to handle complex, mission-critical data with 100% accuracy."
  },
  {
    title: "WeatherStation API",
    category: "Data Processing",
    description: "A real-time data ingestion tool that processes environmental metrics. Features automated JSON parsing and integration with external data providers.",
    skills: ["Go", "API Integration", "JSON"],
    impact: "Foundational architecture for building custom, real-time SEO data monitoring tools."
  }
]

export default function TechnicalProjects() {
  return (
    <section id="technical" className="py-20 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center gradient-text font-serif">Technical Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Selected engineering tasks from kood/sisu. Focused on high-performance backend logic and scalable system architecture.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 border border-luxury-gold/20 p-8 rounded-2xl hover:border-luxury-gold/50 transition-all group">
              <span className="text-xs font-bold text-luxury-gold tracking-widest uppercase">{project.category}</span>
              <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:text-luxury-gold transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
              
              <div className="mb-6 flex flex-wrap gap-2">
                {project.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs text-luxury-platinum border border-white/10">{skill}</span>
                ))}
              </div>
              
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs italic text-gray-500"><strong className="text-luxury-gold not-italic">Strategy:</strong> {project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
