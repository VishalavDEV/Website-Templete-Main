import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Users, Globe2, Briefcase, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function CareersTeaser() {
  const departments = [
    { title: 'Travel Consultants', desc: 'Elite C-Suite and corporate travel directors orchestrating bespoke global journeys.' },
    { title: 'Technology & Product', desc: 'Distributed systems engineers and ML architects building the intelligence platform.' },
    { title: 'Operations & 24/7 Security', desc: 'Duty of Care analysts and crisis directors safeguarding international travelers.' },
    { title: 'Corporate Partnerships', desc: 'Enterprise account strategists negotiating multi-million airline and luxury hotel alliances.' },
    { title: 'Customer Experience', desc: 'White-glove concierges delivering personalized VIP hospitality around the clock.' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FBF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0A261F] text-white border border-[#165042] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0F382E] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#165042] border border-[#C29B38]/30 text-[#DFBA58] text-xs font-semibold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                Global Careers
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.15] tracking-tight">
                Build a career that takes you places.
              </h2>

              <p className="text-sm sm:text-base text-[#D8C3A8]/80 leading-relaxed max-w-xl">
                Join a global collective of travel architects, technologists, and security specialists shaping the future of international enterprise mobility.
              </p>

              <div className="pt-2">
                <Link
                  to="/careers"
                  id="careers-explore-btn"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C29B38] text-[#0E1412] text-xs font-bold uppercase tracking-wider hover:bg-[#DFBA58] active:scale-95 transition-all shadow-md"
                >
                  <span>Explore Open Positions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              {departments.map((dept, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#0F382E]/50 border border-[#165042] flex items-start gap-4 hover:border-[#C29B38]/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#165042] text-[#DFBA58] flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono">
                    0{i + 1}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white font-serif">{dept.title}</div>
                    <div className="text-xs text-[#D8C3A8]/70 mt-0.5">{dept.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
