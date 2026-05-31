'use client';

import { useEffect } from 'react';
import { initializeMetaPixel, trackPageView } from '@/lib/analytics';

/**
 * MetaPixel Component
 * Initialize Meta Pixel tracking and track pageviews
 * Non-blocking, safe for all deployment platforms
 */
export default function MetaPixel() {
  useEffect(() => {
    // Initialize Meta Pixel
    initializeMetaPixel();
    
    // Track initial pageview
    trackPageView();
  }, []);

  return (
    <>
      {/* Noscript fallback for Meta Pixel */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1558481559035983&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}
