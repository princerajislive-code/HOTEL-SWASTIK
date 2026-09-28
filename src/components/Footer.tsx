import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, MessageSquare, Compass, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`border-t transition-colors duration-700 ${
        theme === 'day'
          ? 'bg-[#EFE9DE] border-[#C8A45D]/20 text-[#1C1917]'
          : 'bg-[#0B0B0C] border-[#C8A45D]/20 text-[#F7F3EC]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#C8A45D]/20">
          {/* Brand info */}
          <div className="lg:col-span-5">
            <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-wider uppercase mb-2">
              HOTEL SWASTIK
            </h3>
            <span className="font-devanagari text-lg text-[#C8A45D] block mb-4">
              स्वास्तिक होटल • मोहनिया, बिहार
            </span>
            <p className="text-sm text-[#78716C] max-w-sm leading-relaxed mb-6">
              A refined hospitality stop on the Grand Trunk Road. Offering deluxe rooms,
              comforting Indian dining, and genuine care for highway commuters and visiting families.
            </p>
            <div className="text-xs text-[#78716C] flex items-center gap-2">
              <span className="font-bold text-[#C8A45D]">3.8 ★</span>
              <span>· 140 Google Reviews</span>
              <span>· Grand Trunk Road</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A45D] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-[#78716C] hover:text-[#C8A45D] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#stay" className="text-[#78716C] hover:text-[#C8A45D] transition-colors">
                  Deluxe Rooms
                </a>
              </li>
              <li>
                <a href="#dining" className="text-[#78716C] hover:text-[#C8A45D] transition-colors">
                  Restaurant
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[#78716C] hover:text-[#C8A45D] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#78716C] hover:text-[#C8A45D] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="text-[#78716C] hover:text-[#C8A45D] transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A45D] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="text-[#78716C] hover:text-[#C8A45D] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span>{HOTEL_INFO.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#78716C] hover:text-[#C8A45D] transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span>WhatsApp Desk</span>
                </a>
              </li>
              <li className="text-xs text-[#78716C] pt-2">
                Open 24 Hours Daily for Travelers
              </li>
            </ul>
          </div>

          {/* Location & Address */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A45D] mb-4">
              Address & Map
            </h4>
            <div className="space-y-2 text-sm text-[#78716C]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </p>
              <div className="pt-2">
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C8A45D] hover:underline"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Credit & Copyright Section (MANDATORY REQUIREMENT) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div>
            <p>© {new Date().getFullYear()} HOTEL SWASTIK. All rights reserved.</p>
          </div>

          {/* Developer credit exactly as required */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 bg-neutral-900/10 dark:bg-white/5 px-4 py-2 rounded-lg border border-[#C8A45D]/20">
            <span className="font-medium text-[#C8A45D]">
              🌐 Designed & Developed by RoadsideDeveloper
            </span>
            <span className="text-[#C8A45D]/40" aria-hidden="true">·</span>
            <a
              href="https://wa.me/917654224826"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C8A45D] transition-colors"
            >
              📱 WhatsApp: +91 7654224826
            </a>
            <span className="text-[#C8A45D]/40" aria-hidden="true">·</span>
            <a
              href="tel:+918405918172"
              className="hover:text-[#C8A45D] transition-colors"
            >
              📞 Call: +91 8405918172
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
