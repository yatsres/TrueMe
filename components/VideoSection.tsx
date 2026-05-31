'use client';

import { useInView } from '@/hooks/useInView';

export default function VideoSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden gpu-accelerated ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`}
      style={{
        height: '90vh',
      }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/tm_070_vd01-poster.jpg"
      >
        <source src="/tm_070_vd01.mp4" type="video/mp4" />
      </video>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="tm_heading text-center" style={{ color: '#d2ff72', width: '35%' }}>
          A week that can change how a teenager feels about themselves.
        </h2>
      </div>
    </section>
  );
}
