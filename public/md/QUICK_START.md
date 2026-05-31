# TRUE ME Camp - Quick Start Guide

Get your landing page up and running in minutes.

## 1. Installation (2 min)

```bash
# Install dependencies
npm install
```

## 2. Development (start coding)

```bash
# Start dev server
npm run dev

# Open browser
# Visit http://localhost:3000
```

## 3. Build & Deploy (5 min)

### Option A: Deploy to Netlify (easiest)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run export

# Deploy
netlify deploy --prod --dir=out

# Add custom domain in Netlify dashboard
```

### Option B: Deploy to Vercel (Next.js official)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Follow prompts to add custom domain
```

### Option C: Deploy to GoDaddy/cPanel (shared hosting)

```bash
# Build
npm run export

# Upload 'out' folder contents to public_html via FTP
# Test: visit yourdomain.com
```

## 4. After Deployment

- [ ] Verify site loads: https://yourdomain.com
- [ ] Test Meta Pixel tracking (DevTools > Network > fbevents.js)
- [ ] Test responsive design on mobile
- [ ] Update domain in metadata
- [ ] Add Google Analytics (optional)
- [ ] Set up email forwarding for hello@truemecamp.com

## Common Changes

### Update Headline Text

Edit `components/Hero.tsx`:
```typescript
<h1>Your new headline here</h1>
```

### Change CTA Button

Edit any component with button:
```typescript
<button onClick={() => {
  // Track with Meta Pixel
  window.fbq('track', 'Lead');
  // Open booking link
  window.location.href = 'YOUR_BOOKING_LINK';
}}>
  Book a Call
</button>
```

### Update Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'trueme': {
    'green': '#YOUR_COLOR',
  }
}
```

### Add Images

1. Place images in `public/images/`
2. Use in components:
```typescript
<img src="/images/my-image.jpg" alt="description" />
```

## File Structure Quick Reference

```
components/          ← Edit for content/design changes
  Header.tsx         ← Navigation & logo
  Hero.tsx           ← Hero section
  CardGrid.tsx       ← 6 experience cards
  AboutSection.tsx   ← About with image
  StorytellingSection.tsx ← Editorial story
  Footer.tsx         ← Footer links

app/
  page.tsx           ← Main page layout
  layout.tsx         ← Metadata & Meta Pixel
  globals.css        ← Global styles

tailwind.config.js   ← Colors, spacing, fonts
next.config.js       ← Build config
```

## Troubleshooting

### Site won't build
```bash
# Clear cache
rm -rf .next
npm install
npm run build
```

### Meta Pixel not tracking
- Check DevTools Console for errors
- Verify pixel ID in `app/layout.tsx`
- Wait 15-30 min for data to appear in Meta dashboard

### Images not showing
- Check path is `/images/filename.jpg`
- Verify file is in `public/images/` folder
- Check DevTools Network tab for 404 errors

### Mobile looks wrong
- Check responsive classes in Tailwind
- Use `md:` and `lg:` breakpoints
- Test in browser DevTools device mode

## Next Steps

1. **Customize Content**
   - Read `README.md` for detailed information
   - Edit components to match your brand
   - Add real images

2. **Track Analytics**
   - Meta Pixel is ready (ID: 1558481559035983)
   - Google Analytics config in `lib/analytics.ts`
   - Add tracking to CTA buttons

3. **SEO Optimization**
   - Update metadata in `app/layout.tsx`
   - Add proper page title and description
   - Add canonical tags
   - Submit sitemap to Google

4. **Performance**
   - Run Lighthouse audit: DevTools > Lighthouse
   - Optimize images with TinyPNG
   - Check Core Web Vitals

5. **Domain & Email**
   - Configure custom domain (see DEPLOYMENT.md)
   - Set up email forwarding
   - Add DNS records

## Support

**Documentation:**
- `README.md` - Complete overview
- `DEPLOYMENT.md` - All deployment options
- `DESIGN_SYSTEM.md` - Design tokens & patterns

**Questions?**
- Contact: hello@truemecamp.com
- Docs: https://nextjs.org
- Support: Netlify/Vercel dashboard help

## Need Help?

### Build fails?
```bash
npm run build
```
Check error message and search in docs.

### Slow performance?
```bash
npm run export
# Check file sizes in 'out/' folder
# Optimize images before adding
```

### Responsive issues?
Open DevTools → Device toolbar → test on different sizes.

---

**Ready to customize?** Start editing `components/Hero.tsx` and watch changes live in dev server! 🚀
