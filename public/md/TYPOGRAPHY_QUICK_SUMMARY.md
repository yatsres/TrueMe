# TRUE ME CAMP Typography System - Quick Reference

## 9 Typography Styles

```
56px │ Title           (weight: 900) ─── Main section headings
44px │ Heading         (weight: 700) ─── Descriptive subheadings
36px │ Subheading      (weight: 900) ─── Emphasized text blocks
32px │ Subtitle        (weight: 700) ─── Section subheadings
20px │ Large Text      (weight: 400) ─── Lead paragraphs
16px │ Body            (weight: 400) ─── Standard paragraphs (consolidated)
16px │ Button          (weight: 700) ─── CTA elements
16px │ Caption         (weight: 700) ─── Bold emphasis
14px │ Navigation      (weight: 600) ─── Nav links, labels
```

---

## Section Mapping Summary

| Section | Heading | Subheading | Body | Button | Status |
|---------|---------|-----------|------|--------|--------|
| **001 Hero** | Title (56px) | Heading (44px) | Body (16px) | Button (16px) | ✅ |
| **010 About** | Custom 100px* | Heading (44px)* | Body (16px) | Button (16px) | ⚠️ |
| **020 Storytelling** | — | Heading (44px)* | Large Text (20px)* | — | ❌ |
| **040 Card Grid** | — | Subheading (36px)* | Body (16px)* | — | ❌ |
| **041 What Teens** | Title (56px)* | — | Body (16px) | — | ❌ |
| **051 Methods** | Title (56px)* | Subheading (36px)* | Body (16px) | — | ❌ |
| **061 Results** | Title (56px)* | Subheading (36px)* | Body (16px) | — | ❌ |
| **070 Facilitators** | Title (56px) | Heading (44px) | Body (16px) | Button (16px) | ✅ |
| **071 Profiles** | Title (56px) | Caption (16px) | Body (16px) | — | ✅ |
| **091 Location** | Title (56px)* | Body (16px)* | Body (16px) | — | ⚠️ |
| **093 Location** | — | Heading (44px)* | Subheading (36px) | — | ⚠️ |
| **110 Pricing** | Title (56px)* | — | Body (16px) | Button (16px) | ⚠️ |
| **Header** | Title (56px)* | Nav (14px)* | — | — | ❌ |
| **Footer** | Title (56px)* | Nav (14px)* | Body (16px) | Button (16px) | ❌ |

**Legend:**
- ✅ = Fully mapped & implemented
- ⚠️ = Partially mapped (needs updates)
- ❌ = Not mapped (needs updates)
- * = Needs update/implementation

---

## 3 New Styles Created

### 1. **Large Text** (text-trueme-large-text)
```
20px | weight: 400 | lineHeight: 1.6 | letterSpacing: -0.01em
```
Used in: Storytelling, Location (lead paragraphs)

### 2. **Navigation** (text-trueme-nav)
```
14px | weight: 600 | lineHeight: 1.2 | letterSpacing: 0.2em
```
Used in: Header, Footer navigation

### 3. **Note on Changes**
- **Title** (formerly Heading): 56px, weight 900 — Main section headings
- **Heading** (formerly Accent Heading): 44px, weight 700 — Descriptive subheadings
- **Body** (consolidated): 16px — Merged from separate 18px Medium Text

---

## Class Name Reference

| Use Case | Class Name |
|----------|-----------|
| Main section heading | `text-trueme-title` |
| Section subtitle | `text-trueme-heading` |
| Large emphasis text | `text-trueme-subheading` |
| Smaller subtitle | `text-trueme-subtitle` |
| Lead paragraph | `text-trueme-large-text` |
| Standard text | `text-trueme-body` |
| Button text | `text-trueme-button` |
| Bold emphasis | `text-trueme-caption` |
| Navigation/labels | `text-trueme-nav` |

---

## Tailwind Config

```javascript
fontSize: {
  'trueme-title': ['56px', { fontWeight: '900', lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'trueme-heading': ['44px', { fontWeight: '700', lineHeight: '1.1', letterSpacing: '-0.04em' }],
  'trueme-subheading': ['36px', { fontWeight: '900', lineHeight: '1.2', letterSpacing: '-0.02em' }],
  'trueme-subtitle': ['32px', { fontWeight: '700', lineHeight: '1.3', letterSpacing: '-0.02em' }],
  'trueme-large-text': ['20px', { fontWeight: '400', lineHeight: '1.6', letterSpacing: '-0.01em' }],
  'trueme-body': ['16px', { fontWeight: '400', lineHeight: '1.6', letterSpacing: '0em' }],
  'trueme-nav': ['14px', { fontWeight: '600', lineHeight: '1.2', letterSpacing: '0.2em', textTransform: 'uppercase' }],
  'trueme-button': ['16px', { fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.01em' }],
  'trueme-caption': ['16px', { fontWeight: '700', lineHeight: '1.6', letterSpacing: '0em' }],
}
```

---

## Implementation Progress

**40%** - Fully Mapped (4 sections)
```
✅ Hero (001)
✅ Facilitator Header (070)
✅ Facilitator Profiles (071-072)  
✅ Location Details (093)
```

**30%** - Partially Mapped (3 sections)
```
⚠️ About (010)
⚠️ Location Header (091)
⚠️ Pricing (110)
```

**30%** - Not Mapped (5+ sections)
```
❌ Storytelling (020-030)
❌ Card Grid (040)
❌ What Teens Learn (041)
❌ Methods (051)
❌ Results (061)
❌ Header
❌ Footer
```

---

## Key Principles

1. **Color-Agnostic:** All typography styles exclude color. Colors come from the 8-color palette applied separately via `style={{ color: '#...' }}`

2. **Fixed Sizes:** All typography uses fixed sizes across mobile and desktop (no responsive variants) for consistency and simplicity

3. **Weight Hierarchy:** 
   - 400 (body text)
   - 600 (navigation)
   - 700 (subtitles, buttons, captions)
   - 900 (headings, subheadings)

4. **Letter Spacing:** Intentionally tight (-0.04em to -0.02em) for modern design aesthetic

---

## Files Updated

1. ✅ `/tailwind.config.js` - Updated with renamed typography styles
2. ✅ `/components/Hero.tsx` - Uses Title, Heading, Body, Button
3. ✅ `/components/FacilitatorsSection.tsx` - Uses Title, Heading, Body, Caption, Button
4. ✅ `/components/LocationSection.tsx` - Uses Subheading
5. 📄 `/TYPOGRAPHY_SYSTEM.md` - Core documentation
6. 📄 `/TYPOGRAPHY_MAPPING.md` - Detailed section-by-section mapping
7. 📄 `/TYPOGRAPHY_QUICK_SUMMARY.md` - This quick reference

