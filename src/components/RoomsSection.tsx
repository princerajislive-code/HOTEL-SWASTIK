import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { HOTEL_IMAGES } from '../data/hotelData';
import { Bed, Wind, Wifi, Shield, Clock, ArrowRight } from 'lucide-react';

interface RoomsSectionProps {
  onOpenEnquiry: () => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenEnquiry }) => {
  const { theme } = useTheme();

  return (
    <section
      id="stay"
      className="py-20 lg:py-32 relative border-t border-[#C8A45D]/15 overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: theme === 'day' ? '#FFFFFF' : '#141416',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              ACCOMMODATION & REST
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 transition-colors duration-500"
            style={{
              color: theme === 'day' ? '#1C1917' : '#F7F3EC',
              textWrap: 'balance',
            }}
          >
            Rest After <span className="italic font-normal text-[#C8A45D]">The Journey</span>
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed transition-colors duration-500"
            style={{
              color: theme === 'day' ? '#57534E' : '#D6D0C5',
            }}
          >
            Designed for highway transit, pilgrimage visits, and family stopovers along the Grand Trunk Road.
            Deluxe accommodations offering clean linens, soothing climate control, and uninterrupted quiet.
          </p>
        </div>

        {/* Comfortable Stay Card */}
        <div className="rounded-lg overflow-hidden border border-[#C8A45D]/30 shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-auto min-h-[400px] bg-neutral-900 group">
              <img
                src={HOTEL_IMAGES.deluxeRoom}
                alt="Deluxe room accommodation at Hotel Swastik Mohania"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Verified Guest Mention Tag */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/60 border border-white/10 rounded-lg p-4 text-white">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#E2CA92] block mb-1">
                  VERIFIED GUEST FEEDBACK • PUJA RAI
                </span>
                <p className="text-xs sm:text-sm italic font-display">
                  “Deluxe rooms are best with good food and service.”
                </p>
              </div>
            </div>

            {/* Room Narrative & Enquiry Action */}
            <div
              className={`lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between transition-colors duration-500 ${
                theme === 'day' ? 'bg-[#F7F3EC]' : 'bg-[#1A1A1D]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest font-bold text-[#C8A45D]">
                    ROOMS & SUITES
                  </span>
                  <span className="text-xs text-[#78716C] font-mono">
                    GRAND TRUNK ROAD
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-display font-bold mb-4 transition-colors duration-500"
                  style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                >
                  Comfortable Stay
                </h3>

                <p
                  className="text-sm sm:text-base leading-relaxed mb-6 transition-colors duration-500"
                  style={{ color: theme === 'day' ? '#57534E' : '#D6D0C5' }}
                >
                  Our deluxe rooms are prepared to deliver quiet, restorative hospitality.
                  Furnished with comfortable beds, clean private bathrooms, and climate control,
                  each room serves as a peaceful retreat from the highway.
                </p>

                {/* Unboxed Room Amenities */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2.5 text-xs text-[#78716C]">
                    <Bed className="w-4 h-4 text-[#C8A45D]" />
                    <span>Plush Bedding</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#78716C]">
                    <Wind className="w-4 h-4 text-[#C8A45D]" />
                    <span>Air Conditioning</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#78716C]">
                    <Shield className="w-4 h-4 text-[#C8A45D]" />
                    <span>Private Ensuite</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#78716C]">
                    <Clock className="w-4 h-4 text-[#C8A45D]" />
                    <span>24/7 Front Desk</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-[#C8A45D]/20">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#C8A45D] hover:bg-[#B59149] rounded transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <p className="text-[11px] text-center text-[#78716C] mt-2.5">
                  Direct enquiry via WhatsApp or online message — fast verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
