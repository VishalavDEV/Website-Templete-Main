export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconName: string;
  description?: string;
}

export const statsData: StatItem[] = [
  {
    id: "stat-1",
    value: "500+",
    label: "Projects Delivered",
    iconName: "CheckCircle2",
    description: "Enterprise software, cloud systems, and AI models delivered on time and within budget."
  },
  {
    id: "stat-2",
    value: "120+",
    label: "Global Clients",
    iconName: "Globe",
    description: "Serving high-growth startups, scale-ups, and Fortune 500 enterprises."
  },
  {
    id: "stat-3",
    value: "15+",
    label: "Countries Served",
    iconName: "MapPin",
    description: "Active client partnerships spanning North America, Europe, APAC, and Middle East."
  },
  {
    id: "stat-4",
    value: "98%",
    label: "Client Satisfaction",
    iconName: "Sparkles",
    description: "High NPS rating driven by engineering rigor and transparent communication."
  },
  {
    id: "stat-5",
    value: "20+",
    label: "Tech Experts",
    iconName: "Users",
    description: "Senior cloud architects, AI researchers, cybersecurity specialists, and UI/UX designers."
  },
  {
    id: "stat-6",
    value: "10+",
    label: "Years of Experience",
    iconName: "Clock",
    description: "A decade of engineering excellence and digital leadership."
  }
];

export interface JourneyMilestone {
  year: string;
  title: string;
  description: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2014",
    title: "Founded",
    description: "Founded Straventa with a vision to build scalable enterprise software."
  },
  {
    year: "2016",
    title: "Expansion",
    description: "Expanded our team and delivered 100+ successful digital projects."
  },
  {
    year: "2018",
    title: "AI & Cloud Practice",
    description: "Entered AI & Cloud services and launched new enterprise solutions."
  },
  {
    year: "2021",
    title: "Global Reach",
    description: "Opened global offices and served clients in 10+ countries."
  },
  {
    year: "2024",
    title: "Next-Gen Transformation",
    description: "Continuing our journey of innovation, generative AI systems, and global impact."
  }
];

export const clientLogos = [
  { name: "Microsoft", symbol: "microsoft" },
  { name: "AWS", symbol: "aws" },
  { name: "Google Cloud", symbol: "google" },
  { name: "Oracle", symbol: "oracle" },
  { name: "Adobe", symbol: "adobe" },
  { name: "SAP", symbol: "sap" },
  { name: "HubSpot", symbol: "hubspot" }
];
