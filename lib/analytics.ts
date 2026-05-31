// Analytics utilities for Meta Pixel and Google Analytics

declare global {
  interface Window {
    fbq: any;
    gtag: any;
  }
}

/**
 * Track page view with Meta Pixel
 */
export const trackMetaPixelPageView = () => {
  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq('track', 'PageView');
  }
};

/**
 * Track lead conversion
 */
export const trackMetaPixelLead = () => {
  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq('track', 'Lead');
  }
};

/**
 * Track custom event with Meta Pixel
 */
export const trackMetaPixelEvent = (eventName: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq('track', eventName, data);
  }
};

/**
 * Google Analytics pageview (ready for implementation)
 */
export const trackGoogleAnalyticsPageView = (url: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('config', 'GA_ID', {
      page_path: url,
    });
  }
};

/**
 * Google Analytics event tracking (ready for implementation)
 */
export const trackGoogleAnalyticsEvent = (
  eventName: string,
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
};
