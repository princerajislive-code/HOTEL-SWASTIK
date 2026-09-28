import React, { useState, useEffect } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons: Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
        {/* Back to top */}
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-11 h-11 rounded-full bg-neutral-900/90 text-white/90 border border-[#C8A45D]/40 backdrop-blur-md flex items-center justify-center hover:bg-[#C8A45D] hover:text-white transition-all shadow-lg cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* WhatsApp Floating Action */}
        <a
          href={`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=Hello%20Hotel%20Swastik%20Mohania,%20I%20have%20an%20enquiry`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer relative group"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute right-14 bg-black/90 text-white text-[11px] font-medium px-2.5 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            WhatsApp Desk
          </span>
        </a>
      </div>

      {/* Floating Call Button: Bottom Left */}
      <div className="fixed bottom-5 left-5 z-40">
        <a
          href={`tel:${HOTEL_INFO.phone}`}
          aria-label="Call Hotel Swastik"
          className="w-12 h-12 rounded-full bg-[#C8A45D] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer group"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute left-14 bg-black/90 text-white text-[11px] font-medium px-2.5 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
            Call +91 84059 18172
          </span>
        </a>
      </div>
    </>
  );
};
