import React, { useState, useEffect } from 'react';
import { ViewState } from '../App';

interface NavigationProps {
  scrolled: boolean;
  onNavigate: (view: ViewState) => void;
  onSectionNavigate: (id: string) => void;
  currentView: ViewState;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled, onNavigate, onSectionNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = currentView === 'home';

  // Prevent body scroll when menu is active to avoid background movement
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleAction = (action: () => void) => {
    setIsMenuOpen(false);
    action();
  };

  const navLinks = [
    { label: 'Product', id: 'product' },
    { label: 'Catalog', id: 'catalog' },
    { label: 'Philosophy', id: 'approach' },
    { label: 'Heritage', id: 'origin' },
  ];

  return (
    <>
      {/* Primary Header Bar */}
      <nav className={`fixed top-0 left-0 w-full z-[1001] transition-all duration-500 ${
        scrolled || !isHome || isMenuOpen ? 'bg-condor-black/95 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Identity */}
          <div className="flex items-center space-x-6 md:space-x-12">
            <button 
              onClick={() => handleAction(() => onNavigate('home'))} 
              className="font-heading font-bold text-xl md:text-2xl tracking-architectural indent-[0.25em] uppercase hover:opacity-70 transition-opacity"
            >
              Condor
            </button>
            
            {/* Desktop Navigation (Hidden on Mobile) */}
            <div className="hidden md:flex space-x-8 text-[11px] uppercase tracking-editorial opacity-60">
              {navLinks.map(link => (
                <button 
                  key={link.id}
                  onClick={() => onSectionNavigate(link.id)} 
                  className="hover:opacity-100 transition-opacity uppercase"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => onNavigate('locator')} 
                className="hover:opacity-100 transition-opacity uppercase font-bold text-condor-green"
              >
                Stores
              </button>
            </div>
          </div>
          
          {/* Action Area */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="hidden lg:block text-[10px] md:text-[11px] uppercase tracking-editorial opacity-40">
              Hecho en Perú
            </div>
            
            <button 
              onClick={() => onNavigate('retail')}
              className={`hidden md:block text-[10px] uppercase tracking-[0.3em] px-5 py-2.5 border transition-all duration-500 font-medium ${
                currentView === 'retail' 
                ? 'bg-condor-offwhite text-condor-black border-condor-offwhite' 
                : 'border-condor-offwhite/20 hover:border-condor-offwhite text-condor-offwhite'
              }`}
            >
              Partnerships
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              onClick={toggleMenu}
              className="md:hidden w-12 h-12 flex flex-col items-center justify-center space-y-1.5 focus:outline-none relative z-[1002]"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className={`w-6 h-px bg-condor-offwhite transition-transform duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-px bg-condor-offwhite transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-6 h-px bg-condor-offwhite transition-transform duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay - Fixed Inset with max Z-Index */}
      <div className={`fixed inset-0 bg-condor-black z-[1000] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full w-full flex flex-col pt-32 pb-12 px-10 overflow-y-auto">
          
          {/* Mobile Section Links */}
          <div className="flex flex-col space-y-6 mb-12">
            <p className="text-[10px] uppercase tracking-[0.5em] text-condor-green font-bold mb-2">Collection</p>
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleAction(() => onSectionNavigate(link.id))}
                className="text-2xl font-heading font-bold uppercase tracking-architectural text-left py-2 border-b border-condor-offwhite/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Business & Support Links */}
          <div className="flex flex-col space-y-8 mt-4">
            <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 font-bold">Inquiries</p>
            <button 
              onClick={() => handleAction(() => onNavigate('locator'))}
              className="text-lg uppercase tracking-[0.3em] text-condor-green font-bold text-left"
            >
              Store Locator
            </button>
            <button 
              onClick={() => handleAction(() => onNavigate('retail'))}
              className="text-lg uppercase tracking-[0.3em] text-left opacity-60 text-condor-offwhite"
            >
              Partnerships
            </button>
            <button 
              onClick={() => handleAction(() => onNavigate('support'))}
              className="text-lg uppercase tracking-[0.3em] text-left opacity-60 text-condor-offwhite"
            >
              Support
            </button>
          </div>

          {/* Drawer Footer Details */}
          <div className="mt-auto pt-12 border-t border-condor-offwhite/5 flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-[9px] uppercase tracking-widest opacity-20 font-bold">Condor Premium Nicotine</p>
              <p className="text-[10px] uppercase tracking-widest opacity-40 font-medium">Hecho en Cusco, Perú</p>
            </div>
            <div className="w-1.5 h-1.5 bg-condor-green rotate-45 mb-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;