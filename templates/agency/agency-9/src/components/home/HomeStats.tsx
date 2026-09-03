import React from 'react';

export const HomeStats: React.FC = () => {
  const stats = [
    { number: '$1.4B+', label: 'CLIENT CAPITAL RAISED / VALUATION GENERATED' },
    { number: '14', label: 'INTERNATIONAL DESIGN PENCILS & SITE OF THE YEAR AWARDS' },
    { number: '98.4%', label: 'PROJECT SUCCESS & ON-TIME DEPLOYMENT RATE' },
    { number: '01', label: 'SINGLE CONVICTION: ZERO COMPROMISE ON IMPACT' }
  ];

  return (
    <section className="py-20 bg-[#FAF7F1] border-b border-[#CFC7BE]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="border-l-2 border-[#D65F3F] pl-6 space-y-2">
            <div className="font-display font-bold text-5xl md:text-6xl tracking-tighter text-[#2B2727]">
              {stat.number}
            </div>
            <div className="font-mono text-xs text-[#77716D] uppercase tracking-wider leading-relaxed">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
