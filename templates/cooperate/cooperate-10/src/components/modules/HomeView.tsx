import React from 'react';
import {
  TrendingUp,
  Shield,
  Award,
  Users,
  Briefcase,
  Layers,
  ArrowRight,
  Sparkles,
  PieChart,
  ShieldCheck,
  Target,
  FileSearch,
  CheckCircle2,
  ChevronRight,
  BarChart3,
  Calendar,
  Lock,
  Globe2,
  DollarSign,
  User,
  HeartHandshake,
  BadgePercent,
  Compass
} from 'lucide-react';
import { ActiveTab, Currency } from '../../types';
import { INVESTMENT_SOLUTIONS, RESEARCH_ARTICLES, MARKET_INDICES, ADVISORS } from '../../data/mockData';
import { formatCurrency } from '../../utils/formatters';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  currency: Currency;
  openBookingModal: () => void;
  openLoginModal: () => void;
  setSelectedSolutionId: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActiveTab,
  currency,
  openBookingModal,
  openLoginModal,
  setSelectedSolutionId,
}) => {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION WITH CITY SKYLINE & FINANCIAL DATA OVERLAY */}
      <section className="relative overflow-hidden bg-[#0A1C36] text-white pt-12 pb-24 lg:pt-16 lg:pb-36 border-b border-[#003366]">
        {/* Night Skyline Backdrop Graphic & Chart Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80")`,
          }}
        />

        {/* Gradient Overlay for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182E] via-[#0A1C36]/90 to-[#081B38]/80 pointer-events-none" />

        {/* Glowing Chart Network Lines & Data Dots Overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="chartLineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D59F4A" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Constellation financial trend curve */}
          <path
            d="M 500,420 Q 750,300 950,340 T 1250,220 T 1500,180"
            fill="none"
            stroke="url(#chartLineGrad)"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 400,480 Q 700,380 900,390 T 1300,260 T 1600,140"
            fill="none"
            stroke="#D59F4A"
            strokeWidth="1.5"
            opacity="0.6"
          />
          {/* Connected Glowing Nodes */}
          <circle cx="750" cy="300" r="4" fill="#38bdf8" className="animate-pulse" />
          <circle cx="950" cy="340" r="4" fill="#38bdf8" />
          <circle cx="1250" cy="220" r="5" fill="#D59F4A" className="animate-pulse" />
          <circle cx="1500" cy="180" r="6" fill="#D59F4A" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Statement */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.12] tracking-tight">
                Building Wealth.
                <br />
                Securing Futures.
                <br />
                <span className="text-[#D59F4A]">Together.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
                We provide tailored investment solutions and strategic advice to help you achieve your financial goals.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="hero-explore-solutions-btn"
                  onClick={() => setActiveTab('solutions')}
                  className="flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-900 bg-[#D59F4A] hover:bg-[#c28c38] active:bg-[#a9782b] rounded-lg transition-all shadow-md group cursor-pointer"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-schedule-consultation-btn"
                  onClick={openBookingModal}
                  className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#061A33]/80 hover:bg-[#0A2547] border border-white/25 rounded-lg transition-all backdrop-blur-xs cursor-pointer"
                >
                  <span>Schedule a Consultation</span>
                </button>
              </div>
            </div>

            {/* Right Hero Cards (Translucent Glass Panel matching reference image) */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#081C38]/85 backdrop-blur-md border border-white/10 shadow-2xl space-y-6">
                {/* 1. Client First Approach */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#D59F4A]/70 flex items-center justify-center text-[#D59F4A] shrink-0 bg-[#06182E]">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">Client First Approach</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Your goals drive our investment strategies.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/10 w-full" />

                {/* 2. Expertise You Can Trust */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#D59F4A]/70 flex items-center justify-center text-[#D59F4A] shrink-0 bg-[#06182E]">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">Expertise You Can Trust</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Decades of experience in navigating markets.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/10 w-full" />

                {/* 3. Risk-Aware Investing */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[#D59F4A]/70 flex items-center justify-center text-[#D59F4A] shrink-0 bg-[#06182E]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">Risk-Aware Investing</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Prudent risk management for long-term growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING 4-PILLAR WHITE BANNER */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Pillar 1: Goal-Based Investing */}
            <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:pr-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                <Target className="w-6 h-6 text-[#0A1C36]" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900">Goal-Based Investing</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Customized strategies aligned with your financial goals.
                </p>
              </div>
            </div>

            {/* Pillar 2: Diversified Portfolios */}
            <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                <PieChart className="w-6 h-6 text-[#0A1C36]" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900">Diversified Portfolios</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Well-diversified portfolios across asset classes and geographies.
                </p>
              </div>
            </div>

            {/* Pillar 3: Research Driven */}
            <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                <Award className="w-6 h-6 text-[#0A1C36]" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900">Research Driven</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  In-depth research and insights to identify the best opportunities.
                </p>
              </div>
            </div>

            {/* Pillar 4: Wealth Protection */}
            <div className="flex items-start gap-4 pt-4 sm:pt-0 sm:pl-4">
              <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
                <span className="font-serif font-bold text-lg text-[#0A1C36]">₹</span>
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900">Wealth Protection</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Strategies to help protect and preserve your wealth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. KEY PERFORMANCE METRICS BANNER (Navy ribbon matching reference image) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8">
        <div className="bg-[#06182E] text-white rounded-2xl p-6 lg:p-8 shadow-lg border border-[#0B2545]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left divide-y sm:divide-y-0 sm:divide-x divide-[#0B2545]">
            {/* Metric 1 */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 sm:pt-0 lg:pr-6">
              <div className="p-3 bg-[#0A1C36] rounded-xl border border-[#0B2545] text-[#D59F4A] shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="font-serif text-2xl lg:text-3xl font-bold text-white">25+</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Years of Experience</div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 sm:pt-0 lg:px-6">
              <div className="p-3 bg-[#0A1C36] rounded-xl border border-[#0B2545] text-[#D59F4A] shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="font-serif text-2xl lg:text-3xl font-bold text-white">10K+</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Happy Clients</div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 sm:pt-0 lg:px-6">
              <div className="p-3 bg-[#0A1C36] rounded-xl border border-[#0B2545] text-[#D59F4A] shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="font-serif text-2xl lg:text-3xl font-bold text-white">
                  {currency === 'INR' ? '₹ 85,000 Cr+' : '$85 Billion+'}
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Assets Under Management</div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 sm:pt-0 lg:pl-6">
              <div className="p-3 bg-[#0A1C36] rounded-xl border border-[#0B2545] text-[#D59F4A] shrink-0">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <div className="font-serif text-2xl lg:text-3xl font-bold text-white">Global</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Investment Presence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "OUR SOLUTIONS" & MARKET INSIGHTS SECTION (Exact 5-column layout matching reference) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Section Heading with Accent and View All link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D59F4A] block">
              OUR SOLUTIONS
            </span>
            <div className="w-12 h-0.5 bg-[#D59F4A] mt-1 mb-2"></div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Solutions Designed for Your Goals
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('solutions')}
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#D59F4A] transition-colors cursor-pointer group"
          >
            <span>View All Solutions</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5 Cards Row: 4 Solution Cards + 1 Dark Navy Market Insights Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Card 1: Equity Investments */}
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0A1C36] mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0A1C36] transition-colors">
                Equity Investments
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Growth-oriented strategies to build wealth over the long term.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setSelectedSolutionId('equity-investments');
                  setActiveTab('solutions');
                }}
                className="text-xs font-bold text-slate-900 group-hover:text-[#D59F4A] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Debt Investments */}
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0A1C36] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0A1C36] transition-colors">
                Debt Investments
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Stable income opportunities with lower risk exposure.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setSelectedSolutionId('fixed-income');
                  setActiveTab('solutions');
                }}
                className="text-xs font-bold text-slate-900 group-hover:text-[#D59F4A] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Alternative Investments */}
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0A1C36] mb-4">
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0A1C36] transition-colors">
                Alternative Investments
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Diversify beyond traditional assets for better outcomes.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setSelectedSolutionId('alternative-investments');
                  setActiveTab('solutions');
                }}
                className="text-xs font-bold text-slate-900 group-hover:text-[#D59F4A] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Wealth Advisory */}
          <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0A1C36] mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0A1C36] transition-colors">
                Wealth Advisory
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Comprehensive financial planning for a secure future.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setSelectedSolutionId('wealth-management');
                  setActiveTab('solutions');
                }}
                className="text-xs font-bold text-slate-900 group-hover:text-[#D59F4A] flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 5: Market Insights (Dark Navy Card matching reference image) */}
          <div className="p-6 rounded-2xl bg-[#06182E] text-white flex flex-col justify-between shadow-lg border border-[#0B2545] relative overflow-hidden">
            {/* Background Candlestick Chart Graphic */}
            <div className="absolute right-0 bottom-0 w-32 h-32 opacity-15 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="40" width="8" height="40" fill="#D59F4A" />
                <line x1="24" y1="20" x2="24" y2="90" stroke="#D59F4A" strokeWidth="2" />
                <rect x="50" y="25" width="8" height="50" fill="#D59F4A" />
                <line x1="54" y1="10" x2="54" y2="85" stroke="#D59F4A" strokeWidth="2" />
                <rect x="80" y="15" width="8" height="60" fill="#D59F4A" />
                <line x1="84" y1="5" x2="84" y2="95" stroke="#D59F4A" strokeWidth="2" />
              </svg>
            </div>

            <div>
              <div className="inline-block">
                <h3 className="font-bold text-base text-white">Market Insights</h3>
                <div className="w-8 h-0.5 bg-[#D59F4A] mt-1"></div>
              </div>
              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                Stay informed with our latest market updates and expert insights.
              </p>
            </div>

            <div className="mt-8">
              <button
                id="home-explore-insights-btn"
                onClick={() => setActiveTab('insights')}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-900 bg-[#D59F4A] hover:bg-[#c28c38] active:bg-[#a9782b] rounded-lg transition-all shadow-md text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Explore Insights</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INVESTMENT METHODOLOGY & PROCESS ACCELERATOR */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D59F4A] block">
              OUR PROVEN METHODOLOGY
            </span>
            <div className="w-12 h-0.5 bg-[#D59F4A] mx-auto mt-1 mb-3"></div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              Institutional Discipline Across Every Stage of Wealth
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              We apply quantitative screening, independent forensic accounting, and strict tactical allocation to protect and grow your capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-[#D59F4A] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0A1C36] text-white flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Macro & Asset Allocation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluating global interest rates, inflation regimes, and yield curve dynamics to establish optimal strategic weights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-[#D59F4A] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0A1C36] text-white flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Fundamental Alpha Screening</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bottom-up balance sheet analysis, forensic audit reviews, and cash flow yield modeling on over 5,000 global securities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-[#D59F4A] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0A1C36] text-white flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Multi-Tier Risk Controls</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stress-testing portfolios under historical drawdowns, liquidity freezes, and geopolitical volatility scenarios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-[#D59F4A] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0A1C36] text-white flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h3 className="font-bold text-base text-slate-900 mb-2">Tax-Smart Execution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous tax-loss harvesting, dividend reinvestment optimization, and low-slippage trade routing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED INTELLIGENCE & RESEARCH PAPERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D59F4A] block">
              MARKET INTELLIGENCE
            </span>
            <div className="w-12 h-0.5 bg-[#D59F4A] mt-1 mb-2"></div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Latest Insights & Investment Strategy
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('insights')}
            className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#D59F4A] transition-colors cursor-pointer group"
          >
            <span>View All Research ({RESEARCH_ARTICLES.length})</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESEARCH_ARTICLES.slice(0, 3).map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveTab('insights')}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-[#D59F4A]/50 transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#0A1C36]/5 text-[#0A1C36]">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-slate-600 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0A1C36] transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">{article.author}</div>
                  <div className="text-[10px] text-slate-600">{article.authorRole}</div>
                </div>
                <span className="text-xs font-bold text-[#D59F4A] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PRIVATE BANKERS & SENIOR ADVISORS PREVIEW */}
      <section className="bg-[#06182E] text-white py-16 border-t border-[#0B2545]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D59F4A] block">
                FIDUCIARY LEADERSHIP
              </span>
              <div className="w-12 h-0.5 bg-[#D59F4A] mt-1 mb-2"></div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Meet Your Private Wealth Advisors
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Dedicated charterholders guiding multi-generational wealth with fiduciary transparency.
              </p>
            </div>
            <button
              onClick={openBookingModal}
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-900 bg-[#D59F4A] hover:bg-[#c28c38] rounded-lg transition-colors cursor-pointer"
            >
              <span>Schedule Advisor Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADVISORS.slice(0, 3).map((advisor) => (
              <div
                key={advisor.id}
                className="bg-[#0A1C36] border border-[#0B2545] rounded-2xl p-6 flex flex-col justify-between hover:border-[#D59F4A]/60 transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={advisor.avatarUrl}
                      alt={advisor.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#D59F4A]"
                    />
                    <div>
                      <h3 className="font-bold text-base text-white">{advisor.name}</h3>
                      <p className="text-xs text-[#D59F4A] font-medium">{advisor.role}</p>
                      <div className="flex items-center gap-1.5 mt-1 text-[11px] text-slate-300">
                        <Award className="w-3.5 h-3.5 text-[#D59F4A]" />
                        <span>{advisor.experienceYears} Years Exp.</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {advisor.bio}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#0B2545] flex flex-wrap gap-1.5">
                    {advisor.certifications.slice(0, 2).map((cert, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-semibold bg-[#06182E] text-slate-300 rounded border border-[#0B2545]"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B2545] flex items-center justify-between">
                  <div className="text-[11px] text-slate-400">
                    Rating: <span className="text-amber-400 font-bold">★ {advisor.rating}</span> ({advisor.reviewsCount})
                  </div>
                  <button
                    onClick={openBookingModal}
                    className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#061A33] hover:bg-[#D59F4A] hover:text-slate-900 border border-white/20 rounded-lg transition-colors cursor-pointer"
                  >
                    Book Call
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE TOOLS & CALCULATORS ACCESSIBILITY BANNER */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D59F4A]">
                Interactive Portfolio Tools
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Plan Your Compounding Wealth & Retirement Target
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Simulate potential growth across SIP, Lump Sum, Retirement Corpus, Goal Planning, and Compound Interest models with personalized inflation and tax adjustments.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Real-Time Inflation Modeling</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Interactive Visual Charts</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Instant Schedule Export</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => setActiveTab('calculators')}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold text-white bg-[#0A1C36] hover:bg-[#122A4E] rounded-xl transition-colors shadow-sm cursor-pointer text-center"
              >
                Launch Financial Calculators
              </button>
              <button
                onClick={() => setActiveTab('discovery')}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl transition-colors cursor-pointer text-center"
              >
                Fund Discovery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INSTITUTIONAL SECURITY & COMPLIANCE TRUST BAR */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-6">
            Institutional Trust, Security & Regulatory Compliance
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-7 h-7 text-[#0A1C36] mb-1.5" />
              <span className="font-bold text-xs text-slate-900">Bank-Grade 256-Bit SSL</span>
              <span className="text-[10px] text-slate-600">SOC-2 Type II Certified</span>
            </div>
            <div className="flex flex-col items-center">
              <Lock className="w-7 h-7 text-[#0A1C36] mb-1.5" />
              <span className="font-bold text-xs text-slate-900">Segregated Custody</span>
              <span className="text-[10px] text-slate-600">Assets held at Tier-1 Custodians</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-7 h-7 text-[#0A1C36] mb-1.5" />
              <span className="font-bold text-xs text-slate-900">SEBI & SEC Registered</span>
              <span className="text-[10px] text-slate-600">Strict Fiduciary Standards</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe2 className="w-7 h-7 text-[#0A1C36] mb-1.5" />
              <span className="font-bold text-xs text-slate-900">Global Fiduciary Mandates</span>
              <span className="text-[10px] text-slate-600">Clients across 32+ Jurisdictions</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
