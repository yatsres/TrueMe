# TRUE ME Camp - Font Styles Guide

## Overview
All typography is defined in `tailwind.config.js` under the `fontSize` extension. The page uses a system of semantic font classes that scale responsively.

---

## Font Style Classes

### 1. **text-trueme-title**
- **Size**: 56px
- **Font Weight**: 900 (Black)
- **Line Height**: 1.1 (110%)
- **Letter Spacing**: -0.02em
- **Usage**: Section titles, major headings (e.g., "Facilitators", "Julie Burtasova")
- **Applies to**: H2, H3 tags for primary section headings

### 2. **text-trueme-heading**
- **Size**: 44px
- **Font Weight**: 700 (Bold)
- **Line Height**: 1.1 (110%)
- **Letter Spacing**: -0.04em
- **Usage**: Subheadings, secondary titles (e.g., "Our facilitators are educated and experienced...")
- **Applies to**: H3 tags for secondary content headings

### 3. **text-trueme-subheading**
- **Size**: 36px
- **Font Weight**: 900 (Black)
- **Line Height**: 1.2 (120%)
- **Letter Spacing**: -0.02em
- **Usage**: Alternative bold subheadings
- **Applies to**: Emphasis text and highlighted sections

### 4. **text-trueme-subtitle**
- **Size**: 32px
- **Font Weight**: 700 (Bold)
- **Line Height**: 1.3 (130%)
- **Letter Spacing**: -0.02em
- **Usage**: Medium-weight headings, descriptive titles
- **Applies to**: Supporting headings and introductions

### 5. **text-trueme-large-text**
- **Size**: 20px
- **Font Weight**: 400 (Regular)
- **Line Height**: 1.6 (160%)
- **Letter Spacing**: -0.01em
- **Usage**: Large body text, important paragraphs, benefits/results text
- **Applies to**: Large readable content blocks (ResultsSection, WhatTeensSection, MethodsSection)

### 6. **text-trueme-body**
- **Size**: 16px
- **Font Weight**: 400 (Regular)
- **Line Height**: 1.6 (160%)
- **Letter Spacing**: 0em
- **Usage**: Main body text, default paragraph text
- **Applies to**: P tags, list items, descriptions (facilitators section)

### 7. **text-trueme-nav**
- **Size**: 14px
- **Font Weight**: 600 (Semibold)
- **Line Height**: 1.2 (120%)
- **Letter Spacing**: 0em
- **Usage**: Navigation, menu items, labels
- **Applies to**: Header navigation, menu text

### 8. **text-trueme-button**
- **Size**: 16px
- **Font Weight**: 700 (Bold)
- **Line Height**: 1.2 (120%)
- **Letter Spacing**: -0.01em
- **Usage**: Button text, call-to-action labels
- **Applies to**: All buttons (BOOK A CALL, READ MORE, etc.)

### 9. **text-trueme-caption**
- **Size**: 16px
- **Font Weight**: 700 (Bold)
- **Line Height**: 1.6 (160%)
- **Letter Spacing**: 0em
- **Usage**: Captions, intro text, emphasis
- **Applies to**: Introductory paragraphs and highlighted captions

---

## Hero Section Font Sizes

### Hero Titles (Responsive)
- **text-hero-lg**: 120px, line-height 0.9, letter-spacing -0.06em
- **text-hero-md**: 84px, line-height 0.9, letter-spacing -0.06em
- **text-hero-sm**: 52px, line-height 0.9, letter-spacing -0.06em

### Section Titles (Responsive)
- **text-section-lg**: 128px, line-height 0.9, letter-spacing -0.05em
- **text-section-md**: 92px, line-height 0.9, letter-spacing -0.05em
- **text-section-sm**: 64px, line-height 0.9, letter-spacing -0.05em

---

## Font Weight Scale

| Weight | Name | Usage |
|--------|------|-------|
| 400 | Regular | Body text, descriptions |
| 600 | Semibold | Navigation, labels |
| 700 | Bold | Headings, buttons, captions |
| 900 | Black | Titles, major emphasis |

---

## Letter Spacing Scale

| Value | Usage |
|-------|-------|
| -0.06em | Hero/Section titles (tight, dramatic) |
| -0.04em | Headings (tight) |
| -0.02em | Titles, subtitles (compact) |
| -0.01em | Large text, buttons (slight compression) |
| 0em | Body, nav, caption (natural) |

---

## Line Height Scale

| Value | Usage |
|-------|-------|
| 0.9 | Hero/Section titles (tight, powerful) |
| 1.1 | Headings (compact readability) |
| 1.2 | Navigation, buttons, subtitles |
| 1.3 | Subtitles (breathing room) |
| 1.6 | Body, captions (readable paragraphs) |

---

## Current Page Usage

### Header & Hero
- Logo: Auto-sized
- Main headline: `text-trueme-heading` (44px, 700, -0.04em)
- Event details: 18-20px custom sizes
- Button: `text-trueme-button` (16px, 700)

### About Section
- Section title: Custom 100px (black, -0.06em)
- Content: `text-trueme-body` (16px)
- Button: `text-trueme-button` (16px, 700)

### Results Section (031)
- Cards: `text-trueme-large-text` (20px, 400)

### What Teens Learn (042)
- Cards: `text-trueme-large-text` (20px, 400)

### Methods Section (052)
- Cards: `text-trueme-large-text` (20px, 400)

### Facilitators Section (071 & 072)
- Section title: `text-trueme-title` (56px, 900)
- Facilitator name: `text-trueme-title` (56px, 900)
- Subheading: `text-trueme-heading` (44px, 700)
- Body text: `text-trueme-body` (16px, 400)
- Caption: `text-trueme-caption` (16px, 700)
- Button: `text-trueme-button` (16px, 700)

---

## Best Practices

1. **Hierarchy**: Use font sizes from largest (title) to smallest (nav/caption) for clear content hierarchy
2. **Contrast**: Always pair regular (400) with bold (700) or black (900) for contrast
3. **Readability**: Maintain 1.6 line height for body text blocks
4. **Emphasis**: Use letter-spacing -0.04em or tighter for emphasis
5. **Spacing**: Combine font sizes with appropriate padding/margin for breathing room

---

## Implementation Examples

```html
<!-- Section Title -->
<h2 class="text-trueme-title" style="color: #ff751f">Facilitators</h2>

<!-- Heading with Orange Color -->
<h3 class="text-trueme-heading" style="color: #ff751f">Our facilitators are educated and experienced</h3>

<!-- Large Text Content -->
<div class="text-trueme-large-text text-gray-800">
  This is important content that needs to be read clearly.
</div>

<!-- Regular Body Text -->
<p class="text-trueme-body text-gray-800">
  Standard paragraph text goes here.
</p>

<!-- Button Text -->
<button class="text-trueme-button uppercase">READ MORE</button>

<!-- Caption/Intro Text -->
<span class="text-trueme-caption" style="color: #427047">
  Introductory or highlighted text
</span>
```

---

## Mobile Responsiveness

Currently, the design uses fixed font sizes across all breakpoints. To implement responsive typography in the future, consider:

- Mobile: Scale down by 20-30%
- Tablet: 80-90% of desktop
- Desktop: Full size as defined

Use Tailwind's responsive prefixes:
```html
<h2 class="text-base lg:text-trueme-title">Responsive Title</h2>
```
