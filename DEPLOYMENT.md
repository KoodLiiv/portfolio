# Deployment Guide

## Quick Deploy to Vercel

The easiest way to deploy this Next.js portfolio is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Steps:

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure your project:
   - Framework Preset: **Next.js**
   - Root Directory: **./** (default)
   - Build Command: **npm run build** (default)
   - Output Directory: **.next** (default)
6. Add environment variables (if needed)
7. Click "Deploy"

Your portfolio will be live in minutes!

## Environment Variables

Create a `.env.local` file for local development:

```env
# Replace with your actual domain when deploying
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Update URLs

After deployment, update these files with your actual domain:

1. **app/layout.tsx** - Update OpenGraph URLs
2. **app/sitemap.ts** - Update baseUrl
3. **app/robots.ts** - Update sitemap URL
4. **app/page.tsx** - Update schema.org URLs

Example:
```typescript
// Before
const baseUrl = 'https://portfolio.example.com'

// After
const baseUrl = 'https://your-actual-domain.com'
```

## Custom Domain

### On Vercel:

1. Go to your project settings
2. Click on "Domains"
3. Add your custom domain
4. Update your DNS records as instructed
5. SSL certificate will be automatically provisioned

## Performance Optimization

The portfolio is already optimized, but you can further improve:

### Images
Add images to `/public/images/` and use Next.js Image component:

```tsx
import Image from 'next/image'

<Image 
  src="/images/your-image.jpg"
  alt="Description"
  width={1200}
  height={630}
  priority // for above-fold images
/>
```

### Analytics

Add analytics by installing a package:

```bash
npm install @vercel/analytics
```

Then update `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react'

// In the body
<body>
  {/* ... */}
  <Analytics />
</body>
```

## Build Verification

Before deploying, always verify locally:

```bash
# Build the project
npm run build

# Test the production build
npm start

# Visit http://localhost:3000
```

### Check Build Output

Ensure all pages are static:
```
Route (app)                              Size     First Load JS
┌ ○ /                                    ...      ...
├ ○ /case-studies/dmsp                   ...      ...
├ ○ /case-studies/nooon                  ...      ...
```

The ○ symbol indicates static pages (optimal for SEO).

## SEO Checklist

After deployment:

- [ ] Verify sitemap at `https://your-domain.com/sitemap.xml`
- [ ] Verify robots.txt at `https://your-domain.com/robots.txt`
- [ ] Test meta tags with [metatags.io](https://metatags.io/)
- [ ] Submit sitemap to Google Search Console
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Validate schema markup with [Schema Validator](https://validator.schema.org/)
- [ ] Check OpenGraph with [OpenGraph Debugger](https://www.opengraph.xyz/)

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches and PRs

Configure deployment settings in `vercel.json` if needed:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

## Monitoring

After deployment, monitor:

1. **Vercel Analytics** - Page views, performance
2. **Google Search Console** - Indexing, search performance
3. **Google Analytics** - User behavior (if installed)
4. **Core Web Vitals** - LCP, FID, CLS scores

## Troubleshooting

### Build Fails

Check:
- Node.js version (use 18+)
- Dependencies installed correctly
- No TypeScript errors
- Environment variables set

### 404 Errors

- Ensure all links use correct paths
- Check case sensitivity in file names
- Verify dynamic routes are exported

### Slow Performance

- Optimize images (use WebP/AVIF)
- Enable caching headers
- Use CDN for static assets
- Minimize JavaScript bundle size

## Support

For issues or questions:
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: Create an issue in your repository
