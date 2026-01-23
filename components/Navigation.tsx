
import React from 'react';
import { ViewState } from '../App';

interface NavigationProps {
  scrolled: boolean;
  onNavigate: (view: ViewState) => void;
  onSectionNavigate: (id: string) => void;
  currentView: ViewState;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled, onNavigate, onSectionNavigate, currentView }) => {
  const isHome = currentView === 'home';
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      scrolled || !isHome ? 'bg-condor-black/95 backdrop-blur-md py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-6 md:space-x-12">
          <button 
            onClick={() => onNavigate('home')} 
            className="font-heading font-bold text-xl md:text-2xl tracking-architectural indent-[0.25em] uppercase hover:opacity-70 transition-opacity"
          >
            Condor
          </button>
          <div className="hidden md:flex space-x-8 text-[11px] uppercase tracking-editorial opacity-60">
            {isHome ? (
              <>
                <button 
                  onClick={() => onSectionNavigate('product')} 
                  className="hover:opacity-100 transition-opacity uppercase"
                >
                  Product
                </button>
                <button 
                  onClick={() => onSectionNavigate('catalog')} 
                  className="hover:opacity-100 transition-opacity uppercase"
                >
                  Catalog
                </button>
                <button 
                  onClick={() => onSectionNavigate('approach')} 
                  className="hover:opacity-100 transition-opacity uppercase"
                >
                  Approach
                </button>
                <button 
                  onClick={() => onSectionNavigate('origin')} 
                  className="hover:opacity-100 transition-opacity uppercase"
                >
                  Origin
                </button>
              </>
            ) : (
              <button onClick={() => onNavigate('home')} className="hover:opacity-100 transition-opacity uppercase">
                Back to Home
              </button>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="hidden sm:block text-[10px] md:text-[11px] uppercase tracking-editorial opacity-40">
            Hecho en Perú
          </div>
          <button 
            onClick={() => onNavigate('retail')}
            className={`text-[10px] uppercase tracking-[0.3em] px-5 py-2.5 border transition-all duration-500 font-medium ${
              currentView === 'retail' 
              ? 'bg-condor-offwhite text-condor-black border-condor-offwhite' 
              : 'border-condor-offwhite/20 hover:border-condor-offwhite text-condor-offwhite'
            }`}
          >
            Partnerships
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
