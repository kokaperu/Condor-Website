
import React from 'react';

const Origin: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-24">
      <div className="flex-1 space-y-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-architectural uppercase">
          Rooted in Peru.
          <br />
          Designed for the city.
        </h2>
        <p className="text-condor-offwhite/50 leading-relaxed max-w-md font-light">
          While our quality standards are European, our soul belongs to the Andes. We bridge the gap between ancient landscape and modern urban living.
        </p>
        <div className="pt-8">
           <div className="inline-flex items-center space-x-4">
              <span className="w-12 h-px bg-condor-green"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Hecho en Cusco</span>
           </div>
        </div>
      </div>
      
      <div className="flex-1 w-full aspect-video md:aspect-square overflow-hidden bg-condor-black">
        <img 
          src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80" 
          alt="Abstract Andes Texture" 
          className="w-full h-full object-cover grayscale opacity-30 hover:opacity-50 transition-opacity duration-1000"
        />
      </div>
    </div>
  );
};

export default Origin;
