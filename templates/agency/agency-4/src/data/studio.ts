import type { ProcessStep, AboutTab } from '../types';

export const STUDIO_STATS = [
  { value: 48, label: 'Projects Completed', suffix: '+', prefix: '', description: 'Digital flagships & rebrands delivered' },
  { value: 21, label: 'Global Brand Partners', suffix: '', prefix: '', description: 'Across Europe, US, and Asia' },
  { value: 8, label: 'Years Experience', suffix: ' Yrs', prefix: '', description: 'Mastery in strategic design' },
  { value: 14, label: 'Countries Reached', suffix: '', prefix: '', description: 'Global design footprint' }
];

export const ABOUT_TABS: AboutTab[] = [
  {
    id: 'strategy',
    label: 'Strategy',
    title: 'Precision Brand Positioning & Intelligence',
    description: 'We uncover non-obvious market opportunities and define sharp visual and verbal positioning frameworks that command premium industry authority.',
    points: [
      'Qualitative Market & Archetype Research',
      'Verbal Identity & Brand Tone Frameworks',
      'Value Proposition & Competitive Audits',
      'Commercial Go-To-Market Alignment'
    ],
    image: 'images/pexels-fauxels-3184455.jpg'
  },
  {
    id: 'design',
    label: 'Design',
    title: 'Editorial Art Direction & Product Polish',
    description: 'We craft iconic design systems, digital flagships, and mobile product interfaces defined by mathematical grid harmony and emotional resonance.',
    points: [
      'Bespoke Brand Identity & Typography',
      'Component-Based Design Systems',
      'High-Fidelity Interactive Prototypes',
      'Spatial & Packaging Art Direction'
    ],
    image: 'images/pexels-cottonbro-5483050.jpg'
  },
  {
    id: 'technology',
    label: 'Technology',
    title: '60fps Frontend & High-Performance Architecture',
    description: 'We engineer ultra-fast React digital applications, headless e-commerce platforms, and interactive canvas visualizers built for zero latency.',
    points: [
      'React, TypeScript & Vite Architecture',
      'Tailwind CSS & Framer Motion Animations',
      'Headless CMS & API Integrations',
      'Lighthouse 100 SEO & Accessibility Standards'
    ],
    image: 'images/pexels-jibarofoto-2148216.jpg'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Immersion & Synthesis',
    description: 'We dive deep into your industry landscape, stakeholder vision, customer friction points, and competitive white space through targeted discovery workshops.',
    deliverables: ['Discovery Audit', 'User Persona Maps', 'Strategic Opportunities Brief'],
    image: 'images/pexels-mikael-blomkvist-6476785.jpg',
    duration: 'Week 1–2'
  },
  {
    number: '02',
    title: 'Define',
    subtitle: 'Architecture & Direction',
    description: 'We establish the foundational strategic blueprint, verbal tone, art direction moodboards, and functional user flow architecture before drawing a single pixel.',
    deliverables: ['Brand Identity Matrix', 'Verbal Guidelines', 'UX Architecture Sitemap'],
    image: 'images/pexels-mikael-blomkvist-6476808.jpg',
    duration: 'Week 2–3'
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Craft & Prototyping',
    description: 'We iterate through high-fidelity UI design, bespoke typography systems, motion principles, and interactive prototypes with continuous client review loops.',
    deliverables: ['Design System Specs', 'Figma Component Library', 'Interactive Prototype'],
    image: 'images/pexels-canvastudio-3194521.jpg',
    duration: 'Week 4–7'
  },
  {
    number: '04',
    title: 'Develop',
    subtitle: 'Engineering & QA',
    description: 'Our senior engineering team converts design specs into clean 60fps React code, integrating animations, headless CMS schemas, and rigorous performance optimization.',
    deliverables: ['Production React Codebase', 'CMS Integration', 'Multi-Browser QA Audit'],
    image: 'images/pexels-divinetechygirl-1181346.jpg',
    duration: 'Week 7–10'
  },
  {
    number: '05',
    title: 'Deliver',
    subtitle: 'Deployment & Growth',
    description: 'We manage full product deployment, domain DNS setups, team training workshops, and post-launch analytics tracking to ensure sustained commercial traction.',
    deliverables: ['Live Flagship Deployment', 'Asset Handover Bundle', '60-Day Support SLA'],
    image: 'images/pexels-walls-io-440716388-15505437.jpg',
    duration: 'Week 11–12'
  }
];

export const STUDIO_INFO = {
  name: 'AURELIA',
  tagline: 'Independent Creative Studio & Digital Engineering Lab',
  headline: 'Ideas Designed to Move the Future.',
  subheadline: 'We build iconic brand identities, bespoke digital flagships, and spatial product experiences for ambitious founders and global industry leaders.',
  location: 'Copenhagen, Denmark',
  address: 'Bredgade 42, 1260 København K, Denmark',
  email: 'hello@aureliastudio.dk',
  phone: '+45 31 92 84 00',
  availability: 'Available for Q3/Q4 2025 Projects',
  hours: 'Mon — Fri, 09:00 — 18:00 CET',
  socials: [
    { name: 'X / Twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'GitHub', url: 'https://github.com' }
  ]
};
