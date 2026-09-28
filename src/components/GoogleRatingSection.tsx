import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { HOTEL_INFO } from '../data/hotelData';
import { Star, ExternalLink } from 'lucide-react';

export const GoogleRatingSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      className="py-14 sm:py-20 border-t border-[#C8A45D]/15 transition-colors duration-700"
      style={{
        backgroundColor: theme === 'day' ? '#FFFFFF' : '#141416',
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-xl p-8 sm:p-12 border border-[#C8A45D]/30 flex flex-col md:flex-row items-center justify-between gap-8 transition-colors duration-500 ${
            theme === 'day' ? 'bg-[#F7F3EC]' : 'bg-[#171719]'
          }`}
        >
          {/* Rating block */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#C8A45D]/15 border border-[#C8A45D]/30">
              <span className="text-3xl font-display font-bold text-[#C8A45D]">
                {HOTEL_INFO.rating}
              </span>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500 mb-1.5">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
                <Star className="w-5 h-5 fill-amber-500/40 text-amber-500" />
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span
                  className="font-bold text-lg tracking-wide transition-colors"
                  style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                >
                  {HOTEL_INFO.reviewCount} Google Reviews
                </span>
                <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-mono px-2 py-0.5 rounded bg-[#C8A45D]/10">
                  HOTEL
                </span>
              </div>

              <p className="text-xs text-[#78716C] mt-1">
                Publicly verified feedback on Google Maps & Search
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="shrink-0">
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#C8A45D] hover:bg-[#B59149] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <span>View on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
