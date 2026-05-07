# Glowmigos Home Services — Website

Next.js 15 + Tailwind CSS v4 marketing site for [Glowmigos Home Services](https://glowmigoshomeservices.com), a Castle Rock, CO home services contractor.

Five pages, working lead capture (Supabase + Resend), mobile-first, deploy-ready for Vercel.

## Stack

- **Next.js 15** (App Router, TypeScript, React 19)
- **Tailwind CSS v4** (using `@tailwindcss/postcss`)
- **Supabase** — lead storage (`leads` table, service-role writes from API)
- **Resend** — notification emails to the owner
- **Zod** — form validation
- **lucide-react** — icons

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in secrets
npm run dev
```

Open http://localhost:3000.

### Quick checks

```bash
npm run typecheck   # strict TS
npm run build       # production build
```

## Environment variables

Copy `.env.local.example` to `.env.local`:

| Var | Purpose | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Public — fine to expose |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key | **Server-only.** Never use a `NEXT_PUBLIC_` prefix |
| `RESEND_API_KEY` | Resend API key | Server-only |
| `NOTIFICATION_EMAIL` | Inbox that receives lead emails | Default: `glowmigosroofing@gmail.com` |
| `FROM_EMAIL` | Verified Resend sending address | e.g. `leads@mail.glowmigoshomeservices.com` |
| `TWILIO_ACCOUNT_SID` | Twilio account SID | Server-only. Required for SMS notifications |
| `TWILIO_AUTH_TOKEN` | Twilio auth token | Server-only |
| `TWILIO_FROM_NUMBER` | Twilio sending number, E.164 format | e.g. `+13035551234`. Must be a Twilio-owned or verified number |
| `NOTIFICATION_PHONE` | Mobile that receives lead SMS, E.164 format | e.g. `+13032103886` (Ronny). Optional — if any of the four Twilio vars is missing, SMS is skipped silently |
| `NEXT_PUBLIC_SITE_URL` | Optional. Used for sitemap and OG URLs | Defaults to `https://glowmigoshomeservices.com` |

## Supabase setup

Run this once in the Supabase SQL editor:

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  phone text not null,
  email text not null,
  address text not null,
  service text not null,
  message text,
  source text default 'website',
  status text default 'new'
);
```

RLS is **off** for now. All writes happen from `/api/leads` using the service-role key, which bypasses RLS. If you want RLS on later, you can leave it off for the `service_role` since service-role always bypasses.

## Resend setup

The lead email sends from `FROM_EMAIL` — that domain has to be verified in Resend.

1. In Resend, add `mail.glowmigoshomeservices.com` (or any subdomain you control) as a sending domain.
2. Add the DKIM/SPF DNS records Resend gives you. Wait for green checkmarks.
3. Set `FROM_EMAIL=leads@mail.glowmigoshomeservices.com` in your env.
4. Set `NOTIFICATION_EMAIL=glowmigosroofing@gmail.com` (or wherever Ronny wants notifications to land).

If the from-domain isn't verified, the API route still saves the lead to Supabase; only the email send fails (logged to console).

## Deploy to Vercel

1. Push this repo to GitHub: `https://github.com/GabeCommunityRipple/glowmigos-site`
2. Import the repo in Vercel.
3. Add the environment variables above to the project (Production + Preview).
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain (e.g. `https://glowmigoshomeservices.com`).
5. Deploy. The `/api/leads` route runs on the Node.js runtime (not edge) — that's set explicitly in the route file.

## Project structure

```
src/
├── app/
│   ├── layout.tsx                       # Root layout, fonts, JSON-LD LocalBusiness
│   ├── page.tsx                         # Home
│   ├── services/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── nrcia-roof-inspection/page.tsx   # NRCIA differentiator page
│   ├── api/leads/route.ts               # Lead capture API (Zod → Supabase → Resend)
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── LeadForm.tsx                     # Reused across home, services, contact, NRCIA
│   ├── TrustStrip.tsx
│   ├── MobileCallBar.tsx                # Sticky bottom Call/Estimate bar
│   └── CTASection.tsx
└── lib/
    ├── brand.ts                         # ⭐ Single source of truth for brand content
    ├── supabase.ts                      # Server-only admin client
    ├── resend.ts                        # Server-only Resend client
    └── schemas.ts                       # Zod lead schema
```

## Rebranding (e.g. to "Big Horn Construction")

All brand-level content lives in `src/lib/brand.ts`: name, tagline, phone, email, address, service areas, certifications, founding year, owner, and the full service list. Edit that one file to swap brands. Components pull from it; nothing is hardcoded.

You'll also want to update:
- `src/app/layout.tsx` — `metadataBase`, `title`, the JSON-LD schema (already pulls from `brand`, so usually fine)
- `src/app/sitemap.ts` and `src/app/robots.ts` — `NEXT_PUBLIC_SITE_URL` env (no code change needed)
- `package.json` — `name` field
- This README

## Decisions made (vs. brief)

- **Tailwind v4** with `@tailwindcss/postcss` (no `tailwind.config.js` — v4 reads `@theme` directly from CSS).
- **No `tailwind.config.js`** — Tailwind v4 doesn't need one for our setup. Theme tokens live in `globals.css` under `@theme`.
- **Email send is non-fatal** — if Resend fails, the lead is still saved to Supabase and the user sees success. The error is logged. This avoids losing leads to email-config issues.
- **Honeypot field is `website`** — hidden, bot-fills-it, we silently 200 if filled.
- **Hero background** uses an Unsplash placeholder (Front Range mountains). TODO: replace with Ronny's real photos.
- **Reviews section** is a placeholder noting Nextdoor recognition. TODO: integrate Google Reviews API or curate manually.
- **Hours** are placeholder (Mon–Sat 7am–7pm, Sun by appointment). Confirm with Ronny.
- **Class A license upgrade** — phrased as "planning" since the brief said it's in progress.
- **Sitemap and robots** generated via Next 15 file conventions (`sitemap.ts` / `robots.ts`).
- **`RoofingContractor` schema** chosen over generic `LocalBusiness` since roofing is the lead service.

## Things deliberately not built (per brief)

- No CMS or blog
- No auth or admin panel
- No Stripe / payments
- No appointment booking (TidyCal can be wired later)
- No image gallery (waiting on Ronny's photos)
- No Google Reviews integration (manual content for now)

## What to ask Ronny next

- Real photos for hero + service sections
- Hours confirmation
- Domain DNS access for Resend verification
- Google Business Profile review URL (if Reviews integration is wanted)
- Final go/no-go on `mail.glowmigoshomeservices.com` as the sending subdomain
