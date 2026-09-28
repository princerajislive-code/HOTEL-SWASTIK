import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Navigation, Phone, Compass, Clock, Check } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="location"
      className="py-20 lg:py-32 relative border-t border-[#C8A45D]/15 overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: theme === 'day' ? '#FFFFFF' : '#141416',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Information & Directions */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-6 bg-[#C8A45D]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
                LOCATION & ACCESSIBILITY
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 transition-colors duration-500"
              style={{
                color: theme === 'day' ? '#1C1917' : '#F7F3EC',
                textWrap: 'balance',
              }}
            >
              Find Hotel <span className="italic font-normal text-[#C8A45D]">Swastik</span>
            </h2>

            {/* Address Box */}
            <div
              className={`p-6 rounded-lg border mb-8 transition-colors duration-500 ${
                theme === 'day'
                  ? 'bg-[#F7F3EC] border-[#C8A45D]/30'
                  : 'bg-[#1A1A1D] border-[#C8A45D]/30'
              }`}
            >
              <div className="flex items-start gap-3.5 mb-4">
                <MapPin className="w-5 h-5 text-[#C8A45D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-[#A6833D] block mb-1">
                    EXACT LOCATION & PLUS CODE
                  </span>
                  <p
                    className="font-medium text-base sm:text-lg leading-snug transition-colors"
                    style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                  >
                    {HOTEL_INFO.address}
                  </p>
                </div>
              </div>

              {/* Highway details */}
              <div className="space-y-2 pt-4 border-t border-[#C8A45D]/15 text-xs text-[#78716C]">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#C8A45D]" />
                  <span>Located on National Highway 19 (Grand Trunk Road), Mohania</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C8A45D]" />
                  <span>Open 24 Hours for road travelers & guests</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#C8A45D] hover:bg-[#B59149] rounded transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${HOTEL_INFO.phone}`}
                className={`inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded transition-all duration-200 border cursor-pointer ${
                  theme === 'day'
                    ? 'border-[#C8A45D] text-[#1C1917] hover:bg-[#C8A45D]/10'
                    : 'border-[#C8A45D] text-[#F7F3EC] hover:bg-[#C8A45D]/15'
                }`}
              >
                <Phone className="w-4 h-4 text-[#C8A45D]" />
                <span>Call Hotel</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden border border-[#C8A45D]/30 shadow-2xl bg-neutral-900 aspect-[16/10] sm:aspect-[16/11]">
              <iframe
                title="Hotel Swastik Location on Grand Trunk Road Mohania Bihar"
                src="https://maps.google.com/maps?q=Hotel+Swastik+Mohania+Grand+Trunk+Road+Bihar+821109&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating map pin overlay tag */}
              <div className="absolute top-4 left-4 backdrop-blur-md bg-black/75 px-4 py-2 rounded border border-[#C8A45D]/30 text-white shadow-lg pointer-events-none">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#E2CA92] block">
                  SWASTIK HOTEL MOHANIA
                </span>
                <span className="text-xs font-medium">Grand Trunk Rd, Bihar 821109</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
