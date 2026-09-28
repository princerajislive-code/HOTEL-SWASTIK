import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { VERIFIED_REVIEWS } from '../data/hotelData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const CustomerStories: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className="py-20 lg:py-32 relative border-t border-[#C8A45D]/15 overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: theme === 'day' ? '#F7F3EC' : '#0F0F10',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#C8A45D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              VERIFIED FEEDBACK
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
            Words From <span className="italic font-normal text-[#C8A45D]">Our Guests</span>
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed transition-colors duration-500"
            style={{
              color: theme === 'day' ? '#57534E' : '#D6D0C5',
            }}
          >
            Real feedback from highway travelers, pilgrims, and diners who stopped at Hotel Swastik in Mohania.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className={`rounded-lg p-7 sm:p-8 flex flex-col justify-between border transition-all duration-300 relative group hover:border-[#C8A45D] ${
                theme === 'day'
                  ? 'bg-white shadow-md'
                  : 'bg-[#171719] shadow-xl'
              }`}
            >
              {/* Subtle quote watermark */}
              <Quote className="w-8 h-8 text-[#C8A45D]/20 mb-4" />

              <div className="mb-6">
                {/* Quote text */}
                <p
                  className="text-base sm:text-lg font-display italic leading-relaxed mb-4 transition-colors"
                  style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                >
                  “{rev.text}”
                </p>

                {rev.highlight && (
                  <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#C8A45D] bg-[#C8A45D]/10 px-2 py-0.5 rounded">
                    {rev.highlight}
                  </span>
                )}
              </div>

              {/* Author & Google Badge */}
              <div className="pt-4 border-t border-[#C8A45D]/20 flex items-center justify-between">
                <div>
                  <h3
                    className="font-bold text-sm tracking-wide transition-colors"
                    style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                  >
                    {rev.author}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#78716C]">
                    <CheckCircle2 className="w-3 h-3 text-[#C8A45D]" />
                    <span>{rev.date}</span>
                  </div>
                </div>

                {/* Star display according to verified rating */}
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating
                          ? 'fill-amber-500 text-amber-500'
                          : 'text-neutral-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
