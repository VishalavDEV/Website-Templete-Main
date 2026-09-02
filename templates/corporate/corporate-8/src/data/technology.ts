export interface TechLayer {
  id: string;
  level: number;
  name: string;
  subtitle: string;
  description: string;
  protocols: string[];
  technologies: {
    name: string;
    category: string;
    role: string;
  }[];
  architecturalPrinciples: string[];
}

export const technologyEcosystemLayers: TechLayer[] = [
  {
    id: "experience",
    level: 1,
    name: "Experience & Interface",
    subtitle: "High-craft, accessible, sub-100ms multi-platform clients",
    description: "The presentation tier engineered for zero visual latency, accessible design systems, and stateful offline-first real-time user experiences.",
    protocols: ["HTTP/3", "WebSocket", "gRPC-Web", "WebAssembly"],
    technologies: [
      { name: "React 19", category: "Core UI", role: "Concurrent rendering & Server Actions" },
      { name: "TypeScript", category: "Language", role: "Strict compile-time type safety" },
      { name: "Tailwind CSS", category: "Design", role: "Atomic design token orchestration" },
      { name: "Framer Motion", category: "Animation", role: "Physics-based gesture & layout transitions" },
      { name: "Swift / Kotlin", category: "Native Mobile", role: "Platform-native hardware acceleration" },
      { name: "Next.js", category: "Framework", role: "Edge-rendered hybrid applications" }
    ],
    architecturalPrinciples: [
      "Sub-80ms First Contentful Paint globally",
      "Strict WCAG 2.2 AAA accessibility compliance",
      "Atomic design token replication across squads"
    ]
  },
  {
    id: "applications",
    level: 2,
    name: "Applications & Microservices",
    subtitle: "Domain-driven, event-sourced service fabrics",
    description: "Decoupled bounded contexts communicating asynchronously via high-throughput gRPC contracts and event streams.",
    protocols: ["gRPC", "Protobuf", "GraphQL", "REST", "OpenAPI"],
    technologies: [
      { name: "Node.js", category: "Runtime", role: "High-concurrency API gateways" },
      { name: "Python / FastAPI", category: "Backend", role: "Asynchronous scientific calculation" },
      { name: "Java / Spring Boot", category: "Enterprise", role: "Transactional core domain microservices" },
      { name: "Go", category: "Systems", role: "Ultra-low-latency distributed workers" },
      { name: "Rust", category: "Performance", role: "Memory-safe high-throughput calculation" },
      { name: "Kong Gateway", category: "Routing", role: "Enterprise API traffic governance" }
    ],
    architecturalPrinciples: [
      "Strict Domain-Driven Design (DDD) boundaries",
      "Zero-downtime rolling contract versioning",
      "Stateless compute with distributed token validation"
    ]
  },
  {
    id: "intelligence",
    level: 3,
    name: "AI & Cognitive Intelligence",
    subtitle: "Deterministic multi-agent reasoning and fine-tuned models",
    description: "Autonomous reasoning agents, quantized small language models, and high-throughput inference engines with zero hallucination gates.",
    protocols: ["CUDA", "vLLM", "Triton gRPC", "OpenAI Protocol"],
    technologies: [
      { name: "PyTorch", category: "ML Framework", role: "Foundation model fine-tuning & research" },
      { name: "TensorFlow", category: "ML Framework", role: "Edge vision and neural classification" },
      { name: "vLLM", category: "Inference", role: "High-throughput PagedAttention serving" },
      { name: "NVIDIA TensorRT", category: "Acceleration", role: "GPU kernel graph compilation" },
      { name: "LangGraph", category: "Agentic", role: "Multi-agent cyclic graph orchestration" },
      { name: "Qdrant / Milvus", category: "Vector DB", role: "Billion-scale dense vector retrieval" }
    ],
    architecturalPrinciples: [
      "Deterministic guardrails on 100% of generated outputs",
      "Air-gapped sovereign model execution in VPC",
      "Continuous hallucination and drift telemetry"
    ]
  },
  {
    id: "data",
    level: 4,
    name: "Data & Lakehouse Fabric",
    subtitle: "Real-time event streaming and petabyte-scale analytics",
    description: "Decoupled distributed messaging and unified table formats providing sub-second streaming analytics and enterprise lineage.",
    protocols: ["Kafka Wire", "Apache Arrow", "Parquet", "ACID Iceberg"],
    technologies: [
      { name: "Apache Kafka", category: "Streaming", role: "Distributed real-time event log" },
      { name: "Apache Flink", category: "Stream Compute", role: "Complex real-time event processing" },
      { name: "Snowflake", category: "Warehouse", role: "Elastic enterprise SQL analytics" },
      { name: "Databricks", category: "Lakehouse", role: "Unified Spark & Delta Lake ML platform" },
      { name: "PostgreSQL", category: "OLTP", role: "Transactional ACID relational core" },
      { name: "ClickHouse", category: "OLAP", role: "Sub-second real-time telemetry analytics" },
      { name: "dbt", category: "Transformation", role: "Modular SQL lineage & testing" }
    ],
    architecturalPrinciples: [
      "Medallion architecture (Bronze/Silver/Gold)",
      "Strict data contract enforcement at ingestion",
      "End-to-end cryptographic data lineage"
    ]
  },
  {
    id: "cloud",
    level: 5,
    name: "Cloud & Sovereign Infrastructure",
    subtitle: "Active-active multi-region Kubernetes clusters",
    description: "Self-healing, automated infrastructure-as-code deployed across AWS, Azure, Google Cloud, and private edge nodes.",
    protocols: ["BGP Anycast", "VXLAN", "eBPF", "IPSec"],
    technologies: [
      { name: "Kubernetes", category: "Orchestration", role: "Self-healing container scheduling" },
      { name: "AWS", category: "Hyperscaler", role: "Global scale infrastructure primitives" },
      { name: "Microsoft Azure", category: "Enterprise Cloud", role: "Hybrid enterprise identity integration" },
      { name: "Google Cloud", category: "Data/AI Cloud", role: "High-density GPU & BigQuery clusters" },
      { name: "Terraform / OpenTofu", category: "IaC", role: "Declarative multi-cloud provisioning" },
      { name: "Docker", category: "Containers", role: "Immutable application packaging" },
      { name: "ArgoCD", category: "GitOps", role: "Continuous declarative synchronization" }
    ],
    architecturalPrinciples: [
      "Active-active multi-region failover (<30s)",
      "Immutable infrastructure via GitOps workflows",
      "Automated FinOps resource rightsizing"
    ]
  },
  {
    id: "security",
    level: 6,
    name: "Security & Zero-Trust Governance",
    subtitle: "Cryptographic defense, micro-segmentation, and compliance",
    description: "Continuous identity verification, hardware-backed encryption, and automated compliance policy gates.",
    protocols: ["mTLS", "OIDC", "SPIFFE/SPIRE", "AES-256-GCM"],
    technologies: [
      { name: "HashiCorp Vault", category: "Secrets", role: "Dynamic short-lived credential broker" },
      { name: "Istio Service Mesh", category: "Network", role: "Zero-trust mutual TLS & traffic encryption" },
      { name: "Wiz / Prisma", category: "CSPM", role: "Continuous cloud vulnerability auditing" },
      { name: "Keycloak / Okta", category: "IAM", role: "Enterprise federation & contextual MFA" },
      { name: "Snyk / Trivy", category: "AppSec", role: "Automated vulnerability scanning in CI/CD" },
      { name: "Post-Quantum HSMs", category: "Crypto", role: "Quantum-resistant key encapsulation" }
    ],
    architecturalPrinciples: [
      "Never trust, always cryptographically verify",
      "Zero persistent root credentials anywhere",
      "Continuous automated compliance monitoring"
    ]
  }
];
