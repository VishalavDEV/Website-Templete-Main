import { SolutionItem } from '../types';

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'strategic-intelligence',
    category: 'Strategy',
    title: 'Strategic Intelligence & Market Foresight',
    tagline: 'Continuous competitive telemetry and autonomous market modeling.',
    iconName: 'Compass',
    description: 'Empower executive teams with continuous competitive intelligence, dynamic scenario modeling, and AI-synthesized strategic playbooks.',
    fullOverview: 'Our Strategic Intelligence platform combines generative synthesis with real-time global market feeds. Instead of relying on static quarterly reviews, leadership teams get live competitive threat matrices, acquisition radar, and predictive margin simulations mapped against macroeconomic shifts.',
    features: [
      'Autonomous Competitor Tracking & Vector Analysis',
      'Dynamic Scenario Simulation & Capital Allocation Models',
      'Executive Briefing Synthesis with Source Attribution',
      'Regulatory Horizon Scanning & Compliance Early-Warning'
    ],
    metrics: [
      { label: 'Decision Latency', value: '-65%', detail: 'Reduction in time from market signal to strategic pivot' },
      { label: 'Forecast Accuracy', value: '94.2%', detail: 'Confidence interval on 12-month margin projections' },
      { label: 'Risk Mitigation', value: '$48M+', detail: 'Average annualized downside risk preempted per client' }
    ],
    deliverables: [
      'Autonomous Executive Intelligence Cockpit',
      'Tailored Scenario Engine connected to live ERP & CRM data',
      'Weekly Autonomous Synthesis Digest for Board & C-Suite',
      'Custom Strategic Risk Scoring API'
    ],
    technologies: ['Causal Graph Neural Networks', 'Continuous RAG Pipeline', 'Proprietary Market Sentiment Index', 'Monte Carlo Simulation Engine']
  },
  {
    id: 'enterprise-technology',
    category: 'Technology',
    title: 'Enterprise Architecture & Cloud Modernization',
    tagline: 'High-throughput, zero-latency distributed data backbones.',
    iconName: 'Cpu',
    description: 'Replatform legacy monoliths into distributed, event-driven microservices engineered for real-time AI inference and extreme scalability.',
    fullOverview: 'We architect enterprise-grade distributed infrastructure capable of ingesting petabytes of streaming data with sub-millisecond query performance. Our modernization frameworks ensure zero-downtime cutover and strict SOC2 / ISO27001 sovereign compliance across hybrid-cloud fabrics.',
    features: [
      'Event-Driven Microservices & Streaming Data Backbones',
      'Zero-Trust Sovereign Multi-Cloud Mesh Architecture',
      'High-Throughput Vector & Time-Series Database Infrastructure',
      'Self-Healing Infrastructure & Automated Resiliency Testing'
    ],
    metrics: [
      { label: 'Query Latency', value: '<4.2ms', detail: 'p99 latency across distributed enterprise datasets' },
      { label: 'Cloud Spend ROI', value: '-38%', detail: 'Direct infrastructure cost reduction post-replatforming' },
      { label: 'System Uptime', value: '99.999%', detail: 'Zero unscheduled downtime across mission-critical nodes' }
    ],
    deliverables: [
      'End-to-End Modern Architecture Blueprint',
      'Infrastructure as Code (IaC) Repositories & CI/CD Pipelines',
      'Unified Data Mesh with Automated Governance',
      'Real-Time Observability & Telemetry Command Center'
    ],
    technologies: ['Kubernetes', 'Apache Kafka / Flink', 'ClickHouse', 'Rust-based Query Accelerators', 'eBPF Telemetry']
  },
  {
    id: 'intelligent-automation',
    category: 'Automation',
    title: 'Intelligent Process Automation & Multi-Agent Orchestration',
    tagline: 'End-to-end cognitive workflows that execute complex business operations autonomously.',
    iconName: 'Workflow',
    description: 'Transform manual operational friction into frictionless, autonomous multi-agent pipelines with human-in-the-loop oversight.',
    fullOverview: 'Go far beyond simple RPA scripts. NEXORA deploys cognitive multi-agent swarms that understand unstructured documents, negotiate vendor terms, reconcile complex financial ledgers, and trigger downstream enterprise actions with complete auditability.',
    features: [
      'Multi-Agent Workflow Orchestration & Task Delegation',
      'Unstructured Document Cognitive Ingestion & Extraction',
      'Cross-System RPA & Deep API Integration Bridges',
      'Dynamic Exception Routing with Human-in-the-Loop Safeguards'
    ],
    metrics: [
      { label: 'Cycle Time', value: '10x Faster', detail: 'End-to-end processing acceleration across back-office operations' },
      { label: 'Error Rate', value: '0.02%', detail: 'Down from human baseline error rates of 4.8%' },
      { label: 'Labor Hours Saved', value: '180K hrs/yr', detail: 'Frees skilled teams for high-leverage strategic initiatives' }
    ],
    deliverables: [
      'Autonomous Operations Workflow Suite',
      'Human-in-the-Loop Verification Console',
      'Custom Agent Tooling & Memory Persistence Layer',
      'Continuous Audit & Execution Telemetry Dashboard'
    ],
    technologies: ['LangGraph / AutoGen Agents', 'Deterministic Guardrails', 'OCR & Document Vision Models', 'Temporal Workflow Engine']
  },
  {
    id: 'data-analytics',
    category: 'Analytics',
    title: 'Unified Data Fabric & Predictive Analytics',
    tagline: 'Transform disconnected data silos into high-fidelity actionable telemetry.',
    iconName: 'BarChart3',
    description: 'Synthesize transactional, behavioral, and market data into a single source of truth with real-time predictive forecasting.',
    fullOverview: 'Break down departmental data silos with our unified enterprise data mesh. We build interactive executive cockpits and real-time predictive models that empower frontline managers and board members to make data-backed decisions within seconds.',
    features: [
      'Real-Time Streaming ETL & Semantic Data Layer',
      'Predictive Customer Lifetime Value & Churn Early-Warning',
      'Supply Chain Vulnerability & Lead-Time Simulation',
      'Natural Language Data Exploration & Semantic Search'
    ],
    metrics: [
      { label: 'Data Freshness', value: '<500ms', detail: 'Real-time synchronization across 80+ enterprise connectors' },
      { label: 'Analytics Adoption', value: '88%', detail: 'Active weekly usage across non-technical department leads' },
      { label: 'Revenue Lift', value: '+24.5%', detail: 'Direct uplift attributed to predictive dynamic pricing' }
    ],
    deliverables: [
      'Semantic Data Layer & Central Metric Registry',
      'Executive & Operational BI Dashboards',
      'Automated Anomaly Detection & Alerting Engine',
      'Embedded Self-Service Analytics Workbench'
    ],
    technologies: ['dbt', 'Snowflake / BigQuery', 'DuckDB in-browser engine', 'Apache Iceberg', 'Graph Analytics']
  },
  {
    id: 'ai-transformation',
    category: 'AI',
    title: 'Custom AI Transformation & Fine-Tuned Models',
    tagline: 'Proprietary enterprise models tailored to your domain and secure data.',
    iconName: 'Sparkles',
    description: 'Deploy private, fine-tuned AI models and specialized domain agents trained on your proprietary data assets with zero data leakage.',
    fullOverview: 'We help enterprise organizations build defensible AI moats. From custom fine-tuning of open-weights foundational models to building specialized domain evaluation benchmarks, our AI transformation practice delivers tangible ROI while guaranteeing total data sovereignty.',
    features: [
      'Domain-Specific Model Fine-Tuning (LoRA / DPO / RLHF)',
      'Enterprise Vector Knowledge Graph & Grounded Search',
      'Private Air-Gapped Model Deployment & Inference Optimizations',
      'Comprehensive AI Safety, Hallucination Checks & Red Teaming'
    ],
    metrics: [
      { label: 'Domain Accuracy', value: '99.1%', detail: 'Benchmark score on proprietary domain terminology and reasoning' },
      { label: 'Inference Cost', value: '-72%', detail: 'Compared to commercial generalized LLM API calls' },
      { label: 'Hallucination Rate', value: '<0.1%', detail: 'With strict factual grounding and guardrail interceptors' }
    ],
    deliverables: [
      'Proprietary Fine-Tuned Model Weights & Adapter Registry',
      'Private Inference Infrastructure (vLLM / TensorRT-LLM)',
      'Enterprise Knowledge Retrieval Service (Hybrid Vector + Keyword)',
      'Automated Model Evaluation & Drift Monitoring Pipeline'
    ],
    technologies: ['vLLM', 'LoRA / QLoRA', 'HuggingFace Enterprise', 'Llama 3 / Mistral Custom Weights', 'LangSmith']
  },
  {
    id: 'cybersecurity',
    category: 'Security',
    title: 'AI-Enhanced Cyber Defense & Sovereign Security',
    tagline: 'Autonomous threat hunting, zero-trust enforcement, and resilience.',
    iconName: 'ShieldCheck',
    description: 'Protect critical enterprise assets with AI-driven behavioral threat detection, automated incident containment, and cryptographic governance.',
    fullOverview: 'Modern cyber threats evolve at machine speed. NEXORA’s cybersecurity practice provides continuous autonomous vulnerability discovery, behavioral anomaly triage, and automated containment playbooks that isolate compromised vectors in under 300 milliseconds.',
    features: [
      'Autonomous Threat Detection & Rapid Vector Containment',
      'Zero-Trust Identity Governance & Ephemeral Access Keys',
      'AI-Powered Code Auditing & Supply Chain Vulnerability Patching',
      'Continuous Compliance Auditing (SOC2, HIPAA, FedRAMP, ISO)'
    ],
    metrics: [
      { label: 'Mean Time to Detect (MTTD)', value: '18s', detail: 'Autonomous detection of anomalous access patterns' },
      { label: 'Mean Time to Contain (MTTC)', value: '<2.4m', detail: 'Automated policy-based network isolation' },
      { label: 'Audit Readiness', value: '100%', detail: 'Continuous cryptographic compliance evidence generation' }
    ],
    deliverables: [
      '24/7 Autonomous Threat Intelligence Console',
      'Zero-Trust Access Management Architecture',
      'Automated Incident Response Playbooks',
      'Executive Security Posture & Compliance Report Suite'
    ],
    technologies: ['eBPF Security Probes', 'Wasm Sandboxing', 'Behavioral Anomaly Engine', 'Zero-Trust Token Exchange']
  }
];
