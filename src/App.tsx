/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandMoment } from './components/BrandMoment';
import { DayNightExperience } from './components/DayNightExperience';
import { SwastikExperience } from './components/SwastikExperience';
import { RoomsSection } from './components/RoomsSection';
import { RestaurantSection } from './components/RestaurantSection';
import { ArtOfHospitality } from './components/ArtOfHospitality';
import { DayToNightTimeline } from './components/DayToNightTimeline';
import { CustomerStories } from './components/CustomerStories';
import { GoogleRatingSection } from './components/GoogleRatingSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  const handleOpenEnquiry = () => {
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen relative selection:bg-[#C8A45D]/30 selection:text-[#C8A45D]">
        {/* Golden Scroll Progress Bar */}
        <ScrollProgress />

        {/* Global Navigation Bar */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Main Content Layout */}
        <main>
          {/* Hero Section */}
          <Hero onOpenEnquiry={handleOpenEnquiry} />

          {/* Swastik Brand Moment: स्वास्तिक होटल */}
          <BrandMoment />

          {/* Signature Day ↔ Night Interactive Atmosphere Showcase */}
          <DayNightExperience />

          {/* The Swastik Experience: Stay, Dine, Gather, Connect */}
          <SwastikExperience onOpenEnquiry={handleOpenEnquiry} />

          {/* Deluxe Rooms / Stay Section */}
          <RoomsSection onOpenEnquiry={handleOpenEnquiry} />

          {/* Restaurant Experience: Good Food. Good Company */}
          <RestaurantSection onOpenEnquiry={handleOpenEnquiry} />

          {/* Signature Visual: The Art Of Hospitality */}
          <ArtOfHospitality />

          {/* Day to Night Story: Morning -> Afternoon -> Evening -> Night */}
          <DayToNightTimeline />

          {/* Verified Customer Feedback (Puja Rai, Saurabh Singh, Debasis Karmakar) */}
          <CustomerStories />

          {/* Google Rating Section: 3.8 ★ — 140 Google Reviews */}
          <GoogleRatingSection />

          {/* Editorial Masonry Gallery */}
          <GallerySection />

          {/* Find Hotel Swastik & Grand Trunk Road Map */}
          <LocationSection />

          {/* Direct Contact & Reservation Enquiry Form */}
          <ContactSection />
        </main>

        {/* Footer with RoadsideDeveloper Credit */}
        <Footer />

        {/* Floating Actions: WhatsApp, Call, Back to Top */}
        <FloatingActions />

        {/* Modal for Instant Availability & Reservation Enquiry */}
        <EnquiryModal
          isOpen={isEnquiryModalOpen}
          onClose={handleCloseEnquiry}
        />
      </div>
    </ThemeProvider>
  );
}
