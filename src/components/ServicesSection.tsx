import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Code, 
  Smartphone, 
  FileText,
  Brain, 
  Cloud, 
  Database,
  ArrowRight,
Globe,
Brush
} from 'lucide-react';
import { FaWordpress } from "react-icons/fa";


const services = [
   {
  icon: Code,
  title: 'Frontend Development',
  description: 'Build interactive and responsive websites using HTML, CSS, and JavaScript.',
  features: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
},  
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies for optimal performance.',
    features: ['React.js', 'Full-Stack Solutions(MERN)', 'E-commerce'],
  },
   {
    icon:FaWordpress,
    title: 'WordPress Development',
  description: 'Custom WordPress websites with powerful features and responsive layouts.',
  features: ['Theme Customization', 'Plugin Integration', 'Website Optimization'],
  },
  {
  icon: Brush,
  title: 'Poster Design',
  description: 'Creative and modern poster designs for branding, marketing, and promotions.',
  features: ['Custom Layouts', 'High-Quality Graphics', 'Brand-Focused Designs'],
},
{
  icon: FileText,
  title: 'Resume Designing',
  description: 'Professional resume designs crafted to highlight skills and improve presentation.',
  features: ['Clean Templates', 'Modern Layouts', 'ATS-Friendly Formatting'],
},

{
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS & Android', 'React Native', 'Flutter'],
  },
  // {
  //   icon: Brain,
  //   title: 'AI Solutions',
  //   description: 'Harness the power of artificial intelligence to automate and optimize your operations.',
  //   features: ['Machine Learning', 'NLP', 'Computer Vision'],
  // },
  // {
  //   icon: Cloud,
  //   title: 'Cloud Services',
  //   description: 'Scalable cloud infrastructure and migration services for modern businesses.',
  //   features: ['AWS/Azure/GCP', 'DevOps', 'Microservices'],
  // },
  // {
  //   icon: Database,
  //   title: 'Software Development',
  //   description: 'Custom enterprise software solutions tailored to your unique business requirements.',
  //   features: ['ERP Systems', 'CRM Solutions', 'API Development'],
  // },
  // {
  //   icon: Shield,
  //   title: 'Cybersecurity',
  //   description: 'Enterprise-grade security solutions to protect your digital assets from evolving threats.',
  //   features: ['Threat Detection', 'Penetration Testing', 'Security Audits'],
  // },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 matrix-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-neon opacity-20" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="section-title mb-4">
            Comprehensive IT
            <span className="gradient-text block">Solutions</span>
          </h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            From cybersecurity to AI, we offer end-to-end technology services 
            that drive innovation and accelerate your digital transformation.
          </p> */}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-glow p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-neon p-0.5">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {/* <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-4 transition-all">
                Learn More
                <ArrowRight size={16} />
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
