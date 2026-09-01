export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  industryChallenge: string;
  financialStrategy: string;
  relevantServices: string[];
  keyMetrics: { label: string; value: string }[];
  caseStudySummary: string;
  caseStudyTitle: string;
  caseStudyResult: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'technology',
    slug: 'technology',
    name: 'Technology & Software',
    iconName: 'Cpu',
    industryChallenge: 'High R&D capitalization pressure, recurring revenue debt underwriting, and rapid global expansion requiring agile FX treasury structures.',
    financialStrategy: 'ARR-backed debt facilities, cross-border IP holding structure optimization, and pre-IPO liquidity governance.',
    relevantServices: ['Corporate Finance', 'Financial Technology', 'M&A Advisory'],
    keyMetrics: [
      { label: 'Financing Structured', value: '$3.8B' },
      { label: 'Tech M&A Exits', value: '48' },
      { label: 'Avg. Cost of Capital', value: '6.2%' },
    ],
    caseStudyTitle: 'Series D Enterprise SaaS Expansion',
    caseStudySummary: 'Structured $180M syndicated growth credit facility enabling EU & APAC go-to-market without common stock dilution.',
    caseStudyResult: '$180M optimized financing with zero founder dilution',
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    iconName: 'Activity',
    industryChallenge: 'Extended clinical trial cycles, complex reimbursement regulatory frameworks, and hospital system capital expenditure financing.',
    financialStrategy: 'Royalty monetization, specialized clinical milestone debt tranches, and medical facility sale-leaseback transactions.',
    relevantServices: ['Corporate Finance', 'Asset Management', 'Investment Advisory'],
    keyMetrics: [
      { label: 'Healthcare Assets Advised', value: '$4.2B' },
      { label: 'Biopharma Royalties Hedged', value: '$850M' },
      { label: 'Hospital Facility Financings', value: '34' },
    ],
    caseStudyTitle: 'Global Oncology Therapeutics Scaleup',
    caseStudySummary: 'Monetized synthetic future royalty streams into $320M upfront research capital with zero downside balance sheet risk.',
    caseStudyResult: '$320M non-recourse funding for Phase III clinical rollout',
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Advanced Manufacturing',
    iconName: 'Factory',
    industryChallenge: 'Supply chain volatility, capital-intensive equipment retooling, and currency mismatch between raw material suppliers and global clients.',
    financialStrategy: 'Asset-based lending on automated production lines, multi-currency receivables factoring, and dynamic commodity input hedging.',
    relevantServices: ['Corporate Finance', 'Risk & Treasury', 'M&A Advisory'],
    keyMetrics: [
      { label: 'Supply Chain Facilities', value: '$5.6B' },
      { label: 'Working Capital Uplift', value: '24%' },
      { label: 'FX Slippage Reduced', value: '92%' },
    ],
    caseStudyTitle: 'Global Automotive Component Supplier',
    caseStudySummary: 'Restructured international capital operations across 12 manufacturing plants, unlocking $42M in trapped working capital.',
    caseStudyResult: '24% improvement in overall enterprise capital efficiency',
  },
  {
    id: 'energy',
    slug: 'energy',
    name: 'Energy & Transition',
    iconName: 'Zap',
    industryChallenge: 'Massive upfront capex for renewable infrastructure, regulatory decarbonization mandates, and volatile power purchase agreements (PPAs).',
    financialStrategy: 'Project finance debt syndication, tax equity structuring, green bond issuance, and long-term commodity swap hedges.',
    relevantServices: ['Asset Management', 'Corporate Finance', 'Risk & Treasury'],
    keyMetrics: [
      { label: 'Green Energy Financed', value: '$6.4B' },
      { label: 'GW Capacity Deployed', value: '4.8 GW' },
      { label: 'Tax Equity Structured', value: '$1.2B' },
    ],
    caseStudyTitle: 'Offshore Wind & Battery Storage Consortium',
    caseStudySummary: 'Co-ordinated $1.4B multi-sponsor non-recourse project financing with sovereign wealth fund participation.',
    caseStudyResult: '1.4 GW clean capacity delivered on schedule',
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate & Built Asset',
    iconName: 'Building',
    industryChallenge: 'Refinancing debt cliffs in commercial real estate, interest rate volatility, and shifting demand across office vs logistics assets.',
    financialStrategy: 'Mezzanine debt restructuring, opportunistic credit funds, preferred equity infusions, and core logistics portfolio recapitalizations.',
    relevantServices: ['Asset Management', 'Wealth Management', 'Investment Advisory'],
    keyMetrics: [
      { label: 'Real Estate Transactions', value: '$8.9B' },
      { label: 'Average Cap Rate Alpha', value: '+180 bps' },
      { label: 'Properties Advised', value: '420+' },
    ],
    caseStudyTitle: 'Prime European Logistics Hub Rollout',
    caseStudySummary: 'Constructed a €750M dedicated real asset vehicle acquiring high-yield cold-chain logistics hubs adjacent to tier-1 cargo ports.',
    caseStudyResult: '9.4% net annualized yield with 100% inflation-indexed leases',
  },
  {
    id: 'financial-services',
    slug: 'financial-services',
    name: 'Financial Services & Insurance',
    iconName: 'Landmark',
    industryChallenge: 'Stricter capital adequacy ratios (Basel IV / Solvency II), legacy core banking drag, and rising cyber-systemic counterparty risks.',
    financialStrategy: 'Balance sheet synthetic risk transfers, subordinated debt optimization, automated treasury gateways, and reinsurance capacity syndication.',
    relevantServices: ['Financial Technology', 'Risk & Treasury', 'Investment Advisory'],
    keyMetrics: [
      { label: 'Regulatory Capital Freed', value: '$2.4B' },
      { label: 'Financial Institution Clients', value: '180+' },
      { label: 'Core Banking API Syncs', value: '100%' },
    ],
    caseStudyTitle: 'Tier-2 European Commercial Bank Recapitalization',
    caseStudySummary: 'Executed synthetic risk transfer on €1.2B loan book, freeing €140M in Tier 1 capital buffer without selling customer relationships.',
    caseStudyResult: '180 bps improvement in CET1 regulatory capital ratio',
  },
  {
    id: 'retail',
    slug: 'retail',
    name: 'Consumer & Global Retail',
    iconName: 'ShoppingBag',
    industryChallenge: 'Omnichannel inventory holding costs, margin compression from inflation, and rapid shifts in consumer discretionary spending.',
    financialStrategy: 'Dynamic inventory working capital facilities, retail network sale-leasebacks, and brand licensing M&A advisory.',
    relevantServices: ['Corporate Finance', 'M&A Advisory', 'Financial Technology'],
    keyMetrics: [
      { label: 'Retail Turnaround Value', value: '$2.1B' },
      { label: 'Cash Conversion Days Cut', value: '18 Days' },
      { label: 'E-commerce Synergies', value: '+32%' },
    ],
    caseStudyTitle: 'Omnichannel Fashion Retailer Restructuring',
    caseStudySummary: 'Optimized $240M cross-border supply chain financing while renegotiating leasehold debt obligations across 280 flagships.',
    caseStudyResult: '$34M annualized SG&A and interest savings realized',
  },
  {
    id: 'logistics',
    slug: 'logistics',
    name: 'Logistics & Global Maritime',
    iconName: 'Ship',
    industryChallenge: 'Fuel price volatility, vessel & fleet leasing capital demands, and unpredictable port demurrage and geopolitical tariff shifts.',
    financialStrategy: 'Bunker fuel derivative hedging programs, container asset securitizations, and maritime green-retrofit loan syndications.',
    relevantServices: ['Risk & Treasury', 'Corporate Finance', 'Asset Management'],
    keyMetrics: [
      { label: 'Maritime Debt Structured', value: '$3.3B' },
      { label: 'Fuel Cost Volatility Reduction', value: '38%' },
      { label: 'Fleet Assets Managed', value: '160 Vessels' },
    ],
    caseStudyTitle: 'Trans-Pacific Container Carrier Fleet Upgrade',
    caseStudySummary: 'Arranged $600M ESG-linked sustainability transition credit facility to retrofit 24 ultra-large container ships.',
    caseStudyResult: '45 bps interest discount achieved upon hitting carbon targets',
  },
  {
    id: 'infrastructure',
    slug: 'infrastructure',
    name: 'Critical Infrastructure & Telecom',
    iconName: 'Radio',
    industryChallenge: 'Decade-long capital payback horizons, government concession compliance, and fiber / 5G tower rollout capital intensity.',
    financialStrategy: 'Long-dated institutional infrastructure funds, private-public partnership (P3) structuring, and inflation-hedged debt tranches.',
    relevantServices: ['Asset Management', 'Corporate Finance', 'Investment Advisory'],
    keyMetrics: [
      { label: 'Infrastructure Financed', value: '$11.2B' },
      { label: 'Avg Concession Horizon', value: '25 Years' },
      { label: 'Default Rate on Debt', value: '0.0%' },
    ],
    caseStudyTitle: 'National Fiber-to-the-Home Infrastructure Network',
    caseStudySummary: 'Structured $1.8B multi-tranche consortium financing backed by anchor utility wholesale take-or-pay agreements.',
    caseStudyResult: '3.2M homes connected with investment-grade BBB+ rating',
  },
];
