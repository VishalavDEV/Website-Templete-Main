import { CaseStudy } from '../types';

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'meridian-fintech',
    company: 'Meridian Capital Global',
    industry: 'Finance',
    title: 'Autonomous Fraud Detection & Real-Time Risk Arbitrage',
    challenge: 'Meridian handled over $4.2B in daily cross-border transactions across 18 jurisdictions. Legacy batch risk scoring resulted in $34M in false-positive merchant freezes and a 45-minute transaction reconciliation lag.',
    solution: 'Engineered a streaming intelligence mesh with sub-millisecond graph neural networks to score transactions in flight and autonomously balance risk arbitrage parameters.',
    result: 'Reduced false-positive transaction declines by 84%, slashed reconciliation latency to under 300ms, and secured an estimated $62M in captured margin in year one.',
    year: '2025 - 2026',
    roi: '+184%',
    processingTime: '300ms',
    efficiency: '+92.4%',
    summary: 'A transformative risk & compliance transformation for one of Europe’s largest payment institutions.',
    approach: [
      'Implemented real-time feature store ingesting 120,000 events/sec via Apache Flink',
      'Trained custom causal inference models on 5 years of historical cross-border payment telemetry',
      'Deployed sovereign micro-enclaves for GDPR & PCI-DSS level 1 certified execution',
      'Integrated an automated human-in-the-loop dispute resolution cockpit'
    ],
    technologies: ['Apache Flink', 'Rust In-Memory Engine', 'Graph Neural Networks', 'PostgreSQL', 'Docker/K8s'],
    keyResults: [
      { metric: 'False Positive Reduction', improvement: '-84%', description: 'Unblocked $34M in legitimate high-value client transactions' },
      { metric: 'Daily Volume Capacity', improvement: '6.5x', description: 'Scaled from $4.2B/day to $27B/day without headcount increase' },
      { metric: 'Annualized Fraud Prevention', improvement: '$41.8M', description: 'Identified sophisticated synthetic identity fraud rings' }
    ],
    clientQuote: {
      text: "NEXORA re-architected our transaction security from the ground up. We went from reactive risk triage to predicting fraud attempts before settlement.",
      author: "Elena Rostova",
      role: "Chief Risk Officer, Meridian Capital Global"
    }
  },
  {
    id: 'aurora-health',
    company: 'Aurora BioHealth Systems',
    industry: 'Healthcare',
    title: 'Clinical Data Mesh & Diagnostic AI Pipeline',
    challenge: 'A multi-state healthcare network with 34 hospitals struggled with fragmented Electronic Health Record (EHR) formats, leading to a 3-week backlog in specialized pathology reporting and diagnostic reviews.',
    solution: 'Deployed a HIPAA-compliant federated clinical data mesh with multimodal medical vision models and automated pathology summarization.',
    result: 'Reduced pathology turnaround from 21 days to under 4 hours, achieved 99.4% diagnostic concordance with senior specialists, and elevated patient throughput by 62%.',
    year: '2025',
    roi: '+210%',
    processingTime: '4 hours',
    efficiency: '+88.0%',
    summary: 'High-precision clinical AI infrastructure scaling specialized diagnostic accuracy across 1.4 million patients.',
    approach: [
      'Built a federated FHIR/DICOM ingestion pipeline standardizing unstructured records',
      'Fine-tuned private multimodal vision-language models for oncology and radiology annotations',
      'Implemented verifiable audit trails with cryptographic hash timestamps',
      'Designed a clinician-first review UI embedded directly into clinical workstations'
    ],
    technologies: ['PyTorch', 'DICOM/FHIR Protocols', 'Private LLMs', 'Kubernetes on AWS GovCloud', 'Redis Cluster'],
    keyResults: [
      { metric: 'Diagnosis Turnaround', improvement: '-97.2%', description: 'Slashed patient waiting times from 21 days to 4 hours' },
      { metric: 'Diagnostic Concordance', improvement: '99.4%', description: 'Validated by independent peer review across 10,000 cases' },
      { metric: 'Clinician Time Saved', improvement: '14 hrs/week', description: 'Per attending oncologist in clinical documentation overhead' }
    ],
    clientQuote: {
      text: "The speed and diagnostic fidelity of NEXORA's intelligence platform directly saved lives by unblocking oncology treatment paths in hours instead of weeks.",
      author: "Dr. Marcus Vance",
      role: "Chief Medical Information Officer, Aurora BioHealth"
    }
  },
  {
    id: 'omnistore-retail',
    company: 'OmniVerve Commerce',
    industry: 'Retail',
    title: 'Autonomous Supply Chain & Predictive Dynamic Assortment',
    challenge: 'A global retail enterprise with 1,200 stores and $8.5B in annual sales faced high stockouts on trending SKUs and costly end-of-season markdowns due to localized demand forecasting errors.',
    solution: 'Implemented an AI supply chain forecasting engine combining localized weather, micro-influencer social telemetry, and historical POS data into real-time replenishment.',
    result: 'Reduced stockouts by 73%, decreased inventory holding costs by 31%, and added $145M in gross profit within 9 months.',
    year: '2025 - 2026',
    roi: '+340%',
    processingTime: '15 min cycle',
    efficiency: '+76.5%',
    summary: 'Predictive inventory balancing across 1,200 physical locations and 4 regional distribution hubs.',
    approach: [
      'Connected 1,200 store POS streams with external geospatial & social sentiment vectors',
      'Constructed a reinforcement learning inventory allocator balancing transport costs with margin',
      'Created an autonomous re-ordering workflow with ERP trigger integrations',
      'Built an interactive regional demand cockpit for merchandising executives'
    ],
    technologies: ['Ray Distributed Compute', 'ClickHouse', 'Temporal IO', 'FastAPI', 'Next-Gen Vector Search'],
    keyResults: [
      { metric: 'Stockout Frequency', improvement: '-73%', description: 'Ensured high-demand products stayed on shelves during peak seasons' },
      { metric: 'Gross Margin Expansion', improvement: '+3.8 pts', description: 'Reduced aggressive promotional markdowns by 44%' },
      { metric: 'Working Capital Unlocked', improvement: '$88M', description: 'Through optimized just-in-time warehouse stocking' }
    ],
    clientQuote: {
      text: "NEXORA turned our supply chain from a cost center into our biggest competitive advantage. Our predictive replenishment runs like clockwork.",
      author: "Samantha Sterling",
      role: "VP Supply Chain & Operations, OmniVerve"
    }
  },
  {
    id: 'cybercore-cloud',
    company: 'CyberCore Defense Group',
    industry: 'Technology',
    title: 'Autonomous Threat Hunting & Infrastructure Self-Healing',
    challenge: 'Managing over 450,000 virtualized compute instances across hybrid cloud infrastructures with manual SOC alert fatigue causing delayed zero-day containment.',
    solution: 'Designed an autonomous eBPF security telemetry mesh with multi-agent threat investigation swarms that isolate anomalous kernel behaviors in real-time.',
    result: 'Reduced Mean Time to Contain (MTTC) from 4.5 hours to 18 seconds, eliminated 96% of false-positive SOC noise, and withstood multiple nation-state pen-tests.',
    year: '2026',
    roi: '+280%',
    processingTime: '18 seconds',
    efficiency: '+94.2%',
    summary: 'Autonomous cyber defense for mission-critical cloud backbones operating at hyperscale.',
    approach: [
      'Deployed low-overhead eBPF kernel probes across Kubernetes clusters',
      'Constructed an agentic SOC tier-1 triage system executing automated sandboxing',
      'Generated immutable cryptographic audit logs for sovereign defense compliance',
      'Delivered a unified threat command interface with 3D topology visualization'
    ],
    technologies: ['eBPF (C / Rust)', 'Kubernetes', 'LLM Security Agents', 'ClickHouse', 'WebSockets'],
    keyResults: [
      { metric: 'Mean Time to Contain', improvement: '-99.8%', description: 'From 4.5 hours down to 18 seconds' },
      { metric: 'Alert Noise Reduction', improvement: '-96%', description: 'Engineers now focus exclusively on high-severity, validated incidents' },
      { metric: 'SOC Triage Capacity', improvement: '20x', description: 'Triages 50,000 daily security signals autonomously' }
    ],
    clientQuote: {
      text: "NEXORA provided the only security intelligence system that could actually keep pace with automated adversarial attacks at our infrastructure scale.",
      author: "Kareem Al-Mansoor",
      role: "Chief Information Security Officer, CyberCore"
    }
  },
  {
    id: 'synthetix-ai',
    company: 'Synthetix Robotics & Automation',
    industry: 'AI',
    title: 'Enterprise Multi-Agent Operational Swarm',
    challenge: 'Managing complex robotic manufacturing lines across 8 facilities required continuous manual recalibration and multi-party vendor coordination.',
    solution: 'Deployed a decentralized swarm of AI reasoning agents continuously evaluating machine sensor telemetry and autonomously negotiating supply parts & maintenance windows.',
    result: 'Zero unplanned assembly line stoppages for 14 consecutive months, 38% faster cycle times, and an ROI of 410% on capital equipment.',
    year: '2025',
    roi: '+410%',
    processingTime: 'Real-time',
    efficiency: '+98.2%',
    summary: 'Industrial AI intelligence driving autonomous robotics and predictive maintenance.',
    approach: [
      'Ingested high-frequency vibration and thermal IoT sensors at 10,000 samples/sec',
      'Implemented edge AI reasoning agents capable of offline real-time parameter tuning',
      'Connected parts procurement directly with automated ERP purchase orders',
      'Unified plant floor status onto an interactive visual digital twin'
    ],
    technologies: ['Edge AI / TensorRT', 'MQTT / ZeroMQ', 'Time-Series DB', 'LangChain / Multi-Agent', 'React 3D'],
    keyResults: [
      { metric: 'Unscheduled Downtime', improvement: '-100%', description: 'Achieved 14 months of continuous flawless production line operations' },
      { metric: 'Assembly Cycle Speed', improvement: '+38%', description: 'Increased daily finished unit throughput significantly' },
      { metric: 'Maintenance Cost Reduction', improvement: '$19.2M', description: 'Preventative fixes deployed before catastrophic gear degradation' }
    ],
    clientQuote: {
      text: "The multi-agent architecture built by NEXORA represents the state of the art in industrial automation. Our plants are now self-optimizing.",
      author: "Tariq Bradley",
      role: "SVP Manufacturing Engineering, Synthetix"
    }
  },
  {
    id: 'strata-energy',
    company: 'Strata Grid Dynamics',
    industry: 'Enterprise',
    title: 'Smart Energy Grid Balancing & Autonomous Power Trading',
    challenge: 'Volatile renewable energy feed-in from wind and solar farms caused substantial grid curtailment penalties and sub-optimal high-frequency power trading revenues.',
    solution: 'Created an algorithmic grid forecasting and automated power arbitrage platform calculating weather vector probabilities and dispatching battery storage assets in real time.',
    result: 'Reduced grid curtailment waste by 89%, generated $78M in net new algorithmic trading margin, and supplied clean energy to 3.2M additional households.',
    year: '2026',
    roi: '+315%',
    processingTime: '5 sec auctions',
    efficiency: '+86.7%',
    summary: 'Next-generation grid intelligence optimizing clean energy dispatch across regional transmission networks.',
    approach: [
      'Built high-resolution atmospheric ML models forecasting renewable output 72 hours ahead',
      'Developed low-latency algorithmic trading bots integrated into European power spot markets',
      'Orchestrated utility-scale battery energy storage systems (BESS) dispatch',
      'Delivered an executive energy portfolio management cockpit'
    ],
    technologies: ['C++ Trading Core', 'Python / Scikit / XGBoost', 'Kafka', 'PostgreSQL Timescale', 'Tailwind / React'],
    keyResults: [
      { metric: 'Curtailment Waste Reduction', improvement: '-89%', description: 'Maximized green kilowatt-hours delivered to the regional power grid' },
      { metric: 'Trading Revenue Uplift', improvement: '+$78M', description: 'Autonomous arbitrage capitalizing on intra-day power price spikes' },
      { metric: 'Carbon Offsetting Acceleration', improvement: '420K tons', description: 'CO2 equivalent reduction through optimized renewable dispatch' }
    ],
    clientQuote: {
      text: "NEXORA's algorithmic models gave us unprecedented visibility into grid dynamics. We transformed volatility into consistent operational yield.",
      author: "Henrik Lindqvist",
      role: "Managing Director, Strata Grid Dynamics"
    }
  }
];
