import React from 'react';
import LayoutHeader from './components/LayoutHeader';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import LayoutFooter from './components/LayoutFooter';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <LayoutHeader />
      <main className="flex-grow">
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;

// DONE