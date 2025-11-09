import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Code-style greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-sm text-muted-foreground mb-4"
          >
            <span className="text-accent">const</span>{' '}
            <span className="text-primary">developer</span> ={' '}
            <span className="text-accent">{'{'}</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            Hermansyah <span className="text-gradient glow">Efendi</span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono"
          >
            <span className="text-foreground">role:</span>{' '}
            <span className="text-primary">"Backend Developer"</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Building <span className="text-accent font-semibold">Scalable Systems</span> That{' '}
            <span className="text-primary font-semibold">Just Work</span>
          </motion.p>

          {/* Closing bracket */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="font-mono text-sm text-muted-foreground mb-8"
          >
            <span className="text-accent">{'}'}</span>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center mb-8"
          >
            <a
              href="https://1drv.ms/b/c/cc791e3ca1ce62da/EV-Dn363vt5FpAu3XvxfuTIBVXRCXbZkJVs720tZmCIiKA?e=1wjrn0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white rounded-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/50 font-mono"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span className="font-semibold">Download CV</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <a
              href="https://github.com/href0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary/80 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <Github className="w-4 h-4" />
              <span className="font-mono text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/href0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary/80 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <Linkedin className="w-4 h-4" />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:me@hrefdev.be"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono text-sm">Email</span>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono text-muted-foreground">scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
            hsl(var(--border)) 1px,
            transparent 1px
          ),
          linear-gradient(
            to right,
            hsl(var(--border)) 1px,
            transparent 1px
          );
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
