export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription?: string;
  heroImage: string;
  marketStats: {
    stat: string;
    label: string;
    context?: string;
    detail?: string;
  }[];
  criticalChallenges: {
    title: string;
    description: string;
  }[];
  engineeredSolutions: {
    title: string;
    description: string;
    technologyHighlights: string[];
  }[];
  featuredCaseStudySlug: string;
  relatedCaseStudySlugs?: string[];
  clientQuote: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const industriesData: IndustryItem[] = [
  {
    id: "ind-01",
    slug: "financial-services",
    name: "Financial Services",
    tagline: "High-frequency intelligence, sub-millisecond execution, and regulatory-grade security.",
    shortDescription: "Architecting autonomous risk engines, core banking modernizations, and algorithmic compliance pipelines for global investment banks, asset managers, and fintech institutions.",
    heroImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&q=80",
    marketStats: [
      {
        stat: "$180B+",
        label: "Daily Transaction Volume",
        detail: "Secured and processed through Vertexa-engineered financial pipelines.",
        context: "Daily Transaction Volume"
      },
      {
        stat: "42%",
        label: "Faster Risk Assessment",
        detail: "Reduction in institutional credit evaluation latency.",
        context: "Faster Risk Assessment"
      },
      {
        stat: "99.999%",
        label: "Core Ledger Availability",
        detail: "Uptime across multi-region active banking clusters.",
        context: "Ledger Availability"
      }
    ],
    criticalChallenges: [
      {
        title: "Legacy Core Banking Inertia",
        description: "Decades-old COBOL mainframes and batch-processing architectures that restrict real-time customer intelligence and API interoperability."
      },
      {
        title: "Complex Regulatory Mandates",
        description: "Constantly shifting international frameworks (Basel IV, Dodd-Frank, DORA) requiring instant auditability and zero data loss."
      },
      {
        title: "High-Volume Real-Time Fraud Vectors",
        description: "Sophisticated synthetic identity fraud and automated transaction manipulation outpacing rule-based detection systems."
      }
    ],
    engineeredSolutions: [
      {
        title: "Autonomous Risk & Portfolio Intelligence",
        description: "Real-time Monte Carlo simulations and multi-agent market risk analyzers powered by distributed GPU clusters.",
        technologyHighlights: ["CUDA", "Apache Flink", "Python/Rust", "Time-Series Databases"]
      },
      {
        title: "Event-Driven Core Banking Migration",
        description: "Zero-downtime decomposition of legacy ledger monoliths into event-sourced microservices.",
        technologyHighlights: ["Apache Kafka", "Go", "PostgreSQL", "HashiCorp Vault"]
      },
      {
        title: "Adaptive Fraud & Anomaly Defense",
        description: "Sub-15ms inference engines screening millions of real-time payment vectors with zero false-positive disruption.",
        technologyHighlights: ["Graph Neural Networks", "Neo4j", "vLLM", "Redis Enterprise"]
      }
    ],
    featuredCaseStudySlug: "ai-risk-intelligence-platform",
    clientQuote: {
      quote: "Vertexa rebuilt our risk modeling architecture from the substrate up. What previously took our quantitative analysts four days of batch compute now completes in under nine minutes.",
      author: "Julian Thorne",
      role: "Global Head of Quantitative Risk",
      company: "Apex Global Capital"
    }
  },
  {
    id: "ind-02",
    slug: "healthcare",
    name: "Healthcare",
    tagline: "Clinical interoperability, HIPAA-grade data lakes, and diagnostic intelligence.",
    shortDescription: "Engineering connected digital health ecosystems, multimodal clinical AI assistants, and FHIR-compliant interoperability engines for health systems and life sciences leaders.",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
    marketStats: [
      {
        stat: "2.4M+",
        label: "Patient Records Processed",
        detail: "Standardized across heterogeneous EHR systems with zero data discrepancies.",
        context: "Patient Records"
      },
      {
        stat: "68%",
        label: "Faster Diagnostic Triage",
        detail: "Improvement in clinical decision support response times.",
        context: "Diagnostic Triage"
      },
      {
        stat: "100%",
        label: "HIPAA & HITECH Compliance",
        detail: "Cryptographic field-level encryption with comprehensive audit trails.",
        context: "Compliance Standard"
      }
    ],
    criticalChallenges: [
      {
        title: "Fragmented Clinical Silos",
        description: "Disparate EHR systems (Epic, Cerner, legacy databases) preventing a longitudinal view of patient health journeys."
      },
      {
        title: "Physician Administrative Burnout",
        description: "Clinicians spending over 40% of their working hours manually typing EHR notes rather than providing direct patient care."
      },
      {
        title: "Strict Health Data Governance",
        description: "Severe regulatory penalties and ethical considerations demanding air-gapped clinical intelligence and verifiable data lineage."
      }
    ],
    engineeredSolutions: [
      {
        title: "HL7 & FHIR-Compliant Unified Health Lake",
        description: "Petabyte-scale health lakehouse integrating clinical records, imaging DICOMs, and genomic sequencing data.",
        technologyHighlights: ["Databricks", "Delta Lake", "FHIR Server", "Apache Iceberg"]
      },
      {
        title: "Ambient Clinical AI & Note Generation",
        description: "Fine-tuned medical language models that synthesize patient consultations into structured EHR encounters.",
        technologyHighlights: ["PyTorch", "vLLM", "Whisper", "Langfuse"]
      },
      {
        title: "Predictive ICU Bed & Capacity Management",
        description: "Real-time patient deterioration models forecasting hospital readmissions and optimizing critical care beds.",
        technologyHighlights: ["XGBoost", "FastAPI", "React", "Kafka"]
      }
    ],
    featuredCaseStudySlug: "healthcare-intelligence-system",
    clientQuote: {
      quote: "The unified data architecture engineered by Vertexa gave our physicians instant, comprehensive patient context for the first time in our hospital network's history.",
      author: "Dr. Evelyn Vance",
      role: "Chief Medical Information Officer",
      company: "Centennial Health Network"
    }
  },
  {
    id: "ind-03",
    slug: "manufacturing",
    name: "Manufacturing",
    tagline: "Industrial IoT, digital twins, and autonomous shop-floor predictive maintenance.",
    shortDescription: "Transforming traditional industrial operations into cognitive manufacturing plants with real-time SCADA telemetry, edge machine vision, and dynamic supply chain synchronization.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    marketStats: [
      {
        stat: "31%",
        label: "Reduction in Delays",
        detail: "Fewer unscheduled plant maintenance events across automated facilities.",
        context: "Delay Reduction"
      },
      {
        stat: "$48M",
        label: "Annual Scrap Savings",
        detail: "Eliminated raw material waste through computer vision defect detection.",
        context: "Material Savings"
      },
      {
        stat: "140+",
        label: "Connected Facilities",
        detail: "Global plants streaming real-time sensor telemetry to centralized twin.",
        context: "Connected Plants"
      }
    ],
    criticalChallenges: [
      {
        title: "Unscheduled Machine Downtime",
        description: "Catastrophic mechanical failures on critical production lines resulting in millions of dollars per hour in lost output."
      },
      {
        title: "Air-Gapped Operational Technology (OT) Silos",
        description: "Legacy PLC and SCADA protocols operating isolated from enterprise IT and cloud analytics layers."
      },
      {
        title: "Quality Inspection Inconsistencies",
        description: "Manual visual inspection bottlenecks failing to detect micro-defects at modern high assembly speeds."
      }
    ],
    engineeredSolutions: [
      {
        title: "Edge Computer Vision Quality Control",
        description: "High-fps camera inferencing on NVIDIA Jetson edge clusters catching micro-fractures in sub-5ms windows.",
        technologyHighlights: ["TensorRT", "YOLOv10", "OpenCV", "MQTT"]
      },
      {
        title: "Holistic Plant Digital Twin Platform",
        description: "3D visual physics simulations mapping real-time operational thermal and vibrational sensor feeds.",
        technologyHighlights: ["Three.js", "WebAssembly", "Kafka", "TimescaleDB"]
      },
      {
        title: "Predictive Equipment Life Modeling",
        description: "Continuous vibration and acoustic frequency telemetry algorithms predicting component wear weeks in advance.",
        technologyHighlights: ["PyTorch", "Kubernetes Edge", "Grafana", "Go"]
      }
    ],
    featuredCaseStudySlug: "global-supply-chain-platform",
    clientQuote: {
      quote: "Vertexa bridged our 30-year-old factory machinery with modern edge AI. We eliminated unplanned line outages and boosted overall equipment effectiveness by 24%.",
      author: "Henrik Lindqvist",
      role: "VP of Global Manufacturing Operations",
      company: "Nordic Industrial Group"
    }
  },
  {
    id: "ind-04",
    slug: "retail",
    name: "Retail",
    tagline: "Omnichannel inventory orchestration and hyper-personalized commerce engines.",
    shortDescription: "Building headless commerce architectures, dynamic pricing algorithms, and unified inventory systems that scale seamlessly during global peak retail events.",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    marketStats: [
      {
        stat: "340M+",
        label: "Annual Consumer Orders",
        detail: "Processed with sub-100ms checkout latency and zero basket loss.",
        context: "Annual Orders"
      },
      {
        stat: "+22%",
        label: "Conversion Uplift",
        detail: "Through real-time contextual recommendation engines.",
        context: "Conversion Growth"
      },
      {
        stat: "100%",
        label: "Store-to-Online Sync",
        detail: "Real-time inventory visibility across 1,800+ physical brick-and-mortar stores.",
        context: "Inventory Accuracy"
      }
    ],
    criticalChallenges: [
      {
        title: "Omnichannel Inventory Blindspots",
        description: "Disconnection between store shelves, regional fulfillment centers, and digital shopping carts leading to out-of-stock cancellations."
      },
      {
        title: "Traffic Spikes & Monolithic Collapse",
        description: "Traditional e-commerce platforms buckling under flash sales, Black Friday traffic, and global media campaigns."
      },
      {
        title: "Generic Product Discovery",
        description: "Static search filters failing to surface relevant products based on individual behavioral intent and local trends."
      }
    ],
    engineeredSolutions: [
      {
        title: "Composable Headless Commerce Core",
        description: "Microservices-based checkout, cart, and promotion engines delivering instantaneous multi-region web and mobile experiences.",
        technologyHighlights: ["React 19", "Next.js", "GraphQL", "AWS Lambda", "Redis"]
      },
      {
        title: "Real-Time Distributed Stock Engine",
        description: "Event-driven inventory ledger reconciling store purchases, online reservations, and supplier manifests in sub-second timeframes.",
        technologyHighlights: ["Apache Kafka", "PostgreSQL", "Go", "Kubernetes"]
      },
      {
        title: "Contextual Semantic Discovery AI",
        description: "Vector-driven visual search and conversational shopping assistants that double search-to-basket conversion.",
        technologyHighlights: ["Qdrant", "OpenAI/vLLM", "Python", "Elasticsearch"]
      }
    ],
    featuredCaseStudySlug: "next-gen-omnichannel-core-banking",
    clientQuote: {
      quote: "During our highest-volume shopping weekend on record, Vertexa's composable commerce architecture handled 14x normal volume without a single dropped cart.",
      author: "Claire Moreau",
      role: "Chief Digital Officer",
      company: "Aura Luxury Brands"
    }
  },
  {
    id: "ind-05",
    slug: "logistics",
    name: "Logistics",
    tagline: "Autonomous routing, multi-modal freight tracking, and warehouse automation.",
    shortDescription: "Developing resilient global freight networks, dynamic route optimization engines, and computer vision-guided warehouse fulfillment systems.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    marketStats: [
      {
        stat: "12M+",
        label: "Daily Shipments Routed",
        detail: "Algorithmic optimization saving over 4.8M driving miles each week.",
        context: "Daily Shipments"
      },
      {
        stat: "-28%",
        label: "Fuel & Dispatch Costs",
        detail: "Dynamic multi-stop dispatching factoring live traffic, weather, and weight.",
        context: "Cost Reduction"
      },
      {
        stat: "99.4%",
        label: "On-Time Delivery SLA",
        detail: "Predictive ETA recalculations across international ocean and air freight.",
        context: "On-Time Arrival"
      }
    ],
    criticalChallenges: [
      {
        title: "Global Supply Disruption Volatility",
        description: "Port congestions, geopolitical route closures, and weather anomalies causing cascading delivery failures."
      },
      {
        title: "Manual Dispatch & Inefficient Routing",
        description: "Static legacy scheduling leaving trucks partially loaded and driving empty backhaul miles."
      },
      {
        title: "Cross-Border Documentation Bottlenecks",
        description: "Paper bills of lading and fragmented customs filings stalling cargo at border checkpoints."
      }
    ],
    engineeredSolutions: [
      {
        title: "Dynamic Multi-Modal Routing Algorithm",
        description: "Genetic algorithms and combinatorial solvers computing optimal multi-leg freight schedules in milliseconds.",
        technologyHighlights: ["Rust", "Python", "OR-Tools", "PostGIS"]
      },
      {
        title: "Automated Customs Document Extraction",
        description: "Vision-language agents extracting, validating, and filing international shipping documentation autonomously.",
        technologyHighlights: ["vLLM", "Tesseract", "FastAPI", "AWS Textract"]
      },
      {
        title: "Telematics & Asset Health Tracking",
        description: "IoT sensor streams monitoring cargo temperature, humidity, and fleet diagnostic metrics across transit.",
        technologyHighlights: ["MQTT", "Apache Flink", "TimescaleDB", "React"]
      }
    ],
    featuredCaseStudySlug: "global-supply-chain-platform",
    clientQuote: {
      quote: "Vertexa transformed our logistics backbone into a self-optimizing network. We reduced operational delays by 31% within the first six months of rollout.",
      author: "Klaus Weber",
      role: "Senior Vice President of Global Freight",
      company: "TransContinental Logistics"
    }
  },
  {
    id: "ind-06",
    slug: "energy",
    name: "Energy & Utilities",
    tagline: "Smart grid orchestration, renewable forecasting, and asset risk analytics.",
    shortDescription: "Architecting high-throughput telemetry backbones for electrical grids, solar/wind generation predictive models, and carbon emission accounting systems.",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    marketStats: [
      {
        stat: "19%",
        label: "Peak Grid Load Reduction",
        detail: "Through automated demand-response and decentralized battery storage dispatch.",
        context: "Peak Load Shaving"
      },
      {
        stat: "4.8 GW",
        label: "Renewable Capacity Managed",
        detail: "Solar and wind generation continuously optimized via atmospheric forecasting models.",
        context: "Managed Capacity"
      },
      {
        stat: "100ms",
        label: "Substation Telemetry Sync",
        detail: "Real-time fault isolation preventing cascading blackout conditions.",
        context: "Telemetry Latency"
      }
    ],
    criticalChallenges: [
      {
        title: "Intermittent Renewable Generation",
        description: "Weather-dependent wind and solar inputs threatening grid voltage stability without advanced forecasting."
      },
      {
        title: "Aging Physical Grid Infrastructure",
        description: "Legacy transformers and transmission lines requiring proactive replacement before catastrophic failures ignite outages."
      },
      {
        title: "Regulatory Decarbonization Mandates",
        description: "Stringent carbon accounting standards demanding verifiable, granular energy provenance tracking."
      }
    ],
    engineeredSolutions: [
      {
        title: "Autonomous Smart Grid Orchestration",
        description: "Distributed edge controllers balancing distributed energy resources (DERs) with utility generation.",
        technologyHighlights: ["C++", "Rust", "Kafka", "TimescaleDB"]
      },
      {
        title: "Solar & Wind Atmospheric Prediction Engine",
        description: "Deep learning models synthesizing satellite weather imagery to predict renewable generation 72 hours in advance.",
        technologyHighlights: ["PyTorch", "Kubernetes", "Ray", "GeoPandas"]
      },
      {
        title: "Grid Asset Thermal Health Analytics",
        description: "FLIR sensor and acoustic sensor streaming pipelines flagging transformer degradation weeks before breakdown.",
        technologyHighlights: ["OpenCV", "TensorRT", "FastAPI", "Grafana"]
      }
    ],
    featuredCaseStudySlug: "real-time-autonomous-energy-grid-management",
    clientQuote: {
      quote: "Vertexa engineered a platform that balances our regional energy mix in real time. We cut peak carbon intensity while improving grid reliability across 3 million households.",
      author: "Mateo Rossi",
      role: "Chief Grid Architect",
      company: "Verde Grid Solutions"
    }
  },
  {
    id: "ind-07",
    slug: "government",
    name: "Government",
    tagline: "Sovereign cloud architectures, citizen service portals, and defense-grade security.",
    shortDescription: "Deploying high-assurance digital public infrastructure, secure identity verification gateways, and transparent civic analytics for federal, state, and municipal agencies.",
    heroImage: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=80",
    marketStats: [
      {
        stat: "14M+",
        label: "Citizens Served Daily",
        detail: "Accessing digital licensing, tax, and social services with zero downtime.",
        context: "Citizens Served"
      },
      {
        stat: "FedRAMP",
        label: "High Security Standard",
        detail: "Strict air-gapped cryptographic protocols protecting national data sovereignty.",
        context: "Security Baseline"
      },
      {
        stat: "-75%",
        label: "Citizen Application Wait Times",
        detail: "Automated identity verification replacing multi-week paper processing.",
        context: "Process Acceleration"
      }
    ],
    criticalChallenges: [
      {
        title: "Decades-Old Legacy Bureaucracy",
        description: "Paper forms, siloed departments, and obsolete mainframes creating painful multi-week wait times for citizen services."
      },
      {
        title: "Sovereign Security & Nation-State Threats",
        description: "Critical infrastructure under constant asymmetric cyber attacks requiring uncompromising defense postures."
      },
      {
        title: "Strict Accessibility & Inclusion Mandates",
        description: "Digital public services must function seamlessly for 100% of citizens across all devices, languages, and accessibility needs."
      }
    ],
    engineeredSolutions: [
      {
        title: "Unified Digital Citizen Service Portal",
        description: "Accessible, WCAG AAA compliant single-sign-on portal consolidating hundreds of municipal services.",
        technologyHighlights: ["React 19", "Node.js", "OIDC", "PostgreSQL"]
      },
      {
        title: "Sovereign Air-Gapped Cloud Architecture",
        description: "Zero-trust government cloud deployments with immutable audit ledgers and hardware-backed encryption.",
        technologyHighlights: ["Terraform", "Kubernetes", "HashiCorp Vault", "SPIRE"]
      },
      {
        title: "Automated Benefits Eligibility Engine",
        description: "Rule-based and deterministic verification systems processing assistance applications in seconds.",
        technologyHighlights: ["Go", "Kafka", "dbt", "OpenSearch"]
      }
    ],
    featuredCaseStudySlug: "global-aerospace-predictive-maintenance",
    clientQuote: {
      quote: "Vertexa delivered a public infrastructure transformation that modernized our entire state permitting system ahead of schedule and with zero security compromises.",
      author: "Senator Patricia Gallagher",
      role: "Chair of Public Technology Commission",
      company: "State Digital Services"
    }
  },
  {
    id: "ind-08",
    slug: "technology",
    name: "Technology",
    tagline: "Hyper-scale cloud primitives, developer platforms, and distributed systems.",
    shortDescription: "Partnering with hyper-growth SaaS enterprises, infrastructure providers, and AI startups to build resilient distributed backends, developer platforms, and billing engines.",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    marketStats: [
      {
        stat: "100M+",
        label: "API Requests / Sec",
        detail: "Supported across globally distributed edge worker topologies.",
        context: "Peak Throughput"
      },
      {
        stat: "99.999%",
        label: "Platform SLA",
        detail: "Sustained during massive viral growth and product launches.",
        context: "SLA Guarantee"
      },
      {
        stat: "4x",
        label: "Engineering Efficiency",
        detail: "Internal developer platform reducing developer onboarding from 3 weeks to 1 day.",
        context: "Developer Velocity"
      }
    ],
    criticalChallenges: [
      {
        title: "Rapid Scale Bottlenecks",
        description: "Early-stage monolithic codebases breaking down under sudden 100x user adoption and multi-tenant demands."
      },
      {
        title: "Escalating Cloud Compute Bills",
        description: "Unoptimized microservices and unmetered vector database queries consuming millions in monthly cloud burn."
      },
      {
        title: "Complex Multi-Tenant Data Isolation",
        description: "Enterprise tier clients demanding strictly isolated encryption keys, VPC peering, and custom compliance attestations."
      }
    ],
    engineeredSolutions: [
      {
        title: "Distributed Multi-Tenant SaaS Engine",
        description: "Dynamic schema-per-tenant and row-level isolated architectures with instantaneous cross-region replication.",
        technologyHighlights: ["Go", "PostgreSQL", "Kafka", "Redis"]
      },
      {
        title: "Internal Developer Platform (IDP)",
        description: "Backstage-powered self-service portal enabling engineering teams to spin up compliant environments in minutes.",
        technologyHighlights: ["Backstage", "Kubernetes", "Terraform", "ArgoCD"]
      },
      {
        title: "High-Throughput Metering & Billing Engine",
        description: "Sub-second event aggregation for consumption-based and token-based pricing models.",
        technologyHighlights: ["ClickHouse", "Apache Flink", "TypeScript", "Stripe API"]
      }
    ],
    featuredCaseStudySlug: "ai-risk-intelligence-platform",
    clientQuote: {
      quote: "Vertexa rebuilt our core distributed data layer while we were processing billions of requests a day. They are the rarest team of true systems craftsmen.",
      author: "Alexandre Dupuis",
      role: "Co-Founder & Chief Architect",
      company: "Synthetix Cloud Labs"
    }
  }
];
