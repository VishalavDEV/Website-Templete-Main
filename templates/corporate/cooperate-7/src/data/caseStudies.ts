export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  industrySlug: string;
  service: string;
  serviceSlug: string;
  technology: string[];
  bannerImage: string;
  heroMetric: { value: string; label: string };
  summary: string;
  challenge: string;
  solution: string;
  architectureDetails: string[];
  keyResults: { metric: string; label: string; description: string }[];
  clientQuote: {
    quote: string;
    author: string;
    title: string;
    company: string;
    avatar: string;
  };
  featured: boolean;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "cs-1",
    slug: "ai-powered-fraud-detection",
    title: "AI-Powered Fraud Detection",
    client: "FinSecure Bank International",
    industry: "Banking & Finance",
    industrySlug: "banking-finance",
    service: "AI & Machine Learning",
    serviceSlug: "ai-machine-learning",
    technology: ["PyTorch", "Apache Kafka", "FastAPI", "Go", "Redis", "AWS EKS"],
    bannerImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    heroMetric: { value: "65%", label: "Reduction in Fraud Losses" },
    summary: "How FinSecure Bank deployed a sub-40ms neural anomaly engine that blocked $84M in fraudulent wire transactions in the first year.",
    challenge: "FinSecure Bank was facing a 180% surge in coordinated synthetic identity attacks and cross-border account takeover attempts. Their legacy rules engine suffered from a 22% false-positive rate, creating immense friction for legitimate high-net-worth customers and overburdening fraud investigation desks.",
    solution: "Straventa engineered a distributed, real-time AI anomaly detection pipeline using PyTorch inference microservices connected to Apache Kafka transaction streams. We embedded automated graph neural networks (GNN) to uncover hidden mule accounts and coordinated fraud rings in sub-35 milliseconds.",
    architectureDetails: [
      "Real-time event stream processing ingesting 45,000 tx/sec with Kafka",
      "Graph Neural Network (GNN) model analyzing dynamic entity relationship clusters",
      "In-memory Redis cache scoring transaction velocity in under 8ms",
      "Automated human-in-the-loop analyst feedback triage console"
    ],
    keyResults: [
      { metric: "65%", label: "Reduction in Fraud Losses", description: "Saved over $84M in annual unauthorized fraud claims." },
      { metric: "<35ms", label: "Model Latency", description: "Real-time decisioning during payment authorizations." },
      { metric: "-78%", label: "False Positive Decline", description: "Virtually eliminated friction for legitimate customers." }
    ],
    clientQuote: {
      quote: "Straventa delivered a robust AI solution that transformed our fraud detection process. Their team is exceptional!",
      author: "James Carter",
      title: "Chief Technology Officer",
      company: "FinSecure Bank",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    featured: true
  },
  {
    id: "cs-2",
    slug: "smart-healthcare-platform",
    title: "Smart Healthcare Platform",
    client: "HealthPlus Integrated Network",
    industry: "Healthcare",
    industrySlug: "healthcare-lifesciences",
    service: "Cloud Solutions",
    serviceSlug: "cloud-solutions",
    technology: ["React", "Node.js", "FHIR", "GCP Healthcare API", "Kubernetes", "PostgreSQL"],
    bannerImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    heroMetric: { value: "40%", label: "Increase in Operational Efficiency" },
    summary: "Re-platforming 32 hospital facilities onto a secure, HIPAA-compliant cloud EHR interoperability bridge with automated patient intake.",
    challenge: "HealthPlus operated disparate on-premises legacy software across 32 medical centers. Critical clinical data was locked in siloed silos, leading to extended patient wait times, administrative errors, and difficulties fulfilling federal interoperability compliance standards.",
    solution: "Straventa designed and deployed a centralized, HIPAA-certified FHIR data mesh on Google Cloud Platform. We built a unified medical provider portal, automated tele-health triage, and a patient self-service mobile app enabling 1-click records retrieval.",
    architectureDetails: [
      "HIPAA-compliant zero-trust cloud VPC with end-to-end envelope encryption",
      "FHIR/HL7 bi-directional conversion pipelines connecting legacy EHR databases",
      "Automated insurance eligibility verification microservice",
      "WebRTC encrypted telehealth consultation infrastructure"
    ],
    keyResults: [
      { metric: "40%", label: "Operational Efficiency Gain", description: "Reduced average administrative patient check-in time from 28m to 4m." },
      { metric: "3.8M+", label: "Active Patients Managed", description: "Seamlessly synchronized records across all clinical specialties." },
      { metric: "100%", label: "HIPAA & SOC 2 Compliance", description: "Passed all regulatory audits with zero compliance findings." }
    ],
    clientQuote: {
      quote: "Their cloud migration strategy reduced our costs by 36% and improved system reliability significantly.",
      author: "Priya Nair",
      title: "Head of IT",
      company: "HealthPlus",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    featured: true
  },
  {
    id: "cs-3",
    slug: "e-commerce-analytics-suite",
    title: "E-Commerce Analytics Suite",
    client: "RetailMart Global",
    industry: "Retail & E-Commerce",
    industrySlug: "retail-ecommerce",
    service: "Data Analytics",
    serviceSlug: "data-analytics",
    technology: ["Snowflake", "dbt", "React 19", "Tailwind CSS", "Apache Kafka", "BigQuery"],
    bannerImage: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    heroMetric: { value: "2.5x", label: "Increase in Revenue Growth" },
    summary: "Building a high-throughput omnichannel predictive inventory and customer personalization engine for an international retailer.",
    challenge: "RetailMart struggled with fractured stock visibility across 450 brick-and-mortar storefronts and their e-commerce storefront. Customer recommendations were static, resulting in high shopping cart abandonment and frequent stock-outs on top trending SKUs.",
    solution: "Straventa architected a unified Snowflake Lakehouse with dbt transformation pipelines that ingest in-store POS and online customer event streams. We paired this with dynamic AI product recommendation models embedded directly into their React storefront.",
    architectureDetails: [
      "Sub-second event tracking on product browsing and basket updates",
      "Snowflake modern lakehouse centralizing 12TB daily transaction logs",
      "Personalized dynamic product carousel scoring with collaborative filtering",
      "Automated warehouse restocking triggers based on predictive demand"
    ],
    keyResults: [
      { metric: "2.5x", label: "Revenue Growth Velocity", description: "Personalized cart recommendations boosted digital GMV substantially." },
      { metric: "+38%", label: "Average Order Value", description: "Shoppers added 1.8 more items on average per checkout." },
      { metric: "92%", label: "Inventory Accuracy", description: "Virtually eradicated unexpected warehouse stock-outs." }
    ],
    clientQuote: {
      quote: "Outstanding technical expertise, proactive communication, and on-time delivery. Straventa exceeded all our expectations.",
      author: "Michael Brown",
      title: "Director of Digital",
      company: "RetailMart",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    featured: true
  },
  {
    id: "cs-4",
    slug: "smart-factory-iot-digital-twin",
    title: "Smart Factory IoT & Digital Twin",
    client: "Apex Industrial Dynamics",
    industry: "Manufacturing & Smart IoT",
    industrySlug: "manufacturing-iot",
    service: "Software Development",
    serviceSlug: "software-development",
    technology: ["Three.js", "Go", "MQTT", "AWS IoT Core", "TimescaleDB", "React"],
    bannerImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    heroMetric: { value: "54%", label: "Reduction in Equipment Downtime" },
    summary: "Interactive 3D factory floor digital twin monitoring 14,000 industrial sensors in real-time for automated predictive maintenance.",
    challenge: "Apex suffered unexpected turbine and robotic welding arm failures that resulted in $350k per hour in factory downtime.",
    solution: "Straventa deployed edge IoT gateways streaming vibration, thermal, and electrical telemetry to a custom 3D digital twin dashboard built in WebGL/Three.js with automated predictive failure alert triggers.",
    architectureDetails: [
      "Low-latency MQTT broker network across 4 production plants",
      "Edge vibration telemetry anomaly detectors",
      "Real-time Three.js 3D facility overview with heatmap visualization",
      "Automated technician dispatch and ticket generation via Jira"
    ],
    keyResults: [
      { metric: "54%", label: "Downtime Reduction", description: "Saved $14.2M in annual manufacturing interruption losses." },
      { metric: "14,000+", label: "Active Connected Sensors", description: "Reliable telemetry ingestion with zero packet drops." },
      { metric: "48 hrs", label: "Early Failure Notice", description: "Maintenance crews repair components before physical breakdown." }
    ],
    clientQuote: {
      quote: "The digital twin Straventa built gave our engineering plant managers a superpower. We see issues before they happen.",
      author: "Elena Rostova",
      title: "VP of Operations",
      company: "Apex Industrial",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    featured: false
  }
];
