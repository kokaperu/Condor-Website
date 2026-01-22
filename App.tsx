
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Philosophy from './components/Philosophy';
import Origin from './components/Origin';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-condor-green selection:text-condor-offwhite">
      <Navigation scrolled={scrolled} />
      
      <main>
        <Hero />
        
        <section id="products" className="py-24 md:py-48 bg-condor-black">
          <ProductShowcase />
        </section>

        <section id="approach" className="py-24 md:py-48 bg-condor-offwhite text-condor-black">
          <Philosophy />
        </section>

        <section id="origin" className="py-24 md:py-48 bg-condor-charcoal">
          <Origin />
        </section>
      </main>

      <Footer />
      
      {/* Subtle brand assistant for inquiries */}
      <Assistant />
    </div>
  );
};

export default App;
