import React from 'react';

export const InsightsStats: React.FC = () => {
  const stats = [
    { value: '24+', label: 'ARTICLES', desc: 'Longform critical essays & technical monographs' },
    { value: '06', label: 'TOPICS', desc: 'From spatial computing to typography & brand theory' },
    { value: '08', label: 'YEARS OF THINKING', desc: 'Documenting the evolution of modern digital craft' },
  ];

  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#060608] border-b border-[#ffffff10]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className={`space-y-3 ${i !== 0 ? 'pt-8 md:pt-0 md:pl-12' : ''}`}>
              <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#FAF9F6] tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-[#0066FF] uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
              <p className="text-xs text-[#888888] font-light leading-relaxed max-w-xs font-body">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
