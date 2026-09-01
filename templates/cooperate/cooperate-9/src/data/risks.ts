export interface RiskCategoryItem {
  id: string;
  category: string;
  shortDefinition: string;
  definition: string;
  potentialImpact: string;
  mitigation: string;
  monitoringIndicators: string[];
  severityLevel: "High" | "Critical" | "Moderate";
  governanceProtocol: string;
}

export const RISK_CATEGORIES: RiskCategoryItem[] = [
  {
    id: "market-risk",
    category: "Market Risk",
    shortDefinition: "Adverse changes in market prices, interest rates, currency pairs, and commodity benchmarks.",
    definition: "Exposure to macroeconomic price volatility driven by monetary policy shifts, global interest rate repricing, equity valuation compressions, and currency fluctuations.",
    potentialImpact: "Mark-to-market portfolio devaluation, increased debt servicing costs on floating-rate liabilities, and margin compression in export/import cash flows.",
    mitigation: "Active duration matching, interest rate swap overlays, dynamic currency hedging collars, and disciplined multi-asset cross-correlations.",
    monitoringIndicators: [
      "Real & Nominal Sovereign Yield Curve Spreads",
      "VIX & Cross-Asset Implied Volatility Surface",
      "Trade-Weighted FX Volatility Indices",
      "Corporate Credit Default Swap (CDS) Spreads"
    ],
    severityLevel: "High",
    governanceProtocol: "Weekly Value-at-Risk (VaR) limits and mandatory delta hedging triggers."
  },
  {
    id: "liquidity-risk",
    category: "Liquidity Risk",
    shortDefinition: "Inability to meet near-term cash commitments without incurring catastrophic realization losses.",
    definition: "Vulnerability arising from asset-liability maturity mismatches, sudden banking credit contraction, or illiquid private market lockups during market freezes.",
    potentialImpact: "Forced liquidation of high-quality assets at distressed valuations, operational default on payroll or covenants, and credit rating downgrade.",
    mitigation: "Rigorous 13-week rolling cash flow buffers, multi-bank committed revolving credit facilities, and strict allocation caps on illiquid private assets.",
    monitoringIndicators: [
      "13-Week Cash Burn & Surplus Projections",
      "Unencumbered High-Quality Liquid Assets (HQLA)",
      "Interbank Overnight Funding Spreads (SOFR/EURIBOR)",
      "Redemption & Capital Call Scheduling Queues"
    ],
    severityLevel: "Critical",
    governanceProtocol: "Minimum 180-day operational cash runway maintained in unencumbered sovereign bills."
  },
  {
    id: "credit-risk",
    category: "Credit Risk",
    shortDefinition: "Counterparty failure or deterioration in sovereign and corporate borrower solvency.",
    definition: "The danger that a debt issuer, trading counterparty, or major commercial client defaults on contractual interest or principal obligations.",
    potentialImpact: "Permanent capital write-down, legal collection delays, impaired bank covenants, and systemic counterparty contagion.",
    mitigation: "Senior secured lending covenants, direct collateral liens, comprehensive debtor financial health audits, and strict single-counterparty exposure limits.",
    monitoringIndicators: [
      "Altman Z-Score & Distance-to-Default Metrics",
      "Issuer Debt-to-EBITDA Leverage Trajectories",
      "Collateral Coverage & Loan-to-Value (LTV) Ratios",
      "Rating Agency Downgrade Watches & Credit Spreads"
    ],
    severityLevel: "High",
    governanceProtocol: "Maximum single corporate borrower exposure capped at 3.5% of total portfolio value."
  },
  {
    id: "operational-risk",
    category: "Operational Risk",
    shortDefinition: "Losses resulting from inadequate internal controls, cyber threats, or systemic execution failure.",
    definition: "Breakdowns in technological infrastructure, trade settlement, cybersecurity defenses, custodial accounting, or personnel execution integrity.",
    potentialImpact: "Transactional disruption, regulatory enforcement fines, data leakage of client proprietary data, and reputational impairment.",
    mitigation: "Dual-authorization settlement controls, ISO 27001 / SOC 2 Type II certified infrastructure, disaster recovery redundancies, and third-party custodial segregation.",
    monitoringIndicators: [
      "System Uptime & Cyber Intrusion Telemetry",
      "Trade Settlement Reconciliation Failure Rates",
      "Custodial Account Verification Logs",
      "Employee Compliance Audit Scores"
    ],
    severityLevel: "Moderate",
    governanceProtocol: "Zero client asset custody on internal balance sheets; 100% segregated tier-one custodian banks."
  },
  {
    id: "regulatory-risk",
    category: "Regulatory Risk",
    shortDefinition: "Evolving legal, tax, anti-trust, and sovereign compliance mandates across jurisdictions.",
    definition: "Statutory changes in cross-border tax treaties, securities regulations, reporting standards (e.g. SEC, FCA, FINMA), and foreign investment clearances.",
    potentialImpact: "Restricted capital repatriation, retroactive tax liabilities, operational sanctions, or forced structural restructuring.",
    mitigation: "Proactive multi-jurisdictional legal counsel review, pre-emptive compliance audits, and tax-efficient institutional holding structures.",
    monitoringIndicators: [
      "Cross-Border Tax Treaty Amendments (OECD/Pillar Two)",
      "Securities Authority Enforcement Trends",
      "Sovereign Capital Control & Repatriation Rules",
      "ESG & Mandatory Climate Disclosure Standards"
    ],
    severityLevel: "Moderate",
    governanceProtocol: "Quarterly independent regulatory audit across all operating domiciles."
  },
  {
    id: "strategic-risk",
    category: "Strategic Risk",
    shortDefinition: "Sub-optimal capital allocation, technological obsolescence, or competitive business model erosion.",
    definition: "Misaligned long-term enterprise decisions, failure to adapt to secular industrial shifts, or ill-timed major mergers and acquisitions.",
    potentialImpact: "Structural loss of enterprise value, chronic return underperformance relative to cost of capital, and equity dilution.",
    mitigation: "Independent board-level advisory reviews, rigorous hurdle-rate underwriting, and ongoing competitive moat stress-testing.",
    monitoringIndicators: [
      "Return on Invested Capital (ROIC) vs WACC Spread",
      "Secular Market Share Trajectories",
      "Industry Technology Adoption Curves",
      "Enterprise Multiple Discount vs Peers"
    ],
    severityLevel: "High",
    governanceProtocol: "Annual independent strategic capital allocation audit."
  }
];
