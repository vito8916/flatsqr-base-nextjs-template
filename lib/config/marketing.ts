import {
  Blocks,
  Code2,
  FileJson,
  Globe,
  LayoutTemplate,
  Palette,
  Search,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";

export const navConfig = {
  links: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQs", href: "#faq" },
  ],
  cta: { label: "Get Started", href: "#pricing" },
};

export const heroConfig = {
  badge: "Trusted by 200+ Customers",
  headline: "Build faster.",
  headlineHighlight: "Ship smarter.",
  subheadline:
    "The modern platform that helps teams move from idea to launch in record time. No complexity, just results.",
  primaryCta: { label: "Get Started", href: "#pricing" },
  secondaryCta: { label: "Watch Demo", href: "#" },
};

export const logoCloudConfig = {
  title: "Trusted by innovative companies worldwide",
  logos: [
    { name: "Acme", text: "ACME" },
    { name: "Quantum", text: "QUANTUM" },
    { name: "Pulse", text: "PULSE" },
    { name: "Echo", text: "ECHO" },
    { name: "Nova", text: "NOVA" },
  ],
};

export const featuresConfig = {
  title: "Features",
  description:
    "Everything you need to build, launch, and scale your product. Designed with simplicity at its core.",
  items: [
    {
      icon: LayoutTemplate,
      title: "Intuitive Interface",
      description:
        "Clean, modern design that your team will love. No learning curve, just productivity from day one.",
      size: "large",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built for speed. Experience instant loading and real-time collaboration without the wait.",
      size: "large",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and compliance. Your data is safe with us.",
      size: "small",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description:
        "Deploy anywhere. Our infrastructure scales automatically to meet your needs.",
      size: "small",
    },
  ],
};

export const statsConfig = {
  title: "Data speaks louder than marketing",
  description:
    "Real numbers from real customers. See the impact on their business.",
  items: [
    { value: "55%", label: "Faster deployment", description: "Average time saved" },
    { value: "55%", label: "Cost reduction", description: "Infrastructure savings" },
    { value: "55%", label: "Team efficiency", description: "Productivity increase" },
    { value: "55%", label: "User satisfaction", description: "NPS improvement" },
  ],
};

export const howItWorksConfig = {
  title: "How It Works",
  description:
    "Break down your process into simple steps. People don&apos;t buy what they don&apos;t understand.",
  steps: [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Create your account in seconds. No credit card required to get started.",
    },
    {
      number: "02",
      title: "Configure",
      description:
        "Set up your workspace with our guided onboarding. Import your existing data seamlessly.",
    },
    {
      number: "03",
      title: "Launch",
      description:
        "Go live with confidence. Our team is here to support you every step of the way.",
    },
  ],
};

export const whyChooseUsConfig = {
  title: "Why Choose Us",
  description: "Make your strengths obvious. Here&apos;s what sets us apart.",
  items: [
    {
      icon: Shield,
      title: "Reliability",
      description: "99.9% uptime guaranteed with 24/7 monitoring.",
    },
    {
      icon: Users,
      title: "Support",
      description: "Real humans, real help. Average response time under 2 hours.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Built to scale with your business. No limits, no surprises.",
    },
    {
      icon: Clock,
      title: "Speed",
      description: "Ship features faster. Our tools are designed for velocity.",
    },
  ],
};

export const integrationsConfig = {
  title: "Integrations",
  description: "It plays nice with your stack. Works with the tools you already use.",
  logos: [
    { name: "Slack", text: "SLACK" },
    { name: "Notion", text: "NOTION" },
    { name: "Figma", text: "FIGMA" },
    { name: "GitHub", text: "GITHUB" },
    { name: "Linear", text: "LINEAR" },
  ],
};

export const socialProofConfig = {
  title: "Reviews",
  description: "Users can sell your product better than you. Hear what they have to say.",
  testimonials: [
    {
      quote:
        "This platform transformed how our team works. We shipped 3x faster in the first month alone.",
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow",
      country: "United States",
      rating: 5,
    },
    {
      quote:
        "Finally, a tool that just works. No bloat, no complexity. Pure productivity.",
      name: "Marcus Weber",
      role: "Founder",
      company: "BuildFast",
      country: "Germany",
      rating: 5,
    },
    {
      quote:
        "The best investment we made this year. ROI was clear within the first week.",
      name: "Priya Sharma",
      role: "Product Lead",
      company: "ScaleUp",
      country: "India",
      rating: 5,
    },
    {
      quote:
        "Support is incredible. They actually care about helping you succeed.",
      name: "James Miller",
      role: "Engineering Manager",
      company: "Nimbus",
      country: "Canada",
      rating: 5,
    },
  ],
};

export const pricingConfig = {
  title: "Pricing",
  description: "No one likes surprise costs. Transparent pricing with clear value.",
  plans: [
    {
      name: "Starter",
      description: "Perfect for trying things out",
      price: "Free",
      period: "for 7 days",
      features: [
        "Up to 3 team members",
        "Basic analytics",
        "Community support",
        "1GB storage",
      ],
      cta: { label: "Start Free Trial", href: "#" },
      highlighted: false,
    },
    {
      name: "Pro",
      description: "For growing teams",
      price: "$69",
      period: "/month",
      features: [
        "Unlimited team members",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Custom integrations",
        "API access",
      ],
      cta: { label: "Get Started", href: "#" },
      highlighted: true,
    },
    {
      name: "Pro+",
      description: "For larger organizations",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Pro",
        "Dedicated support",
        "Unlimited storage",
        "Custom contracts",
        "SLA guarantee",
        "On-premise option",
      ],
      cta: { label: "Contact Sales", href: "#" },
      highlighted: false,
    },
  ],
};

export const faqConfig = {
  title: "Frequently Asked Questions",
  description: "Handle objections before they happen.",
  items: [
    {
      question: "How long does setup take?",
      answer:
        "Most teams are up and running within 15 minutes. Our guided onboarding walks you through every step, and our support team is always available to help.",
    },
    {
      question: "Can I import my existing data?",
      answer:
        "Yes! We support imports from all major platforms. Our migration tools make the process seamless, and we can assist with complex migrations.",
    },
    {
      question: "What happens after my trial ends?",
      answer:
        "You can upgrade to a paid plan or continue with limited features on our free tier. We never delete your data, so you can pick up where you left off anytime.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use bank-grade encryption, conduct regular security audits, and are SOC 2 Type II certified. Your data privacy is our top priority.",
    },
  ],
};

export const ctaConfig = {
  title: "Ready to get started?",
  description:
    "Join thousands of teams already building faster. Start your free trial today.",
  primaryCta: { label: "Start Free Trial", href: "#pricing" },
};

export const footerConfig = {
  brand: {
    name: "Acme",
    description: "Build faster, ship smarter. The modern platform for modern teams.",
  },
  columns: [
    {
      title: "Pages",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Reviews", href: "#reviews" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Support", href: "#" },
        { label: "Sales", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "Twitter", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "GitHub", href: "#" },
      ],
    },
  ],
  legal: "2026 Company Name. All Rights Reserved.",
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
  ],
};

// Keep these for backward compatibility
export const valuePropConfig = {
  title: statsConfig.title,
  description: statsConfig.description,
  stats: statsConfig.items,
};
export const benefitsConfig = {
  title: whyChooseUsConfig.title,
  description: whyChooseUsConfig.description,
  items: whyChooseUsConfig.items,
};
