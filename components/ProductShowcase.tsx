
import React, { useState, useEffect } from 'react';
import { ViewState } from '../App';

interface Product {
  id: string;
  name: string;
  edition: string;
  strength: string;
  description: string;
  color: string;
  intensity: string;
  imageUrl: string;
  imageFilter?: string;
}

const products: Product[] = [
  {
    id: 'menta-6',
    name: 'Menta Andina',
    edition: 'Verde',
    strength: '6mg',
    intensity: 'Level 02',
    description: 'The flagship standard. A glacial mint profile harvested from high-altitude precision.',
    color: 'text-condor-green',
    imageUrl: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&q=80',
    imageFilter: 'brightness-110 contrast-125 grayscale saturate-50',
  },
  {
    id: 'berry-6',
    name: 'Frambuesa Alpina',
    edition: 'Roja',
    strength: '6mg',
    intensity: 'Level 02',
    description: 'Alpine berry harvest. Deep red fruit notes met with a sharp, cooling mountain finish.',
    color: 'text-condor-red',
    imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80',
    imageFilter: 'brightness-0.8 contrast-1.5 sepia(0.1)',
  },
  {
    id: 'citrus-6',
    name: 'Cítrico Solar',
    edition: 'Oro',
    strength: '6mg',
    intensity: 'Level 02',
    description: 'Sun-drenched coastal citrus. A bright, sharp zest profile inspired by the Peruvian coast.',
    color: 'text-yellow-600',
    imageUrl: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&q=80',
    imageFilter: 'saturate(1.5) contrast-1.2 brightness-1.1',
  },
  {
    id: 'cafe-6',
    name: 'Café Altura',
    edition: 'Negra',
    strength: '6mg',
    intensity: 'Level 03',
    description: 'Dark roasted precision. Deep, earthy coffee notes from the Chanchamayo valley.',
    color: 'text-orange-900',
    imageUrl: 'https://images.unsplash.com/photo-1507133750040-4c8b5f928190?auto=format&fit=crop&q=80',
    imageFilter: 'brightness-0.6 contrast-1.8 grayscale',
  },
];

interface ProductShowcaseProps {
  onNavigate?: (view: ViewState) => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentProduct = products[currentIndex];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">
        
        {/* Product Visual Container */}
        <div className="relative aspect-square flex items-center justify-center overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] md:shadow-[0_80px_120px_-30px_rgba(0,0,0,1)] rounded-sm bg-condor-black border border-condor-offwhite/5">
          <div 
            className={`absolute inset-0 grayscale opacity-10 contrast-200 transition-all duration-1000 ${isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-10'}`}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1449156001502-86927d730a91?auto=format&fit=crop&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_rgba(0,0,0,1)_95%)]" />

          <div className={`relative z-10 w-full h-full p-12 md:p-24 transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
            <img 
              src={currentProduct.imageUrl} 
              alt={currentProduct.name} 
              className={`w-full h-full object-cover rounded-sm filter drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)] ${currentProduct.imageFilter}`}
              loading="eager"
            />
          </div>
          
          <div className="absolute inset-x-6 md:inset-x-8 bottom-6 md:bottom-10 z-20 flex justify-between items-center pointer-events-none">
             <button 
                onClick={handlePrev}
                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-condor-offwhite/10 rounded-full hover:bg-condor-offwhite hover:text-condor-black transition-all duration-500 bg-condor-black/50 backdrop-blur-sm"
                aria-label="Previous product"
             >
               <span className="text-sm md:text-lg">←</span>
             </button>
             <div className="flex space-x-2 md:space-x-3">
               {products.map((_, i) => (
                 <div 
                   key={i} 
                   className={`h-[2px] transition-all duration-500 ${i === currentIndex ? 'w-6 md:w-8 bg-condor-offwhite' : 'w-1.5 md:w-2 bg-condor-offwhite/20'}`}
                 />
               ))}
             </div>
             <button 
                onClick={handleNext}
                className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-condor-offwhite/10 rounded-full hover:bg-condor-offwhite hover:text-condor-black transition-all duration-500 bg-condor-black/50 backdrop-blur-sm"
                aria-label="Next product"
             >
               <span className="text-sm md:text-lg">→</span>
             </button>
          </div>
        </div>

        {/* Product Copy Section */}
        <div className="space-y-8 md:space-y-12">
          <div className={`transition-all duration-700 ${isAnimating ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'}`}>
            <div className="flex items-center space-x-4 mb-4 md:mb-8">
              <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] md:tracking-[0.6em] ${currentProduct.color}`}>
                {currentProduct.edition} Edition
              </span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-8xl font-bold tracking-tight uppercase mb-6 md:mb-10 leading-[1] md:leading-[0.9]">
              {currentProduct.name.split(' ')[0]}<br />
              <span className={currentProduct.color}>{currentProduct.name.split(' ')[1]}</span>
            </h2>

            <div className="max-w-md space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl text-condor-offwhite opacity-70 leading-relaxed font-light italic">
                "{currentProduct.description.split('.')[0]}."
              </p>
              <p className="text-sm md:text-base text-condor-offwhite/40 leading-relaxed font-light">
                {currentProduct.description.split('.').slice(1).join('.')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-6 md:gap-y-10 py-8 md:py-12 border-y border-condor-offwhite/10">
            <div className="space-y-1 md:space-y-2">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-30 font-bold">Strength</p>
              <p className="text-xs md:text-sm tracking-widest font-medium uppercase">{currentProduct.strength}</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-30 font-bold">Intensity</p>
              <p className={`text-xs md:text-sm tracking-widest font-medium uppercase ${currentProduct.color}`}>{currentProduct.intensity}</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-30 font-bold">Format</p>
              <p className="text-xs md:text-sm tracking-widest font-medium uppercase">Slim White</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-30 font-bold">Heritage</p>
              <p className="text-xs md:text-sm tracking-widest font-medium uppercase">Hecho en Perú</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
             <button 
               onClick={() => onNavigate && onNavigate('locator')}
               className="group relative overflow-hidden bg-condor-offwhite text-condor-black px-10 md:px-14 py-5 md:py-6 transition-all duration-500"
             >
               <span className="relative z-10 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em]">Locate Stores</span>
               <div className={`absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ${currentProduct.color.replace('text-', 'bg-')}`} />
             </button>
             <div className="hidden sm:block w-px h-16 bg-condor-offwhite/10 self-center" />
             <div className="flex items-center space-x-4">
                <span className="text-[10px] uppercase tracking-widest opacity-30">Selection</span>
                <span className="text-base md:text-lg font-light">0{currentIndex + 1} / 0{products.length}</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductShowcase;
