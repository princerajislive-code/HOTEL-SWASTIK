import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { HOTEL_IMAGES } from '../data/hotelData';

export const BrandMoment: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className="py-20 lg:py-32 relative border-t border-[#C8A45D]/15 overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: theme === 'day' ? '#FFFFFF' : '#141416',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Asset */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              <div
                className="absolute -top-3 -left-3 w-full h-full border border-[#C8A45D]/30 rounded pointer-events-none transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
              <div className="relative rounded overflow-hidden aspect-[4/5] bg-neutral-900 shadow-xl">
                <img
                  src={HOTEL_IMAGES.lobbyLounge}
                  alt="Hotel Swastik reception lounge and warm Indian hospitality"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-xs text-white/90 font-medium tracking-wider">
                  Warm Hospitality & Attentive Service
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Devanagari & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Majestic Devanagari Brand Mark */}
            <div className="mb-4">
              <span className="font-devanagari text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C8A45D] tracking-wide block leading-snug">
                स्वास्तिक होटल
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#A6833D] font-semibold mt-1 block">
                TRADITION OF CARE • MOHANIA, BIHAR
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 transition-colors duration-500"
              style={{
                color: theme === 'day' ? '#1C1917' : '#F7F3EC',
                textWrap: 'balance',
              }}
            >
              Hospitality With A <br />
              <span className="italic font-normal text-[#C8A45D]">Sense Of Place</span>
            </h2>

            {/* Factual editorial hospitality prose */}
            <div
              className="space-y-4 text-base sm:text-lg leading-relaxed transition-colors duration-500"
              style={{
                color: theme === 'day' ? '#57534E' : '#D6D0C5',
              }}
            >
              <p>
                Stationed along the historic Grand Trunk Road in Mohania, Hotel Swastik represents
                an essential rest stop for road travelers, pilgrims, and regional visitors.
                Here, hospitality is defined by heartfelt care, clean comfort, and freshly prepared
                food tailored to your journey.
              </p>
              <p className="text-sm sm:text-base">
                Whether you seek a restorative night in our deluxe rooms after hours behind the wheel
                or a comforting meal prepared with familiar regional spices, we welcome every guest
                with warmth and genuine attentiveness.
              </p>
            </div>

            {/* Hairline Editorial Divider */}
            <div className="mt-8 pt-8 border-t border-[#C8A45D]/20 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="block text-2xl font-display font-bold text-[#C8A45D]">
                  GT Road
                </span>
                <span className="text-xs text-[#78716C] tracking-wide">
                  Strategic Arterial Location
                </span>
              </div>
              <div>
                <span className="block text-2xl font-display font-bold text-[#C8A45D]">
                  Deluxe
                </span>
                <span className="text-xs text-[#78716C] tracking-wide">
                  Comfortable Rooms
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl font-display font-bold text-[#C8A45D]">
                  Fresh
                </span>
                <span className="text-xs text-[#78716C] tracking-wide">
                  Custom-Spiced Dining
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
