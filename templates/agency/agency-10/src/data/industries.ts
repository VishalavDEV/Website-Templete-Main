import { IndustryItem } from '../types';

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    tagline: 'HIPAA-compliant clinical AI, patient telemetry, and diagnostic imaging pipelines.',
    description: 'We build secure, regulatory-compliant medical software and intelligent clinical assistants that empower physicians, improve patient triage, and safeguard sensitive health information.',
    challenges: [
      'Strict HIPAA, HITECH, and FDA medical device software regulation compliance.',
      'Physician cognitive overload and documentation burdens leading to clinical burnout.',
      'Fragmented EHR data silos hindering longitudinal patient health insights.'
    ],
    digitalOpportunities: [
      'Multimodal diagnostic imaging assistance reducing radiology turnaround times.',
      'Automated ambient clinical voice transcription drafting physician SOAP notes in real time.',
      'Predictive patient readmission risk scoring for early preventive intervention.'
    ],
    solutions: [
      'FDA-aligned machine learning diagnostic support systems with model explainability.',
      'FHIR and HL7 interoperability adapters syncing with Epic, Cerner, and Meditech.',
      'Secure telehealth platforms with encrypted WebRTC video and biometric data streaming.'
    ],
    technologies: ['PyTorch', 'DICOM Protocol', 'FHIR API', 'AWS HealthLake', 'React', 'Docker'],
    useCases: [
      {
        title: 'Radiology Triage Copilot',
        description: 'Prioritizes emergent CT/MRI findings for immediate specialist review.',
        expectedROI: '40%+ faster triage for critical acute care cases'
      },
      {
        title: 'Clinical Document Automation',
        description: 'Transcribes patient-doctor consultations into structured EHR records.',
        expectedROI: '2.5 hours saved per physician shift'
      }
    ],
    relatedCaseStudySlugs: ['synapse-health-ai-diagnostics']
  },
  {
    id: 'fintech',
    slug: 'fintech',
    name: 'Financial Technology & Capital Markets',
    tagline: 'Sub-millisecond risk analytics, automated compliance, and algorithmic clearing.',
    description: 'We engineer high-frequency trading analytics, real-time fraud mitigation, and secure banking applications engineered to meet strict SEC, FINRA, and BaFin audit standards.',
    challenges: [
      'High-throughput market volatility requiring sub-second risk recalculations.',
      'Sophisticated identity fraud and multi-vector synthetic identity attacks.',
      'Complex regulatory reporting frameworks requiring immutable audit trails.'
    ],
    digitalOpportunities: [
      'Real-time streaming portfolio telemetry replacing overnight batch jobs.',
      'Graph-neural network anti-money laundering (AML) tracking suspicious transactional networks.',
      'Automated KYC onboarding with biometric liveness verification in under 30 seconds.'
    ],
    solutions: [
      'Event-driven risk engines processing 100,000+ financial market ticks/sec.',
      'Payment orchestration gateways supporting multi-currency global settlement.',
      'Automated regulatory filing pipelines generating compliant XBRL/XML disclosures.'
    ],
    technologies: ['Rust', 'Apache Kafka', 'ClickHouse', 'PostgreSQL', 'Redis', 'Python'],
    useCases: [
      {
        title: 'Streaming Value-at-Risk Engine',
        description: 'Intraday stress testing and dynamic liquidity exposure modeling.',
        expectedROI: '95%+ faster risk calculations and capital preservation'
      },
      {
        title: 'Synthetic Identity Fraud Shield',
        description: 'Deep behavioral pattern analysis across new account opening funnels.',
        expectedROI: '72% drop in fraudulent chargeback losses'
      }
    ],
    relatedCaseStudySlugs: ['aurora-capital-risk-engine']
  },
  {
    id: 'logistics',
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    tagline: 'Autonomous fleet routing, real-time telematics, and warehouse orchestration.',
    description: 'We develop intelligent supply chain management platforms that optimize global routing, predict equipment maintenance, and minimize empty transit miles across maritime, rail, and trucking.',
    challenges: [
      'Skyrocketing fuel prices and carbon tax penalties on unoptimized empty miles.',
      'Fragile supply chains susceptible to weather bottlenecks and border port congestion.',
      'Fragmented communication between shippers, third-party carriers, and dispatchers.'
    ],
    digitalOpportunities: [
      'Dynamic dispatch algorithms utilizing real-time traffic and weather APIs.',
      'Computer vision package scanning accelerating cross-dock sorting throughput.',
      'Automated electronic Bill of Lading (eBOL) processing eliminating customs paperwork delays.'
    ],
    solutions: [
      'Mixed-integer linear programming (MILP) fleet scheduling engines.',
      'Driver mobile applications with offline GPS telemetry and digital POD capture.',
      'End-to-end supply chain visibility control towers with predictive ETA forecasting.'
    ],
    technologies: ['Python', 'PostGIS', 'OR-Tools', 'React Native', 'Go', 'GCP'],
    useCases: [
      {
        title: 'Dynamic Multi-Stop Route Optimization',
        description: 'Autonomous re-routing adapting to traffic disruptions in real time.',
        expectedROI: '18-25% reduction in total fuel expenditures'
      },
      {
        title: 'Automated Carrier Freight Matching',
        description: 'Matches backhaul spot freight to empty carrier capacity instantly.',
        expectedROI: '3x boost in dispatcher capacity and profit margins'
      }
    ],
    relatedCaseStudySlugs: ['nexus-autonomous-freight-dispatch']
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    name: 'Modern E-Commerce & Retail',
    tagline: 'Sub-second headless storefronts, AI product recommendation, and checkout optimization.',
    description: 'We create headless commerce solutions and omnichannel platforms that turn browsing visitors into loyal brand advocates through blistering speed and AI-driven personalization.',
    challenges: [
      'Sluggish mobile page loads driving high bounce rates and abandoned checkouts.',
      'Legacy monolith e-commerce systems unable to scale during flash drop traffic spikes.',
      'Generic product catalogs failing to personalize discovery for unique shopper tastes.'
    ],
    digitalOpportunities: [
      'Edge-rendered headless storefronts achieving near-instantaneous page transitions.',
      'Interactive 3D product visualizers and augmented reality virtual try-on.',
      'Vector-powered semantic visual search matching inspiration images to inventory.'
    ],
    solutions: [
      'Composable commerce architectures powered by Next.js, Shopify Plus, and Medusa.',
      'Omnichannel inventory synchronization across POS, physical warehouses, and online channels.',
      'AI recommendation engines delivering hyper-relevant cross-sell and upsell bundles.'
    ],
    technologies: ['Next.js', 'React', 'Shopify Plus API', 'Stripe', 'Three.js', 'Tailwind CSS'],
    useCases: [
      {
        title: 'Ultra-Fast Headless Storefront',
        description: 'Edge-distributed catalog rendering with sub-0.5s page loads.',
        expectedROI: '30-50% lift in mobile conversion rate'
      },
      {
        title: 'AI Visual Style Recommendations',
        description: 'Recommends complementary wardrobe items based on visual affinity.',
        expectedROI: '22% increase in average order value (AOV)'
      }
    ],
    relatedCaseStudySlugs: ['veridian-luxury-headless-commerce']
  },
  {
    id: 'saas',
    slug: 'saas',
    name: 'SaaS & Cloud Platforms',
    tagline: 'Multi-tenant architectures, scalable billing systems, and self-serve onboarding.',
    description: 'We partner with high-growth SaaS founders and venture-backed scale-ups to engineer reliable multi-tenant web platforms, usage-based billing infrastructure, and delightful product-led growth loops.',
    challenges: [
      'Scaling database architectures across thousands of concurrent enterprise tenants.',
      'Engineering flexible billing models (hybrid seats, usage tiers, enterprise quotas).',
      'High onboarding drop-off due to confusing initial product setup flows.'
    ],
    digitalOpportunities: [
      'Self-service workspace provisioning with automated domain routing and SSO.',
      'Embedded AI copilots that guide users through complex product configurations.',
      'Real-time collaborative workspaces with multiplayer cursor and document synchronization.'
    ],
    solutions: [
      'Multi-tenant PostgreSQL architectures with row-level security and automated tenant isolation.',
      'Stripe & Lago billing engine integrations supporting complex metered consumption.',
      'Fine-grained Role-Based Access Control (RBAC) and enterprise SAML/SSO federation.'
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API'],
    useCases: [
      {
        title: 'Multi-Tenant Enterprise Core',
        description: 'Isolated data partitioning and automated tenant lifecycle provisioning.',
        expectedROI: 'Enterprise readiness enabling 6-figure ACV deals'
      },
      {
        title: 'Usage-Based Metering Gateway',
        description: 'High-throughput event logging for consumption-based billing models.',
        expectedROI: 'Zero billing leakage and automated invoice reconciliation'
      }
    ],
    relatedCaseStudySlugs: ['kortex-rag-knowledge-network']
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Advanced Manufacturing & Industrial IoT',
    tagline: 'Edge computer vision, predictive maintenance, and digital twin monitoring.',
    description: 'We bridge physical factory floors with digital intelligence, building industrial IoT platforms, automated visual inspection stations, and predictive equipment telemetry.',
    challenges: [
      'Unscheduled equipment downtime costing millions in lost assembly line throughput.',
      'Subjective manual quality assurance missing microscopic production flaws.',
      'Fragmented operational technology (OT) protocols incompatible with cloud analytics.'
    ],
    digitalOpportunities: [
      'High-speed edge camera inference detecting flaws in less than 20 milliseconds.',
      'Vibration and acoustic sensor telemetry forecasting bearing failure weeks in advance.',
      'Interactive 3D digital twins giving plant supervisors bird’s-eye operational status.'
    ],
    solutions: [
      'Hardened edge industrial PC appliances running local inference with zero cloud dependency.',
      'OPC-UA and MQTT protocol converters bridging legacy PLCs to central cloud data lakes.',
      'Ruggedized mobile inspection tablets with voice annotations and offline sync.'
    ],
    technologies: ['C++', 'Python', 'OpenCV', 'MQTT', 'TensorRT', 'React Native'],
    useCases: [
      {
        title: 'Inline Optical Flaw Detection',
        description: 'Microsecond defect detection on fast-moving conveyor lines.',
        expectedROI: '90% reduction in customer warranty defect returns'
      },
      {
        title: 'Condition-Based Predictive Maintenance',
        description: 'Continuous motor and pump telemetry detecting anomaly drift.',
        expectedROI: '45% reduction in catastrophic unscheduled downtime'
      }
    ],
    relatedCaseStudySlugs: ['lumina-smart-field-workforce']
  },
  {
    id: 'edtech',
    slug: 'edtech',
    name: 'Education & Knowledge Platforms',
    tagline: 'Adaptive learning algorithms, interactive curricula, and institutional portals.',
    description: 'We develop adaptive learning management systems and intelligent tutoring platforms that tailor educational pacing to individual student mastery while streamlining educator workflows.',
    challenges: [
      'One-size-fits-all curricula failing to engage students with diverse learning speeds.',
      'High educator grading burdens taking time away from active student mentorship.',
      'Scalability challenges during exam periods and synchronized virtual classrooms.'
    ],
    digitalOpportunities: [
      'AI-powered adaptive problem sets adjusting difficulty based on response latency.',
      'Automated semantic rubric grading providing instant constructive feedback on essays.',
      'Interactive gamified simulations reinforcing complex scientific and math concepts.'
    ],
    solutions: [
      'SCORM and LTI-compliant learning management engines connecting with Canvas and Blackboard.',
      'WebRTC low-latency virtual breakout rooms with interactive collaborative whiteboards.',
      'Institutional dean dashboards tracking student engagement and early retention flags.'
    ],
    technologies: ['React', 'Next.js', 'Python', 'WebRTC', 'PostgreSQL', 'Tailwind CSS'],
    useCases: [
      {
        title: 'Adaptive Mastery Assessment',
        description: 'Bayesian knowledge tracing modeling student conceptual grasp.',
        expectedROI: '32% improvement in standardized course completion rates'
      },
      {
        title: 'Intelligent Assignment Assistant',
        description: 'Guides students through problem breakdown without giving answers away.',
        expectedROI: '2.8x increase in independent student problem resolution'
      }
    ],
    relatedCaseStudySlugs: ['kortex-rag-knowledge-network']
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate & PropTech',
    tagline: 'Algorithmic property valuation, automated leasing pipelines, and 3D spatial tours.',
    description: 'We engineer commercial and residential PropTech platforms, combining GIS mapping, automated lease extraction, and predictive investment modeling for real estate enterprises.',
    challenges: [
      'Tedious manual lease abstraction across hundreds of complex legal documents.',
      'Fragmented MLS data feeds with inconsistent taxonomy and delayed listing updates.',
      'Static 2D photos failing to convey true spatial layout and natural lighting.'
    ],
    digitalOpportunities: [
      'Multimodal document extraction pulling rent rolls, escalation clauses, and covenants.',
      'Interactive spatial 3D digital twins and sun-position architectural simulations.',
      'Predictive neighborhood valuation models incorporating transit, permits, and foot-traffic.'
    ],
    solutions: [
      'Automated lease abstraction pipelines feeding ERPs with verified audit citations.',
      'GIS property search portals with custom radius zoning and demographic overlays.',
      'Digital tenant portals managing maintenance requests, rent payments, and access keys.'
    ],
    technologies: ['React', 'PostGIS', 'Three.js', 'Python', 'FastAPI', 'Stripe'],
    useCases: [
      {
        title: 'Commercial Lease Abstraction Suite',
        description: 'Extracts financial terms and obligations from 200+ page commercial leases.',
        expectedROI: '85% faster due diligence on portfolio acquisitions'
      },
      {
        title: 'Interactive Spatial Property Visualizer',
        description: '3D floorplan explorer with realistic material textures and sunlight simulation.',
        expectedROI: '40% increase in qualified pre-leasing commitments'
      }
    ],
    relatedCaseStudySlugs: ['veridian-luxury-headless-commerce']
  }
];
