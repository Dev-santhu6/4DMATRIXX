import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Delivering innovative solutions that transform businesses and drive digital excellence.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Constantly pushing boundaries with cutting-edge technologies and creative problem-solving.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Building lasting partnerships through exceptional service and unwavering commitment.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining the highest standards of quality in every project we undertake.',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h2 className="section-title mb-6">
              Pioneering the
              <span className="gradient-text block">Digital Future</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              4D MATRIXX is a cutting-edge IT company specializing in transformative 
              digital solutions. Founded on the principle that technology should empower 
              businesses, we combine innovation with expertise to deliver solutions that 
              drive real results.
            </p>
            {/* <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of seasoned professionals brings together decades of experience 
              in software development, cybersecurity, cloud infrastructure, and artificial 
              intelligence. We don't just build solutions—we architect the future.
            </p> */}

            <div className="flex flex-wrap gap-6">
              {[
                { value: '3+', label: 'Years Experience' },
                // { value: '150+', label: 'Team Members' },
                // { value: '30+', label: 'Countries Served' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-display font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card-glow p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
