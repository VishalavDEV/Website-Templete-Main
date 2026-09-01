import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ClientPortalPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demonstration login — allows demo code or instant enter
    setIsAuthenticated(true);
  };

  return (
    <div className="pt-28 pb-24 bg-white px-6 sm:px-10 md:px-14 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#191919]/50">
          <Link to="/" className="hover:text-[#191919]">Northbridge</Link>
          <span>/</span>
          <span>Client Portal</span>
        </div>

        {!isAuthenticated ? (
          <div className="max-w-md mx-auto py-12 space-y-8">
            <div className="text-center space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#191919]/50 font-mono block">
                SECURE ACCESS
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl text-[#191919] font-normal">
                Institutional Client Portal
              </h1>
              <p className="text-xs text-[#191919]/60 leading-relaxed font-light">
                Enter your institutional credentials or access the demonstration portfolio view.
              </p>
            </div>

            <form onSubmit={handleLogin} className="p-8 bg-[#F4F3F3] rounded-2xl border border-[#E5E5E5] space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#191919]/60 font-mono block">
                  INSTITUTIONAL CLIENT ID
                </label>
                <input
                  type="text"
                  defaultValue="NB-8921-INST"
                  className="w-full px-4 py-2.5 bg-white border border-[#E5E5E5] rounded-lg text-xs font-mono text-[#191919]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#191919]/60 font-mono block">
                  SECURITY PASSCODE / HARDWARE TOKEN
                </label>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-2.5 bg-white border border-[#E5E5E5] rounded-lg text-xs font-mono text-[#191919]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#191919] text-white rounded-lg text-xs font-medium hover:bg-[#191919]/90 transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Enter Demonstration Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="text-center pt-2">
                <span className="text-[10px] font-mono text-[#191919]/50 block">
                  * Fictional demonstration portal — clicking enter displays live model telemetry.
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E5E5]">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#191919]/50">ACCOUNT MANDATE</span>
                <h1 className="font-serif text-2xl sm:text-3xl text-[#191919] font-normal">
                  Global Endowment Multi-Asset SMA
                </h1>
                <div className="text-xs font-mono text-[#191919]/60 mt-1">
                  Account #NB-8921-INST • Custodian: BNY Mellon Institutional
                </div>
              </div>

              <button
                onClick={() => setIsAuthenticated(false)}
                className="px-4 py-2 bg-[#F4F3F3] hover:bg-[#EAEAEA] text-xs font-mono text-[#191919] rounded-lg cursor-pointer transition-colors"
              >
                Exit Portal
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-5 bg-[#F4F3F3] rounded-xl space-y-1">
                <span className="text-[10px] uppercase font-mono text-[#191919]/50">PORTFOLIO NAV</span>
                <span className="font-serif text-2xl sm:text-3xl text-[#191919] block">$148,250,000</span>
                <span className="text-xs font-mono text-emerald-700 font-medium">+8.42% YTD Net</span>
              </div>

              <div className="p-5 bg-[#F4F3F3] rounded-xl space-y-1">
                <span className="text-[10px] uppercase font-mono text-[#191919]/50">UNFUNDED PE COMMITS</span>
                <span className="font-serif text-2xl sm:text-3xl text-[#191919] block">$8,500,000</span>
                <span className="text-xs font-mono text-[#191919]/60">Expected 12M Draw</span>
              </div>

              <div className="p-5 bg-[#F4F3F3] rounded-xl space-y-1">
                <span className="text-[10px] uppercase font-mono text-[#191919]/50">ANNUALIZED YIELD</span>
                <span className="font-serif text-2xl sm:text-3xl text-[#191919] block">5.82%</span>
                <span className="text-xs font-mono text-[#191919]/60">Distributing Quarterly</span>
              </div>

              <div className="p-5 bg-[#F4F3F3] rounded-xl space-y-1">
                <span className="text-[10px] uppercase font-mono text-[#191919]/50">BETA TO MSCI WORLD</span>
                <span className="font-serif text-2xl sm:text-3xl text-[#191919] block">0.48</span>
                <span className="text-xs font-mono text-[#191919]/60">Tail Risk Hedged</span>
              </div>
            </div>

            {/* HOLDINGS TABLE */}
            <div className="bg-[#F4F3F3] p-6 rounded-2xl border border-[#E5E5E5] space-y-4">
              <span className="text-[10px] uppercase font-mono text-[#191919]/50 font-medium block">
                CONSOLIDATED ASSET HOLDINGS
              </span>
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="p-3 bg-[#FAFAFA] border-b border-[#E5E5E5] text-[10px] font-mono text-[#191919]/60 grid grid-cols-12">
                  <div className="col-span-6">STRATEGY / VEHICLE</div>
                  <div className="col-span-3 text-right">MARKET VALUE</div>
                  <div className="col-span-3 text-right">ALLOCATION</div>
                </div>
                <div className="divide-y divide-[#E5E5E5] text-xs">
                  {[
                    { name: 'Northbridge Global Quality Equity SMA', val: '$51,887,500', weight: '35.0%' },
                    { name: 'Northbridge Senior Private Debt Pool III', val: '$37,062,500', weight: '25.0%' },
                    { name: 'Sovereign & IG Core Fixed Income', val: '$29,650,000', weight: '20.0%' },
                    { name: 'European Essential Infrastructure SPV', val: '$22,237,500', weight: '15.0%' },
                    { name: 'USD Treasury Liquid Sweep', val: '$7,412,500', weight: '5.0%' },
                  ].map((row, idx) => (
                    <div key={idx} className="p-3.5 grid grid-cols-12 items-center">
                      <div className="col-span-6 font-medium text-[#191919]">{row.name}</div>
                      <div className="col-span-3 text-right font-mono text-[#191919]/80">{row.val}</div>
                      <div className="col-span-3 text-right font-mono text-[#191919]/80">{row.weight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl text-center">
              <span className="text-[11px] font-mono text-[#191919]/50">
                * Demonstration interface — no real financial data.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
