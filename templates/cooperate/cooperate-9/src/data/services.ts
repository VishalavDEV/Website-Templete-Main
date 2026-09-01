export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortTagline: string;
  summary: string;
  description: string;
  targetClients: string;
  capabilities: string[];
  deliverables: string[];
  advisoryFramework: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "investment-management",
    slug: "investment",
    name: "Investment Management",
    shortTagline: "Disciplined multi-asset fiduciary allocation for institutions & private capital.",
    summary: "Discretionary and advisory portfolio management designed to compound real capital through full macroeconomic cycles.",
    description: "We construct customized investment portfolios based on structural asset allocation, unconstrained global security selection, and disciplined risk budgeting. We emphasize resilience, quality, and direct alignment with liability horizons.",
    targetClients: "Institutional Endowments, Sovereign Allocators, Single & Multi-Family Offices, Corporate Treasuries.",
    capabilities: [
      "Custom Global Multi-Asset Portfolios",
      "Direct Equity & Fixed Income Separately Managed Accounts (SMAs)",
      "Strategic & Tactical Asset Allocation",
      "Dynamic Liquidity & Cash Flow Matching",
      "Independent Manager Sourcing & Due Diligence"
    ],
    deliverables: [
      "Investment Policy Statement (IPS) Formulation",
      "Quarterly Comprehensive Risk & Attribution Reporting",
      "Tax-Aware Portfolio Rebalancing Schedules",
      "Direct Chief Investment Officer (CIO) Mandate Reviews"
    ],
    advisoryFramework: "Liability-Driven Investment (LDI) framework coupled with fundamental multi-factor underwriting."
  },
  {
    id: "corporate-advisory",
    slug: "advisory",
    name: "Corporate Advisory",
    shortTagline: "Objective guidance on mergers, acquisitions, valuations & strategic alternatives.",
    summary: "Unconflicted transactional intelligence and execution for business owners, corporate boards, and management teams.",
    description: "We advise corporations through pivotal strategic transitions, from buy-side and sell-side M&A execution to balance sheet recapitalizations, corporate divestitures, and board-level capital optimization.",
    targetClients: "Mid-Market Corporations, Enterprise Founders, Private Equity Portfolio Companies, Board Committees.",
    capabilities: [
      "Sell-Side & Buy-Side M&A Execution",
      "Strategic Divestitures & Carve-Outs",
      "Independent Enterprise Valuation & Fairness Opinions",
      "Management Buyouts (MBOs) & Recapitalizations",
      "Board Strategic Options Assessment"
    ],
    deliverables: [
      "Comprehensive Confidential Information Memorandums (CIM)",
      "Dynamic Synergistic Valuation Models",
      "Qualified Buyer / Partner Match Matrix",
      "Complete Transaction Negotiation Support"
    ],
    advisoryFramework: "Objective corporate valuation combined with disciplined strategic auction and negotiation mechanics."
  },
  {
    id: "private-markets",
    slug: "private-markets",
    name: "Private Markets",
    shortTagline: "Direct private equity, venture, private credit & real asset origination.",
    summary: "Access to differentiated non-public investment opportunities with direct operational diligence.",
    description: "We originate, underwrite, and structure direct investments in private operating businesses, real estate, renewable infrastructure, and senior private debt tranches, bypassing crowded intermediated retail channels.",
    targetClients: "Family Offices, Ultra-High-Net-Worth Individuals, Qualified Institutional Buyers (QIBs).",
    capabilities: [
      "Direct Co-Investment Syndication",
      "Senior & Subordinated Private Credit Placements",
      "Core & Value-Add Infrastructure Underwriting",
      "Secondary Market Liquidity Solutions",
      "Operational & ESG Direct Due Diligence"
    ],
    deliverables: [
      "Institutional Investment Committee Memorandums",
      "Legal Structuring & SPV Management Architecture",
      "Quarterly Fair Value & Asset Inspection Reports",
      "Realized Value & IRR Waterfall Telemetry"
    ],
    advisoryFramework: "Bespoke sponsor underwriting, operational stress-testing, and direct governance representation."
  },
  {
    id: "wealth-management",
    slug: "wealth",
    name: "Wealth Management",
    shortTagline: "Comprehensive balance-sheet governance across generations.",
    summary: "Holistic wealth architecture integrating portfolio management, estate planning, taxation, and family governance.",
    description: "For executives, entrepreneurs, and family offices, wealth management is fundamentally about preservation, legacy, and stewardship. We coordinate complex asset holdings across multiple jurisdictions into unified, cohesive balance sheets.",
    targetClients: "Business Founders, C-Suite Executives, Multi-Generational Families, Private Foundations.",
    capabilities: [
      "Multi-Generational Wealth Architecture",
      "Cross-Border Tax & Estate Structuring",
      "Executive Equity Compensation Optimization",
      "Family Office Advisory & Governance Charters",
      "Philanthropic Trust & Foundation Planning"
    ],
    deliverables: [
      "Consolidated Global Balance Sheet Ledger",
      "Multi-Year Estate Transition Blueprints",
      "Executive Liquidity & Diversification Timelines",
      "Annual Intergenerational Family Assembly Support"
    ],
    advisoryFramework: "Holistic fiduciary balance sheet governance coordinating legal, tax, and multi-asset capital allocations."
  },
  {
    id: "risk-advisory",
    slug: "risk",
    name: "Risk Advisory",
    shortTagline: "Deterministic risk quantification, stress-testing & capital preservation.",
    summary: "Rigorous analytical frameworks to measure, isolate, and mitigate portfolio and organizational vulnerabilities.",
    description: "We help institutions and family balance sheets dissect hidden correlations, currency mismatch, liquidity squeezes, and macroeconomic tail risks, establishing proactive hedging structures and governance controls.",
    targetClients: "Treasury Departments, Investment Committees, Risk Officers, Foundation Trustees.",
    capabilities: [
      "Macroeconomic Scenario Stress-Testing",
      "Liquidity & Cash Flow Mismatch Analysis",
      "FX & Interest Rate Hedging Strategies",
      "Counterparty Exposure Audits",
      "Enterprise Risk Management (ERM) Frameworks"
    ],
    deliverables: [
      "Comprehensive Institutional Risk Diagnostic",
      "Multi-Factor Tail-Risk Sensitivity Matrix",
      "Derivatives & Hedging Cost-Benefit Blueprints",
      "Quarterly Risk Limit Compliance Dashboards"
    ],
    advisoryFramework: "Multi-factor stress-testing incorporating sovereign, liquidity, and credit dislocation parameters."
  },
  {
    id: "capital-strategy",
    slug: "capital-strategy",
    name: "Capital Strategy",
    shortTagline: "Optimal capital structure, debt placement & treasury optimization.",
    summary: "Strategic capital planning that aligns corporate liabilities with long-term enterprise objectives.",
    description: "We analyze capital structures to determine the optimal blend of senior debt, mezzanine financing, equity, and working capital facilities. We help leadership negotiate favorable terms with global capital providers.",
    targetClients: "High-Growth Companies, Infrastructure Sponsors, Capital-Intensive Enterprises.",
    capabilities: [
      "Debt Capacity & Capital Structure Optimization",
      "Senior & Mezzanine Financing Advisory",
      "Working Capital & Treasury Rationalization",
      "Refinancing & Covenant Renegotiation",
      "Cost of Capital (WACC) Minimization"
    ],
    deliverables: [
      "Optimal Capital Structure Modeling",
      "Lender & Institutional Funder Book",
      "Term Sheet Comparison & Covenant Analysis",
      "Execution Management Through Closing"
    ],
    advisoryFramework: "Weighted Average Cost of Capital (WACC) optimization balanced against operational liquidity buffers."
  }
];
