export interface ResearchArticle {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  date: string;
  readTime: string;
  featured: boolean;
  keyTakeaways: string[];
  content: string[];
}

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    slug: "five-forces-reshaping-global-capital",
    category: "Macro Intelligence",
    title: "Five Forces Reshaping Global Capital",
    subtitle: "A strategic framework for navigating the structural reordering of international financial architecture.",
    excerpt: "The confluence of sustained real interest rates, geopolitical supply chain realignment, sovereign debt expansion, industrial policy, and artificial intelligence is permanently altering risk-adjusted hurdle rates across global asset classes.",
    author: {
      name: "Dr. Alistair Vance",
      role: "Head of Global Macro Strategy"
    },
    date: "October 2025",
    readTime: "8 min read",
    featured: true,
    keyTakeaways: [
      "The zero-interest-rate regime is dead: hurdle rates must now incorporate positive real term premia.",
      "Geopolitical friction has elevated redundant supply chain CapEx above pure cost optimization.",
      "Fiscal deficits in major sovereigns will crowd out private credit spreads and elevate sovereign curve steepness.",
      "Private markets are transitioning from multiple expansion to operational earnings growth.",
      "Productivity alpha from AI will accrue to asset owners with proprietary enterprise workflow datasets."
    ],
    content: [
      "Over the past three decades, global capital allocation operated under benign macroeconomic tailwinds: declining structural interest rates, uninhibited globalization, and predictable fiscal dominance. That architecture has now decisively shifted.",
      "Today, institutional allocators face a structurally altered reality. As central banks recalibrate monetary policy to anchor terminal rates above historical inflation baselines, the era of passive multiple expansion has ended. Capital is once again an expensive commodity with non-negotiable hurdle rates.",
      "First, sovereign balance sheets are absorbing unprecedented peacetime debt loads. With sovereign issuance hitting record volumes across developed markets, term premia have reasserted themselves on benchmark curves. Investors can no longer treat sovereign debt as a passive yield play without aggressive duration management.",
      "Second, the fragmentation of global supply chains is driving an intensive re-industrialization cycle. Western economies are deploying targeted subsidies and tariffs to onshore critical semiconductor, battery, and pharmaceutical capacities. This requires billions in multi-year capital expenditure, fundamentally altering corporate free cash flow dynamics.",
      "Third, private equity and venture capital are navigating a profound liquidity transition. Portfolios constructed under ultra-low borrowing costs must now prove underlying operational cash generation. Value creation is migrating decisively from financial leverage engineering to margin expansion and organic revenue enhancement.",
      "In this environment, success belongs to allocators who prioritize balance sheet resilience, positive real cash yields, and strategic optionality over passive index exposure."
    ]
  },
  {
    slug: "beyond-the-rate-cycle",
    category: "Fixed Income & Monetary Policy",
    title: "Beyond the Rate Cycle",
    subtitle: "Constructing multi-asset duration and credit exposures in a structurally higher real rate paradigm.",
    excerpt: "Why fixed income is regaining its traditional role as a portfolio stabilizer, and how credit selection must adapt to widening dispersion between high-grade and leveraged issuers.",
    author: {
      name: "Elena Rostova",
      role: "Partner, Fixed Income & Capital Markets"
    },
    date: "November 2025",
    readTime: "6 min read",
    featured: false,
    keyTakeaways: [
      "Positive real yields restore bond diversification benefits without excessive duration risk.",
      "Credit dispersion is accelerating: low-grade borrowers face severe refinancing cliffs.",
      "Active front-end positioning offers attractive carry with negligible capital risk."
    ],
    content: [
      "For over a decade, fixed income investors endured negative real yields, forcing risk migration into high-beta credit and illiquid alternatives. The normalization of benchmark rates has fundamentally restored the asset class.",
      "Today, short-to-intermediate high-quality paper delivers real cash yields that outpace inflation without forcing allocators out along the risk curve. However, credit quality dispersion is widening rapidly.",
      "Borrowers with floating-rate debt and tight interest coverage face severe cash flow drag as older low-coupon maturities expire. Disciplined credit analysis must focus on interest coverage ratios under 600 bps stress assumptions."
    ]
  },
  {
    slug: "private-markets-in-transition",
    category: "Private Equity & Direct Lending",
    title: "Private Markets in Transition",
    subtitle: "From multiple expansion to operational value creation: navigating the new private market lifecycle.",
    excerpt: "An analysis of liquidity dynamics, secondary market discounts, and the imperative for direct operational underwriting in private buyout and credit funds.",
    author: {
      name: "Marcus Sterling",
      role: "Managing Director, Private Markets"
    },
    date: "September 2025",
    readTime: "7 min read",
    featured: false,
    keyTakeaways: [
      "Exit horizons have lengthened, making secondary market liquidity management essential.",
      "Senior private credit provides equity-like risk-adjusted returns with strong covenant protections.",
      "Sponsors with genuine operational turnaround capabilities will outperform financial engineers."
    ],
    content: [
      "The private equity playbook of the 2010s—leveraging cheap debt to buy assets and selling them at higher valuation multiples—is no longer viable. Today's environment demands hands-on operational stewardship.",
      "Private credit has emerged as the clear institutional winner, offering senior secured yields that rival historical equity returns while occupying the safest tier of corporate capital structures.",
      "For limited partners, liquidity management is paramount. GP-led secondaries and structured liquidity vehicles offer opportunities to acquire high-quality portfolio companies at attractive discounts."
    ]
  },
  {
    slug: "the-new-economics-of-ai",
    category: "Technology & Enterprise CapEx",
    title: "The New Economics of AI",
    subtitle: "Evaluating capital efficiency, compute infrastructure depreciation, and enterprise value realization.",
    excerpt: "Dissecting the ROI equation of massive AI infrastructure spend: where capital is being misallocated and where enterprise moats are actually being established.",
    author: {
      name: "Arthur Pendelton",
      role: "Senior Technology Strategist"
    },
    date: "August 2025",
    readTime: "5 min read",
    featured: false,
    keyTakeaways: [
      "Compute CapEx is suffering from rapid hardware obsolescence cycles.",
      "Defensible moats belong to workflow software with proprietary client transactional datasets.",
      "Energy and power infrastructure are the critical physical constraints on AI scaling."
    ],
    content: [
      "The capital intensity of modern artificial intelligence models represents one of the largest infrastructure buildouts in corporate history. Yet, capital allocators must separate technological awe from fundamental unit economics.",
      "Hardware depreciation cycles are remarkably steep, creating severe asset write-down risks for pure compute providers. The true economic rent will accrue to enterprise platforms that integrate AI directly into mission-critical corporate workflows.",
      "Furthermore, grid access and electrical capacity have become the ultimate physical bottleneck. Energy infrastructure assets powering data centers represent a unique intersection of technology growth and defensive real asset yield."
    ]
  },
  {
    slug: "the-changing-cost-of-capital",
    category: "Corporate Finance & Capital Structure",
    title: "The Changing Cost of Capital",
    subtitle: "How corporate CFOs and boards must rethink WACC, hurdle rates, and capital return policies.",
    excerpt: "A practical guide for corporate leaders evaluating M&A, share repurchases, and organic capital expenditure in a world where equity and debt capital carry real costs.",
    author: {
      name: "Claire Montclaire",
      role: "Partner, Corporate Advisory"
    },
    date: "July 2025",
    readTime: "6 min read",
    featured: false,
    keyTakeaways: [
      "Corporate hurdle rates must increase by at least 250–350 bps across all capital allocation decisions.",
      "Share buybacks executed with debt are now value-destructive for most mid-market firms.",
      "Organic ROIC must exceed WACC by a wide margin to justify multi-year capital commitments."
    ],
    content: [
      "When debt was effectively free, financial engineering could easily mask mediocre operational returns. In today's capital environment, every dollar allocated to CapEx or acquisitions must clear a substantially higher bar.",
      "Corporate treasuries are actively revisiting their debt maturity profiles, replacing variable-rate revolvers with customized private placements and structured convertibles.",
      "Boards that proactively clean up complex holding structures and optimize working capital cycles will enjoy significant valuation premiums over peers burdened by inefficient balance sheets."
    ]
  }
];
