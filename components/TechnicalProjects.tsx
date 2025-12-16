interface TechnicalProject {
  title: string
  description: string
  tech: string[]
  category: string
  link?: string
}

const projects: TechnicalProject[] = [
  {
    title: 'Go Microservices Architecture',
    description: 'High-performance microservices built with Go, featuring distributed tracing, circuit breakers, and auto-scaling capabilities.',
    tech: ['Go', 'Docker', 'Kubernetes', 'gRPC'],
    category: 'Backend',
  },
  {
    title: 'Next.js E-commerce Platform',
    description: 'Full-stack e-commerce solution with Server Components, optimistic UI updates, and edge-rendered product pages.',
    tech: ['Next.js 14', 'TypeScript', 'Prisma', 'Stripe'],
    category: 'Full-Stack',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'WebSocket-based analytics dashboard processing millions of events per day with sub-second latency.',
    tech: ['JavaScript', 'WebSocket', 'Redis', 'D3.js'],
    category: 'Frontend',
  },
  {
    title: 'CLI Tool for DevOps',
    description: 'Command-line tool for automated deployment and infrastructure management, built with Go and integrated with cloud providers.',
    tech: ['Go', 'AWS', 'CI/CD', 'Terraform'],
    category: 'DevOps',
  },
  {
    title: 'GraphQL API Gateway',
    description: 'Scalable GraphQL gateway aggregating multiple REST APIs with intelligent caching and rate limiting.',
    tech: ['Node.js', 'GraphQL', 'Apollo', 'Redis'],
    category: 'Backend',
  },
  {
    title: 'React Component Library',
    description: 'Production-ready component library with accessibility features, dark mode, and comprehensive documentation.',
    tech: ['React', 'TypeScript', 'Storybook', 'Jest'],
    category: 'Frontend',
  },
]

export default function TechnicalProjects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-serif">
            <span className="gradient-text">Technical Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Selected projects from kood/sisu showcasing Go and JavaScript expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-luxury-gold transition-all duration-300 hover:shadow-xl hover:shadow-luxury-gold/10"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-luxury-gold/10 text-luxury-gold text-xs font-semibold rounded-full mb-4">
                {project.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-luxury-gold transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-luxury-gold hover:text-luxury-platinum transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-luxury-gold text-luxury-gold font-semibold rounded-lg hover:bg-luxury-gold/10 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
