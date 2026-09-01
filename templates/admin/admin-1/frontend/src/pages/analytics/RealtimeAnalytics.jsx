import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import { Activity, Radio, Users, Globe, ShoppingCart } from 'lucide-react';

export default function RealtimeAnalytics() {
  const [activeUsers, setActiveUsers] = useState(1240);
  const [liveLog, setLiveLog] = useState([
    { id: 1, user: 'User #8421', action: 'Purchased Enterprise License', page: '/checkout', time: 'Just now' },
    { id: 2, user: 'User #3920', action: 'Deployed AI Vision Model', page: '/ai-models', time: '3s ago' },
    { id: 3, user: 'User #7104', action: 'Navigated to Pricing', page: '/pricing', time: '6s ago' },
    { id: 4, user: 'User #5812', action: 'Generated API Key', page: '/security', time: '12s ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 7) - 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout title="Real-Time Active Telemetry" breadcrumb="Home / Analytics / Real-Time Stream">
      <div className="space-y-6">
        <div className="p-4 sm:p-6 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
            <div className="relative flex h-4 w-4 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neura-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-neura-cyan"></span>
            </div>
            <div className="min-w-0">
              <span className="text-xs text-slate-400 font-mono uppercase">Right Now</span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-white font-mono truncate">{activeUsers} Active Users Online</h2>
            </div>
          </div>

          <div className="px-3 py-1.5 rounded-full bg-neura-cyan/15 text-neura-cyan text-xs font-mono font-bold flex items-center space-x-1.5 border border-neura-cyan/30 shrink-0">
            <Radio className="w-4 h-4 animate-pulse" />
            <span>SOCKET LIVE</span>
          </div>
        </div>

        {/* Live Stream Stream Log */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
            <Activity className="w-5 h-5 text-neura-cyan mr-2" />
            <span>Live Action Event Feed</span>
          </h3>

          <div className="space-y-2.5">
            {liveLog.map((log) => (
              <div key={log.id} className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-3">
                  <span className="font-mono font-bold text-neura-cyan">{log.user}</span>
                  <span className="text-slate-200">{log.action}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-slate-400">{log.page}</span>
                  <span className="text-[10px] text-emerald-400 font-mono">{log.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
