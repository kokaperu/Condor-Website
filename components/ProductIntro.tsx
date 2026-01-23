
import React from 'react';

const ProductIntro: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Visionary Copy */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <h2 className="text-[11px] uppercase tracking-[0.5em] text-condor-green font-bold">
              The Format
            </h2>
            <h3 className="font-heading text-4xl md:text-7xl font-bold tracking-tight uppercase leading-[0.95]">
              European Style.<br />
              <span className="opacity-30">Andean Precision.</span>
            </h3>
          </div>

          <div className="max-w-2xl space-y-8 text-lg md:text-xl font-light leading-relaxed opacity-70 italic">
            <p>
              Condor represents the next evolution of nicotine. A tobacco-free, smoke-free ritual designed for the modern adult who demands both discretion and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-12 border-t border-condor-offwhite/10">
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-condor-offwhite/40">Technology</h4>
              <p className="text-sm leading-loose opacity-60">
                Smooth nicotine delivery through a proprietary controlled-release matrix. No tobacco, no combustion, no compromise.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-condor-offwhite/40">Architecture</h4>
              <p className="text-sm leading-loose opacity-60">
                Slim-white format optimized for comfort and invisibility. Engineered to European quality standards for a superior mouthfeel.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Component */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-condor-charcoal overflow-hidden border border-condor-offwhite/5 relative group">
            <img 
              src="/images/verde-condor-dark.png" 
              alt="Condor Verde Product" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 scale-105 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-condor-black via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
               <div className="p-6 bg-condor-black/80 backdrop-blur-md border border-condor-offwhite/10 space-y-3">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-condor-green font-bold">Product Specs</p>
                  <ul className="text-[11px] uppercase tracking-widest space-y-2 opacity-60">
                    <li className="flex justify-between"><span>Format</span><span>Slim White</span></li>
                    <li className="flex justify-between"><span>Tobacco</span><span>0% / Free</span></li>
                    <li className="flex justify-between"><span>Origin</span><span>Cusco, PE</span></li>
                  </ul>
               </div>
            </div>
          </div>
          
          {/* Subtle Floating Element */}
          <div className="absolute -top-8 -right-8 w-32 h-32 border border-condor-green/20 hidden md:block" />
        </div>

      </div>
      
      {/* Bottom Summary Banner */}
      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-condor-offwhite/5">
        {[
          { label: "Design", value: "Slim Format" },
          { label: "Quality", value: "European Std" },
          { label: "Heritage", value: "Hecho en Perú" },
          { label: "Purity", value: "Tobacco Free" }
        ].map((stat, i) => (
          <div key={i} className="text-center md:text-left space-y-2">
            <p className="text-[9px] uppercase tracking-[0.3em] opacity-30 font-bold">{stat.label}</p>
            <p className="text-xs md:text-sm tracking-widest font-medium uppercase">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductIntro;
