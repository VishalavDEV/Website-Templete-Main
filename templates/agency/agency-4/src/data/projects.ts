import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'northline',
    title: 'Northline',
    client: 'Northline Architectural Systems',
    category: 'Brand Identity',
    year: '2025',
    summary: 'A complete spatial & visual rebrand for an international architectural material laboratory based in Copenhagen.',
    challenge: 'Northline had built world-class structural materials, but their legacy brand identity failed to communicate their refined minimalism and sustainable engineering philosophy to elite global architects.',
    solution: 'We engineered a monolithic visual identity system based on architectural grid lines, bespoke typography, tactile print materials, and an interactive digital showcase that elevates their materials to artwork.',
    image: 'images/pexels-elvis-1316342-2528118.jpg',
    gallery: [
      'images/pexels-elvis-1316342-2528118.jpg',
      'images/pexels-andreaedavis-3653849.jpg',
      'images/pexels-fotografiarqmx-9511923.jpg',
      'images/pexels-ann-h-45017-32417522.jpg'
    ],
    deliverables: [
      'Visual Identity System',
      'Custom Typography',
      'Brand Guidelines',
      'Digital Flagship Website',
      'Spatial Environmental Graphics'
    ],
    metrics: [
      { label: 'Brand Recognition', value: '+180%' },
      { label: 'Inquiry Lead Value', value: '$14.2M' },
      { label: 'Global Design Awards', value: '4 Wins' }
    ],
    featured: true,
    testimonial: {
      quote: 'AURELIA didn’t just redesign our identity; they captured the soul of our structural philosophy and translated it into a brand that commands global authority.',
      author: 'Henrik Vestergaard',
      role: 'CEO & Principal Architect, Northline'
    }
  },
  {
    id: 'solace',
    title: 'Solace',
    client: 'Solace Health Technologies',
    category: 'Digital Experience',
    year: '2025',
    summary: 'Designing a serene, intuitive digital wellness platform bridging clinical precision with empathetic human interaction.',
    challenge: 'Digital mental health apps often feel overwhelmed with clinical noise or juvenile gamification. Solace required a peaceful, dignified experience that builds trust instantly.',
    solution: 'We crafted a minimalist fluid interface using soft ambient gradients, thoughtful micro-interactions, and adaptive dark/light modes that respond to the user’s circadian rhythm.',
    image: 'images/pexels-shvetsa-4226122.jpg',
    gallery: [
      'images/pexels-shvetsa-4226122.jpg',
      'images/pexels-canvastudio-3194519.jpg',
      'images/pexels-canvastudio-3194521.jpg',
      'images/pexels-divinetechygirl-1181346.jpg'
    ],
    deliverables: [
      'UX Research & Strategy',
      'iOS & Android App Design',
      'Design System Architecture',
      'Micro-Animations',
      'Web Portal Infrastructure'
    ],
    metrics: [
      { label: 'Daily Active Retention', value: '72%' },
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'User Onboarding Time', value: '-45%' }
    ],
    featured: true,
    testimonial: {
      quote: 'The level of craftsmanship and empathy AURELIA brought to Solace was extraordinary. Our users frequently describe the app experience as therapeutic in itself.',
      author: 'Dr. Elena Rostova',
      role: 'Head of Product, Solace Health'
    }
  },
  {
    id: 'forma',
    title: 'Forma',
    client: 'Forma Studio & Audio',
    category: 'Product Design',
    year: '2024',
    summary: 'Tactile industrial hardware and companion digital controller app for audiophile-grade wireless acoustics.',
    challenge: 'Creating a seamless hardware-to-software integration for an acoustic brand competing with high-end Scandinavian heritage manufacturers.',
    solution: 'We designed an ultra-minimal companion mobile interface featuring haptic tactile dials, acoustic wave visualization, and an unboxing experience that feels like opening a luxury watch.',
    image: 'images/pexels-shvetsa-12662890.jpg',
    gallery: [
      'images/pexels-shvetsa-12662890.jpg',
      'images/pexels-shvetsa-12663061.jpg',
      'images/pexels-cottonbro-6803520.jpg',
      'images/pexels-jakubzerdzicki-31313716.jpg'
    ],
    deliverables: [
      'Hardware CMF Guidance',
      'Companion App UI/UX',
      'Soundscape Visualizer',
      'Interactive 3D Web Configurator',
      'Packaging Design'
    ],
    metrics: [
      { label: 'Pre-Orders Sold Out', value: '48 Hours' },
      { label: 'Red Dot Award', value: 'Best of Best' },
      { label: 'App Pair Connection Rate', value: '99.4%' }
    ],
    featured: true,
    testimonial: {
      quote: 'AURELIA understands the physical and digital continuum like no other agency. Forma is now recognized as a benchmark in acoustic product design.',
      author: 'Marcus Lindqvist',
      role: 'Chief Design Officer, Forma'
    }
  },
  {
    id: 'terra-studio',
    title: 'Terra Studio',
    client: 'Terra Organic Botanicals',
    category: 'E-commerce',
    year: '2024',
    summary: 'An immersive sensory e-commerce flagship store for sustainable luxury skincare and botanical scents.',
    challenge: 'Translating rich tactile scents and organic textures into a digital web browser environment without feeling dry or transactional.',
    solution: 'We constructed an editorial e-commerce platform powered by fluid page transitions, interactive ingredient scent stories, and streamlined 1-click checkout.',
    image: 'images/pexels-karola-g-8092315.jpg',
    gallery: [
      'images/pexels-karola-g-8092315.jpg',
      'images/pexels-karola-g2-6231.jpg',
      'images/pexels-karola-g2-6224.jpg',
      'images/pexels-esrageziyor-45760220-15373863.jpg'
    ],
    deliverables: [
      'Headless E-commerce Storefront',
      'Visual Identity Refresh',
      'Custom 3D Product Viewers',
      'Subscription System UX',
      'Editorial Content Strategy'
    ],
    metrics: [
      { label: 'Conversion Rate', value: '+3.4%' },
      { label: 'Average Order Value', value: '$184' },
      { label: 'Mobile Sales Share', value: '68%' }
    ],
    featured: true,
    testimonial: {
      quote: 'Working with AURELIA transformed our online presence. Our e-commerce revenue tripled within six months of launch.',
      author: 'Camilla Thorne',
      role: 'Founder, Terra Studio'
    }
  },
  {
    id: 'lumen',
    title: 'Lumen',
    client: 'Lumen Renewable Energy',
    category: 'Creative Campaign',
    year: '2024',
    summary: 'A global digital campaign humanizing clean energy data and future grid technologies.',
    challenge: 'Renewable energy tech is often shrouded in dry jargon and uninspiring corporate graphics.',
    solution: 'We launched an interactive digital campaign driven by dynamic generative web art, real-time grid energy visualization, and inspiring video storytelling.',
    image: 'images/pexels-flodahm-699459.jpg',
    gallery: [
      'images/pexels-flodahm-699459.jpg',
      'images/pexels-cottonbro-4709285.jpg',
      'images/pexels-mikael-blomkvist-6476256.jpg',
      'images/pexels-walls-io-440716388-15505437.jpg'
    ],
    deliverables: [
      'Campaign Creative Direction',
      'Interactive Web Experience',
      'Motion Design & 3D Art',
      'Social Content Engine',
      'Executive Keynote Design'
    ],
    metrics: [
      { label: 'Campaign Impressions', value: '24.5M' },
      { label: 'Institutional Lead Growth', value: '+215%' },
      { label: 'Web Engagement Duration', value: '4m 12s' }
    ],
    featured: true,
    testimonial: {
      quote: 'Lumen needed a breakthrough moment, and AURELIA delivered a campaign that captivated both institutional investors and everyday consumers.',
      author: 'Julian Sterling',
      role: 'Chief Marketing Officer, Lumen'
    }
  },
  {
    id: 'vance-spatial',
    title: 'Vance Spatial',
    client: 'Vance Spatial Systems',
    category: 'Brand Identity',
    year: '2025',
    summary: 'Visual brand identity and digital platform for next-generation spatial computing and architectural environments.',
    challenge: 'Vance needed an identity that expressed structural engineering precision alongside futuristic spatial software capabilities.',
    solution: 'We crafted a sleek monochromatic design system featuring custom typography, 3D spatial interactive demos, and tactile printed collateral.',
    image: 'images/pexels-ann-h-45017-32417522.jpg',
    gallery: [
      'images/pexels-ann-h-45017-32417522.jpg',
      'images/pexels-fotografiarqmx-9511923.jpg',
      'images/pexels-mikael-blomkvist-6476260.jpg',
      'images/pexels-elvis-1316342-2528118.jpg'
    ],
    deliverables: [
      'Spatial Identity System',
      'Custom Monospace Font',
      'WebGL Interactive Showcase',
      'Investor Pitch Deck Architecture'
    ],
    metrics: [
      { label: 'Series A Funding', value: '$22M' },
      { label: 'Press Coverage', value: '18 Outlets' }
    ],
    featured: true,
    testimonial: {
      quote: 'AURELIA set the benchmark for spatial brand design. Their visual identity helped us secure our Series A round in record time.',
      author: 'Seraphina Vance',
      role: 'Founder, Vance Spatial'
    }
  },
  {
    id: 'aether-capital',
    title: 'Aether Capital',
    client: 'Aether Venture Capital',
    category: 'Digital Experience',
    year: '2024',
    summary: 'A minimalist digital flagship portal for a premier European venture capital firm.',
    challenge: 'Legacy VC websites look identical. Aether needed an editorial web platform that highlighted their portfolio founders.',
    solution: 'We engineered an ultra-clean digital flagship driven by fluid page transitions, founder stories, and dynamic portfolio data visualization.',
    image: 'images/pexels-canvastudio-3194521.jpg',
    gallery: [
      'images/pexels-canvastudio-3194521.jpg',
      'images/pexels-divinetechygirl-1181346.jpg',
      'images/pexels-jibarofoto-2148216.jpg',
      'images/pexels-fauxels-3184455.jpg'
    ],
    deliverables: [
      'Digital Flagship Experience',
      'Content Management System',
      'Portfolio Showcase Architecture',
      'Mobile Optimization'
    ],
    metrics: [
      { label: 'Founder Inquiries', value: '+310%' },
      { label: 'Average Session Duration', value: '3m 45s' }
    ],
    featured: true,
    testimonial: {
      quote: 'Every single founder in our portfolio praises the web platform AURELIA designed for us.',
      author: 'Alexandre Moreau',
      role: 'Managing Partner, Aether'
    }
  },
  {
    id: 'klarity-nordics',
    title: 'Klarity',
    client: 'Klarity Brand Intelligence',
    category: 'Product Design',
    year: '2024',
    summary: 'Enterprise SaaS design system and web application for brand intelligence analytics.',
    challenge: 'Complex data dashboards were frustrating users and causing high churn.',
    solution: 'We redesigned the entire SaaS platform into an elegant, high-focus interface featuring custom chart components, dark mode, and zero latency.',
    image: 'images/pexels-mikael-blomkvist-6476808.jpg',
    gallery: [
      'images/pexels-mikael-blomkvist-6476808.jpg',
      'images/pexels-mikael-blomkvist-6476785.jpg',
      'images/pexels-shvetsa-4226122.jpg',
      'images/pexels-walls-io-440716388-15505437.jpg'
    ],
    deliverables: [
      'Enterprise UX/UI Design',
      'Component Design System',
      'Data Visualization System',
      'Front-End Design Tokens'
    ],
    metrics: [
      { label: 'Churn Reduction', value: '-38%' },
      { label: 'User Satisfaction (NPS)', value: '78' }
    ],
    featured: true,
    testimonial: {
      quote: 'Klarity’s user engagement doubled after launching AURELIA’s design system.',
      author: 'Astrid Lindholm',
      role: 'Head of Brand Strategy, Klarity'
    }
  }
];
