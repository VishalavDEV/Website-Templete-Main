export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  challenges: string[];
  solutionsProvided: string[];
  metrics: { value: string; label: string }[];
  caseStudyId?: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "ind-1",
    slug: "banking-finance",
    name: "Banking & Finance",
    tagline: "High-frequency security, fraud detection, and regulatory compliance at scale.",
    description: "Empowering tier-1 banks, neo-fintechs, and investment firms with real-time fraud mitigation, automated AML screening, algorithmic risk modeling, and ultra-secure transaction ledgers.",
    iconName: "Landmark",
    challenges: [
      "Escalating synthetic identity and multi-channel payment fraud",
      "Rigid legacy core banking mainframes slowing digital innovation",
      "Stringent multi-jurisdiction data protection and KYC regulations",
      "Sub-millisecond latency requirements during market volatility"
    ],
    solutionsProvided: [
      "Sub-30ms Machine Learning Fraud Inference Gateways",
      "Cloud-Native Core Banking Microservices Re-Platforming",
      "Automated Regulatory Reporting & AML Transaction Auditing",
      "Biometric Multi-Factor Authentication Systems"
    ],
    metrics: [
      { value: "65%", label: "Reduction in Fraud Losses" },
      { value: "$4.2B+", label: "Processed Daily Volume" },
      { value: "99.999%", label: "System Availability" }
    ],
    caseStudyId: "ai-powered-fraud-detection"
  },
  {
    id: "ind-2",
    slug: "healthcare-lifesciences",
    name: "Healthcare & Life Sciences",
    tagline: "HIPAA-compliant digital health platforms and clinical AI decision support.",
    description: "Bridging the gap between patient care and clinical operations through interoperable EHR systems (FHIR), AI-assisted diagnostic imaging, telemedicine platforms, and clinical trial data pipelines.",
    iconName: "HeartPulse",
    challenges: [
      "Fragmented patient medical records across incompatible legacy EHRs",
      "Extreme HIPAA/HITECH data privacy and PHI encryption standards",
      "Physician burnout from redundant administrative documentation",
      "Delayed diagnosis due to manual medical imaging review workflows"
    ],
    solutionsProvided: [
      "FHIR/HL7 Interoperability Data Hubs & Patient Portals",
      "AI Clinical Scribe & Automated Diagnostic Imaging Assistance",
      "Encrypted WebRTC Telehealth Video Consultations",
      "Decentralized Clinical Trial Analytics & Patient Tracking"
    ],
    metrics: [
      { value: "40%", label: "Increase in Operational Efficiency" },
      { value: "3.8M+", label: "Patient Records Managed" },
      { value: "100%", label: "HIPAA & SOC 2 Compliance" }
    ],
    caseStudyId: "smart-healthcare-platform"
  },
  {
    id: "ind-3",
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    tagline: "Omnichannel commerce engines, dynamic personalization, and predictive inventory.",
    description: "Helping global retailers scale through headless e-commerce architectures, real-time AI product recommendation engines, unified inventory tracking, and seamless checkout optimization.",
    iconName: "ShoppingCart",
    challenges: [
      "High cart abandonment rates on mobile devices",
      "Inventory stock-outs and inaccurate demand forecasting during peak sales",
      "Siloed in-store and online shopper customer profiles",
      "Slow page load speeds hampering conversion rates"
    ],
    solutionsProvided: [
      "Headless Composable Commerce Architecture with Next-Gen React",
      "Personalized Dynamic AI Recommendation & Search Engines",
      "Real-Time Omnichannel Warehouse & Stock Synchronization",
      "One-Click Checkout & Edge-Cached Product Catalogs"
    ],
    metrics: [
      { value: "2.5x", label: "Increase in Revenue Growth" },
      { value: "+38%", label: "Average Order Value Lift" },
      { value: "<400ms", label: "Catalog Page Load Speed" }
    ],
    caseStudyId: "e-commerce-analytics-suite"
  },
  {
    id: "ind-4",
    slug: "manufacturing-iot",
    name: "Manufacturing & Smart IoT",
    tagline: "Predictive maintenance, automated quality inspection, and connected smart factories.",
    description: "Transforming industrial manufacturing with edge computer vision, IoT telemetry ingestion, automated robotic fleet orchestration, and real-time digital twins of factory floors.",
    iconName: "Factory",
    challenges: [
      "Unplanned machinery downtime causing millions in lost production",
      "Manual quality control missing microscopic manufacturing defects",
      "Data latency in transmitting factory sensor logs to centralized clouds",
      "Complex supply chain vendor coordination during component shortages"
    ],
    solutionsProvided: [
      "Edge Computer Vision Quality Defect Inspection Stations",
      "Predictive Equipment Maintenance Vibration & Thermal Models",
      "Low-Latency MQTT/OPC-UA Edge-to-Cloud Streaming Pipeline",
      "Real-Time Factory Floor Digital Twin 3D Dashboards"
    ],
    metrics: [
      { value: "54%", label: "Reduction in Unplanned Downtime" },
      { value: "99.8%", label: "Defect Detection Accuracy" },
      { value: "22%", label: "Energy Consumption Savings" }
    ]
  },
  {
    id: "ind-5",
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    tagline: "Autonomous route optimization, real-time freight tracking, and warehouse automation.",
    description: "Powering global freight forwarders and distribution centers with AI route dispatching, cold-chain IoT tracking, automated dispatch hubs, and customs documentation processing.",
    iconName: "Truck",
    challenges: [
      "Fluctuating fuel costs and inefficient delivery routing",
      "Lack of real-time visibility into multi-modal international freight",
      "Labor bottlenecks in warehouse picking and pallet sorting",
      "Cumbersome paper-based customs and shipping manifest clearance"
    ],
    solutionsProvided: [
      "Dynamic Multi-Stop AI Route Optimization Engine",
      "Global Telematics & Cold-Chain Real-Time Temperature Tracking",
      "Automated OCR Document Extraction for Customs Clearances",
      "Predictive Fleet Maintenance & Driver Safety Telemetry"
    ],
    metrics: [
      { value: "28%", label: "Fuel Cost Reductions" },
      { value: "99.4%", label: "On-Time Delivery Rate" },
      { value: "4x", label: "Faster Customs Processing" }
    ]
  }
];
