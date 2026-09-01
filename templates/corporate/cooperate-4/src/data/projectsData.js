export const projectsData = [
  {
    id: "nexus-intelligence",
    number: "01",
    title: "NEXUS INTELLIGENCE",
    subtitle: "AI-Powered Enterprise Analytics & Autonomous Forecasting Platform",
    client: "Nexus Life Sciences Group",
    industry: "Life Sciences & Genomics",
    category: "AI & Data Engineering",
    description: "An ultra-low latency intelligence grid uniting multi-modal clinical trial data with real-time predictive patient cohort models across 14 research centers.",
    fullStory: "Nexus required an overhaul of their disparate clinical research systems. We engineered a sovereign data mesh and custom LLM inference pipeline that reduced compound discovery modeling from 14 weeks to 36 hours while enforcing strict HIPAA and FDA 21 CFR Part 11 cryptographic compliance.",
    metrics: [
      { label: "Modeling Speed", value: "36 hrs", previous: "14 wks" },
      { label: "Data Throughput", value: "4.2 TB/s", previous: "280 MB/s" },
      { label: "Regulatory Compliance", value: "100%", previous: "Manual" }
    ],
    technologies: ["PyTorch", "Apache Iceberg", "Vector DB", "Distributed Compute", "Zero-Trust Mesh"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    gradient: "linear-gradient(135deg, rgba(0,242,195,0.2) 0%, rgba(14,165,233,0.1) 100%)"
  },
  {
    id: "orbit-commerce",
    number: "02",
    title: "ORBIT COMMERCE",
    subtitle: "Next-Generation Global Digital Commerce Ecosystem",
    client: "Orbit Retail Brands International",
    industry: "Global Retail & Supply Chain",
    category: "Software Engineering & Cloud",
    description: "A headless, multi-region distributed commerce infrastructure capable of orchestrating 120,000 flash-sale orders per minute with sub-80ms worldwide latency.",
    fullStory: "We architected an event-driven micro-frontend and inventory ledger system spanning 38 countries. Replaced monolithic bottlenecks with an edge-cached, fault-tolerant checkout pipeline that scaled through peak Black Friday global traffic with zero degradation.",
    metrics: [
      { label: "Peak Orders/Min", value: "120K", previous: "8.5K" },
      { label: "Global Edge Latency", value: "48ms", previous: "380ms" },
      { label: "Infrastructure Cost", value: "-42%", previous: "Over-provisioned" }
    ],
    technologies: ["Rust", "Kafka", "Edge Workers", "GraphQL Mesh", "Kubernetes Multi-Region"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    gradient: "linear-gradient(135deg, rgba(56,189,248,0.2) 0%, rgba(168,85,247,0.1) 100%)"
  },
  {
    id: "vertex-cloud",
    number: "03",
    title: "VERTEX CLOUD",
    subtitle: "Scalable Sovereign Cloud & Algorithmic Trading Backbone",
    client: "Vertex Financial Holdings",
    industry: "Banking & Capital Markets",
    category: "Cloud Infrastructure & Security",
    description: "A hybrid-sovereign financial cloud architecture processing $18B in daily settlement volume with deterministic microsecond order execution.",
    fullStory: "Vertex modernized its core clearing operations. We implemented an active-active Kubernetes multi-cloud mesh with automated compliance verification, hardware security modules (HSM), and zero-loss disaster recovery protocols across Zurich, London, and New York.",
    metrics: [
      { label: "Daily Settlement", value: "$18B", previous: "$3.2B" },
      { label: "Failover Time", value: "< 2s", previous: "45 mins" },
      { label: "Audit Turnaround", value: "Instant", previous: "3 weeks" }
    ],
    technologies: ["Multi-Cloud GitOps", "eBPF Security", "Terraform", "HSM Encryption", "Zero-Trust"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    gradient: "linear-gradient(135deg, rgba(234,179,8,0.2) 0%, rgba(244,63,94,0.1) 100%)"
  },
  {
    id: "altura-grid",
    number: "04",
    title: "ALTURA SMART GRID",
    subtitle: "Autonomous IoT Telemetry & Renewable Energy Grid Balancing",
    client: "Altura Energy Power Grid",
    industry: "Energy & Infrastructure",
    category: "AI & IoT Engineering",
    description: "Real-time edge computing platform aggregating 8.5M sensor streams to forecast renewable energy load fluctuations and automate battery dispatch.",
    fullStory: "We deployed decentralized neural network agents across 45 wind and solar farm clusters, synchronizing real-time spot market pricing with automated turbine orientation and grid storage release schedules.",
    metrics: [
      { label: "Sensors Monitored", value: "8.5M", previous: "400K" },
      { label: "Grid Curtailment Waste", value: "-34%", previous: "High" },
      { label: "Forecast Accuracy", value: "98.4%", previous: "79%" }
    ],
    technologies: ["Edge AI", "MQTT / Kafka", "Time-Series DB", "Go Microservices", "React Cockpit"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    gradient: "linear-gradient(135deg, rgba(0,242,195,0.2) 0%, rgba(34,197,94,0.1) 100%)"
  }
];
