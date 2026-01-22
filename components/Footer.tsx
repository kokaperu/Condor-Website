
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-condor-black pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h2 className="font-heading text-3xl font-bold tracking-architectural uppercase mb-8">
              Condor
            </h2>
            <p className="text-[11px] uppercase tracking-editorial opacity-40 max-w-xs leading-loose">
              Premium nicotine pouches.
              Produced with precision in Peru for a global audience of experienced users.
            </p>
          </div>
          
          <div>
            <h3 className="text-[10px] uppercase tracking-widest opacity-30 mb-6">Contact</h3>
            <ul className="text-xs space-y-4 tracking-widest opacity-60">
              <li>Retail Inquiries</li>
              <li>Distribution</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] uppercase tracking-widest opacity-30 mb-6">Legal</h3>
            <ul className="text-xs space-y-4 tracking-widest opacity-60">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Compliance</li>
            </ul>
          </div>
        </div>

        {/* Regulatory Notice */}
        <div className="border-t border-condor-offwhite/5 pt-12 text-center md:text-left">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium leading-relaxed opacity-40 mb-8">
              WARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL. FOR USE BY ADULTS ONLY (21+). NOT FOR SALE TO MINORS.
            </p>
            <p className="text-[9px] uppercase tracking-widest opacity-20">
              © {new Date().getFullYear()} Condor Brand. Manufactured in Peru. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
