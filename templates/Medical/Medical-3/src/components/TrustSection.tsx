import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, CheckCircle2, HeartPulse, Sparkles, Building2, Users, ArrowUpRight } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const stats = [
    {
      value: '25K+',
      label: 'Patients Served',
      sublabel: 'Across ambulatory & surgical centers',
      icon: <Users className="w-5 h-5 text-[#1A535C]" />,
      pill: '+18% YoY',
      accent: 'border-l-4 border-l-[#4ECDC4]'
    },
    {
      value: '120+',
      label: 'Board-Certified Specialists',
      sublabel: 'Top 1% clinical leaders & researchers',
      icon: <Award className="w-5 h-5 text-[#1A535C]" />,
      pill: 'Top Tier',
      accent: 'border-l-4 border-l-[#1A535C]'
    },
    {
      value: '15+',
      label: 'Clinical Institutes & Centers',
      sublabel: 'Advanced surgical robotics & genomics',
      icon: <Building2 className="w-5 h-5 text-[#1A535C]" />,
      pill: 'Robotic Suites',
      accent: 'border-l-4 border-l-[#0A1128]'
    },
    {
      value: '98.4%',
      label: 'Patient Satisfaction',
      sublabel: 'Independent verified post-care rating',
      icon: <HeartPulse className="w-5 h-5 text-[#1A535C]" />,
      pill: '4.98 Stars',
      accent: 'border-l-4 border-l-[#4ECDC4]'
    }
  ];

  const accreditations = [
    { title: 'JCI Gold Accredited', desc: 'Joint Commission International Highest Standard' },
    { title: 'ISO 9001:2025 Clinical', desc: 'Certified Healthcare Quality & Patient Safety' },
    { title: 'HIPAA & SOC2 Vault', desc: '256-Bit Encrypted Electronic Health Record' },
    { title: 'Mayo Clinic Affiliate', desc: 'Active Clinical Research Collaboration Network' }
  ];

  return (
    <section id="trust-section" className="py-14 sm:py-16 bg-[#FAF9F6] border-y border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1A535C] py-1 px-3 bg-[#1A535C]/10 rounded-full inline-block mb-2">
              Clinical Quality & Telemetry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1128] font-['Manrope']">
              Engineered for absolute clinical trust.
            </h2>
          </div>
          <span className="text-xs text-[#4A5568] font-semibold">
            Real-time verified hospital network data
          </span>
        </div>

        {/* Bento Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-[32px] bg-white border border-gray-200/90 shadow-sm hover:shadow-md hover:border-[#4ECDC4]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF9F6] border border-gray-200 flex items-center justify-center shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#1A535C]/10 text-[#1A535C]">
                    {item.pill}
                  </span>
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0A1128] tracking-tight font-['Manrope'] mb-1">
                  {item.value}
                </p>
                <p className="text-sm font-bold text-[#0A1128] mb-1">
                  {item.label}
                </p>
              </div>
              <p className="text-xs text-[#4A5568] leading-relaxed pt-2 border-t border-gray-100 mt-3">
                {item.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bento Accreditations Row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {accreditations.map((acc, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3.5 p-4 rounded-[24px] bg-white border border-gray-200/80 shadow-2xs"
            >
              <div className="w-9 h-9 rounded-xl bg-[#1A535C]/10 flex items-center justify-center text-[#1A535C] shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#1A535C]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0A1128]">{acc.title}</p>
                <p className="text-[11px] text-[#4A5568] line-clamp-1">{acc.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
