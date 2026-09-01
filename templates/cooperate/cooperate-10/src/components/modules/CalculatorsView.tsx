import React, { useState } from 'react';
import {
  Calculator,
  TrendingUp,
  PieChart as PieIcon,
  DollarSign,
  Clock,
  Target,
  Percent,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  RefreshCw,
  FileSpreadsheet
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import { ActiveTab, Currency } from '../../types';
import { formatCurrency, formatPercent } from '../../utils/formatters';

interface CalculatorsViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  currency: Currency;
  openBookingModal: () => void;
}

type CalculatorType = 'sip' | 'lumpsum' | 'retirement' | 'goal' | 'compound' | 'emi';

export const CalculatorsView: React.FC<CalculatorsViewProps> = ({
  setActiveTab,
  currency,
  openBookingModal,
}) => {
  const [activeCalc, setActiveCalc] = useState<CalculatorType>('sip');

  // 1. SIP Calculator State
  const [sipMonthly, setSipMonthly] = useState<number>(2500);
  const [sipReturnRate, setSipReturnRate] = useState<number>(14.5);
  const [sipYears, setSipYears] = useState<number>(10);

  // 2. Lump Sum Calculator State
  const [lumpPrincipal, setLumpPrincipal] = useState<number>(50000);
  const [lumpReturnRate, setLumpReturnRate] = useState<number>(13.0);
  const [lumpYears, setLumpYears] = useState<number>(8);

  // 3. Retirement Calculator State
  const [currentAge, setCurrentAge] = useState<number>(35);
  const [retirementAge, setRetirementAge] = useState<number>(60);
  const [monthlyExpense, setMonthlyExpense] = useState<number>(5000);
  const [inflationRate, setInflationRate] = useState<number>(5.5);
  const [postRetirementReturn, setPostRetirementReturn] = useState<number>(8.0);

  // 4. Goal Planning Calculator State
  const [goalAmount, setGoalAmount] = useState<number>(500000);
  const [goalYears, setGoalYears] = useState<number>(7);
  const [goalReturnRate, setGoalReturnRate] = useState<number>(14.0);
  const [goalInitialSeed, setGoalInitialSeed] = useState<number>(25000);

  // 5. Compound Interest State
  const [compoundPrincipal, setCompoundPrincipal] = useState<number>(20000);
  const [compoundAnnualAdd, setCompoundAnnualAdd] = useState<number>(6000);
  const [compoundRate, setCompoundRate] = useState<number>(12.0);
  const [compoundYears, setCompoundYears] = useState<number>(12);
  const [compoundFrequency, setCompoundFrequency] = useState<number>(12); // 12=monthly, 4=quarterly, 1=yearly

  // 6. EMI & Leverage Calculator State
  const [loanPrincipal, setLoanPrincipal] = useState<number>(300000);
  const [loanRate, setLoanRate] = useState<number>(7.5);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(15);

  // Math Calculations:

  // 1. SIP Formulas
  const sipMonths = sipYears * 12;
  const sipMonthlyRate = sipReturnRate / 100 / 12;
  const sipTotalInvested = sipMonthly * sipMonths;
  const sipMaturityValue =
    sipMonthly *
    ((Math.pow(1 + sipMonthlyRate, sipMonths) - 1) / sipMonthlyRate) *
    (1 + sipMonthlyRate);
  const sipEstimatedReturns = Math.max(0, sipMaturityValue - sipTotalInvested);

  // 2. Lump Sum Formulas
  const lumpTotalInvested = lumpPrincipal;
  const lumpMaturityValue = lumpPrincipal * Math.pow(1 + lumpReturnRate / 100, lumpYears);
  const lumpEstimatedReturns = lumpMaturityValue - lumpTotalInvested;

  // 3. Retirement Formulas
  const yearsToRetire = Math.max(1, retirementAge - currentAge);
  const yearsInRetirement = 25; // standard longevity estimate to 85
  const inflatedMonthlyExpense =
    monthlyExpense * Math.pow(1 + inflationRate / 100, yearsToRetire);
  const inflatedAnnualExpense = inflatedMonthlyExpense * 12;
  const netRealReturn = (postRetirementReturn - inflationRate) / 100;
  // Annuity corpus required
  const targetCorpus =
    inflatedAnnualExpense *
    ((1 - Math.pow(1 + netRealReturn, -yearsInRetirement)) / Math.max(0.001, netRealReturn));
  const reqMonthlyRetireSIP =
    (targetCorpus * (0.12 / 12)) /
    (Math.pow(1 + 0.12 / 12, yearsToRetire * 12) - 1);

  // 4. Goal Planning Formulas
  const goalFutureSeed = goalInitialSeed * Math.pow(1 + goalReturnRate / 100, goalYears);
  const remainingGoal = Math.max(0, goalAmount - goalFutureSeed);
  const goalMonths = goalYears * 12;
  const goalMonthlyRate = goalReturnRate / 100 / 12;
  const reqGoalMonthlySIP =
    goalMonthlyRate > 0
      ? (remainingGoal * goalMonthlyRate) /
        ((Math.pow(1 + goalMonthlyRate, goalMonths) - 1) * (1 + goalMonthlyRate))
      : remainingGoal / goalMonths;

  // 5. Compound Interest Breakdown
  const compoundTotalInvested = compoundPrincipal + compoundAnnualAdd * compoundYears;
  let compoundRunningValue = compoundPrincipal;
  const compoundSchedule: { year: number; invested: number; value: number; interest: number }[] = [];
  for (let y = 1; y <= compoundYears; y++) {
    compoundRunningValue = (compoundRunningValue + compoundAnnualAdd) * (1 + compoundRate / 100);
    const investedSoFar = compoundPrincipal + compoundAnnualAdd * y;
    compoundSchedule.push({
      year: y,
      invested: investedSoFar,
      value: Math.round(compoundRunningValue),
      interest: Math.max(0, Math.round(compoundRunningValue - investedSoFar)),
    });
  }
  const compoundFinalMaturity = compoundRunningValue;
  const compoundTotalInterest = compoundFinalMaturity - compoundTotalInvested;

  // 6. EMI Formulas
  const loanMonthlyRate = loanRate / 100 / 12;
  const loanTotalMonths = loanTenureYears * 12;
  const loanEMI =
    (loanPrincipal * loanMonthlyRate * Math.pow(1 + loanMonthlyRate, loanTotalMonths)) /
    (Math.pow(1 + loanMonthlyRate, loanTotalMonths) - 1);
  const loanTotalPayment = loanEMI * loanTotalMonths;
  const loanTotalInterest = loanTotalPayment - loanPrincipal;

  // Helper chart donut generator
  const getDonutData = (invested: number, returns: number) => [
    { name: 'Invested Capital', value: Math.round(invested), color: '#0f172a' },
    { name: 'Estimated Gain', value: Math.round(returns), color: '#f59e0b' },
  ];

  return (
    <div className="w-full py-10 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Precision Financial Modeling
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Interactive Investment Calculators
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Forecast wealth accumulation, inflation-adjusted retirement corpus requirements, and goal trajectories with quantitative accuracy.
          </p>
        </div>

        {/* Calculator Selector Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
          {[
            { id: 'sip', label: 'SIP Calculator', icon: TrendingUp },
            { id: 'lumpsum', label: 'Lump Sum Calculator', icon: DollarSign },
            { id: 'retirement', label: 'Retirement Corpus', icon: Clock },
            { id: 'goal', label: 'Goal Planning', icon: Target },
            { id: 'compound', label: 'Compound Interest', icon: Percent },
            { id: 'emi', label: 'Loan & Wealth Leverage', icon: Building2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCalc === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCalc(tab.id as CalculatorType)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-slate-900 text-amber-400 shadow-md ring-2 ring-amber-400/30'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Interactive Calculator Canvas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          {/* ================= 1. SIP CALCULATOR ================= */}
          {activeCalc === 'sip' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Sliders & Inputs (Left) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Systematic Investment Plan (SIP) Calculator
                  </h3>
                  <p className="text-xs text-slate-500">
                    Calculate maturity value through disciplined recurring monthly contributions.
                  </p>
                </div>

                {/* Monthly Investment Slider */}
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">Monthly Contribution Amount</span>
                    <span className="font-mono font-bold text-amber-700 text-sm">
                      {formatCurrency(sipMonthly, currency)} / month
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="50000"
                    step="100"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>$100</span>
                    <span>$10,000</span>
                    <span>$50,000</span>
                  </div>
                </div>

                {/* Expected Return Rate Slider */}
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">Expected Annual Return Rate (p.a)</span>
                    <span className="font-mono font-bold text-slate-900 text-sm">{sipReturnRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="25"
                    step="0.5"
                    value={sipReturnRate}
                    onChange={(e) => setSipReturnRate(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>4% (Conservative)</span>
                    <span>14.5% (Apex Flagship)</span>
                    <span>25% (High Alpha)</span>
                  </div>
                </div>

                {/* Time Horizon Slider */}
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">Investment Time Horizon</span>
                    <span className="font-mono font-bold text-slate-900 text-sm">{sipYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="35"
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>1 Year</span>
                    <span>15 Years</span>
                    <span>35 Years</span>
                  </div>
                </div>
              </div>

              {/* Outputs & Donut Chart (Right) */}
              <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-6">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Projected Maturity Value
                  </span>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-amber-400 font-mono">
                    {formatCurrency(sipMaturityValue, currency)}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    After {sipYears} Years at {sipReturnRate}% CAGR
                  </p>
                </div>

                <div className="h-44">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={getDonutData(sipTotalInvested, sipEstimatedReturns)}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        <Cell fill="#64748b" />
                        <Cell fill="#f59e0b" />
                      </Pie>
                      <Tooltip
                        formatter={(val: any) => [formatCurrency(Number(val), currency), 'Amount']}
                        contentStyle={{
                          backgroundColor: '#0f172a',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '12px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                  <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase block font-semibold">
                      Total Invested
                    </span>
                    <span className="font-mono font-bold text-slate-200">
                      {formatCurrency(sipTotalInvested, currency)}
                    </span>
                  </div>

                  <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-amber-400 uppercase block font-semibold">
                      Estimated Wealth Gain
                    </span>
                    <span className="font-mono font-bold text-emerald-400">
                      +{formatCurrency(sipEstimatedReturns, currency)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={openBookingModal}
                  className="w-full py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors text-center"
                >
                  Start This SIP Plan With Advisor &rarr;
                </button>
              </div>
            </div>
          )}

          {/* ================= 2. LUMP SUM CALCULATOR ================= */}
          {activeCalc === 'lumpsum' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Lump Sum Investment Calculator
                  </h3>
                  <p className="text-xs text-slate-500">
                    Calculate power of one-time capital deployment over compounding years.
                  </p>
                </div>

                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">One-Time Initial Principal</span>
                    <span className="font-mono font-bold text-amber-700 text-sm">
                      {formatCurrency(lumpPrincipal, currency)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="1000000"
                    step="5000"
                    value={lumpPrincipal}
                    onChange={(e) => setLumpPrincipal(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>$1,000</span>
                    <span>$500,000</span>
                    <span>$1,000,000</span>
                  </div>
                </div>

                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">Expected Annual Return (%)</span>
                    <span className="font-mono font-bold text-slate-900 text-sm">{lumpReturnRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="25"
                    step="0.5"
                    value={lumpReturnRate}
                    onChange={(e) => setLumpReturnRate(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">Time Horizon (Years)</span>
                    <span className="font-mono font-bold text-slate-900 text-sm">{lumpYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={lumpYears}
                    onChange={(e) => setLumpYears(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-6">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Estimated Lump Sum Maturity
                  </span>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-amber-400 font-mono">
                    {formatCurrency(lumpMaturityValue, currency)}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Growth Multiplier: {(lumpMaturityValue / lumpTotalInvested).toFixed(2)}x
                  </p>
                </div>

                <div className="h-44">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={getDonutData(lumpTotalInvested, lumpEstimatedReturns)}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        <Cell fill="#64748b" />
                        <Cell fill="#f59e0b" />
                      </Pie>
                      <Tooltip
                        formatter={(val: any) => [formatCurrency(Number(val), currency), 'Amount']}
                        contentStyle={{
                          backgroundColor: '#0f172a',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '12px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                  <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400 uppercase block font-semibold">
                      Principal
                    </span>
                    <span className="font-mono font-bold text-slate-200">
                      {formatCurrency(lumpTotalInvested, currency)}
                    </span>
                  </div>

                  <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-amber-400 uppercase block font-semibold">
                      Total Capital Gains
                    </span>
                    <span className="font-mono font-bold text-emerald-400">
                      +{formatCurrency(lumpEstimatedReturns, currency)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={openBookingModal}
                  className="w-full py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors text-center"
                >
                  Deploy Lump Sum Mandate &rarr;
                </button>
              </div>
            </div>
          )}

          {/* ================= 3. RETIREMENT CORPUS CALCULATOR ================= */}
          {activeCalc === 'retirement' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Retirement Corpus &amp; Lifestyle Protection
                  </h3>
                  <p className="text-xs text-slate-500">
                    Calculate exact target corpus needed to sustain your lifestyle adjusted for inflation.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-700">Current Age: {currentAge}</span>
                    <input
                      type="range"
                      min="20"
                      max="65"
                      value={currentAge}
                      onChange={(e) => setCurrentAge(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>

                  <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-700">
                      Retirement Age: {retirementAge}
                    </span>
                    <input
                      type="range"
                      min="45"
                      max="75"
                      value={retirementAge}
                      onChange={(e) => setRetirementAge(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">Current Monthly Living Expense</span>
                    <span className="font-mono font-bold text-amber-700">
                      {formatCurrency(monthlyExpense, currency)} / mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="30000"
                    step="500"
                    value={monthlyExpense}
                    onChange={(e) => setMonthlyExpense(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-700">
                      Expected Inflation: {inflationRate}%
                    </span>
                    <input
                      type="range"
                      min="3"
                      max="10"
                      step="0.5"
                      value={inflationRate}
                      onChange={(e) => setInflationRate(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>

                  <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-700">
                      Post-Retire Return: {postRetirementReturn}%
                    </span>
                    <input
                      type="range"
                      min="5"
                      max="12"
                      step="0.5"
                      value={postRetirementReturn}
                      onChange={(e) => setPostRetirementReturn(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-6">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Target Retirement Corpus Needed
                  </span>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-amber-400 font-mono">
                    {formatCurrency(targetCorpus, currency)}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    To generate {formatCurrency(inflatedMonthlyExpense, currency)}/month at age {retirementAge}
                  </p>
                </div>

                <div className="p-4 bg-slate-800/90 rounded-xl border border-slate-700 space-y-2">
                  <span className="text-xs font-bold text-white block">Required Monthly Investment:</span>
                  <div className="font-mono text-xl font-bold text-emerald-400">
                    {formatCurrency(reqMonthlyRetireSIP, currency)} / month
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Assuming a 12% diversified equity &amp; debt accumulation glidepath over {yearsToRetire} years.
                  </p>
                </div>

                <button
                  onClick={openBookingModal}
                  className="w-full py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors text-center"
                >
                  Build Custom Retirement Glidepath &rarr;
                </button>
              </div>
            </div>
          )}

          {/* ================= 4. GOAL PLANNING CALCULATOR ================= */}
          {activeCalc === 'goal' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Milestone &amp; Goal Planning Calculator
                  </h3>
                  <p className="text-xs text-slate-500">
                    Plan for luxury real estate, child education, or venture capital seed requirements.
                  </p>
                </div>

                <div className="space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">Target Goal Amount</span>
                    <span className="font-mono font-bold text-amber-700">
                      {formatCurrency(goalAmount, currency)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="5000000"
                    step="25000"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-700">Years to Achieve: {goalYears}</span>
                    <input
                      type="range"
                      min="1"
                      max="25"
                      value={goalYears}
                      onChange={(e) => setGoalYears(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>

                  <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-700">Expected CAGR: {goalReturnRate}%</span>
                    <input
                      type="range"
                      min="6"
                      max="20"
                      value={goalReturnRate}
                      onChange={(e) => setGoalReturnRate(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">Existing Seed Investment Available</span>
                    <span className="font-mono font-bold text-slate-900">
                      {formatCurrency(goalInitialSeed, currency)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="5000"
                    value={goalInitialSeed}
                    onChange={(e) => setGoalInitialSeed(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-6">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Required Monthly Saving
                  </span>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-amber-400 font-mono">
                    {formatCurrency(reqGoalMonthlySIP, currency)} / mo
                  </div>
                  <p className="text-[11px] text-slate-400">
                    To reach {formatCurrency(goalAmount, currency)} in {goalYears} Years
                  </p>
                </div>

                <div className="p-3.5 bg-slate-800 rounded-xl text-xs space-y-1 border border-slate-700">
                  <div className="flex justify-between text-slate-400">
                    <span>Seed Capital Value at Maturity:</span>
                    <span className="text-white font-mono">{formatCurrency(goalFutureSeed, currency)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Remaining Corpus Gap:</span>
                    <span className="text-amber-400 font-mono font-bold">
                      {formatCurrency(remainingGoal, currency)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={openBookingModal}
                  className="w-full py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors text-center"
                >
                  Create Goal Mandate &rarr;
                </button>
              </div>
            </div>
          )}

          {/* ================= 5. COMPOUND INTEREST CALCULATOR ================= */}
          {activeCalc === 'compound' && (
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  Compound Interest &amp; Wealth Compounding Curve
                </h3>
                <p className="text-xs text-slate-500">
                  Visualize exponential capital compounding with yearly contributions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-700">Initial Principal:</span>
                  <input
                    type="number"
                    value={compoundPrincipal}
                    onChange={(e) => setCompoundPrincipal(Number(e.target.value))}
                    className="w-full p-2 bg-white rounded border border-slate-300 font-mono text-xs"
                  />
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-700">Annual Additions:</span>
                  <input
                    type="number"
                    value={compoundAnnualAdd}
                    onChange={(e) => setCompoundAnnualAdd(Number(e.target.value))}
                    className="w-full p-2 bg-white rounded border border-slate-300 font-mono text-xs"
                  />
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-700">Interest Rate (% p.a):</span>
                  <input
                    type="number"
                    value={compoundRate}
                    onChange={(e) => setCompoundRate(Number(e.target.value))}
                    className="w-full p-2 bg-white rounded border border-slate-300 font-mono text-xs"
                  />
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-[11px] font-bold text-slate-700">Tenure (Years):</span>
                  <input
                    type="number"
                    value={compoundYears}
                    onChange={(e) => setCompoundYears(Number(e.target.value))}
                    className="w-full p-2 bg-white rounded border border-slate-300 font-mono text-xs"
                  />
                </div>
              </div>

              {/* Compounding Chart */}
              <div className="bg-slate-900 p-5 rounded-2xl text-white">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                      Compounded Portfolio Value
                    </span>
                    <div className="font-display text-2xl font-bold font-mono">
                      {formatCurrency(compoundFinalMaturity, currency)}
                    </div>
                  </div>
                  <div className="text-right text-xs">
                    <span className="text-slate-400 block">Total Interest Accrued:</span>
                    <span className="text-emerald-400 font-bold font-mono">
                      +{formatCurrency(compoundTotalInterest, currency)}
                    </span>
                  </div>
                </div>

                <div className="h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={compoundSchedule}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                      <XAxis dataKey="year" tick={{ fill: '#94a3b8', fontSize: 11 }} />
                      <YAxis
                        tick={{ fill: '#94a3b8', fontSize: 11 }}
                        tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                      />
                      <Tooltip
                        formatter={(val: any) => [formatCurrency(Number(val), currency), 'Value']}
                        contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px' }}
                      />
                      <Bar dataKey="invested" name="Invested Capital" fill="#64748b" stackId="a" />
                      <Bar dataKey="interest" name="Compounded Gain" fill="#f59e0b" stackId="a" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* ================= 6. LOAN / EMI WEALTH LEVERAGE ================= */}
          {activeCalc === 'emi' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Loan, Mortgage &amp; Wealth Leverage Calculator
                  </h3>
                  <p className="text-xs text-slate-500">
                    Calculate monthly debt service and analyze liquidity cost vs portfolio return spread.
                  </p>
                </div>

                <div className="space-y-1 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-slate-700">Loan / Credit Principal</span>
                    <span className="font-mono font-bold text-amber-700">
                      {formatCurrency(loanPrincipal, currency)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="2000000"
                    step="10000"
                    value={loanPrincipal}
                    onChange={(e) => setLoanPrincipal(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-700">Interest Rate: {loanRate}%</span>
                    <input
                      type="range"
                      min="3"
                      max="18"
                      step="0.25"
                      value={loanRate}
                      onChange={(e) => setLoanRate(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>

                  <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-700">Tenure: {loanTenureYears} Years</span>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={loanTenureYears}
                      onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-5">
                <div className="text-center space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Monthly Loan Payment (EMI)
                  </span>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-amber-400 font-mono">
                    {formatCurrency(loanEMI, currency)} / mo
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Total Payment: {formatCurrency(loanTotalPayment, currency)}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-slate-400 block">Principal</span>
                    <span className="font-mono font-bold text-white">
                      {formatCurrency(loanPrincipal, currency)}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                    <span className="text-[10px] text-rose-400 block">Total Interest</span>
                    <span className="font-mono font-bold text-rose-300">
                      {formatCurrency(loanTotalInterest, currency)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={openBookingModal}
                  className="w-full py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors text-center"
                >
                  Consult Structured Credit Desk &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
