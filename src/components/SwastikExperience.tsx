import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SWASTIK_EXPERIENCES } from '../data/hotelData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SwastikExperienceProps {
  onOpenEnquiry: () => void;
}

export const SwastikExperience: React.FC<SwastikExperienceProps> = ({ onOpenEnquiry }) => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextExperience = () => {
    setActiveIndex((prev) => (prev + 1) % SWASTIK_EXPERIENCES.length);
  };

  const prevExperience = () => {
    setActiveIndex((prev) => (prev - 1 + SWASTIK_EXPERIENCES.length) % SWASTIK_EXPERIENCES.length);
  };

  return (
    <section
      id="experience"
      className="py-20 lg:py-32 relative border-t border-[#C8A45D]/15 overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: theme === 'day' ? '#F7F3EC' : '#0F0F10',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-6 bg-[#C8A45D]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
                FOUR PILLARS OF SWASTIK
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold transition-colors duration-500"
              style={{
                color: theme === 'day' ? '#1C1917' : '#F7F3EC',
              }}
            >
              The Swastik <span className="italic font-normal text-[#C8A45D]">Experience</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              type="button"
              onClick={prevExperience}
              aria-label="Previous experience"
              className={`p-3 rounded-full border transition-all duration-200 cursor-pointer ${
                theme === 'day'
                  ? 'border-[#C8A45D]/40 text-[#4B3621] hover:bg-[#C8A45D]/15'
                  : 'border-[#C8A45D]/40 text-[#E2CA92] hover:bg-[#C8A45D]/20'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-[#C8A45D] font-bold px-2">
              0{activeIndex + 1} / 0{SWASTIK_EXPERIENCES.length}
            </span>
            <button
              type="button"
              onClick={nextExperience}
              aria-label="Next experience"
              className={`p-3 rounded-full border transition-all duration-200 cursor-pointer ${
                theme === 'day'
                  ? 'border-[#C8A45D]/40 text-[#4B3621] hover:bg-[#C8A45D]/15'
                  : 'border-[#C8A45D]/40 text-[#E2CA92] hover:bg-[#C8A45D]/20'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cinematic Active Spotlight Showcase */}
        <div className="relative rounded-lg overflow-hidden border border-[#C8A45D]/30 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px] sm:min-h-[480px]">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-full bg-neutral-900 overflow-hidden">
              <img
                src={SWASTIK_EXPERIENCES[activeIndex].image}
                alt={SWASTIK_EXPERIENCES[activeIndex].altText}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40 pointer-events-none" />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-[#C8A45D] border border-white/10">
                PILLAR {SWASTIK_EXPERIENCES[activeIndex].number}
              </div>
            </div>

            {/* Narrative Column */}
            <div
              className={`lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between transition-colors duration-500 ${
                theme === 'day' ? 'bg-white' : 'bg-[#171719]'
              }`}
            >
              <div>
                <span className="text-4xl sm:text-5xl font-display font-light text-[#C8A45D] mb-2 block">
                  {SWASTIK_EXPERIENCES[activeIndex].number}
                </span>

                <h3
                  className="text-2xl sm:text-3xl font-display font-bold mb-2 transition-colors duration-500"
                  style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                >
                  {SWASTIK_EXPERIENCES[activeIndex].title}
                </h3>

                <p className="text-sm font-semibold tracking-wide text-[#C8A45D] mb-4">
                  {SWASTIK_EXPERIENCES[activeIndex].subtitle}
                </p>

                {/* Animated Gold Divider Line */}
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#C8A45D] to-transparent mb-6" />

                <p
                  className="text-sm sm:text-base leading-relaxed transition-colors duration-500"
                  style={{ color: theme === 'day' ? '#57534E' : '#D6D0C5' }}
                >
                  {SWASTIK_EXPERIENCES[activeIndex].description}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-[#C8A45D]/15 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#C8A45D] hover:text-[#B59149] transition-colors cursor-pointer group"
                >
                  <span>Enquire For This Experience</span>
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Interactive Horizontal Progress Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SWASTIK_EXPERIENCES.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`p-4 sm:p-5 rounded text-left transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'border-[#C8A45D] shadow-lg scale-[1.02] bg-[#C8A45D]/10'
                    : theme === 'day'
                    ? 'border-[#E7DECF] bg-white/70 hover:border-[#C8A45D]/50'
                    : 'border-[#2B2926] bg-[#171719]/60 hover:border-[#C8A45D]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#C8A45D]">
                    {item.number}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] animate-ping" />
                  )}
                </div>
                <h4
                  className="font-display font-bold text-base sm:text-lg mb-1"
                  style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                >
                  {item.title}
                </h4>
                <p className="text-xs text-[#78716C] line-clamp-1">
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
