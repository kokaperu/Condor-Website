
import React, { useState } from 'react';
import { ViewState } from '../App';

interface StoreLocatorProps {
  onNavigate: (view: ViewState) => void;
}

const StoreLocator: React.FC<StoreLocatorProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLocating, setIsLocating] = useState(false);
  const [locationStatus, setLocationStatus] = useState<string | null>(null);

  const handleGeolocation = () => {
    setIsLocating(true);
    setLocationStatus("Accessing precision location...");
    
    if (!navigator.geolocation) {
      setLocationStatus("Geolocation is not supported by your browser.");
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLocating(false);
        setLocationStatus(`Location locked. Searching near coordinates: ${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}`);
      },
      (error) => {
        setIsLocating(false);
        setLocationStatus("Unable to retrieve location. Please search manually.");
      }
    );
  };

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-48 bg-condor-black text-condor-offwhite fade-in">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <h1 className="font-heading text-4xl md:text-7xl font-bold tracking-architectural uppercase mb-8 leading-tight">
            Find<br />Condor
          </h1>
          <p className="text-lg md:text-xl font-light opacity-60 leading-relaxed tracking-wide">
            Our premium stores are currently in development. We are establishing our presence across key urban centers in Peru and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-condor-charcoal border border-condor-offwhite/5 p-8 md:p-12 shadow-2xl space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest opacity-30 block">Location Search</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter City or District"
                    className="w-full bg-transparent border-b border-condor-offwhite/20 py-4 text-sm focus:outline-none focus:border-condor-green transition-all placeholder:opacity-10"
                  />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-condor-green font-bold text-xs uppercase tracking-widest">
                    Search
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-condor-offwhite/5" />
                <span className="relative z-10 bg-condor-charcoal px-4 text-[9px] uppercase tracking-[0.3em] opacity-20 left-1/2 -translate-x-1/2">OR</span>
              </div>

              <button 
                onClick={handleGeolocation}
                disabled={isLocating}
                className="w-full border border-condor-offwhite/10 py-5 flex items-center justify-center space-x-4 hover:border-condor-green transition-all duration-500 group"
              >
                <div className={`w-1.5 h-1.5 rounded-full ${isLocating ? 'bg-condor-green animate-ping' : 'bg-condor-offwhite/20 group-hover:bg-condor-green'}`} />
                <span className="text-[10px] uppercase tracking-[0.4em] font-medium">Use My Precision Location</span>
              </button>

              {locationStatus && (
                <p className="text-[10px] uppercase tracking-widest opacity-40 text-center animate-pulse">
                  {locationStatus}
                </p>
              )}
            </div>
          </div>

          {/* Map Placeholder Column */}
          <div className="lg:col-span-7 space-y-12">
            <div className="aspect-square md:aspect-[4/3] bg-condor-charcoal border border-condor-offwhite/5 relative overflow-hidden group">
              {/* Abstract Map Visual - High Contrast B&W Peru Terrain */}
              <div 
                className="absolute inset-0 grayscale contrast-[1.5] brightness-50 opacity-20 group-hover:opacity-30 transition-opacity duration-1000"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-6">
                <div className="w-16 h-16 border border-condor-green/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-condor-green rounded-full animate-pulse" />
                </div>
                <h3 className="text-xl md:text-3xl font-heading uppercase tracking-architectural font-bold">
                  Network Status:<br />
                  <span className="text-condor-green">Coming Soon</span>
                </h3>
                <p className="text-xs md:text-sm max-w-sm opacity-40 font-light leading-loose tracking-wide">
                  Our official store map is being populated as we finalize local partnerships in the Andean and Coastal regions.
                </p>
                
                <div className="pt-8">
                   <button 
                    onClick={() => onNavigate('retail')}
                    className="text-[10px] uppercase tracking-[0.4em] border-b border-condor-green/40 pb-2 hover:border-condor-green transition-colors"
                   >
                     Become a Partner
                   </button>
                </div>
              </div>

              {/* Grid Overlay */}
              <div className="absolute inset-0 pointer-events-none" 
                   style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
