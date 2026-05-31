'use client';

import { useInView } from '@/hooks/useInView';
import { useBookingModal } from '@/context/BookingModalContext';

export default function Hero() {
  const { ref, isInView } = useInView();
  const { openModal } = useBookingModal();

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/tm_010_hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay for content visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <div className="relative z-20 w-full h-screen flex flex-col items-center justify-center px-3 lg:px-[20%]">
        <div className="text-center max-w-5xl">
          {/* Logo */}
          <div className={`mb-8 lg:mb-12 gpu-accelerated ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`}>
            <img
              src="/img_tm_logo.png"
              alt="TRUE me camp"
              className="mx-auto"
              style={{ maxWidth: '500px', width: '100%', height: 'auto' }}
            />
          </div>

          {/* Main headline */}
          <h2
            className={`tm_heading mb-12 lg:mb-16 gpu-accelerated ${isInView ? 'animate-luxury-slide-up' : 'opacity-0'}`}
            style={{ color: '#d2ff72', animationDelay: isInView ? '0.15s' : '0s', maxWidth: '700px', margin: '0 auto 3rem' }}
          >
            A week that can change how a teenager feels about themselves.
          </h2>

          {/* Event details */}
          <div
            className={`space-y-2 gpu-accelerated ${isInView ? 'animate-luxury-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: isInView ? '0.35s' : '0s', marginBottom: '2rem' }}
          >
            <p className="tm_caption text-white">From 14 to 18 years old</p>
            <p className="tm_body text-white">Main language: English.</p>
            <p className="tm_body text-white">Translation available if needed.</p>
          </div>

          {/* CTA Button */}
          <div className={`w-full flex justify-center mt-16 lg:mt-20 gpu-accelerated ${isInView ? 'animate-luxury-slide-up' : 'opacity-0'}`} style={{ animationDelay: isInView ? '0.55s' : '0s' }}>
            <button
              onClick={() => {
                if (typeof window.fbq !== 'undefined') {
                  window.fbq('track', 'Lead');
                }
                openModal();
              }}
              className="px-12 lg:px-16 py-5 lg:py-6 rounded-full tm_button transition-luxury hover-luxury-lift hover-luxury-scale gpu-accelerated flex items-center gap-3 justify-center"
              style={{ backgroundColor: '#d2ff72', color: '#427047' }}
            >
              <span>BOOK A CALL</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: 'rotate(0deg)' }}>
                <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
