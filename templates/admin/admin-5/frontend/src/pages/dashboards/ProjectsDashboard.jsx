import React from 'react';
import { Briefcase, CheckSquare, Clock, Plus, Download } from 'lucide-react';
import ReactApexChart from 'react-apexcharts';
import { useApp } from '../../context/AppContext';
import { useTheme } from '../../context/ThemeContext';

export const ProjectsDashboard = () => {
  const { theme } = useTheme();
  const { navigateTo, setActiveModal, addToast } = useApp();

  const sprintVelocityOptions = {
    chart: { type: 'line', toolbar: { show: false }, background: 'transparent' },
    theme: { mode: theme },
    stroke: { curve: 'smooth', width: 3 },
    colors: ['#6366f1', '#10b981'],
    xaxis: { categories: ['Sprint 20', 'Sprint 21', 'Sprint 22', 'Sprint 23', 'Sprint 24'] }
  };

  const sprintVelocitySeries = [
    { name: 'Committed Story Points', data: [45, 50, 52, 55, 60] },
    { name: 'Completed Story Points', data: [42, 48, 52, 54, 58] }
  ];

  const workloadDonutOptions = {
    chart: { type: 'donut', background: 'transparent' },
    theme: { mode: theme },
    colors: ['#6366f1', '#06b6d4', '#f59e0b', '#10b981'],
    labels: ['Frontend (35%)', 'Backend (30%)', 'DevOps (20%)', 'Design (15%)'],
    legend: { position: 'bottom', labels: { colors: theme === 'dark' ? '#cbd5e1' : '#475569' } }
  };

  const workloadDonutSeries = [35, 30, 20, 15];

  const projects = [
    { name: 'TS Smart Admin React 19 Upgrade', team: 'Frontend Core', progress: 85, status: 'In Progress', dueDate: '25 Aug 2026' },
    { name: 'Spring Boot REST API Security Hardening', team: 'Backend Team', progress: 100, status: 'Completed', dueDate: '18 Aug 2026' },
    { name: 'MySQL Database Replication Setup', team: 'DevOps', progress: 45, status: 'In Progress', dueDate: '30 Aug 2026' },
    { name: 'Mobile Responsive Glass UI Polish', team: 'Design Systems', progress: 60, status: 'In Progress', dueDate: '02 Sep 2026' }
  ];

  const backlogMilestones = [
    { id: 'TS-104', task: 'Implement CSRF & JWT Refresh Token Flow', assignee: 'Marcus Chen', pts: '8 pts', priority: 'Urgent', status: 'In Progress' },
    { id: 'TS-105', task: 'Optimize ApexCharts rendering performance', assignee: 'Sarah Jenkins', pts: '5 pts', priority: 'High', status: 'Review' },
    { id: 'TS-106', task: 'Configure Docker Multi-stage MySQL Build', assignee: 'Liam O\'Connor', pts: '3 pts', priority: 'Medium', status: 'To Do' }
  ];

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <div className="page-header-title">
          <h1>Projects & Sprint Analytics</h1>
          <p>Track sprint velocity graphs, team workload allocation, milestone progress, and sprint backlogs.</p>
        </div>
        <div className="page-header-actions">
          <button className="btn btn-secondary btn-sm" onClick={() => navigateTo('apps', 'kanban')}>
            Open Kanban Board
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => setActiveModal('task')}>
            <Plus size={16} /> New Task Card
          </button>
        </div>
      </div>

      {/* Analytics Graphs Row */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        <div className="col-8 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Sprint Velocity & Story Points Graph</h3>
          <ReactApexChart options={sprintVelocityOptions} series={sprintVelocitySeries} type="line" height={280} />
        </div>

        <div className="col-4 glass-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Team Workload Allocation Graph</h3>
          <ReactApexChart options={workloadDonutOptions} series={workloadDonutSeries} type="donut" height={280} />
        </div>
      </div>

      {/* Project Status Cards */}
      <div className="grid-12" style={{ marginBottom: 24 }}>
        {projects.map((proj, idx) => (
          <div key={idx} className="col-6 glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700 }}>{proj.name}</h3>
              <span className={`badge ${proj.status === 'Completed' ? 'badge-success' : 'badge-primary'}`}>
                {proj.status}
              </span>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 16 }}>Owner: {proj.team} | Due: {proj.dueDate}</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
              <span>Completion Velocity</span>
              <span>{proj.progress}%</span>
            </div>
            <div style={{ background: 'var(--bg-subtle)', height: 8, borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: `${proj.progress}%`, height: '100%', background: 'var(--brand-primary)' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Sprint Milestone Backlog Table */}
      <div className="glass-card">
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Current Sprint Milestone Backlog</h3>
        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Task ID</th>
                <th>Task Description</th>
                <th>Assignee</th>
                <th>Story Points</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {backlogMilestones.map((b, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 700, color: 'var(--brand-primary)' }}>{b.id}</td>
                  <td style={{ fontWeight: 600 }}>{b.task}</td>
                  <td>{b.assignee}</td>
                  <td><span className="badge badge-info">{b.pts}</span></td>
                  <td><span className="badge badge-danger">{b.priority}</span></td>
                  <td><span className="badge badge-warning">{b.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

