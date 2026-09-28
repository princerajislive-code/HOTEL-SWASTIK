import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { HOTEL_INFO, HOTEL_IMAGES } from '../data/hotelData';
import { Star, ArrowRight, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: theme === 'day' ? '#F7F3EC' : '#0F0F10',
      }}
    >
      {/* Ambient background glow according to mode */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none blur-3xl transition-opacity duration-1000"
        style={{
          background:
            theme === 'day'
              ? 'radial-gradient(circle, rgba(200, 164, 93, 0.15) 0%, rgba(247, 243, 236, 0) 70%)'
              : 'radial-gradient(circle, rgba(200, 164, 93, 0.22) 0%, rgba(15, 15, 16, 0) 75%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Identity */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Small Eyebrow with Devanagari touch */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C8A45D]" aria-hidden="true" />
              <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-semibold text-[#C8A45D]">
                HOTEL SWASTIK • स्वास्तिक होटल
              </span>
            </div>

            {/* Large Editorial Headline */}
            <div className="space-y-2">
              <h1
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] transition-colors duration-500"
                style={{
                  color: theme === 'day' ? '#1C1917' : '#F7F3EC',
                }}
              >
                Stay. Dine.{' '}
                <span className="italic font-normal text-[#C8A45D] block sm:inline">
                  Experience.
                </span>
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl font-light max-w-xl leading-relaxed pt-2 transition-colors duration-500"
                style={{
                  color: theme === 'day' ? '#57534E' : '#A8A29E',
                }}
              >
                A refined hospitality experience on Grand Trunk Road, Mohania. Where comfort meets culinary warmth.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded transition-all duration-300 shadow-md group cursor-pointer"
                style={{
                  backgroundColor: '#C8A45D',
                  color: '#0F0F10',
                }}
              >
                <span>Explore Experience</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={onOpenEnquiry}
                className={`inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded transition-all duration-200 border cursor-pointer ${
                  theme === 'day'
                    ? 'border-[#C8A45D] text-[#1C1917] hover:bg-[#C8A45D]/10'
                    : 'border-[#C8A45D] text-[#F7F3EC] hover:bg-[#C8A45D]/15'
                }`}
              >
                Reserve / Enquire
              </button>
            </div>

            {/* Trust and Location Floating Information (Unboxed, clean metadata) */}
            <div className="pt-6 border-t border-[#C8A45D]/20 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs tracking-wider">
              <div className="flex items-center gap-1.5 font-medium text-[#C8A45D]">
                <MapPin className="w-3.5 h-3.5" />
                <span className="uppercase tracking-widest font-semibold">MOHANIA • BIHAR</span>
              </div>
              <span className="text-[#C8A45D]/50" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                </div>
                <span
                  className="font-bold tracking-normal"
                  style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                >
                  3.8 ★
                </span>
                <span className="text-[#78716C]">
                  · 140 Google Reviews
                </span>
              </div>
              <span className="text-[#C8A45D]/50" aria-hidden="true">·</span>
              <span className="text-[#78716C]">Deluxe Rooms & Dining</span>
            </div>
          </div>

          {/* Right Column: Large Cinematic Hotel Visual with Subtle Golden Frame */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Golden Architectural Accent Frame */}
              <div
                className="absolute -inset-2.5 sm:-inset-3 rounded-lg border border-[#C8A45D]/40 pointer-events-none transition-all duration-700"
                style={{
                  boxShadow:
                    theme === 'day'
                      ? '0 20px 40px -15px rgba(200, 164, 93, 0.2)'
                      : '0 25px 50px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(200, 164, 93, 0.15)',
                }}
                aria-hidden="true"
              />

              {/* Main Cinematic Image Container */}
              <div className="relative rounded overflow-hidden aspect-[16/10] sm:aspect-[16/11] bg-neutral-900 group">
                <img
                  src={theme === 'day' ? HOTEL_IMAGES.heroFacade : HOTEL_IMAGES.nightGlow}
                  alt="Hotel Swastik facade and hospitality environment on Grand Trunk Road Mohania"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle vignette scrim */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Subtle Floating Corner Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <div className="flex items-center gap-1.5 backdrop-blur-md bg-black/40 px-3 py-1.5 rounded border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
                    <span className="font-medium tracking-wide">
                      {theme === 'day' ? 'Grand Trunk Road Entrance' : 'Evening Lantern Ambience'}
                    </span>
                  </div>
                  <span className="text-[11px] tracking-widest uppercase font-mono text-[#E2CA92]/90 hidden sm:inline">
                    NH-19 MOHANIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
