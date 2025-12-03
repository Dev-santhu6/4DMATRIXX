import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Frontend Development', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: ' WordPress Development', href: '#services' },
    { name: 'Poster Design', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    //{ name: 'Portfolio', href: '#portfolio' },
   // { name: 'Careers', href: '#' },
   // { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
 legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
   // { name: 'GDPR', href: '#' },
  ], 
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-primary/20">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 border-2 border-primary rotate-45 animate-glow-pulse" />
                <div className="absolute inset-1 border border-primary/50 rotate-45" />
              </div>
              <span className="font-display text-xl font-bold text-neon tracking-wider">
                4D MATRIXX
              </span>
            </motion.a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Pioneering the future of IT solutions with innovative technology 
              and unwavering commitment to excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 4D MATRIXX. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with <span className="text-primary">♦</span> for the future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
