
import React from 'react';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      scrolled ? 'bg-condor-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <a href="#" className="font-heading font-bold text-2xl tracking-architectural uppercase">
            Condor
          </a>
          <div className="hidden md:flex space-x-8 text-[11px] uppercase tracking-editorial opacity-60">
            <a href="#products" className="hover:opacity-100 transition-opacity">Product</a>
            <a href="#approach" className="hover:opacity-100 transition-opacity">Approach</a>
            <a href="#origin" className="hover:opacity-100 transition-opacity">Origin</a>
          </div>
        </div>
        
        <div className="text-[11px] uppercase tracking-editorial opacity-60">
          <span className="hidden sm:inline">Hecho en Perú</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
