# Luxorum Creative

**Premium Digital Agency · UAE & Gulf**  
Website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Email | Resend |
| Analytics | Google Analytics 4 + Microsoft Clarity |
| Deployment | Vercel Free Plan |

---

## Quick Start

```bash
# 1. Install
npm install

# 2. Environment variables
cp .env.example .env.local
# Fill in: RESEND_API_KEY, NEXT_PUBLIC_GA_MEASUREMENT_ID, NEXT_PUBLIC_CLARITY_ID

# 3. Dev server
npm run dev
# → http://localhost:3000

# 4. Production build
npm run build
```

---

## Project Structure

```
luxorum/
├── app/
│   ├── layout.tsx          ← Root layout (lang="en", SEO metadata)
│   ├── page.tsx            ← Home page (all sections)
│   ├── about/
│   ├── services/
│   ├── ai-solutions/
│   ├── portfolio/
│   ├── blog/
│   │   └── [slug]/
│   ├── contact/
│   └── api/contact/        ← REST contact endpoint
├── components/
│   ├── layout/             ← Navbar (mobile drawer), Footer
│   ├── home/               ← All homepage sections
│   └── shared/             ← Analytics, WhatsAppFloat, Toaster
├── constants/index.ts      ← All content (English default)
├── types/index.ts
├── lib/
│   ├── utils.ts
│   └── resend.ts           ← Email templates
├── actions/contact.ts      ← Server action + Zod validation
└── styles/globals.css
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Home (Hero, Services, Why Us, Portfolio, AI, Process, Testimonials, FAQ, CTA, Contact) |
| `/services` | All 9 services |
| `/ai-solutions` | AI products and stats |
| `/portfolio` | Filterable project grid |
| `/about` | Team, values, stats |
| `/blog` | Post listing |
| `/blog/[slug]` | Full post |
| `/contact` | Contact form |

---

## Mobile Responsiveness

Every component is built mobile-first:
- **Navbar** — slide-in drawer with WhatsApp shortcut
- **Hero** — `100dvh`, stacked CTAs, 2×2 stat grid
- **Filter tabs** — horizontal scroll (no clipping)
- **Grids** — 1 col → 2 col → 3 col
- **Contact form** — single column on mobile
- **Footer** — 2-col → 4-col
- **Touch targets** — min 44px, `-webkit-tap-highlight-color: transparent`

---

## Deploy to Vercel

1. Push to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Add env vars in dashboard
4. Deploy — zero config needed (Vercel Free Plan compatible)

---

## Environment Variables

```env
RESEND_API_KEY=re_...
FROM_EMAIL=noreply@luxorumcreative.com
TO_EMAIL=contact@luxorumcreative.com
NEXT_PUBLIC_SITE_URL=https://luxorumcreative.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@luxorumcreative.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
```

---

**Luxorum Creative** · contact@luxorumcreative.com · Dubai, UAE
