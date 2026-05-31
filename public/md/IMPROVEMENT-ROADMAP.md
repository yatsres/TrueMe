# Improvement Roadmap - Detailed Action Plan

## Phase 1: CRITICAL FIXES (Week 1-2) 🔴

### 1.1 Fix Event Listener Memory Leaks
**Impact**: Stability, Performance  
**Effort**: 2 hours  
**Priority**: P0

**File**: `components/FacilitatorsSection.tsx`

**Current Problem**:
```tsx
// Lines 76-86: Memory leak
window.addEventListener('resize', () => {
  updateAlignment();
  // ...
});

return () => {
  window.removeEventListener('resize', () => {
    // This creates a NEW function, doesn't remove original!
  });
};
```

**Fix**:
```tsx
'use client';

import { useState, useEffect, useRef } from 'react';

export default function FacilitatorsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isInView } = useInView();
  const [imageStyle, setImageStyle] = useState({ marginTop: '0px', height: '400px' });
  const [julieImageStyle, setJulieImageStyle] = useState({ marginTop: '0px', height: '500px' });
  const [iraImageStyle, setIraImageStyle] = useState({ marginTop: '0px', height: '500px' });

  // Create memoized handler
  const handleResize = useRef(() => {
    updateAlignment();
    updateJulieImageAlignment();
    updateIraImageAlignment();
  });

  useEffect(() => {
    const updateAlignment = () => { /* ... */ };
    const updateJulieImageAlignment = () => { /* ... */ };
    const updateIraImageAlignment = () => { /* ... */ };

    // Update ref
    handleResize.current = () => {
      updateAlignment();
      updateJulieImageAlignment();
      updateIraImageAlignment();
    };

    // Initial call
    handleResize.current();

    // Add listener with stable reference
    window.addEventListener('resize', handleResize.current);

    // Proper cleanup
    return () => {
      window.removeEventListener('resize', handleResize.current);
    };
  }, []);

  // ... rest of component
}
```

**Verification**: 
- [ ] DevTools: Check no listeners accumulate on resize
- [ ] Performance: Monitor memory over time

---

### 1.2 Fix Missing useEffect Dependencies
**Impact**: Correctness, Reliability  
**Effort**: 1.5 hours  
**Priority**: P0

**Files**: BookingModal.tsx, Header.tsx, Hero.tsx

**File**: `components/BookingModal.tsx`

**Current**:
```tsx
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    window.dispatchEvent(new CustomEvent('modalOpen'));
  } else {
    document.body.style.overflow = 'unset';
    window.dispatchEvent(new CustomEvent('modalClose'));
  }
  // Missing: [isOpen] dependency!
}, []);
```

**Fix**:
```tsx
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
    window.dispatchEvent(new CustomEvent('modalOpen'));
  } else {
    document.body.style.overflow = 'unset';
    window.dispatchEvent(new CustomEvent('modalClose'));
  }
}, [isOpen]); // ADD DEPENDENCY
```

**Similar fixes needed in**:
- Header.tsx (modal event listeners)
- Hero.tsx (any state-dependent effects)

**Test**:
- [ ] Modal blur effect works when opening/closing
- [ ] ESLint: Run `eslint --fix` to catch all missing deps

---

### 1.3 Remove Inline Styles → CSS Classes
**Impact**: Performance (10-15%), Maintainability  
**Effort**: 3 hours  
**Priority**: P0

**Create**: `styles/components.css`

```css
/* Buttons */
.btn-primary {
  @apply px-12 lg:px-16 py-5 lg:py-6 rounded-full text-trueme-button uppercase;
  @apply transition-luxury hover:hover-luxury-lift hover:hover-luxury-scale gpu-accelerated;
  background-color: #ff751f;
  color: white;
}

.btn-secondary {
  @apply px-6 lg:px-8 py-2 lg:py-3 text-trueme-button uppercase rounded-full;
  @apply transition-luxury hover:hover-luxury-lift hover:hover-luxury-scale gpu-accelerated;
  background-color: #d2ff72;
  color: #3D6B3D;
}

/* Form fields */
.form-input {
  @apply w-full px-4 py-3 border-2 rounded-lg transition-colors focus:outline-none;
  border-color: #F5F1ED;
  color: #427047;
}

.form-input:focus {
  border-color: #ff751f;
}

/* Sections */
.section-base {
  @apply w-full px-3 lg:px-20 py-16 lg:py-24;
}

.section-container {
  @apply mx-auto;
  max-width: 1440px;
}

/* Cards */
.card {
  @apply rounded-3xl overflow-hidden shadow-lg transition-luxury;
  @apply hover:hover-luxury-lift hover:hover-luxury-shadow gpu-accelerated;
}

.card-header {
  @apply px-8 lg:px-10 pt-8 lg:pt-10 pb-6 lg:pb-8 border-b-2;
  border-color: #F5F1ED;
}

.card-body {
  @apply px-8 lg:px-10 py-8 lg:py-10;
}

.card-footer {
  @apply px-8 lg:px-10 pb-8 lg:pb-10 pt-5 lg:pt-8;
}

/* Image containers */
.image-container-rounded {
  @apply rounded-3xl overflow-hidden;
  background-color: #C4A574;
}

.image-fill {
  @apply w-full h-full object-cover;
}
```

**Update Components**:

**Before**:
```tsx
<button
  className="px-6 lg:px-8 py-2 lg:py-3 text-trueme-button uppercase rounded-full transition-luxury"
  style={{
    backgroundColor: '#d2ff72',
    color: '#3D6B3D',
  }}
>
  BOOK A CALL
</button>
```

**After**:
```tsx
<button className="btn-secondary">
  BOOK A CALL
</button>
```

**Files to update**:
- Header.tsx
- Hero.tsx
- PriceSection.tsx
- BookingModal.tsx
- All section components

**Verification**:
- [ ] No inline style attributes (except dynamic values)
- [ ] Lighthouse score improves
- [ ] CSS file-size comparison

---

### 1.4 Extract Reusable ExpandableSection Component
**Impact**: Code quality, Maintainability  
**Effort**: 2.5 hours  
**Priority**: P0

**Create**: `components/ExpandableSection.tsx`

```tsx
'use client';

import { useState, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface ExpandableSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  backgroundColor: string;
  headerColor: string;
  headerTextColor: string;
  expandedMaxHeight?: number; // Default 2500px
}

export default function ExpandableSection({
  id,
  title,
  children,
  backgroundColor,
  headerColor,
  headerTextColor,
  expandedMaxHeight = 2500,
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isInView } = useInView();

  return (
    <div id={id}>
      {/* Header section */}
      <section
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3 lg:px-20 py-16 lg:py-24 cursor-pointer transition-all gpu-accelerated ${
          isInView ? 'animate-luxury-fade-in' : 'opacity-0'
        }`}
        style={{ backgroundColor }}
      >
        <div className="mx-auto" style={{ maxWidth: '1440px' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-trueme-title" style={{ color: headerTextColor }}>
              {title}
            </h2>
            <div
              className="flex-shrink-0 ml-8"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                stroke={headerTextColor}
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
                stroke={headerTextColor}
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

      {/* Content section */}
      <section
        className="overflow-hidden px-3 lg:px-20 transition-all"
        style={{
          backgroundColor,
          pointerEvents: isOpen ? 'auto' : 'none',
          maxHeight: isOpen ? `${expandedMaxHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="py-16 lg:py-24">
          <div className="mx-auto" style={{ maxWidth: '1440px' }}>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
```

**Usage Example** (MethodsSection.tsx):
```tsx
'use client';

import ExpandableSection from '@/components/ExpandableSection';

export default function MethodsSection() {
  const methods = [/* ... */];

  return (
    <ExpandableSection
      id="methods"
      title="Methods"
      backgroundColor="#d2ff72"
      headerTextColor="#427047"
      headerColor="#d2ff72"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col">
          <p className="text-trueme-subheading mb-6 lg:mb-8" style={{ color: '#ff751f' }}>
            We work through shared experiences and practices such as:
          </p>
          <ul className="space-y-4 lg:space-y-5">
            {methods.slice(0, 5).map((method, index) => (
              <li
                key={index}
                className="text-trueme-body flex items-start"
                style={{ color: '#427047' }}
              >
                <span className="mr-4 flex-shrink-0">•</span>
                <span>{method}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-end">
          <ul className="space-y-4 lg:space-y-5">
            {methods.slice(5).map((method, index) => (
              <li
                key={index}
                className="text-trueme-body flex items-start"
                style={{ color: '#427047' }}
              >
                <span className="mr-4 flex-shrink-0">•</span>
                <span>{method}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ExpandableSection>
  );
}
```

**Files to refactor**:
- [ ] MethodsSection.tsx (use ExpandableSection)
- [ ] ResultsSection.tsx (use ExpandableSection)
- [ ] StorytellingSection.tsx (use ExpandableSection)

**Savings**:
- 150+ lines of duplicate code removed
- 3 components become 5 lines each

---

## Phase 2: PERFORMANCE & OPTIMIZATION (Week 3-4) 🟠

### 2.1 Implement Next.js Image Component
**Impact**: 30-50% image payload reduction  
**Effort**: 4 hours  
**Priority**: P1

Create optimization script first:

```bash
# Batch convert images to WebP
brew install imagemagick # macOS

# Convert all images to WebP
for file in public/*.png public/*.jpg; do
  convert "$file" "${file%.*}.webp"
done
```

**Update all image usage**:

**Before**:
```tsx
<img src="/img_001_01.png" alt="Meet like-minded people" className="w-full h-full object-cover" />
```

**After**:
```tsx
import Image from 'next/image';

<Image
  src="/img_001_01.png"
  alt="Meet like-minded people"
  width={800}
  height={600}
  priority={false}
  quality={80}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  className="w-full h-full object-cover"
/>
```

**Priority image** (above fold):
```tsx
<Image src="/img_tm_logo.png" priority={true} />
<Image src="/tm_010_hero.mp4" /> // Video doesn't use Image component
```

---

### 2.2 Font Optimization
**Impact**: 20-30% font reduction  
**Effort**: 2 hours  
**Priority**: P1

**Action plan**:

1. Convert TTF to WOFF2:
```bash
# Using online converter or:
# sudo apt install fonttools

python3 -m fontTools.ttLib.woff2 BricolageGrotesque.ttf
```

2. Update font loading:
```css
@font-face {
  font-family: 'BricolageGrotesque';
  src: url('/Fonts/BricolageGrotesque.woff2') format('woff2'),
       url('/Fonts/BricolageGrotesque.woff') format('woff'),
       url('/Fonts/BricolageGrotesque.ttf') format('truetype');
  font-weight: 400 700 900;
  font-display: block;
  preload-font: true; // Preload for LCP improvement
}
```

3. Add font preload to layout:
```tsx
<head>
  <link
    rel="preload"
    href="/Fonts/BricolageGrotesque.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</head>
```

---

### 2.3 Add Core Web Vitals Monitoring
**Impact**: Visibility into performance  
**Effort**: 1.5 hours  
**Priority**: P1

Install:
```bash
npm install web-vitals
```

Add to layout:

```tsx
import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export default function RootLayout({ children }) {
  useEffect(() => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);

    // Send to analytics
    // sendToAnalytics({CLS, FID, FCP, LCP, TTFB})
  }, []);

  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

---

## Phase 3: ACCESSIBILITY & QUALITY (Week 5-6) 🟠

### 3.1 Add ARIA Labels & Fix Semantic HTML
**Impact**: Accessibility compliance  
**Effort**: 3 hours  
**Priority**: P1

**Create accessibility audit document**:

```markdown
# Accessibility Audit Checklist

- [ ] All buttons have aria-label or visible text
- [ ] Expandable sections have aria-expanded
- [ ] Form inputs have associated labels
- [ ] Images have alt text (not empty)
- [ ] Modal has role="dialog"
- [ ] Color contrast >= WCAG AA
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Heading hierarchy correct (h1, h2, h3...)
```

**Example fixes**:

**Header Navigation**:
```tsx
<nav aria-label="Main navigation">
  <a href="#about" className="nav-link">About</a>
  {/* ... */}
</nav>
```

**Buttons**:
```tsx
<button
  onClick={() => setIsOpen(!isOpen)}
  aria-expanded={isOpen}
  aria-controls="methods-content"
  aria-label="Expand methods section"
>
  {/* icon or text */}
</button>

<div id="methods-content" role="region">
  {/* content */}
</div>
```

**Form Labels**:
```tsx
<label htmlFor="name-input">Your name</label>
<input
  id="name-input"
  type="text"
  name="name"
  required
  aria-required="true"
/>
```

**Images**:
```tsx
{/* BAD */}
<img src="/img.png" alt="" />

{/* GOOD */}
<img src="/img.png" alt="Julie Burtasova, practical psychologist" />
```

---

### 3.2 Add Form Validation & Error Handling
**Impact**: User experience, Data quality  
**Effort**: 3 hours  
**Priority**: P1

**Create**: `lib/formValidation.ts`

```typescript
export interface FormValidationRules {
  name: { required: boolean; minLength?: number; maxLength?: number };
  phone: { required: boolean; pattern?: RegExp };
  email: { required: boolean; pattern?: RegExp };
  source: { required?: boolean };
  message: { maxLength?: number };
}

export const BOOKING_FORM_RULES: FormValidationRules = {
  name: { required: true, minLength: 2, maxLength: 100 },
  phone: { required: true, pattern: /^\+?\d{10,15}$/ },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  source: { required: false },
  message: { maxLength: 1000 },
};

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name?.trim()) {
    errors.name = 'Name is required';
  } else if (data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!data.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^\+?\d{10,15}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = 'Please enter a valid phone number (e.g., +1234567890)';
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (data.message && data.message.length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return errors;
}
```

**Update BookingModal.tsx**:

```tsx
'use client';

import { useState } from 'react';
import { validateForm, FormErrors } from '@/lib/formValidation';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({/* ... */});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value}));
    
    // Real-time validation
    if (errors[name]) {
      const newErrors = validateForm({...formData, [name]: value});
      setErrors(prev => ({
        ...prev,
        [name]: newErrors[name],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Full validation
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({name: '', phone: '', email: '', source: '', message: ''});
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Form with error displays
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>
      {/* ... repeat for other fields */}
    </form>
  );
}
```

---

## Phase 4: TESTING & MONITORING (Week 7-8) 🟡

### 4.1 Add Unit Tests
**Effort**: 8 hours  
**Priority**: P2

Setup:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

Create test files:

```tsx
// components/ExpandableSection.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExpandableSection from './ExpandableSection';

describe('ExpandableSection', () => {
  it('starts closed', () => {
    render(
      <ExpandableSection title="Test">
        <div>Hidden content</div>
      </ExpandableSection>
    );
    
    expect(screen.queryByText('Hidden content')).not.toBeVisible();
  });

  it('expands when header is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ExpandableSection title="Test">
        <div>Hidden content</div>
      </ExpandableSection>
    );
    
    await user.click(screen.getByText('Test'));
    expect(screen.getByText('Hidden content')).toBeVisible();
  });

  it('collapses when clicked again', async () => {
    const user = userEvent.setup();
    render(
      <ExpandableSection title="Test">
        <div>Hidden content</div>
      </ExpandableSection>
    );
    
    const header = screen.getByText('Test').closest('section');
    await user.click(header);
    await user.click(header);
    expect(screen.queryByText('Hidden content')).not.toBeVisible();
  });
});
```

Test files needed:
- [ ] BookingModal.test.tsx
- [ ] FormValidation.test.ts
- [ ] Header.test.tsx
- [ ] ExpandableSection.test.tsx

---

### 4.2 Add E2E Tests with Cypress
**Effort**: 6 hours  
**Priority**: P2

```bash
npm install --save-dev cypress
npx cypress open
```

Create test:

```typescript
// cypress/e2e/booking-flow.cy.ts
describe('Booking Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open booking modal when BOOK A CALL is clicked', () => {
    cy.get('button').contains('BOOK A CALL').first().click();
    cy.get('[role="dialog"]').should('be.visible');
  });

  it('should validate required fields', () => {
    cy.get('button').contains('BOOK A CALL').first().click();
    cy.get('button').contains('Send').click();
    cy.get('#name-error').should('be.visible');
  });

  it('should submit form successfully', () => {
    cy.get('button').contains('BOOK A CALL').first().click();
    cy.get('#name-input').type('John Doe');
    cy.get('#phone-input').type('+1234567890');
    cy.get('#email-input').type('john@example.com');
    cy.get('button').contains('Send').click();
    cy.contains('Thank you').should('be.visible');
  });
});
```

---

### 4.3 Add Error Monitoring (Sentry)
**Effort**: 2 hours  
**Priority**: P2

```bash
npm install @sentry/nextjs
```

Configure:

```tsx
// sentry.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
});
```

---

## Phase 5: ANALYTICS & SEO (Week 9) 🟡

### 5.1 Implement GA4 Tracking
**Effort**: 2 hours

```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </>
  );
}
```

Track custom events:

```tsx
import { useEffect } from 'react';

export function useAnalytics() {
  const trackEvent = (event: string, data?: object) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', event, data);
    }
  };

  return { trackEvent };
}

// Usage in components
const { trackEvent } = useAnalytics();
<button onClick={() => trackEvent('booking_modal_opened')}>
  BOOK A CALL
</button>
```

---

### 5.2 Add Structured Data (JSON-LD)
**Effort**: 2 hours

```tsx
// components/StructuredData.tsx
export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TRUE ME Camp",
    "url": "https://truemecamp.com",
    "logo": "https://truemecamp.com/img_tm_logo.png",
    "description": "A week that can change how a teenager feels about themselves",
    "sameAs": [
      "https://instagram.com/truemecamp",
      "https://telegram.me/truemecamp"
    ],
    "event": {
      "@type": "Event",
      "name": "TRUE ME Camp 2024",
      "startDate": "2024-07-01",
      "endDate": "2024-07-07",
      "location": {
        "@type": "Place",
        "name": "Quinta da Enxara, Mafra, Portugal"
      },
      "offers": {
        "@type": "Offer",
        "price": "850",
        "priceCurrency": "EUR"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

---

## Summary Timeline

```
Week 1-2:  Critical fixes (events, deps, styles) ████████
Week 3-4:  Performance (images, fonts, monitoring) ███████
Week 5-6:  Accessibility & validation ███████
Week 7-8:  Testing (unit + E2E) ██████
Week 9:    Analytics & SEO ██

Total: ~40 hours of development work
```

---

## Success Metrics

Track improvement with:

```
Performance:
- ✅ Lighthouse score: 85 → 95+
- ✅ LCP (Largest Contentful Paint): < 2.5s
- ✅ CLS (Cumulative Layout Shift): < 0.1
- ✅ FID (First Input Delay): < 100ms

Accessibility:
- ✅ WCAG AA compliance 100%
- ✅ Zero critical accessibility issues
- ✅ Screen reader compatible

Quality:
- ✅ Zero console errors
- ✅ Test coverage > 80%
- ✅ No memory leaks

Business:
- ✅ Form completion rate tracking
- ✅ Reduced bounce rate
- ✅ Improved conversion rate
```

---

## Dependencies to Add

```bash
npm install \
  web-vitals \
  next-image-export-optimizer \
  @next/third-parties \
  sentry-nextjs \
  dompurify

npm install --save-dev \
  jest \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  cypress \
  eslint-plugin-jsx-a11y
```

---

## Documentation to Create

- [ ] TESTING.md - How to run tests
- [ ] DEPLOYMENT.md - How to deploy changes
- [ ] ANALYTICS.md - What metrics to track
- [ ] ACCESSIBILITY.md - Audit checklist
- [ ] PERFORMANCE.md - Optimization guide

This roadmap ensures systematic improvement while maintaining stability.
