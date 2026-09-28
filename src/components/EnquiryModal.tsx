import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { HOTEL_INFO } from '../data/hotelData';
import { X, Send, MessageSquare, CheckCircle2 } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const constructWhatsAppUrl = (data = formData) => {
    const text = `Hello Hotel Swastik Mohania,%0A%0AI would like to check availability and enquire:%0A• Name: ${encodeURIComponent(data.name || 'Guest')}%0A• Phone: ${encodeURIComponent(data.phone || 'N/A')}%0A• Check-In: ${encodeURIComponent(data.checkIn || 'To be decided')}%0A• Check-Out: ${encodeURIComponent(data.checkOut || 'To be decided')}%0A• Guests: ${encodeURIComponent(data.guests)}%0A• Message: ${encodeURIComponent(data.message || 'Deluxe Room enquiry')}`;
    return `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className={`relative w-full max-w-lg rounded-xl border border-[#C8A45D]/40 p-6 sm:p-8 shadow-2xl transition-colors duration-300 ${
          theme === 'day' ? 'bg-[#F7F3EC] text-[#1C1917]' : 'bg-[#171719] text-[#F7F3EC]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close enquiry modal"
          className="absolute top-5 right-5 text-[#78716C] hover:text-[#C8A45D] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#C8A45D]/20 text-[#C8A45D] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl mb-2">
              Ready To Connect
            </h3>
            <p className="text-xs sm:text-sm text-[#78716C] mb-6">
              Forward these details directly to Hotel Swastik Mohania on WhatsApp for immediate confirmation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={constructWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#C8A45D] hover:bg-[#B59149] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 rounded text-xs font-semibold uppercase tracking-wider text-[#78716C] hover:text-[#C8A45D]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-[#C8A45D]/20 pb-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C8A45D] block">
                HOTEL SWASTIK • MOHANIA
              </span>
              <h3 className="font-display font-bold text-2xl mt-0.5">
                Reserve / Enquire
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#C8A45D] mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded text-xs border focus:outline-none focus:ring-1 focus:ring-[#C8A45D] ${
                    theme === 'day'
                      ? 'bg-white border-[#E7DECF] text-[#1C1917]'
                      : 'bg-[#1F1F24] border-[#2B2926] text-[#F7F3EC]'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#C8A45D] mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded text-xs border focus:outline-none focus:ring-1 focus:ring-[#C8A45D] ${
                    theme === 'day'
                      ? 'bg-white border-[#E7DECF] text-[#1C1917]'
                      : 'bg-[#1F1F24] border-[#2B2926] text-[#F7F3EC]'
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#C8A45D] mb-1">
                  Check-in
                </label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className={`w-full px-3 py-2 rounded text-xs border focus:outline-none focus:ring-1 focus:ring-[#C8A45D] ${
                    theme === 'day'
                      ? 'bg-white border-[#E7DECF] text-[#1C1917]'
                      : 'bg-[#1F1F24] border-[#2B2926] text-[#F7F3EC]'
                  }`}
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#C8A45D] mb-1">
                  Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className={`w-full px-3 py-2 rounded text-xs border focus:outline-none focus:ring-1 focus:ring-[#C8A45D] ${
                    theme === 'day'
                      ? 'bg-white border-[#E7DECF] text-[#1C1917]'
                      : 'bg-[#1F1F24] border-[#2B2926] text-[#F7F3EC]'
                  }`}
                >
                  <option value="1 Guest">1 Guest</option>
                  <option value="2 Guests">2 Guests</option>
                  <option value="Family">Family</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#C8A45D] mb-1">
                Note / Preference
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Deluxe room, dining question, highway arrival..."
                className={`w-full px-3 py-2 rounded text-xs border focus:outline-none focus:ring-1 focus:ring-[#C8A45D] ${
                  theme === 'day'
                    ? 'bg-white border-[#E7DECF] text-[#1C1917]'
                    : 'bg-[#1F1F24] border-[#2B2926] text-[#F7F3EC]'
                }`}
              />
            </div>

            <div className="pt-2 flex gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#C8A45D] hover:bg-[#B59149] transition-all cursor-pointer"
              >
                Submit Enquiry
              </button>
              <a
                href={constructWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded text-xs font-bold uppercase tracking-wider text-[#C8A45D] border border-[#C8A45D] hover:bg-[#C8A45D]/10"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
