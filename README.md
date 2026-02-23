# NOVA Studio Company Profile

Production-ready modern company profile website for web agency / AI SaaS startup / digital creative studio.

## Stack

- Next.js 14 (App Router)
- TailwindCSS
- Framer Motion
- GSAP (ScrollTrigger)
- Headless CMS-ready data layer (Sanity/Contentful/Strapi/generic)
- PostHog analytics
- HubSpot + Webhook lead pipeline
- Resend email notifications

## Highlights

- Dark + Light mode
- Animated gradient background
- Lottie-like 3D animated orb illustration
- Glassmorphism cards
- Bento grid capabilities section
- Scroll storytelling interactions
- Conversion-focused CTA section
- SEO metadata ready

## Run locally

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm run start
```

## CMS integration

1. Copy `.env.example` to `.env.local`
2. Choose `CMS_PROVIDER`:
	- `generic` (custom JSON API)
	- `contentful`
	- `strapi`
	- `sanity`
3. Fill provider-specific env values from `.env.example`

If CMS is unavailable, website automatically uses built-in fallback content.

### Sanity quick setup

1. Set `CMS_PROVIDER=sanity`
2. Fill `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_VERSION`
3. Optional: set `SANITY_READ_TOKEN` for private dataset
4. Optional: set `SANITY_QUERY` (must return shape compatible with `CompanyContent`)

Template schema siap import tersedia di `sanity/companyContent.schema.ts` (panduan: `sanity/README.md`).
Contoh seed content siap import tersedia di `sanity/seed/companyContent.ndjson`.

Untuk workflow production yang lebih clean, gunakan studio terpisah di `sanity-studio/` (lihat `sanity-studio/README.md`).

## Contact / CRM integration

- Frontend CTA form submits to `POST /api/contact`
- You can enable one or multiple destinations:
	- `CONTACT_WEBHOOK_URL` (+ optional `CONTACT_WEBHOOK_TOKEN`)
	- `HUBSPOT_PORTAL_ID` + `HUBSPOT_FORM_ID` (+ optional `HUBSPOT_PRIVATE_APP_TOKEN`)
	- `RESEND_API_KEY` + `RESEND_FROM` + `RESEND_TO`

If no destination is configured, API returns success fallback for staging.

## Analytics (PostHog)

- Set `NEXT_PUBLIC_POSTHOG_KEY`
- Optional host override via `NEXT_PUBLIC_POSTHOG_HOST`
- Tracking initializes globally in layout after page interactive.
