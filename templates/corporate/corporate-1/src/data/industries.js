export const industries = [
  {
    id: "financial-services",
    slug: "financial-services",
    title: "Financial Services & Fintech",
    subtitle: "High-throughput, ultra-secure digital banking, algorithmic trading, and automated fraud prevention.",
    description: "Financial institutions face unprecedented pressure to innovate while adhering to strict regulatory mandates. NEXORA builds sub-second core banking engines, real-time fraud mitigation pipelines, and compliant multi-cloud architectures.",
    icon: "Landmark",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Legacy core mainframe systems unable to support modern real-time open-banking APIs",
      "Sophisticated fraud attacks costing billions in chargebacks and regulatory scrutiny",
      "Strict data residency, SOC2 Type II, and PCI-DSS compliance requirements",
      "Customer demand for frictionless mobile financial experiences"
    ],
    nexoraApproach: "We design event-driven microservice architectures with distributed ledger auditability, hardware security module (HSM) key management, and real-time AI anomaly detection that processes transactions in under 15 milliseconds.",
    solutions: ["Intelligent Automation", "Modern Digital Platforms", "Cyber Resilience", "Enterprise Data Mesh"],
    keyResults: [
      { stat: "< 15ms", label: "Fraud Evaluation Latency" },
      { stat: "99.999%", label: "Platform Availability" },
      { stat: "$18M+", label: "Fraud Losses Prevented Annually" }
    ],
    featuredCaseStudy: "apex-banking-core"
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    subtitle: "HIPAA-compliant telehealth platforms, predictive clinical analytics, and IoMT device data streams.",
    description: "Healthcare organizations must modernize patient touchpoints while maintaining impenetrable patient health information (PHI) protection. We engineer interoperable FHIR data fabrics, AI clinical workflow aids, and scalable diagnostic portals.",
    icon: "Stethoscope",
    heroImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Fragmented electronic health record (EHR) systems creating patient care blindspots",
      "Stringent HIPAA, HITECH, and FDA cybersecurity regulations",
      "Physician burnout from tedious, manual clinical chart documentation",
      "Massive telemetry from connected medical devices (IoMT) lacking real-time synthesis"
    ],
    nexoraApproach: "We deploy secure FHIR API pipelines, zero-knowledge patient identity authentication, and ambient AI documentation assistants that drastically reduce administrative charting hours.",
    solutions: ["Intelligent Workflow Automation", "Cloud Modernization", "Continuous Cyber Resilience"],
    keyResults: [
      { stat: "68%", label: "Charting Time Reduction" },
      { stat: "100%", label: "HIPAA Audit Pass Rate" },
      { stat: "3.4M", label: "Patients Served Securely" }
    ],
    featuredCaseStudy: "novacare-telehealth"
  },
  {
    id: "retail",
    slug: "retail",
    title: "Retail & Omnichannel Commerce",
    subtitle: "Headless commerce, real-time inventory synchronization, and hyper-personalized customer experiences.",
    description: "Modern consumers demand fluid experiences across mobile, web, and physical stores. NEXORA builds composable commerce architectures that handle millions of SKU variants and surge traffic with zero latency.",
    icon: "ShoppingBag",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Monolithic commerce platforms crashing during Black Friday and flash sales",
      "Inventory discrepancies across warehouse, distribution center, and storefronts",
      "Generic recommendation engines yielding low conversion and high cart abandonment",
      "Slow page load times degrading mobile conversion rates"
    ],
    nexoraApproach: "We build headless composable commerce stacks using Next.js edge storefronts, event-driven Kafka inventory streaming, and vector-search personalization engines that double conversion.",
    solutions: ["Modern Digital Platforms", "Enterprise Data Mesh", "Intelligent Automation"],
    keyResults: [
      { stat: "+48%", label: "Mobile Conversion Surge" },
      { stat: "< 250ms", label: "Global Edge Page Load" },
      { stat: "99.99%", label: "Holiday Traffic Uptime" }
    ],
    featuredCaseStudy: "omnistyle-commerce"
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing & Industry 4.0",
    subtitle: "Predictive maintenance, computer vision quality assurance, and smart factory IoT telemetry.",
    description: "Industry 4.0 demands connecting operational technology (OT) with enterprise IT. NEXORA provides real-time sensor ingestion, edge AI defect detection, and automated supply chain optimization.",
    icon: "Factory",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Unplanned equipment downtime costing hundreds of thousands per hour",
      "Manual QA inspection missing microscopic manufacturing defects",
      "Isolated legacy PLC hardware lacking cloud connectivity and analytics",
      "Global supply chain shocks and volatile material pricing"
    ],
    nexoraApproach: "We install edge-computed computer vision models for automated QA and deploy time-series anomaly detection algorithms over industrial IoT sensor streams to predict component failure weeks in advance.",
    solutions: ["Intelligent Automation", "Cloud Modernization", "Enterprise Data Mesh"],
    keyResults: [
      { stat: "-42%", label: "Unplanned Downtime" },
      { stat: "99.7%", label: "Automated QA Accuracy" },
      { stat: "$8.2M", label: "Maintenance Costs Saved" }
    ],
    featuredCaseStudy: "aeropulse-manufacturing"
  },
  {
    id: "logistics",
    slug: "logistics",
    title: "Logistics & Global Supply Chain",
    subtitle: "Real-time fleet tracking, dynamic route optimization, and automated warehouse dispatching.",
    description: "Global supply networks require end-to-end visibility and adaptive routing. We engineer real-time geospatial tracking platforms and automated freight matching engines.",
    icon: "Truck",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Fuel waste and delivery delays caused by static route scheduling",
      "Opaque carrier handoffs and lack of real-time shipment milestone notifications",
      "Manual warehouse dock scheduling creating multi-hour truck dwell times",
      "Volatile customs documentation bottlenecks and cross-border delays"
    ],
    nexoraApproach: "We develop dynamic algorithmic routing engines, IoT container temperature/location telemetry bridges, and automated customs document extraction via AI OCR.",
    solutions: ["Intelligent Automation", "Enterprise Data Mesh", "Modern Digital Platforms"],
    keyResults: [
      { stat: "-24%", label: "Fleet Fuel Consumption" },
      { stat: "98.8%", label: "On-Time Delivery Rate" },
      { stat: "12M+", label: "Daily Shipments Tracked" }
    ],
    featuredCaseStudy: "vanguard-freight-mesh"
  },
  {
    id: "technology",
    slug: "technology",
    title: "Technology & B2B SaaS",
    subtitle: "Multi-tenant cloud architecture, developer experience engineering, and high-concurrency scaling.",
    description: "Hyper-growth SaaS companies require resilient distributed architectures to support rapid enterprise customer onboarding and rigorous SOC2 Type II compliance standards.",
    icon: "Layers",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Multi-tenant database scaling bottlenecks during usage surges",
      "Lengthy enterprise security reviews slowing down enterprise sales cycles",
      "Developer productivity friction caused by slow staging build pipelines",
      "High cloud infrastructure bills eating into gross software margins"
    ],
    nexoraApproach: "We design multi-tenant database partitioning, automated zero-trust authorization gateways, ephemeral developer preview environments, and FinOps autoscaling.",
    solutions: ["Modern Digital Platforms", "Cloud Modernization", "Continuous Cyber Resilience"],
    keyResults: [
      { stat: "10x", label: "Developer Deploy Speed" },
      { stat: "99.999%", label: "Multi-Tenant Uptime" },
      { stat: "-35%", label: "Cloud Infrastructure Cost" }
    ],
    featuredCaseStudy: "cloudscale-saas-core"
  }
];
