'use client';

import { useContext } from 'react';
import React from 'react';
import { AboutDetailContext } from '@/context/AboutDetailContext';
import { useInView } from '@/hooks/useInView';

export default function AboutSection() {
  const { showDetails, setShowDetails } = useContext(AboutDetailContext);
  const { ref, isInView } = useInView();

  return (
    <>
      {/* 021_about - Header with lime green background */}
      <section ref={ref} id="about" className={`w-full gpu-accelerated ${isInView ? 'animate-luxury-fade-in' : 'opacity-0'}`} style={{ backgroundColor: '#d2ff72', padding: 0, margin: 0, minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        <div className="mx-auto w-full" style={{ maxWidth: '100%', padding: 0, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '20% 30% 5% 25% 20%', gap: '0', height: '100%', alignItems: 'flex-start', paddingTop: '5%', paddingBottom: '0%', paddingLeft: 0, paddingRight: 0, width: '100%' }}>
            {/* Left spacer (10%) */}
            <div />

            {/* Left column - Text (40% width) */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center', width: '100%', height: '90%' }}>
              <h2 className="tm_title_2 mb-8 lg:mb-12 leading-tight" style={{ color: '#427047', marginBottom: '35px' }}>
                What is the<br />camp?
              </h2>

              <p className="tm_body_big mb-6 lg:mb-8 leading-relaxed" style={{ color: '#427047', width: '100%', marginBottom: '70px' }}>
                True Me Camp<br />is a one-week experience<br />for teenagers aged 14 to 18.
              </p>

              <p className="tm_subheader mb-8 lg:mb-12" style={{ color: '#ff751f', marginBottom: '40px' }}>
                What is True Me Camp<br />and why does it matter?
              </p>

              <button
                onClick={() => {
                  setShowDetails(!showDetails);
                  if (!showDetails && typeof window.fbq !== 'undefined') {
                    window.fbq('track', 'Lead');
                  }
                }}
                className="tm_button transition-luxury hover-luxury-lift hover-luxury-scale gpu-accelerated flex items-center justify-center gap-3"
                style={{
                  backgroundColor: '#ff751f',
                  color: 'white',
                  minHeight: '60px',
                  borderRadius: '60px',
                  border: 'none',
                  padding: '15px 30px',
                  width: '80%',
                  cursor: 'pointer'
                }}
              >
                <span>read more</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2" style={{ transform: showDetails ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.5s' }}>
                  <path d="M5 7.5L10 12.5L15 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>

            {/* Center spacer (10%) */}
            <div />

            {/* Right column - Image (30% width) */}
            <div className={`gpu-accelerated ${isInView ? 'animate-luxury-slide-down' : 'opacity-0'}`} style={{
              animationDelay: isInView ? '0.15s' : '0s',
              backgroundColor: '#C4A574',
              borderRadius: '60px',
              overflow: 'hidden',
              position: 'relative',
              width: '100%',
              height: '90%'
            }}>
              <video
                className="w-full h-full"
                autoPlay
                loop
                muted
                playsInline
                poster="/camp02-poster.jpg"
                loading="lazy"
                preload="metadata"
                style={{ objectFit: 'cover' }}
              >
                <source src="/vid_021.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Right spacer (10%) */}
            <div />
          </div>
        </div>
      </section>
    </>
  );
}
