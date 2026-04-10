# Krishna Interiors — krishnainteriors.in

Premium interior design website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/                  # Next.js 14 App Router pages
│   ├── page.tsx          # Home
│   ├── services/         # Services page
│   ├── portfolio/        # Portfolio with filters
│   ├── about/            # About page
│   └── contact/          # Contact form
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Services, Portfolio, etc.
│   └── ui/               # ScrollReveal, reusable components
├── hooks/
│   ├── useTheme.tsx      # Dark/Light theme context
│   └── useScrollReveal.ts
├── lib/
│   └── utils.ts          # Shared data, helpers
└── styles/
    └── globals.css        # Global styles, CSS variables
```

## 🎨 Theme System

The site supports both **dark** and **light** themes. Toggle is in the navbar.
- Theme saved to `localStorage` as `ki-theme`
- CSS variables in `globals.css` handle all color switching

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, about, services, portfolio, process, testimonials |
| `/services` | All services + transparent pricing tiers |
| `/portfolio` | Filterable project gallery |
| `/about` | Company story, values, team, stats |
| `/contact` | Lead capture form + map |

## 🔧 Environment Variables

Create `.env.local` for future backend integrations:

```env
# Supabase (for contact form leads)
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

# Sanity (for CMS)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 🚢 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set custom domain
# Go to vercel.com → Project → Settings → Domains
# Add: krishnainteriors.in
# Update DNS: A record → 76.76.21.21
```

## 📦 Tech Stack

- **Next.js 14** — App Router, SSR/SSG
- **React 18** — UI components
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations (ready to use)
- **Lucide React** — Icons
- **Google Fonts** — Cormorant Garamond + DM Sans

## 📞 Client Details

- **Domain:** krishnainteriors.in
- **WhatsApp:** +91 87969 56034
- **Address:** Plot 836, Shalimar Garden Ext-1, Ghaziabad UP 201005
- **Instagram:** @_krishna_interiors_

## 🔮 Next Steps (Phase 2)

- [ ] Connect Supabase for contact form leads
- [ ] Add Sanity CMS for portfolio/content management
- [ ] Admin dashboard (view leads)
- [ ] Three.js 3D room visualizer
- [ ] Before/After slider component
- [ ] WhatsApp Business API integration
- [ ] Google Analytics 4
