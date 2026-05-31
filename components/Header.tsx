'use client';

import { useEffect, useState } from 'react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolling past the hero section (approximately 100vh)
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for modal open state from localStorage or custom event
  useEffect(() => {
    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    window.addEventListener('modalOpen', handleModalOpen);
    window.addEventListener('modalClose', handleModalClose);

    return () => {
      window.removeEventListener('modalOpen', handleModalOpen);
      window.removeEventListener('modalClose', handleModalClose);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: isScrolled ? '#ff751f' : 'transparent',
        filter: isModalOpen ? 'blur(8px)' : 'blur(0px)',
      }}
    >
      <div className="w-full px-3 lg:px-[20%] py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src="/img_tm_logo.png"
            alt="TRUE me camp"
            style={{ maxWidth: '200px', height: 'auto' }}
          />

          {/* Navigation - Hidden on mobile, visible on desktop */}
          <nav className="hidden lg:flex gap-8 items-center">
            <a
              href="#about"
              className="tm_nav transition-colors"
              style={{ color: isScrolled ? 'white' : '#F5F1ED' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d2ff72')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isScrolled ? 'white' : '#F5F1ED')}
            >
              About
            </a>
            <a
              href="#facilitators"
              className="text-trueme-nav transition-colors"
              style={{ color: isScrolled ? 'white' : '#F5F1ED' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d2ff72')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isScrolled ? 'white' : '#F5F1ED')}
            >
              Facilitators
            </a>
            <a
              href="#location"
              className="text-trueme-nav transition-colors"
              style={{ color: isScrolled ? 'white' : '#F5F1ED' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d2ff72')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isScrolled ? 'white' : '#F5F1ED')}
            >
              Location
            </a>
            <a
              href="#110_price"
              className="tm_nav transition-colors"
              style={{ color: isScrolled ? 'white' : '#F5F1ED' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d2ff72')}
              onMouseLeave={(e) => (e.currentTarget.style.color = isScrolled ? 'white' : '#F5F1ED')}
            >
              Price
            </a>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => {
              if (typeof window.fbq !== 'undefined') {
                window.fbq('track', 'Lead');
              }
              openModal();
            }}
            className="px-6 lg:px-8 py-2 lg:py-3 tm_button rounded-full transition-luxury hover-luxury-lift hover-luxury-scale gpu-accelerated flex items-center justify-center gap-2"
            style={{
              backgroundColor: '#d2ff72',
              color: '#3D6B3D',
              border: `2px solid ${isScrolled ? 'transparent' : '#d2ff72'}`,
            }}
          >
            <span>BOOK A CALL</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: 'rotate(0deg)' }}>
              <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
