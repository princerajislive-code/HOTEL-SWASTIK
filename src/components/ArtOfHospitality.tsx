import React from 'react';
import { HOTEL_IMAGES } from '../data/hotelData';

export const ArtOfHospitality: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 lg:py-48 overflow-hidden bg-black text-white">
      {/* Background Cinematic Image with Fixed/Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <img
          src={HOTEL_IMAGES.restaurantAmbience}
          alt="The Art of Hospitality at Hotel Swastik"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark gradient scrims for pristine legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Eyebrow with gold hairline */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-[1px] w-12 bg-[#C8A45D]" />
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#E2CA92]">
            THE ART OF HOSPITALITY
          </span>
          <span className="h-[1px] w-12 bg-[#C8A45D]" />
        </div>

        {/* Poetic Overlay Typography */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-light leading-[1.15] tracking-tight mb-8">
          From the first welcome <br />
          <span className="font-semibold italic text-[#C8A45D]">to the last moment.</span>
        </h2>

        {/* Devanagari cultural resonance */}
        <p className="font-devanagari text-xl sm:text-2xl text-[#E2CA92]/90 font-medium mb-6">
          अतिथि देवो भव — Atithi Devo Bhava
        </p>

        <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
          Every traveler who passes through Mohania on the Grand Trunk Road deserves a calm sanctuary,
          a respectful greeting, and an honest taste of home.
        </p>
      </div>
    </section>
  );
};
