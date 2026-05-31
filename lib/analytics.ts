/**
 * Analytics Utility Module
 * Centralized tracking for Meta Pixel and future providers
 * Works in static export, shared hosting, and all deployment platforms
 */

const META_PIXEL_ID = '1558481559035983';

declare global {
  interface Window {
    fbq?: (action: string, event: string, data?: Record<string, any>) => void;
    _fbq?: any;
  }
}

/**
 * Initialize Meta Pixel
 * Safe to call multiple times
 */
export const initializeMetaPixel = (): void => {
  if (typeof window === 'undefined') return;
  if (window.fbq) return; // Already initialized

  // Load Meta Pixel script
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (function (f: any, b: any, e: string, v: string) {
    let n: any;
    let t: any;
    let s: any;

    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    if (s && s.parentNode) {
      s.parentNode.insertBefore(t, s);
    }
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );

  if (window.fbq) {
    (window.fbq as any)('init', META_PIXEL_ID);
  }
};

/**
 * Track PageView event
 */
export const trackPageView = (): void => {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'PageView');
};

/**
 * Track Lead event
 * Triggered when user shows interest (CTA click, form interaction, etc.)
 */
export const trackLead = (): void => {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'Lead');
};

/**
 * Track custom event
 * @param eventName - Name of the event
 * @param data - Optional event data
 */
export const trackCustomEvent = (
  eventName: string,
  data?: Record<string, any>
): void => {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', eventName, data);
};

/**
 * Track form submission
 */
export const trackFormSubmit = (): void => {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'Contact');
};

/**
 * Track CTA click
 * @param ctaName - Name/identifier of the CTA button
 */
export const trackCTAClick = (ctaName: string): void => {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'Lead', { cta: ctaName });
};
