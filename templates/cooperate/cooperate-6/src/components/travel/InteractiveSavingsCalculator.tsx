import React, { useState } from 'react';
import { DollarSign, TrendingDown, Users, Plane, Leaf, ArrowRight, ShieldCheck } from 'lucide-react';

interface CalculatorProps {
  onOpenConsultation: () => void;
}

export default function InteractiveSavingsCalculator({ onOpenConsultation }: CalculatorProps) {
  const [annualSpend, setAnnualSpend] = useState<number>(2500000); // $2.5M
  const [travelersCount, setTravelersCount] = useState<number>(200);
  const [intlPercentage, setIntlPercentage] = useState<number>(60); // 60%

  // Calculations
  const estimatedSavings = Math.round(annualSpend * 0.284);
  const estimatedHoursSaved = Math.round(travelersCount * 22);
  const estimatedCo2Offset = Math.round((annualSpend / 1000) * 1.4);

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#D8C3A8]/70 shadow-lg text-[#17211D]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#D8C3A8]/40">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0F382E]">
            Executive ROI Forecaster
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#0E1412] mt-0.5">
            Calculate Your Program Savings
          </h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F382E]/10 text-[#0F382E] text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Aurelia Benchmark Algorithm</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Sliders Form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Annual Spend */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#25332E]">
                Annual Travel & Lodging Budget
              </label>
              <span className="font-serif text-lg font-bold text-[#0F382E]">
                ${(annualSpend / 1000000).toFixed(2)}M
              </span>
            </div>
            <input
              type="range"
              min={250000}
              max={15000000}
              step={250000}
              value={annualSpend}
              onChange={(e) => setAnnualSpend(Number(e.target.value))}
              className="w-full h-2 bg-[#EADBCA] rounded-lg appearance-none cursor-pointer accent-[#0F382E]"
            />
            <div className="flex justify-between text-[10px] text-[#8FA29A] mt-1">
              <span>$250K</span>
              <span>$5M</span>
              <span>$15M+</span>
            </div>
          </div>

          {/* Slider 2: Active Travelers */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#25332E]">
                Active Traveling Team Members
              </label>
              <span className="font-serif text-lg font-bold text-[#0F382E]">
                {travelersCount} Travelers
              </span>
            </div>
            <input
              type="range"
              min={20}
              max={2000}
              step={20}
              value={travelersCount}
              onChange={(e) => setTravelersCount(Number(e.target.value))}
              className="w-full h-2 bg-[#EADBCA] rounded-lg appearance-none cursor-pointer accent-[#0F382E]"
            />
            <div className="flex justify-between text-[10px] text-[#8FA29A] mt-1">
              <span>20</span>
              <span>500</span>
              <span>2,000+</span>
            </div>
          </div>

          {/* Slider 3: Long-haul International Share */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#25332E]">
                International / Cross-Border Routes
              </label>
              <span className="font-serif text-lg font-bold text-[#0F382E]">
                {intlPercentage}%
              </span>
            </div>
            <input
              type="range"
              min={10}
              max={90}
              step={5}
              value={intlPercentage}
              onChange={(e) => setIntlPercentage(Number(e.target.value))}
              className="w-full h-2 bg-[#EADBCA] rounded-lg appearance-none cursor-pointer accent-[#0F382E]"
            />
            <div className="flex justify-between text-[10px] text-[#8FA29A] mt-1">
              <span>10% (Domestic Focus)</span>
              <span>50%</span>
              <span>90% (Global Focus)</span>
            </div>
          </div>
        </div>

        {/* Results Card (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0F382E] text-white flex flex-col justify-between space-y-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#DFBA58]">
              Projected Annual Value
            </div>
            
            <div className="mt-2 font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
              ${(estimatedSavings / 1000).toLocaleString()}K
            </div>
            <div className="text-xs text-[#D8C3A8]/80 mt-1">
              Estimated direct budget savings per year (28.4% avg)
            </div>
          </div>

          <div className="space-y-2.5 pt-3 border-t border-[#165042] text-xs text-[#D8C3A8]/90">
            <div className="flex justify-between">
              <span>Executive Hours Saved:</span>
              <span className="font-semibold text-white">{estimatedHoursSaved.toLocaleString()} hrs</span>
            </div>
            <div className="flex justify-between">
              <span>Carbon Offset Potential:</span>
              <span className="font-semibold text-[#DFBA58]">{estimatedCo2Offset.toLocaleString()} Tonnes CO2e</span>
            </div>
            <div className="flex justify-between">
              <span>In-Policy Booking Target:</span>
              <span className="font-semibold text-white">94%+</span>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="w-full py-3.5 rounded-xl bg-[#C29B38] text-[#0E1412] text-xs font-bold uppercase tracking-wider hover:bg-[#DFBA58] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request Full Custom Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
