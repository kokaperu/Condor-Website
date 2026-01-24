
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
  accent: string;
}

const products: Product[] = [
  {
    id: 'menta-6',
    name: 'Menta Andina',
    edition: 'Verde',
    strength: '6mg',
    intensity: 'Level 02',
    description: 'The flagship standard. A glacial mint profile harvested from high-altitude precision in the Andes.',
    color: 'text-condor-green',
    accent: 'bg-condor-green',
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
    accent: 'bg-condor-red',
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
    accent: 'bg-yellow-600',
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
    accent: 'bg-orange-900',
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
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const nameParts = currentProduct.name.split(' ');

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Product Visual Container */}
        <div className="relative aspect-square lg:aspect-auto lg:h-[60vh] flex items-center justify-center overflow-hidden bg-condor-black border border-condor-offwhite/5 rounded-sm shadow-2xl">
          <div 
            className={`absolute inset-0 grayscale opacity-10 contrast-200 transition-all duration-1000 ${isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-10'}`}
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1449156001502-86927d730a91?auto=format&fit=crop&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-condor-black via-transparent to-transparent" />

          <div className={`relative z-10 w-full h-full p-12 md:p-20 transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
            <img 
              src={currentProduct.imageUrl} 
              alt={currentProduct.name} 
              className={`w-full h-full object-cover filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${currentProduct.imageFilter}`}
              loading="eager"
            />
          </div>

          {/* Carousel Controls (Overlayed on Image) */}
          <div className="absolute inset-x-6 bottom-6 flex justify-between items-center z-20">
             <button 
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center border border-condor-offwhite/10 rounded-full hover:bg-condor-offwhite hover:text-condor-black transition-all bg-condor-black/40 backdrop-blur-sm"
             >
               ←
             </button>
             <div className="flex space-x-2">
               {products.map((_, i) => (
                 <div 
                   key={i} 
                   className={`h-[2px] transition-all duration-500 ${i === currentIndex ? 'w-8 bg-condor-offwhite' : 'w-2 bg-condor-offwhite/20'}`}
                 />
               ))}
             </div>
             <button 
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center border border-condor-offwhite/10 rounded-full hover:bg-condor-offwhite hover:text-condor-black transition-all bg-condor-black/40 backdrop-blur-sm"
             >
               →
             </button>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-8 lg:space-y-10">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-2' : 'opacity-100 translate-x-0'}`}>
            <div className="mb-4">
              <span className={`text-[10px] font-bold uppercase tracking-[0.5em] ${currentProduct.color}`}>
                {currentProduct.edition} Edition
              </span>
            </div>
            
            <h2 className="font-heading text-4xl lg:text-6xl font-bold tracking-tight uppercase leading-[0.9] mb-6">
              {nameParts[0]}<br />
              <span className={currentProduct.color}>{nameParts[1] || ''}</span>
            </h2>

            <p className="text-base lg:text-lg text-condor-offwhite/60 leading-relaxed font-light italic max-w-sm">
              "{currentProduct.description}"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-6 py-8 border-y border-condor-offwhite/10">
            <div className="space-y-1">
              <p className="text-[8px] uppercase tracking-[0.3em] opacity-30 font-bold">Strength</p>
              <p className="text-xs tracking-widest font-medium uppercase">{currentProduct.strength}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[8px] uppercase tracking-[0.3em] opacity-30 font-bold">Intensity</p>
              <p className={`text-xs tracking-widest font-medium uppercase ${currentProduct.color}`}>{currentProduct.intensity}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[8px] uppercase tracking-[0.3em] opacity-30 font-bold">Format</p>
              <p className="text-xs tracking-widest font-medium uppercase">Slim White</p>
            </div>
            <div className="space-y-1">
              <p className="text-[8px] uppercase tracking-[0.3em] opacity-30 font-bold">Heritage</p>
              <p className="text-xs tracking-widest font-medium uppercase">Hecho en Perú</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
             <button 
               onClick={() => onNavigate && onNavigate('locator')}
               className="group relative overflow-hidden bg-condor-offwhite text-condor-black px-12 py-5 transition-all duration-500"
             >
               <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em]">Locate Stockists</span>
               <div className={`absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ${currentProduct.accent}`} />
             </button>
             <div className="flex flex-col items-start opacity-20">
                <span className="text-[9px] uppercase tracking-widest">Selected Flavor</span>
                <span className="text-xs font-light">0{currentIndex + 1} / 04</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductShowcase;
