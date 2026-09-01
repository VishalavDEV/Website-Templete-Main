import React from 'react';
import { Shield, Award, Users, HeartHandshake, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

interface CompanySectionProps {
  onGetStarted?: () => void;
}

export const CompanySection: React.FC<CompanySectionProps> = ({ onGetStarted }) => {
  const leadership = [
    {
      name: 'Marcus Vance',
      role: 'Co-Founder & Chief Executive Officer',
      bio: 'Former Managing Director of Private Wealth at Goldman Sachs with 18+ years advising family offices and emerging tech founders.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=240&auto=format&fit=crop',
    },
    {
      name: 'Dr. Elena Rostova',
      role: 'Head of Quantitative AI & Research',
      bio: 'PhD in Computational Finance from MIT. Specializes in real-time portfolio risk modeling and dynamic tax loss harvesting algorithms.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=240&auto=format&fit=crop',
    },
    {
      name: 'Arthur Pendelton',
      role: 'Chief Compliance & Fiduciary Officer',
      bio: 'Former Senior Regulatory Counsel at FINRA, ensuring institutional fiduciary transparency and end-to-end data integrity.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=240&auto=format&fit=crop',
    },
  ];

  const pillars = [
    {
      icon: HeartHandshake,
      title: 'Fiduciary Duty',
      desc: 'We are bound by law and purpose to act exclusively in your best interest. No commissions, no proprietary sales.',
    },
    {
      icon: Shield,
      title: 'Institutional Security',
      desc: 'SOC 2 Type II certified, 256-bit AES encryption, multi-factor biometric authentication, and SIPC asset insurance.',
    },
    {
      icon: Award,
      title: 'Human Centricity',
      desc: 'AI provides speed and 24/7 continuous audits; licensed human advisors provide wisdom, empathy, and strategic context.',
    },
  ];

  return (
    <section id="company" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      {/* SECTION HEADER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/60 font-semibold block font-sans">
            OUR COMPANY & PURPOSE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#191919] leading-tight">
            Finance closer to the people it serves.
          </h2>
        </div>
        <div className="lg:col-span-6 text-base sm:text-lg text-[#191919]/75 font-normal leading-relaxed space-y-4">
          <p>
            Finora was founded on a simple conviction: technology should deepen human trust, not eliminate it. Modern wealth management has grown cold and fragmented — leaving clients with either generic automated apps or opaque high-fee legacy institutions.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            We built Finora to unite proactive machine intelligence with accredited human advisors, giving individuals, families, and businesses the clarity they need to achieve enduring financial outcomes.
          </p>
        </div>
      </div>

      {/* CORE VALUES / PILLARS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="bg-[#F7F5F0] rounded-3xl p-7 border border-[#EBE8E1] space-y-3 shadow-xs"
            >
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#191919] border border-[#EBE8E1]">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif text-[#191919] font-semibold">{p.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{p.desc}</p>
            </div>
          );
        })}
      </div>

      {/* LEADERSHIP SECTION */}
      <div className="bg-[#FAF9F6] rounded-3xl border border-[#EBE8E1] p-8 sm:p-12 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EBE8E1] pb-6">
          <div>
            <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Leadership Team</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#191919] font-normal mt-1">
              Guided by wealth veterans & AI pioneers
            </h3>
          </div>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#191919] hover:text-black hover:underline cursor-pointer"
          >
            <span>Meet our advisor network</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((member, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 border border-[#EBE8E1]">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-semibold text-[#191919]">{member.name}</h4>
                <div className="text-xs text-gray-500 font-mono">{member.role}</div>
                <p className="text-xs text-gray-600 leading-relaxed pt-1.5">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
