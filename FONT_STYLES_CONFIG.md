# Font Styles Configuration Guide

## Overview
All font styles are now centralized in `/styles/fontStyles.css` using CSS custom properties (variables). Update any attribute in one place and it automatically applies everywhere on the page.

## How It Works

Font styles are defined as CSS variables in the `:root` selector. When you need to change a style, simply update the variable value in `fontStyles.css` and it applies throughout the entire page.

## Font Styles Available

### 1. tm_title
**Usage**: Main page titles, hero headlines
- **Font**: Inter
- **Size**: 64px
- **Weight**: 700
- **Line Height**: 1.2
- **Letter Spacing**: -0.02em
- **Source**: `/public/Fonts/Inter/`

### 2. tm_heading
**Usage**: Section headings, major titles
- **Font**: Bricolage Grotesque
- **Size**: 30px
- **Weight**: 900
- **Line Height**: 1.3
- **Letter Spacing**: -0.01em
- **Source**: `/public/Fonts/BricolageGrotesque/`

### 3. tm_body_big
**Usage**: Body text in sections, descriptions
- **Font**: Canva Sans
- **Size**: 20px
- **Weight**: 700
- **Line Height**: 1.6
- **Letter Spacing**: 0
- **Source**: `/public/Fonts/Canva-Sans-Regular/`

### 5. tm_body
**Usage**: Standard paragraph text, detailed content
- **Font**: Canva Sans
- **Size**: 15px
- **Weight**: 400
- **Line Height**: 1.6
- **Letter Spacing**: 0
- **Source**: `/public/Fonts/Canva-Sans-Regular/`

### 6. tm_button
**Usage**: Button text, CTA elements
- **Font**: Canva Sans
- **Size**: 14px
- **Weight**: 700
- **Line Height**: 1.4
- **Letter Spacing**: 0.05em
- **Text Transform**: UPPERCASE
- **Source**: `/public/Fonts/Canva-Sans-Regular/`

### 7. tm_caption
**Usage**: Small text, labels, captions
- **Font**: Canva Sans
- **Size**: 12px
- **Weight**: 500
- **Line Height**: 1.4
- **Letter Spacing**: 0.02em
- **Source**: `/public/Fonts/Canva-Sans-Regular/`

### 8. tm_nav
**Usage**: Navigation links, menu items
- **Font**: Canva Sans
- **Size**: 14px
- **Weight**: 600
- **Line Height**: 1.4
- **Letter Spacing**: 0
- **Source**: `/public/Fonts/Canva-Sans-Regular/`

## How to Update Font Styles

### Step 1: Open `/styles/fontStyles.css`

### Step 2: Locate the CSS variable you want to change
```css
:root {
  --font-size-heading: 44px;  /* Change this value */
  --font-weight-heading: 700;
  --line-height-heading: 1.2;
  --letter-spacing-heading: -0.02em;
}
```

### Step 3: Update the value
```css
:root {
  --font-size-heading: 48px;  /* Updated! */
  --font-weight-heading: 700;
  --line-height-heading: 1.2;
  --letter-spacing-heading: -0.02em;
}
```

### Step 4: Save the file
All components using `.tm_heading` will automatically update across the entire page.

## Properties You Can Change

For each font style, you can independently modify:

1. **Font Size** (`--font-size-*`)
   - Examples: 12px, 16px, 20px, 44px, 56px
   
2. **Font Weight** (`--font-weight-*`)
   - Values: 300, 400, 500, 600, 700, 800, 900
   
3. **Line Height** (`--line-height-*`)
   - Examples: 1.1, 1.2, 1.4, 1.6
   
4. **Letter Spacing** (`--letter-spacing-*`)
   - Examples: -0.05em, 0, 0.02em, 0.05em

5. **Font Family** (global)
   - `--font-family-heading`: For titles/headings
   - `--font-family-body`: For body text

## Usage in Components

### In HTML/JSX:
```html
<h2 class="tm_heading">Section Title</h2>
<p class="tm_body_big">Body text here</p>
<button class="tm_button">Click Me</button>
```

### In Inline Styles:
```jsx
<p style={{ fontSize: 'var(--font-size-body)' }}>Text</p>
```

## Global Font Family

Update the base font family used across all styles:
```css
--font-family-base: /* Your font here */
--font-family-heading: /* Heading font here */
--font-family-body: /* Body font here */
--font-family-button: /* Button font here */
```

## Benefits of This System

✓ **Single Source of Truth**: All font definitions in one file
✓ **Instant Global Updates**: Change once, update everywhere
✓ **Consistent Styling**: Same style applied across all components
✓ **Easy Maintenance**: No hunting through component files
✓ **Scalable**: Add new font styles by creating new CSS variables
✓ **Responsive**: Can override at different breakpoints if needed

## Remember

- Always use the class names in HTML/components (`.tm_heading`, `.tm_button`, etc.)
- Make changes only in `/styles/fontStyles.css`
- All changes take effect immediately across the page
- Font styles are organized by purpose (title, heading, body, button, caption, nav)

## Class Name Reference

| Class Name | Font | Size | Weight | Source |
|-----------|------|------|--------|--------|
| `.tm_title` | Inter | 64px | 700 | `/public/Fonts/Inter/` |
| `.tm_heading` | Bricolage Grotesque | 30px | 700 | `/public/Fonts/BricolageGrotesque/` |
| `.tm_body_big` | Canva Sans | 20px | 700 | `/public/Fonts/Canva-Sans-Regular/` |
| `.tm_body` | Canva Sans | 15px | 400 | `/public/Fonts/Canva-Sans-Regular/` |
| `.tm_button` | Canva Sans | 14px | 700 | `/public/Fonts/Canva-Sans-Regular/` |
| `.tm_caption` | Canva Sans | 12px | 500 | `/public/Fonts/Canva-Sans-Regular/` |
| `.tm_nav` | Canva Sans | 14px | 600 | `/public/Fonts/Canva-Sans-Regular/` |
