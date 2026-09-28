import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { HOTEL_IMAGES } from '../data/hotelData';

export const DayNightExperience: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="py-20 lg:py-28 relative border-t border-[#C8A45D]/15 overflow-hidden transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              SIGNATURE ATMOSPHERE
            </span>
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 transition-colors duration-500"
            style={{
              color: theme === 'day' ? '#1C1917' : '#F7F3EC',
              textWrap: 'balance',
            }}
          >
            The Dual Soul Of <span className="italic font-normal text-[#C8A45D]">Hotel Swastik</span>
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed transition-colors duration-500"
            style={{
              color: theme === 'day' ? '#57534E' : '#D6D0C5',
            }}
          >
            Experience our property as day flows into night along the Grand Trunk Road.
            Switch between atmospheres to discover how sunlight and candlelight shape your stay.
          </p>

          {/* Interactive Dual Mode Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full border border-[#C8A45D]/30 bg-neutral-900/10 backdrop-blur-md shadow-inner">
            <button
              type="button"
              onClick={() => setTheme('day')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                theme === 'day'
                  ? 'bg-[#C8A45D] text-white shadow-md'
                  : 'text-[#8C6F2D] hover:text-[#4B3621] dark:text-[#E2CA92]/80 dark:hover:text-[#F7F3EC]'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Day Atmosphere</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme('night')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                theme === 'night'
                  ? 'bg-[#C8A45D] text-white shadow-md'
                  : 'text-[#8C6F2D] hover:text-[#4B3621] dark:text-[#E2CA92]/80 dark:hover:text-[#F7F3EC]'
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Night Atmosphere</span>
            </button>
          </div>
        </div>

        {/* Dual Atmosphere Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Day Card */}
          <div
            onClick={() => setTheme('day')}
            className={`group cursor-pointer rounded-lg p-6 sm:p-8 transition-all duration-500 border flex flex-col justify-between ${
              theme === 'day'
                ? 'bg-white shadow-2xl border-[#C8A45D] scale-[1.01]'
                : 'bg-neutral-900/20 border-white/10 hover:border-[#C8A45D]/50 opacity-75 hover:opacity-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C8A45D]">
                  <Sun className="w-4 h-4" />
                  Day Mode
                </span>
                {theme === 'day' && (
                  <span className="text-[11px] font-semibold text-[#8C6F2D] bg-[#C8A45D]/15 px-2 py-0.5 rounded">
                    Active View
                  </span>
                )}
              </div>

              <div className="relative rounded overflow-hidden aspect-[16/10] mb-6 bg-neutral-100">
                <img
                  src={HOTEL_IMAGES.heroFacade}
                  alt="Hotel Swastik in bright daylight on Grand Trunk Road"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 text-xs font-medium text-white">
                  Warm Sunlight & Highway Vitality
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-[#1C1917] dark:text-[#F7F3EC] mb-2">
                A Warm Welcome, All Day
              </h3>

              <p className="text-sm leading-relaxed text-[#57534E] dark:text-[#D6D0C5] mb-4">
                Natural sunlight fills the dining hall, providing fresh energy, quick check-ins,
                steaming breakfast, and a soothing refuge for highway commuters.
              </p>
            </div>

            <div className="pt-4 border-t border-[#C8A45D]/20 text-xs font-medium text-[#C8A45D] flex items-center justify-between">
              <span>Warm Ivory • Golden Sunlight</span>
              <span className="group-hover:translate-x-1 transition-transform">Select Day &rarr;</span>
            </div>
          </div>

          {/* Night Card */}
          <div
            onClick={() => setTheme('night')}
            className={`group cursor-pointer rounded-lg p-6 sm:p-8 transition-all duration-500 border flex flex-col justify-between ${
              theme === 'night'
                ? 'bg-[#171719] shadow-2xl border-[#C8A45D] scale-[1.01]'
                : 'bg-neutral-100/50 border-neutral-300 hover:border-[#C8A45D]/50 opacity-75 hover:opacity-100'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C8A45D]">
                  <Moon className="w-4 h-4" />
                  Night Mode
                </span>
                {theme === 'night' && (
                  <span className="text-[11px] font-semibold text-[#E2CA92] bg-[#C8A45D]/20 px-2 py-0.5 rounded">
                    Active View
                  </span>
                )}
              </div>

              <div className="relative rounded overflow-hidden aspect-[16/10] mb-6 bg-neutral-900">
                <img
                  src={HOTEL_IMAGES.nightGlow}
                  alt="Hotel Swastik with golden lanterns in evening night mode"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 text-xs font-medium text-white">
                  Golden Lanterns & Restful Slumber
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-[#1C1917] dark:text-[#F7F3EC] mb-2">
                Where Evenings Become Memories
              </h3>

              <p className="text-sm leading-relaxed text-[#57534E] dark:text-[#D6D0C5] mb-4">
                Deep shadows bathed in soft golden ambient glows. Savor tranquil dinners,
                candlelight conversations, and undisturbed rest in soundly protected deluxe rooms.
              </p>
            </div>

            <div className="pt-4 border-t border-[#C8A45D]/20 text-xs font-medium text-[#C8A45D] flex items-center justify-between">
              <span>Deep Charcoal • Candlelight Amber</span>
              <span className="group-hover:translate-x-1 transition-transform">Select Night &rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
