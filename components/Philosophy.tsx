
import React from 'react';

const Philosophy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="font-heading text-sm uppercase tracking-[0.4em] text-condor-green mb-16">
        Independent & Intentional
      </h2>
      
      <div className="space-y-12">
        <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight">
          Condor is an independent brand built for the city, engineered in the mountains. 
        </p>
        
        <div className="w-px h-24 bg-condor-green/30 mx-auto" />
        
        <p className="text-lg text-condor-black/60 max-w-2xl mx-auto leading-relaxed">
          We exist as a calm alternative to mass-market brands. Our focus is on European-style quality met with an urban Latin aesthetic. No hype. Just a smooth, controlled experience for the experienced user.
        </p>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-24 border-t border-condor-black/5">
        <div>
          <h3 className="text-[11px] uppercase tracking-widest font-bold mb-4">Precision</h3>
          <p className="text-sm text-condor-black/50 leading-relaxed">Controlled release technology for a sustained experience.</p>
        </div>
        <div>
          <h3 className="text-[11px] uppercase tracking-widest font-bold mb-4">Origin</h3>
          <p className="text-sm text-condor-black/50 leading-relaxed">Sourced and manufactured in Cusco, Peru with strict oversight.</p>
        </div>
        <div>
          <h3 className="text-[11px] uppercase tracking-widest font-bold mb-4">Discretion</h3>
          <p className="text-sm text-condor-black/50 leading-relaxed">Minimalist slim design for comfort and architectural form.</p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
