import { motion } from 'framer-motion';
import { ExternalLink, Github, Server, ShoppingCart, Building2, Package, Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: '@href00/envx',
      description:
        'A lightweight, type-safe environment variable manager for Node.js applications. Published on NPM with TypeScript support, validation, and easy configuration management.',
      icon: Package,
      tech: ['TypeScript', 'Node.js', 'NPM Package', 'CLI'],
      highlights: ['Open Source', 'Type-Safe', 'Published on NPM'],
      github: 'https://github.com/href0/envx',
      link: 'http://envx.hrefdev.be/',
      npm: 'https://www.npmjs.com/package/@href00/envx',
      featured: true,
    },
    {
      title: 'Indonesia National Single Window (INSW)',
      description:
        'Large-scale government integration platform connecting Ministry of Finance with Ministry of Transportation (Inaport), Ministry of Trade, Ministry of Health, and other agencies. Features microservices architecture with RabbitMQ message queuing and Redis caching for high-performance inter-ministry data exchange.',
      icon: Building2,
      tech: ['Node.js', 'Express', 'PostgreSQL', 'RabbitMQ', 'Redis', 'Microservices'],
      highlights: ['Government Scale', 'Multi-Ministry Integration', 'Message Queue'],
      github: null, // Government project
      link: null,
      featured: true,
    },
    {
      title: 'ERP & Point of Sale (POS) System',
      description:
        'Comprehensive full-stack ERP application with integrated POS, featuring product management, warehouse operations, stock control, sales transactions, and third-party e-commerce integration (Tokopedia & Shopee) for automated product sync.',
      icon: Server,
      tech: ['Node.js', 'Express.js', 'Angular', 'MySQL', 'Tokopedia API', 'Shopee API'],
      highlights: ['Full-Stack', 'E-commerce Integration', 'POS System'],
      github: null,
      link: null,
      featured: true,
    },
    {
      title: 'E-Commerce Backend Platform',
      description:
        'Robust backend system for e-commerce platform handling products, orders, payments, and user management. Deployed on Google Cloud Platform with high availability.',
      icon: ShoppingCart,
      tech: ['Node.js', 'Express.js', 'MySQL', 'GCP', 'Redis'],
      highlights: ['Cloud Native', 'High Availability', 'RESTful APIs'],
      github: null,
      link: null,
      featured: true,
    },
    {
      title: 'Bun Hono Drizzle Starter',
      description:
        'A production-ready starter template for building modern APIs with Bun + Hono + Drizzle ORM. Features smart pagination, auto-generated OpenAPI documentation, JWT authentication, comprehensive validation, and flexible data seeding system.',
      icon: Rocket,
      tech: ['Bun', 'Hono', 'Drizzle ORM', 'TypeScript', 'PostgreSQL', 'Swagger'],
      highlights: ['OpenAPI Documentation', 'Smart Pagination', 'JWT Auth', 'Docker Support'],
      github: 'https://github.com/href0/bun-hono-drizzle-starter',
      link: 'https://bun-starter.hrefdev.be/swagger-doc',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-secondary/20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-sm text-primary mb-2"
            >
              <span className="text-accent">{'<'}</span>projects
              <span className="text-accent">{' />'}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Featured <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mt-4 font-mono text-sm"
            >
              // Major projects and systems I've built
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div
                  className={`h-full bg-card/50 backdrop-blur-sm border rounded-lg p-6 hover:bg-card/70 transition-all ${
                    project.featured
                      ? 'border-primary/50 hover:border-primary hover:shadow-xl hover:shadow-primary/20'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, hIndex) => (
                      <span
                        key={hIndex}
                        className="px-2 py-1 bg-accent/10 text-accent border border-accent/30 rounded text-xs font-mono"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="font-mono text-xs text-muted-foreground mb-2">
                      // tech_stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2 py-1 bg-secondary/50 border border-primary/20 rounded text-xs font-mono text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded text-sm font-mono transition-all hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.npm && (
                      <a
                        href={project.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-mono transition-all hover:scale-105"
                      >
                        <Package className="w-4 h-4" />
                        NPM
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded text-sm font-mono transition-all hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Docs
                      </a>
                    )}
                    {!project.github && !project.link && !project.npm && (
                      <div className="text-xs text-muted-foreground font-mono italic">
                        Proprietary / Confidential Project
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-8">
              <div className="font-mono text-xs text-muted-foreground mb-3">
                // more_projects
              </div>
              <h3 className="text-2xl font-bold mb-4">
                More Projects on <span className="text-gradient">GitHub</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my other open-source contributions and side projects
              </p>
              <a
                href="https://github.com/href0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-mono transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                <Github className="w-5 h-5" />
                View GitHub Profile
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
