import React from 'react';
import {
  TrendingUp,
  Shield,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Lock,
  FileCheck
} from 'lucide-react';
import { ActiveTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  openBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openBookingModal }) => {
  return (
    <footer className="bg-[#001B3A] text-slate-400 border-t border-[#003366] text-sm">
      {/* Top Banner / Trust Badges */}
      <div className="border-b border-[#003366] bg-[#002147]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#001B3A] rounded-xl border border-[#003366] text-[#C5A021]">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                  Fiduciary Standard
                </h4>
                <p className="text-xs text-slate-400">100% Conflict-free client-first advisory</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#001B3A] rounded-xl border border-[#003366] text-[#C5A021]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                  Global Recognition
                </h4>
                <p className="text-xs text-slate-400">Ranked Top 10 Private Wealth Manager</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#001B3A] rounded-xl border border-[#003366] text-[#C5A021]">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                  Bank-Grade Custody
                </h4>
                <p className="text-xs text-slate-400">Tier-1 Qualified Custodial Segregation</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#001B3A] rounded-xl border border-[#003366] text-[#C5A021]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                  6 Global Desks
                </h4>
                <p className="text-xs text-slate-400">NYC, London, Zurich, Singapore, Mumbai, Dubai</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#002147] rounded-xl border border-[#C5A021] flex items-center justify-center text-[#C5A021] font-bold font-display text-base">
                A
              </div>
              <div>
                <span className="text-lg font-bold text-white font-display">Apex Wealth</span>
                <span className="block text-[10px] tracking-widest uppercase text-[#C5A021] font-bold">
                  Investment Management
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              A premier global wealth management institution dedicated to multi-generational wealth preservation, capital appreciation, and quantitative factor investing. Managing over $85+ Billion in AUM across worldwide mandates.
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                onClick={openBookingModal}
                className="px-4 py-2.5 text-xs font-bold text-[#002147] bg-[#C5A021] hover:bg-[#D4AF37] rounded-xl transition-colors shadow-md"
              >
                Schedule Private Consultation
              </button>
              <button
                onClick={() => setActiveTab('portal')}
                className="px-4 py-2.5 text-xs font-bold text-slate-200 bg-[#002147] hover:bg-[#003366] border border-[#003366] rounded-xl transition-colors"
              >
                Client Portal
              </button>
            </div>
          </div>

          {/* Quick Links: Solutions */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('solutions')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Equity Growth Strategies
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('solutions')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Fixed Income & Sovereign Debt
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('solutions')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Alternative Investments (AIF)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('solutions')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Portfolio Management (PMS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('solutions')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Family Office & Governance
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('solutions')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Retirement & SWP Planning
                </button>
              </li>
            </ul>
          </div>

          {/* Analytics & Tools */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Analytics & Tools
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('portfolio')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Interactive Portfolio Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('calculators')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  SIP & Lump Sum Calculators
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('insights')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Daily Macro Briefings
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('performance')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Quantitative Risk Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('discovery')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Fund Discovery Screener
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('comparison')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Multi-Product Comparison
                </button>
              </li>
            </ul>
          </div>

          {/* Resources & Governance */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Resources & Desk
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('education')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Investor Learning Hub
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('reports')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Annual Reports & Filings
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('about')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Leadership & Milestones
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="hover:text-[#C5A021] transition-colors"
                >
                  Global Offices & Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('admin')}
                  className="hover:text-[#C5A021] transition-colors flex items-center gap-1.5"
                >
                  <Lock className="w-3 h-3 text-[#C5A021]" />
                  <span>Enterprise Admin</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimers & Legal Notice */}
        <div className="mt-12 pt-8 border-t border-[#003366] text-[11px] text-slate-400 leading-relaxed space-y-3">
          <p>
            <strong className="text-slate-300">Regulatory Disclosures:</strong> Apex Wealth & Investment Management operates under fiduciary oversight registered with financial market regulatory authorities (SEC, FCA, SEBI, FINMA, and MAS). Investments in securities markets are subject to market risks; read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between text-slate-400 gap-4 pt-2">
            <div>
              &copy; {new Date().getFullYear()} Apex Wealth & Investment Management AG. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-slate-400 text-xs">
              <span className="hover:text-[#C5A021] cursor-pointer">Privacy Policy</span>
              <span className="hover:text-[#C5A021] cursor-pointer">Terms of Service</span>
              <span className="hover:text-[#C5A021] cursor-pointer">Form ADV Part 2A</span>
              <span className="hover:text-[#C5A021] cursor-pointer flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                Encrypted Connection Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
