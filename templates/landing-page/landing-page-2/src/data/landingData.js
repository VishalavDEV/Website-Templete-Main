export const BRAND = {
  name: "AETHERIA",
  badge: "NEXUS v3.5",
  title: "Next-Gen Spatial Intelligence & Autonomous Workflows",
  description: "Architect, deploy, and scale high-performance cognitive AI agents and immersive spatial interfaces with real-time sub-millisecond neural synchronization.",
  announcement: "Introducing AETHERIA 3.5 — 10x Faster Neural Mesh & Native WebXR",
  stats: {
    users: "120K+",
    satisfaction: "99.8%",
    latency: "8.4ms",
    nodes: "4.2M+"
  }
};

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "services", label: "Solutions" },
  { id: "showcase", label: "Showcase" },
  { id: "playground", label: "Playground" },
  { id: "process", label: "Roadmap" },
  { id: "testimonials", label: "Testimonials" },
  { id: "stats", label: "Metrics" }
];

export const HERO_PRESETS = [
  "Build autonomous multimodal customer agent with memory",
  "Generate 3D spatial analytics dashboard in WebGL",
  "Synthesize real-time financial sentiment neural pipeline",
  "Deploy edge LLM agent cluster with sub-10ms latency"
];

export const ABOUT_TABS = [
  {
    id: "neural",
    label: "Neural Engine",
    title: "Distributed Cognitive Core",
    description: "Multi-modal model orchestration dynamically balances computational loads across heterogeneous edge GPU clusters with automatic semantic caching.",
    metrics: [
      { label: "Token Processing", value: "185K tps" },
      { label: "Memory Retention", value: "10M context" },
      { label: "Energy Efficiency", value: "94.2%" }
    ],
    codeSnippet: `// Aetheria Cognitive Graph
const agentCluster = await Aetheria.cluster({
  topology: 'dynamic-mesh',
  contextWindow: '10M',
  quantization: 'fp8-turbo',
  guardrails: { hallucinationTolerance: 0.001 }
});`
  },
  {
    id: "spatial",
    label: "Spatial Interface",
    title: "Immersive 3D Canvas Synthesis",
    description: "Render high-fidelity spatial computing canvases and digital twin representations directly into WebXR and 60FPS browser viewports without plugins.",
    metrics: [
      { label: "Frame Rate", value: "120 FPS" },
      { label: "Shader Compilation", value: "0.2ms" },
      { label: "3D Asset Streaming", value: "Lossless" }
    ],
    codeSnippet: `// Spatial Canvas Instantiation
const spatialViewport = new Aetheria.SpatialCanvas({
  raytracing: 'hybrid-edge',
  depthOcclusion: true,
  handTracking: 'sub-millimeter'
});`
  },
  {
    id: "security",
    label: "Quantum Guard",
    title: "Post-Quantum Cryptographic Shield",
    description: "Zero-knowledge verification and lattice-based encryption ensure that your enterprise neural state vectors never leak into public models or transit unencrypted.",
    metrics: [
      { label: "Encryption", value: "Kyber-1024" },
      { label: "ZK-Proof Verification", value: "<1.4ms" },
      { label: "SOC2 Type II", value: "Compliant" }
    ],
    codeSnippet: `// Zero-Knowledge Enclave
const secureEnclave = Aetheria.Security.enclave({
  protocol: 'ZK-SNARK-Lattice',
  auditLog: 'immutable-ledger',
  piiRedaction: 'strict-auto'
});`
  }
];

export const FEATURES_DATA = [
  {
    id: "feat-1",
    tag: "Core Intelligence",
    title: "Autonomous Agent Swarms",
    description: "Deploy self-healing, collaborating agent meshes that autonomously decompose complex enterprise workflows into micro-actions.",
    icon: "Bot",
    stat: "1,000+ parallel agents",
    highlight: "Self-Coordinating",
    animationDir: "up"
  },
  {
    id: "feat-2",
    tag: "Spatial Canvas",
    title: "Dynamic 3D UI Generation",
    description: "Transform natural language prompts into reactive, physics-driven 3D interface components and interactive volumetric charts.",
    icon: "Layers",
    stat: "60 FPS rendering",
    highlight: "Zero-Latency",
    animationDir: "right"
  },
  {
    id: "feat-3",
    tag: "Edge Performance",
    title: "Sub-10ms Neural Sync",
    description: "Global edge relay network with semantic vector caches distributed across 320 points of presence worldwide.",
    icon: "Zap",
    stat: "8.4ms global p99",
    highlight: "Ultra Fast",
    animationDir: "left"
  },
  {
    id: "feat-4",
    tag: "Data Pipeline",
    title: "Continuous Neural Learning",
    description: "Streaming real-time weight adaptation that continuously evolves model accuracy without triggering catastrophic forgetting.",
    icon: "Cpu",
    stat: "Real-time updates",
    highlight: "Adaptive Weights",
    animationDir: "up"
  },
  {
    id: "feat-5",
    tag: "Enterprise Trust",
    title: "Deterministic Guardrails",
    description: "Zero-hallucination semantic fences with mathematical proofs and immutable compliance telemetry auditing.",
    icon: "ShieldCheck",
    stat: "99.999% compliance",
    highlight: "Mathematically Verified",
    animationDir: "right"
  },
  {
    id: "feat-6",
    tag: "Ecosystem Integration",
    title: "Universal SDK & API Gateway",
    description: "Seamless bi-directional bridges for React, Python, Rust, Unreal Engine, Figma, and distributed microservices.",
    icon: "Share2",
    stat: "50+ pre-built connectors",
    highlight: "Plug & Play",
    animationDir: "left"
  }
];

export const SERVICES_DATA = [
  {
    id: "srv-1",
    title: "Autonomous Enterprise Orchestration",
    badge: "Enterprise Ready",
    category: "Workflow Automation",
    description: "End-to-end cognitive automation that links ERP, CRM, and internal databases with conversational decision agents that take verified actions.",
    features: [
      "Multi-agent task decomposition & consensus protocol",
      "Human-in-the-loop oversight with one-click approval",
      "Real-time event-driven trigger system with webhook web",
      "Comprehensive telemetry dashboard with trace replay"
    ],
    highlightMetric: "82% Operational Cost Reduction",
    ctaText: "Explore Orchestration"
  },
  {
    id: "srv-2",
    title: "Spatial Computing & Digital Twins",
    badge: "Immersive 3D",
    category: "Spatial AI",
    description: "Create interactive, photorealistic digital twins of industrial facilities, retail spaces, and complex architectures powered by live IoT telemetry.",
    features: [
      "Dynamic CAD & BIM ingestion pipeline",
      "WebGL & WebXR browser-native streaming",
      "Simulated physics and stress prediction engines",
      "Collaborative multiplayer spatial whiteboarding"
    ],
    highlightMetric: "120 FPS Sub-pixel Precision",
    ctaText: "Discover Spatial AI"
  },
  {
    id: "srv-3",
    title: "Custom LLM & Diffusion Fine-Tuning",
    badge: "Proprietary Models",
    category: "Model Engineering",
    description: "Bespoke foundation model adaptation tailored specifically to your private enterprise domain data, vocabulary, and compliance standards.",
    features: [
      "QLoRA and full-parameter tuning on isolated clusters",
      "Synthetic data generation with adversarial verification",
      "Model distillation for ultra-fast edge deployment",
      "Continuous active learning from user feedback loops"
    ],
    highlightMetric: "4.8x Higher Benchmark Accuracy",
    ctaText: "Request Model Architecture"
  }
];

export const SHOWCASE_DATA = [
  {
    id: "proj-1",
    title: "Vortex 3D Spatial Cockpit",
    category: "Spatial UI",
    client: "Aerospace Dynamics",
    description: "Real-time volumetric mission control dashboard rendering 100,000 telemetry data points in immersive 3D space.",
    tags: ["WebGL", "Three.js", "Spatial AI", "120 FPS"],
    imageGradient: "from-purple-600/30 via-indigo-600/20 to-cyan-500/30",
    stats: { fps: "120 FPS", latency: "4.2ms", nodes: "100K" }
  },
  {
    id: "proj-2",
    title: "Aura Autonomous Financial Sentinel",
    category: "Autonomous Agents",
    client: "Global Capital Corp",
    description: "Multi-agent autonomous risk mitigation pipeline scanning global market micro-signals and executing hedging protocols in microseconds.",
    tags: ["Autonomous Mesh", "Sub-ms Execution", "Zero Drift"],
    imageGradient: "from-cyan-500/30 via-teal-600/20 to-emerald-500/30",
    stats: { volume: "$1.4B/day", latency: "1.8ms", accuracy: "99.94%" }
  },
  {
    id: "proj-3",
    title: "Synapse Brain-Computer Visualizer",
    category: "Neural Workflows",
    client: "NeuroTech Labs",
    description: "Neural signal decoding interface turning complex bio-telemetry waves into actionable interactive 3D brain map topologies.",
    tags: ["Neural Mapping", "Real-Time FFT", "WebXR"],
    imageGradient: "from-rose-500/30 via-pink-600/20 to-purple-600/30",
    stats: { bandwidth: "2.4 GB/s", channels: "512", accuracy: "98.7%" }
  },
  {
    id: "proj-4",
    title: "OmniStore Intelligent Retail Matrix",
    category: "Spatial UI",
    client: "Lumina Brands",
    description: "Photorealistic 3D virtual showroom with conversational AI stylists and real-time raytraced fabric reflections.",
    tags: ["Raytracing", "Conversational AI", "E-Commerce"],
    imageGradient: "from-amber-500/30 via-orange-600/20 to-purple-600/30",
    stats: { conversion: "+310%", dwellTime: "14.2 min", returnRate: "-48%" }
  },
  {
    id: "proj-5",
    title: "BioGenesis Molecular Drug Synthesizer",
    category: "Neural Workflows",
    client: "TheraPharma",
    description: "Generative molecular docking pipeline testing 10M protein conformations per minute to identify targeted cancer inhibitors.",
    tags: ["Generative Bio", "Quantum Sim", "Distributed GPU"],
    imageGradient: "from-emerald-500/30 via-cyan-600/20 to-blue-600/30",
    stats: { compounds: "10M/min", hitRate: "92.1%", timeSaved: "14 Mos" }
  },
  {
    id: "proj-6",
    title: "CyberPulse Zero-Trust Security Mesh",
    category: "Autonomous Agents",
    client: "Defense Cloud",
    description: "Self-adapting autonomous defense agents that neutralize sophisticated polymorphic zero-day exploits in under 50 milliseconds.",
    tags: ["Zero-Trust", "Post-Quantum", "Auto-Remediation"],
    imageGradient: "from-violet-600/30 via-fuchsia-600/20 to-rose-600/30",
    stats: { responseTime: "28ms", threatsBlocked: "99.999%", uptime: "100%" }
  }
];

export const PLAYGROUND_PRESETS = [
  {
    id: "play-1",
    label: "3D Analytics HUD",
    prompt: "Generate an interactive dark-mode spatial analytics HUD with real-time vector graphs and telemetry nodes.",
    result: {
      type: "Spatial Dashboard",
      components: ["Volumetric Vector Field", "Quantum Latency Gauge", "Live Agent Feed"],
      code: `<SpatialHUD theme="cyber-obsidian">\n  <VectorField resolution={1024} glow="#8b5cf6" />\n  <TelemetryRing metric="8.4ms" status="optimal" />\n  <AgentGrid activeNodes={42} />\n</SpatialHUD>`,
      previewStats: { latency: "6.2ms", fps: "120 FPS", nodes: "42 Active" }
    }
  },
  {
    id: "play-2",
    label: "Autonomous Sales Agent",
    prompt: "Create an autonomous B2B sales development agent that qualifies leads, handles objections, and schedules demos.",
    result: {
      type: "Autonomous Pipeline",
      components: ["Intent Recognition Core", "CRM Bi-directional Sync", "Voice Synthesis"],
      code: `const agent = new Aetheria.Agent({\n  role: 'Enterprise SDR',\n  voice: 'neural-aurora-v4',\n  integrations: ['Salesforce', 'Slack', 'Calendar']\n});`,
      previewStats: { qualificationSpeed: "<2 sec", accuracy: "99.2%", satisfaction: "98%" }
    }
  },
  {
    id: "play-3",
    label: "Neural Encryption Mesh",
    prompt: "Synthesize a zero-knowledge confidential computing pipeline for multi-party financial data training.",
    result: {
      type: "Quantum Security Enclave",
      components: ["Kyber-1024 Handshake", "Homomorphic Sharding", "Immutable Ledger"],
      code: `const secureChannel = Aetheria.ZK.createChannel({\n  cipher: 'CRYSTALS-Kyber-1024',\n  multiparty: true,\n  auditProof: 'snark-groth16'\n});`,
      previewStats: { cipherStrength: "Post-Quantum", overhead: "<1.2%", auditGrade: "A+" }
    }
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Connect & Ingest",
    subtitle: "Unified Data Fabric",
    description: "Link your APIs, databases, vector stores, and real-time event streams through our zero-configuration universal adapter gateway.",
    icon: "Database",
    color: "from-purple-500 to-indigo-500"
  },
  {
    step: "02",
    title: "Neural Mesh Calibration",
    subtitle: "Custom Cognitive Topology",
    description: "AETHERIA analyzes your domain topology and configures an optimal swarm of specialized cognitive micro-agents with deterministic guardrails.",
    icon: "Cpu",
    color: "from-indigo-500 to-cyan-500"
  },
  {
    step: "03",
    title: "Spatial & Workflow Synthesis",
    subtitle: "Interactive Real-time Canvas",
    description: "Generate reactive 3D spatial user interfaces or automated multi-step logic graphs with instant hot-reloading and visual debugging.",
    icon: "Layout",
    color: "from-cyan-500 to-emerald-500"
  },
  {
    step: "04",
    title: "Global Edge Orchestration",
    subtitle: "Sub-10ms Worldwide Deployment",
    description: "Deploy to our global edge mesh with automatic geo-routing, semantic edge caching, and self-healing failover clusters.",
    icon: "Globe",
    color: "from-emerald-500 to-amber-500"
  },
  {
    step: "05",
    title: "Continuous Autonomous Evolution",
    subtitle: "Self-Refining Accuracy",
    description: "Agents continuously learn from execution traces and telemetry, optimizing latency and accuracy without manual retraining.",
    icon: "Sparkles",
    color: "from-amber-500 to-rose-500"
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    name: "Dr. Elena Rostova",
    role: "VP of Artificial Intelligence",
    company: "Apex HyperScale",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "AETHERIA NEXUS cut our autonomous pipeline deployment time from 6 months down to 4 days. The sub-10ms neural mesh synchronization across global edge clusters is simply unmatched in the industry.",
    metrics: "94% Latency Reduction"
  },
  {
    id: "test-2",
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Vanguard Spatial Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "The ability to generate interactive 3D spatial interfaces straight from natural language has transformed our industrial simulation platform. Our clients are completely stunned by the 120 FPS performance.",
    metrics: "3.8x Customer Engagement"
  },
  {
    id: "test-3",
    name: "Sophia Chen-Torres",
    role: "Head of Autonomous Systems",
    company: "Aether Robotics",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "Deterministic guardrails with zero-knowledge mathematical verification gave our risk committee the confidence to deploy multi-agent autonomous trading with zero security hesitations.",
    metrics: "100% Audit Compliance"
  },
  {
    id: "test-4",
    name: "Liam O'Connor",
    role: "Co-Founder & CEO",
    company: "Synthetix AI",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "Building our AI-native SaaS product on AETHERIA felt like jumping 5 years into the future. The developer experience, telemetry dashboards, and visual sandbox are pure art.",
    metrics: "$18M Series A Raised"
  },
  {
    id: "test-5",
    name: "Amara Diallo",
    role: "Principal Spatial Architect",
    company: "Matrix Reality",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "We replaced three separate vector databases, an orchestration layer, and a custom WebGL pipeline with AETHERIA alone. Cleanest architecture we have ever built.",
    metrics: "70% Infrastructure Savings"
  }
];

export const STATS_DATA = [
  {
    id: "stat-1",
    label: "Active Neural Nodes",
    value: 124500,
    suffix: "+",
    growth: "+310% YoY",
    description: "Distributed edge GPU compute units processing real-time inferences."
  },
  {
    id: "stat-2",
    label: "Global Uptime SLA",
    value: 99.999,
    suffix: "%",
    growth: "Zero Downtime",
    description: "High-availability multi-region cluster with self-healing failover."
  },
  {
    id: "stat-3",
    label: "Average Edge Latency",
    value: 8.4,
    suffix: "ms",
    growth: "-62% vs Industry",
    description: "P99 inference synchronization time across 320 worldwide PoPs."
  },
  {
    id: "stat-4",
    label: "Autonomous Value Created",
    value: 480,
    prefix: "$",
    suffix: "M+",
    growth: "Enterprise ROI",
    description: "Verified operational savings and revenue unlocked by client agent swarms."
  }
];

export const FAQS_DATA = [
  {
    question: "How does AETHERIA ensure zero hallucinations in autonomous actions?",
    answer: "AETHERIA utilizes a dual-engine deterministic semantic fence combined with formal mathematical verification. Every agent decision passes through real-time constraint validation before triggering state changes, ensuring 99.999% predictable compliance."
  },
  {
    question: "Can I deploy AETHERIA in air-gapped on-premise enclaves?",
    answer: "Yes! AETHERIA Enterprise includes a fully containerized Kubernetes operator and bare-metal edge agent bundle with zero outbound internet dependencies and native Kyber-1024 post-quantum encryption."
  },
  {
    question: "What frameworks and languages are natively supported?",
    answer: "We provide first-class SDKs for React, Next.js, Python (PyTorch/LangChain compatible), Rust, TypeScript, Go, as well as native plugins for Unreal Engine 5, Unity, and Figma."
  },
  {
    question: "How does the pricing scale for high-volume inference?",
    answer: "Our dynamic compute scheduler offers transparent per-second token consumption with automatic tiered volume discounts and zero idle compute server fees."
  }
];

export const ACCENT_THEMES = [
  { id: "violet", name: "Cyber Violet", primary: "#8b5cf6", secondary: "#06b6d4" },
  { id: "cyan", name: "Electric Cyan", primary: "#06b6d4", secondary: "#3b82f6" },
  { id: "emerald", name: "Aurora Emerald", primary: "#10b981", secondary: "#06b6d4" },
  { id: "rose", name: "Neon Rose", primary: "#f43f5e", secondary: "#8b5cf6" }
];
