import React, { useState } from 'react';
import { ArrowRight, Users, Target, Shield, Sparkles, ChevronRight, TrendingUp, DollarSign, PieChart, CheckCircle2 } from 'lucide-react';
import { Logo } from '../common/Logo';

interface PlatformSectionProps {
  onExploreFeature?: (feature: string) => void;
}

export const PlatformSection: React.FC<PlatformSectionProps> = ({ onExploreFeature }) => {
  const [activeTab, setActiveTab] = useState<'investment' | 'goals' | 'planning' | 'savings'>('savings');
  const [showSavingsDetails, setShowSavingsDetails] = useState(false);

  const platformPillars = [
    {
      id: 'relationship',
      title: 'Relationship Intelligence',
      icon: Users,
      desc: 'Seamlessly connect clients to dedicated financial advisors with rich historical context, relationship timelines, and predictive life-event triggers.',
    },
    {
      id: 'goals',
      title: 'Goal-Based Planning',
      icon: Target,
      desc: 'Dynamic wealth simulation, automated milestone tracking, and real-time stress testing for major life purchases and retirement goals.',
    },
    {
      id: 'guidance',
      title: 'Real-Time Financial Guidance',
      icon: Shield,
      desc: 'Contextual AI assistance combined with human advisory verification to deliver compliant, proactive guidance when markets move.',
    },
  ];

  return (
    <section id="platform" className="py-20 sm:py-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: PHONE MOCKUP IN SOFT WARM CONTAINER */}
        <div className="lg:col-span-6">
          <div className="bg-[#F7F5F0] rounded-3xl p-6 sm:p-10 md:p-12 relative flex items-center justify-center overflow-visible">
            {/* PHONE FRAME */}
            <div className="w-full max-w-[310px] sm:max-w-[325px] bg-black p-3.5 rounded-[44px] shadow-2xl border-[4px] border-[#2A2A2A] relative">
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#1F1F1F] mr-3" />
                <div className="w-8 h-1 bg-[#1F1F1F] rounded-full" />
              </div>

              {/* PHONE SCREEN */}
              <div className="bg-white rounded-[34px] overflow-hidden p-5 pt-8 space-y-4 min-h-[440px] text-[#191919] select-none flex flex-col justify-between">
                {/* Screen Top Nav */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 text-[#191919]">
                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                          <path d="M6 18L18 6M18 6H9.5M18 6V14.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M6 12L12 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="font-bold text-xs tracking-tight">Finora</span>
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">9:41</span>
                  </div>

                  {/* Greetings Header */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-serif text-[#191919] font-normal leading-tight">
                      Good morning,<br />
                      Ava 👋
                    </h3>
                    <p className="text-xs text-gray-500 font-normal">
                      How can I help you today?
                    </p>
                  </div>
                </div>

                {/* DYNAMIC SCREEN CONTENT BASED ON SELECTION */}
                {activeTab === 'savings' && (
                  <div className="space-y-2.5">
                    <div className="p-3 bg-[#F7F5F0] rounded-xl border border-[#EBE8E1] space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-[#191919]">
                        <span>High-Yield Home Fund</span>
                        <span className="text-emerald-700 font-bold">$42,500</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#191919] h-full w-[78%]" />
                      </div>
                      <div className="text-[10px] text-gray-500 flex justify-between">
                        <span>78% of $55,000 goal</span>
                        <span className="text-emerald-700 font-medium">+20% speedup</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'investment' && (
                  <div className="p-3 bg-[#F7F5F0] rounded-xl border border-[#EBE8E1] space-y-1.5 text-xs">
                    <div className="flex items-center justify-between font-semibold">
                      <span>Balanced Growth Portfolio</span>
                      <span className="text-emerald-700 font-mono">+11.4%</span>
                    </div>
                    <p className="text-[10px] text-gray-600">Rebalanced 2 days ago by Advisor Marcus Vance.</p>
                  </div>
                )}

                {activeTab === 'goals' && (
                  <div className="p-3 bg-[#F7F5F0] rounded-xl border border-[#EBE8E1] space-y-1.5 text-xs">
                    <div className="flex items-center justify-between font-semibold">
                      <span>Retirement Age 60</span>
                      <span className="text-emerald-700 font-mono">On Track (94%)</span>
                    </div>
                    <p className="text-[10px] text-gray-600">Projected nest egg: $2.4M at retirement.</p>
                  </div>
                )}

                {activeTab === 'planning' && (
                  <div className="p-3 bg-[#F7F5F0] rounded-xl border border-[#EBE8E1] space-y-1.5 text-xs">
                    <div className="flex items-center justify-between font-semibold">
                      <span>Tax-Efficient Strategy</span>
                      <span className="text-blue-700 font-mono">Optimized</span>
                    </div>
                    <p className="text-[10px] text-gray-600">Tax loss harvesting harvested $3,800 this quarter.</p>
                  </div>
                )}

                {/* 3 ACTION CARDS */}
                <div className="space-y-2 pt-1">
                  <button
                    onClick={() => setActiveTab('investment')}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      activeTab === 'investment'
                        ? 'bg-[#191919] text-white border-black'
                        : 'bg-white hover:bg-gray-50 border-gray-200 text-[#191919]'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Investment insights</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  <button
                    onClick={() => setActiveTab('goals')}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      activeTab === 'goals'
                        ? 'bg-[#191919] text-white border-black'
                        : 'bg-white hover:bg-gray-50 border-gray-200 text-[#191919]'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <Target className="w-3.5 h-3.5" />
                      <span>Goal tracking</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  <button
                    onClick={() => setActiveTab('planning')}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      activeTab === 'planning'
                        ? 'bg-[#191919] text-white border-black'
                        : 'bg-white hover:bg-gray-50 border-gray-200 text-[#191919]'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <PieChart className="w-3.5 h-3.5" />
                      <span>Financial planning</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </button>
                </div>
              </div>
            </div>

            {/* FLOATING AI RECOMMENDATION POPUP CARD (OVERLAPPING ON RIGHT) */}
            <div className="absolute -right-2 sm:-right-6 md:-right-8 top-1/2 -translate-y-12 bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/90 shadow-xl max-w-[210px] sm:max-w-[230px] space-y-3 z-30 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#191919] text-white flex items-center justify-center">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span className="text-xs font-semibold text-[#191919]">Finora AI</span>
              </div>

              <p className="text-xs text-gray-700 leading-snug font-normal">
                Here's a personalized savings plan to help you reach your goal 20% faster.
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setActiveTab('savings');
                    setShowSavingsDetails(true);
                  }}
                  className="w-8 h-8 rounded-full bg-[#191919] hover:bg-black text-white flex items-center justify-center transition-all duration-150 cursor-pointer hover:scale-105 active:scale-95 shadow-xs"
                  aria-label="View personalized savings plan"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: OUR PLATFORM HEADLINE & 3 PILLARS */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          <div className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#191919]/60 uppercase font-sans">
            Our Platform
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-normal text-[#191919] leading-[1.12] tracking-[-0.02em]">
            A smarter way to<br />
            manage your money.
          </h2>

          <p className="text-base sm:text-lg text-[#191919]/75 font-normal leading-relaxed">
            Finora brings together intelligent tools and real human relationships to help you make confident financial decisions.
          </p>

          {/* 3 CLICKABLE ACCORDION/PILLAR ROWS WITH CHEVRON/ARROW */}
          <div className="space-y-4 pt-2">
            {platformPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  onClick={() => {
                    if (onExploreFeature) onExploreFeature(pillar.title);
                  }}
                  className="group p-5 rounded-2xl border border-gray-200/80 hover:border-[#191919] bg-white hover:bg-[#FAF9F6] transition-all duration-200 cursor-pointer flex items-center justify-between shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] group-hover:bg-[#191919] group-hover:text-white flex items-center justify-center text-[#191919] transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#191919] group-hover:text-black">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#191919] group-hover:translate-x-1 transition-all" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
