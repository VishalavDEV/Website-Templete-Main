export interface SolutionCategory {
  id: string;
  slug: string;
  title: string;
  targetAudience: string;
  tagline: string;
  challenge: string;
  strategy: string;
  implementation: string;
  technology: string;
  results: { metric: string; description: string }[];
  caseStudyRef: string;
  recommendedServices: string[];
}

export const SOLUTIONS: SolutionCategory[] = [
  {
    id: 'businesses',
    slug: 'businesses',
    title: 'For Businesses',
    targetAudience: 'Mid-Market & Large Enterprises',
    tagline: 'Optimizing balance sheets, accelerating growth, and navigating cross-border complexity.',
    challenge: 'Fragmented global liquidity, rising borrowing costs, and sub-optimal working capital cycles inhibiting strategic acquisitions and international operations.',
    strategy: 'Holistic capital restructuring paired with algorithmic treasury management, reducing cost of debt while unlocking idle trapped cash across overseas subsidiaries.',
    implementation: 'We conduct a 30-day liquidity and debt audit, deploy Vantage Core™ multi-bank telemetry, and syndicate tailored senior secured private credit facilities.',
    technology: 'Vantage Core™ Automated Working Capital Analytics & FX Dynamic Hedging Engine.',
    results: [
      { metric: '24%', description: 'Improvement in global capital efficiency' },
      { metric: '$42M', description: 'Trapped overseas cash repatriated tax-efficiently' },
      { metric: '160 bps', description: 'Average interest spread reduction across loan facilities' },
    ],
    caseStudyRef: 'Global Manufacturing Group',
    recommendedServices: ['Corporate Finance', 'Risk & Treasury', 'M&A Advisory', 'Financial Technology'],
  },
  {
    id: 'investors',
    slug: 'investors',
    title: 'For Investors',
    targetAudience: 'Institutional Allocators & High-Net-Worth Investors',
    tagline: 'Disciplined multi-asset allocation, uncorrelated alpha, and rigorous risk budgeting.',
    challenge: 'Compressed yields in traditional fixed income, elevated market correlation during volatility, and private market liquidity premiums requiring selective underwriting.',
    strategy: 'Proprietary risk-parity framework blending private senior credit, defensive real assets, and macro hedged absolute return overlays to preserve capital and compound yield.',
    implementation: 'Dedicated Separately Managed Accounts (SMAs) with customized fiduciary risk mandates, transparent fee structures, and quarterly institutional committee reviews.',
    technology: 'Vantage RiskLens™ Scenario Engine simulating 50+ macroeconomic stress scenarios.',
    results: [
      { metric: '1.42', description: '10-Year Sharpe ratio on core diversified mandates' },
      { metric: '8.4%', description: 'Net annualized return with 40% lower volatility than MSCI World' },
      { metric: '100%', description: 'Fiduciary transparency with direct asset ownership' },
    ],
    caseStudyRef: 'Diversified Institutional Fund',
    recommendedServices: ['Investment Advisory', 'Asset Management', 'Wealth Management'],
  },
  {
    id: 'institutions',
    slug: 'institutions',
    title: 'For Institutions',
    targetAudience: 'Endowments, Foundations, Pensions & Sovereign Entities',
    tagline: 'Fiduciary governance, liability-driven investment, and generational stewardship.',
    challenge: 'Strict regulatory solvency requirements, shifting actuarial liabilities, and the mandate to generate sustainable long-term cash flow without taking unhedged tail-risk.',
    strategy: 'Liability-Driven Investment (LDI) frameworks and dedicated cash-flow matching portfolios utilizing high-grade private credit and essential infrastructure assets.',
    implementation: 'Co-fiduciary advisory model integrating directly with board investment committees, providing audit-ready ESG screenings and real-time risk reporting.',
    technology: 'Institutional Governance Portal with automated compliance & board reporting packages.',
    results: [
      { metric: '$18.6B', description: 'Institutional assets governed under fiduciary guidelines' },
      { metric: '99.4%', description: 'Actuarial liability cash-flow matching accuracy' },
      { metric: 'Zero', description: 'Governance audit discrepancies across 18-year firm history' },
    ],
    caseStudyRef: 'University Endowment Consortium',
    recommendedServices: ['Investment Advisory', 'Asset Management', 'Risk & Treasury'],
  },
  {
    id: 'family-offices',
    slug: 'family-offices',
    title: 'For Family Offices',
    targetAudience: 'Single & Multi-Family Offices, Wealth Dynasties',
    tagline: 'Generational legacy preservation, philanthropic governance, and direct co-investments.',
    challenge: 'Complex cross-jurisdiction tax exposure, succession planning conflicts, and lack of direct deal-flow access to tier-one private equity and infrastructure co-investments.',
    strategy: 'Integrated family governance architecture uniting tax-efficient trust structures, proprietary direct co-investment clubs, and next-generation leadership development.',
    implementation: 'Bespoke Family Office Advisory team providing multi-custodian consolidation, direct indexing, and philanthropic foundation management.',
    technology: 'Vantage WealthVault™ Private multi-custodian consolidated net worth portal.',
    results: [
      { metric: '98%', description: 'Generational retention across 140+ family office relationships' },
      { metric: '$2.1B', description: 'Direct private co-investments deployed alongside institutional partners' },
      { metric: '35%', description: 'Average estate tax efficiency enhancement' },
    ],
    caseStudyRef: 'Family Investment Office',
    recommendedServices: ['Wealth Management', 'Corporate Finance', 'Asset Management'],
  },
  {
    id: 'startups',
    slug: 'startups',
    title: 'For Startups & Scaleups',
    targetAudience: 'High-Growth Tech Companies & Series B+ Scaleups',
    tagline: 'Venture debt structuring, non-dilutive financing, and M&A runway optimization.',
    challenge: 'High equity dilution in late-stage funding rounds, unpredictable cash burn cycles, and complex international treasury setups ahead of global expansion.',
    strategy: 'Strategic non-dilutive venture debt syndication combined with automated runway extension algorithms and financial preparation for IPO or strategic buyout.',
    implementation: 'Full-stack fractional CFO advisory, debt term sheet negotiation, and automated cash burn dashboard deployment.',
    technology: 'Vantage Runway™ Predictive burn rate simulator & dynamic debt covenant tracker.',
    results: [
      { metric: '$180M', description: 'Optimized non-dilutive debt financing strategy structured' },
      { metric: '14 mo', description: 'Average runway extension achieved without equity dilution' },
      { metric: '9.2x', description: 'Average valuation uplift at subsequent strategic liquidity event' },
    ],
    caseStudyRef: 'Technology Company',
    recommendedServices: ['Corporate Finance', 'Financial Technology', 'M&A Advisory'],
  },
];
