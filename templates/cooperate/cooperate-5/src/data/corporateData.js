// Enterprise Data Store for AXIOM SYSTEMS
export const BRAND = {
  name: "AXIOM SYSTEMS",
  monogram: "AX // 01",
  tagline: "ENGINEERING THE SYSTEMS THAT POWER MODERN BUSINESS",
  subtagline: "We combine technology, intelligence, and engineering to create resilient digital systems for organizations operating at scale.",
  established: "2012",
  ticker: "NYSE: AXSYS",
  systemAvailability: "99.98%",
  activeNodes: "4,820",
  dataProcessed: "2.4 PB",
  countriesCount: 24,
  deliveryCenters: 8,
  continentsCount: 4,
  engineeringTeam: "420+",
  activeProjects: 86,
};

export const TELEMETRY_STREAM = [
  { label: "GLOBAL OPERATIONS", value: "24 COUNTRIES", code: "GEO_24" },
  { label: "ACTIVE PROJECTS", value: "86 ENTERPRISE", code: "PRJ_86" },
  { label: "ENGINEERING TEAM", value: "420+ ARCHITECTS", code: "ENG_420" },
  { label: "SYSTEM AVAILABILITY", value: "99.98% SLA", code: "SLA_9998" },
];

export const CAPABILITIES_DATA = [
  {
    id: "01",
    code: "CAP_ENG",
    title: "Digital Engineering",
    category: "SYSTEMS ARCHITECTURE",
    tag: "Core Engineering",
    description: "Designing, building, and deploying fault-tolerant distributed platforms engineered for extreme concurrency, zero downtime, and mission-critical reliability.",
    details: "Our engineering practice leverages polyglot microservices, event-driven backplanes (Kafka, Pulsar), and custom high-throughput execution engines that handle millions of transactions per second.",
    specs: ["Sub-millisecond latency", "Deterministic state machines", "Automated chaos testing", "Polyglot runtime clusters"],
    technologies: ["Rust", "Go", "gRPC", "Kubernetes", "Apache Kafka", "WebAssembly"]
  },
  {
    id: "02",
    code: "CAP_AI",
    title: "Artificial Intelligence",
    category: "COGNITIVE SYSTEMS",
    tag: "Intelligent Systems",
    description: "Autonomous reasoning engines, multimodal foundation model fine-tuning, retrieval-augmented intelligence, and enterprise-grade inference pipelines.",
    details: "We build sovereign AI stacks that embed directly into secure enterprise VPCs, processing unstructured documents, real-time sensory telemetry, and complex decision graphs with strict governance.",
    specs: ["Air-gapped LLM deployment", "Real-time vector pipelines", "Guardrails & audit logs", "Distributed GPU cluster orchestration"],
    technologies: ["PyTorch", "vLLM", "Triton Inference", "LangGraph", "Qdrant", "Ray"]
  },
  {
    id: "03",
    code: "CAP_CLOUD",
    title: "Cloud Architecture",
    category: "INFRASTRUCTURE",
    tag: "Multi-Cloud",
    description: "Hyperscale multi-cloud platforms, sovereign cloud enclaves, declarative GitOps automation, and zero-trust hybrid mesh infrastructure.",
    details: "Architecting cloud foundations that eliminate vendor lock-in, streamline egress economics, and enforce continuous compliance across AWS, Azure, GCP, and bare-metal edge nodes.",
    specs: ["Zero-trust network mesh", "Cross-cloud failover < 3s", "Automated FinOps optimization", "Terraform & OpenTofu GitOps"],
    technologies: ["Terraform", "Istio", "Cilium / eBPF", "AWS", "Azure", "GCP"]
  },
  {
    id: "04",
    code: "CAP_DATA",
    title: "Data Platforms",
    category: "INTELLIGENCE LAYER",
    tag: "Data Mesh",
    description: "Enterprise lakehouses, real-time streaming topologies, high-dimensional vector stores, and automated semantic data governance.",
    details: "Unifying petabyte-scale structured and unstructured telemetry into self-serve analytical products with end-to-end data lineage, cryptographic auditing, and sub-second analytical querying.",
    specs: ["2.4+ PB daily throughput", "Automated schema contracts", "Sub-second analytical queries", "Differential privacy controls"],
    technologies: ["Apache Iceberg", "ClickHouse", "Spark", "Flink", "dbt", "Trino"]
  },
  {
    id: "05",
    code: "CAP_SEC",
    title: "Cybersecurity",
    category: "ZERO TRUST",
    tag: "Security Architecture",
    description: "Zero-trust network architectures, automated threat modeling, continuous cryptographic verification, and AI-driven autonomous SOC telemetry.",
    details: "Defending distributed enterprise perimeters with hardware-enforced root of trust, mutual TLS micro-segmentation, and proactive automated red-teaming pipelines.",
    specs: ["Hardware Root-of-Trust", "Continuous behavioral analysis", "mTLS mesh enforcement", "SOC 2 Type II & FedRAMP High"],
    technologies: ["SPIFFE/SPIRE", "Wazuh", "Vault", "eBPF Security", "Keycloak", "WireGuard"]
  },
  {
    id: "06",
    code: "CAP_AUTO",
    title: "Enterprise Automation",
    category: "AUTONOMOUS OPS",
    tag: "Workflow Systems",
    description: "End-to-end cognitive process orchestration, autonomic system self-healing, intelligent supply chain synchronization, and event-driven workflows.",
    details: "Transforming high-friction manual operational bottlenecks into resilient stateful machines with human-in-the-loop validation, exception forecasting, and real-time ledger verification.",
    specs: ["99.9% unattended processing", "Stateful retry orchestrators", "Audit-trail immutability", "Predictive exception routing"],
    technologies: ["Temporal.io", "Camunda", "Kafka Streams", "OpenTelemetry", "Node-RED", "Python"]
  }
];

export const TECH_STACK_LAYERS = [
  {
    id: "layer-1",
    layerNumber: "01",
    name: "EXPERIENCE",
    role: "User Interfaces & Edge Touchpoints",
    description: "Ultra-responsive client applications, spatial computing dashboards, and micro-frontend orchestrators built for zero-latency interactions.",
    metrics: "Response Time: < 35ms | 100% PWA / WebGL",
    components: ["Spatial WebGL Dashboards", "Micro-Frontend Orchestrator", "Edge SSR Gateways", "Design Token Compiler"],
    protocols: ["HTTP/3", "WebSocket", "WebRTC", "GraphQL", "gRPC-Web"]
  },
  {
    id: "layer-2",
    layerNumber: "02",
    name: "APPLICATIONS",
    role: "Core Business Logic & Event Mesh",
    description: "Decoupled domain services, stateful transactional microservices, and asynchronous event streaming pipelines with deterministic reconciliation.",
    metrics: "Throughput: 85,000 TPS | Resiliency: 99.999%",
    components: ["Domain Driven Microservices", "CQRS Event Sourcing", "Transaction Coordinators", "API Contract Mesh"],
    protocols: ["gRPC", "Protobuf", "Kafka Messaging", "AMQP", "REST v3"]
  },
  {
    id: "layer-3",
    layerNumber: "03",
    name: "INTELLIGENCE",
    role: "Cognitive AI & Autonomous Inference",
    description: "Dedicated GPU inference clusters, retrieval-augmented intelligence, multimodal vision systems, and continuous model governance engines.",
    metrics: "Inference Latency: 12ms | Model Accuracy: 99.4%",
    components: ["vLLM Inference Cluster", "RAG Vector Indexing Engine", "Agentic Orchestrator", "Safety Guardrails Layer"],
    protocols: ["TensorRT", "CUDA Streams", "OpenAI Compat API", "Ray RPC"]
  },
  {
    id: "layer-4",
    layerNumber: "04",
    name: "DATA",
    role: "Storage Engines & Stream Processing",
    description: "Unified open-table lakehouse formats, distributed columnar OLAP engines, and real-time stateful stream processors.",
    metrics: "Volume: 2.4 PB/day | Query Latency: 180ms",
    components: ["Apache Iceberg Lakehouse", "ClickHouse OLAP Engine", "Apache Flink Stream Grid", "Cryptographic Ledger"],
    protocols: ["Arrow Flight", "Parquet", "S3 API", "PostgreSQL Wire"]
  },
  {
    id: "layer-5",
    layerNumber: "05",
    name: "CLOUD",
    role: "Multi-Cloud Orchestration & GitOps",
    description: "Sovereign cloud abstraction layers, automated multi-region topology replication, and declarative immutable infrastructure pipelines.",
    metrics: "Failover: < 2.8s | Availability: 99.98%",
    components: ["Kubernetes Multi-Cluster", "Istio Service Mesh", "ArgoCD GitOps Pipeline", "HashiCorp Vault Enclave"],
    protocols: ["eBPF", "WireGuard mTLS", "BGP Anycast", "Kube-API"]
  },
  {
    id: "layer-6",
    layerNumber: "06",
    name: "INFRASTRUCTURE",
    role: "Hardware, Compute & Bare-Metal Edge",
    description: "Dedicated bare-metal GPU nodes, low-latency dark fiber interconnects, FPGA accelerators, and globally distributed edge points of presence.",
    metrics: "Global PoPs: 64 | Dark Fiber RTT: 4.2ms",
    components: ["NVIDIA H100 / Blackwell Clusters", "FPGA Trading Hardware", "Subsea Interconnects", "Custom SmartNICs"],
    protocols: ["PCIe Gen 5", "RoCE v2", "InfiniBand 400Gbps", "PTP Precision Time"]
  }
];

export const INDUSTRIES_DATA = [
  {
    id: "financial-services",
    code: "IND_FIN",
    title: "FINANCIAL SERVICES",
    subtitle: "High-frequency trading, core banking modernization, and algorithmic risk telemetry.",
    description: "We engineer low-latency trading infrastructure, fraud mitigation engines, and sovereign core-banking architectures handling trillions in assets.",
    metric: "34% OPERATIONAL EFFICIENCY",
    metricLabel: "Cost-to-Income Optimization",
    capabilities: [
      "Sub-millisecond order routing & matching engines",
      "Real-time fraud detection with graph neural networks",
      "Regulatory reporting & immutable transaction ledgers"
    ],
    stats: { volume: "$4.2T Daily Assets", latency: "< 450μs Execution", compliance: "Tier-1 Basel III" }
  },
  {
    id: "healthcare",
    code: "IND_HLTH",
    title: "HEALTHCARE",
    subtitle: "Clinical intelligence, federated genomic data networks, and compliant hospital systems.",
    description: "Building HIPAA/GDPR-compliant federated learning pipelines, predictive patient intake orchestration, and automated clinical trial telemetry.",
    metric: "48% FASTER DIAGNOSTIC TRIAGE",
    metricLabel: "Clinical Data Ingestion Acceleration",
    capabilities: [
      "Privacy-preserving federated model training",
      "HL7 / FHIR clinical data interoperability bridges",
      "IoMT (Internet of Medical Things) secure edge ingestion"
    ],
    stats: { records: "120M+ Patient Records", compliance: "HIPAA / HITRUST", uptime: "99.999% Critical" }
  },
  {
    id: "retail",
    code: "IND_RTL",
    title: "RETAIL",
    subtitle: "Real-time omnichannel commerce engines and predictive inventory synchronization.",
    description: "Orchestrating high-scale headless commerce backbones, dynamic hyper-personalized pricing algorithms, and micro-fulfillment automation.",
    metric: "62% THROUGHPUT BOOST",
    metricLabel: "Peak Black Friday Scale Capability",
    capabilities: [
      "Distributed inventory state machine with sub-second sync",
      "Autonomous dynamic pricing & demand forecasting",
      "Headless checkout pipeline handling 150k cart ops/sec"
    ],
    stats: { peakTps: "150k TPS", nodes: "1,200 Fulfillment Hubs", returns: "-24% Return Rate" }
  },
  {
    id: "manufacturing",
    code: "IND_MFG",
    title: "MANUFACTURING",
    subtitle: "Industrial IoT edge nodes, digital twin simulation, and predictive maintenance grids.",
    description: "Connecting factory floors with deterministic edge telemetry, computer vision quality assurance, and closed-loop robotic automation systems.",
    metric: "31% REDUCTION IN DOWNTIME",
    metricLabel: "Unplanned Asset Outage Elimination",
    capabilities: [
      "High-speed optical inspection using edge vision models",
      "Digital twin real-time thermodynamic simulation",
      "SCADA & PLC telemetry ingestion into unified lakehouse"
    ],
    stats: { sensors: "850k Connected Sensors", precision: "0.01mm Defect Detection", mtbf: "+44% MTBF" }
  },
  {
    id: "logistics",
    code: "IND_LOG",
    title: "LOGISTICS",
    subtitle: "Autonomous fleet routing, global freight optimization, and supply chain visibility.",
    description: "Engineering multi-modal global shipping tracking platforms, dynamic route optimization solvers, and warehouse automated robotics fleets.",
    metric: "27% FUEL & LOGISTICS SAVINGS",
    metricLabel: "Route Efficiency Optimization",
    capabilities: [
      "Dynamic multi-variable route graph optimization",
      "Automated customs clearance & documentation NLP",
      "Cold-chain temperature & tamper sensor tracking"
    ],
    stats: { tracking: "4.5M Daily Shipments", accuracy: "99.2% ETA Precision", ports: "140 Global Ports" }
  },
  {
    id: "telecommunications",
    code: "IND_TEL",
    title: "TELECOMMUNICATIONS",
    subtitle: "5G Open RAN orchestration, software-defined network slicing, and edge compute.",
    description: "Developing carrier-grade virtualized network functions, automated cell tower capacity balancing, and next-gen customer provisioning platforms.",
    metric: "55% PROVISIONING SPEEDUP",
    metricLabel: "Network Slice Orchestration Time",
    capabilities: [
      "Open RAN software-defined radio management",
      "Self-optimizing mesh network traffic dispatchers",
      "Real-time subscriber billing & usage analytics"
    ],
    stats: { bandwidth: "40 Tbps Network Core", subscribers: "65M Connected Users", latency: "2ms Edge Slices" }
  }
];

export const GLOBAL_NODES = [
  { name: "New York HQ", region: "North America", x: 28, y: 34, type: "Executive & Systems Lab", status: "ONLINE", ping: "1.2ms" },
  { name: "San Francisco", region: "North America", x: 18, y: 38, type: "AI & Cloud Engineering", status: "ONLINE", ping: "4.8ms" },
  { name: "London", region: "Europe", x: 48, y: 28, type: "FinTech & Architecture Hub", status: "ONLINE", ping: "8.4ms" },
  { name: "Zurich", region: "Europe", x: 52, y: 31, type: "Security & Zero Trust Lab", status: "ONLINE", ping: "9.1ms" },
  { name: "Dubai", region: "Middle East", x: 62, y: 44, type: "Sovereign Cloud & Infra", status: "ONLINE", ping: "14.2ms" },
  { name: "Singapore", region: "Asia", x: 76, y: 55, type: "APAC Delivery Center", status: "ONLINE", ping: "18.6ms" },
  { name: "Tokyo", region: "Asia", x: 86, y: 36, type: "Robotics & Vision Center", status: "ONLINE", ping: "22.1ms" },
  { name: "Sydney", region: "Australia", x: 88, y: 76, type: "Oceania Engineering Node", status: "ONLINE", ping: "28.4ms" }
];

export const CASE_STUDIES = [
  {
    id: "01",
    code: "CASE_NOVA",
    featured: true,
    title: "NOVA OPERATIONS",
    client: "Nova Industrial Global",
    subtitle: "Enterprise automation & digital twin platform for next-gen advanced manufacturing.",
    industry: "Manufacturing",
    impactMetric: "31%",
    impactLabel: "Reduction in operational processing time",
    secondaryMetric: "$42M",
    secondaryLabel: "Annualized operational cost savings",
    timeframe: "9-Month Global Rollout",
    overview: "Nova needed to unify 14 distributed manufacturing plants across 3 continents into a single deterministic telemetry and automated scheduling grid.",
    solution: "We engineered a multi-region event backplane paired with low-latency edge AI nodes on plant floors that predict equipment friction 4 hours before anomaly thresholds.",
    techStack: ["Rust Core Engine", "Kafka Event Mesh", "PyTorch Edge Vision", "ClickHouse OLAP", "Custom FPGA Edge"]
  },
  {
    id: "02",
    code: "CASE_APEX",
    featured: false,
    title: "APEX CLEARING",
    client: "Apex Tier-1 Banking Consortium",
    subtitle: "High-throughput real-time risk evaluation and settlement core.",
    industry: "Financial Services",
    impactMetric: "450μs",
    impactLabel: "Average trade risk arbitration latency",
    secondaryMetric: "99.999%",
    secondaryLabel: "System reliability over 3 years",
    timeframe: "14-Month Architecture Transformation",
    overview: "Replacing legacy mainframe batch reconciliation with an event-driven continuous settlement engine handling $180B in daily capital flows.",
    solution: "Architected a zero-loss state machine built on memory-mapped append-only ledgers and distributed Raft consensus nodes.",
    techStack: ["Go & C++ Core", "Distributed Raft", "eBPF Kernel Mesh", "NVMe Direct Storage"]
  },
  {
    id: "03",
    code: "CASE_BIOSYN",
    featured: false,
    title: "BIOSYN CLINICAL",
    client: "BioSyn Life Sciences",
    subtitle: "Federated multimodal AI pipeline for automated oncology clinical trial discovery.",
    industry: "Healthcare",
    impactMetric: "4.2×",
    impactLabel: "Acceleration in trial candidate matching",
    secondaryMetric: "100%",
    secondaryLabel: "HIPAA / GDPR cryptographic privacy proof",
    timeframe: "6-Month Deployment",
    overview: "Unlocking siloed clinical trial records across 40 hospital networks without moving private patient health records outside hospital firewalls.",
    solution: "Designed a decentralized federated learning mesh with zero-knowledge cryptographic proof generation and differential privacy guarantees.",
    techStack: ["PyTorch Federated", "ZK-SNARK Proofs", "Confidential Compute Enclaves", "FHIR APIs"]
  },
  {
    id: "04",
    code: "CASE_QUANTUM",
    featured: false,
    title: "QUANTUM FREIGHT",
    client: "Quantum Global Logistics",
    subtitle: "Autonomous multi-modal freight routing and predictive carbon optimization engine.",
    industry: "Logistics",
    impactMetric: "28%",
    impactLabel: "Reduction in empty container transit miles",
    secondaryMetric: "1.8M",
    secondaryLabel: "Daily tracking telemetries processed",
    timeframe: "8-Month Rollout",
    overview: "Dynamic optimization of 45,000 intermodal shipping containers subject to weather, port congestion, and fluctuating fuel tariffs.",
    solution: "Graph neural network optimizer calculating global minimum cost pathways in under 3 seconds per schedule update.",
    techStack: ["Graph Neural Networks", "Ray Distributed Compute", "Apache Iceberg", "TimescaleDB"]
  }
];

export const PERFORMANCE_METRICS = [
  { value: "31%", label: "Faster operations", detail: "Average reduction in end-to-end operational processing cycle across enterprise deployments." },
  { value: "42%", label: "Reduced processing costs", detail: "Infrastructure and egress efficiency gained through algorithmic resource allocation." },
  { value: "3.2×", label: "Faster deployment", detail: "Acceleration in enterprise system release cadence with declarative GitOps pipelines." },
  { value: "99.98%", label: "Platform availability", detail: "Guaranteed uptime across multi-region active-active distributed topologies." }
];

export const SECURITY_LAYERS = [
  {
    id: "sec-1",
    name: "IDENTITY",
    role: "Zero-Trust Mutual Attestation",
    details: "Continuous hardware-bound cryptographic identities for all microservices, human operators, and connected edge nodes via SPIFFE/SPIRE.",
    status: "ENFORCED"
  },
  {
    id: "sec-2",
    name: "APPLICATION",
    role: "Runtime Application Self-Protection",
    details: "eBPF kernel-level monitoring inspecting system calls and network payloads in memory to detect zero-day exploit attempts in real time.",
    status: "ACTIVE"
  },
  {
    id: "sec-3",
    name: "DATA",
    role: "Cryptographic Enclave Encryption",
    details: "Post-quantum ready envelope encryption for data in transit, at rest, and in compute memory using hardware confidential VMs.",
    status: "ENCRYPTED"
  },
  {
    id: "sec-4",
    name: "NETWORK",
    role: "Micro-Segmented WireGuard Mesh",
    details: "Autonomous encrypted overlays that eliminate flat network risks and restrict lateral movement to strictly declared policies.",
    status: "VERIFIED"
  },
  {
    id: "sec-5",
    name: "INFRASTRUCTURE",
    role: "Immutable Hardware Root-of-Trust",
    details: "Secure boot verification, TPM hardware keys, and automated firmware integrity scanning across all delivery nodes.",
    status: "HARDENED"
  }
];

export const PROCESS_STAGES = [
  {
    step: "01",
    name: "ASSESS",
    tagline: "SYSTEM DECONSTRUCTION & AUDIT",
    description: "Deep technical audit of existing enterprise architecture, telemetry bottlenecks, latency profiles, and security vulnerabilities.",
    deliverables: ["Architecture Baseline Audit", "Throughput Profiling Matrix", "Risk & Dependency Topology Graph"]
  },
  {
    step: "02",
    name: "ARCHITECT",
    tagline: "DETERMINISTIC BLUEPRINTING",
    description: "Engineering fault-tolerant system blueprints, data contracts, API schemas, and deployment topologies engineered for target scale.",
    deliverables: ["Microservices Contract Schema", "Multi-Cloud Resiliency Plan", "Zero-Trust Security Framework"]
  },
  {
    step: "03",
    name: "ENGINEER",
    tagline: "HIGH-CONCURRENCY CONSTRUCTION",
    description: "Building core execution engines, automated pipelines, machine learning inference nodes, and data lakehouse platforms.",
    deliverables: ["Polyglot Codebases", "Automated Chaos Testing Suite", "Declarative GitOps Infrastructure"]
  },
  {
    step: "04",
    name: "INTEGRATE",
    tagline: "ZERO-DOWNTIME MIGRATION",
    description: "Executing seamless canary deployments, shadow traffic validation, and zero-downtime ledger data cutovers.",
    deliverables: ["Dark-Traffic Verification", "Active-Active Fallback Mesh", "Automated Rollback Safeguards"]
  },
  {
    step: "05",
    name: "OPTIMIZE",
    tagline: "AUTONOMIC TELEMETRY & SCALE",
    description: "Continuous telemetry profiling, autonomous capacity balancing, latency compression, and cost-to-performance refinement.",
    deliverables: ["24/7 AI Telemetry SOC", "Algorithmic Resource Scaling", "Quarterly Architecture Upgrades"]
  }
];

export const LEADERSHIP_PROFILES = [
  {
    name: "Dr. Marcus Vance",
    role: "Chief Executive Officer & Founder",
    credentials: "PhD Computer Systems, MIT",
    bio: "Former Principal Architect at Global Infrastructure Labs. 22+ years engineering fault-tolerant enterprise platforms and sovereign infrastructure.",
    focus: "Enterprise Strategy & Autonomous Systems",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Elena Rostova",
    role: "Chief Technology Officer",
    credentials: "MSc Distributed Systems, ETH Zurich",
    bio: "Pioneered low-latency event mesh architectures for international financial exchanges and high-throughput vector compute pipelines.",
    focus: "Distributed Systems & Cloud Architecture",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Kaelen Chen",
    role: "Head of Artificial Intelligence",
    credentials: "PhD Machine Learning, Stanford",
    bio: "Author of seminal papers on decentralized federated learning and safe inference runtimes for regulated enterprise environments.",
    focus: "Foundation Models & Cognitive Ops",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Astrid Lindholm",
    role: "Chief Information Security Officer",
    credentials: "MS Cryptography, Cambridge",
    bio: "Former Director of Sovereign Defense Cybersecurity. Specializes in post-quantum cryptography, hardware enclaves, and zero-trust engineering.",
    focus: "Zero-Trust Engineering & Threat Modeling",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  }
];

export const INSIGHTS_ARTICLES = [
  {
    id: "art-1",
    slug: "ai-infrastructure-the-next-enterprise-layer",
    category: "ARTIFICIAL INTELLIGENCE",
    date: "AUG 2026",
    readTime: "8 MIN READ",
    title: "AI Infrastructure: The Next Enterprise Layer",
    summary: "Why standard cloud compute fails at enterprise LLM scale, and how sovereign GPU clusters paired with private vector meshes are redefining enterprise tech stacks.",
    author: "Kaelen Chen, Head of AI"
  },
  {
    id: "art-2",
    slug: "building-resilient-digital-systems",
    category: "SYSTEMS ARCHITECTURE",
    date: "JUL 2026",
    readTime: "11 MIN READ",
    title: "Building Resilient Digital Systems Under Extreme Concurrency",
    summary: "A deep dive into deterministic state machines, backpressure algorithms, and automated chaos injection for mission-critical operations.",
    author: "Elena Rostova, CTO"
  },
  {
    id: "art-3",
    slug: "why-data-architecture-matters",
    category: "DATA PLATFORMS",
    date: "JUN 2026",
    readTime: "6 MIN READ",
    title: "Why Data Architecture Matters More Than Your AI Models",
    summary: "Foundation models are only as potent as the underlying lakehouse contracts. How open table formats and streaming OLAP power reliable enterprise intelligence.",
    author: "Data Architecture Practice Group"
  },
  {
    id: "art-4",
    slug: "future-of-intelligent-operations",
    category: "AUTONOMOUS OPS",
    date: "MAY 2026",
    readTime: "9 MIN READ",
    title: "The Future of Intelligent Operations: Moving from Automation to Autonomy",
    summary: "How closed-loop self-healing systems and stateful orchestrators are eliminating operational downtime in Fortune 500 infrastructure.",
    author: "Dr. Marcus Vance, CEO"
  }
];
