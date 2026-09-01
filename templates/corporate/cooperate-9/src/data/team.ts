export interface LeaderProfile {
  name: string;
  role: string;
  division: string;
  experience: string;
  bio: string;
  priorAffiliations: string[];
}

export interface FirmValue {
  number: string;
  title: string;
  description: string;
}

export const FIRM_HISTORY = {
  founded: "2011",
  philosophy: "Northbridge Capital was founded on a singular premise: institutional capital and complex business enterprises require uncompromised, independent fiduciary advisory free from underwriting syndication pressures, trading desks, or distribution kickbacks.",
  statement: "We believe clarity is the prerequisite for superior capital compounding. By uniting deep macro research with forensic corporate finance rigor, we empower clients to make decisions with absolute confidence through all market cycles."
};

export const FIRM_PILLARS: FirmValue[] = [
  {
    number: "01",
    title: "Uncompromising Fiduciary Duty",
    description: "We represent the client's balance sheet alone. We manage no proprietary inventory and maintain zero distribution kickback relationships."
  },
  {
    number: "02",
    title: "Forensic Fundamental Rigor",
    description: "Every capital decision is anchored in audited unit economics, deterministic cash flow simulations, and downside stress-testing."
  },
  {
    number: "03",
    title: "Multi-Generational Stewardship",
    description: "We build capital architectures designed to endure through decades, sovereign debt cycles, and generational leadership transitions."
  },
  {
    number: "04",
    title: "Institutional Governance & Security",
    description: "Bank-grade operational security, tier-one custodian segregation, and continuous independent regulatory compliance audits."
  }
];

export const LEADERSHIP_TEAM: LeaderProfile[] = [
  {
    name: "Jonathan Vance, CFA",
    role: "Managing Partner & Chief Executive",
    division: "Executive Leadership & Strategy",
    experience: "26 Years",
    bio: "Oversees the firm's strategic direction, global client mandates, and institutional investment committee. Formerly Head of Global Industrial Advisory at a tier-one investment bank.",
    priorAffiliations: ["Morgan Stanley", "BlackRock", "Harvard Management Company"]
  },
  {
    name: "Dr. Alistair Vance",
    role: "Head of Global Macro Strategy & Research",
    division: "Macroeconomic Intelligence",
    experience: "22 Years",
    bio: "Leads macroeconomic research, sovereign curve modeling, and global asset allocation frameworks. Former senior advisor to sovereign wealth funds and monetary policy committees.",
    priorAffiliations: ["Bank of England", "Oxford Macroeconomics", "Bridgewater Associates"]
  },
  {
    name: "Elena Rostova",
    role: "Partner, Fixed Income & Capital Markets",
    division: "Capital Strategy & Debt Placement",
    experience: "19 Years",
    bio: "Specializes in multi-currency corporate recapitalizations, syndicated senior credit, and cross-border balance sheet restructuring across Europe and North America.",
    priorAffiliations: ["Goldman Sachs", "Deutsche Bank", "European Stability Mechanism"]
  },
  {
    name: "Marcus Sterling",
    role: "Managing Director, Private Markets",
    division: "Direct Equity & Infrastructure",
    experience: "18 Years",
    bio: "Leads direct private equity co-investments, infrastructure underwriting, and private credit syndication for family offices and institutional endowments.",
    priorAffiliations: ["Kohlberg Kravis Roberts (KKR)", "Temasek Holdings", "McKinsey & Company"]
  },
  {
    name: "Sarah Chen-Lau, Esq.",
    role: "Chief Compliance Officer & General Counsel",
    division: "Legal & Regulatory Governance",
    experience: "17 Years",
    bio: "Directs international regulatory compliance, cross-border corporate governance, and fiduciary standards across US, UK, Swiss, and Singapore jurisdictions.",
    priorAffiliations: ["Sullivan & Cromwell", "U.S. Securities & Exchange Commission", "UBS AG"]
  },
  {
    name: "David K. Hoffman, FRM",
    role: "Chief Risk Officer",
    division: "Quantitative Risk & Telemetry",
    experience: "20 Years",
    bio: "Directs the firm's scenario stress-testing, counterparty credit assessment, and derivative hedging architectures.",
    priorAffiliations: ["Citigroup Global Markets", "AQR Capital Management", "Barclays Capital"]
  }
];

export const GLOBAL_PRESENCE_HUBS = [
  { city: "New York", country: "United States", focus: "Corporate Advisory & Private Credit", address: "One Vanderbilt Avenue, Floor 44" },
  { city: "London", country: "United Kingdom", focus: "Global Macro & Cross-Border M&A", address: "100 Bishopsgate, Level 28" },
  { city: "Singapore", country: "Singapore", focus: "Asia-Pacific Allocations & Sovereign Advisory", address: "Marina Bay Financial Centre, Tower 2" },
  { city: "Zurich", country: "Switzerland", focus: "Wealth Architecture & Multi-Family Office", address: "Bahnhofstrasse 22" }
];
