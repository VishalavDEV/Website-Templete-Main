import React, { useState } from 'react';
import {
  Shield,
  Award,
  Globe2,
  TrendingUp,
  Users,
  Target,
  FileCheck,
  CheckCircle2,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Lock,
  Compass
} from 'lucide-react';
import { ActiveTab } from '../../types';

interface AboutViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  openBookingModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab, openBookingModal }) => {
  const [selectedLeader, setSelectedLeader] = useState<any | null>(null);

  const leadershipTeam = [
    {
      name: 'Arthur J. Sterling',
      role: 'Chief Executive Officer & Managing Partner',
      experience: '28+ Years in Global Asset Management',
      education: 'MBA, Harvard Business School | B.S. Economics, Princeton',
      bio: 'Arthur co-founded Apex Wealth in 1999. Previously Senior Managing Director at Morgan Stanley Asset Management, overseeing $40B+ in multi-asset sovereign mandates. He chairs the Global Investment Committee.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    },
    {
      name: 'Sarah Jenkins, CFA',
      role: 'Chief Investment Officer (CIO) - Equities',
      experience: '18+ Years in Quantitative & Fundamental Equity',
      education: 'CFA Charterholder | M.Sc. Financial Engineering, Columbia',
      bio: 'Sarah leads our 35-person equity research bureau. Her factor-based high conviction portfolios have generated 420 bps of annualized alpha over the MSCI World benchmark since 2014.',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    },
    {
      name: 'Rajesh K. Mehta',
      role: 'Head of Fixed Income & Treasury',
      experience: '22+ Years in Sovereign & Corporate Credit',
      education: 'CA, FRM | MS Finance, London School of Economics',
      bio: 'Rajesh manages our $31B+ fixed income desk. Prior to Apex, he was Head of Rates Trading at Standard Chartered Singapore, specializing in emerging market debt and interest rate derivatives.',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80',
    },
    {
      name: 'Victoria De Silva',
      role: 'Managing Director, Alternative Assets & Private Equity',
      experience: '16+ Years in Private Markets & Venture Capital',
      education: 'CAIA, CFA | LL.M. International Law, Oxford',
      bio: 'Victoria leads private equity syndicates, senior direct lending, and real estate infrastructure funds across North America, Europe, and Asia-Pacific with average realized IRR of 21.4%.',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80',
    },
  ];

  const milestones = [
    { year: '1999', title: 'Firm Founding', desc: 'Established in New York & Zurich as an independent private wealth fiduciary.' },
    { year: '2006', title: 'London & Singapore Desks', desc: 'Expanded cross-border capabilities for European and Asian Family Offices.' },
    { year: '2012', title: '$25 Billion AUM Crossed', desc: 'Pioneered proprietary quantitative factor risk modeling engine.' },
    { year: '2018', title: 'Alternative Asset Expansion', desc: 'Launched Senior Secured Private Credit and Green Infrastructure funds.' },
    { year: '2023', title: 'Digital Wealth Portal', desc: 'Integrated institutional client portal with real-time portfolio analytics.' },
    { year: '2026', title: '$85B+ Global AUM', desc: 'Serving 10,000+ high net worth families and institutions across 6 global desks.' },
  ];

  const awards = [
    { title: 'Best Multi-Asset Wealth Manager 2025', org: 'Global WealthBriefing Awards', year: '2025' },
    { title: '5-Star Top Quartile Performance Rating', org: 'Morningstar Institutional Ratings', year: '2024 - 2026' },
    { title: 'Excellence in Private Credit Stewardship', org: 'Private Debt Investor', year: '2025' },
    { title: 'Best ESG Innovation Fund', org: 'Sustainable Investment Forum', year: '2024' },
  ];

  const globalOffices = [
    { city: 'New York', address: '450 Lexington Avenue, 32nd Floor, NY 10017', phone: '+1 (212) 555-0199', jurisdiction: 'SEC Registered' },
    { city: 'London', address: '1 Canada Square, Canary Wharf, London E14 5AA', phone: '+44 20 7946 0912', jurisdiction: 'FCA Regulated' },
    { city: 'Zurich', address: 'Bahnhofstrasse 45, 8001 Zurich, Switzerland', phone: '+41 44 220 1800', jurisdiction: 'FINMA Oversight' },
    { city: 'Singapore', address: '10 Collyer Quay, Ocean Financial Centre, 049315', phone: '+65 6789 0122', jurisdiction: 'MAS Regulated' },
    { city: 'Mumbai', address: 'Bandra Kurla Complex, Tower 2, Mumbai 400051', phone: '+91 22 6123 4500', jurisdiction: 'SEBI Registered' },
    { city: 'Dubai', address: 'DIFC Gate Precinct 4, Dubai, UAE', phone: '+971 4 362 7000', jurisdiction: 'DFSA Licensed' },
  ];

  return (
    <div className="w-full py-10 space-y-16">
      {/* 1. Header & Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-amber-600" />
            <span>Over 25 Years of Fiduciary Stewardship</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Pioneering Institutional Wealth & Private Asset Management
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Apex Wealth is an independent global investment management firm overseeing $85+ Billion in assets for family offices, institutional endowments, sovereign entities, and private clients worldwide.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be the world’s most trusted fiduciary partner, empowering families and institutions to preserve multi-generational capital and navigate dynamic global markets through uncompromising quantitative discipline and personalized stewardship.
            </p>
            <div className="pt-2 text-xs font-semibold text-amber-700 flex items-center gap-1">
              <span>Fiduciary Standard &bull; Global Agility &bull; Enduring Trust</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To deliver superior, risk-adjusted returns by uniting deep macroeconomic research, factor-driven portfolio construction, bank-grade custody, and conflict-free fee transparency for every investor we serve.
            </p>
            <div className="pt-2 text-xs font-semibold text-blue-700 flex items-center gap-1">
              <span>Risk-First Architecture &bull; Aligned Interests &bull; Alpha Generation</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Investment Philosophy (4 Pillars) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Institutional Framework
            </span>
            <h2 className="font-display text-3xl font-bold text-white">
              Our 4-Pillar Investment Philosophy
            </h2>
            <p className="text-xs text-slate-300">
              Tested across multiple market cycles, our core tenets govern every allocation decision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-750 space-y-3">
              <div className="text-amber-400 font-display text-2xl font-bold">01</div>
              <h4 className="font-bold text-base text-white">Mathematical Risk Budgeting</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Risk is not volatility; risk is permanent capital impairment. We enforce strict VaR and drawdown limits across all asset tiers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-750 space-y-3">
              <div className="text-amber-400 font-display text-2xl font-bold">02</div>
              <h4 className="font-bold text-base text-white">Forensic Fundamental Screening</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We analyze balance sheet health, return on invested capital (ROIC), and moat durability before allocating a single dollar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-750 space-y-3">
              <div className="text-amber-400 font-display text-2xl font-bold">03</div>
              <h4 className="font-bold text-base text-white">True Multi-Asset Uncorrelation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Blending public equities, sovereign debt, private credit, and real assets to minimize cross-asset contagion in bear markets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-750 space-y-3">
              <div className="text-amber-400 font-display text-2xl font-bold">04</div>
              <h4 className="font-bold text-base text-white">100% Fiduciary Alignment</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our partners and fund managers invest substantially in the exact same flagship strategies alongside our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Executive Leadership
            </span>
            <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
              Steered by Seasoned Market Veterans
            </h2>
          </div>
          <button
            onClick={openBookingModal}
            className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
          >
            <span>Consult Our Investment Committee</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((leader, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group cursor-pointer"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <img
                  src={leader.photo}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider block">
                    {leader.experience}
                  </span>
                  <h4 className="font-bold text-sm">{leader.name}</h4>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <p className="text-xs font-semibold text-amber-700">{leader.role}</p>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{leader.bio}</p>
                </div>
                <button className="text-[11px] font-bold text-slate-700 hover:text-amber-700 flex items-center gap-1 pt-2 border-t border-slate-100">
                  <span>View Credentials &amp; Bio</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Bio Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-lg font-bold"
            >
              &times;
            </button>
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <img
                src={selectedLeader.photo}
                alt={selectedLeader.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">{selectedLeader.name}</h3>
                <p className="text-xs font-semibold text-amber-700">{selectedLeader.role}</p>
                <p className="text-[11px] text-slate-500">{selectedLeader.education}</p>
              </div>
            </div>
            <div className="py-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Executive Profile
              </span>
              <p className="text-xs text-slate-700 leading-relaxed">{selectedLeader.bio}</p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600">
                <strong>Experience:</strong> {selectedLeader.experience}
              </div>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setSelectedLeader(null);
                  openBookingModal();
                }}
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl"
              >
                Schedule Meeting with Advisor
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Company Milestones Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Journey &amp; Legacy
          </span>
          <h2 className="font-display text-3xl font-bold text-slate-900 mt-1">
            27 Years of Consistent Value Creation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs relative overflow-hidden"
            >
              <span className="text-3xl font-display font-bold text-amber-500/30 absolute top-4 right-4">
                {m.year}
              </span>
              <span className="inline-block px-2.5 py-1 rounded bg-amber-50 text-amber-800 font-mono font-bold text-xs mb-3">
                {m.year}
              </span>
              <h4 className="font-bold text-base text-slate-900">{m.title}</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Awards & Global Desks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Awards */}
        <div>
          <h3 className="font-display text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-600" />
            <span>Recognitions &amp; Industry Accreditations</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((a, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">
                  {a.year} Award
                </span>
                <h4 className="font-bold text-sm text-slate-900 mt-1">{a.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{a.org}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Desks */}
        <div>
          <h3 className="font-display text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Globe2 className="w-6 h-6 text-blue-600" />
            <span>Global Presence &amp; Regulated Booking Centers</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalOffices.map((office, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base text-slate-900">{office.city}</h4>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {office.jurisdiction}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{office.address}</p>
                <p className="text-xs font-mono font-semibold text-amber-700">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
