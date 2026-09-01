import React from 'react';
import { DollarSign, ShoppingCart, Users, Activity, TrendingUp } from 'lucide-react';
import CardTilt from '../ui/CardTilt';

export default function KpiCards({ summary }) {
  const cards = [
    {
      title: 'TOTAL REVENUE',
      value: summary ? `$${summary.totalRevenue.toLocaleString()}` : '$84,254',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign,
      color: 'from-cyan-500/20 to-blue-500/10 border-neura-cyan/40',
      iconBg: 'bg-neura-cyan/20 text-neura-cyan',
      sparkline: 'M0 25 Q 20 15, 40 20 T 80 5 T 120 12',
      sparkColor: '#00f0ff'
    },
    {
      title: 'TOTAL ORDERS',
      value: summary ? summary.totalOrders.toLocaleString() : '2,145',
      change: '+8.2%',
      isPositive: true,
      icon: ShoppingCart,
      color: 'from-purple-500/20 to-indigo-500/10 border-neura-purple/40',
      iconBg: 'bg-neura-purple/20 text-neura-purple',
      sparkline: 'M0 20 Q 25 28, 50 12 T 90 18 T 120 4',
      sparkColor: '#7000ff'
    },
    {
      title: 'ACTIVE USERS',
      value: summary ? summary.activeUsers.toLocaleString() : '12,426',
      change: '+14.8%',
      isPositive: true,
      icon: Users,
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/40',
      iconBg: 'bg-emerald-500/20 text-emerald-400',
      sparkline: 'M0 28 Q 30 18, 60 22 T 100 8 T 120 2',
      sparkColor: '#10b981'
    },
    {
      title: 'SYSTEM HEALTH',
      value: summary ? `${summary.systemHealth}%` : '99.99%',
      change: '+0.4%',
      isPositive: true,
      icon: Activity,
      color: 'from-amber-500/20 to-orange-500/10 border-amber-500/40',
      iconBg: 'bg-amber-500/20 text-amber-400',
      sparkline: 'M0 15 Q 20 10, 50 12 T 90 4 T 120 2',
      sparkColor: '#f59e0b'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((card, i) => {
        const Icon = card.icon;
        return (
          <CardTilt key={i} className={`bg-gradient-to-br ${card.color}`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${card.iconBg} border border-white/10`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{card.change}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{card.title}</span>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white font-mono tracking-tight">
                {card.value}
              </h3>
            </div>

            {/* Mini Sparkline Chart SVG */}
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] text-slate-400">vs last period</span>
              <div className="w-24 h-8">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 120 30">
                  <path
                    d={card.sparkline}
                    fill="none"
                    stroke={card.sparkColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </CardTilt>
        );
      })}
    </div>
  );
}
