import {
  ServiceItem,
  CaseStudyItem,
  TestimonialItem,
  TeamMemberItem,
  PricingPlanItem,
  FAQItem
} from '../types';

export const COMPANY_INFO = {
  name: 'VERTEX STRATEGY & ADVISORY',
  tagline: 'Business Intelligence & Strategic Technology Architecture',
  email: 'advisory@vertex.com',
  phone: '+1 (800) 555-0199',
  address: 'Executive Tower 100, Financial District, San Francisco, CA 94105',
  hours: 'Mon - Fri: 8:00 AM - 6:00 PM PST',
};

export const TRUSTED_COMPANIES = [
  { name: 'FINTECH GLOBAL', symbol: '✦', tagline: 'Capital Markets' },
  { name: 'VERTEX LOGISTICS', symbol: '▲', tagline: 'Supply Chain' },
  { name: 'LUMEN HEALTH', symbol: '◉', tagline: 'BioTech & Health' },
  { name: 'ORBIT CLOUD', symbol: '⭕', tagline: 'Data Infrastructure' },
  { name: 'AXIOM ADVISORY', symbol: '❖', tagline: 'Private Equity' },
  { name: 'NEXORA AI', symbol: '⬡', tagline: 'Enterprise Intelligence' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'digital-transformation',
    iconName: 'Sparkles',
    icon: 'Sparkles',
    title: 'Digital Transformation',
    businessImpact: 'Operational Efficiency',
    techDomain: 'Cloud Native & Microservices',
    roiMetric: '+41.8% Speed',
    shortDesc: 'Reengineer legacy enterprise workflows into resilient, cloud-native architectures that accelerate market speed.',
    fullDesc: 'Our Digital Transformation strategy bridges executive vision with software execution. We audit monoliths, eliminate technical friction, and implement cloud-native microservices.',
    features: [
      'Legacy Monolith & Codebase Modernization',
      'Enterprise Architecture Redesign',
      'Workflow Automation & Process Mining',
      'Continuous Delivery & Agile Enablement'
    ],
    deliverables: ['Digital Maturity Benchmark', '3-Year Architecture Blueprint', 'Zero-Downtime Migration', 'Executive SLA Dashboard']
  },
  {
    id: 'ai-automation',
    iconName: 'Cpu',
    icon: 'Cpu',
    title: 'AI & Intelligent Automation',
    businessImpact: 'Intelligent Decision Making',
    techDomain: 'Enterprise LLMs & Process Bots',
    roiMetric: '3.4x Productivity',
    shortDesc: 'Deploy domain-specific LLM agents, automated document extraction, and predictive decision engines.',
    fullDesc: 'Integrate enterprise-grade generative AI, continuous learning loops, and automated process robotics directly into core executive decision paths.',
    features: [
      'Custom Enterprise LLM Fine-Tuning',
      'Intelligent Customer & Ops Automation',
      'Predictive Risk & Demand Analytics',
      'Document AI & Semantic Intelligence'
    ],
    deliverables: ['Tailored AI Assistant Suite', 'Data Extraction Pipeline', 'Governance & Guardrail Policy', 'ROI Benchmark Model']
  },
  {
    id: 'cloud-architecture',
    iconName: 'Cloud',
    icon: 'Cloud',
    title: 'Multi-Cloud Architecture',
    businessImpact: 'Scalable Infrastructure',
    techDomain: 'AWS / GCP / Azure Kubernetes',
    roiMetric: '-34% FinOps Cost',
    shortDesc: 'Architect resilient multi-cloud environments, container orchestration, and automated FinOps controls.',
    fullDesc: 'Maximize platform uptime while optimizing infrastructure expenditure with SOC2 and GDPR compliant multi-cloud orchestration.',
    features: [
      'Multi-Cloud Migration & Hybrid Mesh',
      'Kubernetes Orchestration & Helm Pipelines',
      'Infrastructure as Code (Terraform / Pulumi)',
      'FinOps Expenditure Optimization'
    ],
    deliverables: ['Zero-Downtime Multi-Region Mesh', '24/7 Security Operations Panel', 'Disaster Recovery Protocol', 'FinOps Cost Ledger']
  },
  {
    id: 'data-intelligence',
    iconName: 'BarChart3',
    icon: 'BarChart3',
    title: 'Data Intelligence & BI',
    businessImpact: 'Accurate Forecasting',
    techDomain: 'Snowflake / BigQuery / dbt',
    roiMetric: '99.9% Data Accuracy',
    shortDesc: 'Unify siloed data streams into real-time executive dashboards, predictive ledgers, and automated reporting.',
    fullDesc: 'Empower executive boards with real-time operational metrics, predictive customer churn forecasting, and unified data warehousing.',
    features: [
      'Enterprise Warehouse Architecture',
      'Real-Time Event Streaming & ETL',
      'Executive KPI & Financial Dashboards',
      'Predictive Customer & Market Analytics'
    ],
    deliverables: ['Unified Enterprise Data Warehouse', 'Custom Executive BI Console', 'Data Governance Matrix', 'Real-Time Streaming Bus']
  },
  {
    id: 'business-strategy',
    iconName: 'Briefcase',
    icon: 'Briefcase',
    title: 'Executive Business Strategy',
    businessImpact: 'Sustainable Market Growth',
    techDomain: 'Growth Engineering & M&A Audit',
    roiMetric: '4.8x Average ROI',
    shortDesc: 'Strategic advisory to capture new market opportunities, streamline CapEx, and evaluate tech M&A targets.',
    fullDesc: 'Partner directly with executive boards and private equity teams to formulate actionable growth strategies and perform technical due diligence.',
    features: [
      'Strategic Market Entry & Expansion',
      'CapEx & OpEx Optimization Audits',
      'M&A Technical Due Diligence',
      'Product-Market & Monetization Scaling'
    ],
    deliverables: ['Executive Strategic Growth Plan', 'Financial ROI Projection Suite', 'Competitive Moat Report', 'Risk Mitigation Blueprint']
  },
  {
    id: 'software-engineering',
    iconName: 'Code',
    icon: 'Code',
    title: 'Software Engineering',
    businessImpact: 'Rapid Product Innovation',
    techDomain: 'TypeScript / Go / Rust / React',
    roiMetric: '15x Weekly Releases',
    shortDesc: 'Engineered web, mobile, and SaaS platforms built with high-throughput backend systems and sub-second performance.',
    fullDesc: 'From complex fintech engines to high-traffic SaaS portals, our engineering pods deliver robust, secure, and intuitive platforms.',
    features: [
      'Full-Stack Enterprise Web Platforms',
      'High-Throughput Microservice APIs',
      'Cross-Platform Native Mobile Apps',
      'CI/CD Automated Deployment Pipelines'
    ],
    deliverables: ['Production-Grade Web/Mobile App', 'Interactive API Documentation', 'Automated Integration Testing', 'DevOps Infrastructure Script']
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-01',
    code: 'CASE 01 / FINTECH',
    category: 'Digital Transformation',
    clientIndustry: 'Capital Markets & Wealth Management',
    title: 'Legacy Banking Core Migration & Latency Reduction',
    shortDesc: 'Migrated a global financial engine to distributed microservices, cutting transaction latency by 72% and reducing annual infrastructure cost by $4.2M.',
    metric: '+72%',
    metricLabel: 'Processing Speed Surge',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    challenge: 'A Fortune 500 capital markets firm was throttled by 20-year-old monolithic databases, causing severe transaction latency, frequent downtime, and slow product iterations.',
    solution: 'Vertex architected an event-driven microservice matrix on Kubernetes, established real-time stream processing, and deployed zero-downtime CI/CD deployment pipelines.',
    results: [
      '72% reduction in transaction latency across 14M daily active users',
      '$4.2M saved in annual cloud and server operational expenditure',
      'Release cadence increased from quarterly to 15 deployments per week',
      'Achieved 99.999% SLA availability during high-volatility trading spikes'
    ],
    technologies: ['Kubernetes', 'Go', 'React', 'PostgreSQL', 'Kafka', 'Terraform']
  },
  {
    id: 'case-02',
    code: 'CASE 02 / LOGISTICS',
    category: 'AI & Automation',
    clientIndustry: 'Global Logistics & Freight Supply Chain',
    title: 'Predictive AI Dispatch & Route Optimization Engine',
    shortDesc: 'Deployed real-time predictive weather and traffic telemetry models that reduced shipping delays by 48% across North American transport routes.',
    metric: '-48%',
    metricLabel: 'Fulfillment Delay Reduction',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    challenge: 'A continental transport network faced unpredictable weather delays and suboptimal route allocation, spiking fuel consumption and degrading customer NPS scores.',
    solution: 'Vertex built an AI dispatch engine integrating real-time telemetry, automated rerouting models, and continuous fleet load balancing.',
    results: [
      '48% reduction in cross-country freight delivery delays',
      '22% fuel expenditure optimization across a fleet of 1,200 vehicles',
      'Customer NPS jumped from 62 to 89 points within two quarters',
      'Automated 85% of routine dispatch decisions with zero manual intervention'
    ],
    technologies: ['Python', 'TensorFlow', 'Google Cloud Platform', 'React', 'FastAPI', 'Redis']
  },
  {
    id: 'case-03',
    code: 'CASE 03 / SAAS',
    category: 'Multi-Cloud Architecture',
    clientIndustry: 'Enterprise HealthTech & Data Systems',
    title: 'Multi-Region HealthTech SaaS Expansion Architecture',
    shortDesc: 'Architected a GDPR and HIPAA compliant multi-region data mesh that enabled instant entry into 18 new global markets with sub-100ms response times.',
    metric: '18+',
    metricLabel: 'Global Markets Launched',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    challenge: 'A fast-growing healthcare SaaS platform was blocked from international expansion due to complex European data sovereignty laws and high latency.',
    solution: 'Vertex designed a privacy-enforced data mesh architecture with regional edge caching, automated data zoning, and end-to-end encryption.',
    results: [
      'Successfully launched platform operations in 18 international markets in 6 months',
      '100% compliance verified across GDPR, HIPAA, and regional healthcare security standards',
      'Global edge latency reduced to under 95ms',
      'Annual Recurring Revenue multiplied 4.5x year-over-year'
    ],
    technologies: ['Azure Cloud', 'Node.js', 'Next.js', 'PostgreSQL', 'Docker', 'GraphQL']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    quote: 'Vertex turned our complex legacy architecture into an agile, data-driven engine. Their strategic clarity and executive execution enabled us to make confident decisions fast.',
    name: 'Sarah Jenkins',
    title: 'Chief Technology Officer',
    company: 'Apex Capital Technologies',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    performanceMetric: '+72% Latency Drop'
  },
  {
    id: '2',
    quote: 'The capability matrix and engineering firepower at Vertex are unmatched. They modernized our core portal and boosted customer retention by 42% in ninety days.',
    name: 'Marcus Vance',
    title: 'VP of Product & Strategy',
    company: 'OmniGlobal Freight',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    performanceMetric: '+42% Retention Growth'
  },
  {
    id: '3',
    quote: 'Vertex operates like a hybrid of McKinsey strategic thinking and Silicon Valley engineering speed. They are the essential advisory partner for enterprise transformation.',
    name: 'Elena Rostova',
    title: 'Head of Digital Transformation',
    company: 'Lumina Health Network',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    performanceMetric: '3.4x Productivity Boost'
  },
  {
    id: '4',
    quote: 'Their business intelligence dashboards gave our executive board continuous visibility into revenue streams and cloud cost optimizations.',
    name: 'David Chen',
    title: 'Chief Executive Officer',
    company: 'Savant Intelligence Labs',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    performanceMetric: '-34% OpEx Reduction'
  }
];

export const TEAM_MEMBERS: TeamMemberItem[] = [
  {
    id: 'alex-morgan',
    number: '01',
    name: 'Alex Morgan',
    role: 'Chief Executive Officer & Founder',
    bio: '15+ years formulating enterprise strategy and digital transformation roadmaps for Fortune 500 boards.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    expertise: ['Corporate Strategy', 'M&A Due Diligence', 'Executive Advisory'],
    experienceYears: '16 YRS',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'alex.morgan@vertex.com'
    }
  },
  {
    id: 'michael-chang',
    number: '02',
    name: 'Michael Chang',
    role: 'Chief Technology Officer',
    bio: 'Former VP of Infrastructure at hyperscale cloud providers. Specializes in multi-region microservice meshes.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    expertise: ['Cloud Architecture', 'Distributed Systems', 'Kubernetes'],
    experienceYears: '14 YRS',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'michael.chang@vertex.com'
    }
  },
  {
    id: 'sophia-alvarez',
    number: '03',
    name: 'Sophia Alvarez',
    role: 'Head of Strategic Advisory & Product',
    bio: 'Pioneered operational intelligence models for global supply chain leaders and private equity portfolios.',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    expertise: ['Business Intelligence', 'Product Strategy', 'Change Management'],
    experienceYears: '12 YRS',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'sophia.alvarez@vertex.com'
    }
  },
  {
    id: 'david-kim',
    number: '04',
    name: 'David Kim',
    role: 'Director of AI & Systems Architecture',
    bio: 'Published Machine Learning researcher specializing in enterprise generative AI agents and automated FinOps.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    expertise: ['Enterprise LLMs', 'FinOps Optimization', 'System Reliability'],
    experienceYears: '11 YRS',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'david.kim@vertex.com'
    }
  }
];

export const PRICING_PLANS: PricingPlanItem[] = [
  {
    id: 'start',
    name: 'START',
    subtitle: 'STRATEGIC FOUNDATION',
    targetScale: 'Emerging & Mid-Market Companies',
    description: 'Designed for ambitious organizations establishing modern cloud & data foundations.',
    price: '$5,000',
    period: '/ month',
    highlighted: false,
    features: [
      'Dedicated Senior Solutions Architect',
      'Technical Debt & Architecture Audit',
      'Up to 40 Hours Monthly Strategic Delivery',
      'Bi-Weekly Executive Progress Reviews',
      'Standard 24-Hour SLA Response',
      'Complete Codebase & Infra Documentation'
    ],
    ctaText: 'Engage Strategic Foundation'
  },
  {
    id: 'scale',
    name: 'SCALE',
    subtitle: 'CAPABILITY ACCELERATION',
    targetScale: 'Growing & Scaling Enterprises',
    description: 'Dedicated multi-disciplinary engineering pod for high-speed product and cloud scaling.',
    price: '$12,000',
    period: '/ month',
    highlighted: true,
    features: [
      'Dedicated Engineering Pod (Tech Lead + 2 Sr Engineers)',
      'Full Multi-Cloud & Microservices Modernization',
      'Up to 120 Hours Monthly Dedicated Execution',
      'Weekly Executive Sprint Demos & FinOps Reviews',
      'Priority 4-Hour SLA Emergency Guarantee',
      'Continuous Automated Security & Performance Audits',
      'Custom Generative AI Agent Integration'
    ],
    ctaText: 'Deploy Capability Pod'
  },
  {
    id: 'transform',
    name: 'TRANSFORM',
    subtitle: 'ENTERPRISE DOMINANCE',
    targetScale: 'Global Enterprise Organizations',
    description: 'Custom advisory and enterprise software pods for complete organizational transformation.',
    price: 'Custom Scale',
    period: ' bespoke engagement',
    highlighted: false,
    features: [
      'Bespoke Multi-Team Engineering Pods',
      'End-to-End Enterprise Digital Overhaul',
      'Uncapped Executive Advisory & Dev Capacity',
      'Dedicated VP of Advisory & Chief Architect',
      '1-Hour SLA Guarantee with 24/7 On-Call Support',
      'Full SOC2 / GDPR / ISO Enterprise Compliance',
      'On-Site Boardroom Workshops & Team Enablement'
    ],
    ctaText: 'Request Executive Proposal'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    number: '01',
    category: 'Scope',
    question: 'How do you determine project scope and strategic objectives?',
    answer: 'Every engagement starts with a 1-week Executive Discovery Sprint. We analyze technical debt, map process bottlenecks, and define quantifiable KPIs (e.g. latency, revenue conversion, OpEx savings) before presenting a fixed milestone roadmap.'
  },
  {
    id: 'faq-2',
    number: '02',
    category: 'ROI & Metrics',
    question: 'How do you measure ROI and financial performance improvements?',
    answer: 'We establish baseline metrics on Day 1 across operational expenditure, server cost, release velocity, and conversion rates. Our real-time Business Intelligence dashboard tracks progress towards target ROI goals throughout the engagement.'
  },
  {
    id: 'faq-3',
    number: '03',
    category: 'Sectors',
    question: 'What industries and organization sizes do you specialize in?',
    answer: 'Our strategic advisory and software engineering focus on Financial Services, FinTech, Supply Chain & Logistics, Enterprise SaaS, Healthcare Systems, and Private Equity portfolio companies seeking rapid digital scaling.'
  },
  {
    id: 'faq-4',
    number: '04',
    category: 'Execution',
    question: 'How quickly can implementation and deployment begin?',
    answer: 'Following the 1-week Discovery Sprint, our dedicated engineering pods can deploy initial production code within 14 days, operating in 2-week agile sprint cycles with live board demonstrations.'
  },
  {
    id: 'faq-5',
    number: '05',
    category: 'Integration',
    question: 'How do your teams integrate with our internal engineering team?',
    answer: 'We operate either as an autonomous strategic delivery pod or as an embedded execution team working side-by-side with your in-house engineers, adopting your Slack, Jira, and GitHub workflows.'
  },
  {
    id: 'faq-6',
    number: '06',
    category: 'IP & Security',
    question: 'What are your IP ownership, NDA, and security compliance standards?',
    answer: 'All intellectual property created during the engagement belongs 100% to your company from day one. We enforce SOC2 Type II, GDPR European data residency, and ISO 27001 standards.'
  }
];

export const STATS = [
  { value: 150, suffix: '+', label: 'Enterprise Projects Delivered', subtext: 'Across global sectors' },
  { value: 32, suffix: '', label: 'Global Markets Enabled', subtext: 'North America, EU & Asia' },
  { value: 98, suffix: '%', label: 'Client Retention Rate', subtext: 'Based on post-audit reviews' },
  { value: 4.8, suffix: 'x', label: 'Average Enterprise ROI', subtext: 'Measured across 3 years' },
];

export const GROWTH_ENGINE_STEPS = [
  {
    step: '01',
    id: 'challenge',
    title: 'BUSINESS CHALLENGE',
    label: 'INPUT',
    subtitle: 'Identify Strategic Friction',
    description: 'Uncover operational bottlenecks, legacy codebase liabilities, and market expansion constraints through process mining and data telemetry.'
  },
  {
    step: '02',
    id: 'strategy',
    title: 'DATA & STRATEGY',
    label: 'INTELLIGENCE',
    subtitle: 'Formulate Decision Matrix',
    description: 'Transform raw enterprise telemetry into a clear architectural blueprint, financial ROI projection, and prioritized execution roadmap.'
  },
  {
    step: '03',
    id: 'execution',
    title: 'TECHNOLOGY & PEOPLE',
    label: 'EXECUTION',
    subtitle: 'Deploy Capability Pods',
    description: 'Senior software engineering pods execute zero-downtime microservice migrations, automated FinOps pipelines, and AI agent integrations.'
  },
  {
    step: '04',
    id: 'result',
    title: 'BUSINESS GROWTH',
    label: 'RESULT',
    subtitle: 'Measure Business Advantage',
    description: 'Capture quantifiable ROI: 70%+ reduction in latency, 30%+ OpEx cost savings, 4x market entry velocity, and elevated enterprise valuation.'
  }
];
