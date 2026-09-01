export interface PathwayStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface AdvisoryScenario {
  id: string;
  title: string;
  category: string;
  challengeStatement: string;
  timeHorizon: string;
  primaryObjective: string;
  pathway: PathwayStep[];
  expectedOutcome: string;
  keyMetric: string;
}

export const ADVISORY_SCENARIOS: AdvisoryScenario[] = [
  {
    id: "growing-the-business",
    title: "Growing the Business",
    category: "Strategic Expansion",
    challengeStatement: "Scaling operations while preserving capital efficiency, operational agility, and sustainable margin profile.",
    timeHorizon: "18 – 36 Months",
    primaryObjective: "Fund and sequence organic and inorganic growth initiatives without over-leveraging the enterprise.",
    pathway: [
      {
        stepNumber: "01",
        title: "Growth Audit & Unit Economics",
        description: "Deconstruct marginal revenue, customer lifetime value, working capital drag, and core operational bottlenecks.",
        deliverable: "Diagnostic Capital Efficiency Matrix"
      },
      {
        stepNumber: "02",
        title: "Capital Capacity Modeling",
        description: "Determine internal cash flow reinvestment capacity versus external debt and equity financing requirements.",
        deliverable: "Dynamic 5-Year Capital Requirement Model"
      },
      {
        stepNumber: "03",
        title: "Inorganic M&A Pipeline",
        description: "Identify and prioritize proprietary acquisition targets that provide instant distribution, intellectual property, or scale.",
        deliverable: "Target Screening & Valuation Ledger"
      },
      {
        stepNumber: "04",
        title: "Financing Architecture",
        description: "Structure non-dilutive credit facilities and growth capital commitments aligned with milestone execution.",
        deliverable: "Structured Facility Term Sheet Book"
      },
      {
        stepNumber: "05",
        title: "Execution & Governance",
        description: "Establish board-level capital allocation metrics and integration protocols to protect cash return thresholds.",
        deliverable: "Growth Governance & ROIC Framework"
      }
    ],
    expectedOutcome: "Accelerated compound revenue growth with preserved balance sheet resilience and non-dilutive capital structure.",
    keyMetric: "Targeted 3x Return on Incremental Invested Capital"
  },
  {
    id: "raising-capital",
    title: "Raising Capital",
    category: "Capital Formation",
    challengeStatement: "Accessing institutional debt or equity under terms that preserve governance sovereignty and minimize dilution.",
    timeHorizon: "6 – 12 Months",
    primaryObjective: "Secure competitively priced growth capital from top-tier institutional allocators and direct lenders.",
    pathway: [
      {
        stepNumber: "01",
        title: "Financial Restatement & Valuation",
        description: "Reconcile management accounts into institutional-grade EBITDA metrics and build defensible pro forma valuation models.",
        deliverable: "Audited Quality of Earnings Model"
      },
      {
        stepNumber: "02",
        title: "Institutional Narrative & Deck",
        description: "Articulate structural competitive moats, market expansion vectors, and defensible unit economic scalability.",
        deliverable: "Institutional Offering Memorandum"
      },
      {
        stepNumber: "03",
        title: "Funder Matching & Outreach",
        description: "Direct targeted confidential outreach to specialized family offices, private credit funds, and sovereign co-investors.",
        deliverable: "Curated Capital Provider Tier List"
      },
      {
        stepNumber: "04",
        title: "Term Sheet Auction",
        description: "Create competitive tension across multiple term sheets to negotiate covenants, liquidation preferences, and cost.",
        deliverable: "Comparative Term Sheet Analysis"
      },
      {
        stepNumber: "05",
        title: "Definitive Closing",
        description: "Manage confirmatory due diligence, intercreditor agreements, legal documentation, and funds disbursement.",
        deliverable: "Executed Capital Facility"
      }
    ],
    expectedOutcome: "Optimized capital injection with favorable governance covenants and competitive cost of capital.",
    keyMetric: "Up to 150 bps Reduction in Effective Cost of Capital"
  },
  {
    id: "managing-liquidity",
    title: "Managing Liquidity",
    category: "Treasury & Working Capital",
    challengeStatement: "Eliminating stranded cash across global entities while optimizing short-term yields and operational liquidity cushions.",
    timeHorizon: "3 – 6 Months",
    primaryObjective: "Consolidate multi-currency treasury positions into automated, yield-bearing, and liquid structures.",
    pathway: [
      {
        stepNumber: "01",
        title: "Global Cash Map",
        description: "Audit bank accounts across all subsidiaries, legal entities, and currencies to isolate trapped or idle cash balances.",
        deliverable: "Real-Time Treasury Visibility Map"
      },
      {
        stepNumber: "02",
        title: "Cash Flow Forecasting",
        description: "Model deterministic 13-week rolling cash forecasts under base, stress, and liquidity crisis conditions.",
        deliverable: "13-Week Cash Forecasting Engine"
      },
      {
        stepNumber: "03",
        title: "Sweeping & Pooling Setup",
        description: "Implement automated notional pooling and physical cash sweeping mechanisms across global partner banks.",
        deliverable: "Global Cash Pooling Architecture"
      },
      {
        stepNumber: "04",
        title: "Short-Term Yield Strategy",
        description: "Deploy excess structural cash into institutional Treasury bills and sovereign repo facilities to maximize risk-free yield.",
        deliverable: "Treasury Investment Policy Guidelines"
      },
      {
        stepNumber: "05",
        title: "Contingency Liquidity Buffers",
        description: "Establish committed revolving credit lines to guarantee liquidity during unexpected market credit freezes.",
        deliverable: "Emergency Standby Liquidity Facility"
      }
    ],
    expectedOutcome: "Total visibility, eliminated idle cash drag, and automated operational liquidity buffers.",
    keyMetric: "100% Real-Time Cash Visibility & Optimized Yield"
  },
  {
    id: "expanding-internationally",
    title: "Expanding Internationally",
    category: "Cross-Border Strategy",
    challengeStatement: "Entering new sovereign markets with complex regulatory, tax, currency, and local entity requirements.",
    timeHorizon: "12 – 24 Months",
    primaryObjective: "Deploy capital and structure foreign operations with minimized tax friction and foreign exchange exposure.",
    pathway: [
      {
        stepNumber: "01",
        title: "Jurisdictional Analysis",
        description: "Evaluate target sovereign markets regarding legal protections, regulatory compliance, capital repatriation, and tax treaties.",
        deliverable: "Cross-Border Feasibility Diagnostic"
      },
      {
        stepNumber: "02",
        title: "Entity & Tax Architecture",
        description: "Design holding company hierarchies and transfer pricing structures that optimize global effective tax rates.",
        deliverable: "International Corporate Structure Blueprint"
      },
      {
        stepNumber: "03",
        title: "Local Partner & Bank Sourcing",
        description: "Select tier-one banking partners and qualified local joint-venture candidates to accelerate regulatory approvals.",
        deliverable: "Local Banking & Alliance Framework"
      },
      {
        stepNumber: "04",
        title: "FX Hedging Architecture",
        description: "Implement currency forwards and cross-currency swaps to isolate operational earnings from foreign exchange volatility.",
        deliverable: "Multi-Currency Risk Mitigation Policy"
      },
      {
        stepNumber: "05",
        title: "Capital Deployment & Governance",
        description: "Fund international subsidiaries in phased milestone tranches tied to localized profitability metrics.",
        deliverable: "International Expansion Governance Protocol"
      }
    ],
    expectedOutcome: "Seamless global market entry with insulated currency risks and tax-efficient profit repatriation.",
    keyMetric: "Zero Unhedged Currency Exposure Across Borders"
  },
  {
    id: "managing-risk",
    title: "Managing Risk",
    category: "Enterprise Preservation",
    challengeStatement: "Protecting balance sheets from macroeconomic shocks, interest rate surges, and counterparty defaults.",
    timeHorizon: "Ongoing / Continuous",
    primaryObjective: "Identify hidden structural correlations and build asymmetric protective hedges.",
    pathway: [
      {
        stepNumber: "01",
        title: "Enterprise Risk Audit",
        description: "Map all balance sheet and contractual obligations against extreme interest rate, currency, and commodity spikes.",
        deliverable: "Institutional Exposure Heat Map"
      },
      {
        stepNumber: "02",
        title: "Stress Scenario Simulation",
        description: "Run Monte Carlo simulations of simultaneous revenue collapse, credit freeze, and inflation resurgence.",
        deliverable: "Severe Dislocation Stress Report"
      },
      {
        stepNumber: "03",
        title: "Hedging Instrument Design",
        description: "Structure cost-effective derivative collars, interest rate caps, and credit protection mechanisms.",
        deliverable: "Bespoke Hedging Specification Book"
      },
      {
        stepNumber: "04",
        title: "Counterparty Ceiling Limits",
        description: "Set strict exposure limits across banking institutions, vendors, and trading partners to avoid contagion.",
        deliverable: "Counterparty Governance Mandate"
      },
      {
        stepNumber: "05",
        title: "Quarterly Committee Review",
        description: "Institute ongoing risk oversight reporting directly to the Board of Directors or Investment Committee.",
        deliverable: "Quarterly Risk Telemetry Dashboard"
      }
    ],
    expectedOutcome: "Total balance sheet immunity to single-point failure events and market liquidity crises.",
    keyMetric: "Deterministic Downside Floor Established"
  },
  {
    id: "preparing-for-exit",
    title: "Preparing for Exit",
    category: "Transaction & Monetization",
    challengeStatement: "Maximizing enterprise transaction value and executing a clean transition for shareholders and management.",
    timeHorizon: "12 – 24 Months",
    primaryObjective: "Systematically eliminate valuation discounts, build competitive buyer tension, and close at premium multiples.",
    pathway: [
      {
        stepNumber: "01",
        title: "Business Valuation & Gap Audit",
        description: "Conduct comprehensive pre-market audit to identify customer concentration risks, accounting adjustments, and EBITDA enhancements.",
        deliverable: "Comprehensive Valuation & Value-Gap Audit"
      },
      {
        stepNumber: "02",
        title: "Capital Structure Optimization",
        description: "Refinance onerous debt covenants, clean up minority shareholder agreements, and streamline corporate entity structure.",
        deliverable: "Pre-Sale Balance Sheet Rationalization"
      },
      {
        stepNumber: "03",
        title: "Transaction Strategy & Positioning",
        description: "Frame the strategic narrative, synergies for strategic buyers versus financial sponsors, and marketing timeline.",
        deliverable: "Confidential Information Memorandum (CIM)"
      },
      {
        stepNumber: "04",
        title: "Buyer Analysis & Competitive Auction",
        description: "Run a controlled, highly confidential competitive process across pre-screened global strategic buyers and private equity funds.",
        deliverable: "Tier-One Qualified Buyer Book"
      },
      {
        stepNumber: "05",
        title: "Execution, Negotiation & Closing",
        description: "Structure purchase agreements, representations and warranties insurance, earn-outs, and closing escrow terms.",
        deliverable: "Definitive Purchase & Sale Agreement"
      }
    ],
    expectedOutcome: "Maximized net transaction proceeds with clean indemnification and legacy continuity.",
    keyMetric: "20–35% Premium Over Initial Standalone Valuation"
  },
  {
    id: "building-long-term-wealth",
    title: "Building Long-Term Wealth",
    category: "Private Capital Preservation",
    challengeStatement: "Structuring multi-generational capital to withstand inflation, tax erosion, and intergenerational dilution.",
    timeHorizon: "Generational (10 – 50+ Years)",
    primaryObjective: "Establish a resilient family governance structure and perpetual multi-asset compounding engine.",
    pathway: [
      {
        stepNumber: "01",
        title: "Family Balance Sheet Audit",
        description: "Consolidate global real estate, private operating businesses, liquid securities, and trust holdings into a single ledger.",
        deliverable: "Consolidated Family Wealth Ledger"
      },
      {
        stepNumber: "02",
        title: "Governance & Mission Charter",
        description: "Draft family governance constitution establishing investment authority, distribution rules, and philanthropic legacy mandates.",
        deliverable: "Family Office Governance Charter"
      },
      {
        stepNumber: "03",
        title: "Trust & Estate Architecture",
        description: "Implement statutory asset protection trusts, generation-skipping vehicles, and tax-efficient gifting mechanisms.",
        deliverable: "Multi-Jurisdictional Estate Architecture"
      },
      {
        stepNumber: "04",
        title: "Endowment-Style Allocation",
        description: "Construct an all-weather portfolio spanning private credit, direct equity, real assets, and liquid core securities.",
        deliverable: "Bespoke Family Investment Policy (IPS)"
      },
      {
        stepNumber: "05",
        title: "Next-Gen Education & Continuity",
        description: "Conduct structured financial literacy and stewardship workshops for rising generation beneficiaries.",
        deliverable: "Next-Generation Stewardship Program"
      }
    ],
    expectedOutcome: "Perpetual intergenerational capital preservation insulated from litigation, taxation, and market turmoil.",
    keyMetric: "Targeted Real 5%+ Compounding Net of Taxes & Inflation"
  }
];
