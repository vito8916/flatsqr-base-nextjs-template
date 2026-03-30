# FLATSQR Base Next.js Template

A production-ready Next.js 16 template for starting new projects fast. Clone, customize two files, and ship.

## Quick start

```bash
git clone https://github.com/flatsqr/flatsqr-base-nextjs-template my-project
cd my-project
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to customize

### 1. Site identity

Edit `lib/config/site.ts`:

```ts
export const siteConfig = {
  name: "My Product",
  shortName: "MP",
  description: "What my product does.",
  url: "https://myproduct.com",
  ogImage: "/og.png",
  links: {
    twitter: "https://twitter.com/myhandle",
    github: "https://github.com/myorg",
  },
  // ...
};
```

### 2. Landing page copy

Edit `lib/config/marketing.ts` to change every visible string on the landing page — nav links, hero headline, feature cards, testimonials, FAQ, footer — without touching component files.

### 3. Environment variables

Copy `.env.example` to `.env.local` and fill in the values you need:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical domain used for SEO and sitemap |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_VERCEL_ANALYTICS` | Set to `"true"` to enable Vercel Analytics |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Facebook Pixel numeric ID |

Analytics providers activate automatically when their variable is present. None are enabled by default.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| UI | React 19, shadcn/ui on Base UI |
| Styling | Tailwind CSS 4 |
| Forms | react-hook-form + zod |
| Animations | motion/react |
| Dark mode | next-themes |
| Toasts | sonner |
| Icons | lucide-react |
| Charts | recharts |
| Tables | @tanstack/react-table |
| Dates | date-fns |

## Folder structure

```
app/                    # Next.js App Router
  layout.tsx            # Root layout with providers and global metadata
  page.tsx              # Home (landing page)
  robots.ts             # robots.txt
  sitemap.ts            # sitemap.xml

components/
  marketing/            # Landing page sections
  shared/               # Cross-app components (ThemeProvider, LinkButton)
  ui/                   # shadcn/ui component library

lib/
  config/
    site.ts             # Site identity, domain, analytics config
    marketing.ts        # All landing page copy and data
  analytics/
    index.tsx           # AnalyticsProvider (mounts active providers)
    providers/          # google.tsx, vercel.tsx, facebook.tsx
  seo/
    metadata.ts         # createMetadata() helper for per-page metadata
  env.ts                # Zod-validated environment variables
  utils.ts              # cn() utility
  validations/
    contact.ts          # Zod schema for contact form

hooks/
  use-mobile.ts         # Mobile breakpoint detection

public/
  og.png                # Default Open Graph image (replace with your own)
```

## SEO

Global metadata is set in `app/layout.tsx` from `siteConfig`. For per-page metadata:

```ts
// app/about/page.tsx
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "About",
  description: "About our team.",
  path: "/about",
});
```

## Adding optional modules

The core template has no database, auth or BaaS dependencies. Add what you need:

### Database (Prisma)

```bash
pnpm add prisma @prisma/client
npx prisma init
```

Create `lib/db.ts` as a Prisma client singleton. See [Prisma docs](https://www.prisma.io/docs/getting-started).

### Database (Drizzle)

```bash
pnpm add drizzle-orm drizzle-kit
```

Create `lib/db/` with your schema and client. See [Drizzle docs](https://orm.drizzle.team/docs/get-started).

### Auth (Better Auth)

```bash
pnpm add better-auth
```

Create `lib/auth.ts` and `app/api/auth/[...all]/route.ts`. See [Better Auth docs](https://www.better-auth.com/docs).

### BaaS (Supabase)

```bash
pnpm add @supabase/supabase-js
```

Create `lib/supabase/client.ts` and `lib/supabase/server.ts`. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`.

### Vercel Analytics

```bash
pnpm add @vercel/analytics
```

Uncomment the import in `lib/analytics/providers/vercel.tsx` and set `NEXT_PUBLIC_VERCEL_ANALYTICS=true` in `.env.local`.

## Scripts

```bash
pnpm dev      # Start development server (Turbopack)
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## License

MIT
