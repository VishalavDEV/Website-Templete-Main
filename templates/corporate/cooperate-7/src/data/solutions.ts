export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  iconName: string;
  keyOutcomes: string[];
  architectureComponents: string[];
  targetAudience: string;
  roiStats: { metric: string; label: string }[];
}

export const solutionsData: SolutionItem[] = [
  {
    id: "sol-1",
    slug: "enterprise-ai-platform",
    title: "Enterprise AI & GenAI Platform",
    category: "Artificial Intelligence",
    tagline: "Autonomous multi-agent intelligence tailored for your private enterprise data.",
    description: "Deploy secure, self-hosted LLM agents, retrieval pipelines, and private inference layers that automate complex business reasoning while preserving absolute data sovereignty and regulatory compliance.",
    iconName: "BrainCircuit",
    keyOutcomes: [
      "Autonomous triage of 80%+ customer requests",
      "Instant contextual knowledge search over millions of internal documents",
      "Zero private data leakage with on-premise or VPC model execution",
      "Custom fine-tuned models achieving 96% task precision"
    ],
    architectureComponents: ["Multi-Agent Orchestrator", "Vector Database Cluster", "Hybrid RAG Pipeline", "Model Guardrail Gateways"],
    targetAudience: "Enterprises seeking to adopt generative AI safely without third-party vendor lock-in.",
    roiStats: [
      { metric: "80%", label: "Task automation rate" },
      { metric: "3.2x", label: "Analyst productivity lift" },
      { metric: "<2 mo", label: "Time-to-value deployment" }
    ]
  },
  {
    id: "sol-2",
    slug: "cloud-modernization-mesh",
    title: "Cloud Modernization & Migration Mesh",
    category: "Cloud Infrastructure",
    tagline: "Frictionless migration from monolithic legacy to cloud-native microservices.",
    description: "Accelerate your transition to Kubernetes, serverless, and multi-region infrastructure with automated migration accelerators, IaC blueprints, and battle-tested rollback mechanisms.",
    iconName: "Layers",
    keyOutcomes: [
      "Zero customer downtime throughout complex legacy database migrations",
      "Elastic auto-scaling responding to sudden 10x traffic spikes",
      "Automated multi-region failover in under 30 seconds",
      "Unified telemetry across all public clouds and on-prem clusters"
    ],
    architectureComponents: ["Kubernetes (EKS/GKE)", "Terraform IaC Mesh", "ArgoCD GitOps Pipeline", "Istio Service Mesh"],
    targetAudience: "Organizations looking to decommission costly physical data centers and eliminate tech debt.",
    roiStats: [
      { metric: "42%", label: "Cloud TCO reduction" },
      { metric: "99.999%", label: "High availability SLA" },
      { metric: "0 sec", label: "Downtime during switchover" }
    ]
  },
  {
    id: "sol-3",
    slug: "intelligent-data-lakehouse",
    title: "Intelligent Real-Time Data Lakehouse",
    category: "Data & Analytics",
    tagline: "Unified transactional and analytical data architecture for instant business queries.",
    description: "Bridge the gap between operational databases and BI dashboards with a modern lakehouse architecture that ingests millions of events per second with sub-second analytical querying.",
    iconName: "Database",
    keyOutcomes: [
      "Real-time fraud and anomaly detection on streaming transaction logs",
      "Single source of truth eliminating data silos across business units",
      "Sub-second executive BI query execution over petabytes of data",
      "Automated compliance with GDPR / CCPA right-to-be-forgotten rules"
    ],
    architectureComponents: ["Apache Iceberg / Delta Lake", "Kafka Streaming Hub", "Snowflake / BigQuery Warehouse", "dbt Transformation Core"],
    targetAudience: "Fintech, Retail, and Logistics companies handling high-velocity streaming data.",
    roiStats: [
      { metric: "12x", label: "Faster reporting cycle" },
      { metric: "99.9%", label: "Data delivery reliability" },
      { metric: "$1.8M", label: "Annual operational savings" }
    ]
  },
  {
    id: "sol-4",
    slug: "zero-trust-cybersecurity",
    title: "Zero-Trust Security & DevSecOps",
    category: "Cybersecurity",
    tagline: "Continuous automated verification, secrets management, and compliance automation.",
    description: "Embed continuous automated vulnerability scanning, posture management, and least-privilege identity access into every stage of your developer workflow and cloud topology.",
    iconName: "Lock",
    keyOutcomes: [
      "Shift-left automated code scanning blocking vulnerabilities before deployment",
      "Centralized dynamic secrets rotation and privileged access management",
      "Audit-ready SOC2 Type II, ISO 27001, and HIPAA compliance reports in 1 click",
      "Continuous automated red-team simulations and posture benchmarking"
    ],
    architectureComponents: ["HashiCorp Vault", "Wiz CSPM Engine", "SonarQube & Snyk Gates", "Zero-Trust IAM Controller"],
    targetAudience: "Healthcare, Financial, and GovTech firms facing stringent regulatory oversight.",
    roiStats: [
      { metric: "92%", label: "Vulnerability remediation speedup" },
      { metric: "100%", label: "Compliance audit readiness" },
      { metric: "Zero", label: "Unauthorized access incidents" }
    ]
  }
];
