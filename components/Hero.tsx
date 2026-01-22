
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-condor-black">
      {/* High-contrast Andes Mountain Range - Professional B&W */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none grayscale brightness-75 contrast-125"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      />
      
      {/* Gradient Overlay for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-condor-black/90 via-transparent to-condor-black" />
      
      <div className="relative z-10 text-center px-6 fade-in">
        <h1 className="font-heading text-6xl md:text-9xl font-bold tracking-[0.35em] uppercase mb-6 drop-shadow-2xl">
          Condor
        </h1>
        <p className="text-lg md:text-xl tracking-editorial font-light max-w-2xl mx-auto opacity-80 leading-relaxed">
          Premium nicotine pouches.
          <br />
          Made in Peru.
        </p>
        
        <div className="mt-20 flex flex-col items-center space-y-4">
          <div className="w-px h-24 bg-condor-green shadow-[0_0_10px_rgba(74,93,78,0.5)]" />
          <a 
            href="#products" 
            className="text-[10px] uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-all duration-700 hover:tracking-[0.6em]"
          >
            Explore the line
          </a>
        </div>
      </div>

      {/* Subtle bottom shadow transition */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-condor-black to-transparent" />
    </div>
  );
};

export default Hero;
