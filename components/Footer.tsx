
import React from 'react';
import { ViewState } from '../App';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-condor-black pt-24 pb-12 px-6 md:px-12 border-t border-condor-offwhite/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <button 
              onClick={() => onNavigate('home')}
              className="font-heading text-3xl font-bold tracking-architectural uppercase mb-8 hover:opacity-70 transition-opacity text-left"
            >
              CONDOR
            </button>
            <p className="text-[11px] uppercase tracking-editorial opacity-40 max-w-xs leading-loose">
              Premium nicotine pouches under the CONDOR brand.
              Produced with precision in Peru for a global audience of experienced users.
            </p>
          </div>
          
          <div>
            <h3 className="text-[10px] uppercase tracking-widest opacity-30 mb-6">Contact</h3>
            <ul className="text-xs space-y-4 tracking-widest opacity-60">
              <li><button onClick={() => onNavigate('retail')} className="hover:text-condor-green transition-colors">Retail Inquiries</button></li>
              <li><button onClick={() => onNavigate('retail')} className="hover:text-condor-green transition-colors">Distribution</button></li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-widest opacity-30 mb-6">Legal</h3>
            <ul className="text-xs space-y-4 tracking-widest opacity-60">
              <li><button onClick={() => onNavigate('terms')} className="hover:text-condor-green transition-colors">Terms of Service</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-condor-green transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('compliance')} className="hover:text-condor-green transition-colors">Compliance</button></li>
            </ul>
          </div>
        </div>

        {/* Regulatory Notice & Corporate Info */}
        <div className="border-t border-condor-offwhite/5 pt-12 text-center md:text-left">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium leading-relaxed opacity-40 mb-8">
              WARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL. FOR USE BY ADULTS ONLY (21+). NOT FOR SALE TO MINORS.
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <p className="text-[9px] uppercase tracking-widest opacity-20">
                © {new Date().getFullYear()} PERU KOKA LEAF S.A.C. All Rights Reserved.
              </p>
              <p className="text-[9px] uppercase tracking-widest opacity-30 font-bold text-condor-green">
                RUC: 20614267489
              </p>
              <p className="text-[9px] uppercase tracking-widest opacity-20">
                Manufactured in Cusco, Peru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
