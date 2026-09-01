import React from 'react';
import { Activity, CheckCircle2, UserPlus, HardDrive, RefreshCw, AlertTriangle, DollarSign } from 'lucide-react';

export default function ActivityFeed({ activities = [] }) {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'info':
        return <UserPlus className="w-4 h-4 text-neura-cyan" />;
      case 'warning':
        return <HardDrive className="w-4 h-4 text-amber-400" />;
      case 'danger':
        return <AlertTriangle className="w-4 h-4 text-rose-400" />;
      default:
        return <Activity className="w-4 h-4 text-neura-purple" />;
    }
  };

  return (
    <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
          <Activity className="w-4 h-4 mr-2 text-neura-cyan" />
          <span>Live Activity</span>
        </h3>
        <span className="text-[11px] text-slate-400 font-mono">Stream Active</span>
      </div>

      <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
        {activities.map((item) => (
          <div key={item.id} className="relative flex items-start space-x-3 text-xs group">
            <div className="absolute -left-6 top-0.5 p-1 rounded-full bg-neura-panel border border-white/10 group-hover:scale-110 transition-transform">
              {getIcon(item.type)}
            </div>
            <div className="flex-1">
              <p className="text-slate-200 font-medium leading-snug">{item.text}</p>
              <span className="text-[10px] text-slate-400 font-mono mt-0.5 inline-block">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
