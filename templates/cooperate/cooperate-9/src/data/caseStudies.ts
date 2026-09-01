export interface CaseStudyPhase {
  phase: string;
  title: string;
  summary: string;
  details: string[];
  metricImpact?: string;
}

export interface CaseStudyItem {
  id: string;
  client: string;
  sector: string;
  geography: string;
  mandateType: string;
  headlineResult: string;
  executiveSummary: string;
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  phases: CaseStudyPhase[];
}

export const FEATURED_CASE_STUDY: CaseStudyItem = {
  id: "global-manufacturing-group",
  client: "Global Manufacturing Group",
  sector: "Precision Industrial & Advanced Components",
  geography: "Operating across 14 sovereign jurisdictions (North America, Europe, East Asia)",
  mandateType: "Capital Structure Rationalization & Global Treasury Optimization",
  headlineResult: "22% Improvement in Enterprise Capital Efficiency",
  executiveSummary: "A leading international precision manufacturing corporation was burdened by fragmented subsidiary credit facilities, $180M in trapped foreign cash, and severe currency mismatch. Northbridge Capital designed and executed a unified cross-border capital restructuring.",
  metrics: [
    {
      label: "Capital Efficiency",
      value: "+22%",
      sublabel: "Reduction in effective corporate cost of capital"
    },
    {
      label: "Stranded Cash Released",
      value: "$180M",
      sublabel: "Repatriated into centralized yield-bearing treasury"
    },
    {
      label: "Interest Savings",
      value: "$18.4M",
      sublabel: "Annualized cash interest expense reduction"
    },
    {
      label: "Execution Horizon",
      value: "9 Months",
      sublabel: "Completed ahead of major debt refinancing cliff"
    }
  ],
  phases: [
    {
      phase: "01",
      title: "Challenge",
      summary: "Complex international capital structure causing significant liquidity drag and borrowing penalties.",
      details: [
        "The client operated 28 distinct operating subsidiaries across North America, Europe, and Asia with 19 separate local banking relationships.",
        "Over $180M in operational cash was trapped in foreign accounts subject to unfavorable withholding taxes and zero-interest terms.",
        "Subsidiary debt was denominated in local currencies with floating rates that escalated dramatically during global rate hikes, triggering covenant pressure."
      ],
      metricImpact: "WACC elevated at 8.9% with $42M in annual unhedged interest volatility."
    },
    {
      phase: "02",
      title: "Analysis",
      summary: "Comprehensive multi-entity balance sheet diagnostic and debt capacity modeling.",
      details: [
        "Audited the legal entity hierarchy and cash conversion cycles across all 28 operating entities.",
        "Simulated 10-year debt servicing scenarios under severe supply chain disruption and currency devaluation baselines.",
        "Identified unencumbered industrial real estate and IP assets that could support lower-cost investment-grade institutional credit."
      ],
      metricImpact: "Isolated $65M in structural redundancies and $24M in unnecessary bank fees."
    },
    {
      phase: "03",
      title: "Strategy",
      summary: "Designing a unified holding company credit facility with automated global liquidity pooling.",
      details: [
        "Formulated a single $600M syndicated sustainability-linked senior credit facility at the parent holding level.",
        "Designed a centralized treasury notional pooling structure centered in London and Singapore to eliminate idle subsidiary cash.",
        "Engineered an automated cross-currency swap overlay to insulate EUR and JPY operational earnings from USD fluctuations."
      ],
      metricImpact: "Blended borrowing margin reduced by 175 bps vs disparate local bank facilities."
    },
    {
      phase: "04",
      title: "Execution",
      summary: "Competitive multi-bank syndication and phased retirement of legacy debt.",
      details: [
        "Managed a competitive syndication process across 8 global institutional lenders, achieving 2.1x oversubscription.",
        "Negotiated standardized covenant packages providing management with total strategic flexibility for M&A and CapEx.",
        "Systematically retired 19 local bank lines without incurring early prepayment penalties or legal disputes."
      ],
      metricImpact: "100% legal closing achieved within 9 months of initial mandate engagement."
    },
    {
      phase: "05",
      title: "Outcome",
      summary: "Transformational capital liberation, reduced risk, and enhanced enterprise valuation multiple.",
      details: [
        "Delivered a verified 22% improvement in overall enterprise capital efficiency and $18.4M in recurring annual cash savings.",
        "The board successfully redirected $120M of liberated liquidity into high-ROIC automated manufacturing facilities in North America.",
        "Credit rating agencies upgraded the client's credit rating by two notches, unlocking access to public institutional bond markets."
      ],
      metricImpact: "Enterprise valuation multiple expanded by 1.8x EBITDA."
    }
  ]
};
