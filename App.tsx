
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductIntro from './components/ProductIntro';
import ProductShowcase from './components/ProductShowcase';
import Philosophy from './components/Philosophy';
import Origin from './components/Origin';
import Footer from './components/Footer';
import RetailInquiries from './components/RetailInquiries';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Compliance from './components/Compliance';
import Support from './components/Support';
import AgeVerification from './components/AgeVerification';
import StoreLocator from './components/StoreLocator';

export type ViewState = 'home' | 'retail' | 'privacy' | 'terms' | 'compliance' | 'support' | 'locator';

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

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      // Delay to allow the home content to mount before attempting to scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 80; // Account for fixed header height
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 200);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
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
      case 'support':
        return <Support />;
      case 'locator':
        return <StoreLocator onNavigate={navigateTo} />;
      default:
        return (
          <>
            <Hero onExplore={() => scrollToSection('catalog')} />
            <section id="product" className="py-24 md:py-48 bg-condor-black scroll-mt-24">
              <ProductIntro />
            </section>
            <section id="catalog" className="py-24 md:py-48 bg-condor-charcoal scroll-mt-24">
              <ProductShowcase onNavigate={navigateTo} />
            </section>
            <section id="approach" className="py-24 md:py-48 bg-condor-offwhite text-condor-black scroll-mt-24">
              <Philosophy />
            </section>
            <section id="origin" className="py-24 md:py-48 bg-condor-black scroll-mt-24">
              <Origin />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-condor-green selection:text-condor-offwhite bg-condor-black">
      <AgeVerification />
      <Navigation 
        scrolled={scrolled} 
        onNavigate={navigateTo} 
        onSectionNavigate={scrollToSection}
        currentView={currentView} 
      />
      
      <main className="transition-opacity duration-500">
        {renderContent()}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
