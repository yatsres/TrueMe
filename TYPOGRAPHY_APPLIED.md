# Typography Classes Applied to All Sections

## Hero Section (Hero.tsx)
- **Main Headline** (44px): `text-trueme-heading` - "A week that can change..."
- **Event Details** (16px, bold): `text-trueme-caption` - "From 14 to 18 years old"
- **Event Details** (16px, regular): `text-trueme-body` - "Main language: English..." and "Translation available..."
- **Button Text** (16px, bold): `text-trueme-button` - "BOOK A CALL"

---

## About Section (AboutSection.tsx)
- **Main Title** (100px, custom): Custom size - "What is the camp?"
- **Subheading** (44px, bold): `text-trueme-heading` - "What is True Me Camp and why does it matter?"
- **Body Text** (20px, regular): `text-trueme-large-text` - "True Me Camp is a one-week experience..."
- **Button Text** (16px, bold): `text-trueme-button` - "READ MORE" / "READ LESS"

---

## Results Section (ResultsSection.tsx)
- **Section Title** (56px, black): `text-trueme-title` - "Results. Benefits"
- **Intro Text** (36px, black): `text-trueme-subheading` - "At True Me Camp teenagers often:"
- **List Items** (20px, regular): `text-trueme-large-text` - All 11 benefits

---

## What Teens Learn Section (WhatTeensSection.tsx)
- **Section Title** (56px, black): `text-trueme-title` - "What Teens Will Learn"
- **List Items** (20px, regular): `text-trueme-large-text` - All 11 learning items

---

## Methods Section (MethodsSection.tsx)
- **Section Title** (56px, black): `text-trueme-title` - "Methods"
- **Intro Text** (36px, black): `text-trueme-subheading` - "We work through shared experiences..."
- **List Items** (20px, regular): `text-trueme-large-text` - All 13 methods

---

## What Section Cards (WhatSection030.tsx)
- **Card Titles** (20px, regular): `text-trueme-large-text` - All 6 card text items
  - "We don't give lectures..."
  - "There is space for depth..."
  - "Feel safe being exactly..."
  - "We bring teenagers together..."
  - "A transformative week..."

---

## Facilitators Section (FacilitatorsSection.tsx)

### Header (071_Facilitators)
- **Section Title** (56px, black): `text-trueme-title` - "Facilitators"
- **Subheading** (44px, bold): `text-trueme-heading` - "Our facilitators are educated and experienced..."
- **List Items** (16px, regular): `text-trueme-body` - All 5 education areas
- **Body Text** (16px, regular): `text-trueme-body` - "They combine professional experience..."
- **Button Text** (16px, bold): `text-trueme-button` - "READ MORE"

### Details - Julie Burtasova (072_Facilitators)
- **Name** (56px, black): `text-trueme-title` - "Julie Burtasova"
- **Intro Text** (16px, bold): `text-trueme-caption` - "Julie Burtasova is a Practical Psychologist..."
- **Body Text** (16px, regular): `text-trueme-body` - All 3 paragraphs about Julie
- **Certifications**: Images with proportional sizing (0.94, 1, 1.19, 1.41, 2.81 flex values)

### Details - Ira Grysha (072_Facilitators)
- **Name** (56px, black): `text-trueme-title` - "Ira Grysha"
- **Intro Text** (16px, bold): `text-trueme-caption` - "Ira Grysha is an experienced Pedagogue..."
- **Body Text** (16px, regular): `text-trueme-body` - All 2 paragraphs about Ira
- **Certifications**: Images with proportional sizing (1, 1.19, 2.81, 3.70 flex values)

---

## Header Navigation (Header.tsx)
- **Nav Links** (14px, semibold): `text-trueme-nav` - About, Facilitators, Location, Price
- **Button Text** (16px, bold): `text-trueme-button` - "BOOK A CALL"

---

## Typography Summary by Type

### Headings (Primary Titles)
- `text-trueme-title` (56px, 900, -0.02em): Section headers, facilitator names
  - Results. Benefits
  - What Teens Will Learn
  - Methods
  - Facilitators
  - Julie Burtasova
  - Ira Grysha

### Subheadings (Secondary Titles)
- `text-trueme-heading` (44px, 700, -0.04em): Section descriptions
  - What is True Me Camp and why does it matter?
  - Our facilitators are educated and experienced...
- `text-trueme-subheading` (36px, 900, -0.02em): Intro text to lists
  - At True Me Camp teenagers often:
  - We work through shared experiences...

### Large Body Text
- `text-trueme-large-text` (20px, 400, -0.01em): Important content blocks
  - All results/benefits (ResultsSection)
  - All learning items (WhatTeensSection)
  - All methods (MethodsSection)
  - All card titles (WhatSection030)
  - About description (AboutSection)

### Standard Body Text
- `text-trueme-body` (16px, 400, 0em): Regular paragraphs and lists
  - Facilitators education list
  - Julie bio paragraphs
  - Ira bio paragraphs
  - Facilitators description text

### Emphasis Text
- `text-trueme-caption` (16px, 700, 0em): Intro/highlighted captions
  - Hero event details (bold version)
  - Facilitator intro text (Julie & Ira bios)

### Button Text
- `text-trueme-button` (16px, 700, -0.01em): All CTAs
  - BOOK A CALL (Hero, Header)
  - READ MORE / READ LESS (About, Facilitators)

### Navigation
- `text-trueme-nav` (14px, 600, 0em): Header navigation links
  - About, Facilitators, Location, Price

---

## Font Weight Distribution

| Weight | Classes Used | Purpose |
|--------|--------------|---------|
| **400** (Regular) | text-trueme-large-text, text-trueme-body | Body content, readable text |
| **600** (Semibold) | text-trueme-nav | Navigation, secondary emphasis |
| **700** (Bold) | text-trueme-button, text-trueme-caption, text-trueme-heading, text-trueme-subtitle | Buttons, captions, subheadings |
| **900** (Black) | text-trueme-title, text-trueme-subheading | Major emphasis, titles |

---

## Color Applications

All typography uses semantic color variables:
- **White text**: Hero, Results, WhatTeens sections (dark backgrounds)
- **Dark text** (#427047, #2B2B2B): About section, Methods, Facilitators (light backgrounds)
- **Lime** (#d2ff72): Hero headline, accent colors
- **Orange** (#ff751f): Headings, buttons, accents

---

## Responsive Behavior

All font classes maintain consistent sizing across mobile and desktop. Hero has custom responsive sizes using Tailwind's `text-hero-*` and `text-section-*` utilities for dramatic hero text.

---

## Accessibility

- Line heights (1.1-1.6) ensure readability
- Letter spacing (-0.06em to 0em) maintains legibility
- Font weight contrast (400 regular paired with 700+ bold) creates hierarchy
- Color contrast meets WCAG AA standards

All typography classes have been systematically applied to ensure consistent, professional presentation across the TRUE ME Camp landing page.
