import { AIQnA } from '../types';

export const AI_QNA_DATA: AIQnA[] = [
  {
    id: 'revenue-increase',
    category: 'Strategic Intelligence',
    question: 'Why did revenue increase this quarter?',
    answer: 'Revenue increased by +54.2% primarily due to stronger enterprise tier conversions (+38.4%), higher expansion revenue from multi-agent workflow adoption (net dollar retention of 144%), and a 73% reduction in pipeline friction through automated onboarding.',
    confidence: 98.6,
    dataPoints: [
      { label: 'Enterprise Cohort ARR', value: '+$14.2M', trend: '+46.8% YoY' },
      { label: 'Expansion Net Retention', value: '144%', trend: '+12 pts' },
      { label: 'Customer Acquisition Cost (CAC)', value: '-31.5%', trend: 'Efficiency Gain' }
    ],
    recommendedAction: 'Direct additional sales engineering capacity to the Financial Services & Healthcare verticals where contract values are averaging 2.4x baseline.'
  },
  {
    id: 'fastest-growing-market',
    category: 'Market Geography',
    question: 'What is our fastest growing market?',
    answer: 'The European Sovereign Cloud & Defense vertical (DACH and Nordic regions) is currently our fastest growing segment, registering +118% year-over-year revenue expansion, driven by stringent EU AI Act compliance requirements and sovereign data residency mandates.',
    confidence: 97.4,
    dataPoints: [
      { label: 'DACH + Nordic Region', value: '€24.8M ARR', trend: '+118% YoY' },
      { label: 'Pipeline Velocity', value: '18 days', trend: '42% Faster' },
      { label: 'Average Deal Size', value: '€480K', trend: '+35% Up' }
    ],
    recommendedAction: 'Deploy dedicated localized Frankfurt and Stockholm sovereign compute clusters to reduce inference latency and secure Tier-1 government tenders.'
  },
  {
    id: 'declining-demand',
    category: 'Portfolio Analytics',
    question: 'Which products have declining demand?',
    answer: 'Legacy single-seat manual BI visualization licenses have seen a -14.2% demand drop, as enterprise buyers rapidly shift budget allocations into autonomous multi-agent workflow subscriptions and custom fine-tuned model endpoints.',
    confidence: 96.1,
    dataPoints: [
      { label: 'Manual BI Licenses', value: '$2.1M ARR', trend: '-14.2% YoY' },
      { label: 'Agent Subscriptions', value: '$28.4M ARR', trend: '+164% YoY' },
      { label: 'Migration Velocity', value: '82% converted', trend: 'To Autonomous' }
    ],
    recommendedAction: 'Sunset legacy single-user reporting add-ons by Q3 2026 and offer 1-click automated migration paths into the NEXORA Cognitive Workflow Suite.'
  },
  {
    id: 'prioritize-next-month',
    category: 'Executive Strategy',
    question: 'What should we prioritize next month?',
    answer: 'Based on multi-criteria risk/reward simulations, executive teams should prioritize: 1) Expanding GPU inference clusters in Frankfurt and Tokyo to satisfy pending enterprise contracts, 2) Rolling out the automated HIPAA/SOC2 compliance evidence generator, and 3) Accelerating the partner ecosystem API.',
    confidence: 99.1,
    dataPoints: [
      { label: 'Pending ARR in Pipeline', value: '$34.5M', trend: 'Ready to Close' },
      { label: 'Inference Capacity Headroom', value: '18.4%', trend: 'Approaching Threshold' },
      { label: 'Ecosystem Partner Signups', value: '340+ waitlist', trend: 'High Demand' }
    ],
    recommendedAction: 'Approve capital allocation for 64 additional H200 tensor clusters and initiate developer beta access for the top 50 global consulting partners.'
  }
];

export const AI_QNA_PRESETS = AI_QNA_DATA;
