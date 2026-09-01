export interface KPICard {
  title: string;
  value: string;
  change: string;
  type?: 'success' | 'danger' | 'neutral';
}

export const mockStats: KPICard[] = [
  { title: 'Total Revenue', value: '$124,500', change: '+14.2%', type: 'success' },
  { title: 'Active Visitors', value: '14,201', change: '+15.2%', type: 'success' },
  { title: 'Staging Nodes', value: '16 Active', change: 'Stable', type: 'neutral' },
  { title: 'Critical Warns', value: '4 Tickers', change: '+10.4%', type: 'danger' }
];

export const mockPerformance = {
  cpuUsage: '16%',
  memoryUsage: '64%',
  networkTraffic: '2.4 GB/s',
  serverStatus: 'online'
};
