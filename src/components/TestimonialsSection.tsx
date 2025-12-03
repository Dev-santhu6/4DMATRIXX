import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechVenture Inc.',
    content: '4D MATRIXX transformed our entire digital infrastructure. Their cybersecurity solutions have been exceptional, and the team\'s expertise is unmatched. We\'ve seen a 40% improvement in system performance.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'CEO, GlobalFinance',
    content: 'The AI solutions implemented by 4D MATRIXX have revolutionized our data analytics capabilities. Their team delivered beyond expectations, on time and within budget.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'VP Engineering, HealthCore',
    content: 'Working with 4D MATRIXX was a game-changer for our mobile app development. Their attention to detail and commitment to security in healthcare applications is remarkable.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Director of IT, RetailMax',
    content: 'The cloud migration handled by 4D MATRIXX was seamless. Zero downtime, incredible support, and the cost savings have been substantial. Highly recommended!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-card/50">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="section-title mb-4">
            What Our Clients
            <span className="gradient-text block">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card-glow p-8 md:p-12">
              {/* Quote icon */}
              <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <div className="pt-8">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-lg md:text-xl text-foreground leading-relaxed mb-8"
                >
                  "{testimonials[currentIndex].content}"
                </motion.p>

                {/* Author */}
                <motion.div
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-neon flex items-center justify-center font-display font-bold text-primary-foreground">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="absolute bottom-8 right-8 flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
