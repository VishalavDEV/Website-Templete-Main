export interface DashboardStat {
  title: string;
  value: string;
  change: string;
  type?: 'success' | 'danger' | 'neutral';
}
