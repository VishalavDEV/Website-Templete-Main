import { ChartDataPoint, DashboardDateRange, DashboardMetricOverview } from '../types';

export interface DashboardDataset {
  metrics: DashboardMetricOverview;
  chartData: ChartDataPoint[];
  aiInsights: {
    title: string;
    summary: string;
    confidence: number;
    impactScore: string;
    recommendations: string[];
    anomalies: string[];
  };
}

export const DASHBOARD_TIME_SERIES: Record<DashboardDateRange, ChartDataPoint[]> = {
  '7d': [
    { label: 'Mon', date: 'Mon', revenue: 194000, target: 180000, costs: 42000, agentOperations: 12400, latency: 12.4, threats: 34, activeNodes: 420, growth: 12.4, operations: 97.8, efficiency: 98.1, users: 13200, conversions: 4.8, aiDecisions: 11800 },
    { label: 'Tue', date: 'Tue', revenue: 218000, target: 190000, costs: 44000, agentOperations: 13800, latency: 11.8, threats: 28, activeNodes: 435, growth: 15.2, operations: 98.2, efficiency: 98.4, users: 13650, conversions: 5.1, aiDecisions: 12400 },
    { label: 'Wed', date: 'Wed', revenue: 205000, target: 195000, costs: 43500, agentOperations: 13100, latency: 12.1, threats: 41, activeNodes: 430, growth: 14.1, operations: 98.0, efficiency: 98.7, users: 13900, conversions: 5.0, aiDecisions: 12100 },
    { label: 'Thu', date: 'Thu', revenue: 242000, target: 200000, costs: 46000, agentOperations: 15600, latency: 9.8, threats: 19, activeNodes: 450, growth: 19.8, operations: 99.1, efficiency: 99.0, users: 14100, conversions: 5.4, aiDecisions: 13200 },
    { label: 'Fri', date: 'Fri', revenue: 265000, target: 210000, costs: 49000, agentOperations: 17200, latency: 8.9, threats: 14, activeNodes: 468, growth: 22.4, operations: 99.4, efficiency: 99.2, users: 14500, conversions: 5.8, aiDecisions: 14100 },
    { label: 'Sat', date: 'Sat', revenue: 178000, target: 160000, costs: 38000, agentOperations: 9400, latency: 9.2, threats: 12, activeNodes: 415, growth: 11.2, operations: 98.5, efficiency: 98.9, users: 12800, conversions: 4.2, aiDecisions: 10400 },
    { label: 'Sun', date: 'Sun', revenue: 180900, target: 165000, costs: 39000, agentOperations: 10200, latency: 9.0, threats: 10, activeNodes: 422, growth: 12.8, operations: 98.9, efficiency: 99.0, users: 13100, conversions: 4.5, aiDecisions: 11200 }
  ],
  '30d': [
    { label: 'Week 1', date: 'Week 1', revenue: 1480000, target: 1300000, costs: 310000, agentOperations: 84000, latency: 11.2, threats: 142, activeNodes: 430, growth: 34.2, operations: 97.9, efficiency: 98.0, users: 48000, conversions: 4.9, aiDecisions: 84000 },
    { label: 'Week 2', date: 'Week 2', revenue: 1620000, target: 1400000, costs: 325000, agentOperations: 96000, latency: 10.4, threats: 118, activeNodes: 445, growth: 38.5, operations: 98.4, efficiency: 98.5, users: 51200, conversions: 5.2, aiDecisions: 92000 },
    { label: 'Week 3', date: 'Week 3', revenue: 1810000, target: 1450000, costs: 340000, agentOperations: 108000, latency: 9.1, threats: 94, activeNodes: 460, growth: 44.1, operations: 98.9, efficiency: 98.8, users: 55400, conversions: 5.6, aiDecisions: 101000 },
    { label: 'Week 4', date: 'Week 4', revenue: 1930500, target: 1500000, costs: 355000, agentOperations: 121000, latency: 8.2, threats: 76, activeNodes: 480, growth: 48.6, operations: 99.2, efficiency: 99.1, users: 58920, conversions: 6.1, aiDecisions: 107100 }
  ],
  '90d': [
    { label: 'Nov 2025', date: 'Nov 2025', revenue: 5400000, target: 4500000, costs: 1120000, agentOperations: 310000, latency: 12.8, threats: 410, activeNodes: 390, growth: 41.0, operations: 97.4, efficiency: 97.8, users: 110000, conversions: 4.8, aiDecisions: 310000 },
    { label: 'Dec 2025', date: 'Dec 2025', revenue: 6420000, target: 5100000, costs: 1240000, agentOperations: 380000, latency: 10.2, threats: 340, activeNodes: 430, growth: 49.5, operations: 98.0, efficiency: 98.1, users: 125000, conversions: 5.4, aiDecisions: 375000 },
    { label: 'Jan 2026', date: 'Jan 2026', revenue: 7600000, target: 5800000, costs: 1380000, agentOperations: 450000, latency: 8.4, threats: 280, activeNodes: 480, growth: 58.2, operations: 98.8, efficiency: 98.6, users: 142500, conversions: 6.2, aiDecisions: 435400 }
  ],
  '1y': [
    { label: 'Q1 2025', date: 'Q1 2025', revenue: 12400000, target: 10000000, costs: 2900000, agentOperations: 720000, latency: 16.4, threats: 1620, activeNodes: 280, growth: 45.0, operations: 96.5, efficiency: 97.0, users: 240000, conversions: 4.2, aiDecisions: 720000 },
    { label: 'Q2 2025', date: 'Q2 2025', revenue: 15800000, target: 13000000, costs: 3400000, agentOperations: 940000, latency: 13.8, threats: 1340, activeNodes: 340, growth: 58.0, operations: 97.2, efficiency: 97.8, users: 310000, conversions: 4.8, aiDecisions: 940000 },
    { label: 'Q3 2025', date: 'Q3 2025', revenue: 18900000, target: 16000000, costs: 3900000, agentOperations: 1180000, latency: 10.6, threats: 1080, activeNodes: 410, growth: 72.0, operations: 98.1, efficiency: 98.2, users: 390000, conversions: 5.5, aiDecisions: 1180000 },
    { label: 'Q4 2025', date: 'Q4 2025', revenue: 21800000, target: 18500000, costs: 4200000, agentOperations: 1450000, latency: 8.2, threats: 860, activeNodes: 480, growth: 88.0, operations: 99.0, efficiency: 98.9, users: 480000, conversions: 6.3, aiDecisions: 1450000 }
  ]
};

export const DASHBOARD_SUMMARIES: Record<DashboardDateRange, DashboardMetricOverview> = {
  '7d': {
    totalRevenue: 1482900,
    revenueGrowth: 18.4,
    revenueDelta: '+18.4% vs prev week',
    costSavings: 312000,
    costSavingsRate: 24.2,
    agentOperations: 91700,
    threatsIntercepted: 158,
    activeUsers: '14,280',
    operationalEfficiency: '98.9%',
    aiDecisionsExecuted: '89,420'
  },
  '30d': {
    totalRevenue: 6840500,
    revenueGrowth: 42.8,
    revenueDelta: '+42.8% vs last month',
    costSavings: 1420000,
    costSavingsRate: 28.6,
    agentOperations: 409000,
    threatsIntercepted: 430,
    activeUsers: '58,920',
    operationalEfficiency: '98.7%',
    aiDecisionsExecuted: '384,100'
  },
  '90d': {
    totalRevenue: 19420000,
    revenueGrowth: 54.2,
    revenueDelta: '+54.2% vs prev quarter',
    costSavings: 4280000,
    costSavingsRate: 31.4,
    agentOperations: 1140000,
    threatsIntercepted: 1030,
    activeUsers: '142,500',
    operationalEfficiency: '98.2%',
    aiDecisionsExecuted: '1,120,400'
  },
  '1y': {
    totalRevenue: 68900000,
    revenueGrowth: 82.4,
    revenueDelta: '+82.4% Annual Growth',
    costSavings: 15400000,
    costSavingsRate: 34.8,
    agentOperations: 4290000,
    threatsIntercepted: 4900,
    activeUsers: '480,000',
    operationalEfficiency: '98.5%',
    aiDecisionsExecuted: '4,290,000'
  }
};

export const REGIONAL_METRICS = [
  { region: 'North America (US East & West)', share: '44%', revenueShare: '44%', latency: '6.4ms', nodes: 210, uptime: '99.999%', status: 'Optimal' },
  { region: 'Europe (Frankfurt, Zurich, London)', share: '36%', revenueShare: '36%', latency: '4.8ms', nodes: 165, uptime: '99.999%', status: 'Optimal' },
  { region: 'Asia-Pacific (Tokyo, Singapore)', share: '16%', revenueShare: '16%', latency: '8.2ms', nodes: 85, uptime: '99.998%', status: 'Optimal' },
  { region: 'Latin America & Emerging', share: '4%', revenueShare: '4%', latency: '14.1ms', nodes: 20, uptime: '99.995%', status: 'Optimal' }
];

export const DASHBOARD_DATA_BY_RANGE: Record<DashboardDateRange, DashboardDataset> = {
  '7d': {
    metrics: DASHBOARD_SUMMARIES['7d'],
    chartData: DASHBOARD_TIME_SERIES['7d'],
    aiInsights: {
      title: 'Short-Horizon Acceleration & Enterprise Conversion Peak',
      summary: 'Revenue expanded by +18.4% this past week, driven by high-velocity enterprise pipeline conversions on Thursday and Friday.',
      confidence: 96.8,
      impactScore: 'High (+18.4% Yield)',
      recommendations: [
        'Scale European API gateway routing capacity ahead of anticipated Monday load spike.',
        'Trigger automated upsell sequences for 32 enterprise accounts currently at 88% token quota.'
      ],
      anomalies: [
        'Zero security incidents or latency breaches reported during peak load.'
      ]
    }
  },
  '30d': {
    metrics: DASHBOARD_SUMMARIES['30d'],
    chartData: DASHBOARD_TIME_SERIES['30d'],
    aiInsights: {
      title: 'Compound Enterprise Growth & Operational Moat Solidification',
      summary: 'Over the 30-day window, monthly recurring revenue jumped 42.8%, outperforming baseline forecasts by $1.14M.',
      confidence: 98.4,
      impactScore: 'Exceptional (+$1.14M Alpha)',
      recommendations: [
        'Consolidate multi-agent workflow templates for Healthcare and FinTech verticals.',
        'Allocate additional GPU compute clusters in Frankfurt and Singapore.'
      ],
      anomalies: [
        'Net dollar retention reached a historic high of 144% among enterprise clients.'
      ]
    }
  },
  '90d': {
    metrics: DASHBOARD_SUMMARIES['90d'],
    chartData: DASHBOARD_TIME_SERIES['90d'],
    aiInsights: {
      title: 'Quarterly Macro Resilience & High-Margin Expansion',
      summary: 'Quarterly performance exhibited strong structural leverage. Gross margins expanded to 86.4%.',
      confidence: 97.9,
      impactScore: 'Transformative (+54.2% YoY Pace)',
      recommendations: [
        'Expand sovereign multi-cloud partnership with European sovereign defense providers.'
      ],
      anomalies: [
        'Gross revenue churn fell to 0.4% per quarter.'
      ]
    }
  },
  '1y': {
    metrics: DASHBOARD_SUMMARIES['1y'],
    chartData: DASHBOARD_TIME_SERIES['1y'],
    aiInsights: {
      title: 'Full-Year Milestone: Enterprise Platform Flywheel at Scale',
      summary: 'Annualized recurring revenue exceeded internal targets by $14.2M ($68.9M ARR).',
      confidence: 99.2,
      impactScore: 'Category-Defining ($68.9M ARR)',
      recommendations: [
        'Formalize strategic enterprise advisory board with Fortune 100 CIOs.'
      ],
      anomalies: [
        'Over 850 complex enterprise projects delivered with 98.7% audited client satisfaction score.'
      ]
    }
  }
};
