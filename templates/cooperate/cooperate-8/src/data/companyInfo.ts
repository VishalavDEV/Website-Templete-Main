export interface OfficeLocation {
  city: string;
  country: string;
  region: string;
  coordinates: { x: number; y: number }; // Percentage for interactive map
  teamSize: number;
  projectsCompleted: number;
  expertise: string[];
  address: string;
  phone: string;
  email: string;
  isHQ?: boolean;
}

export interface MetricItem {
  value: string;
  number: number;
  suffix: string;
  label: string;
  description: string;
}

export const companyValues = [
  {
    title: "Architectural Integrity",
    description: "We engineer systems designed to endure decades of evolution, not just the next quarterly release."
  },
  {
    title: "Pragmatic Intelligence",
    description: "We deploy AI and automation where it solves measurable business bottlenecks, avoiding speculative hype."
  },
  {
    title: "Zero-Compromise Security",
    description: "Security and governance are embedded into every line of code, infrastructure template, and data pipeline."
  },
  {
    title: "Measurable Impact",
    description: "We align engineering milestones directly with commercial outcomes, operational throughput, and capital efficiency."
  }
];

export const companyMilestones = [
  {
    year: "2014",
    event: "Foundation in New York",
    detail: "Established as a specialized systems engineering boutique solving high-throughput latency constraints for financial institutions."
  },
  {
    year: "2017",
    event: "European Expansion (London & Berlin)",
    detail: "Expanded cross-border architecture practices into Europe, securing Tier-1 manufacturing and banking transformations."
  },
  {
    year: "2019",
    event: "Launch of Vertexa AI Labs",
    detail: "Dedicated applied research practice established to engineer sovereign machine learning infrastructure for regulated enterprises."
  },
  {
    year: "2021",
    event: "Asia-Pacific Delivery Hubs",
    detail: "Inaugurated engineering centers in Singapore and Bangalore, creating 24/7 Follow-the-Sun SRE and delivery capabilities."
  },
  {
    year: "2024",
    event: "SOC 2 Type II & FedRAMP Ready",
    detail: "Attained multi-framework global compliance certification across all sovereign cloud and data lakehouse practices."
  },
  {
    year: "2026",
    event: "Global Scale Milestone",
    detail: "Surpassed 740+ delivered production systems with 180+ principal engineers across 8 global hubs."
  }
];

export const companyInfo = {
  name: "VERTEXA",
  tagline: "Technology that moves business forward.",
  concept: "Intelligent infrastructure for ambitious organizations.",
  foundedYear: 2014,
  yearsOfExcellence: "12+",
  headquarters: "New York, USA",
  phone: "+1 (212) 555-0840",
  email: "inquiries@vertexa.io",
  supportEmail: "enterprise@vertexa.io",
  pressEmail: "press@vertexa.io",
  careersEmail: "talent@vertexa.io",
  workingHours: "24/7 Global Enterprise Support & Follow-the-Sun Engineering",
  shortDescription: "Vertexa designs and engineers intelligent digital systems, AI platforms, resilient cloud architectures, and mission-critical enterprise software for organizations operating at scale.",
  fullManifesto: "We don't just build software. We build systems that make organizations better. By uniting mathematical rigor, enterprise architecture, and human-centered design, Vertexa empowers global enterprises to lead in an era of continuous technological shift.",
  mission: "To architect and build the foundational digital infrastructure that enables global institutions to operate with unmatched speed, resilience, and cognitive intelligence.",
  vision: "A world where mission-critical systems adapt autonomously, securely, and seamlessly to the evolving demands of humanity.",
  coreValues: companyValues,
  certifications: [
    "SOC 2 Type II Certified",
    "ISO/IEC 27001:2022",
    "HIPAA & HITECH Compliant",
    "GDPR & CCPA Compliant",
    "PCI DSS Level 1",
    "FedRAMP Ready Standards"
  ],
  partnerships: [
    "AWS Premier Tier Services Partner",
    "Google Cloud Premier Partner (Specializations in Machine Learning & Cloud Migration)",
    "Microsoft Azure Solutions Partner (Data & AI)",
    "NVIDIA Partner Network (Inception Elite)",
    "Snowflake Elite Services Partner",
    "Databricks Strategic Consulting Partner"
  ]
};

export const companyMetrics: MetricItem[] = [
  {
    value: "18+",
    number: 18,
    suffix: "+",
    label: "Countries",
    description: "Active enterprise client footprint across 4 continents."
  },
  {
    value: "740+",
    number: 740,
    suffix: "+",
    label: "Projects",
    description: "Mission-critical platforms successfully engineered and deployed."
  },
  {
    value: "96%",
    number: 96,
    suffix: "%",
    label: "Client Retention",
    description: "Long-term engineering partnerships spanning 3+ consecutive years."
  },
  {
    value: "12+",
    number: 12,
    suffix: "+",
    label: "Years",
    description: "Proven track record delivering enterprise-grade architectures."
  },
  {
    value: "180+",
    number: 180,
    suffix: "+",
    label: "Engineers",
    description: "Senior systems architects, AI scientists, and security specialists."
  }
];

export const globalOffices: OfficeLocation[] = [
  {
    city: "New York",
    country: "United States",
    region: "Americas",
    coordinates: { x: 28, y: 35 },
    teamSize: 64,
    projectsCompleted: 240,
    expertise: ["AI Risk Systems", "Enterprise Core Banking", "Executive Advisory"],
    address: "One World Trade Center, Floor 62, New York, NY 10007",
    phone: "+1 (212) 555-0840",
    email: "ny@vertexa.io",
    isHQ: true
  },
  {
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    coordinates: { x: 48, y: 28 },
    teamSize: 42,
    projectsCompleted: 185,
    expertise: ["Fintech Infrastructure", "Energy Grids", "Regulatory Compliance"],
    address: "100 Bishopsgate, Level 24, London EC2N 4AG",
    phone: "+44 20 7946 0912",
    email: "london@vertexa.io"
  },
  {
    city: "Singapore",
    country: "Singapore",
    region: "Asia-Pacific",
    coordinates: { x: 76, y: 58 },
    teamSize: 32,
    projectsCompleted: 110,
    expertise: ["Cross-Border Logistics", "Maritime Tech", "Cloud Modernization"],
    address: "Marina Bay Financial Centre Tower 2, Singapore 018983",
    phone: "+65 6789 0123",
    email: "singapore@vertexa.io"
  },
  {
    city: "Berlin",
    country: "Germany",
    region: "Europe",
    coordinates: { x: 52, y: 27 },
    teamSize: 24,
    projectsCompleted: 78,
    expertise: ["Industrial IoT", "Automotive Intelligence", "Edge Computing"],
    address: "Potsdamer Platz 1, 10785 Berlin",
    phone: "+49 30 5678 9012",
    email: "berlin@vertexa.io"
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    coordinates: { x: 62, y: 44 },
    teamSize: 18,
    projectsCompleted: 52,
    expertise: ["Smart Government", "Sovereign AI Infrastructure", "Supply Networks"],
    address: "DIFC Gate Precinct 4, Dubai, UAE",
    phone: "+971 4 312 8900",
    email: "dubai@vertexa.io"
  },
  {
    city: "Toronto",
    country: "Canada",
    region: "Americas",
    coordinates: { x: 26, y: 32 },
    teamSize: 22,
    projectsCompleted: 65,
    expertise: ["Healthcare Analytics", "Quantum-Safe Cryptography", "FinTech"],
    address: "Brookfield Place, 181 Bay St, Toronto, ON M5J 2T3",
    phone: "+1 (416) 555-0199",
    email: "toronto@vertexa.io"
  },
  {
    city: "Bangalore",
    country: "India",
    region: "Asia-Pacific",
    coordinates: { x: 71, y: 51 },
    teamSize: 48,
    projectsCompleted: 160,
    expertise: ["Distributed Data Engineering", "Core AI Models", "Cloud SRE"],
    address: "Prestige Tech Park, Outer Ring Road, Bangalore 560103",
    phone: "+91 80 4567 8900",
    email: "bangalore@vertexa.io"
  },
  {
    city: "Sydney",
    country: "Australia",
    region: "Asia-Pacific",
    coordinates: { x: 88, y: 78 },
    teamSize: 16,
    projectsCompleted: 45,
    expertise: ["Renewable Energy Optimization", "Mining Automation", "Security"],
    address: "Barangaroo International Towers, Tower 3, Sydney NSW 2000",
    phone: "+61 2 8912 3456",
    email: "sydney@vertexa.io"
  }
];
