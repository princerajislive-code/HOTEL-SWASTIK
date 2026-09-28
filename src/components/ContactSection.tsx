import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MessageSquare, Calendar, Users, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1 Guest',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const constructWhatsAppUrl = (data = formData) => {
    const text = `Hello Hotel Swastik Mohania,%0A%0AI would like to make an enquiry:%0A• Name: ${encodeURIComponent(data.name || 'Guest')}%0A• Phone: ${encodeURIComponent(data.phone || 'N/A')}%0A• Check-In: ${encodeURIComponent(data.checkIn || 'To be decided')}%0A• Check-Out: ${encodeURIComponent(data.checkOut || 'To be decided')}%0A• Guests: ${encodeURIComponent(data.guests)}%0A• Note: ${encodeURIComponent(data.message || 'General enquiry')}`;
    return `https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError('Please provide a valid contact number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 relative border-t border-[#C8A45D]/15 overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: theme === 'day' ? '#F7F3EC' : '#0F0F10',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct contact & details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[1px] w-6 bg-[#C8A45D]" />
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
                  DIRECT CONNECT
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 transition-colors duration-500"
                style={{
                  color: theme === 'day' ? '#1C1917' : '#F7F3EC',
                  textWrap: 'balance',
                }}
              >
                Plan Your <span className="italic font-normal text-[#C8A45D]">Stay & Dining</span>
              </h2>

              <p
                className="text-base sm:text-lg leading-relaxed mb-8 transition-colors duration-500"
                style={{
                  color: theme === 'day' ? '#57534E' : '#D6D0C5',
                }}
              >
                Connect directly with our desk for room availability, highway stopovers,
                special dining requests, or family gatherings in Mohania.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className={`p-4 rounded-lg border flex items-center gap-4 transition-all duration-300 ${
                    theme === 'day'
                      ? 'bg-white border-[#E7DECF] hover:border-[#C8A45D]'
                      : 'bg-[#171719] border-[#2B2926] hover:border-[#C8A45D]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#C8A45D]/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C8A45D]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#78716C] uppercase font-mono tracking-wider block">
                      CALL DIRECTLY (24/7)
                    </span>
                    <span
                      className="font-display font-bold text-lg sm:text-xl"
                      style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                    >
                      {HOTEL_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={constructWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-lg border flex items-center gap-4 transition-all duration-300 ${
                    theme === 'day'
                      ? 'bg-white border-[#E7DECF] hover:border-[#C8A45D]'
                      : 'bg-[#171719] border-[#2B2926] hover:border-[#C8A45D]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#C8A45D]/15 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#C8A45D]" />
                  </div>
                  <div>
                    <span className="text-xs text-[#78716C] uppercase font-mono tracking-wider block">
                      WHATSAPP DESK
                    </span>
                    <span
                      className="font-display font-bold text-lg sm:text-xl"
                      style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                    >
                      {HOTEL_INFO.whatsappDisplay}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#C8A45D]/20 text-xs text-[#78716C]">
              <p>
                <span className="font-semibold text-[#C8A45D]">Hotel Swastik (स्वास्तिक होटल)</span>
                <br />
                5J96+53P, Grand Trunk Rd, Mohania, Bihar 821109
              </p>
            </div>
          </div>

          {/* Right Column: Reservation / Enquiry Panel */}
          <div className="lg:col-span-7">
            <div
              className={`p-8 sm:p-10 rounded-xl border border-[#C8A45D]/30 shadow-2xl transition-colors duration-500 ${
                theme === 'day' ? 'bg-white' : 'bg-[#171719]'
              }`}
            >
              {submitted ? (
                <div className="py-8 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#C8A45D]/15 border border-[#C8A45D] flex items-center justify-center mx-auto mb-5 text-[#C8A45D]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-display font-bold mb-3"
                    style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                  >
                    Enquiry Prepared!
                  </h3>

                  <p className="text-sm text-[#78716C] max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. To ensure immediate front-desk confirmation with zero delay,
                    you can forward this enquiry directly to our active WhatsApp line.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={constructWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#C8A45D] hover:bg-[#B59149] transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3.5 rounded text-xs font-semibold uppercase tracking-wider text-[#78716C] hover:text-[#C8A45D] transition-colors"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#C8A45D]/20 pb-4 mb-2">
                    <h3
                      className="font-display font-bold text-2xl"
                      style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                    >
                      Enquiry & Reservation Form
                    </h3>
                    <p className="text-xs text-[#78716C] mt-1">
                      Fill in your preferences for transparent front-desk assistance.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 rounded bg-red-500/10 border border-red-500/30 text-xs text-red-500 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        required
                        className={`w-full px-4 py-3 rounded text-sm border focus:outline-none focus:ring-1 focus:ring-[#C8A45D] transition-colors ${
                          theme === 'day'
                            ? 'bg-[#F7F3EC] border-[#E7DECF] text-[#1C1917]'
                            : 'bg-[#1F1F24] border-[#2B2926] text-[#F7F3EC]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        required
                        className={`w-full px-4 py-3 rounded text-sm border focus:outline-none focus:ring-1 focus:ring-[#C8A45D] transition-colors ${
                          theme === 'day'
                            ? 'bg-[#F7F3EC] border-[#E7DECF] text-[#1C1917]'
                            : 'bg-[#1F1F24] border-[#2B2926] text-[#F7F3EC]'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-1.5">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className={`w-full px-3 py-3 rounded text-sm border focus:outline-none focus:ring-1 focus:ring-[#C8A45D] transition-colors ${
                          theme === 'day'
                            ? 'bg-[#F7F3EC] border-[#E7DECF] text-[#1C1917]'
                            : 'bg-[#1F1F24] border-[#2B2926] text-[#F7F3EC]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-1.5">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className={`w-full px-3 py-3 rounded text-sm border focus:outline-none focus:ring-1 focus:ring-[#C8A45D] transition-colors ${
                          theme === 'day'
                            ? 'bg-[#F7F3EC] border-[#E7DECF] text-[#1C1917]'
                            : 'bg-[#1F1F24] border-[#2B2926] text-[#F7F3EC]'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-1.5">
                        Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className={`w-full px-3 py-3 rounded text-sm border focus:outline-none focus:ring-1 focus:ring-[#C8A45D] transition-colors ${
                          theme === 'day'
                            ? 'bg-[#F7F3EC] border-[#E7DECF] text-[#1C1917]'
                            : 'bg-[#1F1F24] border-[#2B2926] text-[#F7F3EC]'
                        }`}
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="Family / Group">Family / Group</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-1.5">
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mention deluxe room preference, food spice level, or arrival time on GT Road..."
                      className={`w-full px-4 py-3 rounded text-sm border focus:outline-none focus:ring-1 focus:ring-[#C8A45D] transition-colors ${
                        theme === 'day'
                          ? 'bg-[#F7F3EC] border-[#E7DECF] text-[#1C1917]'
                          : 'bg-[#1F1F24] border-[#2B2926] text-[#F7F3EC]'
                      }`}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#C8A45D] hover:bg-[#B59149] transition-all shadow-md cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </button>

                    <a
                      href={constructWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded text-xs font-bold uppercase tracking-wider text-[#C8A45D] border border-[#C8A45D] hover:bg-[#C8A45D]/10 transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
