import { DASHBOARD_DATA_BY_RANGE, DashboardDataset } from '../data/dashboardData';
import { DashboardDateRange } from '../types';
import { storageService } from './storageService';

export interface OperationsStats {
  totalLeads: number;
  consultationCount: number;
  contactsCount: number;
  activeWorkflows: number;
  totalWorkflows: number;
  unreadNotifications: number;
  reportsGenerated: number;
  totalExecutions: number;
}

export const analyticsService = {
  getDashboardData(range: DashboardDateRange): DashboardDataset {
    return DASHBOARD_DATA_BY_RANGE[range] || DASHBOARD_DATA_BY_RANGE['30d'];
  },

  getOperationsStats(): OperationsStats {
    const consultations = storageService.getConsultations();
    const contacts = storageService.getContacts();
    const workflows = storageService.getWorkflows();
    const notifications = storageService.getNotifications();
    const reportsCount = storageService.getReportsGeneratedCount();

    const activeWorkflows = workflows.filter(w => w.status === 'active').length;
    const unreadNotifications = notifications.filter(n => !n.read).length;
    const totalExecutions = workflows.reduce((acc, w) => acc + (w.totalExecutions || 0), 0);

    return {
      totalLeads: consultations.length + contacts.length,
      consultationCount: consultations.length,
      contactsCount: contacts.length,
      activeWorkflows,
      totalWorkflows: workflows.length,
      unreadNotifications,
      reportsGenerated: reportsCount,
      totalExecutions
    };
  },

  generateDynamicAIInsight(range: DashboardDateRange) {
    const dataset = this.getDashboardData(range);
    const rangeLabels: Record<DashboardDateRange, string> = {
      '7d': 'Trailing 7 Days',
      '30d': 'Trailing 30 Days (Monthly)',
      '90d': 'Trailing 90 Days (Quarterly)',
      '1y': 'Trailing 1 Year (Annual)'
    };

    return {
      rangeName: rangeLabels[range],
      totalRevenue: dataset.metrics.totalRevenue,
      revenueDelta: dataset.metrics.revenueDelta,
      activeUsers: dataset.metrics.activeUsers,
      efficiency: dataset.metrics.operationalEfficiency,
      aiDecisions: dataset.metrics.aiDecisionsExecuted,
      title: dataset.aiInsights.title,
      summary: dataset.aiInsights.summary,
      confidence: dataset.aiInsights.confidence,
      impactScore: dataset.aiInsights.impactScore,
      recommendations: dataset.aiInsights.recommendations,
      anomalies: dataset.aiInsights.anomalies,
      generatedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };
  }
};
