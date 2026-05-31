# TRUE ME CAMP Typography - Visual Guide & Examples

## Type Scale Hierarchy

```
HEADING (56px, weight 900)
─────────────────────────────────────────
Main section headings
Used in: Facilitators, What Teens Learn, Methods, Results

Example:
<h2 className="text-trueme-heading" style={{ color: '#ff751f' }}>
  Facilitators
</h2>


ACCENT HEADING (44px, weight 700)
─────────────────────────────────────────
Descriptive section subheadings
Used in: About, Storytelling, Location, Facilitators info

Example:
<h3 className="text-trueme-accent-heading" style={{ color: '#427047' }}>
  What is True Me Camp<br />and why does it matter?
</h3>


SUBHEADING (36px, weight 900)
─────────────────────────────────────────
Emphasized large text blocks
Used in: Location highlights, Methods content, Results benefits

Example:
<p className="text-trueme-subheading" style={{ color: '#ff751f' }}>
  Everything is designed so teenagers can feel comfortable, supported, and at ease.
</p>


SUBTITLE (32px, weight 700)
─────────────────────────────────────────
Section subheadings and smaller titles
Used in: Facilitator expertise, footer modals

Example:
<h3 className="text-trueme-subtitle" style={{ color: '#427047' }}>
  Our facilitators are educated and experienced in areas such as:
</h3>


LARGE TEXT (20px, weight 400)
─────────────────────────────────────────
Lead paragraphs, emphasized body text
Used in: Location introductions, highlight paragraphs

Example:
<p className="text-trueme-large-text text-gray-800">
  The camp takes place at Quinta da Enxara, a peaceful space surrounded by nature.
</p>


MEDIUM TEXT (18px, weight 400)
─────────────────────────────────────────
Secondary body text, descriptions
Used in: Location descriptions, event details

Example:
<p className="text-trueme-medium-text text-gray-800">
  Teenagers live together at the Quinta throughout the week.
</p>


BODY (16px, weight 400)
─────────────────────────────────────────
Standard paragraph text, lists
Used in: All descriptive text, list items, info blocks

Example:
<p className="text-trueme-body text-gray-800">
  They combine professional experience with a real love for working with teenagers.
</p>


BUTTON (16px, weight 700)
─────────────────────────────────────────
CTA buttons and action elements
Used in: All buttons throughout site

Example:
<button className="text-trueme-button uppercase" style={{ backgroundColor: '#427047', color: 'white' }}>
  Book a Call
</button>


CAPTION (16px, weight 700)
─────────────────────────────────────────
Bold emphasis within body content
Used in: Bold introductions, labels

Example:
<p className="text-trueme-body text-gray-800">
  <span className="text-trueme-caption" style={{ color: '#427047' }}>
    Julie Burtasova is a Practical Psychologist...
  </span>
</p>


NAVIGATION (14px, weight 600, uppercase)
─────────────────────────────────────────
Header navigation, footer links, small labels
Used in: Header nav, footer links, small text

Example:
<a href="#about" className="text-trueme-nav" style={{ color: 'white' }}>
  About
</a>
```

---

## Section-by-Section Examples

### HERO SECTION (001)
```jsx
{/* Main heading 56px */}
<h1 className="text-trueme-heading text-white">
  TRUE<span style={{ color: '#d2ff72' }}>me</span>
  <br />camp
</h1>

{/* Subtitle 44px */}
<h2 className="text-trueme-accent-heading" style={{ color: '#d2ff72' }}>
  A week that can change how a teenager feels about themselves.
</h2>

{/* Event details 16px */}
<p className="text-trueme-body text-white">
  From 14 to 18 years old
</p>

{/* CTA Button 16px bold */}
<button className="text-trueme-button uppercase" style={{ backgroundColor: '#d2ff72', color: '#427047' }}>
  Book a Call
</button>
```

---

### ABOUT SECTION (010)
```jsx
{/* Main heading - HERO SCALE (custom 100px, weight 900) */}
{/* Note: Keep custom styling for visual hierarchy */}
<h2 className="text-6xl md:text-8xl lg:text-[100px] font-black" 
    style={{ color: '#427047', letterSpacing: '-0.06em' }}>
  What is the<br />camp?
</h2>

{/* Accent heading 44px */}
<h3 className="text-trueme-accent-heading" style={{ color: '#ff751f' }}>
  What is True Me Camp<br />and why does it matter?
</h3>

{/* Info box 16px */}
<p className="text-trueme-body text-trueme-dark">
  True Me Camp is a one-week experience for teenagers aged 14 to 18.
</p>

{/* Button 16px bold */}
<button className="text-trueme-button">
  Read More
</button>
```

---

### STORYTELLING SECTION (020-030)
```jsx
{/* Pill box heading 44px */}
<p className="text-trueme-accent-heading" style={{ color: '#ff751f' }}>
  Teenagehood is a time when a lot is happening inside.
</p>

{/* Body paragraphs 20px for emphasis or 16px for regular */}
<p className="text-trueme-large-text text-trueme-dark">
  Teenagers are trying to understand who they are and where they belong.
</p>

{/* Standard body 16px */}
<p className="text-trueme-body text-trueme-dark">
  They want to be themselves. But they are also afraid...
</p>

{/* List items 16px */}
<ul className="text-trueme-body">
  <li>Who am I, really?</li>
  <li>Where do I belong?</li>
</ul>
```

---

### CARD GRID SECTION (040)
```jsx
{/* Card titles 36px bold */}
<h3 className="text-trueme-subheading" style={{ color: 'white' }}>
  Belong
</h3>

{/* Card descriptions 16px */}
<p className="text-trueme-body" style={{ color: 'white' }}>
  Find your people and feel less alone.
</p>
```

---

### FACILITATORS SECTION (070)
```jsx
{/* Main heading 56px */}
<h2 className="text-trueme-heading" style={{ color: '#ff751f' }}>
  Facilitators
</h2>

{/* Subheading 44px */}
<h3 className="text-trueme-accent-heading" style={{ color: '#427047' }}>
  Our facilitators are educated and experienced in areas such as:
</h3>

{/* List items 16px */}
<ul className="text-trueme-body text-gray-800">
  <li>Pedagogical and Psychological Education</li>
  <li>Child Psychology</li>
</ul>

{/* Description 16px */}
<p className="text-trueme-body text-gray-800">
  They combine professional experience with a real love for working with teenagers.
</p>

{/* Button 16px bold */}
<button className="text-trueme-button uppercase" style={{ backgroundColor: '#ff751f', color: 'white' }}>
  Read More
</button>
```

---

### FACILITATOR PROFILE (071)
```jsx
{/* Facilitator name 56px */}
<h3 className="text-trueme-heading" style={{ color: '#ff751f' }}>
  Julie<br />Burtasova
</h3>

{/* Bold introduction 16px bold */}
<p className="text-trueme-body text-gray-800">
  <span className="text-trueme-caption" style={{ color: '#427047' }}>
    Julie Burtasova is a Practical Psychologist, Social Pedagogue...
  </span>
</p>

{/* Body text 16px */}
<div className="text-trueme-body text-gray-800">
  <p>She has a great passion for working with children...</p>
  <p>Julie's dedication to her work led her...</p>
</div>
```

---

### LOCATION SECTION (091)
```jsx
{/* Heading 56px */}
<h2 className="text-trueme-heading" style={{ color: '#d2ff72' }}>
  Location &<br />Accommodation
</h2>

{/* Lead paragraph 20px */}
<p className="text-trueme-medium-text text-white font-bold">
  The camp takes place at Quinta da Enxara, a peaceful space in the Mafra area.
</p>

{/* Secondary text 16px */}
<p className="text-trueme-body text-white">
  Teenagers live together at the Quinta throughout the week.
</p>
```

---

### LOCATION DETAILS (093)
```jsx
{/* Accent heading 44px */}
<h3 className="text-trueme-accent-heading" style={{ color: '#427047' }}>
  Participants stay in rooms of 3–4 people, each with a private bathroom.
</h3>

{/* Body description 16px */}
<p className="text-trueme-body text-gray-800">
  Meals are prepared by a professional chef, and we provide five meals per day.
</p>

{/* Emphasis text 36px */}
<p className="text-trueme-subheading" style={{ color: '#ff751f' }}>
  Everything is designed so teenagers can feel comfortable, supported, and at ease.
</p>
```

---

### PRICING SECTION (110)
```jsx
{/* Section heading 56px */}
<h3 className="text-trueme-heading" style={{ color: '#427047' }}>
  Early Registration
</h3>

{/* Deadline 14px */}
<p className="text-trueme-nav" style={{ color: '#ff751f' }}>
  until July 6th
</p>

{/* Label 16px body */}
<p className="text-trueme-body text-gray-600 uppercase">
  Program
</p>

{/* Price numbers - custom styling */}
<span className="text-5xl lg:text-6xl font-black" style={{ color: '#427047' }}>
  850
</span>

{/* Button 16px bold */}
<button className="text-trueme-button uppercase" style={{ backgroundColor: '#427047', color: 'white' }}>
  Book a Call
</button>

{/* What's Included heading 56px */}
<h3 className="text-trueme-heading" style={{ color: '#427047' }}>
  What's Included
</h3>

{/* Feature items 16px */}
<ul className="text-trueme-body">
  <li>Full 6-day programme at Quinta da Enxara</li>
  <li>5 meals per day (chef prepared)</li>
</ul>
```

---

### HEADER
```jsx
{/* Logo - currently text-2xl, should be relative or custom */}
<div className="text-2xl lg:text-3xl font-black" style={{ color: 'white' }}>
  TRUE<span style={{ color: '#d2ff72' }}>me</span>camp
</div>

{/* Navigation links 14px */}
<a href="#about" className="text-trueme-nav" style={{ color: 'white' }}>
  About
</a>
```

---

### FOOTER
```jsx
{/* Logo - currently text-3xl lg:text-4xl, should be Heading or custom */}
<div className="text-3xl lg:text-4xl font-black text-white">
  TRUE<span style={{ color: '#d2ff72' }}>(0)</span>e
</div>

{/* Copyright 16px */}
<p className="text-trueme-body text-white opacity-60">
  © 2026 Superside. All rights reserved.
</p>

{/* Footer links 14px */}
<button className="text-trueme-nav text-white">
  Privacy Policy
</button>

{/* Modal heading 56px */}
<h2 className="text-trueme-heading" style={{ color: '#427047' }}>
  Privacy Policy
</h2>

{/* Modal section heading 32px */}
<h3 className="text-trueme-subtitle" style={{ color: '#427047' }}>
  What information we collect
</h3>

{/* Modal body 16px */}
<p className="text-trueme-body text-gray-700">
  Name, Email address, Phone number...
</p>
```

---

## Color + Typography Combinations

### Recommended Pairings

| Typography | Primary Color | Secondary Color | Usage |
|---|---|---|---|
| Heading | #427047 (green-dark) | #ff751f (orange) | Section titles |
| Accent Heading | #427047 or #ff751f | #d2ff72 (lime) | Subheadings |
| Subheading | #ff751f | #d2ff72 | Emphasis text |
| Subtitle | #427047 | #ff751f | Labels |
| Large/Medium Text | #2B2B2B (dark) | #666 | Body text |
| Body | #2B2B2B or #666 | — | Standard text |
| Button | white (text) | #427047, #ff751f (bg) | Actions |
| Navigation | white | — | Header/Footer |

---

## Quick Implementation Checklist

- [ ] Copy `text-trueme-heading` for all h2 section titles
- [ ] Copy `text-trueme-accent-heading` for h3 subtitles
- [ ] Copy `text-trueme-subheading` for emphasized blocks
- [ ] Copy `text-trueme-body` for all paragraphs
- [ ] Copy `text-trueme-button` for all buttons
- [ ] Copy `text-trueme-nav` for header/footer links
- [ ] Remove inline `font-bold text-lg lg:text-xl` style attributes
- [ ] Keep colors separate in `style={{ color: '...' }}`
- [ ] Test responsive layout on mobile/tablet/desktop

