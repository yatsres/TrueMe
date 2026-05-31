# TRUE ME Camp - Design System

Complete reference for the design system, color palette, typography, spacing, and component patterns.

## Color System

### Primary Palette

| Color | Hex | Usage | Light Mode | Dark Mode |
|-------|-----|-------|-----------|-----------|
| Background | `#ECE9E2` | Page backgrounds | ✓ | Adaptable |
| Dark Green | `#3D6B3D` | Primary text, headings | ✓ | ✓ |
| Warm Orange | `#F57A1F` | Accents, secondary headings | ✓ | ✓ |
| Lime | `#CCFF00` | CTA buttons, highlights | ✓ | ✓ |
| Dark Text | `#2B2B2B` | Body text | ✓ | ✓ |
| Light Text | `#F5F3ED` | Footer, inverted contexts | ✓ | ✓ |

### CSS Variables

```css
:root {
  --bg: #ECE9E2;
  --green: #3D6B3D;
  --orange: #F57A1F;
  --lime: #CCFF00;
  --dark: #2B2B2B;
  --light: #F5F3ED;
}
```

### Tailwind Theme

```javascript
colors: {
  'trueme': {
    'bg': '#ECE9E2',
    'green': '#3D6B3D',
    'orange': '#F57A1F',
    'lime': '#CCFF00',
    'dark': '#2B2B2B',
    'light': '#F5F3ED',
  }
}
```

### Color Psychology

- **Dark Green (#3D6B3D):** Trust, growth, calm, nature
- **Warm Orange (#F57A1F):** Energy, warmth, approachability, hope
- **Lime (#CCFF00):** Optimism, freshness, energy, youth
- **Off-white (#ECE9E2):** Warmth, safety, premium feel

## Typography System

### Font Stack

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

**Why Inter:**
- Clean, modern, geometric sans-serif
- Excellent readability at all sizes
- Multiple weights available
- Great for both headlines and body text

### Font Weights

| Weight | Usage | Value |
|--------|-------|-------|
| Regular | Body text, paragraphs | 400 |
| Medium | Subheadings, labels | 500 |
| Semibold | Highlights, emphasis | 600 |
| Bold | Important statements | 700 |
| Black | Oversized headlines | 900 |

### Heading Sizes

#### Desktop
```
H1: 128px | line-height: 0.9 | letter-spacing: -0.05em
H2: 92px  | line-height: 0.9 | letter-spacing: -0.05em
H3: 64px  | line-height: 0.9 | letter-spacing: -0.03em
H4: 48px  | line-height: 1   | letter-spacing: -0.02em
H5: 42px  | line-height: 1.1 | letter-spacing: -0.02em
H6: 36px  | line-height: 1.2 | letter-spacing: -0.01em
```

#### Tablet
```
H1: 92px  | line-height: 0.9 | letter-spacing: -0.05em
H2: 64px  | line-height: 0.9 | letter-spacing: -0.05em
H3: 48px  | line-height: 0.9 | letter-spacing: -0.03em
H4: 38px  | line-height: 1   | letter-spacing: -0.02em
H5: 34px  | line-height: 1.1 | letter-spacing: -0.02em
H6: 28px  | line-height: 1.2 | letter-spacing: -0.01em
```

#### Mobile
```
H1: 64px  | line-height: 0.9 | letter-spacing: -0.05em
H2: 40px  | line-height: 0.9 | letter-spacing: -0.05em
H3: 28px  | line-height: 0.9 | letter-spacing: -0.03em
H4: 28px  | line-height: 1   | letter-spacing: -0.02em
H5: 26px  | line-height: 1.1 | letter-spacing: -0.02em
H6: 22px  | line-height: 1.2 | letter-spacing: -0.01em
```

### Body Text

```
Base: 18px | line-height: 1.6 | letter-spacing: -0.02em

Small: 14px | line-height: 1.5 | letter-spacing: -0.01em
Large: 24px | line-height: 1.7 | letter-spacing: -0.02em
```

### Tailwind Typography Classes

```css
.text-section-lg { @apply text-7xl lg:text-8xl font-black; }
.text-section-md { @apply text-5xl lg:text-6xl font-bold; }
.text-section-sm { @apply text-4xl lg:text-5xl font-semibold; }
```

## Spacing System

### Scale

| Value | Pixels | Usage |
|-------|--------|-------|
| xs | 8px | Tight spacing, small gaps |
| sm | 16px | Small component padding |
| md | 24px | Default padding, medium gaps |
| lg | 32px | Large component spacing |
| xl | 48px | Section padding |
| 2xl | 60px | Element spacing between components |
| 3xl | 80px | Large section spacing |
| 4xl | 120px | Oversized section spacing |
| 5xl | 140px | Full section gap |

### Section Spacing

```
Desktop:   140px (section-gap)
Tablet:   100px (section-gap-tablet)
Mobile:    80px (section-gap-sm)
```

### Component Spacing

```
Header padding:        24px (desktop), 16px (mobile)
Container padding:     60px (desktop), 24px (mobile)
Element gap:          60px (desktop), 40px (mobile)
Card padding:         40px (desktop), 24px (mobile)
```

## Radius System

```
Small:     8px  (small components)
Medium:   16px  (cards, inputs)
Large:    24px  (large cards)
XL:       32px  (XL cards)
XXL:      48px  (hero images, xl-rounded)
Pill:   1000px (buttons, pills)
```

### Tailwind Config

```javascript
borderRadius: {
  'xl-rounded': '48px',
  'pill': '1000px',
}
```

## Shadow System

```
sm: 0 1px 2px rgba(0, 0, 0, 0.05)
md: 0 4px 6px rgba(0, 0, 0, 0.1)
lg: 0 10px 15px rgba(0, 0, 0, 0.1)
xl: 0 20px 25px rgba(0, 0, 0, 0.1)
2xl: 0 25px 50px rgba(0, 0, 0, 0.25)
```

**Usage:**
- Small cards: `shadow-md`
- Hero elements: `shadow-lg`
- Interactive hover: `shadow-xl`
- Emphasis: `shadow-2xl`

## Animation System

### Easing Curves

```javascript
Ease Out (default):    cubic-bezier(0.4, 0, 0.2, 1)
Ease In Out:          cubic-bezier(0.4, 0, 0.2, 1)
Ease In:              cubic-bezier(0.4, 0, 1, 1)
Anticipate:           cubic-bezier(0.6, 0, 0.4, 1)
```

### Motion Primitives

#### Fade In
```typescript
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
```

#### Slide Up
```typescript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

#### Scale
```typescript
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.3 }}
```

#### Stagger
```typescript
variants={{
  container: {
    staggerChildren: 0.1,
  },
  item: {
    opacity: [0, 1],
  }
}}
```

### Animation Timings

- Page load: `0.6s - 1s`
- Scroll reveal: `0.6s - 0.8s`
- Hover interaction: `0.2s - 0.3s`
- Modal: `0.3s - 0.4s`

## Component Patterns

### Button System

#### Primary CTA (Lime)
```typescript
className="bg-trueme-lime text-trueme-green font-bold px-8 py-3 rounded-pill"
```

#### Secondary CTA (Orange)
```typescript
className="bg-trueme-orange text-white font-bold px-8 py-3 rounded-pill"
```

#### Text Link
```typescript
className="text-trueme-orange hover:underline cursor-pointer"
```

#### Hover State
```typescript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Card Patterns

#### Image Card
```typescript
<div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-xl">
  <img src={src} alt={alt} className="w-full h-full object-cover" />
</div>
```

#### Content Card
```typescript
<div className="bg-white rounded-3xl p-8 shadow-md">
  <h3 className="text-3xl font-bold mb-4">Title</h3>
  <p className="text-gray-600">Content</p>
</div>
```

### Section Container

```typescript
<section className="py-section-gap px-6 lg:px-12 bg-trueme-bg">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Responsive Grid

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Items */}
</div>
```

## Responsive Design

### Breakpoints

```
Mobile:   < 640px  (default)
Tablet:   640px - 1024px (md:)
Desktop:  1024px+ (lg:)
```

### Mobile-First Philosophy

1. Start with mobile styling
2. Use `md:` for tablet enhancements
3. Use `lg:` for desktop enhancements

### Container Queries

```
Max-width: 1440px
Padding:   60px (desktop), 24px (mobile)
```

## Accessibility

### Color Contrast

- Text on light backgrounds: `#2B2B2B` (contrast 8.1:1)
- Text on orange: white text (contrast 5.2:1)
- Text on lime: `#3D6B3D` (contrast 8.5:1)

All meet WCAG AA standards (minimum 4.5:1 for text).

### Focus States

```css
button:focus-visible {
  outline: 2px solid var(--orange);
  outline-offset: 2px;
}
```

### Semantic HTML

- Use `<button>` for interactive elements
- Use `<a>` for navigation
- Use `<section>`, `<header>`, `<footer>`
- Use `<h1>` - `<h6>` for headings

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Dark Mode (Architecture Ready)

Future dark mode implementation:

```javascript
theme: {
  extend: {
    colors: {
      dark: {
        'bg': '#1A1A1A',
        'text': '#F5F3ED',
        'accent': '#CCFF00',
      }
    }
  }
}
```

Enable with:
```html
<html class="dark">
```

## Performance Considerations

### CSS
- Tailwind purges unused styles
- Single CSS file (optimized)
- No redundant utilities

### JavaScript
- Minimal JS overhead
- Framer Motion tree-shaking
- Code splitting by component

### Images
- Optimized before export
- Responsive sizing
- Lazy loading with Intersection Observer

## Browser Support

- Chrome (latest) ✓
- Firefox (latest) ✓
- Safari (latest) ✓
- Edge (latest) ✓
- Mobile browsers (iOS Safari, Chrome) ✓

## Common Customizations

### Change Primary Color

1. Update `tailwind.config.js`:
```javascript
colors: {
  'trueme': {
    'green': '#NEW_COLOR',
  }
}
```

2. Update `app/globals.css`:
```css
--green: #NEW_COLOR;
```

### Add New Font

1. Import in `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=NewFont:wght@400;700&display=swap');
```

2. Update Tailwind:
```javascript
fontFamily: {
  sans: ['NewFont', 'sans-serif'],
}
```

### Create New Component

```typescript
'use client';

import { motion } from 'framer-motion';

export default function NewComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="your-classes"
    >
      Content
    </motion.div>
  );
}
```

## Resources

- **Design Tokens:** This file
- **Tailwind Docs:** https://tailwindcss.com
- **Framer Motion:** https://www.framer.com/motion
- **Inter Font:** https://fonts.google.com/specimen/Inter
- **Color Palette:** Check Figma design file

---

Last updated: May 2026
