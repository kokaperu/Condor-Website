
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-48 bg-condor-black text-condor-offwhite fade-in">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-architectural uppercase mb-4 leading-tight">
            Privacy<br />Policy
          </h1>
          <p className="text-[10px] uppercase tracking-[0.4em] opacity-30">Last updated: January 2026</p>
        </div>

        <div className="space-y-12 text-sm md:text-base font-light leading-loose opacity-70 tracking-wide prose prose-invert max-w-none">
          <p>
            CONDOR (“we,” “our,” or “us”) is operated by <strong>PERU KOKA LEAF S.A.C.</strong>, RUC 20614267489, with registered address at Calle Alfonso Ugarte MZ F LT 6, Wanchaq, Cusco, Peru.
          </p>
          
          <p>
            We are committed to protecting your privacy and handling your personal data in a transparent and responsible manner. This Privacy Policy explains how we collect, use, store, and protect your information when you visit <a href="https://condor.pe" className="text-condor-green hover:underline">https://condor.pe</a> (the “Website”).
          </p>

          <section className="space-y-6">
            <h2 className="text-xl uppercase tracking-widest text-condor-offwhite opacity-100">1. Information We Collect</h2>
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest opacity-40 font-bold">a. Information You Provide Voluntarily</h3>
              <ul className="list-disc pl-5 space-y-2 opacity-80">
                <li>Contact form submissions (name, email address, message content)</li>
                <li>Customer support communications</li>
                <li>Phone numbers provided for contact purposes, including SMS or WhatsApp</li>
                <li>Age confirmation (18+ checkbox)</li>
                <li>Email newsletter or waitlist collection may be enabled in the future. If so, this policy will apply to that data as well.</li>
              </ul>

              <h3 className="text-xs uppercase tracking-widest opacity-40 font-bold">b. Information Collected Automatically</h3>
              <ul className="list-disc pl-5 space-y-2 opacity-80">
                <li>IP address</li>
                <li>Browser type and device information</li>
                <li>Pages visited and time spent on the Website</li>
                <li>Referral source</li>
              </ul>
              <p className="opacity-80 mt-2">This data is collected through cookies and similar tracking technologies.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl uppercase tracking-widest text-condor-offwhite opacity-100">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2 opacity-80">
              <li>Respond to inquiries and customer support requests</li>
              <li>Communicate with you regarding our products or services</li>
              <li>Operate, maintain, and improve the Website</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Enforce age-restriction requirements (18+)</li>
            </ul>
            <p className="opacity-80">We do not sell your personal data.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl uppercase tracking-widest text-condor-offwhite opacity-100">3. Cookies and Analytics</h2>
            <p>We use cookies and similar technologies to enhance your experience and analyze Website performance.</p>
            <p>We may use third-party services such as:</p>
            <ul className="list-disc pl-5 space-y-2 opacity-80">
              <li>Google Ads</li>
              <li>Analytics and marketing tools commonly used to understand user behavior and improve our services</li>
            </ul>
            <p>You can control or disable cookies through your browser settings. Note that disabling cookies may affect Website functionality.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl uppercase tracking-widest text-condor-offwhite opacity-100">4. Age Restriction</h2>
            <p>Our Website and products are intended only for individuals aged 18 or older.</p>
            <p>By using this Website, you confirm that you meet the legal age requirement applicable in your jurisdiction. We do not knowingly collect personal data from minors.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl uppercase tracking-widest text-condor-offwhite opacity-100">5. Data Sharing and Third Parties</h2>
            <p>We may share personal data only with:</p>
            <ul className="list-disc pl-5 space-y-2 opacity-80">
              <li>Service providers that help us operate the Website or communicate with users</li>
              <li>Advertising and analytics partners (in aggregated or anonymized form where possible)</li>
              <li>Authorities, when required by law or to protect our legal rights</li>
            </ul>
            <p>All third parties are required to handle data responsibly and in accordance with applicable privacy laws.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl uppercase tracking-widest text-condor-offwhite opacity-100">6. Data Security</h2>
            <p>We implement reasonable administrative, technical, and organizational safeguards to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl uppercase tracking-widest text-condor-offwhite opacity-100">7. Data Retention</h2>
            <p>We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl uppercase tracking-widest text-condor-offwhite opacity-100">8. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 opacity-80">
              <li>Access your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p>To exercise these rights, contact us at the email address below.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl uppercase tracking-widest text-condor-offwhite opacity-100">9. International Visitors</h2>
            <p>If you access the Website from outside Peru, you acknowledge that your information may be processed and stored in jurisdictions with different data protection laws.</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl uppercase tracking-widest text-condor-offwhite opacity-100">10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </section>

          <section className="space-y-6 border-t border-condor-offwhite/10 pt-12">
            <h2 className="text-xl uppercase tracking-widest text-condor-offwhite opacity-100">11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or how your data is handled, please contact:</p>
            <div className="space-y-2 opacity-80">
              <p><strong>Email:</strong> KOKAEQUIPO@GMAIL.COM</p>
              <p><strong>Company:</strong> PERU KOKA LEAF S.A.C.</p>
              <p><strong>Address:</strong> Calle Alfonso Ugarte MZ F LT 6, Wanchaq, Cusco, Peru</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
