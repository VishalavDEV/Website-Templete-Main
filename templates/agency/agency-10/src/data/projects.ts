import { CaseStudy } from '../types';

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'synapse-health',
    slug: 'synapse-health-ai-diagnostics',
    title: 'SynapseHealth: Real-Time Clinical Decision Support & Multimodal Radiology Engine',
    client: 'SynapseHealth Systems',
    clientIndustry: 'Healthcare',
    clientRegion: 'North America',
    year: '2025',
    category: 'AI',
    shortDescription: 'Engineered an FDA-guideline compliant multimodal vision & NLP pipeline analyzing CT/MRI scans in 3.2 seconds with 97.4% concordance with expert radiologists.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
    featured: true,
    challenge: 'Hospital radiology departments faced severe diagnostic backlogs with over 36-hour average turnaround times for acute triage, resulting in physician burnout and delayed emergency interventions.',
    approach: 'Conducted rigorous clinical workflow mapping with 24 board-certified radiologists to design an assistive triage copilot that flags critical vascular and lung abnormalities before patient chart review.',
    solution: 'Engineered an asynchronous DICOM ingestion microservice coupled with an ensemble of vision transformers (ViT) and fine-tuned medical LLMs providing annotated anomaly bounding boxes and draft findings.',
    designHighlights: [
      'High-contrast radiologist dark mode UI reducing eye fatigue during 12-hour shifts',
      'One-click interactive annotation brush with instant volumetric measurement recalculation',
      'Side-by-side temporal progression slider comparing prior historical scans automatically',
      'Audit log transparency badge detailing model confidence and training distribution source'
    ],
    techStack: ['Python', 'PyTorch', 'TensorRT', 'DICOM Protocol', 'FastAPI', 'React', 'Tailwind CSS', 'Docker', 'AWS HealthLake'],
    developmentHighlights: [
      'Engineered streaming DICOM decompression reducing time-to-first-slice from 8.2s to 0.4s',
      'HIPAA-compliant on-premises edge inference appliance with hardware-level memory encryption',
      'Automated drift monitoring tracking sensitivity changes across differing vendor scanner hardware',
      'Zero-loss failover cluster ensuring 99.999% availability for trauma center operations'
    ],
    metrics: [
      { value: '42%', label: 'Turnaround Reduction', impact: 'Average triage time dropped from 36h to 48m' },
      { value: '97.4%', label: 'Diagnostic Concordance', impact: 'Validated in double-blind hospital clinical trial' },
      { value: '3.2s', label: 'Scan Ingestion & Inference', impact: 'Real-time volumetric 3D analysis' }
    ],
    testimonial: {
      quote: 'The KRAFT engineering team delivered a platform that truly respects clinical nuance. It has become an indispensable copilot that our attending physicians trust every shift.',
      author: 'Dr. Elena Rostova',
      role: 'Chief of Diagnostic Radiology',
      company: 'SynapseHealth Systems',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'aurora-capital',
    slug: 'aurora-capital-risk-engine',
    title: 'Aurora Capital: High-Throughput Quantitative Risk & Real-Time Portfolio Telemetry',
    client: 'Aurora Capital Partners',
    clientIndustry: 'FinTech',
    clientRegion: 'London, UK',
    year: '2025',
    category: 'SaaS',
    shortDescription: 'Built an institutional portfolio analytics engine processing 140,000 streaming market events per second with sub-5ms Value-at-Risk (VaR) recalculations.',
    heroImage: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=1600&q=80',
    featured: true,
    challenge: 'Existing legacy overnight risk batch scripts failed to capture intraday liquidity crises and currency fluctuations, leaving $4.2B in assets under management exposed to volatile market swings.',
    approach: 'Architected an event-driven streaming topology utilizing Rust and Apache Kafka to replace batch jobs with continuously recalculating Monte Carlo simulations across global asset classes.',
    solution: 'Delivered a web-native institutional trading and risk terminal with WebGL-accelerated interactive surface plots, real-time stress testing, and automated margin threshold alerts.',
    designHighlights: [
      'Dense institutional layout designed for dual 4K trading desk monitors',
      'Interactive 3D volatility surface visualizations powered by WebGL and Three.js',
      'Customizable modular workspace with persistent docking state and hotkey triggers',
      'Microsecond timestamp indicators with visual color gradients signaling data freshness'
    ],
    techStack: ['Rust', 'TypeScript', 'React', 'Apache Kafka', 'ClickHouse', 'PostgreSQL', 'Redis', 'Docker'],
    developmentHighlights: [
      'ClickHouse columnar data warehouse query optimizations executing aggregate queries across 1.8B rows in 64ms',
      'Zero-allocation serialization layer processing binary market feeds without garbage collection pauses',
      'Distributed lock-free calculation workers deployed across AWS multi-region clusters',
      'Rigorous financial auditing pipeline proving mathematical parity with legacy risk models'
    ],
    metrics: [
      { value: '99.4%', label: 'Risk Calculation Speedup', impact: 'Recalculation shifted from 6 hours to 4.8 milliseconds' },
      { value: '140k/s', label: 'Streaming Event Ingestion', impact: 'Sustained throughput during volatile market sessions' },
      { value: '$18M+', label: 'Mitigated Drawdown Risk', impact: 'Identified counterparty vulnerability during early trial' }
    ],
    testimonial: {
      quote: 'KRAFT transformed our entire risk posture. Going from overnight reports to sub-second streaming stress tests completely changed how our portfolio managers allocate capital.',
      author: 'Marcus Vance',
      role: 'Head of Quantitative Technology',
      company: 'Aurora Capital',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'nexus-logistics',
    slug: 'nexus-autonomous-freight-dispatch',
    title: 'Nexus Freight: Multi-Modal Autonomous Dispatch & Route Optimization Engine',
    client: 'Nexus Supply Chain Global',
    clientIndustry: 'Logistics',
    clientRegion: 'Singapore / US',
    year: '2024',
    category: 'Automation',
    shortDescription: 'Designed an AI dynamic dispatching system orchestrating 12,000+ daily freight movements with predictive weather re-routing and fuel cost minimization.',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80',
    featured: true,
    challenge: 'Freight dispatchers were manually assigning carrier loads using spreadsheets and phone calls, suffering a 18% empty-mile penalty and frequent SLA breach penalties.',
    approach: 'Formulated a mixed-integer linear programming (MILP) model enriched with real-time telematics and historical carrier reliability scores to automate 85% of load assignments.',
    solution: 'Built an end-to-end dispatch command platform with driver mobile telemetry app, dynamic spot-rate pricing prediction, and automated border customs document generation.',
    designHighlights: [
      'Interactive dynamic fleet map with clustered geospatial heatmaps and path trajectories',
      'Split-screen carrier negotiation drawer with instant profit margin impact calculator',
      'Mobile driver app with high-visibility sunlight mode and offline delivery receipt capture',
      'Automated exception alert queue with prioritized urgency scoring'
    ],
    techStack: ['Python', 'Go', 'React Native', 'PostgreSQL', 'PostGIS', 'OR-Tools', 'Redis', 'Google Cloud Platform'],
    developmentHighlights: [
      'Spatial indexing with PostGIS and Redis GEO allowing sub-10ms nearest-carrier matching',
      'Driver offline queuing handling intermittent satellite dead zones across rural transit corridors',
      'Automated OCR ingestion parsing shipping manifests and bills of lading in 1.4 seconds',
      'Integration with 14 major telematics and ELD APIs for continuous GPS tracking'
    ],
    metrics: [
      { value: '23%', label: 'Fuel & Empty Miles Saved', impact: 'Over 1.4 million miles diverted from unnecessary empty transit' },
      { value: '3.8x', label: 'Dispatcher Productivity', impact: 'Loads managed per dispatcher increased from 24 to 91 per day' },
      { value: '99.1%', label: 'On-Time Delivery SLA', impact: 'Up from 87.4% baseline prior to implementation' }
    ],
    testimonial: {
      quote: 'KRAFT did not just build software; they modernized our operational core. Our dispatch team now manages four times the freight volume with significantly less stress.',
      author: 'David Tan',
      role: 'VP of Global Logistics Operations',
      company: 'Nexus Supply Chain',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'veridian-commerce',
    slug: 'veridian-luxury-headless-commerce',
    title: 'Veridian: High-Performance Headless E-Commerce with AI Personalization',
    client: 'Veridian Luxury Brands',
    clientIndustry: 'E-commerce',
    clientRegion: 'Milan / New York',
    year: '2025',
    category: 'E-commerce',
    shortDescription: 'Crafted a global headless commerce storefront serving 4.5M monthly shoppers with 0.4s page loads, 3D product visualizer, and AI style recommendations.',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    challenge: 'A legacy monolithic e-commerce platform caused 4-second page load times on mobile, crippling conversion rates during high-traffic product drops and celebrity campaigns.',
    approach: 'Decoupled frontend presentation from backend inventory using Next.js on edge networks, integrating Stripe global checkout and dynamic vector-based style matching.',
    solution: 'Engineered an ultra-fast headless storefront featuring interactive 3D cloth simulations, instantaneous client-side search, and localized currency pricing for 42 countries.',
    designHighlights: [
      'Minimalist editorial typography inspired by high-fashion print magazines',
      'Interactive 3D model viewer with micro-zoom fabric texture fidelity',
      'Frictionless slide-out cart with intelligent cross-sell suggestions',
      'Adaptive dark and light modes styled specifically per seasonal lookbook'
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Shopify Plus API', 'Stripe', 'Three.js', 'Vercel Edge'],
    developmentHighlights: [
      'Edge SSR and incremental static regeneration (ISR) keeping 99% of page visits cached at local edge nodes',
      'Sub-200ms instantaneous search powered by client-side WebAssembly indexing',
      'Zero-downtime checkout failover handling 18,000 checkout attempts/minute during holiday drops',
      'Custom headless CMS schema enabling editorial teams to publish rich landing pages in minutes'
    ],
    metrics: [
      { value: '0.4s', label: 'Average Page Load Time', impact: '88% faster than the legacy platform' },
      { value: '+48%', label: 'Mobile Conversion Rate', impact: 'Generated $14.2M in incremental net new revenue' },
      { value: '100%', label: 'Uptime During Flash Drops', impact: 'Zero downtime during 25x traffic spikes' }
    ],
    testimonial: {
      quote: 'KRAFT delivered our dream storefront. It feels like an art gallery and operates like a Formula 1 car. Our conversion rates have reached all-time records.',
      author: 'Sophia Rossi',
      role: 'Chief Digital Officer',
      company: 'Veridian Luxury',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'kortex-enterprise',
    slug: 'kortex-rag-knowledge-network',
    title: 'Kortex: Enterprise Generative RAG & Collaborative Research Workspace',
    client: 'Kortex Global Advisory',
    clientIndustry: 'SaaS',
    clientRegion: 'San Francisco, CA',
    year: '2024',
    category: 'AI',
    shortDescription: 'Built an enterprise knowledge synthesis platform parsing 8M+ confidential research reports with verifiable citations, hallucination shields, and granular permissions.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    challenge: 'Global management consultants were losing 14 hours weekly per person manually searching thousands of proprietary market studies and internal client decks.',
    approach: 'Designed a hybrid vector & graph retrieval pipeline capable of contextualizing financial disclosures, legal filings, and proprietary research with strict role-based document access.',
    solution: 'Shipped a web intelligence suite providing instant synthesized answers with inline superscript citations, document heatmaps, and automated executive summary generation.',
    designHighlights: [
      'Inline source attribution pins linking directly to source PDF page coordinates',
      'Graph-based topic explorer displaying interconnected concept clusters',
      'Split-screen reading view with contextual entity highlighting',
      'Export to formatted PowerPoint and Word documents with preserved styling'
    ],
    techStack: ['Python', 'FastAPI', 'Qdrant', 'LangChain', 'React', 'TypeScript', 'Tailwind CSS', 'Docker'],
    developmentHighlights: [
      'Document parsing pipeline handling complex financial tables and scanned PDF charts',
      'Sub-second hybrid search combining dense embeddings with BM25 lexical reranking',
      'Automated guardrails preventing prompt injection and exfiltration of confidential client secrets',
      'Role-based vector partitioning enforcing document level ACLs across 12,000 corporate users'
    ],
    metrics: [
      { value: '14 hrs', label: 'Weekly Hours Saved Per Consultant', impact: 'Directly returned to strategic client engagements' },
      { value: '<0.2%', label: 'Hallucination Rate', impact: 'Audited across 50,000 test query benchmarks' },
      { value: '8.4M', label: 'Documents Indexed', impact: 'Searchable with sub-400ms query response' }
    ],
    testimonial: {
      quote: 'Kortex has fundamentally changed how our analysts prepare for client presentations. The citation accuracy and speed are unlike anything on the commercial market.',
      author: 'Julian Thorne',
      role: 'Managing Partner',
      company: 'Kortex Advisory',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    }
  },
  {
    id: 'lumina-mobile',
    slug: 'lumina-smart-field-workforce',
    title: 'Lumina: Offline-First Field Service & Asset Inspection Platform',
    client: 'Lumina Energy Infrastructure',
    clientIndustry: 'Manufacturing',
    clientRegion: 'Texas / Alberta',
    year: '2024',
    category: 'Mobile',
    shortDescription: 'Engineered an offline-first iOS/Android application for 1,800 wind turbine & solar field technicians with thermal camera integration and automated defect detection.',
    heroImage: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=80',
    featured: false,
    challenge: 'Technicians working on remote renewable energy installations lost hours of work when mobile connections dropped and paper inspection checklists caused weeks of compliance reporting lag.',
    approach: 'Built a local-first SQLite sync engine paired with on-device computer vision models capable of identifying surface micro-fractures without an active internet connection.',
    solution: 'Delivered ruggedized mobile apps for iPad and Android tablets with voice dictation, FLIR thermal camera pairing, and automatic conflict resolution upon returning to base station Wi-Fi.',
    designHighlights: [
      'High-contrast outdoor mode with glove-friendly touch targets exceeding 54px',
      'Audio waveform feedback indicating successful hands-free voice note capture',
      'Visual asset hierarchy breadcrumb with intuitive pinch-to-zoom 3D turbine diagrams',
      'Sync status pill showing pending uploads and bandwidth optimization state'
    ],
    techStack: ['React Native', 'TypeScript', 'WatermelonDB', 'SQLite', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    developmentHighlights: [
      'CRDT-based data synchronization engine handling multi-user asset edit conflicts gracefully',
      'On-device CoreML / TensorFlow Lite vision model operating at 30fps for live defect overlay',
      'Hardware integration via Bluetooth Low Energy (BLE) with industrial sensors and thermal cameras',
      'Ultra-efficient image compression delivering 10x smaller payload uploads over patchy 3G networks'
    ],
    metrics: [
      { value: '100%', label: 'Offline Reliability', impact: 'Zero data loss across 180,000 field inspections' },
      { value: '68%', label: 'Faster Inspection Time', impact: 'Reduced from 4.5 hours to 1.4 hours per turbine' },
      { value: '$4.1M', label: 'Annual Equipment Downtime Avoided', impact: 'Early detection of micro-fractures' }
    ],
    testimonial: {
      quote: 'Our technicians in the field love the app. It works flawlessly 300 feet in the air inside a turbine nacelle with zero cell reception. KRAFT hit every single mark.',
      author: 'Sarah Jenkins',
      role: 'Director of Asset Reliability',
      company: 'Lumina Energy',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
  }
];
