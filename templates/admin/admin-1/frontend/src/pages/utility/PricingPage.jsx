import React from 'react';
import Layout from '../../components/layout/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Tag, Check, Zap } from 'lucide-react';

export default function PricingPage() {
  const tierConversionData = [
    { tier: 'Developer Starter', subscribers: 1240 },
    { tier: 'Pro SaaS Scale', subscribers: 3850 },
    { tier: 'Enterprise Cluster', subscribers: 420 },
  ];

  const plans = [
    { name: 'Developer Starter', price: '$49', period: '/month', desc: 'Ideal for solo developers building fast AI apps.', features: ['1 AI Model Deployment', 'Up to 50K API Calls / Mo', 'Basic Telemetry Analytics', 'Community Support'], button: 'Start Free Trial' },
    { name: 'Pro SaaS Scale', price: '$299', period: '/month', desc: 'Designed for scaling startups & tech teams.', features: ['10 AI Model Deployments', '5M API Calls / Mo', 'Real-Time WebSocket Sync', 'Dedicated GPU Cluster Access', 'Priority 24/7 Support'], button: 'Upgrade to Pro', popular: true },
    { name: 'Enterprise Cluster', price: '$999', period: '/month', desc: 'Full custom dedicated infrastructure for enterprises.', features: ['Unlimited AI Deployments', 'Custom NVIDIA H100 Hardware', 'SOC2 Compliance & Auditing', 'Dedicated Solution Engineer', 'Guaranteed 99.99% SLA'], button: 'Contact Sales' },
  ];

  return (
    <Layout title="SaaS Pricing Plans" breadcrumb="Home / System / Pricing">
      <div className="space-y-8 max-w-6xl mx-auto py-4">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Flexible SaaS Compute Pricing</h2>
          <p className="text-xs text-slate-400">Scale your AI models, cloud infrastructure, and enterprise command center seamlessly.</p>
        </div>

        {/* Subscription Tier Conversion BarChart */}
        <div className="rounded-3xl glass-card p-4 sm:p-6 border border-white/10 space-y-4 max-w-3xl mx-auto min-w-0 overflow-hidden">
          <h3 className="text-sm font-bold text-white text-center">Active Subscribers by Plan Tier</h3>
          <div className="w-full h-44 sm:h-48 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tierConversionData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="tier" stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <YAxis stroke="#64748b" tick={{ fill: '#94a3b8', fontSize: 10 }} width={40} />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Bar dataKey="subscribers" fill="#00f0ff" radius={[6, 6, 0, 0]} maxBarSize={28} name="Active Subscribers" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-6 rounded-3xl glass-card border transition-all flex flex-col justify-between space-y-6 relative overflow-hidden ${
                p.popular ? 'border-neura-cyan/60 shadow-glow-cyan/30 bg-neura-cyan/5' : 'border-white/10'
              }`}
            >
              {p.popular && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-neura-cyan text-black font-bold text-[10px] uppercase rounded-bl-2xl">
                  Most Popular
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{p.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{p.desc}</p>
                </div>

                <div className="flex items-baseline space-x-1 font-mono">
                  <span className="text-4xl font-extrabold text-white">{p.price}</span>
                  <span className="text-xs text-slate-400">{p.period}</span>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                  {p.features.map(f => (
                    <div key={f} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-neura-cyan shrink-0" />
                      <span className="text-slate-200">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${
                  p.popular
                    ? 'bg-gradient-to-r from-neura-cyan to-blue-600 text-black shadow-glow-cyan'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {p.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
