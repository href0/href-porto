import { motion } from 'framer-motion';
import { Code2, Database, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code2, text: '4+ Years Experience', color: 'text-primary' },
    { icon: Database, text: 'SQL & NoSQL Expert', color: 'text-accent' },
    // { icon: Cloud, text: 'Cloud Architecture', color: 'text-blue-400' },
    { icon: Zap, text: 'Performance Optimization', color: 'text-yellow-400' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-mono text-sm text-primary mb-2"
            >
              <span className="text-accent">{'<'}</span>about
              <span className="text-accent">{' />'}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Building Reliable{' '}
              <span className="text-gradient">Backend Systems</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-secondary/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="font-mono text-xs text-muted-foreground mb-3">
                  // developer.bio
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Experienced <span className="text-primary font-semibold">Backend Developer</span> with{' '}
                  <span className="text-accent font-semibold">4+ years</span> of experience building{' '}
                  <span className="text-foreground">scalable and high-performance systems</span> using{' '}
                  Node.js, Express.js, Bun, and Hono.
                </p>
              </div>

              <div className="bg-secondary/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="font-mono text-xs text-muted-foreground mb-3">
                  // expertise
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Skilled in designing <span className="text-primary">RESTful APIs</span>, integrating{' '}
                  <span className="text-accent">message queue systems</span>, and managing SQL/NoSQL databases{' '}
                  such as MySQL, PostgreSQL, and MongoDB.
                </p>
              </div>

              <div className="bg-secondary/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <div className="font-mono text-xs text-muted-foreground mb-3">
                  // experience
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Strong background in developing <span className="text-foreground">ERP, e-commerce</span>, and{' '}
                  <span className="text-primary font-semibold">large-scale government systems</span>{' '}
                  (INSW - Ministry of Finance).
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-6">
                <div className="font-mono text-xs text-primary mb-3">
                  // currently_learning
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Hono', 'Drizzle ORM', 'Bun Runtime'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background/50 border border-primary/30 rounded text-sm font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-4 bg-secondary/30 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-secondary/50 transition-all group"
                >
                  <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-mono text-lg font-semibold">{item.text}</h3>
                  </div>
                </motion.div>
              ))}

              {/* Code Block Decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="bg-secondary/50 border border-border rounded-lg p-6 font-mono text-sm"
              >
                <div className="text-muted-foreground mb-2">
                  <span className="text-accent">{'// '}</span>Key Strengths
                </div>
                <div className="space-y-1">
                  <div>
                    <span className="text-primary">→</span>{' '}
                    <span className="text-foreground">Clean Architecture</span>
                  </div>
                  <div>
                    <span className="text-primary">→</span>{' '}
                    <span className="text-foreground">API Scalability</span>
                  </div>
                  <div>
                    <span className="text-primary">→</span>{' '}
                    <span className="text-foreground">System Reliability</span>
                  </div>
                  <div>
                    <span className="text-primary">→</span>{' '}
                    <span className="text-foreground">Database Optimization</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
