import React from 'react';
import Layout from '../../components/layout/Layout';
import TaskManagement from '../../components/dashboard/TaskManagement';
import { FolderGit2, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

export default function ProjectsDashboard() {
  return (
    <Layout title="Engineering & Sprint Dashboard" breadcrumb="Home / Overview / Projects Dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Active Projects</span>
            <div className="text-base sm:text-xl font-bold text-white font-mono mt-1 truncate">12</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Sprint Velocity</span>
            <div className="text-base sm:text-xl font-bold text-neura-cyan font-mono mt-1 truncate">84 Pts</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Tasks Completed</span>
            <div className="text-base sm:text-xl font-bold text-emerald-400 font-mono mt-1 truncate">142</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl glass-card border border-white/10 min-w-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase truncate block">Overdue Tasks</span>
            <div className="text-base sm:text-xl font-bold text-rose-400 font-mono mt-1 truncate">3</div>
          </div>
        </div>

        <TaskManagement />
      </div>
    </Layout>
  );
}
