# 🎯 Logo Image Setup Guide

## What Changed

All text-based logos have been replaced with image-based logos in three locations:

1. **Hero Section** - Large logo at page top
2. **Header** - Smaller logo in navigation bar
3. **Footer** - Logo with copyright

## Setup Instructions

### Step 1: Add the Logo Image

Place your `img_tm_logo.png` file in the `/public` folder:

```
/Users/yatsres/Documents/Claude/Projects/TrueMe | Draft/
└── public/
    └── img_tm_logo.png ← Add your logo here
```

### Step 2: Logo Specifications

**Recommended Properties:**
- **Format**: PNG with transparent background
- **Aspect Ratio**: Wide format (landscape)
- **Minimum Width**: 600px
- **Recommended Width**: 800-1200px
- **Color**: White/light colored (for dark backgrounds)
- **Background**: Transparent

### How It's Used

#### Hero Section
- **Size**: `h-24 lg:h-32` (96px on mobile, 128px on desktop)
- **Max Width**: 600px
- **Animation**: `animate-luxury-fade-in` (elegant entrance)
- **Responsive**: Scales automatically

#### Header
- **Size**: `h-10 lg:h-12` (40px on mobile, 48px on desktop)
- **Max Width**: 200px
- **Location**: Top left navigation bar
- **Always Visible**: Yes (sticky header)

#### Footer
- **Size**: `h-12` (48px)
- **Max Width**: 150px
- **Location**: Bottom left with copyright
- **Responsive**: Yes

## Image Dimensions Cheatsheet

```
Hero Logo:
- Mobile: 96px height
- Desktop: 128px height
- Max width: 600px
- Recommended source: 1200px width

Header Logo:
- Mobile: 40px height
- Desktop: 48px height
- Max width: 200px
- Recommended source: 400px width

Footer Logo:
- Height: 48px
- Max width: 150px
- Recommended source: 300px width
```

## File Location in Code

### Hero.tsx (Line ~48-55)
```jsx
<div className="mb-8 lg:mb-12 animate-luxury-fade-in gpu-accelerated">
  <img
    src="/img_tm_logo.png"
    alt="TRUE me camp"
    className="h-24 lg:h-32 mx-auto"
    style={{ maxWidth: '600px', width: '100%' }}
  />
</div>
```

### Header.tsx (Line ~43-49)
```jsx
<div className="h-10 lg:h-12 flex items-center">
  <img
    src="/img_tm_logo.png"
    alt="TRUE me camp"
    className="h-full"
    style={{ maxWidth: '200px' }}
  />
</div>
```

### Footer.tsx (Line ~260-267)
```jsx
<img
  src="/img_tm_logo.png"
  alt="TRUE me camp"
  className="h-12 mb-4"
  style={{ maxWidth: '150px' }}
/>
```

## Why Image Logos?

✅ **Professional**: Better quality and scalability
✅ **Flexible**: Can include complex branding
✅ **Consistent**: Same branding across all sizes
✅ **Optimized**: Images are fast to load
✅ **Responsive**: Scales perfectly on all devices

## Next Steps

1. Export your `img_tm_logo.png` file
2. Place it in `/public` folder
3. The site will automatically display it in all three locations
4. No code changes needed!

## Troubleshooting

**Logo not showing?**
- Check file is in `/public` folder
- Verify filename is exactly `img_tm_logo.png`
- Clear browser cache and reload
- Check browser console for 404 errors

**Logo sizing incorrect?**
- Adjust `h-24`, `h-10`, or `h-12` classes
- Modify `maxWidth` values if needed
- Mobile vs desktop sizing controlled by `lg:` breakpoint

**Logo looks blurry?**
- Use higher resolution source image
- PNG must be at least 2x display size
- Recommended: 1200px+ width for hero

---

Your landing page is now ready for your branded logo image! 🎉
