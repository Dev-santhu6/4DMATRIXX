import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Zap, 
  Shield, 
  Clock, 
  HeartHandshake, 
  TrendingUp, 
  Headphones 
} from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest technologies and frameworks to deliver future-proof solutions.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security is built into every solution from the ground up.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect deadlines and deliver projects on time without compromising quality.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership Approach',
    description: 'We work as an extension of your team, aligned with your business goals.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Our solutions grow with your business, from startup to enterprise scale.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock support ensures your systems run smoothly at all times.',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-rotate-slow" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/10 rotate-12" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Why Choose Us
          </span>
          <h2 className="section-title mb-4">
            The 4D MATRIXX
            <span className="gradient-text block">Advantage</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Partner with us for innovative solutions backed by expertise, 
            reliability, and unwavering commitment to your success.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-card p-8 h-full border-l-2 border-primary/50 hover:border-primary transition-colors">
                {/* Number */}
                <span className="absolute top-4 right-4 text-5xl font-display font-bold text-primary/10">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative">
                  <reason.icon className="w-7 h-7 text-primary" />
                  {/* Glow */}
                  <div className="absolute inset-0 bg-primary/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
