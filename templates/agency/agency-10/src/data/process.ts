export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  deliverables: string[];
  keyActivities: string[];
  toolsUsed: string[];
  icon: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Feasibility Audit',
    subtitle: 'Uncovering the real business levers and technical constraints before writing a single line of code.',
    description: 'We conduct deep stakeholder interviews, audit existing data assets and API infrastructure, analyze competitive landscapes, and evaluate technical feasibility for AI models and distributed systems.',
    duration: '1 – 2 Weeks',
    deliverables: [
      'Comprehensive Technical Architecture RFC',
      'Data Quality & ML Feasibility Scorecard',
      'System Integration Dependency Map',
      'Sprint Roadmap & Resource Commitment Plan'
    ],
    keyActivities: [
      'Stakeholder immersion workshops',
      'Legacy database & API code audit',
      'AI model inference latency & cost modeling',
      'Security, privacy, and regulatory risk mapping'
    ],
    toolsUsed: ['Miro', 'Notion', 'Postman', 'Python Data Profilers', 'Jira'],
    icon: 'Search'
  },
  {
    number: '02',
    title: 'Strategy & System Blueprint',
    subtitle: 'Architecting resilient data flows, domain models, and scalable system topologies.',
    description: 'We draft the complete technical blueprint: microservice boundaries, data schema definitions, API contracts, security perimeters, and AI evaluation metrics to eliminate downstream surprises.',
    duration: '1 – 2 Weeks',
    deliverables: [
      'C4 Component & Container Architecture Diagrams',
      'Database Schema Specifications (DDL & ERD)',
      'Contract-First OpenAPI / Protobuf Manifests',
      'Security & RBAC Threat Model Documentation'
    ],
    keyActivities: [
      'Domain-Driven Design (DDD) domain boundary modeling',
      'Vector DB chunking and retrieval benchmarking',
      'Cloud cost budget forecasting and resource rightsizing',
      'Disaster recovery and failover planning'
    ],
    toolsUsed: ['Lucidchart', 'SwaggerHub', 'Terraform Cloud', 'Whimsical'],
    icon: 'Compass'
  },
  {
    number: '03',
    title: 'UX/UI Design & Rapid Prototyping',
    subtitle: 'Crafting mathematical layouts, intuitive ergonomics, and pixel-precise design systems.',
    description: 'We design high-fidelity interactive prototypes in Figma, establishing typographic scales, tokenized design systems, responsive layouts, and user-tested workflows with real contextual data.',
    duration: '2 – 3 Weeks',
    deliverables: [
      'Interactive Figma High-Fidelity Prototype',
      'Tokenized Design System (Colors, Typography, Components)',
      'Responsive Screen Breakpoint Matrix (Desktop, Tablet, Mobile)',
      'Micro-Interaction & Motion Physics Guidelines'
    ],
    keyActivities: [
      'User journey mapping & friction point elimination',
      'Rapid prototype usability testing sessions',
      'WCAG 2.1 AA accessibility contrast auditing',
      'Design token handoff to frontend engineering'
    ],
    toolsUsed: ['Figma', 'Storybook', 'Tokens Studio', 'Lottie'],
    icon: 'Palette'
  },
  {
    number: '04',
    title: 'Agile Engineering & Staged Sprints',
    subtitle: 'Writing clean, typed, modular code with continuous integration and bi-weekly demos.',
    description: 'Our senior engineering teams execute in two-week agile sprints. Every commit triggers automated linters, security scans, and preview deployments so stakeholders see real software working from sprint one.',
    duration: '4 – 12 Weeks',
    deliverables: [
      'Production-Grade Source Code in Client Repositories',
      'Automated Test Suites (Unit, Integration, E2E)',
      'Ephemeral Preview Environments Per Pull Request',
      'Bi-Weekly Sprint Demo Recordings & Changelogs'
    ],
    keyActivities: [
      'Test-Driven Development (TDD) on critical domain paths',
      'Pair programming and rigorous code reviews',
      'Model fine-tuning and evaluation pipelines',
      'Optimistic state updates and edge caching configuration'
    ],
    toolsUsed: ['TypeScript', 'GitHub', 'Docker', 'Next.js', 'PyTorch', 'FastAPI'],
    icon: 'Code'
  },
  {
    number: '05',
    title: 'Rigorous QA & Security Penetration',
    subtitle: 'Subjecting the application to chaos testing, load spikes, and adversarial audits.',
    description: 'Before any code touches production, our QA engineers run automated end-to-end regression suites, simulate 10x traffic spikes, conduct penetration tests, and verify edge-case hallucination prevention.',
    duration: '1 – 2 Weeks',
    deliverables: [
      'Automated Playwright & Cypress Test Reports',
      'K6 Load & Stress Testing Performance Benchmarks',
      'OWASP Top 10 Security Penetration Audit',
      'Cross-Browser & Device Compatibility Matrix'
    ],
    keyActivities: [
      'Distributed load testing simulating peak traffic',
      'Adversarial prompt injection & jailbreak penetration tests',
      'Database connection saturation drills',
      'Screen reader and keyboard accessibility verification'
    ],
    toolsUsed: ['Playwright', 'k6', 'SonarQube', 'Snyk', 'BrowserStack'],
    icon: 'ShieldCheck'
  },
  {
    number: '06',
    title: 'Zero-Downtime Cloud Deployment',
    subtitle: 'Releasing with automated rollbacks, blue/green cutover, and real-time observability.',
    description: 'We execute production deployment using Infrastructure as Code and GitOps pipelines. Canary releases and blue/green traffic splitting ensure zero downtime, backed by real-time alerting.',
    duration: '1 Week',
    deliverables: [
      'Production Kubernetes / Cloud Infrastructure Live',
      'Automated Blue/Green Traffic Shifting Pipeline',
      'Centralized Telemetry Dashboard (Logs, Traces, Metrics)',
      'Comprehensive Ops Runbook & Disaster Recovery Plan'
    ],
    keyActivities: [
      'Zero-downtime database migration execution',
      'Canary deployment monitoring (5% -> 25% -> 100% traffic)',
      'SSL/TLS certificate automation and DNS switchover',
      'Emergency rollback automated circuit breakers test'
    ],
    toolsUsed: ['Kubernetes', 'Terraform', 'ArgoCD', 'Datadog', 'Cloudflare'],
    icon: 'Rocket'
  },
  {
    number: '07',
    title: 'Continuous Optimization & Evolution',
    subtitle: 'Iterating on user analytics, model accuracy drift, and business growth opportunities.',
    description: 'Launch is day one. We partner with ongoing clients for model retraining on live traffic data, performance optimizations, SLA-backed support, and feature expansion as your market evolves.',
    duration: 'Ongoing Partnership',
    deliverables: [
      'Monthly Model Accuracy & Performance Scorecards',
      'Automated ML Data Drift Retraining Triggers',
      '24/7 SLA Incident Response & Patch Management',
      'Quarterly Strategic Architecture Roadmap'
    ],
    keyActivities: [
      'Real-world user drop-off funnel analysis',
      'FinOps cloud spend minimization audits',
      'New LLM model version evaluation and migration',
      'Proactive security vulnerability dependency patches'
    ],
    toolsUsed: ['Langfuse', 'Grafana', 'Google Analytics 4', 'Mixpanel', 'Sentry'],
    icon: 'TrendingUp'
  }
];
