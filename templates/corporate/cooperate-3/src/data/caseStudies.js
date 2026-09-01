export const caseStudiesData = [
  {
    id: "global-manufacturing",
    number: "01",
    client: "Tier-1 Heavy Industrial Conglomerate",
    industry: "GLOBAL MANUFACTURING",
    title: "Autonomous Factory Floor & Supply Network Overhaul",
    headline: "Transforming 28 legacy production plants into synchronized digital twin nodes.",
    description: "Faced with fragmented legacy MES systems and severe supply chain latency, this $18B multinational industrial leader engaged VANTAGE to execute an end-to-end operational and AI transformation.",
    challenge: "The client operated 28 distinct manufacturing sites across 12 countries with disconnected ERP instances, causing 14% unplanned downtime, severe localized scrap spikes, and an inability to forecast tier-2 component shortages.",
    solution: "VANTAGE deployed an integrated Industrial IoT telemetry fabric, established edge-based predictive vibration analytics, and unified all plant operations into a centralized, real-time command cockpit.",
    results: [
      { metric: "$340M", label: "Annual Operational Savings" },
      { metric: "99.4%", label: "On-Time Customer Delivery" },
      { metric: "-48%", label: "Scrap & Rework Reduction" },
      { metric: "14 Weeks", label: "Full Global Rollout Time" }
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
    quote: {
      text: "VANTAGE did not deliver a theoretical strategy deck. They built the operational nervous system that powers our entire global manufacturing network today.",
      author: "Henrik Lindqvist",
      role: "Executive Vice President of Global Operations"
    },
    technologies: ["Digital Twin Fabric", "Edge Machine Learning", "Real-Time Telemetry", "Supply Chain Control Tower"],
    timeline: "18 Months Engagement",
    region: "Europe & North America"
  },
  {
    id: "financial-services",
    number: "02",
    client: "Global Tier-1 Banking Group",
    industry: "FINANCIAL SERVICES",
    title: "Next-Gen Liquidity Engine & Risk Architecture",
    headline: "Compressing real-time institutional risk calculation from 6 hours to 42 milliseconds.",
    description: "In an era of rapid interest rate volatility and heightened regulatory scrutiny, VANTAGE re-architected the bank's core balance-sheet modeling into a sub-second algorithmic risk engine.",
    challenge: "Overnight batch risk calculations left trading desks blind to intraday market shocks, while legacy siloed regulatory engines required over 450 manual compliance reconciliations weekly.",
    solution: "We designed a microservices-based event-driven data streaming architecture with high-performance C++ algorithmic kernels and automated regulatory telemetry pipelines.",
    results: [
      { metric: "42ms", label: "Intraday Risk Recalculation" },
      { metric: "$1.8B", label: "Capital Requirement Freed" },
      { metric: "-78%", label: "Manual Compliance Tasks" },
      { metric: "100%", label: "Audit Accuracy Score" }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    quote: {
      text: "The speed and mathematical rigor VANTAGE brought to our capital risk infrastructure gave us a decisive competitive edge during unprecedented market volatility.",
      author: "Victoria Sterling",
      role: "Global Head of Balance Sheet Strategy"
    },
    technologies: ["Event-Driven Streaming", "High-Performance Compute", "Automated Compliance Mesh", "Zero-Trust Cloud"],
    timeline: "14 Months Engagement",
    region: "London, New York & Singapore"
  },
  {
    id: "healthcare",
    number: "03",
    client: "Multinational Biopharmaceutical Giant",
    industry: "HEALTHCARE",
    title: "Accelerating Oncology Clinical Trials Through AI Data Fabric",
    headline: "Slashing trial recruitment cycle by 54% while ensuring airtight global compliance.",
    description: "VANTAGE partnered with a top-5 biopharma enterprise to unify clinical trial sites across 34 countries, creating an automated patient matching and real-time trial telemetry ecosystem.",
    challenge: "Oncology trials were suffering from 18-month patient recruitment delays and disparate electronic health record standards across hospitals, inflating trial budgets by over $120M per compound.",
    solution: "We engineered a secure, privacy-preserving federated intelligence layer that continuously senses eligible cohorts across hospital networks without transmitting patient PII.",
    results: [
      { metric: "-54%", label: "Trial Recruitment Duration" },
      { metric: "$180M", label: "Development Cost Avoided" },
      { metric: "99.9%", label: "FDA & EMA Compliance Rate" },
      { metric: "12,000+", label: "Patients Matched to Therapies" }
    ],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    quote: {
      text: "VANTAGE's clinical intelligence platform brought life-saving therapeutics to patients months ahead of schedule. The impact on human lives is immeasurable.",
      author: "Dr. Jonathan Hayes",
      role: "Chief Medical & Innovation Officer"
    },
    technologies: ["Federated Learning", "HIPAA Data Vaults", "Synthetic Cohort Modeling", "Real-World Evidence Ingestion"],
    timeline: "12 Months Engagement",
    region: "Global (34 Countries)"
  },
  {
    id: "consumer",
    number: "04",
    client: "Global Direct-to-Consumer Luxury Group",
    industry: "CONSUMER",
    title: "Omnichannel Growth Engine & Dynamic Pricing Architecture",
    headline: "Unifying 400 flagship boutiques with global digital commerce to lift customer LTV by 3.8x.",
    description: "VANTAGE restructured the client's commercial operations, orchestrating a unified inventory lake, predictive demand forecasting, and personalized luxury clienteling apps.",
    challenge: "Severe inventory mismatches between physical flagships and online warehouses led to heavy markdown losses and lost high-value VIP sales opportunities.",
    solution: "We implemented an omnichannel inventory orchestrator paired with an AI dynamic allocation engine, providing client advisors with real-time stock routing and personalized styling AI.",
    results: [
      { metric: "+46%", label: "Digital Top-Line Revenue" },
      { metric: "3.8x", label: "VIP Client Lifetime Value" },
      { metric: "-62%", label: "Unsold Inventory Markdowns" },
      { metric: "+280 bps", label: "Gross Margin Expansion" }
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
    quote: {
      text: "VANTAGE understood the delicate balance between high-touch luxury exclusivity and high-velocity digital technology better than any consulting firm in the world.",
      author: "Camille Laurent",
      role: "Chief Commercial Officer"
    },
    technologies: ["Omnichannel Order Mesh", "Dynamic Elastic Pricing", "VIP Clienteling AI", "Real-Time Inventory Mesh"],
    timeline: "16 Months Engagement",
    region: "Paris, Tokyo, New York & Dubai"
  },
  {
    id: "energy-modernization",
    number: "05",
    client: "National Grid & Renewable Utility Operator",
    industry: "ENERGY & INFRASTRUCTURE",
    title: "Grid Decarbonization & Renewable Telemetry Orchestration",
    headline: "Integrating 14 GW of intermittent offshore wind with zero dispatch curtailment.",
    description: "VANTAGE engineered an AI battery storage dispatch engine and real-time load balancing architecture for one of the largest energy networks in Northern Europe.",
    challenge: "Rapid integration of offshore wind assets was causing acute grid instability and millions in daily curtailment penalties during sudden meteorological shifts.",
    solution: "We built an algorithmic weather-sensing neural model coupled with automated battery energy storage system (BESS) dispatch software that anticipates grid load 48 hours in advance.",
    results: [
      { metric: "14.2 GW", label: "Renewable Capacity Stabilized" },
      { metric: "-88%", label: "Curtailment Energy Waste" },
      { metric: "$95M", label: "Annual Dispatch Optimization" },
      { metric: "100%", label: "Grid Uptime Maintenance" }
    ],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
    quote: {
      text: "VANTAGE gave our engineering and trading teams the predictive certainty needed to run a 100% renewable balancing loop under extreme weather conditions.",
      author: "Søren Møller",
      role: "Head of Grid Strategy & Systems"
    },
    technologies: ["Neural Weather Forecasting", "Battery Telemetry Dispatch", "SCADA Integration", "Carbon Accounting Engine"],
    timeline: "20 Months Engagement",
    region: "Northern Europe"
  },
  {
    id: "enterprise-ai",
    number: "06",
    client: "Fortune 50 Enterprise Software & Cloud Leader",
    industry: "TECHNOLOGY",
    title: "Autonomous Enterprise LLM Knowledge & Code Intelligence",
    headline: "Deploying private, domain-tuned agentic models across 15,000 engineers.",
    description: "VANTAGE designed and rolled out an enterprise-grade, air-gapped generative AI platform that accelerated internal software development and automated compliance verification.",
    challenge: "Engineering velocity was constrained by fragmented documentation across 20 years of legacy systems, while strict intellectual property controls prevented commercial public AI usage.",
    solution: "We deployed private sovereign open-weights LLMs with Retrieval-Augmented Generation (RAG) across the enterprise code repository and internal knowledge bases.",
    results: [
      { metric: "4.2x", label: "Developer Code Synthesis Velocity" },
      { metric: "-70%", label: "Security & Compliance Audit Time" },
      { metric: "0", label: "Data Leakage or IP Compromises" },
      { metric: "$110M", label: "Productivity Value Unlocked" }
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    quote: {
      text: "VANTAGE's enterprise AI architecture set the standard for private, high-security generative technology within our global engineering organization.",
      author: "David Chen",
      role: "Chief Technology Officer"
    },
    technologies: ["Private Enterprise LLMs", "Vector Data Lake", "Agentic Code Verifiers", "Zero-Egress Security Mesh"],
    timeline: "10 Months Engagement",
    region: "San Francisco & Global Hubs"
  }
];
