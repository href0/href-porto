import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Wrench,
  Layers,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: ['JavaScript', 'TypeScript', 'PHP'],
    },
    {
      title: 'Frameworks & Runtime',
      icon: Server,
      color: 'from-primary to-blue-600',
      skills: ['Node.js', 'Express.js', 'Hono', 'NestJS', 'Bun', 'Laravel', 'CodeIgniter'],
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-accent to-emerald-600',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'ORM & Query Builders',
      icon: Layers,
      color: 'from-purple-500 to-pink-500',
      skills: ['Prisma', 'Drizzle ORM', 'Sequelize', 'Knex', 'TypeORM'],
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: ['Docker', 'Git', 'Google Cloud Platform', 'CI/CD'],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

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
              <span className="text-accent">{'<'}</span>skills
              <span className="text-accent">{' />'}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Tech <span className="text-gradient">Stack</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mt-4 font-mono text-sm"
            >
              // Technologies I work with
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="group"
              >
                <div className="h-full bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:bg-card/70">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} p-2.5 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-full h-full text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-semibold font-mono text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.3
                        }}
                        className="px-3 py-1.5 bg-secondary/70 border border-border rounded-md text-sm font-mono text-foreground hover:border-primary/50 hover:bg-secondary transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-lg p-8 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-primary" />
                  <div className="font-mono text-sm text-primary">
                    // primary_tech_stack
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Node.js',
                    'Express.js',
                    'Bun',
                    'Hono',
                    'NestJS',
                    'TypeScript',
                    'JavaScript',
                    'MySQL',
                    'PostgreSQL',
                    'MongoDB',
                    'Redis',
                    'Prisma',
                    'Drizzle ORM',
                    'Docker',
                    'GCP',
                    'Git',
                  ].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.02 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="px-4 py-2.5 bg-background/80 border-2 border-primary/40 rounded-lg text-sm font-mono text-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all cursor-default hover:bg-background"
                    >
                      <span className="text-primary">•</span> {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code Comment */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-xs font-mono text-muted-foreground">
              <span className="text-accent">{'// '}</span>
              Constantly learning and adapting to new technologies
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
