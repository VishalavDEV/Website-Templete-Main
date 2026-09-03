import { FeatureItem } from '../types';

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'real-time-intelligence',
    title: 'Real-Time Intelligence',
    shortDescription: 'Sub-millisecond data fabric synthesizing streaming telemetry across global enterprise nodes.',
    detailedDescription: 'Continuous in-memory streaming pipelines process live transactional, sensor, and market feeds. Generates immediate anomaly detection and automated causal correlations without batch latency.',
    iconName: 'Activity',
    category: 'Core Engine',
    badge: '<5ms Latency',
    capabilities: [
      'Sub-second cross-regional data replication',
      'Continuous stream processing via Apache Flink & ClickHouse',
      'Sub-millisecond anomaly detection and automatic alerting',
      'Dynamic threshold balancing adapting to macro cycles'
    ]
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise Security & Sovereign Mesh',
    shortDescription: 'Zero-trust cryptographic isolation and sovereign air-gapped private model deployment.',
    detailedDescription: 'Engineered for Tier-1 regulated environments. Provides continuous eBPF kernel telemetry, end-to-end homomorphic encryption, and fine-grained role-based cryptographic access control.',
    iconName: 'ShieldCheck',
    category: 'Security',
    badge: 'SOC2 & HIPAA',
    capabilities: [
      'Zero-trust ephemeral token exchange architecture',
      'Continuous automated compliance verification & audit proofs',
      'Private air-gapped model hosting on dedicated sovereign nodes',
      'Cryptographic ledger for all AI model reasoning steps'
    ]
  },
  {
    id: 'predictive-analytics',
    title: 'Predictive & Causal Analytics',
    shortDescription: 'Advanced counterfactual reasoning and Monte Carlo simulations for executive risk modeling.',
    detailedDescription: 'Move from passive historical reporting to active causal forecasting. Simulates capital allocations, pricing elasticity, and competitor responses before committing resources.',
    iconName: 'TrendingUp',
    category: 'Analytics',
    badge: '98.4% Confidence',
    capabilities: [
      'Directed Acyclic Graph (DAG) causal inference engine',
      'High-speed Monte Carlo risk & return simulations',
      'Dynamic pricing elasticity and demand response models',
      'Multi-scenario capital allocation optimization'
    ]
  },
  {
    id: 'cloud-integration',
    title: 'Universal Cloud Integration',
    shortDescription: 'Pre-built high-throughput connectors across 120+ ERP, CRM, database, and lakehouse providers.',
    detailedDescription: 'Zero-downtime bi-directional data synchronization. Integrates natively with Snowflake, BigQuery, Databricks, Salesforce, SAP, Oracle, and Kafka without custom ETL pipelines.',
    iconName: 'Layers',
    category: 'Infrastructure',
    badge: '120+ Connectors',
    capabilities: [
      'Zero-configuration bi-directional data synchronization',
      'Automatic schema migration and semantic normalization',
      'Sub-second webhook and GraphQL event bus',
      'Multi-cloud failover across AWS, Azure, and Google Cloud'
    ]
  },
  {
    id: 'ai-automation',
    title: 'Autonomous AI Orchestration',
    shortDescription: 'Decentralized multi-agent swarms executing complex back-office workflows with guardrails.',
    detailedDescription: 'Empower autonomous cognitive agents to parse unstructured documents, reconcile invoices, route exceptions, and execute cross-system transactions with complete auditability.',
    iconName: 'Cpu',
    category: 'Automation',
    badge: 'Agentic Swarms',
    capabilities: [
      'Human-in-the-loop exception routing and escalation',
      'Document vision models parsing international invoices & contracts',
      'Deterministic safety guardrails preventing out-of-bounds actions',
      'Persistent memory architecture with vector-indexed state'
    ]
  },
  {
    id: 'team-collaboration',
    title: 'Executive Team Collaboration',
    shortDescription: 'Shared decision spaces, live annotation, and role-based multi-user workspace synchronization.',
    detailedDescription: 'Unite C-suite executives, financial analysts, and operational leads in a synchronized command center. Create collaborative scenario branches and automated board-level presentation decks.',
    iconName: 'Users',
    category: 'Collaboration',
    badge: 'Live Sync',
    capabilities: [
      'Synchronized multi-user decision workspaces',
      'Interactive scenario branching and live voting',
      'One-click automated C-suite executive briefing generator',
      'Role-based granular data masking and access controls'
    ]
  },
  {
    id: 'performance-monitoring',
    title: 'Continuous Performance Monitoring',
    shortDescription: 'Deep telemetry tracking model accuracy, data freshness, latency, and business ROI metrics.',
    detailedDescription: 'Full-stack observability across your entire intelligence infrastructure. Automatically flags model drift, hallucination indicators, and infrastructure bottlenecks before they impact users.',
    iconName: 'Gauge',
    category: 'Observability',
    badge: '99.999% SLA',
    capabilities: [
      'Automated model drift and concept decay detection',
      'Distributed tracing with eBPF low-overhead instrumentation',
      'Real-time token cost and compute efficiency tracking',
      'Instant root-cause analysis and automated rollback playbooks'
    ]
  },
  {
    id: 'custom-reporting',
    title: 'Custom Reporting & Dynamic Exports',
    shortDescription: 'Automated executive PDF/CSV generation, scheduled delivery, and programmatic webhook feeds.',
    detailedDescription: 'Generate audit-ready, boardroom-quality reports on demand or on recurring schedules. Export granular datasets to CSV, Excel, or stream structured JSON feeds to downstream data warehouses.',
    iconName: 'FileSpreadsheet',
    category: 'Reporting',
    badge: 'Instant CSV & PDF',
    capabilities: [
      'Deterministic CSV, Excel, and PDF compilation engine',
      'Automated scheduled delivery via Slack, Email, and Teams',
      'REST & GraphQL programmatic export APIs',
      'Cryptographically verified compliance documentation'
    ]
  }
];
