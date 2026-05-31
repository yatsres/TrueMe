# TRUE ME Camp - Landing Page

A production-ready, award-quality editorial landing page for TRUE ME Camp. Built with modern web technologies for optimal performance, accessibility, and deployment flexibility.

## Overview

This is a fully static, exportable Next.js application designed to be deployed anywhere:
- Static hosting (GoDaddy, cPanel, Netlify, Vercel)
- CDN deployment
- Cloudflare Pages
- Any shared hosting

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS 3
- **Animation**: Framer Motion 10
- **Language**: TypeScript
- **Analytics**: Meta Pixel + Google Analytics (ready to implement)
- **Export**: Static HTML/CSS/JS only

## Project Structure

```
trueme-camp/
├── app/
│   ├── layout.tsx           # Root layout with metadata & Meta Pixel
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Sticky header with navigation
│   ├── Hero.tsx             # Hero section with floating text
│   ├── FloatingText.tsx     # Reusable animated text component
│   ├── CardGrid.tsx         # Asymmetrical card grid
│   ├── AboutSection.tsx     # Split-layout about section
│   ├── StorytellingSection.tsx # Editorial storytelling section
│   └── Footer.tsx           # Footer with links
├── lib/
│   └── analytics.ts         # Analytics utilities
├── public/
│   └── robots.txt
├── next.config.js           # Static export config
├── tailwind.config.js       # Tailwind theme
├── tsconfig.json            # TypeScript config
└── package.json
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
```

### Static Export

```bash
npm run export
```

This generates static HTML/CSS/JS in the `out/` folder, ready for deployment.

## Key Features

### Design System
- **Colors**: Carefully curated warm palette (off-white, forest green, warm orange, lime)
- **Typography**: Oversized, editorial-style headlines with generous spacing
- **Spacing**: Cinematic, luxurious whitespace throughout
- **Animations**: Subtle Framer Motion effects (fade-in, slide-up, hover states)

### Sections

1. **Header** - Sticky, transparent-to-opaque transition with navigation and CTA
2. **Hero** - Full-screen cinematic hero with floating animated text
3. **Card Grid** - Asymmetrical, responsive card layout
4. **About Section** - Split-layout with oversized headline and image placeholder
5. **Storytelling Section** - Long-form editorial content with emotional pacing
6. **Footer** - Dark footer with navigation, social links, and contact

### Responsiveness
- Mobile-first design approach
- Responsive typography scales
- Adaptive layouts for tablet and desktop
- Maintains premium feel on all screen sizes

### Performance
- Optimized Lighthouse scores
- Lazy-loaded animations
- Efficient CSS-only effects where possible
- Minimal JavaScript overhead
- Static export generates lean HTML/CSS/JS

### SEO
- Semantic HTML structure
- Proper heading hierarchy
- OpenGraph and Twitter meta tags
- Structured data ready
- Canonical tags support
- Accessible markup (ARIA labels, focus states)

### Analytics
- Meta Pixel integration (PageView and Lead tracking)
- Google Analytics architecture (ready to configure)
- Centralized tracking utilities
- Non-blocking implementation

## Configuration

### Meta Pixel
The Meta Pixel (ID: 1558481559035983) is configured in the root layout and automatically tracks:
- Page views
- Lead conversions (on CTA button clicks)

To track additional events, use the utilities in `lib/analytics.ts`:

```typescript
import { trackMetaPixelEvent } from '@/lib/analytics';

trackMetaPixelEvent('Lead', { value: 100 });
```

### Google Analytics
To enable Google Analytics, add the tracking script in `app/layout.tsx` and use:

```typescript
import { trackGoogleAnalyticsEvent } from '@/lib/analytics';

trackGoogleAnalyticsEvent('button_click', { button_name: 'book_call' });
```

## Customization

### Colors
Update color values in `tailwind.config.js`:

```javascript
colors: {
  'trueme': {
    'bg': '#ECE9E2',      // Background
    'green': '#3D6B3D',   // Primary text
    'orange': '#F57A1F',  // Accents
    'lime': '#CCFF00',    // CTA buttons
  }
}
```

### Fonts
Modify font imports in `app/globals.css` and update Tailwind config.

### Content
Edit component files in `components/` folder to update text, images, and layout.

## Deployment

### Static Export (Recommended)
```bash
npm run export
```

Deploy the `out/` folder to any static hosting:

**Netlify:**
```bash
netlify deploy --prod --dir=out
```

**Vercel:**
```bash
vercel deploy --prod
```

**GoDaddy/cPanel:**
Upload the `out/` folder via FTP to public_html directory.

### Important
- Set `output: 'export'` in `next.config.js`
- No server-side rendering
- No database or API routes
- Works on shared hosting with zero configuration

## Best Practices

### Performance
- Images should be optimized before use (use tools like TinyPNG)
- Limit animations to essential interactions
- Use `whileInView` for viewport-triggered animations
- Monitor Lighthouse scores in production

### Accessibility
- All interactive elements have focus states
- Color contrast ratios meet WCAG AA standards
- Semantic HTML is used throughout
- ARIA labels added where needed
- Motion respects `prefers-reduced-motion`

### SEO
- Update metadata in `app/layout.tsx`
- Ensure unique, descriptive page titles
- Use semantic heading structure
- Add alt text to images
- Include structured data where relevant

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 TRUE ME Camp. All rights reserved.

## Support

For issues or questions, contact: hello@truemecamp.com
