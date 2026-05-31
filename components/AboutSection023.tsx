'use client';

import { useInView } from '@/hooks/useInView';

export default function AboutSection023() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className={`relative w-full px-3 lg:px-[20%] flex items-center justify-center py-24 lg:py-section-gap gpu-accelerated ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`} style={{ backgroundColor: '#427047' }}>
      <div className="mx-auto w-full" style={{ maxWidth: '1440px' }}>
        <div className="flex flex-col items-center justify-center text-center space-y-12 lg:space-y-16 max-w-3xl mx-auto">
          {/* Main heading */}
          <h2
            className="tm_title_2"
            style={{
              color: '#d2ff72',
            }}
          >
            We don't try<br />to fix them.
          </h2>

          {/* Supporting text */}
          <p
            className="tm_body_big"
            style={{
              color: 'white',
              paddingLeft: '120px',
              paddingRight: '120px',
            }}
          >
            We create an environment where they can experience something different - what it's like to be themselves and still be accepted.
          </p>
        </div>
      </div>
    </section>
  );
}
