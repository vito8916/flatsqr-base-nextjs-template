import {
  Blocks,
  Code2,
  FileJson,
  Globe,
  LayoutTemplate,
  Palette,
  Search,
  Zap,
} from "lucide-react";

export const navConfig = {
  links: [
    { label: "Features", href: "#features" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Get started", href: "#contact" },
};

export const heroConfig = {
  badge: "Production-ready from day zero",
  headline: "Stop rebuilding the same base.",
  headlineHighlight: "Ship what matters.",
  subheadline:
    "A Next.js 16 template with landing page, SEO, forms, dark mode and config-driven content — ready to clone and customize.",
  primaryCta: { label: "Get started", href: "#contact" },
  secondaryCta: { label: "View on GitHub", href: "https://github.com/flatsqr" },
};

export const valuePropConfig = {
  title: "Everything in one clone",
  description:
    "Stop wasting hours configuring dependencies and patterns you've already built before. FLATSQR Template gives you a production baseline that's ready to rebrand in minutes.",
  stats: [
    { value: "16+", label: "shadcn/ui components" },
    { value: "4 phases", label: "structured implementation" },
    { value: "0", label: "boilerplate to write" },
    { value: "1 config", label: "to rebrand everything" },
  ],
};

export const featuresConfig = {
  title: "Built for real products",
  description:
    "Every feature was chosen because it shows up in every serious project. Nothing experimental, nothing optional unless it should be.",
  items: [
    {
      icon: LayoutTemplate,
      title: "Full landing page",
      description:
        "Navbar, hero, features, testimonials, FAQ, contact form and footer. Clean, modern and easy to rebrand.",
    },
    {
      icon: Search,
      title: "SEO-ready from the start",
      description:
        "Metadata API, Open Graph, Twitter cards, sitemap.ts and robots.ts all wired up and config-driven.",
    },
    {
      icon: Palette,
      title: "Dark mode & theming",
      description:
        "next-themes with system preference detection. Tailwind CSS 4 with a full design token system.",
    },
    {
      icon: FileJson,
      title: "Forms & validation",
      description:
        "react-hook-form, zod and @hookform/resolvers. Patterns are established — just add your schema.",
    },
    {
      icon: Code2,
      title: "Config-driven content",
      description:
        "All copy, links and metadata live in two files. Edit once, update everywhere.",
    },
    {
      icon: Globe,
      title: "Analytics adapters",
      description:
        "Google Analytics, Vercel Analytics and Facebook Pixel — activated by environment variable, never hardcoded.",
    },
    {
      icon: Blocks,
      title: "Composable architecture",
      description:
        "lib/, components/marketing/, components/shared/ and components/ui/ with clear separation of concerns.",
    },
    {
      icon: Zap,
      title: "Optimized by default",
      description:
        "Turbopack, cacheComponents, Next.js 16 async APIs and React 19 — no performance debt on day one.",
    },
  ],
};

export const benefitsConfig = {
  title: "From clone to customized in minutes",
  description:
    "Every decision in this template was made so you can undo it in one file, not across twenty.",
  items: [
    {
      title: "One place for copy",
      description:
        "lib/config/marketing.ts controls every visible string on the landing page. Rebrand without grep.",
    },
    {
      title: "One place for site identity",
      description:
        "lib/config/site.ts holds your domain, OG image, social links and analytics configuration.",
    },
    {
      title: "Optional modules stay optional",
      description:
        "No ORM, no auth, no BaaS installed by default. Add Prisma, Better Auth or Supabase when you need them.",
    },
    {
      title: "AI agent friendly",
      description:
        "Conventions and architecture are documented so an AI code agent can continue the work without guessing.",
    },
  ],
};

export const socialProofConfig = {
  title: "Trusted by builders",
  description: "Replace these with real testimonials from your users.",
  testimonials: [
    {
      quote:
        "Saved us two days of setup on our last project. The config-driven approach is exactly what we needed.",
      name: "Sofia Martínez",
      role: "Lead Engineer",
      company: "Acme Corp",
      avatar: null,
    },
    {
      quote:
        "The SEO layer is production-grade out of the box. We just swapped the copy and shipped.",
      name: "Carlos Reyes",
      role: "Founder",
      company: "Buildfast",
      avatar: null,
    },
    {
      quote:
        "Finally a template that doesn't force Prisma and Auth on you from the start.",
      name: "Ana López",
      role: "Full Stack Developer",
      company: "Indie Studio",
      avatar: null,
    },
  ],
};

export const ctaConfig = {
  title: "Ready to build something real?",
  description:
    "Clone the template, edit two files, and start shipping your product.",
  primaryCta: { label: "Get started", href: "#contact" },
  secondaryCta: { label: "Read the docs", href: "#" },
};

export const faqConfig = {
  title: "Frequently asked questions",
  items: [
    {
      question: "Can I use this template for commercial projects?",
      answer:
        "Yes. The template is MIT-licensed. Use it for any project, personal or commercial.",
    },
    {
      question: "Does this include a database or authentication layer?",
      answer:
        "No, and that is intentional. The template is agnostic by default. You can add Prisma, Drizzle, Supabase, Better Auth or any other tool without restructuring the project.",
    },
    {
      question: "Which version of Next.js does this use?",
      answer:
        "Next.js 16.2.1 with React 19 and the App Router. All async APIs (params, cookies, headers) are handled correctly.",
    },
    {
      question: "How do I change the site name and branding?",
      answer:
        "Edit lib/config/site.ts for site identity and lib/config/marketing.ts for all visible copy on the landing page. No other files need to change.",
    },
    {
      question: "How do I enable Google Analytics or Vercel Analytics?",
      answer:
        "Copy .env.example to .env.local, set NEXT_PUBLIC_GA_ID or NEXT_PUBLIC_VERCEL_ANALYTICS=true, and the corresponding provider activates automatically.",
    },
    {
      question: "What UI component library is used?",
      answer:
        "shadcn/ui built on Base UI primitives, styled with Tailwind CSS 4 and class-variance-authority. Lucide icons are included.",
    },
  ],
};

export const footerConfig = {
  brand: {
    name: "FLATSQR Template",
    description: "A production-ready Next.js base for modern products.",
  },
  columns: [
    {
      title: "Template",
      links: [
        { label: "Features", href: "#features" },
        { label: "Benefits", href: "#benefits" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "GitHub", href: "https://github.com/flatsqr" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "FLATSQR", href: "https://flatsqr.com" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ],
  legal: "© 2026 FLATSQR. All rights reserved.",
};
