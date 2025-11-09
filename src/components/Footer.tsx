import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/href0',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/href0',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:me@hrefdev.be',
      label: 'Email',
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-mono text-lg font-bold mb-4">
              <span className="text-accent">{'<'}</span>
              <span className="text-foreground">Hermansyah Efendi</span>
              <span className="text-accent">{' />'}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Backend Developer specializing in building scalable and high-performance systems.
            </p>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:text-center"
          >
            <h3 className="font-mono text-sm text-primary mb-4">Quick Links</h3>
            <div className="flex flex-col md:items-center gap-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:text-right"
          >
            <h3 className="font-mono text-sm text-primary mb-4">Connect</h3>
            <div className="flex md:justify-end gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-secondary border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span>© {currentYear} Hermansyah Efendi.</span>
            <span className="hidden md:inline">Built with</span>
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span className="md:hidden">Built</span> using React + TypeScript
            </span>
          </div>

          {/* Tech Badge */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Code2 className="w-4 h-4 text-primary" />
            <span>
              Powered by <span className="text-primary">Vite</span> +{' '}
              <span className="text-accent">Tailwind</span>
            </span>
          </div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </footer>
  );
};

export default Footer;
