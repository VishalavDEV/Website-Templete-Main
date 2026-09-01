import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity as ActivityIcon, Clock, ShieldCheck, UserCheck, Server, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Activity() {
  const [activities, setActivities] = useState([
    { id: 1, text: 'Order #ORD-7821 Completed Successfully', user: 'Sarah Connor (sarah@skynet.io)', ip: '192.168.1.104', time: '5 min ago', type: 'success', category: 'Orders' },
    { id: 2, text: 'New Enterprise User Alex Thompson Registered', user: 'Alex Thompson (alex@corp.net)', ip: '10.0.4.12', time: '28 min ago', type: 'info', category: 'Authentication' },
    { id: 3, text: 'GPU Node US-East-1 Memory Threshold 85%', user: 'System Telemetry Daemon', ip: 'Node-US-East-1', time: '1 hour ago', type: 'warning', category: 'Infrastructure' },
    { id: 4, text: 'Annual SaaS Pro Plan Subscription Renewed', user: 'Emily Park (emily@cybershield.org)', ip: '172.16.0.44', time: '2 hours ago', type: 'success', category: 'Billing' },
    { id: 5, text: 'Unusual Login Attempt Intercepted & Blocked', user: 'Unknown Subject', ip: '185.220.101.5', time: '3 hours ago', type: 'danger', category: 'Security' },
    { id: 6, text: 'Stripe Settlement Deposit of $2,400.00 Received', user: 'Stripe Payment Gateway', ip: 'Gateway-US', time: '5 hours ago', type: 'success', category: 'Finance' },
  ]);

  const eventActivityData = [
    { hour: '00:00', events: 120 },
    { hour: '04:00', events: 80 },
    { hour: '08:00', events: 450 },
    { hour: '12:00', events: 680 },
    { hour: '16:00', events: 540 },
    { hour: '20:00', events: 310 },
  ];

  return (
    <Layout title="System Audit & Event Logs" breadcrumb="Home / System / Activity">
      <div className="space-y-6">
        {/* Event Activity Frequency AreaChart */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center">
            <ActivityIcon className="w-5 h-5 text-neura-cyan mr-2" />
            <span>Audit Event Log Frequency (2,180 Events Today)</span>
          </h3>

          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={eventActivityData}>
                <defs>
                  <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#00f0ff" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="hour" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Area type="monotone" dataKey="events" stroke="#00f0ff" strokeWidth={3} fill="url(#colorActivity)" name="Audit Events" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity Feed Table */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white">Recent System Audit Stream</h3>
          <div className="space-y-3">
            {activities.map((act) => (
              <div key={act.id} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center space-x-3">
                  <div className={`p-2.5 rounded-xl border shrink-0 ${
                    act.type === 'success' ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' :
                    act.type === 'danger' ? 'bg-rose-500/15 text-rose-400 border-rose-500/30' :
                    act.type === 'warning' ? 'bg-amber-500/15 text-amber-400 border-amber-500/30' :
                    'bg-neura-cyan/15 text-neura-cyan border-neura-cyan/30'
                  }`}>
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{act.text}</div>
                    <div className="text-slate-400 text-xs mt-0.5 font-mono">
                      <span>User: {act.user}</span> • <span className="text-slate-500">IP: {act.ip}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neura-cyan font-mono font-bold text-[10px]">
                    {act.category}
                  </span>
                  <span className="font-mono text-slate-400 text-[11px] font-medium">{act.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
