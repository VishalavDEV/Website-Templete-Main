export const BRAND = {
  name: "ORION",
  tagline: "Strategy for what comes next.",
  positioning: "A global consulting and business transformation company helping ambitious organizations navigate complex challenges, build resilient operations, and create long-term growth.",
  established: 2008,
  hq: "Zurich & New York",
  offices: [
    { city: "Zurich", country: "Switzerland", address: "Talstrasse 41, 8001 Zürich", phone: "+41 44 214 8000" },
    { city: "New York", country: "United States", address: "575 5th Ave, 32nd Floor, NY 10017", phone: "+1 212 555 0192" },
    { city: "London", country: "United Kingdom", address: "1 Finsbury Circus, London EC2M 7EB", phone: "+44 20 7946 0910" },
    { city: "Singapore", country: "Singapore", address: "8 Marina View, Asia Square Tower 1", phone: "+65 6789 0123" },
    { city: "Tokyo", country: "Japan", address: "Roppongi Hills Mori Tower, Minato-ku", phone: "+81 3 5555 0144" }
  ]
};

export const STATS = [
  { value: "18", suffix: "", label: "YEARS", sublabel: "OF IMPACT" },
  { value: "42", suffix: "", label: "MARKETS", sublabel: "SERVED GLOBALLY" },
  { value: "27", suffix: "", label: "INDUSTRIES", sublabel: "TRANSFORMED" },
  { value: "96", suffix: "%", label: "CLIENT", sublabel: "RETENTION RATE" }
];

export const HERO_DATA = {
  label: "ORION / GLOBAL CONSULTING",
  headlineLine1: "Building",
  headlineLine2: "businesses",
  headlineLine3: "that move with the",
  headlineLine4: "world.",
  headlineSerifWord: "world.",
  subtext: "We advise sovereign institutions, Fortune 100 enterprise leaders, and pioneering disruptors on navigating structural shifts, industrial decarbonization, and systemic technological advantage.",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
  imageCaption: "Architecture of Transformation — Zurich Financial Hub"
};

export const SERVICES = [
  {
    id: "strategy",
    number: "01",
    title: "STRATEGY",
    shortTitle: "Corporate Strategy",
    tagline: "Defining where your organization should compete and how to win.",
    description: "In an era of compressed industry cycles, traditional strategic planning is obsolete. We design dynamic corporate strategies that stress-test business models against geopolitical volatility, capital market shifts, and emerging technological disruptions.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Dynamic Portfolio & Capital Allocation",
      "M&A Strategy & Sovereign Joint Ventures",
      "Scenario Planning & Macro-Risk Stress Testing",
      "Corporate Purpose & ESG Value Architecture"
    ],
    metrics: [
      { label: "Average Value Unlocked", value: "$1.8B+" },
      { label: "Time to Execution", value: "90 Days" },
      { label: "Executive Consensus", value: "99%" }
    ],
    methodology: [
      { step: "01", title: "Diagnostic & Frontier Mapping", desc: "Rigorous quantitative baselining of core economics, margin dispersion, and structural headwinds." },
      { step: "02", title: "Asymmetric Option Design", desc: "Modeling 4-5 divergent competitive vectors with probabilistic capital and risk modeling." },
      { step: "03", title: "Capital & Operating Alignment", desc: "Rewiring organizational incentives, governance scorecards, and board approval frameworks." }
    ]
  },
  {
    id: "transformation",
    number: "02",
    title: "TRANSFORMATION",
    shortTitle: "Business Transformation",
    tagline: "Holistic organizational restructuring for enduring market leadership.",
    description: "True enterprise transformation is not merely a collection of isolated initiatives; it is a fundamental rewiring of how an institution generates value, allocates capital, and mobilizes talent under pressure.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Zero-Based Operating Model Redesign",
      "Comprehensive Turnaround & Restructuring",
      "Performance Management Architecture",
      "Cultural Transformation & Change Mobilization"
    ],
    metrics: [
      { label: "Margin Improvement", value: "+380 bps" },
      { label: "Program Sustainability", value: "4.8x" },
      { label: "Cross-Functional Velocity", value: "+65%" }
    ],
    methodology: [
      { step: "01", title: "Value Potential Architecture", desc: "Granular bottom-up discovery of margin leaks, structural redundancies, and growth friction." },
      { step: "02", title: "Transformation Engine Setup", desc: "Deploying a rigorous transformation office with single-point accountability metrics." },
      { step: "03", title: "Institutionalization", desc: "Embedding new behavioral rituals and continuous productivity mechanisms." }
    ]
  },
  {
    id: "operations",
    number: "03",
    title: "OPERATIONS",
    shortTitle: "Resilient Operations",
    tagline: "Rebuilding global supply chains and manufacturing for extreme resilience.",
    description: "From factory floors to continental distribution corridors, we help organizations transition from fragile, hyper-lean supply systems to agile, carbon-optimized networks capable of withstanding systemic shocks.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Multi-Hub Supply Chain Geostrategy",
      "Smart Factory & Robotics Integration",
      "Strategic Procurement & Sourcing Optimization",
      "Logistics Decarbonization & Circularity"
    ],
    metrics: [
      { label: "Lead Time Reduction", value: "-45%" },
      { label: "Working Capital Freed", value: "$420M" },
      { label: "Scope 1 & 2 Reduction", value: "-32%" }
    ],
    methodology: [
      { step: "01", title: "Network Stress-Test", desc: "Simulating severe geopolitical, weather, and supplier tier-3 disruption scenarios." },
      { step: "02", title: "Modular Architecture", desc: "Redesigning sourcing and manufacturing nodes for localized near-shore resilience." },
      { step: "03", title: "Autonomous Orchestration", desc: "Connecting suppliers, factories, and warehouses with predictive control towers." }
    ]
  },
  {
    id: "digital",
    number: "04",
    title: "DIGITAL & AI",
    shortTitle: "Applied AI & Tech",
    tagline: "Harnessing sovereign AI and modern enterprise architecture for strategic moat.",
    description: "We bypass digital transformation hype to architect enterprise-grade AI systems, modernized legacy backbones, and proprietary data moats that convert raw organizational knowledge into defensible market advantage.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Enterprise AI & Autonomous Agent Architecture",
      "Core Cloud & Legacy Modernization",
      "Proprietary Data Governance & Sovereignty",
      "Cyber Resilience & Defensive Architecture"
    ],
    metrics: [
      { label: "Operational Speed", value: "10x" },
      { label: "Legacy Modernization", value: "100%" },
      { label: "ROI on AI Deployment", value: "3.4x" }
    ],
    methodology: [
      { step: "01", title: "Data Moat Discovery", desc: "Isolating high-value internal data assets and strategic IP for enterprise models." },
      { step: "02", title: "Secure Agentic Orchestration", desc: "Deploying private foundation models and specialized automation workflows." },
      { step: "03", title: "Continuous Value Monitoring", desc: "Hardwiring AI agent output into core financial and operational KPIs." }
    ]
  },
  {
    id: "organization",
    number: "05",
    title: "ORGANIZATION",
    shortTitle: "Leadership & Talent",
    tagline: "Structuring leadership teams and governance for high-stakes execution.",
    description: "Strategy without organizational capability is merely ambition. We align executive governance, talent architecture, and institutional culture with long-term strategic mandates.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    deliverables: [
      "Executive Team Alignment & Succession",
      "Post-Merger Cultural Integration",
      "Decentralized Governance & Decision Rights",
      "High-Performance Talent Architecture"
    ],
    metrics: [
      { label: "Decision Velocity", value: "+75%" },
      { label: "Key Talent Retention", value: "98%" },
      { label: "Cultural Health Score", value: "92/100" }
    ],
    methodology: [
      { step: "01", title: "Governance Audit", desc: "Mapping bottleneck friction in board decisions and business unit approvals." },
      { step: "02", title: "Decision Rights Matrix", desc: "Clarifying single-point ownership for high-impact capital and operational vectors." },
      { step: "03", title: "Executive Coaching & Immersion", desc: "Aligning top 100 leaders on clear strategic narrative and accountability." }
    ]
  }
];

export const CASE_STUDIES = [
  {
    id: "industrial-manufacturing-network",
    number: "01",
    sector: "INDUSTRIAL",
    client: "Global Heavy Machinery Manufacturer",
    title: "Reimagining a global manufacturing network.",
    headlineMetric: "+34%",
    metricLabel: "operational efficiency",
    secondaryMetric: "$420M working capital unlocked",
    timeline: "14 months",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop",
    summary: "How a 120-year-old heavy machinery conglomerate restructured 38 plants across 4 continents into 6 agile, autonomous regional micro-hubs.",
    challenge: "Faced with severe supply disruptions, tariff volatility, and mounting inventory costs, the client had experienced a 220 bps margin degradation over 3 fiscal years. Their legacy single-hub production strategy was unsuited to modern fragmented trade corridors.",
    intervention: "ORION executed a comprehensive diagnostic across all 38 facilities, designing a multi-hub manufacturing architecture. We deployed predictive digital twins, automated localized procurement, and restructured tier-1 supplier agreements.",
    results: [
      { label: "Manufacturing Throughput", val: "+34%" },
      { label: "Working Capital Freed", val: "$420M" },
      { label: "Supplier Lead Variance", val: "-52%" },
      { label: "Scope 1 Emissions", val: "-29%" }
    ],
    quote: {
      text: "ORION gave our executive committee the courage and empirical clarity to make decisions we had postponed for a decade. The results speak for themselves.",
      author: "Lars Lindstrom",
      role: "Chief Operating Officer",
      company: "Nordic Industrial Group"
    }
  },
  {
    id: "energy-transmission-grid",
    number: "02",
    sector: "ENERGY & UTILITIES",
    client: "European National Energy Operator",
    title: "Decarbonizing national transmission grid architecture.",
    headlineMetric: "6.8 GW",
    metricLabel: "renewable power integrated",
    secondaryMetric: "-28% grid curtailment losses",
    timeline: "18 months",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1400&auto=format&fit=crop",
    summary: "Modernizing a legacy power grid to balance intermittent offshore wind and solar capacity while guaranteeing baseload stability.",
    challenge: "The national grid was facing unprecedented curtailment penalties and regional brownout risks as intermittent renewable capacity crossed 40% of peak load without dynamic storage orchestration.",
    intervention: "ORION designed a probabilistic dispatch algorithm and dynamic transmission tariff model, partnering with regional stakeholders to build private battery storage consortia.",
    results: [
      { label: "Integrated Clean Capacity", val: "6.8 GW" },
      { label: "Curtailment Reduction", val: "-28%" },
      { label: "Capital Expenditure Saved", val: "€1.2B" },
      { label: "Carbon Avoidance / Year", val: "4.1 Mt" }
    ],
    quote: {
      text: "The transition from traditional engineering dogma to dynamic algorithmic grid balancing was made seamless by ORION's cross-disciplinary team.",
      author: "Helena Vane",
      role: "Executive Vice President of Grid Strategy",
      company: "Trans-European Power Systems"
    }
  },
  {
    id: "sovereign-wealth-allocation",
    number: "03",
    sector: "FINANCIAL SERVICES",
    client: "Tier-1 Sovereign Wealth Fund ($320B AUM)",
    title: "Replatforming tier-1 sovereign wealth allocation model.",
    headlineMetric: "+140 bps",
    metricLabel: "risk-adjusted net alpha",
    secondaryMetric: "18 global jurisdictions harmonized",
    timeline: "12 months",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
    summary: "Transforming portfolio construction and risk engineering for long-duration sovereign capital across alternative assets and direct infrastructure.",
    challenge: "Legacy benchmark indices failed to capture geopolitical fragmentation and structural inflation, leaving long-term sovereign commitments vulnerable to capital erosion.",
    intervention: "We developed a proprietary multi-asset regime-switching framework, automated global compliance across 18 regulatory jurisdictions, and aligned 250+ investment professionals.",
    results: [
      { label: "Risk-Adjusted Alpha", val: "+140 bps" },
      { label: "Portfolio Stress Time", val: "From 4 days to 4 minutes" },
      { label: "Alternative Asset Yield", val: "+18%" },
      { label: "Direct Infrastructure Deals", val: "$12B" }
    ],
    quote: {
      text: "ORION operates at the highest tier of intellectual rigor and discretion. They fundamentally redefined how we steward national generational capital.",
      author: "Sultan Al-Mansoor",
      role: "Managing Director of Global Strategy",
      company: "State Investment Authority"
    }
  },
  {
    id: "biopharma-clinical-pipeline",
    number: "04",
    sector: "HEALTHCARE & LIFE SCIENCES",
    client: "Global Biotechnology Innovator",
    title: "Accelerating clinical pipeline delivery for global biopharma.",
    headlineMetric: "-9 Mos",
    metricLabel: "time-to-market reduction",
    secondaryMetric: "100% regulatory data integrity",
    timeline: "10 months",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1400&auto=format&fit=crop",
    summary: "Streamlining phase II/III clinical trial protocols and decentralized investigator networks across 14 countries.",
    challenge: "Critical oncology therapies were delayed due to fragmented trial site management, manual patient recruitment funnels, and disparate data silos.",
    intervention: "ORION deployed a real-time synthetic patient recruitment engine and standardized protocol governance across 140 global clinical trial sites.",
    results: [
      { label: "Phase III Duration", val: "-9 Months" },
      { label: "Patient Recruitment Rate", val: "+84%" },
      { label: "Trial Protocol Amendments", val: "-40%" },
      { label: "Patient Retention", val: "97.2%" }
    ],
    quote: {
      text: "Speed in oncology is measured in human lives. ORION's interventions enabled us to deliver breakthrough medicines nearly a year earlier than projected.",
      author: "Dr. Evelyn Reed",
      role: "Chief Medical & Strategy Officer",
      company: "Aura Therapeutics"
    }
  }
];

export const INDUSTRIES = [
  {
    id: "financial-services",
    number: "01",
    name: "Financial Services",
    headline: "Navigating capital realignments and sovereign risk in uncertain markets.",
    description: "We advise private equity, investment banks, asset managers, and sovereign funds on risk engineering, alternative investment models, and regulatory resilience.",
    stats: [
      { label: "Assets Under Strategy", value: "$1.4T" },
      { label: "Private Equity Engagements", value: "340+" },
      { label: "Average Value Multiple", value: "2.8x" }
    ],
    capabilities: [
      "Sovereign & Alternative Asset Allocation",
      "Private Equity Commercial Due Diligence",
      "Risk Architecture & Basel IV Compliance",
      "Digital Banking & Core Modernization"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "healthcare",
    number: "02",
    name: "Healthcare & Life Sciences",
    headline: "Accelerating medical breakthroughs and rewiring care delivery.",
    description: "From biopharma R&D acceleration to sovereign healthcare infrastructure, we bridge scientific rigor with commercial operational excellence.",
    stats: [
      { label: "Clinical Pipelines Accelerated", value: "48+" },
      { label: "Cost-to-Patient Reduced", value: "-22%" },
      { label: "Hospital Networks Optimized", value: "110" }
    ],
    capabilities: [
      "Biopharma R&D Portfolio Optimization",
      "MedTech Commercial Launch Strategies",
      "Hospital Operational Turnarounds",
      "Digital Health & Clinical Data Moats"
    ],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "manufacturing",
    number: "03",
    name: "Industrial & Manufacturing",
    headline: "Pioneering the next era of autonomous, zero-carbon manufacturing.",
    description: "We help heavy industry, automotive, aerospace, and robotics leaders restructure supply chains, build smart factories, and execute energy transitions.",
    stats: [
      { label: "Global Plants Transformed", value: "280+" },
      { label: "Average Factory OEE Lift", value: "+28%" },
      { label: "Carbon Intensity Cut", value: "-35%" }
    ],
    capabilities: [
      "Multi-Hub Supply Chain Reshoring",
      "Industry 4.0 & Smart Robotics",
      "Advanced Procurement Strategy",
      "Industrial Decarbonization"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "consumer",
    number: "04",
    name: "Consumer & Luxury",
    headline: "Crafting timeless brand equity in an era of omnichannel immediacy.",
    description: "We partner with global luxury houses, premium consumer brands, and multi-brand retailers to orchestrate direct-to-consumer intimacy and international expansion.",
    stats: [
      { label: "Direct Margins Unlocked", value: "+46%" },
      { label: "Global Markets Covered", value: "32" },
      { label: "Customer Lifetime Value", value: "+54%" }
    ],
    capabilities: [
      "Luxury Brand Positioning & Heritage Management",
      "Omnichannel Supply & Direct Fulfillment",
      "International Market Entry Strategy",
      "Premium Pricing & Elasticity Architecture"
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "energy",
    number: "05",
    name: "Energy & Infrastructure",
    headline: "Stewardship of the clean energy transition and critical infrastructure.",
    description: "We advise energy producers, utility operators, clean tech innovators, and governments on funding and engineering the trillion-dollar energy transition.",
    stats: [
      { label: "Clean Megawatts Engineered", value: "24 GW" },
      { label: "Capital Projects Optimized", value: "$48B" },
      { label: "Grid Resilience Score", value: "99.9%" }
    ],
    capabilities: [
      "Renewable Energy Project Economics",
      "Grid Modernization & Battery Storage",
      "Hydrogen & Carbon Capture Strategy",
      "Sovereign Energy Security Planning"
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "technology",
    number: "06",
    name: "Technology & Media",
    headline: "Architecting sustainable defensibility in the artificial intelligence cycle.",
    description: "We help enterprise technology companies, semiconductor manufacturers, and media platforms build enduring platform moats and scalable revenue engines.",
    stats: [
      { label: "Enterprise ARR Accelerated", value: "$3.2B" },
      { label: "Tech Mergers Integrated", value: "65+" },
      { label: "Average Retention Lift", value: "+18%" }
    ],
    capabilities: [
      "Applied AI Product Strategy",
      "SaaS Unit Economics & Pricing Model Redesign",
      "Semiconductor Supply Security",
      "Global Enterprise Go-to-Market Strategy"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
  }
];

export const INSIGHTS = [
  {
    id: "resilient-organizations",
    type: "PERSPECTIVE",
    readTime: "08 MIN READ",
    date: "OCTOBER 2026",
    title: "Why resilient organizations will outperform merely efficient ones.",
    subtitle: "For decades, corporate strategy prioritized hyper-efficiency and lean operating models. Today, that brittle paradigm is collapsing under systemic geopolitical and macroeconomic shocks.",
    author: {
      name: "Maya Shah",
      role: "Managing Partner",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
    featured: true,
    content: [
      "For over forty years, the guiding religion of corporate management was simple: eliminate friction, reduce working capital, and optimize every link of the value chain for immediate quarterly efficiency.",
      "Today, that paradigm has encountered its historical limit. An enterprise optimized solely for peace and stability becomes catastrophic when the external environment becomes chaotic.",
      "Resilience is not merely disaster recovery or redundant inventory. It is an active organizational capability—the structural capacity to absorb external shock, rapidly reconfigure capital, and emerge from disruption with a wider competitive moat than before.",
      "Our research across 850 global enterprises over the last decade demonstrates that companies investing in operational buffer capacity and diversified sourcing generate 2.4x higher risk-adjusted total shareholder return during periods of macro turbulence."
    ]
  },
  {
    id: "industrial-autonomy-generative-manufacturing",
    type: "RESEARCH REPORT",
    readTime: "12 MIN READ",
    date: "NOVEMBER 2026",
    title: "The new economics of industrial autonomy and generative manufacturing.",
    subtitle: "How combining computer vision, physical robotics, and autonomous agent loops is shifting the marginal cost of precision fabrication toward zero.",
    author: {
      name: "Dr. Henrik Lindqvist",
      role: "Senior Partner, Industrial Practice",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    content: [
      "The physical factory is undergoing its most radical transformation since the introduction of the assembly line. By integrating spatial intelligence with closed-loop predictive robotics, leading manufacturers are shifting from rigid batch runs to adaptive continuous fabrication.",
      "In this report, we outline the five foundational investment hurdles every industrial CEO must navigate to capture this $2.1T productivity dividend without succumbing to vendor lock-in."
    ]
  },
  {
    id: "capital-allocation-interest-rates",
    type: "EXECUTIVE BRIEF",
    readTime: "06 MIN READ",
    date: "SEPTEMBER 2026",
    title: "Capital allocation in an era of structural interest rate realignments.",
    subtitle: "The era of near-zero capital cost is behind us. Chief Financial Officers must reinvent hurdle rate governance and portfolio divestment frameworks.",
    author: {
      name: "Elena Rostova",
      role: "Senior Partner, Operations",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    content: [
      "When money has a real price, capital discipline stops being an accounting exercise and becomes the primary weapon of strategic differentiation.",
      "Organizations that actively prune bottom-quartile business units and recycle balance sheet capacity into high-conviction growth vectors will decisively widen their lead over leveraged peers."
    ]
  },
  {
    id: "designing-adaptive-enterprise",
    type: "STRATEGY",
    readTime: "09 MIN READ",
    date: "AUGUST 2026",
    title: "Designing the adaptive enterprise: moving from hierarchy to orchestration.",
    subtitle: "Why top-down corporate hierarchies fail to process information at the speed of modern market shifts, and how to structure autonomous execution cells.",
    author: {
      name: "Marcus Vance",
      role: "Partner, Digital & AI",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    content: [
      "Information latency kills large organizations. When frontline insights take four weeks to climb the management hierarchy and another four weeks for decisions to trickle down, the market opportunity is already lost.",
      "We unpack the governance models of firms that operate as coordinated networks rather than bureaucratic pyramids."
    ]
  },
  {
    id: "geopolitical-reshoring-supply-chains",
    type: "GLOBAL INSIGHT",
    readTime: "11 MIN READ",
    date: "JULY 2026",
    title: "Geopolitical re-shoring and the multi-hub supply chain imperative.",
    subtitle: "A practical executive playbook for redesigning cross-border value chains across North America, Europe, and Southeast Asia.",
    author: {
      name: "Tara Chen",
      role: "Partner, Healthcare & Life Sciences",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    content: [
      "Decoupling is not binary. The modern global company does not retreat into autarky; it builds redundant regional clusters that can operate autonomously when cross-border frictions escalate."
    ]
  },
  {
    id: "sovereign-ai-infrastructure",
    type: "PERSPECTIVE",
    readTime: "07 MIN READ",
    date: "JUNE 2026",
    title: "Sovereign AI infrastructure: The strategic playbook for national champions.",
    subtitle: "Why nation states and regulated industries are building localized compute grids and proprietary language models.",
    author: {
      name: "Julian Thorne",
      role: "Partner, Energy & Infrastructure",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    content: [
      "Data sovereignty and computational independence are becoming core pillars of national security and corporate resilience. We examine the economic models behind sovereign AI cloud buildouts."
    ]
  }
];

export const TEAM = [
  {
    id: "maya-shah",
    name: "MAYA SHAH",
    role: "Managing Partner",
    focus: "Strategy / Transformation",
    location: "Zurich / New York",
    bio: "Maya has advised Fortune 50 boards and sovereign wealth institutions for over two decades on capital restructuring, cross-border M&A, and enterprise turnaround.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    experience: "Ex-McKinsey Director, MBA Harvard Business School, Board Member at Swiss Economic Forum"
  },
  {
    id: "henrik-lindqvist",
    name: "DR. HENRIK LINDQVIST",
    role: "Senior Partner",
    focus: "Industrial Practice / Robotics",
    location: "Stockholm / Munich",
    bio: "Henrik leads ORION's global manufacturing and industrial network practice, specializing in autonomous production facilities and supply chain resilience.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    experience: "PhD Mechanical Engineering ETH Zurich, 18+ years advising automotive and heavy machinery conglomerates"
  },
  {
    id: "elena-rostova",
    name: "ELENA ROSTOVA",
    role: "Senior Partner",
    focus: "Global Operations & Supply Chain",
    location: "London / Geneva",
    bio: "Elena architects global logistics corridors, strategic procurement frameworks, and resilient supply chain networks for critical infrastructure.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    experience: "MSc Oxford University, Former Head of Global Procurement for tier-1 aerospace supplier"
  },
  {
    id: "marcus-vance",
    name: "MARCUS VANCE",
    role: "Partner",
    focus: "Digital & Applied AI Architecture",
    location: "San Francisco / New York",
    bio: "Marcus bridges frontier artificial intelligence research with enterprise execution, advising executive leadership on proprietary AI moats.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    experience: "Former VP of Engineering at top-tier cloud architecture firm, Stanford CS Alum"
  },
  {
    id: "tara-chen",
    name: "TARA CHEN",
    role: "Partner",
    focus: "Healthcare & Life Sciences",
    location: "Singapore",
    bio: "Tara counsels global pharmaceutical innovators, genomic research institutes, and hospital systems on R&D acceleration and commercialization.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    experience: "MD / MBA Johns Hopkins, advisor to regional health ministries across APAC"
  },
  {
    id: "julian-thorne",
    name: "JULIAN THORNE",
    role: "Partner",
    focus: "Energy Transition & Infrastructure",
    location: "Tokyo / London",
    bio: "Julian spearheads capital deployment and strategic policy frameworks for national renewable energy grids, green hydrogen, and carbon reduction.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    experience: "20+ years energy economics, Cambridge University Energy Institute Fellow"
  }
];

export const VALUES = [
  {
    number: "01",
    title: "Stay curious.",
    subtitle: "We relentlessly interrogate orthodoxies and assumptions.",
    description: "Every significant breakthrough begins by asking what everyone else took for granted. We bring intellectual rigor, intellectual honesty, and deep curiosity to every challenge."
  },
  {
    number: "02",
    title: "Make complexity clear.",
    subtitle: "Simplicity is the ultimate sophistication in high-stakes strategy.",
    description: "We don't hide behind convoluted jargon. Our mandate is to crystallize ambiguous, multidimensional problems into decisive, executable action vectors."
  },
  {
    number: "03",
    title: "Build for the long term.",
    subtitle: "Short-term optics never supersede sustainable enterprise value.",
    description: "We design institutions built to outlast market cycles. We measure our success by the enduring health and resilience of our clients five, ten, and twenty years out."
  },
  {
    number: "04",
    title: "Leave things better.",
    subtitle: "Our goal is internal client mastery, not permanent dependency.",
    description: "We transfer capability, build internal leadership muscles, and embed lasting institutional knowledge so that our clients thrive long after our engagement concludes."
  }
];

export const CAREERS_JOBS = [
  {
    id: "eng-mgr-energy",
    title: "Engagement Manager — Energy Transition & Clean Tech",
    practice: "Energy & Infrastructure",
    location: "London / Hybrid",
    type: "Full-Time",
    experience: "6–9 Years",
    description: "Lead multi-disciplinary strategy teams advising national grid operators, utility conglomerates, and renewable funds on decarbonization capital planning and infrastructure economics."
  },
  {
    id: "sr-assoc-applied-ai",
    title: "Senior Associate — Applied AI & Enterprise Systems",
    practice: "Digital & AI",
    location: "San Francisco / New York",
    type: "Full-Time",
    experience: "4–7 Years",
    description: "Architect and implement enterprise AI automation workflows, private model deployment strategies, and technical due diligence for Fortune 100 technology transformations."
  },
  {
    id: "practice-lead-industrial",
    title: "Practice Lead — Industrial Operations & Supply Chain",
    practice: "Operations",
    location: "Zurich / Munich",
    type: "Full-Time",
    experience: "8–12 Years",
    description: "Direct transformative manufacturing overhauls, autonomous robotics integration, and near-shoring network restructuring for European industrial champions."
  },
  {
    id: "sr-consultant-healthcare",
    title: "Senior Consultant — Healthcare & Life Sciences",
    practice: "Healthcare",
    location: "Singapore",
    type: "Full-Time",
    experience: "3–6 Years",
    description: "Partner with pharmaceutical leaders and healthcare providers on clinical development acceleration, commercial launch strategy, and regulatory digital transformation across APAC."
  },
  {
    id: "director-strategic-comms",
    title: "Director of Strategic Editorial & Thought Leadership",
    practice: "Executive Office",
    location: "New York / London",
    type: "Full-Time",
    experience: "7–10 Years",
    description: "Spearhead ORION's global research publications, executive monographs, and economic briefings, maintaining our uncompromising editorial standard."
  }
];

export const SOLUTIONS = [
  {
    id: "enterprise-turnaround",
    title: "Enterprise Turnaround & Value Creation",
    category: "TRANSFORMATION",
    tagline: "Restoring balance sheet health and operating momentum under pressure.",
    impact: "+420 bps margin expansion within 12 months",
    description: "For institutions facing structural disruption, margin compression, or liquidity hurdles, we deploy rapid-response diagnostic and operational engines to stabilize cash flow, renegotiate obligations, and rebuild market trust."
  },
  {
    id: "net-zero-transition",
    title: "Net-Zero Industrial Decarbonization",
    category: "SUSTAINABILITY & ENERGY",
    tagline: "Converting regulatory compliance into commercial competitive advantage.",
    impact: "-35% carbon intensity with positive ROI",
    description: "We help heavy industry, power utilities, and supply networks decarbonize their Scope 1, 2, and 3 emissions while protecting core profitability through clean energy arbitrage and circular business models."
  },
  {
    id: "sovereign-supply-chains",
    title: "Sovereign Supply Chain Architecture",
    category: "OPERATIONS & GEOSTRATEGY",
    tagline: "Building anti-fragile multi-hub supply corridors for critical sectors.",
    impact: "-50% lead time volatility across regional nodes",
    description: "We stress-test and reconfigure global sourcing networks across Europe, the Americas, and Asia, mitigating geopolitical, tariff, and shipping choke points through near-shoring and dual-hub manufacturing."
  },
  {
    id: "applied-ai-implementation",
    title: "Enterprise Applied AI & Autonomous Operations",
    category: "TECHNOLOGY",
    tagline: "Deploying secure, domain-specific AI agent networks to multiply output.",
    impact: "10x acceleration in complex decision workflows",
    description: "We bypass consumer AI hype to construct private, air-gapped enterprise foundation models and specialized agent pipelines hardwired into ERP, CRM, and supply chain telemetry."
  },
  {
    id: "merger-integration",
    title: "Post-Merger Integration & Cultural Synergy",
    category: "ORGANIZATION & M&A",
    tagline: "Capturing 100%+ of modeled deal synergies on Day 100.",
    impact: "1.4x synergy capture versus baseline expectations",
    description: "M&A value often evaporates during implementation. We design rigorous integration management offices, harmonize operating rhythms, and retain top talent throughout cross-border mergers."
  },
  {
    id: "growth-capital-acceleration",
    title: "Growth Acceleration & Capital Stewardship",
    category: "CORPORATE STRATEGY",
    tagline: "Allocating scarce capital to the highest-conviction strategic horizons.",
    impact: "+18% annual return on invested capital (ROIC)",
    description: "We help boards and executive committees audit business unit returns, divest drag assets, and aggressively fund organic and inorganic vectors with defensible competitive moats."
  }
];

export const TESTIMONIAL = {
  quote: "“ORION helped us see the problem differently — and that changed everything.”",
  author: "ANIKA RAO",
  role: "Chief Strategy Officer",
  company: "Global Manufacturing Group",
  metric: "$1.2B portfolio value created over 3 years"
};
