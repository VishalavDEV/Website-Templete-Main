import React, { useState } from 'react';
import { TECHNOLOGIES_DATA } from '../data/technologies';
import { Cpu, Terminal, Layers, Database, Cloud, ShieldCheck, Check } from 'lucide-react';

export const TechnologyMatrix: React.FC = () => {
  const [selectedCatIndex, setSelectedCatIndex] = useState<number>(0);
  const currentCategory = TECHNOLOGIES_DATA[selectedCatIndex];

  return (
    <section id="technology-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
            Modern Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-2 font-display">
            Built on Battle-Tested, Enterprise-Grade Technologies.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We avoid volatile framework churn. We build upon proven, high-performance foundations that scale gracefully and maintain strict security compliance.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {TECHNOLOGIES_DATA.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCatIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCatIndex === idx
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Selected Category Content */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="mb-6 pb-6 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-950 font-display">
              {currentCategory.category}
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              {currentCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-sm font-bold text-slate-900">
                      {item.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                        item.status === 'Core Specialization'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : item.status === 'Advanced'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 block mb-2">
                    {item.type}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
