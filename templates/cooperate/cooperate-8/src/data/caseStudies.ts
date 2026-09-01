export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientConfidentialName?: string;
  industry: string;
  industrySlug: string;
  capability: string;
  capabilitySlug: string;
  summaryResult: string;
  summaryMetricLabel: string;
  shortDescription: string;
  heroImage: string;
  secondaryImage?: string;
  duration: string;
  isFeatured?: boolean;
  featuredOrder?: number;
  challenge: {
    overview: string;
    keyPoints: string[];
  };
  strategy: {
    overview: string;
    principles: string[];
  };
  solution: {
    overview: string;
    architectureOverview: string;
    keyFeatures: string[];
  };
  technologyStack: string[];
  businessImpact: {
    metric: string;
    label: string;
    detail: string;
  }[];
  clientTestimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "cs-01",
    slug: "ai-risk-intelligence-platform",
    title: "AI Risk Intelligence Platform",
    client: "Tier-1 Global Investment Bank",
    industry: "Financial Services",
    industrySlug: "financial-services",
    capability: "AI & Intelligent Systems",
    capabilitySlug: "ai-intelligent-systems",
    summaryResult: "42% faster risk assessment",
    summaryMetricLabel: "Risk Modeling Latency",
    shortDescription: "Autonomous cognitive pipelines evaluating complex multi-asset portfolios across volatile market regimes in sub-second intervals.",
    heroImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    duration: "9 Months",
    isFeatured: true,
    featuredOrder: 1,
    challenge: {
      overview: "The client managed over $420B in institutional assets across 60 global exchanges. Their legacy overnight batch risk engine took up to 6 hours to compute Value-at-Risk (VaR) and counterparty credit exposures, leaving trading desks blind during intraday macroeconomic shock events.",
      keyPoints: [
        "6-hour batch computation cycles caused dangerous blind spots during high-volatility market sessions.",
        "Fragmented risk models across fixed income, equities, and derivatives created inconsistent capital allocation.",
        "Strict regulatory requirements under Basel IV demanded full deterministic auditability for all valuation outputs."
      ]
    },
    strategy: {
      overview: "Vertexa architected a streaming, distributed GPU compute fabric coupled with custom domain-fine-tuned quantitative neural networks that continuously recalculate portfolio exposures in real time.",
      principles: [
        "Transition from static end-of-day batch jobs to an event-sourced streaming calculation fabric.",
        "Decouple mathematical calculation kernels onto auto-scaling CUDA/GPU clusters.",
        "Implement a cryptographic lineage ledger for every valuation model output."
      ]
    },
    solution: {
      overview: "We engineered an end-to-end autonomous risk intelligence platform with distributed Apache Kafka messaging, Triton Inference Servers on Kubernetes, and an ultra-responsive React 19 quantitative dashboard.",
      architectureOverview: "Incoming tick data from 60+ exchanges is ingested via Apache Flink into high-performance in-memory state stores. Mathematical pricing models run on dynamic GPU pods, while semantic LLM agents monitor real-time macroeconomic news feeds to stress-test correlated shock scenarios.",
      keyFeatures: [
        "Sub-100ms real-time VaR and expected shortfall calculation across 100,000+ complex instruments.",
        "Multimodal agentic news & macro sentiment analyzer flagging geopolitical risk vectors before market pricing.",
        "Interactive scenario simulator allowing risk managers to model interest rate and liquidity shocks with instant feedback."
      ]
    },
    technologyStack: ["Python", "Rust", "CUDA", "PyTorch", "Apache Flink", "Kafka", "vLLM", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL", "HashiCorp Vault"],
    businessImpact: [
      {
        metric: "42%",
        label: "Faster Risk Modeling",
        detail: "Reduced model execution from 6 hours to sub-100 millisecond continuous streams."
      },
      {
        metric: "$140M+",
        label: "Capital Buffer Optimization",
        detail: "Sharper margin modeling allowed the bank to redeploy trapped regulatory reserves."
      },
      {
        metric: "100%",
        label: "Regulatory Audit Compliance",
        detail: "Zero audit findings across three consecutive international central bank inspections."
      }
    ],
    clientTestimonial: {
      quote: "Vertexa gave our trading floors something that was previously considered mathematically impossible: real-time, deterministic portfolio stress testing at enterprise scale. It is our single biggest competitive edge.",
      author: "Julian Thorne",
      role: "Global Head of Quantitative Risk",
      company: "Apex Global Capital"
    }
  },
  {
    id: "cs-02",
    slug: "global-supply-chain-platform",
    title: "Global Supply Chain Platform",
    client: "Fortune 100 Industrial Manufacturer",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    capability: "Cloud & Infrastructure",
    capabilitySlug: "cloud-infrastructure",
    summaryResult: "31% reduction in operational delays",
    summaryMetricLabel: "Operational Delay Reduction",
    shortDescription: "A sovereign, multi-region event-driven supply platform coordinating 140 manufacturing plants and 22,000 suppliers globally.",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    duration: "14 Months",
    isFeatured: true,
    featuredOrder: 2,
    challenge: {
      overview: "Operating across 32 countries, the client suffered from uncoordinated supplier tracking, siloed regional ERP systems, and frequent factory line stoppages caused by component shortages and customs holdups.",
      keyPoints: [
        "Lack of global visibility caused $85M in annual expedited air-freight panic spending.",
        "Legacy on-premise servers experienced repeated outages during seasonal demand surges.",
        "Supplier manifests were entered manually across thousands of incompatible formats."
      ]
    },
    strategy: {
      overview: "We designed a multi-cloud event mesh connecting every plant SCADA system, warehouse management database, and tier-1 supplier manifest into a unified real-time digital twin.",
      principles: [
        "Zero-trust API federation unifying legacy SAP, Oracle, and bespoke supplier systems.",
        "Predictive machine vision at loading docks to automate freight reconciliation.",
        "Autonomous rerouting algorithms that dynamically redistribute buffer inventories."
      ]
    },
    solution: {
      overview: "Vertexa deployed a multi-region active-active Kubernetes platform orchestrated by ArgoCD and Terraform, featuring an automated supplier collaboration portal and predictive inventory optimizer.",
      architectureOverview: "Sensor data from 140 plants and thousands of shipping containers streams over MQTT and Kafka into a Snowflake lakehouse. Machine learning models continuously predict customs delays and factory bottlenecks 14 days in advance.",
      keyFeatures: [
        "Real-time global inventory map tracking 1.8M active SKU movements with pinpoint accuracy.",
        "Automated multimodal freight rerouting avoiding congested sea lanes and rail bottlenecks.",
        "Supplier portal with automated invoice and customs document extraction reducing processing from 5 days to 2 minutes."
      ]
    },
    technologyStack: ["Kubernetes", "AWS", "Google Cloud", "Terraform", "Kafka", "Snowflake", "dbt", "Go", "React", "Tailwind CSS", "FastAPI"],
    businessImpact: [
      {
        metric: "31%",
        label: "Reduction in Delays",
        detail: "Eliminated unscheduled plant stoppages across 140 international facilities."
      },
      {
        metric: "$62M",
        label: "Annual Logistics Savings",
        detail: "Drastic drop in emergency expedited freight and inventory overstocking."
      },
      {
        metric: "99.999%",
        label: "Uptime Across 4 Continents",
        detail: "Zero platform downtime sustained throughout two major regional cloud outages."
      }
    ],
    clientTestimonial: {
      quote: "Vertexa modernized our fragmented global supply operations into an intelligent, self-healing network. The operational ROI was achieved within four months of live deployment.",
      author: "Henrik Lindqvist",
      role: "Senior Vice President of Global Supply",
      company: "Nordic Industrial Group"
    }
  },
  {
    id: "cs-03",
    slug: "healthcare-intelligence-system",
    title: "Healthcare Intelligence System",
    client: "Multi-State Health Network & Research Center",
    industry: "Healthcare",
    industrySlug: "healthcare",
    capability: "Data & Analytics",
    capabilitySlug: "data-analytics",
    summaryResult: "2.4M+ patient records processed",
    summaryMetricLabel: "Patient Records Unified",
    shortDescription: "A HIPAA-compliant clinical data lakehouse and multimodal AI assistant delivering real-time patient insights to 18,000 clinicians.",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80",
    duration: "11 Months",
    isFeatured: true,
    featuredOrder: 3,
    challenge: {
      overview: "The health system was paralyzed by disparate patient data scattered across four competing electronic health record (EHR) installations, legacy imaging archives, and research databases. Clinicians struggled to reconstruct patient histories.",
      keyPoints: [
        "Patient histories were fragmented across four incompatible EHR systems.",
        "Clinical triage doctors spent 15+ minutes per patient searching for relevant prior lab results and contraindications.",
        "Data governance rules required strict cryptographic isolation and zero unauthorized PHI exposure."
      ]
    },
    strategy: {
      overview: "Vertexa engineered a unified FHIR-native healthcare data lakehouse using Databricks Delta Lake, coupled with a clinical natural language search interface that synthesizes patient encounters in real time.",
      principles: [
        "Standardize all unstructured clinical records into structured FHIR resources automatically.",
        "Implement field-level encryption with zero-knowledge tokenization for patient privacy.",
        "Provide doctors with a sub-second contextual summary at the point of care."
      ]
    },
    solution: {
      overview: "We built an enterprise healthcare intelligence portal with instant longitudinal patient views, clinical trial matching algorithms, and predictive readmission warning indicators.",
      architectureOverview: "EHR transaction feeds are parsed through an automated FHIR translation pipeline into an air-gapped Databricks lakehouse. A fine-tuned medical language model surfaces relevant history, lab trends, and drug interactions upon physician request.",
      keyFeatures: [
        "Sub-second longitudinal patient summary consolidating 10+ years of multi-hospital records.",
        "Predictive sepsis and ICU readmission early warning alarms integrated directly into nurse station monitors.",
        "Automated clinical trial matching connecting qualifying patients with research therapies in real time."
      ]
    },
    technologyStack: ["Databricks", "Apache Spark", "Delta Lake", "FHIR Server", "PyTorch", "vLLM", "React", "TypeScript", "Docker", "Azure Health Data Services"],
    businessImpact: [
      {
        metric: "2.4M+",
        label: "Patient Records Unified",
        detail: "Standardized across 16 hospitals and 120 ambulatory clinic locations."
      },
      {
        metric: "68%",
        label: "Faster Diagnostic Triage",
        detail: "Physicians access comprehensive patient history in seconds instead of minutes."
      },
      {
        metric: "100%",
        label: "HIPAA & HITECH Compliance",
        detail: "Full auditability of every patient record access with zero security breaches."
      }
    ],
    clientTestimonial: {
      quote: "Vertexa's clinical intelligence system changed how our physicians practice medicine. Having immediate, synthesized patient context saves critical minutes in emergency triage.",
      author: "Dr. Evelyn Vance",
      role: "Chief Medical Information Officer",
      company: "Centennial Health Network"
    }
  },
  {
    id: "cs-04",
    slug: "real-time-autonomous-energy-grid-management",
    title: "Autonomous Energy Grid Management",
    client: "National Power Transmission Authority",
    industry: "Energy & Utilities",
    industrySlug: "energy",
    capability: "AI & Intelligent Systems",
    capabilitySlug: "ai-intelligent-systems",
    summaryResult: "19% peak load reduction",
    summaryMetricLabel: "Peak Load Shaved",
    shortDescription: "Decentralized grid balancing system managing 4.8 GW of solar, wind, and battery storage with sub-second frequency regulation.",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    duration: "12 Months",
    challenge: {
      overview: "Integrating millions of rooftop solar panels and commercial wind farms created extreme volatility on the regional power grid, leading to frequency spikes and costly gas-peaker plant activations.",
      keyPoints: [
        "Intermittent renewable generation risked local substation voltage collapse during rapid cloud-cover events.",
        "Legacy SCADA systems had a 4-second telemetry lag, too slow for dynamic microgrid balancing.",
        "Manual dispatching cost $40M annually in fossil-fuel peaker standby capacity."
      ]
    },
    strategy: {
      overview: "Vertexa developed a decentralized edge-controller network that forecasts local generation and autonomously dispatches industrial battery storage in millisecond response windows.",
      principles: [
        "Push decision autonomy to the substation edge to bypass wide-area latency.",
        "Combine satellite weather deep learning models with thermodynamic grid simulators.",
        "Create an automated demand-response market rewarding industrial energy flex."
      ]
    },
    solution: {
      overview: "An edge-to-cloud smart grid operating system built with Rust, Kafka, and TimescaleDB, continuously orchestrating power distribution across 3 million households.",
      architectureOverview: "Edge nodes at 450 electrical substations run localized reinforcement learning agents that stabilize frequency in 100ms. Aggregated telemetry feeds a central cloud forecasting twin that schedules regional generation 72 hours ahead.",
      keyFeatures: [
        "Autonomous battery storage dispatch responding to grid fluctuations in 100 milliseconds.",
        "Solar generation predictive modeling achieving 96% accuracy over 72-hour forecast horizons.",
        "Automated carbon footprint optimization shifting industrial workloads to peak renewable hours."
      ]
    },
    technologyStack: ["Rust", "Python", "PyTorch", "TimescaleDB", "Apache Kafka", "Kubernetes Edge", "React", "Grafana", "C++"],
    businessImpact: [
      {
        metric: "19%",
        label: "Peak Load Reduction",
        detail: "Eliminated the need for three planned fossil-fuel peaker plant constructions."
      },
      {
        metric: "4.8 GW",
        label: "Clean Energy Managed",
        detail: "Zero renewable curtailment during peak summer generation months."
      },
      {
        metric: "$32M",
        label: "Annual Operating Savings",
        detail: "Drastic reduction in auxiliary frequency regulation procurement costs."
      }
    ],
    clientTestimonial: {
      quote: "Vertexa's engineering unlocked true autonomous grid management. We are operating with higher renewable penetration and higher reliability than ever before.",
      author: "Mateo Rossi",
      role: "Chief Grid Architect",
      company: "Verde Grid Solutions"
    }
  },
  {
    id: "cs-05",
    slug: "next-gen-omnichannel-core-banking",
    title: "Next-Gen Omnichannel Core Banking",
    client: "Top-5 Commercial & Retail Banking Group",
    industry: "Financial Services",
    industrySlug: "financial-services",
    capability: "Digital Products",
    capabilitySlug: "digital-products",
    summaryResult: "6.2M active daily users",
    summaryMetricLabel: "Active Daily Users",
    shortDescription: "Completely reimagined mobile and web banking experience with sub-80ms transaction settlement and unified wealth advisory.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    duration: "10 Months",
    challenge: {
      overview: "The bank was losing market share to modern fintech neobanks due to a sluggish, fragmented legacy mobile app and 48-hour wire transfer processing times.",
      keyPoints: [
        "User engagement was declining with an app store rating of 2.1 stars.",
        "Account opening took 7 days and required an in-person branch visit.",
        "Monolithic backend could not support instant peer-to-peer or international payment rails."
      ]
    },
    strategy: {
      overview: "Vertexa architected an ultra-fast, accessible mobile and web application backed by an event-driven core banking adapter that handles onboarding in under 90 seconds.",
      principles: [
        "Design with luxury editorial minimalism, elevating financial clarity and peace of mind.",
        "Implement biometric instant identity verification compliant with eIDAS standards.",
        "Build a micro-frontend architecture allowing separate product squads to deploy daily."
      ]
    },
    solution: {
      overview: "A sleek, lightning-fast banking application featuring instant account creation, conversational transaction search, automated savings rules, and integrated wealth advisory.",
      architectureOverview: "Built with React 19, Swift, and Kotlin, the frontend connects via gRPC and GraphQL to a resilient Go backend running on AWS and Google Cloud with real-time biometric authentication.",
      keyFeatures: [
        "Instant biometric onboarding reducing new account activation from 7 days to 78 seconds.",
        "Sub-100ms peer-to-peer and international money movement with real-time FX hedging.",
        "Conversational AI financial co-pilot analyzing spending trends and optimizing cash buffers."
      ]
    },
    technologyStack: ["React 19", "TypeScript", "Swift", "Kotlin", "Go", "GraphQL", "gRPC", "PostgreSQL", "Redis", "AWS", "HashiCorp Vault"],
    businessImpact: [
      {
        metric: "6.2M",
        label: "Active Daily Users",
        detail: "App store rating rose from 2.1 to 4.9 stars within 90 days of launch."
      },
      {
        metric: "+340%",
        label: "Digital Account Openings",
        detail: "Onboarding completed without a single branch visit or manual paper form."
      },
      {
        metric: "<80ms",
        label: "Interaction Response Time",
        detail: "Fluid micro-interactions and instant feedback on all financial transfers."
      }
    ],
    clientTestimonial: {
      quote: "Vertexa didn't just build a digital app; they elevated our brand to the pinnacle of modern enterprise banking.",
      author: "Marcus Vance",
      role: "Head of Consumer Banking & Digital",
      company: "Pinnacle Financial Partners"
    }
  },
  {
    id: "cs-06",
    slug: "global-aerospace-predictive-maintenance",
    title: "Global Aerospace Fleet Diagnostics",
    client: "International Commercial Airline & Defense Fleet",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    capability: "Enterprise Transformation",
    capabilitySlug: "enterprise-transformation",
    summaryResult: "99.8% fleet availability",
    summaryMetricLabel: "Mission Readiness",
    shortDescription: "Turbine engine sensor intelligence and automated line-maintenance dispatch for 640 commercial aircraft.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    duration: "15 Months",
    challenge: {
      overview: "Aircraft On Ground (AOG) events caused by unexpected auxiliary power unit and jet turbine wear cost the airline over $110M in delayed flights and hotel vouchers annually.",
      keyPoints: [
        "Unplanned maintenance grounded aircraft at remote airports with no spare parts on hand.",
        "Engine telemetry was analyzed manually by engineers days after flight completion.",
        "Maintenance records were locked in legacy PDF logs and paper logbooks."
      ]
    },
    strategy: {
      overview: "We built an in-flight satellite telemetry ingestion pipe and thermodynamic degradation model that automatically pre-positions spare parts before the aircraft touches down.",
      principles: [
        "Continuous in-flight edge streaming of 4,000 engine parameters per second.",
        "Physics-informed neural networks simulating thermodynamic blade degradation.",
        "Automated airport ground crew dispatch and parts inventory pre-allocation."
      ]
    },
    solution: {
      overview: "A mission-critical predictive maintenance platform integrating in-flight ACARS telemetry, 3D engine digital twins, and automated technician mobile diagnostic apps.",
      architectureOverview: "Satellite datalinks transmit engine telemetry to a high-speed Kafka and Databricks pipeline. Machine learning models detect micro-vibration shifts and automatically order replacement turbines at the arrival hub.",
      keyFeatures: [
        "Real-time turbine vibration and temperature anomaly detection during active flight.",
        "Automated parts logistics dispatch preparing replacement components prior to gate arrival.",
        "AR-assisted technician mobile repair guides accelerating inspection turnaround by 45%."
      ]
    },
    technologyStack: ["Python", "PyTorch", "Databricks", "Kafka", "React Native", "TypeScript", "Three.js", "Docker", "Kubernetes", "AWS"],
    businessImpact: [
      {
        metric: "99.8%",
        label: "Fleet Mission Availability",
        detail: "Virtually eliminated unscheduled grounding of passenger and cargo aircraft."
      },
      {
        metric: "$78M",
        label: "Annual Maintenance Savings",
        detail: "Prevented catastrophic engine replacements through timely component servicing."
      },
      {
        metric: "-85%",
        label: "AOG Gate Delay Minutes",
        detail: "Technicians have parts and diagnostic blueprints waiting at the gate."
      }
    ],
    clientTestimonial: {
      quote: "Vertexa connected our engineering crews with live in-flight physics telemetry. We transformed our maintenance from reactive crisis firefighting to predictive precision.",
      author: "Captain Robert Sterling",
      role: "VP of Fleet Technical Operations",
      company: "AeroGlobal Transways"
    }
  }
];
