import type { Service } from '../types';

export const services: Service[] = [
  {
    slug: 'strategy',
    number: '01',
    title: 'Strategy & Architecture',
    shortDesc: 'Positioning ambitious technology and luxury brands for definitive market leadership.',
    fullDesc: 'We dissect market dynamics, user behavior, and technological vectors to craft visionary digital roadmaps. Our strategic frameworks ensure every product, interface, and brand interaction drives enterprise value.',
    iconName: 'Compass',
    deliverables: [
      'Digital Transformation Strategy',
      'Market & Competitor Benchmarking',
      'Product Vision & Roadmap',
      'Technical Architecture Audits',
      'User Research & Archetype Synthesis'
    ],
    methodology: [
      { title: 'Deconstruction', desc: 'Unpacking legacy constraints and mapping untapped market opportunities.' },
      { title: 'Hypothesis Validation', desc: 'Stress-testing value propositions with real user cohorts before building.' },
      { title: 'Blueprint Formulation', desc: 'Designing scalable technical and experience blueprints.' }
    ],
    stats: [
      { label: 'Avg ROI Increase', value: '3.4x' },
      { label: 'Strategic Audits Completed', value: '140+' }
    ],
    hoverImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'brand-identity',
    number: '02',
    title: 'Brand & Identity',
    shortDesc: 'Sculpting iconic visual systems, spatial typography, and distinctive brand narratives.',
    fullDesc: 'Identity is not just a logo — it is an operating system for how your company is perceived. We build adaptive identity systems designed to thrive across physical monographs, digital interfaces, and 3D spatial environments.',
    iconName: 'Palette',
    deliverables: [
      'Visual Identity Systems',
      'Custom Typography & Logotypes',
      'Brand Design Tokens & Guidelines',
      'Motion Design & Micro-branding',
      'Editorial & Packaging Design'
    ],
    methodology: [
      { title: 'Core DNA Extraction', desc: 'Defining the singular aesthetic and narrative truth of your brand.' },
      { title: 'System Exploration', desc: 'Testing graphic tension, motion behavior, and typographic scale.' },
      { title: 'Tokenized Delivery', desc: 'Packaging brand assets into live code tokens for design-to-engineering sync.' }
    ],
    stats: [
      { label: 'Global Design Awards', value: '28' },
      { label: 'Identities Launched', value: '95+' }
    ],
    hoverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'product-design',
    number: '03',
    title: 'Product Design & UX',
    shortDesc: 'Creating high-performance digital tools, spatial interfaces, and complex design systems.',
    fullDesc: 'We specialize in transforming complex data streams into effortless, tactile digital experiences. Whether building mission-critical control centers or consumer mobile applications, we obsess over every micro-interaction.',
    iconName: 'Layers',
    deliverables: [
      'End-to-End Application UI/UX',
      'Enterprise Design Systems',
      'Interactive Prototyping & Motion',
      'Data Visualization Architecture',
      'Usability & Accessibility (WCAG AAA)'
    ],
    methodology: [
      { title: 'User Mapping', desc: 'Mapping user mental models to eliminate cognitive friction.' },
      { title: 'Systemic Componentizing', desc: 'Building atomic component libraries that scale across teams.' },
      { title: 'Tactile Polish', desc: 'Refining micro-animations, keyboard shortcuts, and sound cues.' }
    ],
    stats: [
      { label: 'Daily Active Users Impacted', value: '4.5M+' },
      { label: 'Usability Score Avg', value: '98%' }
    ],
    hoverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'digital-development',
    number: '04',
    title: 'Digital Development',
    shortDesc: 'Engineering sub-second web applications, 3D WebGL experiences, and robust API backends.',
    fullDesc: 'Code is our craft. We build bulletproof frontend architectures, interactive 3D WebGL canvases, and scalable cloud integrations that deliver unmatched speed, security, and search engine dominance.',
    iconName: 'Code',
    deliverables: [
      'Custom React / Next.js Web Apps',
      'Three.js / WebGL 3D Canvas Visuals',
      'Headless CMS & API Integration',
      'Performance Optimization & Core Web Vitals',
      'High-Availability Cloud Deployment'
    ],
    methodology: [
      { title: 'Performance First', desc: 'Writing clean, zero-bloat code optimized for sub-100ms response times.' },
      { title: 'Hardware Acceleration', desc: 'Leveraging WebGL and GPU pipelines for buttery smooth 60fps visuals.' },
      { title: 'Automated Integrity', desc: 'Continuous testing and strict TypeScript typing to eliminate edge-case bugs.' }
    ],
    stats: [
      { label: 'Lighthouse Performance Score', value: '99/100' },
      { label: 'Lines of Code Written', value: '1.2M+' }
    ],
    hoverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'growth-experience',
    number: '05',
    title: 'Growth & Experience',
    shortDesc: 'Optimizing digital touchpoints for maximum conversion, retention, and brand loyalty.',
    fullDesc: 'Building a great product is only half the battle. We optimize every step of the customer acquisition funnel through data-driven multivariate experimentation, content velocity, and immersive digital campaigns.',
    iconName: 'TrendingUp',
    deliverables: [
      'Conversion Rate Optimization (CRO)',
      'Interactive Product Launch Campaigns',
      'SEO Architecture & Content Velocity',
      'Analytics & Behavioral Tracking',
      'Lifecycle & Retention Engineering'
    ],
    methodology: [
      { title: 'Funnel Telemetry', desc: 'Identifying exact drop-off points using heatmap and event tracking.' },
      { title: 'Agile Experimentation', desc: 'Deploying weekly multivariate design tests to optimize conversion.' },
      { title: 'Growth Compounding', desc: 'Refining messaging and load speeds for sustainable organic reach.' }
    ],
    stats: [
      { label: 'Avg Conversion Lift', value: '+145%' },
      { label: 'Client Revenue Generated', value: '$250M+' }
    ],
    hoverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  }
];
