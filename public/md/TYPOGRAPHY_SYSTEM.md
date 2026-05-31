# TRUE ME CAMP Typography System

## Overview
A unified typography system with 9 font styles based on the Facilitators and Location sections design. All font rules follow strict size, weight, line-height, and letter-spacing standards.

**Style Names:** Heading, Subtitle, Subheading, Body, Button, Caption

---

## Typography Rules

### 1. **Title** - `text-trueme-title`
**Usage:** Main section headings (e.g., "Facilitators")

- **Font Size:** 56px
- **Font Weight:** 900 (black)
- **Line Height:** 1.1 (1.1 relative)
- **Letter Spacing:** -0.02em
- **Common Elements:** Section headings, h2 tags

```jsx
<h2 className="text-trueme-title" style={{ color: '#ff751f' }}>
  Facilitators
</h2>
```

---

### 2. **Heading** - `text-trueme-heading`
**Usage:** Subheadings and descriptive headings (e.g., green block text)

- **Font Size:** 44px
- **Font Weight:** 700 (bold)
- **Line Height:** 1.1 (relative)
- **Letter Spacing:** -0.04em
- **Common Elements:** Section subheadings, h3 tags

```jsx
<h3 className="text-trueme-heading" style={{ color: '#427047' }}>
  Our facilitators are educated and experienced in areas such as:
</h3>
```

---

### 3. **Subheading** - `text-trueme-subheading`
**Usage:** Large emphasized text blocks (e.g., location highlights)

- **Font Size:** 36px
- **Font Weight:** 900 (black)
- **Line Height:** 1.2 (relative)
- **Letter Spacing:** -0.02em
- **Common Elements:** Large call-to-action text, emphasis paragraphs, featured quotes

```jsx
<p className="text-trueme-subheading" style={{ color: '#ff751f' }}>
  Everything is designed so teenagers can feel comfortable, supported, and at ease during their time with us.
</p>
```

---

### 4. **Subtitle** - `text-trueme-subtitle`
**Usage:** Secondary headings and labels

- **Font Size:** 32px
- **Font Weight:** 700 (bold)
- **Line Height:** 1.3 (relative)
- **Letter Spacing:** -0.02em
- **Common Elements:** Secondary headings, labels

```jsx
<h3 className="text-trueme-subtitle" style={{ color: '#427047' }}>
  Expertise areas
</h3>
```

---

### 5. **Body** - `text-trueme-body`
**Usage:** Paragraph text, list items, body content

- **Font Size:** 16px
- **Font Weight:** 400 (normal)
- **Line Height:** 1.6 (relative)
- **Letter Spacing:** 0em (none)
- **Common Elements:** Paragraphs, lists, descriptive text

```jsx
<p className="text-trueme-body text-gray-800">
  They combine professional experience with something equally important: a real love for working with teenagers
</p>
```

---

### 6. **Button** - `text-trueme-button`
**Usage:** CTA buttons and interactive elements

- **Font Size:** 16px
- **Font Weight:** 700 (bold)
- **Line Height:** 1.2 (relative)
- **Letter Spacing:** -0.01em
- **Common Elements:** Buttons, CTAs, action links

```jsx
<button className="text-trueme-button uppercase">
  Book a Call
</button>
```

---

### 7. **Caption** - `text-trueme-caption`
**Usage:** Bold descriptive text within body content

- **Font Size:** 16px
- **Font Weight:** 700 (bold)
- **Line Height:** 1.6 (relative)
- **Letter Spacing:** 0em (none)
- **Common Elements:** Bold introductions, emphasis text, labels

```jsx
<span className="text-trueme-caption" style={{ color: '#427047' }}>
  Julie Burtasova is a Practical Psychologist...
</span>
```

---

## Implementation in Tailwind Config

All typography styles are defined in `tailwind.config.js` under the `fontSize` extension:

```javascript
'trueme-title': ['56px', { fontWeight: '900', lineHeight: '1.1', letterSpacing: '-0.02em' }],
'trueme-heading': ['44px', { fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.04em' }],
'trueme-subheading': ['36px', { fontWeight: '900', lineHeight: '1.2', letterSpacing: '-0.02em' }],
'trueme-subtitle': ['32px', { fontWeight: '700', lineHeight: '1.3', letterSpacing: '-0.02em' }],
'trueme-large-text': ['20px', { fontWeight: '400', lineHeight: '1.6', letterSpacing: '-0.01em' }],
'trueme-body': ['16px', { fontWeight: '400', lineHeight: '1.6', letterSpacing: '0em' }],
'trueme-button': ['16px', { fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.01em' }],
'trueme-caption': ['16px', { fontWeight: '700', lineHeight: '1.6', letterSpacing: '0em' }],
'trueme-nav': ['14px', { fontWeight: '600', lineHeight: '1.2', letterSpacing: '0.2em', textTransform: 'uppercase' }],
```

---

## Colors (Not Included in Typography Rules)

The 8-color palette is applied separately:
- **Primary Colors:** #d2ff72 (lime), #427047 (green-dark), #ff751f (orange)
- **Accent Colors:** #a3d4c4 (mint), #a8cb5e (green-olive), #d64c49 (coral), #ffa53b (orange-light), #fffb9f (yellow-light)

---

## Usage Examples

### Complete Heading with Color
```jsx
<h2 className="text-trueme-title" style={{ color: '#ff751f' }}>
  Facilitators
</h2>
```

### Complete Body with List
```jsx
<p className="text-trueme-body text-gray-800">
  They combine professional experience...
</p>

<ul className="space-y-3 text-trueme-body text-gray-800">
  <li>• Pedagogical and Psychological Education</li>
  <li>• Child Psychology</li>
</ul>
```

### Button with Styles
```jsx
<button className="px-12 py-5 rounded-full text-trueme-button uppercase" 
        style={{ backgroundColor: '#427047', color: 'white' }}>
  Book a Call
</button>
```

### Caption with Emphasis
```jsx
<p className="text-trueme-body text-gray-800">
  <span className="text-trueme-caption" style={{ color: '#427047' }}>
    Julie Burtasova is a Practical Psychologist...
  </span>
</p>
```

---

## Responsive Behavior

Typography sizes are NOT changed for responsive breakpoints in this system. The same sizes are applied across mobile and desktop to maintain consistency and simplicity.

If responsive typography is needed in the future:
- Mobile sizes can be adjusted by modifying the tailwind config
- Use `sm:text-` and `lg:text-` classes for specific overrides

---

## Components Using New Typography System

✅ **Updated:**
- Hero.tsx (heading + button)
- FacilitatorsSection.tsx (title, subtitle, body, caption, button)
- PriceSection.tsx (buttons)
- LocationSection.tsx (subheading)

📋 **Ready to Update:**
- AboutSection.tsx
- StorytellingSection.tsx
- MethodsSection.tsx
- ResultsSection.tsx
- WhatTeensSection.tsx
- CardGrid.tsx
- Header.tsx
- Footer.tsx

---

## Notes

- All typography is **color-agnostic** — colors are applied separately via inline `style` props
- Letter-spacing is intentionally tight for modern design aesthetic
- Line-heights are generous (1.6 for body) for readability
- Font weights follow a clear hierarchy: 400 (body) → 700 (subtitle/caption/button) → 900 (heading/subheading)
- Subheading bridges the gap between heading (56px) and subtitle (32px) at 36px for larger emphasis without being a full heading
