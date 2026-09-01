import { Project, Service, Article, Industry, JobPosition, TeamMember, FAQItem } from '../types';
import fluidHero from '../assets/images/abstract_fluid_hero_1787848081692.jpg';
import fluidTrends from '../assets/images/abstract_fluid_trends_1787848098281.jpg';
import fluidAi from '../assets/images/abstract_fluid_ai_1787848113109.jpg';
import fluidFintech from '../assets/images/abstract_fluid_fintech_1787848127166.jpg';
import fluidLuxury from '../assets/images/abstract_fluid_luxury_1787848140383.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'orbit',
    title: 'ORBIT',
    tagline: 'FinTech Architecture & Autonomous Trading Platform',
    client: 'Orbit Financial Group',
    category: 'Digital',
    year: '2026',
    image: fluidFintech,
    heroImage: fluidFintech,
    galleryImages: [
      fluidHero,
      fluidTrends,
      fluidAi
    ],
    description: 'A revolutionary digital infrastructure unifying multi-asset algorithmic trading, real-time risk intelligence, and high-frequency settlement in a single sub-millisecond portal.',
    challenge: 'Orbit needed to consolidate 4 legacy institutional trading terminals into an ultra-fast, web-based platform capable of handling 500,000 live updates per second without latency spikes or visual clutter.',
    strategy: 'We architected a bespoke WebGL rendering engine backed by custom reactive data sockets and modern glass-morphism data hierarchy, allowing institutional traders to configure deep spatial workspaces.',
    execution: 'Engineered with React, WebGL, custom Rust micro-services, and real-time canvas overlays. Designed an adaptive dark canvas that scales across 8-monitor trading floors down to mobile executive viewports.',
    results: [
      { label: 'Latency Reduction', value: '78%' },
      { label: 'Daily Trading Volume', value: '$4.2B' },
      { label: 'User Adoption Rate', value: '99.4%' },
      { label: 'System Uptime', value: '99.999%' }
    ],
    metrics: ['Sub-10ms Order Execution', 'Unified Risk Matrix', 'Adaptive Spatial Workspace'],
    featured: true,
    industry: 'Finance'
  },
  {
    id: 'nexus',
    title: 'NEXUS',
    tagline: 'Enterprise Generative AI & Automation Ecosystem',
    client: 'Nexus Global Robotics',
    category: 'AI',
    year: '2025',
    image: fluidAi,
    heroImage: fluidAi,
    galleryImages: [
      fluidFintech,
      fluidLuxury,
      fluidTrends
    ],
    description: 'An AI-native operating system orchestrating supply chains, robotic warehouse fleets, and predictive inventory decisions for Global Fortune 500 manufacturers.',
    challenge: 'Transitioning complex industrial supply chain workflows into an intuitive natural language and agentic AI dashboard with real-time digital twin visualization.',
    strategy: 'Built a multi-agent orchestration layer paired with an interactive 3D digital twin canvas that maps global shipping routes and warehouse logistics in real time.',
    execution: 'Created a sleek, dark-slate UI featuring voice-activated AI agents, predictive anomaly alerts, and dynamic scenario modeling.',
    results: [
      { label: 'Supply Chain Efficiency', value: '+42%' },
      { label: 'Inventory Cost Saved', value: '$180M' },
      { label: 'Response Time', value: '< 2s' },
      { label: 'Global Facilities Connected', value: '340+' }
    ],
    metrics: ['3D Warehouse Twin', 'Agentic Workflow Engine', 'Zero-Latency Anomaly Detection'],
    featured: true,
    industry: 'Technology'
  },
  {
    id: 'aura',
    title: 'AURA',
    tagline: 'Luxury Heritage Re-imagined for Digital Avant-Garde',
    client: 'Aura Maison de Haute Horlogerie',
    category: 'Branding',
    year: '2025',
    image: fluidLuxury,
    heroImage: fluidLuxury,
    galleryImages: [
      fluidTrends,
      fluidHero,
      fluidFintech
    ],
    description: 'Comprehensive brand identity, 3D interactive watch configurator, and high-touch private client portal for Geneva’s premier watchmaker.',
    challenge: 'Preserving 140 years of Swiss craftsmanship while creating a digital flagship experience that engages next-generation collectors.',
    strategy: 'Crafted a refined typographic system, cinematic 3D macro renders, and an invitation-only digital salon featuring real-time timepiece customization.',
    execution: 'Engineered with WebGL micro-physics, ultra-high-resolution 360 watch viewports, and custom typography rooted in Swiss architecture.',
    results: [
      { label: 'Direct Digital Revenue', value: '+310%' },
      { label: 'Average Session Duration', value: '8m 42s' },
      { label: 'VIP Waitlist Growth', value: '14,000+' },
      { label: 'Design Awards Won', value: '12' }
    ],
    metrics: ['3D Micro-Physics Configurator', 'Custom Serif Typography', 'VIP Private Salon'],
    featured: true,
    industry: 'Retail'
  },
  {
    id: 'vector',
    title: 'VECTOR',
    tagline: 'Autonomous Mobility & Fleet Experience Architecture',
    client: 'Vector Electric Dynamics',
    category: 'Product',
    year: '2026',
    image: fluidHero,
    heroImage: fluidHero,
    galleryImages: [
      fluidAi,
      fluidFintech
    ],
    description: 'Next-generation in-vehicle digital cockpit UI and mobile companion app for an electric luxury GT fleet.',
    challenge: 'Designing a driver interface that minimizes visual friction while surfacing contextual autonomous navigation and cabin ambient atmosphere.',
    strategy: 'Utilized spatial eye-tracking telemetry and minimal contrast typography to keep vital driving controls within 0.2s reach.',
    execution: 'Built with React Native, WebGL graphics, tactile haptic feedback integrations, and contextual climate AI.',
    results: [
      { label: 'Driver Satisfaction Rate', value: '98.8%' },
      { label: 'In-Vehicle Screen Latency', value: '12ms' },
      { label: 'Fleet Mileage Managed', value: '25M+ mi' },
      { label: 'Safety Index Rating', value: '5-Star' }
    ],
    metrics: ['Spatial HUD Cockpit', 'Tactile Gesture Map', 'Contextual Ambience AI'],
    featured: true,
    industry: 'Mobility'
  },
  {
    id: 'mono',
    title: 'MONO',
    tagline: 'Architectural Design System & Enterprise Infrastructure',
    client: 'Mono Construction Systems',
    category: 'Strategy',
    year: '2025',
    image: fluidTrends,
    heroImage: fluidTrends,
    galleryImages: [
      fluidLuxury,
      fluidHero
    ],
    description: 'Digital transformation strategy connecting 120 global architectural firms under a single design language and BIM collaboration suite.',
    challenge: 'Unifying multi-country architectural teams with fragmented software tools into a single collaborative cloud workspace.',
    strategy: 'Designed a unified component design system (MONO DS) and BIM streaming protocol that renders heavy 3D building models on standard web browsers.',
    execution: 'Created responsive multi-device dashboards, real-time CAD annotation layers, and automated structural compliance checks.',
    results: [
      { label: 'Project Delivery Speed', value: '+35%' },
      { label: 'BIM Rendering Speed', value: '10x Faster' },
      { label: 'Cost Savings per Project', value: '$2.4M' },
      { label: 'Active Architects', value: '18,500' }
    ],
    metrics: ['Cloud BIM Streaming', 'Global Component Library', 'Automated Compliance Engine'],
    featured: false,
    industry: 'Manufacturing'
  },
  {
    id: 'helix',
    title: 'HELIX',
    tagline: 'Genomic Intelligence & Clinical Analytics Portal',
    client: 'Helix BioSciences',
    category: 'Digital',
    year: '2026',
    image: fluidAi,
    heroImage: fluidAi,
    galleryImages: [
      fluidFintech,
      fluidTrends
    ],
    description: 'A clinical decision platform turning petabytes of DNA sequencing into actionable oncology treatment pathways.',
    challenge: 'Translating dense genomic charts into zero-error visualization interfaces for surgical teams and oncology research labs.',
    strategy: 'Developed dynamic 3D chromosome mapping tools and medical data layers designed specifically for multi-touch operating room displays.',
    execution: 'Built with React, Canvas API, HIPAA-compliant encryption layers, and dark-mode high-contrast optics.',
    results: [
      { label: 'Diagnostic Speed', value: '4x Faster' },
      { label: 'Clinical Trial Matches', value: '+210%' },
      { label: 'Oncology Labs Powered', value: '85+' },
      { label: 'Data Processing Speed', value: '1.2 PB/s' }
    ],
    metrics: ['3D DNA Viewer', 'Multi-Touch OR UI', 'Real-Time Biomarker Alerts'],
    featured: false,
    industry: 'Healthcare'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'strategy',
    number: '01',
    title: 'Brand & Business Strategy',
    tagline: 'POSITIONING AMBITIOUS BRANDS TO COMMAND CATEGORY LEADERSHIP.',
    description: 'We diagnose industry shifts, locate unexploited market value, and define the strategic foundation required to transform heritage and modern companies into market leaders.',
    capabilities: [
      'Market & Competitor Diagnostic',
      'Category Creation & Naming',
      'Brand Architecture & Vision',
      'Go-To-Market Execution Plan',
      'Executive Leadership Alignment',
      'Value Proposition Engineering'
    ],
    deliverables: [
      'Strategic Positioning Matrix',
      'Brand Governance Playbook',
      'Growth Architecture Roadmap',
      'Customer Persona Telemetry'
    ],
    iconName: 'Compass',
    image: fluidHero,
    featuredCaseStudyId: 'mono'
  },
  {
    id: 'branding',
    number: '02',
    title: 'Brand Identity & Direction',
    tagline: 'CRAFTING VISUAL SYSTEMS THAT ARE UNMISTAKABLE AND ICONIC.',
    description: 'Visual identities that transcend trends. We build flexible, scalable, and timeless visual languages engineered for high-impact physical and digital touchpoints.',
    capabilities: [
      'Visual Identity Systems',
      'Bespoke Typography & Logo Mark',
      '3D Visual Identity & Motion Rules',
      'Brand Guidelines & Asset Vaults',
      'Packaging & Physical Architecture',
      'Editorial & Art Direction'
    ],
    deliverables: [
      'Design Token Libraries',
      'Motion Design System',
      'Brand Guidelines Platform',
      'Vector & 3D Asset Vault'
    ],
    iconName: 'Palette',
    image: fluidLuxury,
    featuredCaseStudyId: 'aura'
  },
  {
    id: 'digital',
    number: '03',
    title: 'Digital Transformation & Web',
    tagline: 'HIGH-PERFORMANCE WEB EXPERIENCES AND PLATFORMS.',
    description: 'We design and engineer bespoke web portals, enterprise platforms, and interactive visual sites that combine 3D graphics, flawless typography, and lightning-fast speeds.',
    capabilities: [
      'Bespoke Web & Portal Development',
      '3D WebGL & Interactive Graphics',
      'Headless CMS & Commerce Engineering',
      'Performance & SEO Optimization',
      'Design Systems Architecture',
      'Accessible UI/UX Engineering'
    ],
    deliverables: [
      'Production Web Application',
      'Component Library & Storybook',
      'Speed & Security Audit',
      'Interactive Canvas Engine'
    ],
    iconName: 'Globe',
    image: fluidFintech,
    featuredCaseStudyId: 'orbit'
  },
  {
    id: 'ai',
    number: '04',
    title: 'AI Solutions & Automation',
    tagline: 'INTEGRATING AGENTIC INTELLIGENCE INTO CORE OPERATIONS.',
    description: 'From custom generative workflows to multi-agent intelligence dashboards, we empower enterprise organizations to automate complex tasks and surface hyper-predictive insights.',
    capabilities: [
      'Custom LLM & Agent Integration',
      'Predictive Telemetry Dashboards',
      'Workflow & Operations Automation',
      'Natural Language Interface Design',
      'Data Pipeline Architecture',
      'Enterprise AI Governance'
    ],
    deliverables: [
      'Agentic Intelligence Engine',
      'Predictive Analytics Console',
      'Custom API Microservices',
      'Workflow Automation Blueprints'
    ],
    iconName: 'Cpu',
    image: fluidAi,
    featuredCaseStudyId: 'nexus'
  },
  {
    id: 'product',
    number: '05',
    title: 'Product Design & Mobile',
    tagline: 'HUMAN-CENTERED DIGITAL PRODUCTS PEOPLE LOVE TO USE.',
    description: 'End-to-end product strategy, user research, rapid prototyping, and native mobile/desktop application engineering for disruptive startups and industry titans.',
    capabilities: [
      'Mobile App Engineering (iOS/Android)',
      'Spatial & In-Vehicle UI/UX',
      'Design System Management',
      'User Research & Telemetry',
      'Rapid Interactive Prototyping',
      'Micro-Interaction Design'
    ],
    deliverables: [
      'Production Mobile Application',
      'Interactive Figma UI Kits',
      'User Telemetry Blueprint',
      'Haptic & Sound Design Assets'
    ],
    iconName: 'Smartphone',
    image: fluidTrends,
    featuredCaseStudyId: 'vector'
  },
  {
    id: 'growth',
    number: '06',
    title: 'Business Consulting & Scale',
    tagline: 'TURNING DIGITAL EXCELLENCE INTO LONG-TERM EQUITY.',
    description: 'We work directly with executive boards to translate design and technology investments into measurable EBITDA growth, market share expansion, and enterprise valuation.',
    capabilities: [
      'Digital Transformation Strategy',
      'EBITDA & ROI Modeling',
      'Organization & Hiring Consulting',
      'Mergers & Acquisition Technology Audits',
      'Global Scalability Frameworks',
      'Executive Advisory Board'
    ],
    deliverables: [
      'Enterprise Scalability Plan',
      'Technology Stack Audit',
      'EBITDA Impact Report',
      'Digital Governance Playbook'
    ],
    iconName: 'TrendingUp',
    image: fluidHero,
    featuredCaseStudyId: 'helix'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'article-1',
    title: 'The Death of the Flat SaaS Hero: Why Spatial & 3D Web Languages Win in 2026',
    excerpt: 'Generic white-background, 3-card grids are dead. How luxury automotive and financial leaders are leveraging real-time WebGL canvas graphics to capture modern consumer attention.',
    content: [
      'For over a decade, digital web design has been suffocating under the weight of predictable SaaS templates: a centered 48px heading, two pills, a screenshot inside a fake browser frame, and three identical cards below.',
      'In 2026, progressive organizations realize that visual mediocrity translates directly to lower perceived enterprise value. When every competitor uses the same Tailwind grid and generic sans-serif, brand differentiation plummets.',
      'Spatial design and real-time WebGL rendering have reached a critical tipping point. Hardware acceleration across mobile and desktop now supports 60FPS 3D scenes without battery drain, opening unprecedented storytelling possibilities.',
      'By treating the browser as a dynamic canvas rather than a static document, luxury brands like Aura and FinTech leaders like Orbit create visceral emotional connections that drive conversion rates up to 300% higher than traditional static pages.'
    ],
    category: 'Trends',
    date: 'August 18, 2026',
    readTime: '6 min read',
    author: {
      name: 'Alexander Vane',
      role: 'Chief Creative Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
    },
    image: fluidTrends
  },
  {
    id: 'article-2',
    title: 'Agentic Workflows vs. Static Dashboards: Re-architecting Enterprise Operations',
    excerpt: 'Why passive dashboards that require manual filtering are being replaced by autonomous AI agents that diagnose anomalies and execute multi-step resolutions.',
    content: [
      'The average global enterprise uses 130+ distinct software applications. Executives spend hours jumping between analytics tools, export files, and communication channels just to gather basic operational context.',
      'Agentic AI shifts the paradigm from passive data consumption to proactive task execution. Rather than looking at a chart showing a supply chain delay, an autonomous agent flags the bottleneck, models three alternative routing solutions, and presents a one-click execution button to the decision maker.',
      'Building agentic interfaces requires a fundamental rethink of UI design. Information must be structured contextually, with natural language interaction seamlessly integrated alongside real-time data visualizers.',
      'In our work with Nexus Global Robotics, replacing legacy tracking dashboards with an agentic control tower reduced supply chain downtime by 42% while saving millions in operational overhead.'
    ],
    category: 'Reports',
    date: 'July 29, 2026',
    readTime: '8 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Head of AI Engineering',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop'
    },
    image: fluidAi
  },
  {
    id: 'article-3',
    title: 'Architectural Typographic Systems: Balancing Precision and High Contrast',
    excerpt: 'An inside look at VANTA FORM’s design philosophy for pairing ultra-large display typography with dense structural UI data layers.',
    content: [
      'Typography is not merely text on a page; it is the structural backbone of spatial communication. In editorial design, scale contrast is the primary tool used to direct viewer focus.',
      'When designing for high-stakes environments like FinTech terminals or executive portals, typographic scales must obey strict mathematical ratios. We utilize fluid clamp functions to ensure clamp(2.5rem, 8vw, 7rem) headlines scale harmoniously across all viewport widths.',
      'Pairing high-contrast display serif or geometric sans-serif fonts with monospace technical labels creates an aesthetic tension between human artistry and technological precision.',
      'This architectural typographic balance gives brands an unmistakable voice of authority, clarity, and sophistication.'
    ],
    category: 'Articles',
    date: 'July 11, 2026',
    readTime: '5 min read',
    author: {
      name: 'Marcus Thorne',
      role: 'Design Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    },
    image: fluidLuxury
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'technology',
    name: 'Technology & AI',
    headline: 'Powering Next-Generation Software Titans and AI Platforms',
    description: 'We collaborate with pioneering AI labs, cloud platforms, and cybersecurity firms to translate complex algorithms into intuitive human experiences.',
    metrics: '$12B+ Valuation Created',
    keyProjects: ['NEXUS', 'MONO'],
    icon: 'Cpu',
    bgImage: fluidAi
  },
  {
    id: 'finance',
    name: 'FinTech & Capital Markets',
    headline: 'High-Frequency Trading Portals and Institutional Assets',
    description: 'Sub-millisecond data visualization, decentralized finance protocols, and ultra-secure wealth management platforms built for world markets.',
    metrics: '$4.2B Daily Trading Volume',
    keyProjects: ['ORBIT'],
    icon: 'TrendingUp',
    bgImage: fluidFintech
  },
  {
    id: 'retail',
    name: 'Luxury & High-End Retail',
    headline: 'Digital Flagships and Interactive Heritage Storytelling',
    description: 'Elevating haute horlogerie, fashion houses, and luxury lifestyle brands through 3D customizers, exclusive client salons, and rich e-commerce.',
    metrics: '+310% Online Revenue Growth',
    keyProjects: ['AURA'],
    icon: 'ShoppingBag',
    bgImage: fluidLuxury
  },
  {
    id: 'mobility',
    name: 'Mobility & Automotive',
    headline: 'Digital Cockpits, Autonomous Fleets, and EV Ecosystems',
    description: 'In-vehicle HUD interfaces, mobile fleet telemetry applications, and smart charging spatial dashboards for modern transport leaders.',
    metrics: '25M+ Autonomous Miles Managed',
    keyProjects: ['VECTOR'],
    icon: 'Zap',
    bgImage: fluidHero
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Biotech',
    headline: 'Clinical Decision Systems and Genomic Intelligence',
    description: 'High-precision surgical interfaces, AI-powered drug discovery visualizers, and secure health telemetry engines.',
    metrics: '85+ Global Oncology Labs',
    keyProjects: ['HELIX'],
    icon: 'Activity',
    bgImage: fluidTrends
  },
  {
    id: 'manufacturing',
    name: 'Industrial & Manufacturing',
    headline: 'Smart Factories, BIM Streaming, and Robotics Infrastructure',
    description: 'Digital twin command centers, real-time BIM 3D streaming, and automated robotic fleet management platforms.',
    metrics: '340+ Global Smart Facilities',
    keyProjects: ['MONO', 'NEXUS'],
    icon: 'Layers',
    bgImage: fluidHero
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'alexander-vane',
    name: 'Alexander Vane',
    role: 'Founder & Chief Executive',
    bio: 'Former architectural strategist and design director. Over 15 years guiding digital transformation for Fortune 100 brands.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Head of AI & Technology',
    bio: 'MIT graduate with deep expertise in neural graphics, WebGL optimization, and agentic intelligence frameworks.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'Executive Design Director',
    bio: 'Award-winning creative director specializing in Swiss typographic systems, luxury identity, and spatial interface architecture.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'sophia-chen',
    name: 'Sophia Chen',
    role: 'Managing Partner, Strategy',
    bio: 'Specializes in venture architecture, EBITDA modeling, and global market expansion for high-growth tech enterprises.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    linkedin: 'https://linkedin.com'
  }
];

export const JOBS: JobPosition[] = [
  {
    id: 'job-1',
    title: 'Senior WebGL & Creative Developer',
    department: 'Engineering',
    location: 'New York / Hybrid',
    type: 'Full-time',
    description: 'We are seeking an elite Creative Developer skilled in Three.js, WebGL shaders, React, and GPU performance optimization to build world-class spatial web experiences.',
    requirements: [
      '5+ years experience in WebGL / Three.js / Canvas rendering',
      'Deep mastery of React, TypeScript, and modern shaders (GLSL)',
      'Proven track record building 60FPS interactive 3D web experiences',
      'Strong eye for typography, motion design, and spatial layout'
    ]
  },
  {
    id: 'job-2',
    title: 'Lead Brand & Editorial Designer',
    department: 'Design',
    location: 'London / Remote',
    type: 'Full-time',
    description: 'Join VANTA FORM as Lead Designer crafting ultra-high-end visual systems, bespoke typography, 3D brand guidelines, and physical architecture collateral for global clients.',
    requirements: [
      '7+ years experience in brand strategy, visual systems, and luxury editorial design',
      'Mastery of typography, grid systems, and high-contrast design composition',
      'Proficiency with 3D design tools (Cinema 4D, Blender, Figma)',
      'Experience leading client executive presentations'
    ]
  },
  {
    id: 'job-3',
    title: 'AI Systems Strategist & Architect',
    department: 'AI & Strategy',
    location: 'Zurich / Hybrid',
    type: 'Full-time',
    description: 'Architect multi-agent intelligence workflows, LLM telemetry platforms, and predictive decision engines for enterprise clients.',
    requirements: [
      'Deep knowledge of multi-agent LLM systems, RAG, and vector databases',
      'Strong software engineering fundamentals in Python / TypeScript',
      'Ability to translate executive business goals into robust AI roadmaps'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does VANTA FORM specialize in?',
    answer: 'VANTA FORM is an executive digital transformation and creative engineering agency. We specialize in uniting strategic consulting, bespoke 3D web platforms, AI agentic systems, luxury visual identities, and high-performance product design for category leaders.',
    category: 'Agency'
  },
  {
    id: 'faq-2',
    question: 'How long does a typical flagship project take?',
    answer: 'Comprehensive engagements range between 8 to 20 weeks depending on scope complexity. Brand identity and strategic repositioning usually take 8-10 weeks, while full-scale WebGL platforms and AI integrations run 12-20 weeks.',
    category: 'Process'
  },
  {
    id: 'faq-3',
    question: 'Do you work with emerging venture-backed startups?',
    answer: 'Yes. While we regularly advise Fortune 500 organizations, we reserve a portion of our capacity for high-potential, Series A+ venture startups aiming to establish immediate market dominance through extraordinary design and tech.',
    category: 'Clients'
  },
  {
    id: 'faq-4',
    question: 'How do you integrate 3D and AI without sacrificing web speed or mobile accessibility?',
    answer: 'We build hardware-adaptive rendering pipelines. Our custom WebGL engines dynamically measure client GPU capability and screen refresh rates, delivering lush 3D lighting on workstation GPUs while seamlessly switching to lightweight canvas fallbacks on mobile devices.',
    category: 'Technology'
  },
  {
    id: 'faq-5',
    question: 'How do project engagements begin?',
    answer: 'Every partnership begins with a confidential Discovery Session. Submit an inquiry through our Contact page, and our executive team will review your timeline, goals, and technical parameters within 24 hours.',
    category: 'Process'
  }
];
