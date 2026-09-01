export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  featured: boolean;
  features: string[];
  deliverables: string[];
  technologies: string[];
  benefits: { metric: string; label: string }[];
  caseStudySlug?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "serv-1",
    slug: "software-development",
    title: "Software Development",
    shortDescription: "Scalable, secure & high-performance enterprise applications custom-tailored to your workflow.",
    fullDescription: "We engineer resilient full-cycle software architectures ranging from mission-critical enterprise systems to distributed cloud-native microservices, modern web apps, and native mobile ecosystems built for high throughput.",
    iconName: "Code2",
    featured: true,
    features: [
      "Custom Enterprise Web & Mobile Applications",
      "Microservices & Event-Driven Distributed Architectures",
      "High-Performance API & GraphQL Gateways",
      "Legacy Codebase Modernization & Refactoring",
      "Rigorous Automated CI/CD & Test Pipelines"
    ],
    deliverables: [
      "Production-ready scalable architecture",
      "Full API documentation & SDKs",
      "Continuous deployment pipelines",
      "Automated unit, integration, and load tests"
    ],
    technologies: ["React 19", "TypeScript", "Node.js", "Go", "Python", "PostgreSQL", "Docker", "Kubernetes"],
    benefits: [
      { metric: "99.99%", label: "Uptime SLA standard" },
      { metric: "3.5x", label: "Faster deployment cadence" },
      { metric: "45%", label: "Reduction in maintenance overhead" }
    ],
    caseStudySlug: "e-commerce-analytics-suite"
  },
  {
    id: "serv-2",
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortDescription: "Intelligent models and generative AI systems that learn, predict, automate, and drive actionable insight.",
    fullDescription: "Transform enterprise workflows with custom predictive models, LLM agents, natural language processing, computer vision, and real-time inference pipelines optimized for strict accuracy and enterprise compliance.",
    iconName: "Cpu",
    featured: true,
    features: [
      "Custom LLM Fine-Tuning & Multi-Agent Workflows",
      "Predictive Analytics & Anomaly Detection Engines",
      "Enterprise Retrieval-Augmented Generation (RAG)",
      "Computer Vision & Edge Inference Systems",
      "Model Governance, Safety, & Drift Monitoring"
    ],
    deliverables: [
      "Trained model artifacts and inference APIs",
      "Vector database embeddings infrastructure",
      "Model observability and evaluation dashboards",
      "Comprehensive AI ethical compliance documentation"
    ],
    technologies: ["PyTorch", "TensorFlow", "Gemini Pro", "LangChain", "Pinecone", "CUDA", "FastAPI"],
    benefits: [
      { metric: "65%", label: "Reduction in manual review time" },
      { metric: "94.8%", label: "Accuracy in predictive models" },
      { metric: "<50ms", label: "Real-time inference latency" }
    ],
    caseStudySlug: "ai-powered-fraud-detection"
  },
  {
    id: "serv-3",
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription: "Modernize, migrate, and optimize your workloads across AWS, GCP, and Azure with zero downtime.",
    fullDescription: "Accelerate your cloud transformation with battle-tested cloud migration frameworks, multi-cloud governance, serverless architectures, cost optimization (FinOps), and Kubernetes orchestration.",
    iconName: "Cloud",
    featured: true,
    features: [
      "Zero-Downtime Cloud Migration & Lift-and-Shift",
      "Cloud-Native Kubernetes & Containerization",
      "FinOps & Automated Cloud Cost Optimization",
      "Disaster Recovery & Multi-Region Resiliency",
      "Infrastructure as Code (Terraform & Pulumi)"
    ],
    deliverables: [
      "Multi-region cloud infrastructure templates",
      "Automated autoscaling and backup strategies",
      "Cost allocation dashboards and budgets",
      "24/7 observability and alerting pipelines"
    ],
    technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Terraform", "Kubernetes", "Datadog", "ArgoCD"],
    benefits: [
      { metric: "36%", label: "Average infrastructure cost savings" },
      { metric: "Zero", label: "Planned migration downtime" },
      { metric: "10x", label: "Faster container scaling" }
    ],
    caseStudySlug: "smart-healthcare-platform"
  },
  {
    id: "serv-4",
    slug: "data-analytics",
    title: "Data Analytics",
    shortDescription: "Turn raw streams into actionable intelligence and executive dashboards for data-driven decisions.",
    fullDescription: "Design scalable modern data stacks, real-time data streaming pipelines, centralized data lakes, and self-service BI platforms that empower every stakeholder with trusted, real-time metrics.",
    iconName: "BarChart3",
    featured: true,
    features: [
      "Modern Data Lakehouse Architectures (Snowflake / BigQuery)",
      "Real-Time Stream Processing with Apache Kafka",
      "Automated ETL / ELT Pipelines & dbt Modeling",
      "Executive PowerBI & Tableau Dashboards",
      "Data Governance & Quality Monitoring"
    ],
    deliverables: [
      "Unified data warehouse schema",
      "Production ETL pipelines and scheduling",
      "Interactive executive dashboards",
      "Data dictionary and lineage documentation"
    ],
    technologies: ["Snowflake", "BigQuery", "Apache Kafka", "dbt", "Airflow", "Tableau", "PowerBI"],
    benefits: [
      { metric: "10x", label: "Faster query performance" },
      { metric: "100%", label: "Real-time stream visibility" },
      { metric: "2.5x", label: "Data-driven revenue velocity" }
    ],
    caseStudySlug: "e-commerce-analytics-suite"
  },
  {
    id: "serv-5",
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortDescription: "End-to-end security architectures, penetration testing, and Zero-Trust frameworks to safeguard your assets.",
    fullDescription: "Protect your intellectual property, customer data, and compliance posture with proactive threat hunting, Zero-Trust network architecture, SOC2 / ISO27001 readiness, and continuous automated vulnerability monitoring.",
    iconName: "ShieldCheck",
    featured: true,
    features: [
      "Zero-Trust Architecture & Identity Access Management",
      "Comprehensive Penetration Testing & Red Teaming",
      "SOC 2 Type II, HIPAA, & ISO 27001 Compliance",
      "Cloud Security Posture Management (CSPM)",
      "Incident Response Planning & 24/7 SIEM"
    ],
    deliverables: [
      "Full vulnerability assessment report",
      "Zero-Trust IAM policies and access gates",
      "Security compliance certification roadmap",
      "Automated penetration scan integrations"
    ],
    technologies: ["CrowdStrike", "Wiz", "Palo Alto", "HashiCorp Vault", "Okta", "Splunk", "Tenable"],
    benefits: [
      { metric: "100%", label: "SOC 2 Type II pass rate" },
      { metric: "85%", label: "Faster incident containment" },
      { metric: "0", label: "Critical vulnerability breaches" }
    ],
    caseStudySlug: "ai-powered-fraud-detection"
  },
  {
    id: "serv-6",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortDescription: "Create delightful, human-centered digital experiences that convert, engage, and retain users.",
    fullDescription: "We blend deep behavioral user research, sleek visual craft, and scalable design systems to build intuitive digital products that users love and that drive tangible business conversions.",
    iconName: "Palette",
    featured: true,
    features: [
      "User Journey Mapping & Behavioral Research",
      "Interactive High-Fidelity Prototypes & Wireframing",
      "Enterprise Design Systems & Token Libraries",
      "Accessibility (WCAG 2.1 AAA) Auditing",
      "Usability Testing & Conversion Rate Optimization (CRO)"
    ],
    deliverables: [
      "Figma design system and component libraries",
      "Interactive clickable prototypes",
      "Accessibility compliance documentation",
      "Design token packages for engineering handoff"
    ],
    technologies: ["Figma", "Design Tokens", "Tailwind CSS", "Storybook", "Principle", "UserTesting"],
    benefits: [
      { metric: "+48%", label: "Increase in user engagement" },
      { metric: "-60%", label: "Reduction in onboarding drop-off" },
      { metric: "100%", label: "WCAG 2.1 AA accessibility score" }
    ],
    caseStudySlug: "smart-healthcare-platform"
  },
  {
    id: "serv-7",
    slug: "it-consulting",
    title: "IT Consulting",
    shortDescription: "Strategic technology advisory to optimize IT investments, modernize stacks, and drive sustainable growth.",
    fullDescription: "Our senior CTO-level advisory team works hand-in-hand with enterprise executives to formulate multi-year digital roadmaps, evaluate vendor architectures, and align technical investment with shareholder value.",
    iconName: "Briefcase",
    featured: false,
    features: [
      "Enterprise Technology Roadmap & Strategy",
      "CTO Advisory & Architecture Review",
      "Vendor Assessment & Due Diligence",
      "Agile Transformation & Engineering Culture",
      "IT Cost Rationalization & Budget Audits"
    ],
    deliverables: [
      "Multi-year technology roadmap",
      "Architecture evaluation and risk matrix",
      "Vendor benchmark scorecard",
      "Organization capability gap analysis"
    ],
    technologies: ["Enterprise Architecture", "TOGAF", "Agile/Scrum", "Jira Align", "Maturity Models"],
    benefits: [
      { metric: "$12M+", label: "Identified IT cost efficiencies" },
      { metric: "3x", label: "Faster time-to-market for new ventures" },
      { metric: "100%", label: "Strategic road-map alignment" }
    ],
    caseStudySlug: "e-commerce-analytics-suite"
  },
  {
    id: "serv-8",
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortDescription: "Reimagine legacy business models with modern connected software and intelligent digital solutions.",
    fullDescription: "From paper-bound workflows to cloud-native automated operations, we help legacy enterprises reinvent their service delivery, unlock new digital revenue streams, and outpace digital native competitors.",
    iconName: "Sparkles",
    featured: false,
    features: [
      "Legacy Process Digitization & Automation",
      "Omnichannel Customer Experience Re-Platforming",
      "ERP & CRM System Modernization",
      "API Monetization & Ecosystem Partnerships",
      "Change Management & Employee Enablement"
    ],
    deliverables: [
      "End-to-end digital operating model",
      "API-first integration framework",
      "Process automation workflow scripts",
      "Digital training and onboarding playbook"
    ],
    technologies: ["Salesforce", "ServiceNow", "MuleSoft", "React", "Node.js", "Azure", "Kafka"],
    benefits: [
      { metric: "70%", label: "Faster operational turnaround" },
      { metric: "+32%", label: "Customer retention improvement" },
      { metric: "4.8x", label: "Return on digital investment" }
    ],
    caseStudySlug: "smart-healthcare-platform"
  }
];
