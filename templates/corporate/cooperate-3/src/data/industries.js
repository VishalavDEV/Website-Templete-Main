export const industriesData = [
  {
    id: "financial-services",
    name: "Financial Services",
    code: "SEC-01",
    tagline: "Rewiring institutional banking, asset management, and fintech ecosystems for instant liquidity and automated risk.",
    description: "From tier-1 investment banks navigating balance sheet volatility to digital fintech challengers scaling compliant payment rails, we engineer secure, high-frequency infrastructure.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    keyMetric: {
      value: "$1.4T+",
      label: "Assets Under Optimized Strategy"
    },
    secondaryMetric: {
      value: "-42%",
      label: "Compliance Processing Overhead"
    },
    subSectors: ["Institutional Investment", "Retail & Digital Banking", "Wealth & Asset Management", "Insurance & Risk Underwriting"],
    challenges: [
      "Monolithic core banking migration under 24/7 uptime mandates",
      "Algorithmic risk modeling during sudden macroeconomic rate shocks",
      "Stringent multi-jurisdiction regulatory reporting and fraud defense"
    ],
    solutions: [
      "Zero-trust cloud infrastructure with sub-millisecond execution",
      "AI-driven portfolio stress testing and real-time collateral tracking",
      "Unified compliance data fabric for automated audit readiness"
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    code: "SEC-02",
    tagline: "Accelerating clinical discovery, optimizing care delivery, and digitizing patient-centric value chains.",
    description: "We help healthcare systems, biopharma giants, and medical device innovators eliminate administrative latency, accelerate clinical trial cycles, and scale personalized health tech.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    keyMetric: {
      value: "60%",
      label: "Reduction in Clinical Trial Data Lag"
    },
    secondaryMetric: {
      value: "$280M",
      label: "Average Annual Operational Savings"
    },
    subSectors: ["Biopharma & Therapeutics", "Healthcare Systems & Providers", "MedTech & Diagnostics", "Digital Health Platforms"],
    challenges: [
      "Fragmented electronic health record systems impeding patient insights",
      "Skyrocketing clinical trial development timelines and costs",
      "Complex HIPAA, FDA, and international privacy regulations"
    ],
    solutions: [
      "Decentralized clinical data ingestion platforms with ML anomaly detection",
      "Operational patient-flow optimization reducing bed turnaround by 35%",
      "Secure federated learning systems for privacy-first diagnostic research"
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    code: "SEC-03",
    tagline: "Transforming heavy industrial assets into sensorized, resilient, and autonomous production ecosystems.",
    description: "We work with multinational industrial conglomerates to bridge IT and OT, implement digital twin telemetry, and protect supply chains against global geopolitical disruptions.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
    keyMetric: {
      value: "99.8%",
      label: "Uptime on Connected Plant Floors"
    },
    secondaryMetric: {
      value: "-38%",
      label: "Factory Energy Intensity"
    },
    subSectors: ["Automotive & Mobility", "Aerospace & Defense", "Heavy Machinery & Equipment", "Precision Electronics"],
    challenges: [
      "Unplanned factory line downtime costing millions per hour",
      "Single-source supplier vulnerabilities across global supply chains",
      "Escalating carbon emissions and circularity regulatory penalties"
    ],
    solutions: [
      "Edge-computing vibration and acoustic sensors for predictive maintenance",
      "Dynamic multi-tier supply chain mapping with automated rerouting",
      "Closed-loop energy management and scrap reduction workflows"
    ]
  },
  {
    id: "energy",
    name: "Energy",
    code: "SEC-04",
    tagline: "Navigating the clean transition while maximizing reliability and legacy asset efficiency.",
    description: "We guide global energy utilities, renewables developers, and grid operators in modernizing transmission infrastructure, balancing volatile renewable supplies, and optimizing capital projects.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
    keyMetric: {
      value: "14.2 GW",
      label: "Clean Capacity Grid Synchronized"
    },
    secondaryMetric: {
      value: "-28%",
      label: "Transmission Loss Reduction"
    },
    subSectors: ["Renewable Power (Solar/Wind/Hydro)", "Grid Modernization & Storage", "Clean Hydrogen & Carbon Capture", "Upstream & Midstream Optimization"],
    challenges: [
      "Intermittent renewable generation threatening grid stability",
      "Capital-intensive transitions requiring strict ROI justification",
      "Aging pipeline and transmission infrastructure safety risks"
    ],
    solutions: [
      "AI-driven grid load balancing and battery storage dispatch engines",
      "Digital capital-expenditure tracking with milestone risk prediction",
      "Autonomous drone and satellite asset integrity surveillance"
    ]
  },
  {
    id: "consumer",
    name: "Consumer",
    code: "SEC-05",
    tagline: "Empowering global consumer brands to dominate direct-to-consumer and omnichannel retail.",
    description: "We re-architect consumer goods and retail giants with real-time demand sensing, localized pricing engines, and hyper-personalized customer engagement channels.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    keyMetric: {
      value: "+44%",
      label: "Omnichannel Margin Expansion"
    },
    secondaryMetric: {
      value: "3.4x",
      label: "Customer Lifetime Value"
    },
    subSectors: ["CPG & Packaged Goods", "Luxury & Apparel Retail", "E-Commerce & Marketplaces", "Food & Beverage Systems"],
    challenges: [
      "Rapidly changing consumer preferences eroding traditional brand loyalty",
      "Channel conflict between legacy distributors and direct-to-consumer",
      "High return rates and inventory write-downs in seasonal product lines"
    ],
    solutions: [
      "AI dynamic pricing and markdown optimization platforms",
      "Unified inventory visibility across stores, dark warehouses, and 3PLs",
      "Predictive demand-sensing algorithms reducing overproduction by 40%"
    ]
  },
  {
    id: "technology",
    name: "Technology",
    code: "SEC-06",
    tagline: "Scaling enterprise software, cloud infrastructure, and semiconductor value chains at unprecedented speed.",
    description: "We partner with hyper-growth software enterprises and global semiconductor leaders to streamline developer productivity, optimize unit economics, and conquer global enterprise markets.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    keyMetric: {
      value: "5.1x",
      label: "Net Retention Rate Acceleration"
    },
    secondaryMetric: {
      value: "-52%",
      label: "Cloud Spend Optimization"
    },
    subSectors: ["Enterprise SaaS & Cloud", "Semiconductors & Hardware", "Cybersecurity & Defense Tech", "Data Infrastructure"],
    challenges: [
      "Slowing enterprise sales cycles and surging customer acquisition costs",
      "Ballooning public cloud and AI model training infrastructure bills",
      "Geopolitical export controls and critical chip packaging shortages"
    ],
    solutions: [
      "Product-led growth and enterprise sales alignment playbooks",
      "FinOps cloud architecture overhaul cutting compute waste",
      "Diversified supplier qualification and supply assurance roadmaps"
    ]
  }
];
