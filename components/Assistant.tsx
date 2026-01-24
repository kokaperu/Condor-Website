import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAsk = async () => {
    if (!message.trim() || isLoading) return;
    
    setIsLoading(true);
    setResponse('');
    
    try {
      // Safely access the API key. In the build, process.env.API_KEY is replaced with a string literal.
      // We check if it exists and is not an empty string placeholder.
      const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
      
      if (!apiKey || apiKey === '') {
        setResponse('Brand concierge is currently offline. Please try again later.');
        setIsLoading(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are the digital brand concierge for CONDOR, a premium nicotine pouch brand based in Peru. 
        Your tone is calm, confident, architectural, and direct. 
        Never use hype, never use exclamation points. 
        The brand values: Independent, Premium, Made in Peru, Designed for Experienced Users.
        Product: Menta Andina (Flagship flavor, smooth mint profile). 
        Location: Cusco, Peru.
        Limit responses to 2 short sentences.
        User asks: ${message}`,
        config: {
          temperature: 0.3,
          maxOutputTokens: 100,
        }
      });
      
      setResponse(res.text || 'Information unavailable at this time.');
    } catch (error) {
      console.error('Concierge Error:', error);
      setResponse('A connection error occurred. Our team has been notified.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="bg-condor-charcoal border border-condor-offwhite/10 p-6 mb-4 w-72 md:w-80 shadow-2xl fade-in">
          <div className="flex justify-between items-start mb-6">
            <p className="text-[10px] uppercase tracking-widest opacity-40">Brand Concierge</p>
            <button onClick={() => setIsOpen(false)} className="opacity-40 hover:opacity-100 transition-opacity">✕</button>
          </div>
          
          <div className="space-y-4">
            {response ? (
              <p className="text-sm font-light leading-relaxed opacity-80">{response}</p>
            ) : (
              <p className="text-sm font-light leading-relaxed opacity-40">How may we assist you with Condor today?</p>
            )}
            
            <div className="relative mt-4">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                placeholder="Inquire..."
                className="w-full bg-transparent border-b border-condor-offwhite/20 py-2 text-sm focus:outline-none focus:border-condor-green transition-colors font-light"
              />
              <button 
                onClick={handleAsk}
                disabled={isLoading}
                className={`absolute right-0 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest ${isLoading ? 'opacity-20' : 'opacity-60 hover:opacity-100'} transition-opacity`}
              >
                {isLoading ? '...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-condor-charcoal border border-condor-offwhite/10 flex items-center justify-center hover:bg-condor-gray transition-colors group"
      >
        <div className={`w-1 h-1 bg-condor-green transition-transform duration-500 ${isOpen ? 'scale-[3]' : 'scale-100'}`} />
      </button>
    </div>
  );
};

export default Assistant;