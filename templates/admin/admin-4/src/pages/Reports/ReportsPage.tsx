import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../../components/Common/Card';
import { Button } from '../../components/Common/Button';
import { Tabs } from '../../components/Common/Tabs';
import { Download, Printer, BarChart3, PieChart as PieIcon, LineChart as LineIcon, TrendingUp } from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

export const ReportsPage: React.FC = () => {
  const { projects, users, expenses, timeEntries, addToast } = useApp();
  const [activeTab, setActiveTab] = useState('projects');

  const projectGrowthData = [
    { month: 'Oct', projects: 12, completed: 8 },
    { month: 'Nov', projects: 15, completed: 10 },
    { month: 'Dec', projects: 18, completed: 14 },
    { month: 'Jan', projects: 20, completed: 17 },
    { month: 'Feb', projects: 22, completed: 19 }
  ];

  const financialTrendData = [
    { month: 'Oct', budget: 120, expenses: 80 },
    { month: 'Nov', budget: 140, expenses: 95 },
    { month: 'Dec', budget: 160, expenses: 110 },
    { month: 'Jan', budget: 180, expenses: 125 },
    { month: 'Feb', budget: 195, expenses: 135 }
  ];

  const teamRadarData = [
    { skill: 'React/UI', value: 95 },
    { skill: 'Backend/APIs', value: 90 },
    { skill: 'DevOps/AWS', value: 85 },
    { skill: 'QA/Cypress', value: 80 },
    { skill: 'Security/HIPAA', value: 88 }
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleExportCSV = () => {
    addToast('Report exported to CSV.', 'success');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-app-primary">Executive Analytics & Reports</h1>
          <p className="text-xs text-app-secondary mt-0.5">
            Cross-workspace business intelligence, velocity tracking, and financial performance metrics.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" icon={<Printer className="w-4 h-4" />} onClick={handlePrint}>
            Print Report
          </Button>
          <Button variant="primary" size="sm" icon={<Download className="w-4 h-4" />} onClick={handleExportCSV}>
            Export Data
          </Button>
        </div>
      </div>

      <Tabs
        tabs={[
          { id: 'projects', label: 'Project Analytics', icon: <BarChart3 /> },
          { id: 'financial', label: 'Financial Performance', icon: <LineIcon /> },
          { id: 'team', label: 'Team Radar & Skills', icon: <PieIcon /> }
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === 'projects' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Monthly Project Velocity">
            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectGrowthData}>
                  <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                  <YAxis stroke="var(--text-muted)" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                  <Legend />
                  <Bar dataKey="projects" fill="#3b82f6" name="Total Projects" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="completed" fill="#10b981" name="Completed" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'financial' && (
        <Card title="Budget vs Expense Growth ($k USD)">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={financialTrendData}>
                <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} />
                <YAxis stroke="var(--text-muted)" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }} />
                <Legend />
                <Line type="monotone" dataKey="budget" stroke="#3b82f6" strokeWidth={3} name="Total Budget ($k)" />
                <Line type="monotone" dataKey="expenses" stroke="#f59e0b" strokeWidth={3} name="Total Expenses ($k)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}

      {activeTab === 'team' && (
        <Card title="Organization Engineering Skill Coverage Radar">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={teamRadarData}>
                <PolarGrid stroke="var(--border-color)" />
                <PolarAngleAxis dataKey="skill" stroke="var(--text-primary)" fontSize={12} />
                <PolarRadiusAxis stroke="var(--text-muted)" />
                <Radar name="Expertise Score" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      )}
    </div>
  );
};
