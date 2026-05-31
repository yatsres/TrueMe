'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function ResultsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isInView } = useInView();

  const benefits = [
    'understanding emotions',
    'reconnecting with their values and direction',
    'improving communication with themselves and others',
    'building healthy boundaries',
    'resolving conflict in a better way',
    'feeling more confident socially',
    'building real friendships',
    'expressing what they need',
    'discovering strengths and talents',
    'developing empathy and listening skills',
    'trusting themselves more',
  ];

  return (
    <div>
      {/* 061_what - Header */}
      <section
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3 lg:px-[20%] py-16 lg:py-24 cursor-pointer transition-all gpu-accelerated ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`}
        style={{ backgroundColor: '#ff751f' }}
      >
        <div className="mx-auto" style={{ maxWidth: '1440px' }}>
          <div className="flex items-center justify-between">
            <h2 className="tm_title text-white">
              Results. Benefits
            </h2>
            <div
              className="flex-shrink-0 ml-8"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.5s ease-in-out' }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="hidden lg:block"
              >
                <circle cx="40" cy="40" r="38" />
                <path d="M40 28L40 52M28 40L52 40" strokeLinecap="round" />
              </svg>
              <svg
                width="60"
                height="60"
                viewBox="0 0 80 80"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="lg:hidden"
              >
                <circle cx="40" cy="40" r="38" />
                <path d="M40 28L40 52M28 40L52 40" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 062_what - Content */}
      <section
        className="overflow-hidden px-3 lg:px-[20%] transition-all"
        style={{
          backgroundColor: '#ff751f',
          pointerEvents: isOpen ? 'auto' : 'none',
          maxHeight: isOpen ? '2500px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden'
        }}
      >
        <div style={{ paddingBottom: '96px' }}>
          <div className="mx-auto" style={{ maxWidth: '1440px' }}>
            {/* Intro text */}
            <p className="tm_heading mb-12 lg:mb-16" style={{ color: '#d2ff72' }}>
              At True Me Camp teenagers often:
            </p>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" style={{ columnGap: '140px' }}>
              {/* Column 1 - Items 0-2 */}
              <ul className="space-y-4 lg:space-y-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <li
                    key={index}
                    className="tm_body_big text-white flex items-start"
                  >
                    <span className="mr-4 text-white flex-shrink-0">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Column 2 - Items 3-6 */}
              <ul className="space-y-4 lg:space-y-6">
                {benefits.slice(3, 7).map((benefit, index) => (
                  <li
                    key={index + 3}
                    className="tm_body_big text-white flex items-start"
                  >
                    <span className="mr-4 text-white flex-shrink-0">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Column 3 - Items 7-10 */}
              <ul className="space-y-4 lg:space-y-6">
                {benefits.slice(7).map((benefit, index) => (
                  <li
                    key={index + 7}
                    className="tm_body_big text-white flex items-start"
                  >
                    <span className="mr-4 text-white flex-shrink-0">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
