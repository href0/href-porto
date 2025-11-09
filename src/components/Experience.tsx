import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'PT. Nashta Global Utama',
      role: 'Backend Developer',
      period: 'Feb 2024 - Present',
      project: 'Ministry of Finance - Indonesia National Single Window (INSW)',
      highlights: [
        'Developed and maintained INSW application, ensuring seamless integration with multiple government agencies',
        'Designed and optimized backend services using Node.js, Express, and PostgreSQL, improving system efficiency and reducing query execution time',
        'Identified and optimized top slow queries in TemBoard, significantly improving database efficiency',
        'Implemented query decomposition strategies to improve indexing usage and minimize unnecessary computations',
      ],
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Microservices', 'SSO', 'Redis', 'RabbitMQ'],
      current: true,
    },
    {
      company: 'PT. Uruz Solusi Teknologi',
      role: 'Backend Developer',
      period: 'Nov 2022 - Feb 2024',
      project: 'Enterprise Resource Planning (ERP) System',
      highlights: [
        'Architected, developed, and maintained backend components of an ERP application using Node.js and Express.js',
        'Collaborated closely with frontend developers using Angular to ensure seamless integration',
        'Managed and optimized MySQL databases, including schema design, query optimization, and ensuring data integrity',
      ],
      tech: ['Node.js', 'Express.js', 'MySQL', 'Angular'],
      current: false,
    },
    {
      company: 'PT. Karkoon Mandiri Sentosa',
      role: 'Backend Developer',
      period: 'Dec 2020 - Sep 2022',
      project: 'E-Commerce Platform',
      highlights: [
        'Led the development of robust and scalable backend components for an e-commerce platform',
        'Designed, developed, and optimized APIs for data exchange between frontend, mobile app, and backend services',
        'Managed MySQL databases and implemented cloud-based solutions on Google Cloud Platform (GCP)',
      ],
      tech: ['Node.js', 'Express.js', 'MySQL', 'GCP'],
      current: false,
    },
    {
      company: 'RSUD H. Abdurrahman Sayoeti',
      role: 'IT Support',
      period: 'Nov 2019 - Dec 2020',
      project: 'Healthcare Software Management',
      highlights: [
        'Conducted regular maintenance, updates, and configurations of healthcare software',
        'Collaborated with internal teams and software vendors to address issues and optimize system performance',
        'Responded to user inquiries, diagnosed software-related problems, and provided timely resolutions',
      ],
      tech: ['Healthcare Software', 'System Maintenance'],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
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
              <span className="text-accent">{'<'}</span>experience
              <span className="text-accent">{' />'}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Work <span className="text-gradient">History</span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-[23px] top-12 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
                )}

                <div className="flex gap-6">
                  {/* Timeline Icon */}
                  <div className="hidden md:flex flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        exp.current
                          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                          : 'bg-secondary border-2 border-primary/30'
                      }`}
                    >
                      <Briefcase className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <div
                      className={`bg-card/50 backdrop-blur-sm border rounded-lg p-6 hover:bg-card/70 transition-all group ${
                        exp.current
                          ? 'border-primary shadow-lg shadow-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {exp.role}
                            </h3>
                            <p className="text-primary font-semibold font-mono">
                              {exp.company}
                            </p>
                            {exp.project && (
                              <p className="text-sm text-muted-foreground italic mt-1">
                                {exp.project}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                            {exp.current && (
                              <span className="ml-2 px-2 py-1 bg-accent/20 text-accent rounded text-xs font-semibold">
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="text-sm text-muted-foreground flex gap-2"
                            >
                              <span className="text-primary mt-1 flex-shrink-0">→</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 bg-secondary/50 border border-primary/30 rounded text-xs font-mono text-foreground hover:border-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
