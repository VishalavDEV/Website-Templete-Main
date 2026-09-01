import type { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Ideal for scaling startups needing high-impact digital foundations.',
    monthlyPrice: 499,
    annualPrice: 399,
    description: 'A focused design and development sprint delivering a world-class core website or product prototype.',
    features: [
      'Custom 5-Page Responsive Web Architecture',
      'Design Token System & Typography Guidelines',
      'Framer Motion Micro-animations',
      'SEO & Core Web Vitals Optimization',
      'Contentful or Sanity CMS Integration',
      '2 Weeks Post-Launch SLA Support',
      'Basic WebGL / Canvas Fallback Visuals'
    ],
    recommended: false,
    ctaText: 'Start Starter Sprint'
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Our flagship plan for market challengers expanding global footprint.',
    monthlyPrice: 1499,
    annualPrice: 1199,
    description: 'Comprehensive brand, complex web application engineering, interactive 3D visuals, and continuous growth sprints.',
    features: [
      'Full Multi-Page Digital Product / Platform',
      'Complete Brand Identity System & Guidelines',
      'Interactive 3D WebGL / Canvas Visual Canvas',
      'Advanced Component Design System (Figma + React)',
      'Conversion Funnel Telemetry & CRO Sprints',
      'WCAG AAA Accessibility Compliance',
      'Dedicated Tech Lead & Bi-Weekly Sprints',
      '30-Day SLA & Dedicated Slack Channel'
    ],
    recommended: true,
    ctaText: 'Launch Growth Partnership'
  },
  {
    id: 'signature',
    name: 'Signature',
    tagline: 'Bespoke enterprise transformation for industry category leaders.',
    monthlyPrice: 2999,
    annualPrice: 2399,
    description: 'Full-spectrum dedicated agency team (Strategy, Design, WebGL, Engineering, Motion) working as an extension of your C-suite.',
    features: [
      'End-to-End Enterprise Web & Mobile Systems',
      'Bespoke Photorealistic 3D / WebGL Engines',
      'Custom AI & Spatial Telemetry Visualizations',
      'Multi-Brand Architecture & Localization',
      'Security Audits & Enterprise Cloud Infra',
      '24/7 Priority Emergency Engineering Support',
      'Executive Strategy Advisory & Quarterly Audits',
      'Custom SLA with Guaranteed Sub-Second Speed'
    ],
    recommended: false,
    ctaText: 'Contact Enterprise Advisory'
  }
];

export const featureComparisonMatrix = [
  {
    category: 'Core Engineering & Design',
    features: [
      { name: 'Custom React & TypeScript Codebase', starter: true, growth: true, signature: true },
      { name: 'Light & Dark Design Token System', starter: true, growth: true, signature: true },
      { name: 'WebGL 3D Interactive Visual Canvas', starter: 'Basic', growth: 'Advanced', signature: 'Bespoke Engine' },
      { name: 'Atomic Component Library (Figma to Code)', starter: '10 Components', growth: '30+ Components', signature: 'Unlimited' },
      { name: 'Accessibility (WCAG Standard)', starter: 'AA', growth: 'AAA', signature: 'AAA Audit' }
    ]
  },
  {
    category: 'Performance & Architecture',
    features: [
      { name: 'Core Web Vitals Guarantee (95+ Lighthouse)', starter: true, growth: true, signature: true },
      { name: 'Headless CMS Integration', starter: true, growth: true, signature: true },
      { name: 'Multi-Region CDN & Edge Cache Setup', starter: false, growth: true, signature: true },
      { name: 'Internationalization (Multi-Language)', starter: false, growth: '2 Languages', signature: 'Unlimited' }
    ]
  },
  {
    category: 'Support & Delivery',
    features: [
      { name: 'Dedicated Lead Engineer & Designer', starter: false, growth: true, signature: true },
      { name: 'Slack Channel Communication', starter: false, growth: true, signature: '24/7 Priority' },
      { name: 'Post-Launch SLA Coverage', starter: '14 Days', growth: '30 Days', signature: '1 Year Dedicated' }
    ]
  }
];
