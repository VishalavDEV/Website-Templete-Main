export interface RegionalPerspective {
  id: string;
  name: string;
  shortCode: string;
  macroOutlook: string;
  marketThemes: string[];
  investmentThemes: string[];
  keyRisks: string[];
  researchTopics: string[];
  capitalBias: "Overweight" | "Neutral" | "Selective";
}

export const GLOBAL_REGIONS: RegionalPerspective[] = [
  {
    id: "north-america",
    name: "North America",
    shortCode: "NAM",
    macroOutlook: "Resilient consumer base counterbalanced by high sovereign deficit issuance and sticky services inflation.",
    marketThemes: [
      "Secular re-shoring of high-tech manufacturing and clean energy supply chains",
      "Corporate balance sheet polarization between mega-cap balance sheets and floating-rate mid-market borrowers",
      "Private credit expansion filling the vacuum left by regional banking retrenchment"
    ],
    investmentThemes: [
      "Direct Senior Secured Private Debt in Non-Cyclical Services",
      "Energy Transition Infrastructure & Power Generation",
      "Core High-Barrier Industrial Logistics & Digital Real Assets"
    ],
    keyRisks: [
      "Fiscal sustainability and steepening Treasury curve volatility",
      "Refinancing cliff for commercial real estate and leveraged loans"
    ],
    researchTopics: [
      "The Macro Impact of U.S. Industrial Subsidies",
      "Private Credit Default Rate Sensitivity Analysis"
    ],
    capitalBias: "Overweight"
  },
  {
    id: "europe",
    name: "Europe",
    shortCode: "EUR",
    macroOutlook: "Subdued growth trajectory with selective high-quality export leaders and aggressive regulatory decarbonization mandates.",
    marketThemes: [
      "Accelerated capital expenditure into energy security, grid infrastructure, and defense autonomy",
      "Deep valuation discounts in European industrial and healthcare champions relative to US peers",
      "Rigorous implementation of corporate sustainability reporting directives (CSRD)"
    ],
    investmentThemes: [
      "Offshore Wind, Grid Modernization & Nuclear Supply Chain",
      "European Mid-Market Carve-Outs & Corporate Divestitures",
      "High-Grade Euro-Denominated Corporate Credit"
    ],
    keyRisks: [
      "Elevated energy input costs impacting heavy manufacturing competitiveness",
      "Demographic aging and rigid labor market productivity drag"
    ],
    researchTopics: [
      "European Re-Industrialization & Competitiveness Matrix",
      "CBAM and Cross-Border Carbon Border Tariffs"
    ],
    capitalBias: "Selective"
  },
  {
    id: "middle-east",
    name: "Middle East",
    shortCode: "MEA",
    macroOutlook: "Substantial sovereign liquidity deployment into national economic diversification programs (Vision 2030+).",
    marketThemes: [
      "Sovereign wealth funds transforming from passive international allocators into active domestic co-investors",
      "Emergence of GCC as a neutral global financial and logistical conduit between East and West",
      "Mega-scale investments in green hydrogen, desalination, and digital infrastructure"
    ],
    investmentThemes: [
      "Cross-Border Joint Ventures with Sovereign Backing",
      "Regional Logistics Corridors & Free Zone Infrastructure",
      "Renewable Energy & Advanced Desalination Utilities"
    ],
    keyRisks: [
      "Geopolitical friction and shipping chokepoint security",
      "Long-term hydrocarbon demand volatility and transition timelines"
    ],
    researchTopics: [
      "Sovereign Wealth Capital Allocation Strategies 2026-2030",
      "Gulf Financial Hubs: Regulatory Arbitrage & Capital Flows"
    ],
    capitalBias: "Overweight"
  },
  {
    id: "asia-pacific",
    name: "Asia Pacific",
    shortCode: "APAC",
    macroOutlook: "Diverse regional landscape anchored by mature high-tech manufacturing leaders and dynamic Southeast Asian consumer growth.",
    marketThemes: [
      "'China+1' supply chain diversification directing record FDI into Vietnam, Indonesia, and Malaysia",
      "Japanese corporate governance revolution driving shareholder return enhancements and dividend growth",
      "Critical semiconductor supply chain dominance in Taiwan and South Korea"
    ],
    investmentThemes: [
      "Japanese Corporate Activism & Value Realization Plays",
      "Southeast Asian Manufacturing Hubs & Modern Logistics",
      "Semiconductor Equipment & Materials Supply Chain Leaders"
    ],
    keyRisks: [
      "Cross-strait and regional geopolitical security risks",
      "Currency volatility versus the U.S. dollar impacting debt servicing"
    ],
    researchTopics: [
      "Tokyo Stock Exchange Governance Reforms & ROE Expansion",
      "ASEAN Supply Chain Readiness Diagnostic"
    ],
    capitalBias: "Overweight"
  },
  {
    id: "india",
    name: "India",
    shortCode: "IND",
    macroOutlook: "Highest secular GDP growth among major economies, supported by massive digital infrastructure, demography, and manufacturing incentives.",
    marketThemes: [
      "Rapid formalization of the economy driven by India Stack digital financial rails",
      "Aggressive national infrastructure buildout across highways, freight corridors, and renewable energy",
      "Surging domestic retail capital inflows counterbalancing foreign allocator volatility"
    ],
    investmentThemes: [
      "Private Equity in Consumer Platforms & Financial Services",
      "Renewable Energy Parks & Transmission Infrastructure",
      "Contract Manufacturing (Electronics, Pharmaceuticals & Precision Engineering)"
    ],
    keyRisks: [
      "Elevated public equity valuation multiples leaving little room for execution error",
      "Bureaucratic land acquisition and dispute resolution friction"
    ],
    researchTopics: [
      "The Financialization of Indian Household Savings",
      "India's Manufacturing Incentive Scheme (PLI) Multiplier Effects"
    ],
    capitalBias: "Overweight"
  },
  {
    id: "latin-america",
    name: "Latin America",
    shortCode: "LATAM",
    macroOutlook: "Resource-rich economies benefiting from global critical mineral demand, agricultural exports, and nearshoring opportunities.",
    marketThemes: [
      "Mexico as the primary beneficiary of North American nearshoring and manufacturing realignment",
      "Strategic importance of the Lithium Triangle and copper reserves in Chile and Peru",
      "High real interest rates creating attractive sovereign and corporate debt carry opportunities"
    ],
    investmentThemes: [
      "Mexican Industrial Real Estate & Cross-Border Freight Facilities",
      "Critical Energy Transition Mineral Extraction & Logistics",
      "Local Currency High-Yield Sovereign & Corporate Debt"
    ],
    keyRisks: [
      "Political and regulatory policy volatility impacting mining concessions",
      "Fiscal slippage and currency depreciation pressures"
    ],
    researchTopics: [
      "The Lithium Triangle: Regulatory Frameworks & Geopolitics",
      "Mexico's Nearshoring Industrial Capacity Constraints"
    ],
    capitalBias: "Selective"
  }
];
