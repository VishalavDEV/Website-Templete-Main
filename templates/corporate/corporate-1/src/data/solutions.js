export const solutions = [
  {
    id: "intelligent-automation",
    slug: "intelligent-automation",
    badge: "AI & WORKFLOWS",
    title: "Intelligent Workflow Automation",
    subtitle: "Automate complex, multi-system operational workflows with self-governing AI agents.",
    description: "Modern enterprise operations lose millions to disconnected systems and manual data re-entry. Our Intelligent Automation solution orchestrates cognitive AI agents that review documents, validate cross-system records, execute API transactions, and flag anomalies without human latency.",
    problem: "Operational bottlenecks in compliance checks, claims adjudication, customer onboarding, and supply reconciliation causing massive backlogs and high human error rates.",
    solution: "A unified AI orchestration layer that ingests unstructured multimodal inputs, applies contextual reasoning gates, interacts with existing core ERP/CRM databases, and delivers end-to-end straight-through processing.",
    architectureHighlight: "Event-driven microservices + Localized LLM Inference + Zero-trust IAM Vaults + Real-time Dead-Letter Queueing",
    keyBenefits: [
      "90% reduction in document verification and approval processing time",
      "99.8% precision with automated human-in-the-loop fallback workflows",
      "Seamless integration over existing legacy software without code refactoring",
      "Comprehensive tamper-proof audit trails for regulatory compliance"
    ],
    techStack: ["LangGraph", "Python", "Apache Kafka", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    relatedIndustries: ["Financial Services", "Healthcare", "Logistics", "Retail"],
    metrics: [
      { value: "85%", label: "Manual Effort Cut" },
      { value: "3.2x", label: "Throughput Surge" },
      { value: "$2.4M", label: "Avg Annual Cost Saved" }
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "digital-platforms",
    slug: "digital-platforms",
    badge: "PLATFORM ENGINEERING",
    title: "Modern Digital Platforms & Ecosystems",
    subtitle: "Build scalable customer-facing products, developer platforms, and API marketplaces.",
    description: "Winning in digital markets requires continuous product experimentation and rapid feature velocity. We design and build enterprise digital platforms with composable architectures, lightning-fast web/mobile interfaces, and robust multi-tenant backends.",
    problem: "Monolithic legacy codebases that take months to ship simple features, suffer from performance degradation, and cannot support modern omnichannel user expectations.",
    solution: "A modular, API-first headless platform architecture featuring serverless edge caching, design-system-driven component libraries, and automated canary deployment pipelines.",
    architectureHighlight: "Composable Headless Micro-frontends + GraphQL Gateway + Multi-region Edge CDN + Event Sourcing",
    keyBenefits: [
      "Reduce new feature deployment lead times from weeks to minutes",
      "Deliver sub-second page loads worldwide with global edge caching",
      "Support multi-brand, multi-currency, and multi-lingual tenant partitioning",
      "Boost customer conversion and retention across mobile and desktop"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "GraphQL", "Redis", "PostgreSQL", "Cloudflare"],
    relatedIndustries: ["Retail & Commerce", "Technology & SaaS", "Financial Services", "Healthcare"],
    metrics: [
      { value: "4.5x", label: "Release Velocity" },
      { value: "< 200ms", label: "Global Edge Latency" },
      { value: "+42%", label: "Conversion Rate" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cloud-modernization",
    slug: "cloud-modernization",
    badge: "CLOUD ARCHITECTURE",
    title: "Resilient Cloud Modernization",
    subtitle: "Migrate legacy infrastructure into elastic, auto-healing Kubernetes and serverless clouds.",
    description: "Outdated on-premises servers and brittle virtual machines increase hosting overhead and create catastrophic single points of failure. We re-platform and re-architect your infrastructure into enterprise-grade cloud ecosystems designed for 99.999% uptime.",
    problem: "Spiraling data center maintenance costs, fragile backup routines, manual patching cycles, and inability to handle dynamic traffic spikes during peak business periods.",
    solution: "Automated cloud migration blueprints that decompose monoliths into containerized microservices managed by Kubernetes, codified with Terraform, and secured through automated zero-trust policies.",
    architectureHighlight: "Multi-Region Active-Active Kubernetes + GitOps ArgoCD + Service Mesh Istio + Distributed FinOps Policies",
    keyBenefits: [
      "Zero planned downtime during database and microservice deployments",
      "Automatic scaling that handles 100x traffic spikes seamlessly",
      "35–50% reduction in monthly infrastructure billing through FinOps rightsizing",
      "Immutable Infrastructure as Code allowing full disaster recovery rebuild in under 1 hour"
    ],
    techStack: ["AWS", "Kubernetes (EKS/GKE)", "Terraform", "ArgoCD", "Datadog", "HashiCorp Vault", "Istio"],
    relatedIndustries: ["Financial Services", "Manufacturing", "Healthcare", "Logistics"],
    metrics: [
      { value: "99.999%", label: "SLA Availability" },
      { value: "-40%", label: "Cloud Spend" },
      { value: "100%", label: "IaC Automation" }
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "data-mesh",
    slug: "data-mesh",
    badge: "DATA ARCHITECTURE",
    title: "Enterprise Data Mesh & Real-time BI",
    subtitle: "Democratize data ownership and power real-time executive decision intelligence.",
    description: "Centralized data teams often become severe organizational bottlenecks. Our Data Mesh implementation treats data as a decentralized product, giving business units autonomous ownership while guaranteeing global schema governance and sub-second analytics.",
    problem: "Siloed data lakes, stale reports taking days to compile, conflicting metric definitions across departments, and lack of real-time operational visibility.",
    solution: "Domain-oriented distributed data architectures with automated dbt transformation pipelines, streaming Kafka event hubs, and unified semantic cataloging.",
    architectureHighlight: "Medallion Lakehouse (Bronze/Silver/Gold) + Real-time Flink Processing + Semantic dbt Layer + Granular Row-level Security",
    keyBenefits: [
      "Transform days of batch reporting into real-time sub-minute streaming insights",
      "Establish a single verified source of truth for company financial and user metrics",
      "Enable non-technical department leaders to run self-service analytical queries",
      "Full data lineage auditability for GDPR, CCPA, and industry regulatory frameworks"
    ],
    techStack: ["Snowflake", "Databricks", "Apache Kafka", "dbt", "ClickHouse", "BigQuery", "Tableau"],
    relatedIndustries: ["Retail & Commerce", "Financial Services", "Logistics", "Technology & SaaS"],
    metrics: [
      { value: "14x", label: "Query Speedup" },
      { value: "100%", label: "Metric Consistency" },
      { value: "< 1s", label: "Streaming Latency" }
    ],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "cyber-resilience",
    slug: "cyber-resilience",
    badge: "ZERO TRUST",
    title: "Continuous Cyber Resilience & Governance",
    subtitle: "Protect mission-critical data assets and maintain continuous compliance posture.",
    description: "Modern threat vectors require moving beyond static perimeters. We implement comprehensive zero-trust architectures, automated DevSecOps pipelines, and 24/7 AI-assisted threat hunting to protect your enterprise against advanced persistent threats.",
    problem: "Expanding digital footprints, distributed remote teams, unpatched API vulnerabilities, and increasingly strict regulatory mandates with steep non-compliance penalties.",
    solution: "A unified defense-in-depth framework featuring continuous automated penetration testing, ephemeral secret rotation, identity-aware access gateways, and rapid incident response orchestration.",
    architectureHighlight: "Identity-Aware Access Proxies + Automated DevSecOps SAST/DAST + Continuous SIEM/SOAR + Micro-segmentation",
    keyBenefits: [
      "Neutralize unauthorized lateral movement across enterprise cloud networks",
      "Automate SOC2 Type II and ISO 27001 audit evidence collection",
      "Empower global engineering squads to code and deploy with built-in guardrails",
      "Sub-5 minute automated containment of detected suspicious telemetry"
    ],
    techStack: ["CrowdStrike", "Wiz", "HashiCorp Vault", "Snyk", "Okta", "Splunk", "Cloudflare"],
    relatedIndustries: ["Financial Services", "Healthcare", "Technology & SaaS", "Manufacturing"],
    metrics: [
      { value: "0", label: "Critical Breaches" },
      { value: "< 5m", label: "Mean Time to Contain" },
      { value: "100%", label: "Audit Pass Rate" }
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80"
  }
];
