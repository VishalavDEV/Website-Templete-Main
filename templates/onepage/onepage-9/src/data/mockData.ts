import { ServiceItem, CaseStudy, Article, PricingTier, ClientProject } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-engineering',
    category: 'ai',
    title: 'Autonomous AI & Agentic Systems',
    tagline: 'Production-grade LLM orchestration, multimodal agents, and proprietary retrieval engines.',
    description: 'We architect and train resilient agentic infrastructure that handles complex multi-step reasoning, real-time context streaming, and low-latency inference for mission-critical enterprise operations.',
    deliverables: [
      'Custom Agent Orchestration & Function Calling',
      'Semantic Search & Hybrid RAG Pipelines',
      'Evaluation & Guardrail Architectures',
      'Fine-tuning & Local Model Inference Deployment',
      'Real-time Streaming APIs & WebSocket Telemetry'
    ],
    timeline: '4 – 8 Weeks',
    startingPrice: '$18,500',
    iconName: 'Cpu',
    techStack: ['Gemini 2.5 Pro', 'PyTorch', 'TypeScript', 'LangGraph', 'Qdrant Vector DB', 'gRPC'],
    metrics: [
      { label: 'Latency Standard', value: '< 95ms' },
      { label: 'Evaluation Precision', value: '99.4%' },
      { label: 'Context Efficiency', value: '4.2x' }
    ]
  },
  {
    id: 'product-design',
    category: 'design',
    title: 'Bespoke Digital Design & High-End UX',
    tagline: 'Crafted interfaces that command authority, inspire emotion, and convert high-value buyers.',
    description: 'Rejecting cookie-cutter templates in favor of mathematically proportioned design systems, micro-interactions, responsive 3D stages, and unforgettable brand storytelling.',
    deliverables: [
      'Comprehensive Design Systems & Token Architecture',
      'Interactive Prototypes with Real-Motion Fidelity',
      'Spatial & WebGL Interactive Experiences',
      'Design Engineering (Figma to Production Code Sync)',
      'Accessibility (WCAG 2.1 AAA) & Performance Audit'
    ],
    timeline: '3 – 6 Weeks',
    startingPrice: '$14,000',
    iconName: 'Layers',
    techStack: ['Figma Tokens', 'Tailwind CSS', 'Motion / Framer', 'Three.js / WebGL', 'Radix Primitives'],
    metrics: [
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Lighthouse Score', value: '100/100' },
      { label: 'Interaction Delight', value: 'Elite' }
    ]
  },
  {
    id: 'cloud-architecture',
    category: 'engineering',
    title: 'Modern Full-Stack & Cloud Architecture',
    tagline: 'High-throughput, edge-distributed web applications engineered for zero downtime.',
    description: 'End-to-end full-stack development utilizing modern type-safe frameworks, serverless edge compute, distributed caches, and resilient automated deployment pipelines.',
    deliverables: [
      'Next-Gen React & Vite / SSR Edge Frameworks',
      'Distributed Postgres / Cloud SQL & Multi-Region Caching',
      'Zero-Trust Auth & SOC2 Type II Readiness',
      'Automated CI/CD with Zero-Downtime Rollouts',
      'Real-Time Collaborative WebSockets Core'
    ],
    timeline: '6 – 10 Weeks',
    startingPrice: '$24,000',
    iconName: 'Globe',
    techStack: ['React 19', 'TypeScript', 'Node.js / Express', 'PostgreSQL', 'Redis', 'Docker'],
    metrics: [
      { label: 'Uptime Guarantee', value: '99.99%' },
      { label: 'Build Velocity', value: '2.8x' },
      { label: 'Global Edge TTFB', value: '18ms' }
    ]
  },
  {
    id: 'enterprise-transformation',
    category: 'strategy',
    title: 'Executive Tech Strategy & Architecture Sprints',
    tagline: 'Strategic product advisory, legacy code refactoring, and AI-first operational transformation.',
    description: 'Direct collaboration with founders and C-suite leadership to de-risk complex technical bets, define product roadmaps, and build defensible technology moats.',
    deliverables: [
      'Technical Due Diligence & Architecture Blueprint',
      'AI Integration Feasibility & ROI Modeling',
      'Codebase Health & Security Vulnerability Audit',
      'Team Capability Acceleration & Hiring Playbook',
      'Fractional VP of Engineering Leadership'
    ],
    timeline: '2 – 4 Weeks',
    startingPrice: '$12,000',
    iconName: 'Sparkles',
    techStack: ['Architecture Matrix', 'SOC2 Playbook', 'Cloud Cost Optimization', 'API Governance'],
    metrics: [
      { label: 'Infra Cost Savings', value: '-38%' },
      { label: 'Time-to-Market', value: '-55%' },
      { label: 'Venture Capital Lift', value: '$180M+' }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nexus-quantum',
    title: 'Nexus Autonomous AI Engine',
    client: 'Nexus Quantum Technologies',
    year: '2025',
    category: 'AI Systems',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Synthesizing 400M daily telemetry events into sub-second predictive action loops.',
    summary: 'Nexus needed an enterprise-grade control tower and real-time inference cockpit to monitor distributed autonomous agent fleets across 14 data centers worldwide.',
    challenge: 'Legacy dashboards struggled with multi-million event WebSocket latency, resulting in delayed incident resolution and cognitive overload for lead engineers.',
    solution: 'Engineered a bespoke high-frequency visualization dashboard with localized vector buffers, automated anomaly detection agents, and an instant natural-language querying cockpit.',
    impactMetrics: [
      { label: 'Telemetry Throughput', value: '400M/day', detail: 'Zero frame drops' },
      { label: 'Mean Time to Detect', value: '820ms', detail: 'Down from 4.8 minutes' },
      { label: 'Series B Valuation Lift', value: '+$65M', detail: 'Led by Tier 1 Silicon Valley VC' }
    ],
    technologies: ['React 19', 'TypeScript', 'Gemini Reasoning Core', 'WebAssembly', 'Tailwind', 'Motion'],
    featured: true,
    liveUrlMock: 'https://nexus-ai.preview.internal',
    testimonial: {
      quote: 'AURA delivered a product that felt like software sent back from five years in the future. The sheer performance and interaction design stunned our board.',
      author: 'Dr. Elena Vance',
      role: 'Chief Technology Officer, Nexus Quantum',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'aethelgard-horology',
    title: 'Aethelgard Haute Horlogerie',
    client: 'Maison Aethelgard Geneva',
    year: '2025',
    category: 'Luxury & Commerce',
    heroImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Translating 180 years of Swiss artisanal watchmaking into an immersive digital boutique.',
    summary: 'A private Swiss horology house required a confidential, invitation-only digital atelier for high-net-worth collectors to custom-configure bespoke mechanical timepieces.',
    challenge: 'Standard e-commerce engines lacked the tactile reverence, bespoke typography, and bespoke movement customization required for $80,000+ luxury acquisitions.',
    solution: 'Designed an editorial visual sanctuary with 60fps mechanical movement exploders, private concierge booking channels, and bank-grade secure reserve mechanisms.',
    impactMetrics: [
      { label: 'Private Reserve Rate', value: '94%', detail: 'All 100 edition slots filled in 48h' },
      { label: 'Average Order Value', value: '€78,500', detail: 'Highest in brand history' },
      { label: 'Global Design Accolade', value: 'FWA of the Day', detail: 'Recognized for craft' }
    ],
    technologies: ['WebGL 3D Core', 'Custom Type Engine', 'Tailwind', 'Secure Checkout Architecture'],
    featured: true,
    liveUrlMock: 'https://aethelgard.ch',
    testimonial: {
      quote: 'They did not just build a digital experience; they honored the soul of our artisans. Exceptional attention to proportion, sound, and visual hierarchy.',
      author: 'Henri de Montmirail',
      role: 'Managing Director, Maison Aethelgard',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'vortex-mobility',
    title: 'Vortex Autonomous Logistics Cloud',
    client: 'Vortex Dynamics Inc.',
    year: '2024',
    category: 'Enterprise Cloud',
    heroImage: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Dynamic route optimization and vehicle mesh network management for autonomous fleets.',
    summary: 'Vortex orchestrates 2,400 self-driving delivery pods across four major metropolitan centers, requiring sub-100ms routing adjustments under weather and traffic spikes.',
    challenge: 'Gridlock prediction and fleet dispatch needed a unified operating interface that could seamlessly reconcile geospatial telemetry with dynamic cost parameters.',
    solution: 'Created an intelligent operations canvas with real-time vector map rendering, instant scenario simulations, and human-in-the-loop escalation consoles.',
    impactMetrics: [
      { label: 'Fleet Route Efficiency', value: '+31.4%', detail: 'Measured across 1.2M miles' },
      { label: 'Incident Response Time', value: '< 2.4s', detail: 'Fully automated dispatch' },
      { label: 'Annual Fuel / Energy Saved', value: '$4.2M', detail: 'Direct bottom-line impact' }
    ],
    technologies: ['Geospatial Canvas', 'Distributed Node Mesh', 'Redis Pub/Sub', 'TypeScript'],
    featured: false,
    liveUrlMock: 'https://vortex-cloud.internal',
    testimonial: {
      quote: 'AURA became an indispensable extension of our core engineering staff. The speed and precision with which they execute is unprecedented.',
      author: 'Marcus Vance',
      role: 'VP of Autonomous Infrastructure, Vortex',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'solace-spatial',
    title: 'Solace Biometric Neuro-Health',
    client: 'Solace Health Labs',
    year: '2025',
    category: 'Spatial & Creative',
    heroImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Continuous cognitive load tracking and adaptive bio-feedback soundscapes.',
    summary: 'Solace combines EEG sensor inputs with algorithmic generative ambient soundscapes to mitigate acute stress for high-stress surgeons and aerospace pilots.',
    challenge: 'Communicating complex neurological brainwave frequencies into understandable, calming visual patterns without overwhelming the clinician or patient.',
    solution: 'A minimalist, calming interface with real-time audio synthesis nodes, mathematical wave visualizations, and HIPAA-compliant patient telemetry sync.',
    impactMetrics: [
      { label: 'Cognitive Fatigue Reduction', value: '44%', detail: 'Clinical trial verified' },
      { label: 'User Retention (D30)', value: '88.2%', detail: 'Top quartile med-tech benchmark' },
      { label: 'FDA Breakthrough Device', value: 'Designated', detail: 'Accelerated review pipeline' }
    ],
    technologies: ['Web Audio API', 'Canvas Visualizers', 'React 19', 'Tailwind', 'HIPAA Shield'],
    featured: false,
    liveUrlMock: 'https://solace.health',
    testimonial: {
      quote: 'Their ability to turn complex scientific telemetry into peaceful, intuitive beauty is unmatched in the digital industry.',
      author: 'Dr. Sarah Lin, MD, PhD',
      role: 'Lead Neuroscientist, Solace Labs',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'autonomous-agent-latency',
    title: 'Architecting Sub-100ms Autonomous Agent Feedback Loops in Production',
    category: 'AI Architecture',
    date: 'August 28, 2025',
    readTime: '6 min read',
    author: {
      name: 'Kaelen Ross',
      role: 'Principal Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    excerpt: 'Why standard sequential chain-of-thought paradigms create bottlenecked UX, and how speculative multi-branch generation restores native software responsiveness.',
    content: [
      'In building enterprise AI systems over the past twenty-four months, one inescapable truth has emerged: latency is the single greatest inhibitor of user trust.',
      'When an AI agent takes 4 to 8 seconds to validate a schema and query secondary databases, the user is ejected from their cognitive flow state. We must treat inference latency not as an unalterable cost of intelligence, but as an architectural constraint to be aggressively compressed.',
      'Our approach centers on speculative execution pipelines: kicking off asynchronous background retrieval while streaming initial semantic classifications directly into the frontend canvas.'
    ],
    tags: ['AI Agents', 'Latency Optimization', 'Streaming Architecture', 'TypeScript']
  },
  {
    id: 'mathematical-design-systems',
    title: 'Beyond Arbitrary Aesthetics: Mathematical Ratios in High-Conversion SaaS UI',
    category: 'Product Design',
    date: 'July 14, 2025',
    readTime: '8 min read',
    author: {
      name: 'Soraya Chen',
      role: 'Design Director',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80'
    },
    excerpt: 'How strict modular scales, optical margin adjustments, and intentional baseline rhythm build subconscious authority in software products.',
    content: [
      'Great software does not merely look modern—it feels mathematically undeniable. When typography, container padding, and elevation scales adhere to rigorous proportional ratios, the eye processes information with 30% less cognitive friction.',
      'In this treatise, we explore our exact design engineering formulas for harmonic spacing, nested corner radii calculus, and contrast thresholds that pass WCAG AAA standards without sacrificing visual elegance.'
    ],
    tags: ['Design Systems', 'Typography', 'UX Engineering', 'Tailwind']
  },
  {
    id: 'zero-downtime-edge',
    title: 'The Modern Cloud Engine: Distributed Postgres, Edge Compute & Resilient Micro-Frontends',
    category: 'Engineering',
    date: 'June 02, 2025',
    readTime: '10 min read',
    author: {
      name: 'Alexander Sterling',
      role: 'Head of Infrastructure',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    excerpt: 'A deep dive into decomposing monolithic web portals into high-velocity edge architectures capable of handling 50,000 requests/sec with zero failovers.',
    content: [
      'Scaling web infrastructure is no longer about throwing larger container instances at traffic spikes. It is about pushing computation to the physical edge where your users reside.',
      'Here is the complete blueprint of how AURA provisions distributed global data stores, implements automated canary deployments, and ensures fault-tolerant state recovery.'
    ],
    tags: ['Cloud Infrastructure', 'Edge Compute', 'DevOps', 'Distributed Systems']
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'sprint',
    name: 'Velocity Sprint',
    subtitle: 'Rapid Prototype & MVP',
    priceMonthly: 12500,
    priceQuarterly: 10500,
    popular: false,
    description: 'A focused 4-week engagement engineered to validate, design, and ship a high-fidelity MVP or critical product module.',
    features: [
      'Dedicated Senior Architect & Lead Product Designer',
      'End-to-End System Prototype or Production MVP',
      'Custom Design System (Figma + Tailwind Tokens)',
      'Core AI Integration / API Connectivity',
      'Weekly Interactive Demos & Async Slack Access',
      'Full Source Code & IP Ownership Transferred',
      '30-Day Post-Launch Warranty'
    ],
    idealFor: 'Early-stage startups and innovation labs needing an elite launchpad in under 30 days.',
    deliverableSLA: '4-Week Guaranteed Delivery',
    teamComposition: '1 Lead Engineer + 1 Senior Product Designer',
    ctaText: 'Initiate Velocity Sprint'
  },
  {
    id: 'pod',
    name: 'Dedicated Atelier Pod',
    subtitle: 'Full-Cycle Product Engineering',
    priceMonthly: 24500,
    priceQuarterly: 21500,
    popular: true,
    description: 'An elite, cross-functional design & engineering unit that embeds directly alongside your leadership to build defensible category-defining products.',
    features: [
      'Full Pod: 1 Principal Architect, 2 Full-Stack Engineers, 1 Design Lead',
      'Unlimited Scope Backlog Execution & Continuous Sprints',
      'Custom Autonomous AI Agents & Vector Database Engines',
      'Zero-Trust Security & SOC2 Type II Architecture Alignment',
      'Daily Async Standups & Direct Slack/Discord Channel',
      'Bi-Weekly Staging Releases & Production Deployments',
      '24/7 Priority Emergency Support SLA',
      'Continuous Performance & Accessibility Monitoring'
    ],
    idealFor: 'Funded scale-ups (Seed to Series B) looking to out-execute competitors with elite velocity.',
    deliverableSLA: 'Bi-Weekly Continuous Milestones',
    teamComposition: '4-Person Senior Specialist Pod',
    ctaText: 'Deploy Dedicated Pod'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Cloud Atelier',
    subtitle: 'Bespoke Scale & AI Modernization',
    priceMonthly: 48000,
    priceQuarterly: 42000,
    popular: false,
    description: 'Customized multi-pod capacity for Fortune 500 enterprises and hyper-scale platforms requiring sovereign AI architectures and bespoke cloud systems.',
    features: [
      'Multi-disciplinary team tailored to enterprise roadmap',
      'Proprietary On-Premises & Sovereign LLM Deployment',
      'Multi-Region Distributed Cloud Infrastructure',
      'Dedicated Solutions Architect & Technical Account Executive',
      'Custom SLA with 15-minute Incident Escalation',
      'Executive Steering Committee & Quarterly Reviews',
      'Full IP, White-Glove Security & Penetration Testing',
      'Comprehensive Staff Knowledge Transfer & Training'
    ],
    idealFor: 'Enterprise organizations modernizing legacy cores into AI-driven high-velocity systems.',
    deliverableSLA: 'Custom Enterprise Roadmap',
    teamComposition: 'Custom 6-12 Specialist Squads',
    ctaText: 'Request Executive Consultation'
  }
];

export const MOCK_CLIENT_PROJECT: ClientProject = {
  id: 'PRJ-2025-084',
  name: 'Nexus Quantum — Autonomous Fleet Cockpit V2',
  status: 'In Development',
  leadArchitect: 'Alexander Sterling (Principal Systems Lead)',
  health: 'Ahead of Schedule',
  progressPercent: 78,
  milestones: [
    {
      id: 'm1',
      title: 'Discovery & Vector Schema Blueprint',
      status: 'completed',
      progress: 100,
      date: 'Aug 10, 2025',
      description: 'Defined Qdrant schema, gRPC protocol buffers, and low-latency websocket telemetry pipeline.'
    },
    {
      id: 'm2',
      title: 'High-Fidelity Design System & Motion Tokens',
      status: 'completed',
      progress: 100,
      date: 'Aug 18, 2025',
      description: 'Delivered complete Figma component library with dark-mode optical balancing and 60fps micro-interactions.'
    },
    {
      id: 'm3',
      title: 'Agentic Reasoning Core & Hybrid Search API',
      status: 'completed',
      progress: 100,
      date: 'Aug 26, 2025',
      description: 'Benchmarked Gemini reasoning loops at 92ms TTFB with 99.4% tool-calling precision.'
    },
    {
      id: 'm4',
      title: 'Interactive Operations Canvas & Fleet Telemetry',
      status: 'in-progress',
      progress: 65,
      date: 'Target: Sep 12, 2025',
      description: 'Connecting 400M live events pipeline to real-time WebGL canvas with instant anomaly alerts.'
    },
    {
      id: 'm5',
      title: 'SOC2 Security Hardening & Global Production Deploy',
      status: 'upcoming',
      progress: 0,
      date: 'Target: Sep 28, 2025',
      description: 'Final multi-region canary rollout and penetration audit validation.'
    }
  ],
  deliverables: [
    { name: 'AURA_Design_Tokens_v2.4.json', type: 'Design Specs', size: '1.4 MB', date: 'Aug 20, 2025' },
    { name: 'Nexus_Architecture_Whitepaper_v1.pdf', type: 'Technical Spec', size: '6.8 MB', date: 'Aug 12, 2025' },
    { name: 'Docker_Production_Cluster_Config.zip', type: 'DevOps Bundle', size: '14.2 MB', date: 'Aug 28, 2025' },
    { name: 'API_Postman_OpenAPI_v3.yaml', type: 'API Documentation', size: '820 KB', date: 'Aug 30, 2025' }
  ],
  invoices: [
    { id: 'INV-2025-001', amount: '$24,500.00', date: 'Aug 01, 2025', status: 'Paid' },
    { id: 'INV-2025-002', amount: '$24,500.00', date: 'Sep 01, 2025', status: 'Paid' },
    { id: 'INV-2025-003', amount: '$24,500.00', date: 'Oct 01, 2025', status: 'Pending' }
  ]
};

export const FAQ_DATA = [
  {
    question: 'How does AURA differ from traditional dev agencies or freelancers?',
    answer: 'Traditional agencies treat code as a billable hour commodity; AURA operates as a product engineering atelier. Every pod is staffed exclusively by senior architects with venture-backed exits and tier-1 product design backgrounds. We do not use offshore juniors or bloated project management layers—you speak directly with the architects writing your code and designing your systems.'
  },
  {
    question: 'How quickly can our team begin a sprint or deployment?',
    answer: 'Once discovery is confirmed and scope is established, our dedicated pods typically launch within 3 to 5 business days. Our automated developer environment orchestrators and standardized design tokens allow us to push production-ready commits in sprint week 1.'
  },
  {
    question: 'Who owns the intellectual property and code generated?',
    answer: 'You retain 100% unconditional ownership of all source code, Figma files, architecture diagrams, fine-tuned models, and intellectual property from day one upon milestone settlement. No lock-in, ever.'
  },
  {
    question: 'How do you handle confidentiality and enterprise security?',
    answer: 'We execute comprehensive mutual NDAs prior to discovery. All infrastructure is architected according to SOC2 Type II, HIPAA, and GDPR standards, with strict zero-trust data segregation protocols.'
  },
  {
    question: 'Can we transition from a Velocity Sprint to a full Dedicated Pod?',
    answer: 'Yes. Over 80% of our Velocity Sprint partners seamlessly transition into Dedicated Pods or ongoing advisory engagements as their user base and product scope expand.'
  }
];
