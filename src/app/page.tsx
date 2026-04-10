import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import { ProcessSection, TestimonialsSection, CTABanner } from '@/components/sections/ExtraSections';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Hero />
      <div className="gold-divider" />
      <AboutSection />
      <div className="gold-divider" />
      <ServicesSection />
      <div className="gold-divider" />
      <PortfolioSection />
      <div className="gold-divider" />
      <ProcessSection />
      <div className="gold-divider" />
      <TestimonialsSection />
      <div className="gold-divider" />
      <CTABanner />
    </>
  );
}
