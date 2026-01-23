
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Philosophy from './components/Philosophy';
import Origin from './components/Origin';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import RetailInquiries from './components/RetailInquiries';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Compliance from './components/Compliance';

export type ViewState = 'home' | 'retail' | 'privacy' | 'terms' | 'compliance';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentView) {
      case 'retail':
        return <RetailInquiries />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'compliance':
        return <Compliance />;
      default:
        return (
          <>
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
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-condor-green selection:text-condor-offwhite bg-condor-black">
      <Navigation scrolled={scrolled} onNavigate={navigateTo} currentView={currentView} />
      
      <main className="transition-opacity duration-500">
        {renderContent()}
      </main>

      <Footer onNavigate={navigateTo} />
      
      <Assistant />
    </div>
  );
};

export default App;
