import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 150, suffix: '+', label: 'Team Members' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
  { value: 30, suffix: '+', label: 'Countries Served' },
];

const Counter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 matrix-grid opacity-20" />
        {/* Animated lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Our Impact
          </span>
          <h2 className="section-title mb-4">
            Numbers That
            <span className="gradient-text block">Speak</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-card-glow p-8 text-center relative overflow-hidden group">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-radial-neon opacity-0 group-hover:opacity-30 transition-opacity" />
                
                {/* Value */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neon animate-text-glow mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>
                
                {/* Label */}
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>
    </section>
  );
};

export default StatsSection;
