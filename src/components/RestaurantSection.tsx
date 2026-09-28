import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { HOTEL_IMAGES, MENU_CATEGORIES } from '../data/hotelData';
import { Utensils, Sparkles, HeartHandshake, CheckCircle } from 'lucide-react';

interface RestaurantSectionProps {
  onOpenEnquiry: () => void;
}

export const RestaurantSection: React.FC<RestaurantSectionProps> = ({ onOpenEnquiry }) => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(MENU_CATEGORIES[0].id);

  const activeCategoryData = MENU_CATEGORIES.find((c) => c.id === selectedCategory) || MENU_CATEGORIES[0];

  return (
    <section
      id="dining"
      className="py-20 lg:py-32 relative border-t border-[#C8A45D]/15 overflow-hidden transition-colors duration-700"
      style={{
        backgroundColor: theme === 'day' ? '#F7F3EC' : '#0F0F10',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-6 bg-[#C8A45D]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
                CULINARY HOSPITALITY
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-4 transition-colors duration-500"
              style={{
                color: theme === 'day' ? '#1C1917' : '#F7F3EC',
                textWrap: 'balance',
              }}
            >
              Good Food. <br />
              <span className="italic font-normal text-[#C8A45D]">Good Company.</span>
            </h2>

            <p
              className="text-base sm:text-lg leading-relaxed transition-colors duration-500"
              style={{
                color: theme === 'day' ? '#57534E' : '#D6D0C5',
              }}
            >
              Freshly prepared meals served with warmth and genuine Indian hospitality.
              Whether traveling solo or stopping over with family, our kitchen accommodates
              your dietary preferences and custom spice levels.
            </p>
          </div>

          {/* Guest Feedback Highlight (Saurabh Singh) */}
          <div className="mt-6 lg:mt-0 p-4 rounded border border-[#C8A45D]/30 max-w-sm bg-neutral-900/10 backdrop-blur-sm">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#C8A45D] block mb-1">
              GUEST HIGHLIGHT • SAURABH SINGH
            </span>
            <p className="text-xs sm:text-sm italic font-display text-neutral-800 dark:text-neutral-200">
              “We ordered less spicy food items.”
            </p>
            <p className="text-[11px] text-[#78716C] mt-1">
              Kitchen readily customizes spices and flavor profiles to your taste.
            </p>
          </div>
        </div>

        {/* Dual Visual & Category Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left: Interactive Category Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#C8A45D] mb-4">
              Cuisine Offerings
            </p>

            {MENU_CATEGORIES.map((cat) => {
              const isSelected = cat.id === selectedCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full p-4 rounded text-left transition-all duration-300 border flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[#C8A45D] bg-[#C8A45D]/15 shadow-md scale-[1.01]'
                      : theme === 'day'
                      ? 'border-[#E7DECF] bg-white hover:border-[#C8A45D]/50'
                      : 'border-[#2B2926] bg-[#171719] hover:border-[#C8A45D]/50'
                  }`}
                >
                  <div>
                    <h3
                      className="font-display font-bold text-base sm:text-lg"
                      style={{ color: theme === 'day' ? '#1C1917' : '#F7F3EC' }}
                    >
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#78716C] mt-0.5">{cat.description}</p>
                  </div>
                  <span className="text-[11px] font-mono text-[#C8A45D] shrink-0 ml-3">
                    {cat.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Category Focus & Culinary Visual Card */}
          <div className="lg:col-span-7">
            <div className="rounded-lg overflow-hidden border border-[#C8A45D]/30 shadow-2xl bg-neutral-900 group">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={HOTEL_IMAGES.diningCuisine}
                  alt="Authentic Indian cuisine and dining at Hotel Swastik"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-[#E2CA92] border border-white/10">
                  KITCHEN OPEN DAILY
                </div>

                {/* Overlaid Category Card */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#C8A45D]">
                    <Utensils className="w-4 h-4" />
                    <span>Featured Selection</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                    {activeCategoryData.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed mb-4">
                    {activeCategoryData.description} — Prepared fresh upon order with pure ingredients
                    and adaptable to spice preferences.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/15">
                    <button
                      type="button"
                      onClick={onOpenEnquiry}
                      className="px-5 py-2.5 bg-[#C8A45D] hover:bg-[#B59149] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow cursor-pointer"
                    >
                      Enquire About Dining
                    </button>
                    <span className="text-xs text-neutral-400">
                      * Full seasonal menu available on premises
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
