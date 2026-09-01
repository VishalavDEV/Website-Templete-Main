import React from 'react';
import { Users, Shield } from 'lucide-react';
import { MOCK_TEAM_MEMBERS } from '../../services/mockData';

export default function TeamMembers({ members = MOCK_TEAM_MEMBERS }) {
  return (
    <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white tracking-tight flex items-center">
          <Users className="w-4 h-4 mr-2 text-neura-cyan" />
          <span>Team Members</span>
        </h3>
        <button className="text-xs text-neura-cyan hover:underline font-semibold">View All</button>
      </div>

      <div className="space-y-3">
        {members.map((m) => (
          <div
            key={m.id}
            className="flex items-center justify-between p-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-all"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-8 h-8 rounded-xl object-cover ring-1 ring-white/20"
                />
                <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full ring-2 ring-neura-bg ${
                  m.status === 'Online' ? 'bg-emerald-500' : m.status === 'Busy' ? 'bg-amber-500' : 'bg-slate-500'
                }`} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">{m.name}</h4>
                <p className="text-[10px] text-slate-400">{m.role}</p>
              </div>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
              m.status === 'Online'
                ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                : m.status === 'Busy'
                ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                : 'bg-slate-500/15 text-slate-400 border-slate-500/30'
            }`}>
              {m.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
