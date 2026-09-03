import { DASHBOARD_DATA_BY_RANGE } from '../data/dashboardData';
import { DashboardDateRange } from '../types';
import { storageService } from './storageService';

export const reportService = {
  downloadCSV(filename: string, csvContent: string) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    storageService.incrementReportCount();
  },

  exportDashboardCSV(range: DashboardDateRange) {
    const dataset = DASHBOARD_DATA_BY_RANGE[range];
    const timestamp = new Date().toISOString().split('T')[0];
    
    let csv = `NEXORA Business Intelligence & Revenue Report\n`;
    csv += `Generated Date,${new Date().toLocaleString()}\n`;
    csv += `Time Horizon,${range.toUpperCase()}\n`;
    csv += `Total Revenue,${dataset.metrics.totalRevenue}\n`;
    csv += `Revenue Growth Delta,${dataset.metrics.revenueDelta}\n`;
    csv += `Active Users,${dataset.metrics.activeUsers}\n`;
    csv += `Operational Efficiency,${dataset.metrics.operationalEfficiency}\n`;
    csv += `Autonomous AI Decisions Executed,${dataset.metrics.aiDecisionsExecuted}\n\n`;

    csv += `Detailed Performance Series\n`;
    csv += `Period,Revenue (USD),Target (USD),Growth (%),Operations Score,Efficiency (%),Active Users,Conversion Rate (%),AI Decisions\n`;
    
    dataset.chartData.forEach(row => {
      csv += `"${row.label}",${row.revenue},${row.target},${row.growth},${row.operations},${row.efficiency},${row.users},${row.conversions},${row.aiDecisions}\n`;
    });

    csv += `\nStrategic AI Summary\n`;
    csv += `Insight Title,"${dataset.aiInsights.title.replace(/"/g, '""')}"\n`;
    csv += `Confidence Score,${dataset.aiInsights.confidence}%\n`;
    csv += `Impact Score,"${dataset.aiInsights.impactScore}"\n`;
    csv += `Executive Summary,"${dataset.aiInsights.summary.replace(/"/g, '""')}"\n`;

    this.downloadCSV(`nexora_intelligence_report_${range}_${timestamp}.csv`, csv);
  },

  exportOperationsConsoleCSV() {
    const consultations = storageService.getConsultations();
    const contacts = storageService.getContacts();
    const workflows = storageService.getWorkflows();
    const timestamp = new Date().toISOString().split('T')[0];

    let csv = `NEXORA Operations Console Export\n`;
    csv += `Export Timestamp,${new Date().toLocaleString()}\n\n`;

    csv += `1. Strategy Consultation Requests (${consultations.length})\n`;
    csv += `ID,Full Name,Email,Company,Industry,Company Size,Interest Area,Preferred Date,Preferred Time,Status,Created At\n`;
    consultations.forEach(c => {
      csv += `"${c.id}","${c.fullName}","${c.email}","${c.company}","${c.industry}","${c.companySize}","${c.areaOfInterest}","${c.preferredDate}","${c.preferredTime}","${c.status}","${c.createdAt}"\n`;
    });

    csv += `\n2. Contact Inquiries (${contacts.length})\n`;
    csv += `ID,Name,Email,Subject,Status,Created At,Message\n`;
    contacts.forEach(m => {
      csv += `"${m.id}","${m.name}","${m.email}","${m.subject.replace(/"/g, '""')}","${m.status}","${m.createdAt}","${m.message.replace(/"/g, '""')}"\n`;
    });

    csv += `\n3. Automation Workflows (${workflows.length})\n`;
    csv += `ID,Name,Status,Total Executions,Success Rate (%),Steps Count,Last Run,Created At\n`;
    workflows.forEach(w => {
      csv += `"${w.id}","${w.name}","${w.status}",${w.totalExecutions},${w.successRate},${w.steps.length},"${w.lastRun || 'N/A'}","${w.createdAt}"\n`;
    });

    this.downloadCSV(`nexora_operations_console_${timestamp}.csv`, csv);
  }
};
