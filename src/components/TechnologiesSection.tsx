// 

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpress } from 'react-icons/fa';
import { SiSharp, SiPhp, SiMysql, SiMongodb, SiNodedotjs, SiCanva, SiFigma } from 'react-icons/si';



const technologies = [
  { name: 'HTML', category: 'Frontend', icon: FaHtml5 },
  { name: 'CSS', category: 'Frontend', icon: FaCss3Alt },
  { name: 'JavaScript', category: 'Frontend', icon: FaJs },
  { name: 'React', category: 'Frontend', icon: FaReact },
  { name: 'C#', category: 'Backend', icon: SiSharp },
  { name: 'PHP', category: 'Backend', icon: SiPhp },
  { name: 'SQL', category: 'Database', icon: SiMysql },
  { name: 'MongoDB', category: 'Database', icon: SiMongodb },
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs },
  { name: 'WordPress', category: 'CMS', icon: FaWordpress },
  { name: 'Canva', category: 'Design', icon: SiCanva },
  { name: 'Figma', category: 'Design', icon: SiFigma },
];


const TechnologiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="technologies" className="py-24 relative overflow-hidden bg-card/50">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Tech Stack
          </span>
          <h2 className="section-title mb-4">
            Technologies
            <span className="gradient-text block">We Master</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We leverage the latest and most powerful technologies to build 
            solutions that stand the test of time.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-card p-4 text-center group cursor-pointer hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-medium text-foreground text-sm">{tech.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{tech.category}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating decoration */}
        <div className="mt-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card-glow p-8 text-center max-w-3xl mx-auto"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-muted-foreground">
              Our team stays ahead of the curve by continuously adopting emerging 
              technologies and best practices to deliver innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
