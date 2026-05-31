# Font Styles Reference - Complete Documentation

## Overview
All font styles for TRUE ME Camp landing page are centralized and configured in `/styles/fontStyles.css`. This document provides complete reference for all available font styles with detailed descriptions, usage examples, and technical specifications.

---

## Font Families Used

### 1. **Inter**
- **Location**: `/public/Fonts/Inter/`
- **Purpose**: Main titles, primary headlines
- **Characteristics**: Clean, modern, geometric sans-serif
- **Best for**: Large headlines, emphasizing importance

### 2. **Bricolage Grotesque**
- **Location**: `/public/Fonts/BricolageGrotesque/`
- **Purpose**: Section headings, secondary titles
- **Characteristics**: Bold, distinctive grotesque style
- **Best for**: Section headings, distinctive headlines

### 3. **Canva Sans**
- **Location**: `/public/Fonts/Canva-Sans-Regular/`
- **Purpose**: Body text, buttons, descriptions
- **Characteristics**: Friendly, readable, versatile sans-serif
- **Best for**: Body text, UI elements, readable content

### 4. **System Font**
- **Purpose**: Captions, navigation, small text
- **Characteristics**: OS-specific optimized fonts
- **Best for**: Small text, navigation, labels

---

## Detailed Font Style Specifications

### tm_title
**Class Name**: `.tm_title`

**Visual Role**: Main page titles, hero headlines, primary focus points

**Font Properties**:
- **Font Family**: Inter
- **Font Size**: 64px
- **Font Weight**: 900 (Extra Bold)
- **Line Height**: 1.2
- **Letter Spacing**: -0.02em (tighter spacing for impact)
- **Text Transform**: None

**CSS Variables**:
```css
--font-size-title: 64px;
--font-weight-title: 700;
--line-height-title: 1.2;
--letter-spacing-title: -0.02em;
--font-family-title: var(--font-family-inter);
```

**Usage Examples**:
- Main hero heading
- Page title
- Major section title (if very prominent)

**HTML/JSX Usage**:
```html
<h1 class="tm_title">Welcome to TRUE ME Camp</h1>
```

**When to Use**:
- Only for the most important, eye-catching headlines
- Use sparingly to maintain visual hierarchy
- Maximum 1-2 per page section

**Visual Impact**: High – Large, bold, commanding presence

---

### tm_heading
**Class Name**: `.tm_heading`

**Visual Role**: Section headings, subsection titles, content divisions

**Font Properties**:
- **Font Family**: Bricolage Grotesque
- **Font Size**: 30px
- **Font Weight**: 900 (Extra Bold)
- **Line Height**: 1.3
- **Letter Spacing**: -0.01em (slight tightening)
- **Text Transform**: None

**CSS Variables**:
```css
--font-size-heading: 30px;
--font-weight-heading: 900;
--line-height-heading: 1.3;
--letter-spacing-heading: -0.01em;
--font-family-heading: var(--font-family-bricolage);
```

**Usage Examples**:
- "What is the camp?" (in 021_about)
- "This is where many questions start to come up:" (in 022_about)
- Section headers
- Content division titles

**HTML/JSX Usage**:
```html
<h2 class="tm_heading">What is the camp?</h2>
<h3 class="tm_heading">Program Overview</h3>
```

**When to Use**:
- For clear section divisions
- To introduce new content topics
- When you need visual hierarchy but not maximum impact
- Multiple times per page is acceptable

**Visual Impact**: Medium-High – Distinctive, noticeable but not overwhelming

---

### tm_body_big
**Class Name**: `.tm_body_big`

**Visual Role**: Large body text, prominent descriptions, feature text

**Font Properties**:
- **Font Family**: Canva Sans
- **Font Size**: 20px
- **Font Weight**: 900 (Extra Bold)
- **Line Height**: 1.6
- **Letter Spacing**: 0 (neutral)
- **Text Transform**: None

**CSS Variables**:
```css
--font-size-body-big: 20px;
--font-weight-body-big: 700;
--line-height-body-big: 1.6;
--letter-spacing-body-big: 0;
--font-family-body: var(--font-family-canva);
```

**Usage Examples**:
- "True Me Camp is a one-week experience for teenagers aged 14 to 18." (in 021_about)
- Feature descriptions in cards
- Prominent descriptive text
- Bold statement text

**HTML/JSX Usage**:
```html
<p class="tm_body_big">True Me Camp is a one-week experience for teenagers aged 14 to 18.</p>
```

**When to Use**:
- For important body text that needs to stand out
- Description text in prominent positions
- Bold statements or key information
- Card titles or feature highlights

**Visual Impact**: Medium – Readable but emphasized

**Note**: Bold weight (700) makes this distinctly different from regular tm_body

---

### tm_body
**Class Name**: `.tm_body`

**Visual Role**: Standard paragraph text, detailed content, regular reading text

**Font Properties**:
- **Font Family**: Canva Sans
- **Font Size**: 15px
- **Font Weight**: 400 (Regular)
- **Line Height**: 1.6
- **Letter Spacing**: 0 (neutral)
- **Text Transform**: None

**CSS Variables**:
```css
--font-size-body: 15px;
--font-weight-body: 400;
--line-height-body: 1.6;
--letter-spacing-body: 0;
--font-family-body: var(--font-family-canva);
```

**Usage Examples**:
- "Teenagers are trying to understand who they are and where they belong." (in 022_about paragraphs)
- Detailed descriptions
- Content paragraphs
- Body copy in sections
- List item text

**HTML/JSX Usage**:
```html
<p class="tm_body">Teenagers are trying to understand who they are and where they belong.</p>
```

**When to Use**:
- For all regular paragraph text
- Content that users will read in detail
- List items and descriptions
- Default text style for content sections

**Visual Impact**: Low – Neutral, readable, unobtrusive

**Note**: Standard weight (400) ensures easy readability for longer text

---

### tm_button
**Class Name**: `.tm_button`

**Visual Role**: Call-to-action buttons, clickable elements, button text

**Font Properties**:
- **Font Family**: Canva Sans
- **Font Size**: 14px
- **Font Weight**: 900 (Extra Bold)
- **Line Height**: 1.4
- **Letter Spacing**: 0.05em (wider spacing for emphasis)
- **Text Transform**: UPPERCASE

**CSS Variables**:
```css
--font-size-button: 14px;
--font-weight-button: 700;
--line-height-button: 1.4;
--letter-spacing-button: 0.05em;
--font-family-button: var(--font-family-canva);
--text-transform-button: uppercase;
```

**Usage Examples**:
- "READ MORE" button (in 021_about)
- "BOOK NOW" buttons
- CTA buttons throughout the page
- Action triggers

**HTML/JSX Usage**:
```html
<button class="tm_button">Read More</button>
<!-- Automatically renders as "READ MORE" -->
```

**When to Use**:
- All clickable buttons and CTAs
- Links that are action-oriented
- Primary and secondary CTAs
- Navigation actions

**Visual Impact**: High – Stands out, demands attention

**Special Features**:
- `text-transform: uppercase` is applied automatically via CSS
- Wider letter-spacing (0.05em) makes text more distinctive
- Bold weight combined with uppercase creates strong emphasis

**Note**: You can write button text in normal case (e.g., "Read More") and it will automatically convert to uppercase via CSS

---

### tm_caption
**Class Name**: `.tm_caption`

**Visual Role**: Small supporting text, labels, image captions, fine print

**Font Properties**:
- **Font Family**: Canva Sans
- **Font Size**: 12px
- **Font Weight**: 500 (Medium)
- **Line Height**: 1.4
- **Letter Spacing**: 0.02em (slight widening for clarity)
- **Text Transform**: None

**CSS Variables**:
```css
--font-size-caption: 12px;
--font-weight-caption: 500;
--line-height-caption: 1.4;
--letter-spacing-caption: 0.02em;
--font-family-caption: var(--font-family-canva);
```

**Usage Examples**:
- Image captions
- Form labels
- Fine print
- Supporting text
- Date/time information
- Author attributions

**HTML/JSX Usage**:
```html
<p class="tm_caption">Photo credit: Jane Doe</p>
<label class="tm_caption">Enter your email address</label>
```

**When to Use**:
- For text smaller than body text
- Supporting information that's not critical
- Image captions and labels
- Small UI text elements

**Visual Impact**: Low – Subtle, supporting role

---

### tm_nav
**Class Name**: `.tm_nav`

**Visual Role**: Navigation text, menu items, navigation links

**Font Properties**:
- **Font Family**: Canva Sans
- **Font Size**: 14px
- **Font Weight**: 600 (Semi-Bold)
- **Line Height**: 1.4
- **Letter Spacing**: 0 (neutral)
- **Text Transform**: None

**CSS Variables**:
```css
--font-size-nav: 14px;
--font-weight-nav: 600;
--line-height-nav: 1.4;
--letter-spacing-nav: 0;
--font-family-nav: var(--font-family-canva);
```

**Usage Examples**:
- Navigation menu items
- Header links
- Footer navigation
- Menu text
- Tab labels

**HTML/JSX Usage**:
```html
<nav>
  <a class="tm_nav">Home</a>
  <a class="tm_nav">About</a>
  <a class="tm_nav">Program</a>
</nav>
```

**When to Use**:
- All navigation elements
- Menu items
- Tab labels
- Navigation links
- Interactive navigation text

**Visual Impact**: Medium – Noticeable, semi-bold for click affordance

---

## Visual Hierarchy Summary

```
tm_title          (64px, 700)  ← LARGEST & BOLDEST
     ↓
tm_heading        (30px, 700)
     ↓
tm_body_big       (20px, 700)  ← BOLD BODY TEXT
     ↓
tm_button         (14px, 700)  ← UPPERCASE
tm_nav            (14px, 600)
     ↓
tm_body           (15px, 400)  ← REGULAR BODY TEXT
     ↓
tm_caption        (12px, 500)  ← SMALLEST & SUPPORTING
```

---

## Font Weight Summary

| Weight | Usage | Purpose |
|--------|-------|---------|
| **400** | tm_body | Regular, readable body text |
| **500** | tm_caption | Medium weight for small text |
| **600** | tm_nav | Semi-bold for navigation |
| **700** | tm_title, tm_heading, tm_subheading, tm_body_big, tm_button | Bold for emphasis |

---

## Size Progression

| Size | Font Style | Purpose |
|------|-----------|---------|
| **64px** | tm_title | Main hero headline |
| **30px** | tm_heading | Section heading |
| **20px** | tm_body_big | Large body text |
| **15px** | tm_body | Standard body text |
| **14px** | tm_button, tm_nav | Button/Navigation text |
| **12px** | tm_caption | Small supporting text |

---

## Font Family Assignment

| Font | Styles | Usage |
|------|--------|-------|
| **Inter** | tm_title | Main titles only |
| **Bricolage Grotesque** | tm_heading | Section headings |
| **Canva Sans** | tm_body, tm_body_big, tm_button, tm_caption, tm_nav | Body content, actions, captions & navigation |

---

## Line Height Reference

| Line Height | Styles | Purpose |
|------------|--------|---------|
| **1.2** | tm_title | Tight for large display text |
| **1.3** | tm_heading | Comfortable spacing for headings |
| **1.4** | tm_button, tm_nav, tm_caption | Compact for smaller text |
| **1.6** | tm_body, tm_body_big | Open spacing for readability |

---

## Letter Spacing Reference

| Spacing | Styles | Effect |
|---------|--------|--------|
| **-0.02em** | tm_title | Tighter for impact |
| **-0.01em** | tm_heading | Slightly tighter for sophistication |
| **0** | tm_body, tm_body_big, tm_nav | Neutral, natural spacing |
| **0.02em** | tm_caption | Slight widening for clarity |
| **0.05em** | tm_button | Wide spacing for emphasis & readability |

---

## Special Features

### Uppercase Transform
- **Applied to**: `.tm_button`
- **Implementation**: `text-transform: uppercase;`
- **Benefit**: Automatic capitalization without hard-coding uppercase in HTML
- **Example**: `<button class="tm_button">read more</button>` displays as "READ MORE"

### Font Loading
All custom fonts are loaded via `@font-face` declarations in `/styles/fontStyles.css`:
- Inter fonts: `/public/Fonts/Inter/`
- Bricolage Grotesque fonts: `/public/Fonts/BricolageGrotesque/`
- Canva Sans fonts: `/public/Fonts/Canva-Sans-Regular/`

---

## Usage Best Practices

### Do's ✓
- Use tm_title sparingly (1-2 per page)
- Use tm_body for content-heavy sections
- Use tm_button for all CTA elements
- Keep visual hierarchy consistent
- Use appropriate line heights for readability
- Use letter-spacing for emphasis and clarity

### Don'ts ✗
- Don't mix multiple title styles on same page
- Don't use tm_button for non-clickable text
- Don't make body text larger than 20px without reason
- Don't override font styles inline – use CSS classes
- Don't create new styles – use existing ones
- Don't forget about accessibility with size/weight choices

---

## Updating Font Styles

### To Change Size
Edit in `/styles/fontStyles.css`:
```css
--font-size-heading: 30px;  /* Change this value */
```

### To Change Weight
Edit in `/styles/fontStyles.css`:
```css
--font-weight-heading: 900;  /* Change this value */
```

### To Change Font Family
Edit in `/styles/fontStyles.css`:
```css
--font-family-heading: var(--font-family-bricolage);  /* Change this */
```

All changes take effect immediately across the entire page!

---

## Implementation Examples

### Hero Section
```html
<h1 class="tm_title">Welcome to TRUE ME Camp</h1>
<p class="tm_body_big">A transformative one-week experience</p>
```

### Section with Multiple Elements
```html
<section>
  <h2 class="tm_heading">Program Overview</h2>
  <p class="tm_body">This is standard paragraph text...</p>
  <button class="tm_button">Learn More</button>
</section>
```

### Navigation
```html
<nav>
  <a class="tm_nav">Home</a>
  <a class="tm_nav">About</a>
  <a class="tm_nav">Contact</a>
</nav>
```

### Footer
```html
<footer>
  <p class="tm_body">Footer content</p>
  <p class="tm_caption">© 2026 TRUE ME Camp</p>
</footer>
```

---

## Color Usage Notes

Font colors are applied separately from font styles. Common color combinations:

| Font Style | Typical Color | Usage |
|-----------|---------------|-------|
| tm_title | #427047 (dark green) | Main headings |
| tm_heading | #427047 (dark green) | Section headings |
| tm_subheading | #ff751f (orange) | Descriptive titles |
| tm_body | #2B2B2B (dark gray) | Body text |
| tm_body_big | #427047 or #2B2B2B | Feature descriptions |
| tm_button | White (on colored background) | Button text |
| tm_caption | #666666 (medium gray) | Supporting text |
| tm_nav | #427047 or #ff751f | Navigation links |

---

## Mobile & Responsive Considerations

Current font sizes are optimized for desktop. For responsive design, you may want to override at different breakpoints:

```css
@media (max-width: 768px) {
  .tm_title {
    font-size: 48px;  /* Smaller on mobile */
  }
  .tm_heading {
    font-size: 24px;  /* Smaller on mobile */
  }
}
```

---

## Accessibility Notes

- **Minimum readable size**: 12px (tm_caption) is acceptable for labels
- **Line height**: 1.6 recommended for body text (already applied to tm_body)
- **Contrast**: Ensure sufficient contrast between text color and background
- **Font weight**: 700 (bold) used strategically for emphasis
- **Letter spacing**: Wider spacing helps readability for some readers

---

**Last Updated**: May 30, 2026
**Location**: `/styles/fontStyles.css`
**Configuration**: `/FONT_STYLES_CONFIG.md`
