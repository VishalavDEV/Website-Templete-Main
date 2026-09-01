export interface ProcessStage {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  duration: string;
  visualIcon: string;
}

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "Understand",
    tagline: "Deep domain immersion, telemetry auditing, and bottleneck mapping.",
    description: "We embed our principal architects into your operational workflows, auditing legacy codebases, querying data lakes, and isolating high-friction systemic bottlenecks.",
    deliverables: [
      "Technical Debt & Dependency Audit",
      "System Telemetry & Data Lineage Map",
      "Quantitative ROI & Constraint Matrix"
    ],
    duration: "Weeks 1–2",
    visualIcon: "Search"
  },
  {
    number: "02",
    title: "Define",
    tagline: "Target state architecture, bounded contexts, and mathematical SLAs.",
    description: "We translate business imperatives into deterministic system specifications, defining domain boundaries, API contracts, security gates, and latency budgets.",
    deliverables: [
      "Target Architecture Blueprint (C4 Model)",
      "Domain-Driven Bounded Contexts",
      "Strict SLA & Latency Budget Specifications"
    ],
    duration: "Weeks 3–4",
    visualIcon: "Compass"
  },
  {
    number: "03",
    title: "Design",
    tagline: "High-density interaction modeling, design tokens, and cognitive flows.",
    description: "Our design team crafts intuitive, accessible user experiences for complex operational tools, validating interactive prototypes directly with frontline users.",
    deliverables: [
      "Accessible Design System & Tokens",
      "Interactive Operational Prototypes",
      "WCAG 2.2 AAA Usability Verification"
    ],
    duration: "Weeks 4–6",
    visualIcon: "Layers"
  },
  {
    number: "04",
    title: "Engineer",
    tagline: "Zero-debt implementation, parallel pipelines, and automated verification.",
    description: "Senior engineering pods build the core systems using rigorous test-driven discipline, declarative IaC, and weekly working software deployments into staging VPCs.",
    deliverables: [
      "Clean TypeScript / Go / Rust Microservices",
      "Declarative Multi-Cloud Terraform / GitOps",
      "Continuous Automated Test Suites (>95% Coverage)"
    ],
    duration: "Weeks 6–16",
    visualIcon: "Cpu"
  },
  {
    number: "05",
    title: "Launch",
    tagline: "Zero-downtime cutover, chaos resilience testing, and parallel shadow runs.",
    description: "We execute phased zero-downtime cutovers utilizing dual-write database strategies, dynamic DNS traffic steering, and continuous 24/7 site reliability monitoring.",
    deliverables: [
      "Zero-Downtime Phased Production Cutover",
      "Live Chaos & Failover Resilience Drills",
      "SOC2 / ISO27001 Security Audit Signoff"
    ],
    duration: "Weeks 16–18",
    visualIcon: "Rocket"
  },
  {
    number: "06",
    title: "Evolve",
    tagline: "Autonomous model fine-tuning, telemetry monitoring, and capability handover.",
    description: "We co-pilot the live environment alongside your internal teams, transferring architectural mastery, monitoring drift, and continuously optimizing compute efficiency.",
    deliverables: [
      "Follow-the-Sun SRE Operational Runbooks",
      "Continuous Model Drift & Hallucination Telemetry",
      "Internal Engineering Co-Pilot Handover"
    ],
    duration: "Ongoing Partnership",
    visualIcon: "RefreshCw"
  }
];
