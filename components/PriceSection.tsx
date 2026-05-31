'use client';

import { useInView } from '@/hooks/useInView';
import { useBookingModal } from '@/context/BookingModalContext';

export default function PriceSection() {
  const { ref, isInView } = useInView();
  const { openModal } = useBookingModal();
  const priceCards = [
    {
      id: 1,
      period: 'Early Registration',
      deadline: 'until July 6th',
      program: '850',
      accommodation: '700',
      currency: '€',
    },
    {
      id: 2,
      period: 'Second Registration',
      deadline: 'after July 6th',
      program: '1000',
      accommodation: '700',
      currency: '€',
    },
  ];

  const features = [
    'Full 6-day programme at Quinta da Enxara',
    '5 meals per day (chef prepared)',
    'Accommodation in rooms of 3–4',
    'Medical insurance for all participants',
    'Camp notebook and materials',
    'Digital integration file after camp',
    '2 online follow-up sessions (teens + parents)',
    'Specialized assistant team (1 per 5 teens)',
    'Translation available (min. 3 per language)',
    'Post-camp support and guidance',
  ];

  const notIncluded = ['Travel to/from camp', 'Personal expenses'];

  return (
    <section
      ref={ref}
      id="110_price"
      className={`relative w-full px-3 gpu-accelerated ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`}
      style={{
        backgroundColor: '#427047',
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: '1440px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch h-full">
          {/* Left Column - Second Registration */}
          <div
            className="rounded-3xl overflow-hidden flex flex-col shadow-lg transition-luxury hover-luxury-lift hover-luxury-shadow gpu-accelerated stagger-card"
            style={{ backgroundColor: 'white' }}
          >
            {/* Header section */}
            <div className="px-8 lg:px-10 pt-8 lg:pt-10 pb-6 lg:pb-8 border-b-2 flex-shrink-0" style={{ borderColor: '#F5F1ED' }}>
              <h3 className="tm_subheader_2 mb-2" style={{ color: '#427047' }}>
                {priceCards[1].period}
              </h3>
              <p className="text-sm lg:text-base" style={{ color: '#ff751f' }}>
                {priceCards[1].deadline}
              </p>
            </div>

            {/* Price section */}
            <div className="px-8 lg:px-10 py-8 lg:py-10 flex-shrink-0">
              <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide font-semibold">Program</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl lg:text-6xl font-black" style={{ color: '#427047' }}>
                  {priceCards[1].program}
                </span>
                <span className="text-2xl font-bold" style={{ color: '#427047' }}>
                  {priceCards[1].currency}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold">
                  + <span className="font-black" style={{ color: '#427047' }}>{priceCards[1].accommodation}{priceCards[1].currency}</span> Accommodation & Meals
                </p>
              </div>

              <p className="text-xs text-gray-500">*VAT (23%) not included</p>
            </div>

            {/* Info section */}
            <div className="px-8 lg:px-10 py-6 lg:py-8 border-t-2 flex-shrink-0" style={{ borderColor: '#F5F1ED', backgroundColor: '#F5F1ED' }}>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                <span className="font-bold" style={{ color: '#427047' }}>€300 deposit</span> to confirm your place. Balance due before camp starts.
              </p>
              <p className="text-xs text-gray-600 italic">
                Special rates for returning teenagers and siblings
              </p>
            </div>

            {/* CTA Button */}
            <div className="px-8 lg:px-10 pb-8 lg:pb-10 flex-grow flex items-center justify-center">
              <button
                onClick={openModal}
                className="w-full py-4 lg:py-5 rounded-full tm_button transition-luxury hover-luxury-lift hover-luxury-scale gpu-accelerated flex items-center justify-center gap-3"
                style={{ backgroundColor: '#427047', color: 'white' }}
              >
                <span>BOOK A CALL</span>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: 'rotate(0deg)' }}>
                  <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Center Column - Early Registration */}
          <div
            className="rounded-3xl overflow-hidden flex flex-col shadow-lg transition-luxury hover-luxury-lift hover-luxury-shadow gpu-accelerated stagger-card"
            style={{ backgroundColor: 'white' }}
          >
            {/* Header section */}
            <div className="px-8 lg:px-10 pt-8 lg:pt-10 pb-6 lg:pb-8 border-b-2 flex-shrink-0" style={{ borderColor: '#F5F1ED' }}>
              <h3 className="tm_subheader_2 mb-2" style={{ color: '#427047' }}>
                {priceCards[0].period}
              </h3>
              <p className="text-sm lg:text-base" style={{ color: '#ff751f' }}>
                {priceCards[0].deadline}
              </p>
            </div>

            {/* Price section */}
            <div className="px-8 lg:px-10 py-8 lg:py-10 flex-shrink-0">
              <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide font-semibold">Program</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl lg:text-6xl font-black" style={{ color: '#427047' }}>
                  {priceCards[0].program}
                </span>
                <span className="text-2xl font-bold" style={{ color: '#427047' }}>
                  {priceCards[0].currency}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <p className="text-sm text-gray-600 uppercase tracking-wide font-semibold">
                  + <span className="font-black" style={{ color: '#427047' }}>{priceCards[0].accommodation}{priceCards[0].currency}</span> Accommodation & Meals
                </p>
              </div>

              <p className="text-xs text-gray-500">*VAT (23%) not included</p>
            </div>

            {/* Info section */}
            <div className="px-8 lg:px-10 py-6 lg:py-8 border-t-2 flex-shrink-0" style={{ borderColor: '#F5F1ED', backgroundColor: '#F5F1ED' }}>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                <span className="font-bold" style={{ color: '#427047' }}>€300 deposit</span> to confirm your place. Balance due before camp starts.
              </p>
              <p className="text-xs text-gray-600 italic">
                Special rates for returning teenagers and siblings
              </p>
            </div>

            {/* CTA Button */}
            <div className="px-8 lg:px-10 pb-8 lg:pb-10 flex-grow flex items-center justify-center">
              <button
                onClick={openModal}
                className="w-full py-4 lg:py-5 rounded-full tm_button transition-luxury hover-luxury-lift hover-luxury-scale gpu-accelerated flex items-center justify-center gap-3"
                style={{ backgroundColor: '#427047', color: 'white' }}
              >
                <span>BOOK A CALL</span>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: 'rotate(0deg)' }}>
                  <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column - Information Block */}
          <div
            className="rounded-3xl p-8 lg:p-10 overflow-y-auto flex flex-col shadow-lg transition-all hover:opacity-95"
            style={{
              backgroundColor: 'white',
            }}
          >
            {/* What's Included */}
            <div className="mb-10">
              <h3 className="tm_subheader_2 mb-6" style={{ color: '#427047' }}>
                What's Included
              </h3>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="text-sm lg:text-base flex items-start gap-3 text-gray-800">
                    <span style={{ color: '#a3d4c4' }} className="font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="border-t-2 my-8" style={{ borderColor: '#F5F1ED' }} />

            {/* What's Not Included */}
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-black mb-6" style={{ color: '#427047', letterSpacing: '-0.02em' }}>
                Not Included
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((item, i) => (
                  <li key={i} className="text-sm lg:text-base flex items-start gap-3 text-gray-800">
                    <span style={{ color: '#ff751f' }} className="font-bold text-xl flex-shrink-0">
                      ✕
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Information Section */}
        <div
          className="mt-12 lg:mt-16 text-center"
        >
          <p className="text-lg lg:text-xl text-white leading-relaxed mb-6">
            <span className="font-bold">Returning teenagers and siblings</span> have special rates.
          </p>
          <p className="text-lg lg:text-xl text-white leading-relaxed">
            <span className="font-bold">Places are limited</span> and fill up quickly. <span className="font-bold">Confirm your spot</span> early to secure your place at camp.
          </p>
        </div>
      </div>
    </section>
  );
}
