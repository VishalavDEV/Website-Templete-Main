export interface JobOpening {
  id: string;
  title: string;
  department: 'Investment' | 'Advisory' | 'Technology' | 'Risk' | 'Research' | 'Operations';
  location: string;
  type: 'Full-time' | 'Executive';
  experience: string;
  salaryRange?: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  requirements: string[];
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'vice-president-corporate-finance',
    title: 'Vice President — Corporate Debt & Capital Markets',
    department: 'Advisory',
    location: 'New York / London (Hybrid)',
    type: 'Full-time',
    experience: '6-8 years',
    salaryRange: '$280,000 - $380,000 + Performance Equity',
    description: 'Lead execution teams on mid-market debt syndications, cross-border balance-sheet recapitalizations, and private credit placements.',
    responsibilities: [
      'Manage complex multi-tranche financial modeling and underwriting memorandum preparation',
      'Lead direct interaction with corporate CFOs, private equity sponsors, and credit rating committees',
      'Structure syndicated credit agreements, intercreditor terms, and covenant packages',
      'Mentor senior analysts and associates across quantitative execution workflows',
    ],
    qualifications: [
      'Bachelor’s or Master’s in Finance, Economics, or related quantitative field; CFA / MBA preferred',
      'Extensive background in leveraged finance, debt capital markets, or direct lending',
      'Flawless financial modeling and complex legal agreement negotiation skills',
    ],
    requirements: [
      'Bachelor’s or Master’s in Finance, Economics, or related quantitative field; CFA / MBA preferred',
      'Extensive background in leveraged finance, debt capital markets, or direct lending',
      'Flawless financial modeling and complex legal agreement negotiation skills',
    ],
  },
  {
    id: 'senior-quantitative-portfolio-manager',
    title: 'Senior Portfolio Manager — Real Assets & Infrastructure',
    department: 'Investment',
    location: 'London / Frankfurt',
    type: 'Full-time',
    experience: '8+ years',
    salaryRange: '£220,000 - £310,000 + Carried Interest Pool',
    description: 'Oversee capital deployment into essential energy transition and high-yield core infrastructure funds.',
    responsibilities: [
      'Formulate macroeconomic thesis and direct underwriting for European real asset opportunities',
      'Manage quarterly asset valuations, discount rate stress-testing, and investor presentations',
      'Integrate ESG criteria and regulatory carbon compliance metrics into underwriting',
    ],
    qualifications: [
      'Proven track record managing institutional real asset or private equity infrastructure funds',
      'Strong network with European utilities, sovereign wealth LPs, and project sponsors',
      'Expertise in non-recourse project finance debt modeling',
    ],
    requirements: [
      'Proven track record managing institutional real asset or private equity infrastructure funds',
      'Strong network with European utilities, sovereign wealth LPs, and project sponsors',
      'Expertise in non-recourse project finance debt modeling',
    ],
  },
  {
    id: 'lead-financial-systems-engineer',
    title: 'Lead Financial Systems Engineer — Vantage Core™ Telemetry',
    department: 'Technology',
    location: 'Singapore / New York / Remote',
    type: 'Full-time',
    experience: '5+ years',
    salaryRange: '$240,000 - $320,000 + Tech Stock Incentive',
    description: 'Architect low-latency banking API connectors, predictive treasury cash-flow engines, and institutional risk telemetry.',
    responsibilities: [
      'Design fault-tolerant distributed services integrating SWIFT, ISO 20022, and core banking APIs',
      'Build deterministic scenario simulation pipelines running 100k+ financial simulations in sub-seconds',
      'Ensure bank-grade SOC 2 Type II, ISO 27001, and financial encryption compliance',
    ],
    qualifications: [
      'Deep proficiency in modern TypeScript/Node, Rust/Go, and distributed database architectures',
      'Experience in financial telemetry, algorithmic trading, or treasury management systems',
      'Obsessive dedication to code correctness, auditability, and data security',
    ],
    requirements: [
      'Deep proficiency in modern TypeScript/Node, Rust/Go, and distributed database architectures',
      'Experience in financial telemetry, algorithmic trading, or treasury management systems',
      'Obsessive dedication to code correctness, auditability, and data security',
    ],
  },
  {
    id: 'director-macroeconomic-research',
    title: 'Director of Macroeconomic Strategy & Sovereign Intelligence',
    department: 'Research',
    location: 'New York / London',
    type: 'Full-time',
    experience: '10+ years',
    salaryRange: '$320,000 - $440,000 + Executive Bonus',
    description: 'Direct institutional research publications, global interest rate forecasting, and executive macro briefings for board clients.',
    responsibilities: [
      'Author flagship quarterly macro research publications delivered to 2,400+ corporate clients',
      'Develop econometric forecasting models for global inflation, central bank policy, and FX trends',
      'Deliver keynote presentations at institutional investor symposiums and board strategy retreats',
    ],
    qualifications: [
      'Ph.D. or Master’s in Macroeconomics, Econometrics, or Monetary Economics',
      'Recognized thought leader with extensive publication record and media presence',
      'Exceptional clarity in synthesizing intricate geopolitical trends into actionable capital decisions',
    ],
    requirements: [
      'Ph.D. or Master’s in Macroeconomics, Econometrics, or Monetary Economics',
      'Recognized thought leader with extensive publication record and media presence',
      'Exceptional clarity in synthesizing intricate geopolitical trends into actionable capital decisions',
    ],
  },
  {
    id: 'senior-risk-officer-counterparty',
    title: 'Senior Risk Officer — Counterparty & Liquidity Stress',
    department: 'Risk',
    location: 'Frankfurt / Dubai',
    type: 'Full-time',
    experience: '6+ years',
    salaryRange: '€190,000 - €260,000 + Performance Pool',
    description: 'Manage counterparty credit underwriting, derivative collateral agreements (ISDA/CSA), and Basel liquidity stress-testing.',
    responsibilities: [
      'Establish counterparty exposure ceilings for global corporate hedging desks',
      'Model tail-risk scenarios incorporating supply chain disruption and banking freeze events',
      'Provide real-time risk clearance on large-scale M&A bridge facilities and FX derivatives',
    ],
    qualifications: [
      'FRM (Financial Risk Manager) or PRM certification',
      'Direct experience with derivative pricing models, VaR methodologies, and stress-testing platforms',
      'Decisive judgment in volatile market environments',
    ],
    requirements: [
      'FRM (Financial Risk Manager) or PRM certification',
      'Direct experience with derivative pricing models, VaR methodologies, and stress-testing platforms',
      'Decisive judgment in volatile market environments',
    ],
  },
];
