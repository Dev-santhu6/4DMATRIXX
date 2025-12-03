import MatrixRain from '@/components/MatrixRain';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechnologiesSection />
        {/* <PortfolioSection /> */}
        <WhyChooseUs />
        {/* <StatsSection /> */}
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
