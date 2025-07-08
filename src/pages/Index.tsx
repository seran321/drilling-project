
import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import CompanyOverview from '../components/CompanyOverview';
import TechnicalSpecs from '../components/TechnicalSpecs';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <CompanyOverview />
      <TechnicalSpecs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
