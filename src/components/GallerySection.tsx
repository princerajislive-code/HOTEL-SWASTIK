import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { GALLERY_ITEMS } from '../data/hotelData';
import { GalleryItem } from '../types';
import { Eye, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<'all' | 'exterior' | 'rooms' | 'dining' | 'ambience'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section
      id="gallery"
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
                VISUAL ARCHIVE
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold transition-colors duration-500"
              style={{
                color: theme === 'day' ? '#1C1917' : '#F7F3EC',
              }}
            >
              Moments At <span className="italic font-normal text-[#C8A45D]">Swastik</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'exterior', label: 'Exterior' },
              { id: 'rooms', label: 'Deluxe Rooms' },
              { id: 'dining', label: 'Dining & Food' },
              { id: 'ambience', label: 'Evening Ambience' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider rounded-md transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#C8A45D] text-white shadow-sm'
                    : theme === 'day'
                    ? 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#EAE4D7]'
                    : 'text-[#9E978C] hover:text-[#F7F3EC] hover:bg-[#1E1E22]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative rounded-lg overflow-hidden border border-[#C8A45D]/25 bg-neutral-900 cursor-pointer shadow-lg hover:border-[#C8A45D] transition-all duration-300 ${
                  isLarge ? 'md:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover Quick Action */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white/80 group-hover:text-white group-hover:scale-110 transition-all border border-white/10">
                  <Eye className="w-4 h-4" />
                </div>

                {/* Text Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#E2CA92] block mb-1">
                    {item.category.toUpperCase()}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-lg overflow-hidden border border-[#C8A45D]/40 bg-[#0F0F10] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#C8A45D] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="p-6 bg-[#171719] border-t border-[#C8A45D]/20">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C8A45D]">
                HOTEL SWASTIK ARCHIVE
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                {activeItem.title}
              </h3>
              <p className="text-sm text-neutral-300 mt-2">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
