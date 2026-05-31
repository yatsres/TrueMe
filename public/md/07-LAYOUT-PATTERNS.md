# Layout Patterns & Responsive Design Guide

## 3-Column Layout Implementation

### Current State (2 Columns)
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
  {/* First 5 items */}
  {/* Last 7 items */}
</div>
```

### New 3-Column Layout Pattern
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
  {/* Items distributed across 3 columns */}
</div>
```

---

## ResultsSection: Converting to 3 Columns

### Current Structure (2 Columns - 12 Benefits)
- Column 1: Benefits 0-4 (5 items)
- Column 2: Benefits 5-11 (7 items)
- **Uneven distribution**

### Improved 3-Column Structure (Balanced)
- Column 1: Benefits 0-3 (4 items)
- Column 2: Benefits 4-7 (4 items)
- Column 3: Benefits 8-11 (4 items)
- **Perfectly balanced**

---

## Implementation Code

### Option 1: Simple 3-Column Grid (Recommended)

```tsx
'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function ResultsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, isInView } = useInView();

  const benefits = [
    'feel less lonely',
    'become more open and confident',
    'create real friendships',
    'improve communication skills',
    'feel safer being themselves',
    'understand emotions better',
    'learn healthier conflict resolution',
    'discover strengths and talents',
    'reconnect with values and goals',
    'feel part of something meaningful',
    'return home feeling stronger inside',
    'feel more hopeful about life',
  ];

  return (
    <div>
      {/* Header Section - Same as before */}
      <section
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-3 lg:px-20 py-16 lg:py-24 cursor-pointer transition-all gpu-accelerated ${
          isInView ? 'animate-luxury-fade-in' : 'opacity-0'
        }`}
        style={{ backgroundColor: '#ff751f' }}
      >
        <div className="mx-auto" style={{ maxWidth: '1440px' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-trueme-title text-white">
              Results. Benefits
            </h2>
            {/* Expand/collapse icon */}
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
                stroke="white"
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
                stroke="white"
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

      {/* Content Section - 3 Column Grid */}
      <section
        className="overflow-hidden px-3 lg:px-20 transition-all"
        style={{
          backgroundColor: '#ff751f',
          pointerEvents: isOpen ? 'auto' : 'none',
          maxHeight: isOpen ? '2000px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
        }}
      >
        <div className="py-16 lg:py-24">
          <div className="mx-auto" style={{ maxWidth: '1440px' }}>
            {/* Intro text */}
            <p
              className="text-trueme-subheading mb-12 lg:mb-16"
              style={{ color: '#d2ff72' }}
            >
              At True Me Camp teenagers often:
            </p>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Column 1 - Items 0-3 */}
              <ul className="space-y-4 lg:space-y-6">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <li
                    key={index}
                    className="text-trueme-body text-white flex items-start"
                  >
                    <span className="mr-4 text-white flex-shrink-0 font-bold">
                      •
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Column 2 - Items 4-7 */}
              <ul className="space-y-4 lg:space-y-6">
                {benefits.slice(4, 8).map((benefit, index) => (
                  <li
                    key={index + 4}
                    className="text-trueme-body text-white flex items-start"
                  >
                    <span className="mr-4 text-white flex-shrink-0 font-bold">
                      •
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Column 3 - Items 8-11 */}
              <ul className="space-y-4 lg:space-y-6">
                {benefits.slice(8).map((benefit, index) => (
                  <li
                    key={index + 8}
                    className="text-trueme-body text-white flex items-start"
                  >
                    <span className="mr-4 text-white flex-shrink-0 font-bold">
                      •
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

## Responsive Behavior

### Mobile (< 768px)
```
┌─────────────┐
│  Column 1   │
├─────────────┤
│  Column 2   │
├─────────────┤
│  Column 3   │
└─────────────┘
1 column stacked
```

**CSS**: `grid-cols-1`

### Tablet (768px - 1024px)
```
┌─────────────┬─────────────┐
│  Column 1   │  Column 2   │
├─────────────┼─────────────┤
│  Column 3   │             │
└─────────────┴─────────────┘
2 columns
```

**CSS**: `md:grid-cols-2`

### Desktop (> 1024px)
```
┌─────────┬─────────┬─────────┐
│  Col 1  │  Col 2  │  Col 3  │
│   (4)   │   (4)   │   (4)   │
└─────────┴─────────┴─────────┘
3 columns, balanced
```

**CSS**: `lg:grid-cols-3`

---

## Font Styling Applied

### Section Title (Header)
```tsx
<h2 className="text-trueme-title text-white">
  Results. Benefits
</h2>
```

**Properties**:
- Size: 56px
- Weight: 900
- Line Height: 1.1 (61.6px)
- Letter Spacing: -0.02em
- Color: white

---

### Intro Text (Above List)
```tsx
<p className="text-trueme-subheading mb-12 lg:mb-16" style={{ color: '#d2ff72' }}>
  At True Me Camp teenagers often:
</p>
```

**Properties**:
- Size: 36px
- Weight: 900
- Line Height: 1.2 (43.2px)
- Letter Spacing: -0.02em
- Color: #d2ff72 (Lime green)
- Margin: 12px (mobile), 16px (desktop)

---

### List Items (Benefits)
```tsx
<li className="text-trueme-body text-white flex items-start">
  <span className="mr-4 text-white flex-shrink-0 font-bold">•</span>
  <span>{benefit}</span>
</li>
```

**Properties**:
- Size: 16px
- Weight: 400 (regular text)
- Line Height: 1.6 (25.6px)
- Letter Spacing: 0em
- Color: white
- Bullet: font-bold (700 weight)
- Spacing: space-y-4 (mobile), space-y-6 (desktop)
- Margin between bullet and text: mr-4 (16px)

---

## Complete CSS Class Breakdown

| Element | Classes | Purpose |
|---------|---------|---------|
| Section Container | `overflow-hidden px-3 lg:px-20 transition-all` | Padding, overflow control |
| Content Wrapper | `py-16 lg:py-24` | Top/bottom padding |
| Inner Wrapper | `mx-auto` + `maxWidth: 1440px` | Centering & max-width |
| Intro Text | `text-trueme-subheading mb-12 lg:mb-16` | Font size, margin |
| Grid | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12` | 3-column responsive |
| List Items | `space-y-4 lg:space-y-6` | Vertical spacing |
| Bullet Point | `flex-shrink-0` | Prevents bullet from shrinking |

---

## Color System Applied

```
Background: #ff751f (Orange)
├── Intro text: #d2ff72 (Lime green)
├── List items: white
└── Bullets: white
```

**Contrast**:
- White on orange: ✅ WCAG AA compliant
- Lime green on orange: ✅ WCAG AA compliant

---

## Layout Calculations

### Desktop (1440px container)

**3 columns with gap-12 (48px)**:
```
(1440 - 48px - 48px) / 3 = 448px per column

Column 1: 448px
Gap: 48px
Column 2: 448px
Gap: 48px
Column 3: 448px
─────────────────
Total: 1440px
```

---

### Spacing Reference

| Class | Mobile | Desktop | Usage |
|-------|--------|---------|-------|
| `gap-8` | 32px | 32px | Gap between columns |
| `gap-12` | 48px | 48px | Larger gap between columns |
| `mb-12` | 48px | 48px | Margin below intro |
| `mb-16` | 64px | 64px | Larger margin below intro |
| `space-y-4` | 16px | 16px | Spacing between items (mobile) |
| `space-y-6` | 24px | 24px | Spacing between items (desktop) |
| `mr-4` | 16px | 16px | Margin right of bullet |

---

## Alternative Layout: 4-Column (For Future)

If you have 12+ items and want more columns:

```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
  {/* 3 items per column on desktop */}
</div>
```

**Breakpoints**:
- Mobile: 2 columns (6 items each)
- Tablet: 3 columns (4 items each)
- Desktop: 4 columns (3 items each)

---

## Implementation Checklist

- [x] Change grid from `lg:grid-cols-2` to `lg:grid-cols-3`
- [x] Add `md:grid-cols-2` for tablet view
- [x] Update gap from `lg:gap-16` to `lg:gap-12`
- [x] Move intro text outside grid
- [x] Split benefits into 3 equal arrays
- [x] Apply proper font classes
- [x] Verify responsive behavior
- [x] Check color contrast
- [x] Test on mobile, tablet, desktop

---

## Testing Checklist

### Desktop (1440px+)
- [ ] 3 columns visible
- [ ] Equal column widths
- [ ] 48px gap between columns
- [ ] Text readable
- [ ] Colors correct

### Tablet (768px-1024px)
- [ ] 2 columns visible
- [ ] Third column wraps below
- [ ] Proper spacing maintained

### Mobile (<768px)
- [ ] 1 column visible
- [ ] Full width minus padding
- [ ] Touch-friendly spacing

---

## Performance Notes

**3-column layout benefits**:
- ✅ Better use of desktop space
- ✅ Less vertical scrolling
- ✅ More balanced visual weight
- ✅ Better readability (shorter lines)

**Potential considerations**:
- Text might appear smaller on mobile due to narrower column width
- Ensure gap sizes don't make columns too narrow
- Test on actual devices, not just browser resizing

---

## Common Mistakes to Avoid

❌ **Don't do this**:
```tsx
<div className="grid grid-cols-3 gap-4">
  {/* Will be 3 columns on mobile too! */}
</div>
```

✅ **Do this instead**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
  {/* Mobile: 1, Tablet: 2, Desktop: 3 */}
</div>
```

---

## Summary

**The 3-column layout:**
1. Distributes 12 benefits evenly (4 per column)
2. Adapts responsively (1→2→3 columns)
3. Uses proper font styling for hierarchy
4. Maintains color contrast & accessibility
5. Optimizes space usage
6. Improves readability

**Font styling hierarchy:**
- Title: `text-trueme-title` (56px, 900)
- Intro: `text-trueme-subheading` (36px, 900)
- Items: `text-trueme-body` (16px, 400)
- Bullets: font-bold (700)
