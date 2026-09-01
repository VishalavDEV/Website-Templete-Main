export interface InvestmentPrinciple {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
  rationale: string;
}

export interface AssetClass {
  id: string;
  name: string;
  allocationPercent: number;
  investmentRole: string;
  riskProfile: string;
  typicalHorizon: string;
  researchApproach: string;
  characteristics: string[];
  benchmarkConcept: string;
}

export const INVESTMENT_PRINCIPLES: InvestmentPrinciple[] = [
  {
    number: "01",
    title: "Think Long Term",
    subtitle: "Enduring compounding over market timing",
    summary: "True capital preservation and growth require looking beyond quarterly volatility and monetary cycles to identify structural competitive moats and secular trends.",
    details: [
      "Focus on 5-to-10 year cash generation capacity rather than speculative market momentum.",
      "Resist pro-cyclical allocation biases during euphoria and panics.",
      "Prioritize reinvestment runways and resilient balance-sheet capitalization."
    ],
    rationale: "Short-term market forecasting consistently degrades risk-adjusted returns. Patient institutional horizon is the single most reliable source of structural alpha."
  },
  {
    number: "02",
    title: "Stay Independent",
    subtitle: "Absolute fiduciary alignment with zero proprietary conflicts",
    summary: "We operate as an uncompromised fiduciary. We hold no proprietary inventory, accept no distribution kickbacks, and execute solely in our clients' best interest.",
    details: [
      "Fee-only advisory model with complete transparent disclosure.",
      "Open-architecture asset sourcing spanning direct institutional deals and top-tier global managers.",
      "Rigorous separation between research conclusions and third-party placement incentives."
    ],
    rationale: "Conflicts of interest are the primary destroyer of institutional trust. Independence allows objective underwriting of every opportunity."
  },
  {
    number: "03",
    title: "Understand Risk",
    subtitle: "Asymmetric risk underwriting before return expectations",
    summary: "Risk is not merely volatility or standard deviation; it is the probability of permanent capital impairment and unmitigated liquidity mismatch.",
    details: [
      "Stress-test portfolios against severe macroeconomic tail events and credit freezes.",
      "Evaluate liquidity profiles against worst-case corporate funding obligations.",
      "Underwrite structural counterparty and structural leverage exposures."
    ],
    rationale: "Protecting the downside ensures long-term compounding. Managing capital solvency through shocks preserves strategic optionality."
  }
];

export const ASSET_CLASSES: AssetClass[] = [
  {
    id: "public-equity",
    name: "Public Equity",
    allocationPercent: 35,
    investmentRole: "Core Long-Term Capital Growth & Inflation Hedging",
    riskProfile: "Moderate to High Volatility / Low Liquidity Risk",
    typicalHorizon: "5 – 10+ Years",
    researchApproach: "Bottom-up fundamental quality assessment combined with global sector secular thematic analysis.",
    characteristics: [
      "High liquidity in global developed and liquid emerging markets",
      "Focus on companies with pricing power, durable return on invested capital (ROIC), and clean governance",
      "Dynamic factor tilt adjusting for real interest rate regimes"
    ],
    benchmarkConcept: "Global All-Cap Quality Index"
  },
  {
    id: "private-equity",
    name: "Private Equity",
    allocationPercent: 25,
    investmentRole: "Direct Operational Value Creation & Asymmetric Alpha",
    riskProfile: "Illiquid / High Enterprise Complexity",
    typicalHorizon: "7 – 12 Years",
    researchApproach: "Deep proprietary operational due diligence, cash flow covenant analysis, and sponsor track-record verification.",
    characteristics: [
      "Direct co-investments and selective primary buyout commitments",
      "Control and growth capital with active board governance participation",
      "Exit discipline through corporate strategic sale or sponsor recapitalization"
    ],
    benchmarkConcept: "Private Buyout & Growth Benchmark"
  },
  {
    id: "fixed-income",
    name: "Fixed Income",
    allocationPercent: 20,
    investmentRole: "Capital Preservation, Steady Income & Deflationary Buffer",
    riskProfile: "Low to Moderate / Duration & Credit Spread Sensitive",
    typicalHorizon: "3 – 7 Years",
    researchApproach: "Sovereign curve positioning, structural credit subordination analysis, and balance sheet solvency modeling.",
    characteristics: [
      "Sovereign debt, senior corporate investment-grade credits, and high-quality structured paper",
      "Active duration adjustment according to central bank policy cycles",
      "Strict concentration limits per issuer and credit tranche"
    ],
    benchmarkConcept: "Global Aggregate Sovereign & Credit Index"
  },
  {
    id: "real-assets",
    name: "Real Assets",
    allocationPercent: 15,
    investmentRole: "Real Cash Flow Generation & Direct Inflation Resilience",
    riskProfile: "Moderate Illiquidity / Physical & Regulatory Asset Risk",
    typicalHorizon: "7 – 15 Years",
    researchApproach: "Physical asset inspection, contractual yield verification, replacement cost modeling, and jurisdictional legal analysis.",
    characteristics: [
      "Core infrastructure (energy transmission, logistics, digital networks)",
      "High-barrier urban commercial real estate with index-linked leases",
      "Direct yield distributions with tangible asset backing"
    ],
    benchmarkConcept: "Core Global Infrastructure & Real Estate Index"
  },
  {
    id: "cash",
    name: "Cash & Treasury",
    allocationPercent: 5,
    investmentRole: "Immediate Liquidity Buffer & Strategic Opportunistic Dry Powder",
    riskProfile: "Near-Zero Nominal Risk / Short Duration",
    typicalHorizon: "Immediate – 12 Months",
    researchApproach: "Short-term sovereign Treasury yield curve optimization and counterparty bank credit rating screening.",
    characteristics: [
      "Ultra-short government bills and overnight central bank deposits",
      "Zero mark-to-market vulnerability during systemic liquidation shocks",
      "Readily deployable during distressed market dislocations"
    ],
    benchmarkConcept: "Short-Term Treasury Benchmark"
  }
];
