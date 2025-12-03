import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SecureVault Pro',
    category: 'Cybersecurity',
    description: 'Enterprise-level security platform with real-time threat detection and automated response systems.',
    tags: ['Python', 'AWS', 'ML'],
    image: '/placeholder.svg',
  },
  {
    title: 'CloudSync Enterprise',
    category: 'Cloud Platform',
    description: 'Multi-cloud management platform enabling seamless infrastructure orchestration across providers.',
    tags: ['Go', 'Kubernetes', 'Terraform'],
    image: '/placeholder.svg',
  },
  {
    title: 'AI Analytics Hub',
    category: 'AI/ML',
    description: 'Predictive analytics dashboard powered by machine learning for data-driven decision making.',
    tags: ['Python', 'TensorFlow', 'React'],
    image: '/placeholder.svg',
  },
  {
    title: 'FinTech Connect',
    category: 'Web Development',
    description: 'Digital banking platform with secure transactions and real-time portfolio management.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    image: '/placeholder.svg',
  },
  {
    title: 'SmartCity IoT',
    category: 'IoT Solutions',
    description: 'Integrated IoT platform for smart city infrastructure monitoring and management.',
    tags: ['C++', 'MQTT', 'Azure'],
    image: '/placeholder.svg',
  },
  {
    title: 'HealthTech Mobile',
    category: 'Mobile App',
    description: 'HIPAA-compliant healthcare app with telemedicine and patient monitoring features.',
    tags: ['React Native', 'Firebase', 'HL7'],
    image: '/placeholder.svg',
  },
];

const categories = ['All', 'Cybersecurity', 'Cloud Platform', 'AI/ML', 'Web Development', 'Mobile App'];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-neon opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="section-title mb-4">
            Featured
            <span className="gradient-text block">Case Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that have transformed 
            businesses across industries.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'glass-card text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              className="glass-card-glow overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-dark overflow-hidden">
                <div className="absolute inset-0 bg-gradient-neon opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-primary rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                  >
                    <ExternalLink size={18} className="text-primary-foreground" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center"
                  >
                    <Github size={18} className="text-primary" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
