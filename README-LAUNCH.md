# FlipScout vehicle — Launch checklist (expanded)

This is an expanded, actionable checklist to get FlipScout live, track launches, and run first marketing posts.

## Priority launch checklist (quick)

- [ ] Register a domain (example: flipscoutvehicle.com) and add WHOIS privacy if desired.
- [ ] Create a contact email (contact@yourdomain.com) and add it to social profiles.
- [ ] Connect repo to Vercel and deploy the frontend:
  - Build command: `npm run build`
  - Output directory: (Next.js defaults) `.next`
  - Environment variables (Vercel env names suggested):
    - NEXT_PUBLIC_API_URL — https://api.flipscout.example (set after backend deployed)
    - NEXT_PUBLIC_ANALYTICS — plausible or ga id (optional)
- [ ] Upload profile assets: /public/flipscout-logo.svg, avatar (400x400), og image (1200x630).
- [ ] Create social accounts (pick one username across platforms — e.g. @FlipScoutHQ).
- [ ] Set up contact form handling (Formspree or your backend).
- [ ] Create Stripe account, products/pricing, and set a webhook endpoint when backend exists.
- [ ] Add analytics and privacy policy page; add cookie banner if required by region.

## Vercel deploy steps (detailed)

1. Go to https://vercel.com/new and import the GitHub repo.
2. Set framework to "Next.js" (auto-detected).
3. Add environment variables in Vercel dashboard:
   - NEXT_PUBLIC_API_URL = https://api.flipscout.example (or empty for now)
   - NEXT_PUBLIC_ANALYTICS = plausible=XXXX or GA_MEASUREMENT_ID
4. Set production branch to `main`.
5. Add a domain in Vercel Domains and follow DNS instructions (add A/CNAME records or use Vercel nameservers).
6. After initial deploy, verify:
   - Homepage loads and images (logo, OG) serve correctly.
   - /pricing and /contact pages work.
   - Contact form submits (if using Formspree, test a submission).

## DNS checklist

- Add domain records:
  - A or ALIAS to Vercel as instructed, or set Vercel nameservers.
- Add email verification/SPF/DKIM entries for contact email provider.
- Add a redirect from root to www or vice versa (pick canonical).

## Analytics & tracking

- Add Plausible or Google Analytics snippet to _app or a small analytics component.
- Create UTM tracking plan for launch links:
  - Example UTM: ?utm_source=x&utm_medium=social&utm_campaign=launch_2025
- Create short links (bit.ly or similar) for social posts to track performance.

## Privacy, cookies & legal

- Add a basic privacy policy page (privacy-policy.md) explaining analytics and contact data.
- If you collect emails, add a GDPR-compliant consent sentence on forms.
- Add a cookie banner if operating in EU/UK.

## Contact form / inbound messages

- If using Formspree: register, copy form ID, replace form action in pages/contact.tsx.
- If using backend: create /api/contact endpoint, set NEXT_PUBLIC_API_URL accordingly.
- Test submissions and confirm deliveries to contact@yourdomain.com or Slack/email.

## Stripe & payments (launch-prep)

- Create Stripe account and products/pricing (mirror the Pricing page).
- Test mode: create test products and test webhook handling.
- Add webhook endpoint to production when backend is ready.
- Document env vars required by backend: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET.

## Socials & marketing checklist

- Add assets:
  - Avatar: public/flipscout-avatar-400.png
  - OG image: public/flipscout-og-1200x630.png
  - Logo: public/flipscout-logo.svg
- Prepare pinned launch post on each platform with CTA and signup link.
- Schedule follow-ups for days 1, 3, and 7 after launch.

## Launch day timeline (suggestion)

- T-1 hour: Final smoke test on staging/prod (pages, forms, tracking).
- T: Press publish, tweet/post, email list.
- T+1 hour: Check analytics and first traffic sources; reply to comments.
- T+24 hours: Run initial A/B content or adjust copy based on early feedback.

## Release & PR workflow

- Merge PRs when CI passes and smoke tests succeed.
- Use PR title format: `feat|fix|chore: short description`.
- Tag release (optional): `v0.1.0` once merged and tested.
- Keep changes small and iterative — prefer multiple small PRs (branding, analytics, forms).

## Post-launch checklist (first week)

- Monitor errors and user feedback (Sentry / logs).
- Iterate on pricing CTA and homepage CTAs based on conversion.
- Collect email list signups and seed outreach.

## Where to find brand & code assets

- Logo: `/public/flipscout-logo.svg`
- Pricing UI: `components/PricingCard.tsx` (PR #9)
- Homepage & contact: `pages/index.tsx`, `pages/contact.tsx` (PR #10)
- This launch checklist: `README-LAUNCH.md`