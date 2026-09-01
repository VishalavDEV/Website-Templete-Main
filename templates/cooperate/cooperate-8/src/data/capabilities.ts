export interface CapabilityItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription?: string;
  fullOverview: string;
  image: string;
  offerings: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  businessBenefits: {
    metric: string;
    label: string;
    detail: string;
  }[];
  architectureLayers: {
    name: string;
    description: string;
    tech: string[];
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  featuredCaseStudySlug: string;
  relatedCaseStudies?: string[];
}

export const capabilitiesData: CapabilityItem[] = [
  {
    id: "cap-01",
    number: "01",
    slug: "ai-intelligent-systems",
    title: "AI & Intelligent Systems",
    tagline: "Autonomous cognitive pipelines and machine intelligence built for enterprise scale.",
    shortDescription: "Custom foundational models, multi-agent autonomous reasoning networks, and production-grade LLM architectures engineered for high-throughput, low-latency, and zero hallucination risk.",
    fullOverview: "We architect AI systems that transition from experimental laboratory prototypes to robust enterprise backbones. Our practice focuses on deep model customization, fine-tuning against private domain telemetry, deterministic guardrailing, retrieval-augmented generation (RAG) over petabyte-scale knowledge bases, and continuous model governance.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      {
        title: "Enterprise LLM & Agentic Workflows",
        description: "Multi-agent autonomous systems capable of executing complex multi-step reasoning, tool invocation, and decision orchestration with deterministic validation."
      },
      {
        title: "Domain-Specific Fine-Tuning & SLMs",
        description: "Training and quantized deployment of specialized small language models tailored to proprietary legal, financial, and industrial vocabularies."
      },
      {
        title: "High-Throughput Vector & Knowledge Architectures",
        description: "Hybrid vector-graph retrieval systems (GraphRAG) that maintain contextual coherence across millions of distributed institutional documents."
      },
      {
        title: "Deterministic AI Governance & Guardrails",
        description: "Real-time inference firewalls, safety validators, audit logging, and PII anonymization preventing compliance failures or data leakage."
      }
    ],
    technologies: ["PyTorch", "TensorFlow", "CUDA", "vLLM", "Triton", "LangGraph", "LlamaIndex", "Qdrant", "Milvus", "NVIDIA TensorRT", "Weights & Biases", "Hugging Face"],
    businessBenefits: [
      {
        metric: "85%",
        label: "Manual Effort Reduction",
        detail: "Automates cognitive document triage and semantic data extraction."
      },
      {
        metric: "4.2x",
        label: "Decision Velocity",
        detail: "Accelerates institutional risk and credit evaluations from days to minutes."
      },
      {
        metric: "99.94%",
        label: "Deterministic Accuracy",
        detail: "Strict verification layers eliminate false positives in regulated workflows."
      }
    ],
    architectureLayers: [
      {
        name: "Inference & Agent Routing",
        description: "Load-balanced dynamic model routing based on prompt complexity and latency targets.",
        tech: ["Triton Inference Server", "FastAPI", "gRPC", "vLLM"]
      },
      {
        name: "Knowledge & Vector Subsystem",
        description: "High-density vector embeddings coupled with structured enterprise knowledge graphs.",
        tech: ["Neo4j", "Qdrant", "OpenSearch", "BGE Embeddings"]
      },
      {
        name: "Telemetry & Governance Layer",
        description: "Zero-trust model auditing, token usage metering, and real-time hallucination detection.",
        tech: ["Langfuse", "Prometheus", "OpenTelemetry", "Guardrails AI"]
      }
    ],
    processSteps: [
      {
        step: "Phase 1",
        title: "Domain Feasibility & Data Audit",
        description: "Mapping unstructured data stores, evaluating signal-to-noise ratios, and establishing deterministic benchmark baselines."
      },
      {
        step: "Phase 2",
        title: "Architecture & RAG Pipeline Prototyping",
        description: "Building semantic retrieval graphs, embedding pipelines, and baseline fine-tuning evaluation loops."
      },
      {
        step: "Phase 3",
        title: "Hardening & Enterprise Integration",
        description: "Deploying secure air-gapped or VPC inference endpoints, connecting into existing ERPs/CRMs, and configuring governance gates."
      },
      {
        step: "Phase 4",
        title: "Continuous Evaluation & Model Drift Monitoring",
        description: "Automated test suites running against evolving enterprise datasets to prevent degradation and catastrophic forgetting."
      }
    ],
    faqs: [
      {
        question: "How does Vertexa guarantee data privacy when deploying enterprise LLMs?",
        answer: "All models and vector infrastructure are deployed strictly within your dedicated VPC or on-premise sovereign hardware. No enterprise data is ever used to train third-party public models or transmitted outside strict cryptographic boundaries."
      },
      {
        question: "Can Vertexa work with existing legacy databases and ERP systems?",
        answer: "Yes. We engineer customized connector middleware and semantic translation layers that bridge modern vector-agent systems with legacy SAP, Oracle, AS/400, and bespoke relational databases."
      }
    ],
    featuredCaseStudySlug: "ai-risk-intelligence-platform"
  },
  {
    id: "cap-02",
    number: "02",
    slug: "digital-products",
    title: "Digital Products",
    tagline: "Mission-critical applications built with architectural precision and world-class craft.",
    shortDescription: "End-to-end engineering of high-consequence web, mobile, and desktop platforms where system responsiveness, fault tolerance, and bespoke user experience drive core competitive advantage.",
    fullOverview: "We partner with visionary product and technology leaders to conceive, design, and engineer category-defining digital products. From high-frequency trading terminals and clinical medical dashboards to complex multi-sided SaaS ecosystems, we unite rigorous human factors design with low-latency software engineering.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      {
        title: "Complex Web & SaaS Applications",
        description: "Modular micro-frontend architectures with stateful offline-first sync, real-time collaboration engines, and sub-100ms render budgets."
      },
      {
        title: "Enterprise Multi-Platform Design Systems",
        description: "Unified, accessible token-based design systems that scale across hundreds of engineering squads and diverse digital touchpoints."
      },
      {
        title: "High-Performance Mobile Applications",
        description: "Native and cross-platform mobile solutions engineered for field technicians, institutional clients, and high-frequency consumer transactions."
      },
      {
        title: "Mission-Critical Operational Portals",
        description: "Dense information displays and control dashboards that present complex telemetry with zero visual ambiguity under high-stress environments."
      }
    ],
    technologies: ["React 19", "TypeScript", "Next.js", "Swift", "Kotlin", "React Native", "Tailwind CSS", "GraphQL", "WebSockets", "WebAssembly", "Electron"],
    businessBenefits: [
      {
        metric: "<80ms",
        label: "Time-to-Interactive",
        detail: "Ultra-lean bundle architecture and aggressive edge caching."
      },
      {
        metric: "400%",
        label: "Developer Velocity",
        detail: "Shared atomic component design systems reduce feature cycle times."
      },
      {
        metric: "99.99%",
        label: "UI Crash-Free Sessions",
        detail: "Strict type-safety and automated cross-browser visual regression testing."
      }
    ],
    architectureLayers: [
      {
        name: "Client Presentation Engine",
        description: "Optimized virtualized rendering tree with accessible component primitives.",
        tech: ["React 19", "Tailwind CSS", "Motion", "Radix UI"]
      },
      {
        name: "State & Data Sync Layer",
        description: "Optimistic updates, local caching, and real-time delta replication over WebSockets.",
        tech: ["TanStack Query", "Zustand", "RxJS", "gRPC-Web"]
      },
      {
        name: "Edge Distribution & Routing",
        description: "Serverless edge functions and asset distribution for instant global availability.",
        tech: ["Cloudflare Workers", "Fastly", "Vercel Edge", "AWS CloudFront"]
      }
    ],
    processSteps: [
      {
        step: "Phase 1",
        title: "Architectural Scoping & UX Prototyping",
        description: "Translating complex operational workflows into intuitive user flows, interaction models, and validated interactive prototypes."
      },
      {
        step: "Phase 2",
        title: "Core Framework & Design System Setup",
        description: "Establishing component tokens, accessibility criteria, CI/CD pipelines, and baseline test suites."
      },
      {
        step: "Phase 3",
        title: "Iterative Engineering Sprints",
        description: "Full-stack module development with weekly working software deployments and telemetry instrumentation."
      },
      {
        step: "Phase 4",
        title: "Load Testing, Security Auditing & Release",
        description: "End-to-end chaos testing, SOC2 compliance validation, and staged zero-downtime rollouts."
      }
    ],
    faqs: [
      {
        question: "How does Vertexa ensure accessibility (WCAG AA/AAA) across complex enterprise tools?",
        answer: "Accessibility is integrated from the initial design tokens through automated testing in CI/CD, guaranteeing full keyboard navigation, screen reader semantics, and high contrast ratios."
      },
      {
        question: "Can we transition our existing product incrementally without a complete rewrite?",
        answer: "Yes, we specialize in Strangler Fig pattern migrations that modernize monolithic frontends and services into modern modular micro-frontends without interrupting daily business operations."
      }
    ],
    featuredCaseStudySlug: "next-gen-omnichannel-core-banking"
  },
  {
    id: "cap-03",
    number: "03",
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    tagline: "Resilient, sovereign, and scalable multi-cloud architectures built for continuous uptime.",
    shortDescription: "Terraform-driven Infrastructure-as-Code, Kubernetes container orchestration, service mesh topologies, and hybrid-cloud strategies engineered to survive regional outages and massive demand spikes.",
    fullOverview: "Modern enterprises require infrastructure that treats reliability as a mathematical guarantee. Our cloud engineering practice designs and manages self-healing multi-cloud environments, automated FinOps cost governors, edge distribution networks, and immutable infrastructure pipelines.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      {
        title: "Multi-Cloud & Hybrid Cloud Architecture",
        description: "Active-active multi-region topologies across AWS, Azure, and Google Cloud with automated cross-provider failover."
      },
      {
        title: "Kubernetes & Cloud-Native Platforms",
        description: "Enterprise-grade container orchestration with Istio service mesh, automated autoscaling, and zero-trust mutual TLS."
      },
      {
        title: "Infrastructure as Code & GitOps",
        description: "Declarative infrastructure automation using Terraform, OpenTofu, and ArgoCD with policy-as-code security scans."
      },
      {
        title: "Enterprise FinOps & Cloud Cost Optimization",
        description: "Granular cost attribution, spot instance orchestration, and architectural re-platforming reducing compute waste by 30-50%."
      }
    ],
    technologies: ["Kubernetes", "AWS", "Google Cloud", "Microsoft Azure", "Terraform", "ArgoCD", "Istio", "Docker", "Prometheus", "Grafana", "Datadog", "OpenTelemetry"],
    businessBenefits: [
      {
        metric: "99.999%",
        label: "Platform Availability",
        detail: "Multi-region active-active clusters withstand complete cloud zone outages."
      },
      {
        metric: "-38%",
        label: "Annual Cloud Spend",
        detail: "Algorithmic resource rightsizing and autoscaling eliminate idle capacity."
      },
      {
        metric: "<15s",
        label: "Automated Deploy Time",
        detail: "Continuous delivery pipelines replace error-prone manual provisioning."
      }
    ],
    architectureLayers: [
      {
        name: "Global Edge & Ingress",
        description: "DDoS mitigation, intelligent DNS traffic steering, and anycast CDN termination.",
        tech: ["Cloudflare", "AWS Route 53", "Envoy Proxy"]
      },
      {
        name: "Compute & Orchestration",
        description: "Hardened Kubernetes clusters with dynamic node provisioning and isolated tenant namespaces.",
        tech: ["EKS", "GKE", "Karpenter", "Cilium CNI"]
      },
      {
        name: "Observability & SRE Telemetry",
        description: "Unified distributed tracing, metrics aggregation, and predictive anomaly detection.",
        tech: ["OpenTelemetry", "Grafana Mimir", "Tempo", "Datadog"]
      }
    ],
    processSteps: [
      {
        step: "Phase 1",
        title: "Infrastructure & Well-Architected Review",
        description: "Deep audit of security baselines, single points of failure, egress bottlenecks, and cost anomalies."
      },
      {
        step: "Phase 2",
        title: "IaC Standardization & Blueprint Design",
        description: "Authoring modular Terraform modules with embedded compliance rules (OPA/Checkov)."
      },
      {
        step: "Phase 3",
        title: "Migration & Parallel Validation",
        description: "Replicating production traffic in parallel to validate latency, data consistency, and disaster recovery."
      },
      {
        step: "Phase 4",
        title: "Cutover & 24/7 Site Reliability Handover",
        description: "Zero-downtime DNS cutover backed by automated runbooks and follow-the-sun SRE monitoring."
      }
    ],
    faqs: [
      {
        question: "Can Vertexa handle cloud migration without disrupting live user transactions?",
        answer: "Yes. We execute phased zero-downtime cutovers utilizing dual-write database patterns and dynamic traffic routing at the DNS and reverse proxy layers."
      },
      {
        question: "How do you help organizations avoid vendor lock-in with major cloud providers?",
        answer: "We standardize compute on open-source cloud-native foundations (Kubernetes, Terraform, OpenTelemetry, Istio), allowing workloads to run interchangeably across AWS, GCP, Azure, or private colocation."
      }
    ],
    featuredCaseStudySlug: "global-supply-chain-platform"
  },
  {
    id: "cap-04",
    number: "04",
    slug: "data-analytics",
    title: "Data & Analytics",
    tagline: "Petabyte-scale unified data platforms and real-time streaming architectures.",
    shortDescription: "High-throughput data lakes, lakehouses, streaming ingestion pipelines, and semantic business intelligence layers that transform raw transactional telemetry into actionable institutional alpha.",
    fullOverview: "Data is only as valuable as the speed and integrity with which it informs decision-making. We build modern data platforms using Snowflake, Databricks, and Apache Kafka that eliminate data silos, automate compliance lineage, and power operational machine learning models.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      {
        title: "Modern Data Lakehouse Architectures",
        description: "Unified storage and compute platforms built on Delta Lake and Apache Iceberg supporting both SQL analytics and machine learning workloads."
      },
      {
        title: "Real-Time Streaming & Event-Driven Pipelines",
        description: "Sub-second event ingestion and complex event processing pipelines handling millions of events per second with exactly-once semantics."
      },
      {
        title: "Data Governance, Cataloging & Lineage",
        description: "Automated data discovery, automated classification of sensitive assets, and end-to-end lineage tracking for regulatory compliance."
      },
      {
        title: "Operational Analytics & Executive Intelligence",
        description: "Embedded analytics, real-time dashboards, and predictive forecasting models integrated directly into executive decision loops."
      }
    ],
    technologies: ["Apache Kafka", "Snowflake", "Databricks", "Apache Spark", "dbt", "Apache Flink", "PostgreSQL", "ClickHouse", "BigQuery", "Apache Iceberg", "Airflow"],
    businessBenefits: [
      {
        metric: "10x",
        label: "Query Speed Improvement",
        detail: "Columnar indexing and materialized compute clusters accelerate BI reports."
      },
      {
        metric: "100%",
        label: "Data Lineage Visibility",
        detail: "Every metric can be traced back to its raw source transactions automatically."
      },
      {
        metric: "<500ms",
        label: "Event Ingestion Latency",
        detail: "Real-time streaming enables instantaneous fraud and risk detection."
      }
    ],
    architectureLayers: [
      {
        name: "Ingestion & Stream Processing",
        description: "Decoupled distributed messaging layer handling continuous event logs.",
        tech: ["Apache Kafka", "Apache Flink", "AWS Kinesis"]
      },
      {
        name: "Storage & Lakehouse Layer",
        description: "Open table formats providing ACID transactions on top of object storage.",
        tech: ["Apache Iceberg", "Delta Lake", "Snowflake", "S3/GCS"]
      },
      {
        name: "Transformation & Semantic Layer",
        description: "Modular SQL transformation pipelines with automated testing and documentation.",
        tech: ["dbt", "Cube.js", "Apache Spark"]
      }
    ],
    processSteps: [
      {
        step: "Phase 1",
        title: "Data Topology & Silo Assessment",
        description: "Cataloging all source systems, schemas, update frequencies, and consumer requirements."
      },
      {
        step: "Phase 2",
        title: "Lakehouse Architecture & Pipeline Build",
        description: "Deploying high-speed ingestion adapters, Bronze/Silver/Gold medallion pipelines, and dbt models."
      },
      {
        step: "Phase 3",
        title: "Data Quality Testing & Governance Automation",
        description: "Establishing automated schema drift detectors and data contract validation rules."
      },
      {
        step: "Phase 4",
        title: "Self-Service Enablement & ML Integration",
        description: "Connecting downstream analytics tools, feature stores, and real-time dashboard endpoints."
      }
    ],
    faqs: [
      {
        question: "How do you manage data governance across strict banking and healthcare jurisdictions?",
        answer: "We implement fine-grained row/column-level access control, automated dynamic data masking, and cryptographic tokenization at rest and in transit."
      },
      {
        question: "What is the difference between a traditional data warehouse and a modern lakehouse?",
        answer: "A lakehouse combines the ACID reliability, schema enforcement, and SQL speed of a data warehouse with the low cost and direct ML file access of a data lake."
      }
    ],
    featuredCaseStudySlug: "healthcare-intelligence-system"
  },
  {
    id: "cap-05",
    number: "05",
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Zero-trust defensive architectures and cryptographic security engineered from the core.",
    shortDescription: "Proactive threat modeling, identity governance, zero-trust network access, DevSecOps automation, and quantum-safe cryptographic engineering designed to withstand sophisticated nation-state attack vectors.",
    fullOverview: "In a world of distributed cloud perimeter erosion, perimeter-based security is obsolete. Vertexa engineers systems according to strict Zero-Trust principles—authenticating and authorizing every request dynamically, isolating workloads in micro-segmented containers, and automating incident response.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      {
        title: "Zero-Trust Architecture & Micro-Segmentation",
        description: "Identity-aware access proxies, least-privilege role matrices, and granular network isolation preventing lateral movement."
      },
      {
        title: "DevSecOps & Automated Code Security",
        description: "Static/dynamic application security testing (SAST/DAST), container scanning, and automated software bill of materials (SBOM) in CI/CD."
      },
      {
        title: "Cloud Security Posture Management (CSPM)",
        description: "Continuous compliance auditing, automated misconfiguration remediation, and IAM boundary enforcement across multi-cloud tenants."
      },
      {
        title: "Cryptographic Architecture & Key Management",
        description: "Hardware security module (HSM) integration, envelope encryption, and post-quantum cryptographic readiness planning."
      }
    ],
    technologies: ["HashiCorp Vault", "OIDC/OAuth2", "Keycloak", "Palo Alto Prisma", "Wiz", "Snyk", "Aqua Security", "WireGuard", "SPIFFE/SPIRE", "Cert-Manager", "Trivy"],
    businessBenefits: [
      {
        metric: "100%",
        label: "Audit Readiness",
        detail: "Continuous automated compliance reporting for SOC2, ISO27001, and HIPAA."
      },
      {
        metric: "0",
        label: "Unverified Lateral Access",
        detail: "Micro-segmentation isolates individual services from full network exposure."
      },
      {
        metric: "-70%",
        label: "Vulnerability Resolution Time",
        detail: "Automated vulnerability patching within continuous integration pipelines."
      }
    ],
    architectureLayers: [
      {
        name: "Identity & Access Broker",
        description: "Contextual multi-factor authentication and dynamic short-lived token issuance.",
        tech: ["OIDC", "HashiCorp Vault", "Okta", "SPIFFE"]
      },
      {
        name: "Service Isolation & Encryption",
        description: "Automated mutual TLS between all microservices and transparent data envelope encryption.",
        tech: ["Istio mTLS", "KMS", "HashiCorp Boundary"]
      },
      {
        name: "Security Intelligence & SIEM",
        description: "Centralized audit log telemetry and automated security incident response runbooks.",
        tech: ["Wiz", "Splunk", "AWS GuardDuty", "Falco"]
      }
    ],
    processSteps: [
      {
        step: "Phase 1",
        title: "Threat Modeling & Attack Surface Audit",
        description: "Mapping critical asset boundaries, reviewing credential lifecycles, and identifying architectural vulnerabilities."
      },
      {
        step: "Phase 2",
        title: "Zero-Trust Policy & IAM Modernization",
        description: "Enforcing least-privilege roles, short-lived machine credentials, and automated key rotation."
      },
      {
        step: "Phase 3",
        title: "Pipeline Security & Tool Integration",
        description: "Embedding SAST, container vulnerability scanning, and automated policy gates into Git repositories."
      },
      {
        step: "Phase 4",
        title: "Penetration Testing & Red Team Validation",
        description: "Rigorous offensive simulation to validate defensive postures and incident response readiness."
      }
    ],
    faqs: [
      {
        question: "How does Vertexa help companies prepare for Post-Quantum Cryptography?",
        answer: "We audit your cryptographic inventory, assess algorithms vulnerable to Shor's algorithm, and introduce hybrid quantum-resistant key-exchange standards."
      },
      {
        question: "Can zero-trust security be implemented without slowing down developer velocity?",
        answer: "Yes. By automating credentials via ephemeral tokens, developers receive seamless just-in-time access without manual ticket delays."
      }
    ],
    featuredCaseStudySlug: "ai-risk-intelligence-platform"
  },
  {
    id: "cap-06",
    number: "06",
    slug: "enterprise-transformation",
    title: "Enterprise Transformation",
    tagline: "Modernizing legacy core architectures into agile, composable digital powerhouses.",
    shortDescription: "Strategic technology roadmap consulting, monolithic mainframe decomposition, domain-driven design, and engineering organization transformation that unlock lasting institutional velocity.",
    fullOverview: "True transformation goes beyond swapping software—it requires reshaping how technology, architecture, and teams interact. We help executive leadership transition complex, decades-old legacy monoliths into composable, event-driven architectures with modern engineering cultures.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    offerings: [
      {
        title: "Core System Decomposition & Modernization",
        description: "Phased deconstruction of legacy mainframes, monolithic databases, and ERPs into decoupled domain services with zero business interruption."
      },
      {
        title: "API-First & Composable Architecture",
        description: "Designing unified enterprise service meshes and API gateways that unlock internal systems for modern ecosystem innovation."
      },
      {
        title: "Engineering Culture & Capability Uplift",
        description: "Co-engineering alongside client teams to institute high-performance DevOps, automated testing, and agile release practices."
      },
      {
        title: "Technology M&A Due Diligence & Integration",
        description: "Technical debt auditing, architectural risk assessment, and rapid post-merger systems integration."
      }
    ],
    technologies: ["Domain-Driven Design", "Microservices", "Event Sourcing", "gRPC", "Kafka", "Kong Gateway", "Docker", "Java/Spring", "Go", "TypeScript", "OpenAPI"],
    businessBenefits: [
      {
        metric: "5x",
        label: "Feature Release Cadence",
        detail: "Decoupled microservices allow independent domain teams to deploy continuously."
      },
      {
        metric: "-65%",
        label: "Legacy Maintenance Overhead",
        detail: "Eliminates high-cost legacy mainframe compute licenses and fragile batch jobs."
      },
      {
        metric: "100%",
        label: "System Decoupling",
        detail: "API-first contracts isolate internal modules, enabling seamless vendor swapping."
      }
    ],
    architectureLayers: [
      {
        name: "Enterprise API Gateway & Facade",
        description: "Unified entry point standardizing authentication, rate limiting, and protocol translation.",
        tech: ["Kong Gateway", "Apigee", "Envoy"]
      },
      {
        name: "Domain Service Mesh",
        description: "Bounded contexts communicating via asynchronous events and lightweight gRPC protocols.",
        tech: ["Go", "Node.js", "Java Spring Boot", "Kafka"]
      },
      {
        name: "Legacy Adapter & Anti-Corruption Layer",
        description: "Bridges connecting modern event streams with mainframe and legacy relational backends.",
        tech: ["Debezium", "IBM MQ Adapters", "Change Data Capture"]
      }
    ],
    processSteps: [
      {
        step: "Phase 1",
        title: "Event Storming & Domain Modeling",
        description: "Collaborative domain-driven mapping to discover bounded contexts, data ownership, and dependencies."
      },
      {
        step: "Phase 2",
        title: "Strangler Pattern Pilot Implementation",
        description: "Creating initial API facades and extracting the first high-value domain service into production."
      },
      {
        step: "Phase 3",
        title: "Systemic Service Extraction & Co-Engineering",
        description: "Incrementally migrating workloads while upskilling internal client engineering squads."
      },
      {
        step: "Phase 4",
        title: "Legacy Sunset & Operating Model Finalization",
        description: "Decommissioning legacy mainframes, validating cost savings, and handing over autonomous operational frameworks."
      }
    ],
    faqs: [
      {
        question: "What is the biggest risk in enterprise legacy modernization, and how does Vertexa prevent it?",
        answer: "The 'big bang' rewrite failure. We exclusively use the incremental Strangler Fig pattern, ensuring measurable business value is deployed to production every 4-6 weeks without risking the entire enterprise."
      },
      {
        question: "How do you ensure our internal team can maintain the new systems after Vertexa departs?",
        answer: "We operate in a pairing/co-engineering model where your developers work directly inside the codebase alongside our principal architects from day one."
      }
    ],
    featuredCaseStudySlug: "global-aerospace-predictive-maintenance"
  }
];
