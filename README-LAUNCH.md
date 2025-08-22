# FlipScout vehicle — Launch checklist

This file contains a short checklist to get FlipScout live and social-ready.

## Quick launch checklist

- [ ] Register a domain (example: flipscoutvehicle.com)
- [ ] Create a contact email (contact@yourdomain.com) and add it to social profiles
- [ ] Deploy frontend to Vercel (connect this GitHub repo)
  - Build command: `npm run build`
  - Environment: set NEXT_PUBLIC_API_URL once backend is ready
- [ ] Create social accounts (pick a single username across platforms, e.g. @FlipScoutHQ)
- [ ] Pin launch post and add website link to profiles
- [ ] Set up Formspree or deploy backend to handle contact form submissions
- [ ] Create Stripe account and products/pricing, add webhook endpoint when backend is ready
- [ ] Add analytics (Google Analytics or Plausible) and privacy policy page

## Where to find the brand assets
- SVG logo: `/public/flipscout-logo.svg`
- Pricing UI: `components/PricingCard.tsx` (already added in PR #9)

## Deploy notes
- Use Vercel for frontend and Render or Railway for the backend.
- Add environment variables to Vercel dashboard (NEXT_PUBLIC_API_URL when backend exists)