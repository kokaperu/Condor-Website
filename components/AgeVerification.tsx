import React, { useState, useEffect } from 'react';

const AgeVerification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRestricted, setIsRestricted] = useState(false);

  useEffect(() => {
    try {
      const isVerified = localStorage.getItem('condor-age-verified');
      if (!isVerified) {
        setIsVisible(true);
        document.body.style.overflow = 'hidden';
      }
    } catch (e) {
      // In private mode, localStorage might be blocked. Assume verification needed.
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleConfirm = () => {
    try {
      localStorage.setItem('condor-age-verified', 'true');
    } catch (e) {
      console.warn('Storage unavailable: age verification will not persist.');
    }
    setIsVisible(false);
    document.body.style.overflow = 'unset';
  };

  const handleReject = () => {
    setIsRestricted(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-condor-black/95 backdrop-blur-xl" />
      
      {/* Modal Content */}
      <div className="relative max-w-md w-full bg-condor-charcoal border border-condor-offwhite/10 p-10 md:p-16 text-center shadow-2xl fade-in">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold tracking-architectural uppercase mb-4 text-condor-offwhite">
            Condor
          </h2>
          <div className="w-12 h-px bg-condor-green mx-auto mb-8 opacity-50" />
          
          {isRestricted ? (
            <div className="space-y-6 fade-in">
              <h3 className="text-sm uppercase tracking-widest text-condor-red font-bold">Access Restricted</h3>
              <p className="text-xs md:text-sm leading-relaxed opacity-60 font-light">
                This website contains content related to nicotine products and is intended exclusively for adults aged 18 and over.
              </p>
              <div className="pt-4">
                <a 
                  href="https://www.google.com" 
                  className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 underline underline-offset-8"
                >
                  Exit Site
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-condor-green">Age Verification</p>
              <p className="text-sm md:text-base leading-relaxed opacity-80 font-light">
                This product contains nicotine. You must be at least 18 years of age to enter this site.
              </p>
              
              <div className="space-y-4 pt-6">
                <button 
                  onClick={handleConfirm}
                  className="w-full bg-condor-offwhite text-condor-black py-5 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-condor-green hover:text-condor-offwhite transition-all duration-500"
                >
                  I am 18 or older
                </button>
                <button 
                  onClick={handleReject}
                  className="w-full border border-condor-offwhite/10 py-5 text-[11px] font-bold uppercase tracking-[0.4em] opacity-40 hover:opacity-100 transition-all duration-500"
                >
                  I am under 18
                </button>
              </div>
              
              <p className="text-[9px] uppercase tracking-widest opacity-20 pt-8 leading-loose">
                By entering this site, you agree to our terms of service and privacy policy regarding age-restricted content.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;