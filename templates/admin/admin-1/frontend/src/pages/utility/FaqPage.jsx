import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState(0);

  const topicData = [
    { name: 'API & Integration', value: 45, color: '#00f0ff' },
    { name: '3D Graphics', value: 30, color: '#7000ff' },
    { name: 'Security & RBAC', value: 25, color: '#10b981' },
  ];

  const faqs = [
    { q: 'How does NEURA connect to Java Spring Boot & MySQL?', a: 'NEURA includes a high-performance Axios service layer configured with Spring Security JWT tokens. If local Spring Boot or MySQL is restarting, it automatically serves a seamless mock dataset so your frontend development is never interrupted.' },
    { q: 'What 3D rendering engine is used in the Hero Canvas?', a: 'We use React Three Fiber (@react-three/fiber) and @react-three/drei on top of Three.js. It renders distorted wireframe icosahedrons and starfields with OrbitControls.' },
    { q: 'How is Role-Based Access Control (RBAC) enforced?', a: 'JWT claims store user roles (ADMIN, MANAGER, USER). The frontend validates permissions via AuthContext and Spring Security intercepts backend endpoints.' },
  ];

  return (
    <Layout title="Knowledge Base & FAQ" breadcrumb="Home / System / FAQ">
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-400">Everything you need to know about the NEURA Command Platform.</p>
        </div>

        {/* Support Query Topic Donut Chart */}
        <div className="rounded-3xl glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white text-center">Inquiry Distribution by Topic Category</h3>
          <div className="h-44 w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={topicData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {topicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{
                    backgroundColor: '#0B1020',
                    borderColor: 'rgba(255,255,255,0.15)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl glass-card border border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full p-4 text-left text-xs font-bold text-white flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="flex items-center">
                  <HelpCircle className="w-4 h-4 text-neura-cyan mr-2" />
                  {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openIdx === i ? 'rotate-180 text-neura-cyan' : 'text-slate-400'}`} />
              </button>
              {openIdx === i && (
                <div className="p-4 pt-0 text-xs text-slate-300 leading-relaxed border-t border-white/5 bg-white/[0.01]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
