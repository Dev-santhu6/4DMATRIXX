import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Hero3DCube from './Hero3DCube';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial-neon opacity-30" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 matrix-grid opacity-50" />

      {/* 3D Cube */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block">
        <Hero3DCube />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            {/* <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Next-Gen IT Solutions
            </span> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            <span className="text-foreground">4D MATRIXX</span>
            <br />
            <span className="gradient-text">Future-Driven</span>
            <br />
            <span className="text-foreground">IT Innovations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl"
          >
            Next-generation IT solutions for businesses that think beyond limits.
            Transform your digital landscape with cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              className="btn-neon-filled inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#services"
              className="btn-neon inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={18} />
              Explore Services
            </motion.a>
          </motion.div>

          {/* Stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border"
          >
            {[
              { value: '5+', label: 'Projects Delivered' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile 3D Cube */}
      <div className="absolute inset-0 lg:hidden opacity-30">
        <Hero3DCube />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
