import React, { useState } from 'react';

const Support: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwJzBIZYEBpAm0PPDNYd9N-E1CDsnfISL32BSQQITeKzmhrOJACj-k6Mrqkt1o9rlBpSA/exec';

    try {
      // Using 'no-cors' and 'text/plain' makes this a "Simple Request"
      // redirect: 'follow' is essential because Apps Script responses are always 302 redirects
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        redirect: 'follow',
        headers: { 
          'Content-Type': 'text/plain' 
        },
        body: JSON.stringify({
          ...formState,
          formType: 'support'
        })
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-48 bg-condor-black text-condor-offwhite fade-in">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <h1 className="font-heading text-4xl md:text-7xl font-bold tracking-architectural uppercase mb-8 leading-tight">
            Support &<br />Inquiry
          </h1>
          <p className="text-lg md:text-xl font-light opacity-60 leading-relaxed tracking-wide">
            How can we assist you? Our team is available to answer questions regarding our products, brand philosophy, or current availability in your region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Form Section */}
          <div className="bg-condor-charcoal p-8 md:p-16 border border-condor-offwhite/5 shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-24 text-center space-y-6 fade-in">
                <div className="w-12 h-12 bg-condor-green mx-auto rounded-full flex items-center justify-center">
                  <span className="text-condor-black">✓</span>
                </div>
                <h3 className="text-xl font-heading uppercase tracking-widest">Message Sent</h3>
                <p className="opacity-40 text-sm tracking-wide">We will respond to your inquiry via email shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 underline decoration-condor-green underline-offset-8"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-widest opacity-30 mb-2 group-focus-within:opacity-100 transition-opacity">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-condor-offwhite/20 py-3 text-sm focus:outline-none focus:border-condor-green transition-all placeholder:opacity-10"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="relative group">
                    <label className="block text-[10px] uppercase tracking-widest opacity-30 mb-2 group-focus-within:opacity-100 transition-opacity">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-condor-offwhite/20 py-3 text-sm focus:outline-none focus:border-condor-green transition-all placeholder:opacity-10"
                      placeholder="email@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-widest opacity-30 mb-2 group-focus-within:opacity-100 transition-opacity">Subject</label>
                  <select 
                    className="w-full bg-transparent border-b border-condor-offwhite/20 py-3 text-sm focus:outline-none focus:border-condor-green transition-all cursor-pointer"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  >
                    <option className="bg-condor-charcoal" value="General Inquiry">General Inquiry</option>
                    <option className="bg-condor-charcoal" value="Product Support">Product Support</option>
                    <option className="bg-condor-charcoal" value="Regulatory Question">Regulatory Question</option>
                    <option className="bg-condor-charcoal" value="Other">Other</option>
                  </select>
                </div>

                <div className="relative group">
                  <label className="block text-[10px] uppercase tracking-widest opacity-30 mb-2 group-focus-within:opacity-100 transition-opacity">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-condor-offwhite/20 py-3 text-sm focus:outline-none focus:border-condor-green transition-all resize-none placeholder:opacity-10"
                    placeholder="How can we help?"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-condor-offwhite text-condor-black py-6 overflow-hidden transition-all duration-700 disabled:opacity-50"
                >
                  <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.4em]">
                    {isSubmitting ? 'Dispatching...' : 'Dispatch Message'}
                  </span>
                  <div className="absolute inset-0 bg-condor-green translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Section */}
          <div className="space-y-16">
            <h2 className="text-[11px] uppercase tracking-[0.5em] text-condor-green font-bold">Direct Channels</h2>
            
            <div className="space-y-12">
              <div className="group">
                <h3 className="text-xl uppercase tracking-widest mb-4 group-hover:translate-x-2 transition-transform duration-500">Corporate Email</h3>
                <p className="opacity-40 text-sm leading-loose font-light border-l border-condor-offwhite/10 pl-6">
                  For formal inquiries or legal documentation:<br />
                  <span className="text-condor-offwhite opacity-100">KOKAEQUIPO@GMAIL.COM</span>
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl uppercase tracking-widest mb-4 group-hover:translate-x-2 transition-transform duration-500">Global Headquarters</h3>
                <p className="opacity-40 text-sm leading-loose font-light border-l border-condor-offwhite/10 pl-6">
                  Calle Alfonso Ugarte MZ F LT 6<br />
                  Wanchaq, Cusco, Peru<br />
                  <span className="text-[10px] tracking-widest opacity-40">Open: Mon — Fri (09:00 - 18:00 PET)</span>
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl uppercase tracking-widest mb-4 group-hover:translate-x-2 transition-transform duration-500">Brand Digital</h3>
                <p className="opacity-40 text-sm leading-loose font-light border-l border-condor-offwhite/10 pl-6">
                  Follow us for announcements and visual updates:<br />
                  <a href="https://instagram.com/condorpouches" target="_blank" rel="noopener noreferrer" className="text-condor-green hover:underline">@condorpouches</a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Support;