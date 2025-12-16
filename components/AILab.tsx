interface AIProject {
  title: string
  description: string
  icon: string
  tags: string[]
}

const aiProjects: AIProject[] = [
  {
    title: 'SEO Content Automation',
    description: 'AI-powered content generation and optimization pipeline using LLMs for multi-language SEO content at scale.',
    icon: '🤖',
    tags: ['LLM', 'Automation', 'Content', 'Multi-language']
  },
  {
    title: 'Technical SEO Auditor',
    description: 'Automated technical SEO analysis tool leveraging AI to identify and prioritize optimization opportunities.',
    icon: '🔍',
    tags: ['Analysis', 'Automation', 'Technical SEO']
  },
  {
    title: 'Keyword Research AI',
    description: 'Machine learning model for intelligent keyword research and clustering across international markets.',
    icon: '📊',
    tags: ['ML', 'Keywords', 'Research', 'International']
  },
  {
    title: 'Schema Markup Generator',
    description: 'AI-assisted schema.org markup generation for rich snippets and enhanced SERP presence.',
    icon: '⚡',
    tags: ['Schema', 'Structured Data', 'SERP']
  }
]

export default function AILab() {
  return (
    <section id="ai-lab" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-serif">
            <span className="gradient-text">AI Lab</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge SEO automation and LLM workflows for modern digital marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {aiProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-luxury-gold transition-all duration-300 hover:shadow-xl hover:shadow-luxury-gold/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-luxury-gold transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/0 to-luxury-gold/0 group-hover:from-purple-900/10 group-hover:to-luxury-gold/10 rounded-xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-luxury-gold text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-luxury-gold/50 transition-all duration-300"
          >
            Explore AI Solutions
          </a>
        </div>
      </div>
    </section>
  )
}
