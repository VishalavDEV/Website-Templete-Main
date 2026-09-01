export interface MetricItem {
  id: string;
  value: string;
  number: number;
  rawNumber: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  description: string;
  change?: string;
}

export interface ClientLogo {
  name: string;
  symbol: string;
  ticker: string;
  sector: string;
  type: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export const INSTITUTIONAL_METRICS: MetricItem[] = [
  {
    id: 'aum',
    value: '$48B+',
    number: 48,
    rawNumber: 48,
    suffix: 'B+',
    prefix: '$',
    label: 'Assets Advised',
    sublabel: 'Institutional capital & advisory mandates',
    description: 'Active discretionary and advisory mandates across global desks.',
    change: '+14% YoY',
  },
  {
    id: 'markets',
    value: '32+',
    number: 32,
    rawNumber: 32,
    suffix: '+',
    label: 'Global Markets',
    sublabel: 'Cross-border regulatory & execution presence',
    description: 'Direct licensed market presence spanning 6 continents.',
    change: 'Active in 6 continents',
  },
  {
    id: 'experience',
    value: '18',
    number: 18,
    rawNumber: 18,
    suffix: ' Years',
    label: 'Years of Experience',
    sublabel: 'Disciplined compounding through market cycles',
    description: '18 years of continuous risk-adjusted institutional leadership.',
    change: 'Founded 2008',
  },
  {
    id: 'retention',
    value: '96%',
    number: 96,
    rawNumber: 96,
    suffix: '%',
    label: 'Client Retention',
    sublabel: 'Long-term partnership across decades',
    description: 'Multi-decade retention across generational and enterprise accounts.',
    change: 'Top-tier institutional loyalty',
  },
];

export const TRUSTED_CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Northstar Holdings', symbol: 'NH', ticker: 'NYSE: NSH', sector: 'Industrial Conglomerate', type: 'Industrial Conglomerate' },
  { name: 'Meridian Group', symbol: 'MG', ticker: 'LSE: MRDN', sector: 'Infrastructure & Energy', type: 'Energy & Infrastructure' },
  { name: 'Atlas Capital', symbol: 'AC', ticker: 'Private Equity', sector: 'Sovereign-backed Fund', type: 'Sovereign Wealth LP' },
  { name: 'Crestline', symbol: 'CL', ticker: 'TSX: CRST', sector: 'Real Estate & Logistics', type: 'Logistics & REIT' },
  { name: 'Oakridge Global', symbol: 'OG', ticker: 'SIX: OAKR', sector: 'Healthcare & Life Sciences', type: 'Healthcare Enterprise' },
  { name: 'Summit Partners', symbol: 'SP', ticker: 'Institutional LP', sector: 'Multi-Family Office', type: 'Multi-Family Office' },
];

export const CORE_PILLARS: PillarItem[] = [
  {
    id: 'fiduciary-rigor',
    title: 'Fiduciary Independence',
    description: 'Zero proprietary trading conflicts. We operate solely in service of client balance sheets and mandates.',
    metric: '100%',
    metricLabel: 'Fiduciary Alignment',
  },
  {
    id: 'telemetry-engine',
    title: 'Deterministic Technology',
    description: 'Proprietary Vantage Core™ platform offering microsecond cash flow forecasting and real-time risk telemetry.',
    metric: '45M+',
    metricLabel: 'Simulations / Day',
  },
  {
    id: 'global-execution',
    title: 'Cross-Border Execution',
    description: 'Unified cross-border deal execution across 32 jurisdictions with local regulatory clearance desks.',
    metric: '32',
    metricLabel: 'Global Desks',
  },
  {
    id: 'bespoke-architecture',
    title: 'Bespoke Capital Solutions',
    description: 'From syndicated senior debt to private credit and multi-generational trust architecture.',
    metric: '$48B+',
    metricLabel: 'Advised Volume',
  },
];
