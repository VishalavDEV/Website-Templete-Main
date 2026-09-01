import { useState } from 'react';
import { Cpu, Terminal, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  iconBg: string;
  iconColor: string;
  desc: string;
  level: string;
  symbol: string;
}

export default function TechUniverse() {
  const [activeTech, setActiveTech] = useState<TechItem | null>(null);

  const quadrants = [
    {
      title: 'Programming',
      dotColor: 'bg-blue-600',
      items: [
        { name: 'Python', symbol: 'Py', iconBg: 'bg-blue-50', iconColor: 'text-blue-600', desc: 'Primary language for ML, Deep Learning & Backend Services (FastAPI, Flask)', level: 'Advanced / Core', category: 'Programming' },
        { name: 'JavaScript', symbol: 'JS', iconBg: 'bg-amber-50', iconColor: 'text-amber-600', desc: 'Full-stack application development with modern ES6+ & TypeScript', level: 'Advanced', category: 'Programming' },
        { name: 'Java', symbol: '☕', iconBg: 'bg-red-50', iconColor: 'text-red-600', desc: 'Object-oriented programming, data structures & scalable algorithms', level: 'Proficient', category: 'Programming' },
        { name: 'C++', symbol: 'C++', iconBg: 'bg-indigo-50', iconColor: 'text-indigo-600', desc: 'High-performance computing, low-level optimization & DSA', level: 'Intermediate', category: 'Programming' },
      ],
    },
    {
      title: 'Frontend & Backend',
      dotColor: 'bg-indigo-600',
      items: [
        { name: 'React', symbol: '⚛', iconBg: 'bg-cyan-50', iconColor: 'text-cyan-600', desc: 'Interactive AI web apps, custom dashboards & component state systems', level: 'Advanced / Core', category: 'Frontend & Backend' },
        { name: 'Node.js', symbol: '⬢', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600', desc: 'Asynchronous event-driven server runtime & microservices', level: 'Advanced', category: 'Frontend & Backend' },
        { name: 'Express', symbol: 'ex', iconBg: 'bg-slate-100', iconColor: 'text-slate-700', desc: 'RESTful API architecture, middleware routing & authentication', level: 'Advanced', category: 'Frontend & Backend' },
        { name: 'Next.js', symbol: 'N', iconBg: 'bg-slate-900', iconColor: 'text-white', desc: 'Server-side rendering, hybrid static generation & edge functions', level: 'Proficient', category: 'Frontend & Backend' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      dotColor: 'bg-rose-500',
      items: [
        { name: 'TensorFlow', symbol: 'TF', iconBg: 'bg-orange-50', iconColor: 'text-orange-600', desc: 'Deep learning neural networks, model training & deployment pipelines', level: 'Advanced', category: 'Frameworks & Libraries' },
        { name: 'PyTorch', symbol: '🔥', iconBg: 'bg-rose-50', iconColor: 'text-rose-600', desc: 'Computer vision, research prototyping & dynamic computation graphs', level: 'Advanced / Core', category: 'Frameworks & Libraries' },
        { name: 'OpenAI APIs', symbol: '✦', iconBg: 'bg-teal-50', iconColor: 'text-teal-600', desc: 'GPT-4o, embeddings, tool calling & structured JSON output pipelines', level: 'Advanced / Core', category: 'Frameworks & Libraries' },
        { name: 'LangChain', symbol: '🦜', iconBg: 'bg-amber-50', iconColor: 'text-amber-700', desc: 'RAG retrieval architectures, agents, memory chains & vector stores', level: 'Advanced', category: 'Frameworks & Libraries' },
      ],
    },
    {
      title: 'Databases & Cloud',
      dotColor: 'bg-teal-600',
      items: [
        { name: 'PostgreSQL', symbol: '🐘', iconBg: 'bg-blue-50', iconColor: 'text-blue-700', desc: 'Relational data modeling, pgvector search & high-performance indexing', level: 'Advanced', category: 'Databases & Cloud' },
        { name: 'MongoDB', symbol: '🍃', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-700', desc: 'Document schemas, dynamic aggregation pipelines & caching', level: 'Proficient', category: 'Databases & Cloud' },
        { name: 'Docker', symbol: '🐳', iconBg: 'bg-sky-50', iconColor: 'text-sky-600', desc: 'Containerization, reproducible ML environments & microservice orchestration', level: 'Proficient', category: 'Databases & Cloud' },
        { name: 'AWS', symbol: '☁', iconBg: 'bg-amber-50', iconColor: 'text-amber-600', desc: 'EC2, S3, Lambda serverless, IAM security & cloud deployment', level: 'Intermediate', category: 'Databases & Cloud' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#f8fafc] border-t border-slate-200/60">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 tracking-wider uppercase font-sans">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>SKILLS & TECHNOLOGIES</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            TECH STACK UNIVERSE
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
            Tools and technologies I use to build intelligent and scalable solutions.
          </p>
        </div>

        {/* Constellation Diagram Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Subtle Connecting Dashed Guidelines */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 500" fill="none">
              <path
                d="M200 130 L400 250 L600 130"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M200 370 L400 250 L600 370"
                stroke="#cbd5e1"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx="400" cy="250" r="160" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Grid of 4 Quadrant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 relative z-10 mb-8">
            
            {/* Top-Left: Programming */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <span className={`w-2 h-2 rounded-full ${quadrants[0].dotColor}`} />
                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 uppercase tracking-tight">
                  {quadrants[0].title}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {quadrants[0].items.map((tech) => (
                  <button
                    key={tech.name}
                    id={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setActiveTech(tech)}
                    className="flex flex-col items-center p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all text-center group cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mb-2 shadow-2xs group-hover:scale-110 transition-transform ${tech.iconBg} ${tech.iconColor}`}>
                      {tech.symbol}
                    </div>
                    <span className="font-semibold text-xs text-slate-800 group-hover:text-blue-600">
                      {tech.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Top-Right: Frontend & Backend */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <span className={`w-2 h-2 rounded-full ${quadrants[1].dotColor}`} />
                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 uppercase tracking-tight">
                  {quadrants[1].title}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {quadrants[1].items.map((tech) => (
                  <button
                    key={tech.name}
                    id={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setActiveTech(tech)}
                    className="flex flex-col items-center p-3 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/40 transition-all text-center group cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mb-2 shadow-2xs group-hover:scale-110 transition-transform ${tech.iconBg} ${tech.iconColor}`}>
                      {tech.symbol}
                    </div>
                    <span className="font-semibold text-xs text-slate-800 group-hover:text-indigo-600">
                      {tech.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Center Floating Core Hub (Visible on MD+) */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-900 text-white flex flex-col items-center justify-center shadow-xl border-4 border-white text-center p-2 animate-pulse hover:animate-none group cursor-pointer transition-transform hover:scale-105">
                <Cpu className="w-7 h-7 text-cyan-400 mb-1" />
                <span className="font-heading font-extrabold text-[11px] uppercase tracking-wider leading-tight text-slate-100">
                  AI ENGINEERING
                </span>
                <span className="text-[8px] text-cyan-300 font-mono mt-0.5">CENTRAL HUB</span>
              </div>
            </div>

            {/* Bottom-Left: Frameworks & Libraries */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <span className={`w-2 h-2 rounded-full ${quadrants[2].dotColor}`} />
                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 uppercase tracking-tight">
                  {quadrants[2].title}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {quadrants[2].items.map((tech) => (
                  <button
                    key={tech.name}
                    id={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setActiveTech(tech)}
                    className="flex flex-col items-center p-3 rounded-xl border border-slate-100 hover:border-rose-200 hover:bg-rose-50/40 transition-all text-center group cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mb-2 shadow-2xs group-hover:scale-110 transition-transform ${tech.iconBg} ${tech.iconColor}`}>
                      {tech.symbol}
                    </div>
                    <span className="font-semibold text-xs text-slate-800 group-hover:text-rose-600">
                      {tech.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom-Right: Databases & Cloud */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                <span className={`w-2 h-2 rounded-full ${quadrants[3].dotColor}`} />
                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 uppercase tracking-tight">
                  {quadrants[3].title}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {quadrants[3].items.map((tech) => (
                  <button
                    key={tech.name}
                    id={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setActiveTech(tech)}
                    className="flex flex-col items-center p-3 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/40 transition-all text-center group cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mb-2 shadow-2xs group-hover:scale-110 transition-transform ${tech.iconBg} ${tech.iconColor}`}>
                      {tech.symbol}
                    </div>
                    <span className="font-semibold text-xs text-slate-800 group-hover:text-teal-600">
                      {tech.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Technology Detail Modal / Popover */}
          {activeTech && (
            <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base ${activeTech.iconBg} ${activeTech.iconColor}`}>
                  {activeTech.symbol}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-heading font-bold text-sm text-slate-900">{activeTech.name}</h4>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {activeTech.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{activeTech.desc}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveTech(null)}
                className="text-xs text-slate-400 hover:text-slate-700 px-2 py-1 rounded-lg border border-slate-200 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

