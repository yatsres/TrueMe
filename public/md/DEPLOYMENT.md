# TRUE ME Camp - Deployment Guide

Complete instructions for deploying the static TRUE ME Camp website to various hosting platforms.

## Pre-Deployment Checklist

- [ ] Run `npm run export` successfully
- [ ] Test build locally: `cd out && python -m http.server 8000`
- [ ] Verify all links work
- [ ] Check Meta Pixel is loading (check Network tab)
- [ ] Test responsive design on mobile/tablet
- [ ] Update domain in metadata
- [ ] Verify images are loaded correctly
- [ ] Test all CTA buttons track properly

## Static Export

```bash
npm run export
```

This creates an `out/` folder with:
- Static HTML files
- CSS bundles
- JavaScript (minimal)
- Optimized assets

## Deployment Options

### Option 1: Netlify (Recommended for beginners)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   npm run export
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=out
   ```

4. **Configure domain:**
   - Go to Netlify dashboard
   - Settings > Domain management
   - Add custom domain

**Advantages:**
- Free tier available
- Automatic HTTPS
- CDN included
- Simple CLI deployment

### Option 2: Vercel (Official Next.js hosting)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Configure domain:**
   - Go to Vercel dashboard
   - Settings > Domains
   - Add custom domain

**Advantages:**
- Built for Next.js
- Automatic updates from Git
- Edge network
- Analytics included

### Option 3: Cloudflare Pages

1. **Push code to GitHub:**
   ```bash
   git push origin main
   ```

2. **In Cloudflare dashboard:**
   - Go to Pages
   - Connect Git repo
   - Set build command: `npm run export`
   - Set publish directory: `out`

3. **Configure domain:**
   - Add custom domain in Pages settings

**Advantages:**
- Free tier
- Fast CDN
- Good DDoS protection
- Easy CI/CD

### Option 4: GoDaddy / Shared cPanel Hosting

1. **Build locally:**
   ```bash
   npm run export
   ```

2. **Compress the `out/` folder:**
   ```bash
   zip -r trueme-camp.zip out/
   ```

3. **Upload via FTP:**
   - Connect via FTP client (FileZilla, WinSCP)
   - Upload `out/` folder contents to `public_html/`
   - Or create subdomain folder: `public_html/camp/`

4. **Extract if needed:**
   - Use cPanel File Manager to extract if uploaded as ZIP
   - Ensure all files are in the correct directory

5. **Test the site:**
   - Visit yourdomain.com or yourdomain.com/camp

**Important for cPanel:**
- Make sure `.htaccess` is in place (if needed for routing)
- Verify file permissions (644 for files, 755 for directories)
- Check DNS is pointing to your hosting

### Option 5: AWS S3 + CloudFront

1. **Build the project:**
   ```bash
   npm run export
   ```

2. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://truemecamp.com
   ```

3. **Upload files:**
   ```bash
   aws s3 sync out/ s3://truemecamp.com/
   ```

4. **Create CloudFront distribution:**
   - Origin: your S3 bucket
   - Behaviors: all files
   - CNAME: your domain

5. **Update DNS:**
   - Point domain CNAME to CloudFront distribution

**Advantages:**
- Very scalable
- Pay per use
- Global CDN
- Professional setup

### Option 6: GitHub Pages

1. **Build the project:**
   ```bash
   npm run export
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Build site"
   git push origin main
   ```

3. **In GitHub Settings:**
   - Go to Pages
   - Set source to `main` branch, `/ (root)` or `/docs` folder
   - Add custom domain

4. **Wait for deployment:**
   - GitHub Actions will automatically deploy
   - Check Actions tab for status

**Advantages:**
- Free
- Integrated with GitHub
- Good for portfolios
- Easy version control

## Post-Deployment

### Verify Deployment

1. **Check site loads:**
   ```bash
   curl https://yourdomain.com
   ```

2. **Test Meta Pixel:**
   - Open browser DevTools
   - Go to Network tab
   - Look for `fbevents.js` request
   - Should see `fbq` in console

3. **Check responsive design:**
   - Visit on mobile, tablet, desktop
   - Test all buttons and links

4. **Lighthouse audit:**
   - Open Chrome DevTools
   - Lighthouse tab
   - Generate report
   - Aim for >90 scores

### SSL/HTTPS

All recommended platforms provide:
- Automatic SSL certificates
- HTTPS by default
- Auto-renewal
- No manual setup needed

### DNS Configuration

#### For most platforms (Netlify, Vercel, Cloudflare):
1. Update domain CNAME record
2. Point to platform's domain
3. Wait for DNS propagation (24-48 hours)

#### Example (Netlify):
```
Type: CNAME
Host: www
Value: truemecamp.netlify.app
```

#### For apex domain (@):
Use A record or platform-specific instructions:
```
Type: A
Host: @
Value: 1.2.3.4 (platform's IP)
```

## Environment Variables

If you need environment variables in the future:

1. **Create `.env.local`:**
   ```
   NEXT_PUBLIC_SITE_URL=https://truemecamp.com
   ```

2. **Access in code:**
   ```typescript
   const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
   ```

3. **Platform-specific setup:**
   - Netlify: Site settings > Build & deploy > Environment
   - Vercel: Settings > Environment Variables
   - GitHub Pages: Settings > Secrets and variables

## Troubleshooting

### Site not loading
- Check files uploaded completely
- Verify file permissions (644 for files)
- Check DNS settings
- Clear browser cache

### Meta Pixel not tracking
- Verify pixel ID is correct
- Check browser console for errors
- Ensure JavaScript is enabled
- Wait for DNS propagation

### Images not loading
- Check image paths in code
- Verify images in `public/` folder
- Check for 404 errors in Network tab

### Slow performance
- Optimize images before deployment
- Check Lighthouse performance report
- Enable gzip compression on server
- Consider upgrading to faster hosting

### Build fails
- Ensure Node.js version is compatible
- Run `npm install` to update dependencies
- Check for TypeScript errors: `npm run build`
- Review build logs for specific errors

## Monitoring

### Set up monitoring:

1. **Netlify Analytics:** Built-in, free
2. **Vercel Analytics:** Built-in
3. **Cloudflare Analytics:** Built-in
4. **Meta Pixel:** Dashboard shows conversions
5. **Google Analytics:** Add to dashboard (custom implementation)

## Updates

### To deploy updates:

1. **Make changes:**
   ```bash
   # Edit files
   ```

2. **Test locally:**
   ```bash
   npm run dev
   ```

3. **Build and export:**
   ```bash
   npm run export
   ```

4. **Deploy:**
   - **Netlify:** `netlify deploy --prod --dir=out`
   - **Vercel:** `vercel --prod`
   - **GitHub Pages:** Push to main branch
   - **FTP:** Re-upload modified files
   - **S3:** `aws s3 sync out/ s3://yourbucket/`

## Performance Optimization

### CDN
- All major platforms include global CDN
- Content delivered from nearest server
- Faster loading worldwide

### Caching
- Configure static asset caching headers
- Set long cache times for images/CSS/JS
- Clear cache when deploying updates

### Compression
- Most platforms auto-enable gzip
- Already configured in Next.js

## Security

### HTTPS
- All platforms provide free SSL/TLS
- Automatic renewal
- Enforced by default

### Security Headers
- Consider adding:
  - X-Frame-Options
  - X-Content-Type-Options
  - Strict-Transport-Security

### Platform-specific:
- **Netlify:** Security > Headers
- **Vercel:** vercel.json configuration
- **Cloudflare:** Security tab

## Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vercel Docs:** https://vercel.com/docs
- **TailwindCSS Docs:** https://tailwindcss.com/docs
- **Framer Motion Docs:** https://www.framer.com/motion

## Questions?

Contact: hello@truemecamp.com
