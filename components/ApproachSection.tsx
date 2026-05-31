'use client';

import { useInView } from '@/hooks/useInView';

export default function ApproachSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className={`relative w-full min-h-screen flex items-center justify-center px-3 lg:px-[20%] py-2 lg:py-2 gpu-accelerated ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`} style={{ backgroundColor: '#3D6B3D' }}>
      <div className="mx-auto" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-col items-center justify-center text-center space-y-12 lg:space-y-16">
          {/* Main heading */}
          <h2
            className="tm_title"
            style={{
              color: '#CCFF00',
              maxWidth: '90%',
            }}
          >
            We don't try<br />to fix them.
          </h2>

          {/* Supporting text */}
          <p
            className="tm_body_big"
            style={{
              maxWidth: '800px',
              color: 'white',
            }}
          >
            We create an environment where they can experience something different - what it's like to be themselves and still be accepted.
          </p>
        </div>
      </div>
    </section>
  );
}
