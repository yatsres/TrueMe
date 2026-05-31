'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function MethodsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isInView } = useInView();

  const methods = [
    'Group Facilitation',
    'Honest Sharing Circles',
    'Integrative Psychology',
    'Somatic Exercises',
    'Movement Therapy',
    'Dance and Joy',
    'Theatre Creation',
    'Art Therapy',
    'Team Building',
    'Coaching Tools',
    'Meditation, Presence and Rituals',
    'Nature Experiences',
    'Playfulness and Humor',
  ];

  return (
    <div>
      {/* 051_what - Header */}
      <section
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3 lg:px-[20%] py-16 lg:py-24 cursor-pointer transition-all gpu-accelerated ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`}
        style={{ backgroundColor: '#d2ff72' }}
      >
        <div className="mx-auto" style={{ maxWidth: '1440px' }}>
          <div className="flex items-center justify-between">
            <h2 className="tm_title" style={{ color: '#427047' }}>
              Methods
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
                stroke="#427047"
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
                stroke="#427047"
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

      {/* 052_what - Content */}
      <section
        className="overflow-hidden px-3 lg:px-[20%] transition-all"
        style={{
          backgroundColor: '#d2ff72',
          pointerEvents: isOpen ? 'auto' : 'none',
          maxHeight: isOpen ? '2500px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden'
        }}
      >
        <div style={{ paddingBottom: '96px' }}>
          <div className="mx-auto" style={{ maxWidth: '1440px' }}>
            {/* Intro text */}
            <p className="tm_heading mb-12 lg:mb-16" style={{ color: '#ff751f' }}>
              We work through shared experiences and practices such as:
            </p>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" style={{ columnGap: '140px' }}>
              {/* Column 1 - Items 0-4 */}
              <ul className="space-y-4 lg:space-y-6">
                {methods.slice(0, 5).map((method, index) => (
                  <li
                    key={index}
                    className="tm_body_big flex items-start"
                    style={{ color: '#427047' }}
                  >
                    <span className="mr-4 flex-shrink-0" style={{ color: '#427047' }}>•</span>
                    <span>{method}</span>
                  </li>
                ))}
              </ul>

              {/* Column 2 - Items 5-9 */}
              <ul className="space-y-4 lg:space-y-6">
                {methods.slice(5, 10).map((method, index) => (
                  <li
                    key={index + 5}
                    className="tm_body_big flex items-start"
                    style={{ color: '#427047' }}
                  >
                    <span className="mr-4 flex-shrink-0" style={{ color: '#427047' }}>•</span>
                    <span>{method}</span>
                  </li>
                ))}
              </ul>

              {/* Column 3 - Items 10-12 */}
              <ul className="space-y-4 lg:space-y-6">
                {methods.slice(10).map((method, index) => (
                  <li
                    key={index + 10}
                    className="tm_body_big flex items-start"
                    style={{ color: '#427047' }}
                  >
                    <span className="mr-4 flex-shrink-0" style={{ color: '#427047' }}>•</span>
                    <span>{method}</span>
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
