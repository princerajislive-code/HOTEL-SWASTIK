import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Phone, MessageSquare } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Stay', href: '#stay' },
    { label: 'Dining', href: '#dining' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? theme === 'day'
              ? 'bg-[#F7F3EC]/92 backdrop-blur-md shadow-sm border-b border-[#C8A45D]/20 py-3'
              : 'bg-[#0F0F10]/92 backdrop-blur-md shadow-xl border-b border-[#C8A45D]/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              className="text-xl sm:text-2xl font-display font-bold tracking-widest uppercase transition-colors duration-200"
              style={{
                color: theme === 'day' ? '#1C1917' : '#F7F3EC',
              }}
            >
              HOTEL SWASTIK
            </a>

            {/* Zone 2: 4-6 nav links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 group ${
                    theme === 'day'
                      ? 'text-[#57534E] hover:text-[#1C1917]'
                      : 'text-[#D6D0C5] hover:text-[#F7F3EC]'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A45D] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Zone 3: Interactive Day/Night toggle & Enquire button */}
            <div className="flex items-center gap-3">
              {/* Day / Night Toggle Switch */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'day' ? 'Night' : 'Day'} mode`}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-300 border ${
                  theme === 'day'
                    ? 'bg-[#EAE4D7] border-[#C8A45D]/40 text-[#4B3621] hover:bg-[#E2D9C8]'
                    : 'bg-[#1C1C20] border-[#C8A45D]/40 text-[#E2CA92] hover:bg-[#25252B]'
                }`}
              >
                {theme === 'day' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#C8A45D] animate-spin-slow" />
                    <span className="font-semibold text-[11px] whitespace-nowrap">☀ DAY</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#C8A45D]" />
                    <span className="font-semibold text-[11px] whitespace-nowrap">☾ NIGHT</span>
                  </>
                )}
              </button>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#C8A45D] hover:bg-[#B59149] rounded transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap cursor-pointer"
              >
                Enquire
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                className={`lg:hidden p-2 rounded-md transition-colors ${
                  theme === 'day'
                    ? 'text-[#1C1917] hover:bg-black/5'
                    : 'text-[#F7F3EC] hover:bg-white/10'
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div
            className={`fixed right-0 top-0 bottom-0 w-full max-w-xs p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ${
              theme === 'day' ? 'bg-[#F7F3EC] text-[#1C1917]' : 'bg-[#0F0F10] text-[#F7F3EC]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#C8A45D]/20">
                <span className="font-display font-bold text-lg tracking-widest uppercase">
                  HOTEL SWASTIK
                </span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                  className="p-1.5 rounded-full hover:bg-white/10"
                >
                  <X className="w-5 h-5 text-[#C8A45D]" />
                </button>
              </div>

              {/* Day / Night switch on mobile */}
              <div className="py-4 border-b border-[#C8A45D]/15 flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#C8A45D] font-medium">
                  Atmosphere
                </span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                    theme === 'day'
                      ? 'bg-[#EAE4D7] border-[#C8A45D]/40 text-[#4B3621]'
                      : 'bg-[#1C1C20] border-[#C8A45D]/40 text-[#E2CA92]'
                  }`}
                >
                  {theme === 'day' ? '☀ DAY MODE' : '☾ NIGHT MODE'}
                </button>
              </div>

              {/* Nav links */}
              <nav className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-display tracking-wide py-1 border-b border-[#C8A45D]/10 hover:text-[#C8A45D] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Actions */}
            <div className="pt-6 border-t border-[#C8A45D]/20 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 text-center text-xs font-bold tracking-widest uppercase text-white bg-[#C8A45D] hover:bg-[#B59149] rounded"
              >
                Reserve / Enquire
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded border border-[#C8A45D]/30 font-medium hover:border-[#C8A45D]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
                  Call Hotel
                </a>
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded border border-[#C8A45D]/30 font-medium hover:border-[#C8A45D]"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C8A45D]" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
