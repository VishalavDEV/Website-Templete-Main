export const services = [
  {
    id: "artificial-intelligence",
    slug: "artificial-intelligence",
    number: "01",
    title: "Artificial Intelligence & ML",
    shortTitle: "AI & Automation",
    tagline: "Transform autonomous decision-making and cognitive enterprise capabilities.",
    description: "Architect, deploy, and scale enterprise-grade AI models, agentic workflows, and predictive analytics that yield immediate operational efficiency and defensible competitive advantages.",
    heroDescription: "From generative foundation models to autonomous multi-agent systems, we engineer bespoke AI systems integrated directly into your core business pipelines with strict governance and security.",
    icon: "BrainCircuit",
    accentColor: "#0284C7",
    stats: [
      { label: "Productivity Increase", value: "3.8x" },
      { label: "Decision Latency", value: "-75%" },
      { label: "Deployment Success Rate", value: "99.4%" }
    ],
    capabilities: [
      {
        title: "Enterprise Agentic Workflows",
        desc: "Autonomous multi-agent orchestration systems capable of handling multi-step reasoning, automated verification, and real-time execution."
      },
      {
        title: "Custom LLM & Foundation Fine-Tuning",
        desc: "Domain-adapted proprietary models trained on your confidential data with strict air-gapped security and enterprise RAG architecture."
      },
      {
        title: "Predictive Analytics & Forecasting",
        desc: "High-throughput probabilistic models for inventory optimization, algorithmic demand pricing, and risk forecasting."
      },
      {
        title: "Computer Vision & Visual Intelligence",
        desc: "Real-time edge and cloud visual processing for automated quality inspection, defect detection, and spatial analytics."
      }
    ],
    benefits: [
      "Eliminate repetitive manual bottlenecks with 24/7 intelligent processing",
      "Unlock deep insights trapped in unstructured corporate documents and telemetry",
      "Deploy self-correcting pipelines that continuously learn from operational feedback",
      "Maintain regulatory compliance and zero-leakage data confidentiality"
    ],
    techStack: ["PyTorch", "TensorFlow", "LangChain", "OpenAI / Claude APIs", "vLLM", "Milvus", "Kubeflow", "Pinecone"],
    process: [
      { step: "01", name: "Data & Feasibility Audit", desc: "Evaluate readiness, data lineage, compute constraints, and high-ROI opportunities." },
      { step: "02", name: "Proof of Concept & Validation", desc: "Build precision sandboxes, validate accuracy thresholds, and prove ROI within 30 days." },
      { step: "03", name: "Production Engineering & Fine-Tuning", desc: "Scale architecture, configure guardrails, latency caching, and vector indexing." },
      { step: "04", name: "Enterprise Rollout & Continuous Drift Tuning", desc: "Integrate with core ERP/CRM systems, continuous drift monitoring, and staff enablement." }
    ],
    industriesServed: ["Financial Services", "Healthcare & Life Sciences", "Retail & Commerce", "Manufacturing", "Logistics"],
    faqs: [
      {
        q: "How does NEXORA guarantee data privacy when training AI models?",
        a: "We deploy isolated VPC or on-premise compute instances where your data never leaves your perimeter or touches public training pools. All models conform to SOC2 Type II, HIPAA, and ISO 27001 standards."
      },
      {
        q: "What is the typical timeline to deploy an enterprise AI solution?",
        a: "A production-ready MVP is typically operational in 4–6 weeks, with full multi-system enterprise rollout completed in 12–16 weeks."
      },
      {
        q: "Can we integrate your AI solutions with our existing legacy systems?",
        a: "Yes. Our engineering teams specialize in building resilient API adapters, event-driven streaming bridges, and webhook orchestrators for legacy mainframe and ERP stacks."
      }
    ]
  },
  {
    id: "software-engineering",
    slug: "software-engineering",
    number: "02",
    title: "Software & Digital Engineering",
    shortTitle: "Software Engineering",
    tagline: "Mission-critical architectures engineered for speed, scale, and longevity.",
    description: "Build robust, high-performance web, mobile, and distributed systems tailored to complex enterprise requirements with modern paradigms and rigorous testing.",
    heroDescription: "We engineer resilient software platforms that scale from thousands to millions of concurrent users with zero downtime, ultra-low latency, and elegant design.",
    icon: "Code2",
    accentColor: "#38BDF8",
    stats: [
      { label: "Uptime Reliability", value: "99.99%" },
      { label: "Deployment Frequency", value: "10x" },
      { label: "Test Coverage", value: ">95%" }
    ],
    capabilities: [
      {
        title: "Modern Microservices & Event Architecture",
        desc: "Decoupled domain-driven microservices powered by Kafka, gRPC, and GraphQL for peak scalability."
      },
      {
        title: "Enterprise Web & Multi-Platform Apps",
        desc: "Sub-second response web applications, native iOS/Android, and high-performance desktop tools."
      },
      {
        title: "API Ecosystems & Developer Portals",
        desc: "Secure, monetizable, and developer-friendly public and internal APIs with automated OpenAPI specs."
      },
      {
        title: "High-Frequency Transaction Engines",
        desc: "Low-latency processing engines capable of handling thousands of mission-critical transactions per second."
      }
    ],
    benefits: [
      "Accelerate time-to-market with automated CI/CD and modular architectures",
      "Reduce technical debt and refactoring costs by up to 60%",
      "Deliver fluid, responsive user experiences across all devices and global regions",
      "Guarantee strict type-safety, resilience patterns, and automated failovers"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Go", "Rust", "Python", "PostgreSQL", "Redis", "Kafka", "Docker"],
    process: [
      { step: "01", name: "System Architecture Design", desc: "Define domain boundaries, database schemas, resilience patterns, and security topology." },
      { step: "02", name: "Iterative Sprint Development", desc: "2-week agile cycles with continuous integration, unit/integration testing, and demo builds." },
      { step: "03", name: "Performance & Security Stress Testing", desc: "Rigorous load testing, penetration audits, chaos engineering, and zero-day patch validation." },
      { step: "04", name: "Blue-Green Deployment & Handover", desc: "Zero-downtime release orchestration, observability dashboards, and thorough engineering documentation." }
    ],
    industriesServed: ["Financial Services", "Retail & Commerce", "Technology & SaaS", "Logistics", "Healthcare"],
    faqs: [
      {
        q: "What coding standards and quality gates do you enforce?",
        a: "We adhere strictly to clean code principles, automated linting, >90% test coverage, mandatory multi-peer code reviews, and automated SAST/DAST security scanning."
      },
      {
        q: "Do we retain complete intellectual property ownership?",
        a: "100%. All source code, infrastructure as code, design assets, and documentation are transferred entirely to your organization upon creation."
      }
    ]
  },
  {
    id: "cloud-transformation",
    slug: "cloud-transformation",
    number: "03",
    title: "Cloud Modernization & DevOps",
    shortTitle: "Cloud Transformation",
    tagline: "Next-generation cloud infrastructure built for resilience, agility, and cost efficiency.",
    description: "Migrate legacy workloads, orchestrate multi-cloud Kubernetes clusters, automate GitOps pipelines, and optimize operational expenditure with cloud-native methodologies.",
    heroDescription: "Transform monolithic infrastructure into elastic, self-healing cloud ecosystems across AWS, Azure, and GCP designed for 99.999% availability.",
    icon: "CloudCog",
    accentColor: "#0EA5E9",
    stats: [
      { label: "Cloud Cost Optimization", value: "38%" },
      { label: "MTTR Reduction", value: "65%" },
      { label: "Deploy Time", value: "< 4 mins" }
    ],
    capabilities: [
      {
        title: "Multi-Cloud & Hybrid Architecture",
        desc: "Resilient topologies spanning AWS, Azure, and Google Cloud with unified identity and automated traffic shifting."
      },
      {
        title: "Kubernetes & Container Orchestration",
        desc: "Enterprise EKS/GKE clusters with automated horizontal pod autoscaling, service mesh (Istio), and GitOps."
      },
      {
        title: "Infrastructure as Code (IaC)",
        desc: "Immutable infrastructure defined via Terraform, OpenTofu, and Pulumi for auditable, reproducible environments."
      },
      {
        title: "FinOps & Cloud Cost Governance",
        desc: "Comprehensive cloud spend analysis, spot instance orchestration, and rightsizing that cuts waste immediately."
      }
    ],
    benefits: [
      "Eliminate single point of failures with geo-distributed multi-region redundancy",
      "Empower developer teams to spin up ephemeral staging environments in minutes",
      "Dramatically reduce cloud hosting bills through automated workload rightsizing",
      "Ensure compliance with automated infrastructure policy enforcement"
    ],
    techStack: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "ArgoCD", "Prometheus", "Datadog", "Istio"],
    process: [
      { step: "01", name: "Cloud Readiness & TCO Assessment", desc: "Discover dependencies, calculate total cost of ownership, and chart migration waves." },
      { step: "02", name: "Landing Zone & Security Foundation", desc: "Provision multi-account guardrails, IAM boundaries, encryption keys, and network VPC peering." },
      { step: "03", name: "Workload Migration & Containerization", desc: "Execute automated lift-and-shift or cloud-native container refactoring with minimal downtime." },
      { step: "04", name: "FinOps & SRE Optimization", desc: "Establish automated scaling policies, SLO/SLA monitoring, and continuous cost optimization." }
    ],
    industriesServed: ["Financial Services", "Technology & SaaS", "Healthcare", "Manufacturing", "Retail"],
    faqs: [
      {
        q: "How do you avoid service downtime during large-scale cloud migrations?",
        a: "We utilize strangler fig patterns, bidirectional database replication, and canary traffic routing so legacy and cloud systems run concurrently until stability is proven."
      }
    ]
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    number: "04",
    title: "Cybersecurity & Zero Trust",
    shortTitle: "Cybersecurity",
    tagline: "Proactive threat intelligence, zero-trust architecture, and compliance resilience.",
    description: "Safeguard enterprise assets against sophisticated vectors with continuous penetration testing, automated incident response, identity governance, and compliance readiness.",
    heroDescription: "Implement zero-trust security postures that protect your critical intellectual property, customer data, and distributed workforce against modern threat actors.",
    icon: "ShieldCheck",
    accentColor: "#38BDF8",
    stats: [
      { label: "Threat Detection Rate", value: "99.9%" },
      { label: "Compliance Pass Rate", value: "100%" },
      { label: "Response Time", value: "< 5 mins" }
    ],
    capabilities: [
      {
        title: "Zero Trust Architecture (ZTA)",
        desc: "Micro-segmentation, identity-aware proxies, and continuous context verification across all endpoints."
      },
      {
        title: "Application Security & DevSecOps",
        desc: "Embedding automated SAST, DAST, and dependency vulnerability scanning directly into developer PR workflows."
      },
      {
        title: "SOC Automation & Threat Hunting",
        desc: "AI-assisted SIEM/SOAR setups that filter noise and autonomously quarantine suspicious network telemetry."
      },
      {
        title: "Regulatory Compliance (SOC2, ISO, HIPAA)",
        desc: "End-to-end audit readiness, evidence collection automation, and continuous compliance posture management."
      }
    ],
    benefits: [
      "Prevent catastrophic ransomware and data breach events through proactive controls",
      "Attain enterprise compliance certifications months ahead of schedule",
      "Empower secure remote collaboration without clunky, brittle VPN bottlenecks",
      "Gain real-time visibility into your entire digital threat surface"
    ],
    techStack: ["CrowdStrike", "Wiz", "HashiCorp Vault", "Snyk", "Okta", "Splunk", "Palo Alto Networks", "Cloudflare"],
    process: [
      { step: "01", name: "Vulnerability & Threat Modeling", desc: "Simulate red-team attacks, audit access controls, and catalog attack vectors." },
      { step: "02", name: "Zero Trust Roadmap Blueprint", desc: "Design least-privilege policies, secret management vaults, and network segmentation." },
      { step: "03", name: "DevSecOps & Tooling Integration", desc: "Deploy automated security gates into code repositories and cloud environments." },
      { step: "04", name: "24/7 Managed SOC & Incident Response", desc: "Activate telemetry alerting, run periodic tabletop simulations, and update compliance controls." }
    ],
    industriesServed: ["Financial Services", "Healthcare", "Technology & SaaS", "Government", "Logistics"],
    faqs: [
      {
        q: "How do you help us pass SOC2 Type II or ISO 27001 audits?",
        a: "We configure automated evidence collection via platforms like Vanta/Drata, remediate infrastructure gaps, draft compliance policies, and guide you through auditor review."
      }
    ]
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    number: "05",
    title: "Data Engineering & Analytics",
    shortTitle: "Data & Analytics",
    tagline: "Unify fragmented data lakes into real-time analytical powerhouses.",
    description: "Design modern data mesh architectures, real-time streaming pipelines, and executive BI dashboards that convert raw data into actionable strategic alpha.",
    heroDescription: "Transform siloed company databases into high-performance analytical lakes and real-time streaming pipelines that power instant executive insights.",
    icon: "DatabaseZap",
    accentColor: "#0284C7",
    stats: [
      { label: "Query Speedup", value: "14x" },
      { label: "Data Freshness", value: "Real-Time" },
      { label: "Pipeline Reliability", value: "99.95%" }
    ],
    capabilities: [
      {
        title: "Modern Data Stack & Lakehouse",
        desc: "Snowflake, Databricks, and BigQuery architectures optimized for lightning-fast SQL queries and petabyte scale."
      },
      {
        title: "Real-Time Streaming Pipelines",
        desc: "Sub-second event streaming with Kafka, Flink, and dbt for instant operational visibility and reaction."
      },
      {
        title: "Data Governance & Lineage",
        desc: "Automated data cataloging, quality checks, privacy masking, and lineage tracking across all repositories."
      },
      {
        title: "Executive BI & Embedded Analytics",
        desc: "Custom interactive dashboards and embedded customer-facing analytical portals with granular permissions."
      }
    ],
    benefits: [
      "Eliminate stale weekly spreadsheets in favor of live streaming executive metrics",
      "Empower department leaders to run self-service ad-hoc queries with confidence",
      "Cut database licensing and query compute costs by restructuring partitions",
      "Standardize single-source-of-truth metrics across finance, product, and sales"
    ],
    techStack: ["Snowflake", "Databricks", "dbt", "Apache Kafka", "ClickHouse", "BigQuery", "Apache Spark", "Tableau"],
    process: [
      { step: "01", name: "Data Architecture Audit", desc: "Map schemas, extract ingestion bottlenecks, and identify data duplication." },
      { step: "02", name: "Lakehouse & Pipeline Modeling", desc: "Build automated dbt transformations, clean medallion architecture (Bronze/Silver/Gold)." },
      { step: "03", name: "Data Quality & Contract Setup", desc: "Implement Great Expectations validation tests, schema enforcement, and alerting." },
      { step: "04", name: "BI Visualization & Self-Service", desc: "Deploy interactive dashboards, semantic layers, and train internal stakeholder teams." }
    ],
    industriesServed: ["Retail & Commerce", "Financial Services", "Logistics", "Healthcare", "Technology & SaaS"],
    faqs: [
      {
        q: "What is the advantage of a Data Mesh over traditional data warehouses?",
        a: "Data Mesh treats data as a product owned by domain teams, preventing central data engineering bottlenecks while providing shared governance and interoperability."
      }
    ]
  },
  {
    id: "digital-transformation",
    slug: "digital-transformation",
    number: "06",
    title: "Digital Transformation & Strategy",
    shortTitle: "Digital Strategy",
    tagline: "Holistic strategy to accelerate organizational agility and digital maturity.",
    description: "Align technology roadmaps with business vision. We assist C-suite leadership in modernizing legacy business models, culture, and customer touchpoints for sustained competitive superiority.",
    heroDescription: "Bridge the gap between strategic vision and technical execution with proven transformation frameworks that deliver measurable EBITDA improvements.",
    icon: "TrendingUp",
    accentColor: "#38BDF8",
    stats: [
      { label: "Average ROI", value: "320%" },
      { label: "Cycle Time Cut", value: "54%" },
      { label: "Digital Adoption", value: "96%" }
    ],
    capabilities: [
      {
        title: "Technology Roadmap & Architecture Blueprint",
        desc: "Multi-year transformation blueprints aligning executive business objectives with actionable engineering milestones."
      },
      {
        title: "Legacy Core Modernization",
        desc: "Phased replacement of monolithic legacy systems without disrupting ongoing operational continuity."
      },
      {
        title: "Product Operating Model Transition",
        desc: "Transforming traditional IT project organizations into high-velocity, outcome-driven product squads."
      },
      {
        title: "Customer Experience & Omnichannel Strategy",
        desc: "Unifying friction-free customer journeys across digital, mobile, in-store, and partner ecosystems."
      }
    ],
    benefits: [
      "Break down departmental silos and accelerate cross-functional innovation cycles",
      "Unlock new recurring digital revenue streams and digital business models",
      "Empower employees with modern digital tooling and automated workflows",
      "Gain board-level clarity with transparent milestone tracking and measurable KPIs"
    ],
    techStack: ["Enterprise Architecture", "Domain-Driven Design", "Agile at Scale", "Design Thinking", "Value Stream Mapping"],
    process: [
      { step: "01", name: "Maturity Diagnostic & Value Mapping", desc: "Assess digital capability gaps, benchmark against competitors, and identify highest-value levers." },
      { step: "02", name: "Target Operating Model Design", desc: "Formulate technical architecture, organizational topology, and investment capital allocation." },
      { step: "03", name: "Lighthouse Pilot Execution", desc: "Launch high-visibility pilot initiatives to demonstrate immediate wins and build cultural momentum." },
      { step: "04", name: "Enterprise-Wide Scaling", desc: "Scale methodologies, institute continuous governance, and operationalize agile delivery." }
    ],
    industriesServed: ["Financial Services", "Manufacturing", "Retail & Commerce", "Healthcare", "Logistics"],
    faqs: [
      {
        q: "How do you ensure employees adopt new digital workflows and systems?",
        a: "We embed change management, hands-on enablement workshops, and incentive alignment from day one, resulting in >90% sustained adoption rates."
      }
    ]
  }
];
