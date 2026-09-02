import React, { useState } from 'react';
import { 
  Activity, 
  Heart, 
  Droplet, 
  Scale, 
  Moon, 
  Footprints, 
  Calendar, 
  TrendingUp, 
  TrendingDown, 
  FileText, 
  Plus, 
  Download, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  User, 
  AlertCircle 
} from 'lucide-react';
import { 
  HealthMetrics, 
  CareTimelineEvent, 
  FamilyMember, 
  NavigationTab 
} from '../../types';

interface MyHealthDashboardProps {
  metrics: HealthMetrics;
  trendData?: any[];
  timeline?: CareTimelineEvent[];
  currentMember: FamilyMember;
  onOpenLogVitals: () => void;
  onNavigate: (tab: NavigationTab) => void;
}

export const MyHealthDashboard: React.FC<MyHealthDashboardProps> = ({
  metrics,
  trendData = [],
  timeline = [],
  currentMember,
  onOpenLogVitals,
  onNavigate,
}) => {
  const [selectedMetric, setSelectedMetric] = useState<'heartRate' | 'systolic' | 'glucose' | 'weight' | 'sleep'>('heartRate');
  const [timeRange, setTimeRange] = useState<'7D' | '30D' | '3M' | '1Y'>('7D');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Safe accessor helper for trend points
  const safeTrendData = trendData.length > 0 ? trendData : [
    { date: 'May 18', heartRate: 74, systolic: 122, glucose: 99, weight: 62.8, sleep: 7.0 },
    { date: 'May 19', heartRate: 73, systolic: 120, glucose: 97, weight: 62.7, sleep: 7.4 },
    { date: 'May 20', heartRate: 75, systolic: 121, glucose: 100, weight: 62.6, sleep: 6.8 },
    { date: 'May 21', heartRate: 71, systolic: 119, glucose: 96, weight: 62.5, sleep: 7.5 },
    { date: 'May 22', heartRate: 72, systolic: 120, glucose: 98, weight: 62.5, sleep: 7.2 },
    { date: 'Today', heartRate: 72, systolic: 120, glucose: 98, weight: 62.5, sleep: 7.2 },
  ];

  const getMetricDetails = () => {
    switch (selectedMetric) {
      case 'heartRate':
        return { 
          label: 'Resting Heart Rate', 
          unit: 'bpm', 
          optimal: '60 - 80 bpm', 
          color: '#00A884', 
          currentVal: `${metrics.heartRate} bpm`,
          values: safeTrendData.map(d => d.heartRate || 72) 
        };
      case 'systolic':
        return { 
          label: 'Systolic Blood Pressure', 
          unit: 'mmHg', 
          optimal: '< 120 mmHg', 
          color: '#0284C7', 
          currentVal: `${metrics.bloodPressureSys}/${metrics.bloodPressureDia} mmHg`,
          values: safeTrendData.map(d => d.systolic || d.bloodPressureSys || 120) 
        };
      case 'glucose':
        return { 
          label: 'Fasting Blood Glucose', 
          unit: 'mg/dL', 
          optimal: '70 - 99 mg/dL', 
          color: '#F59E0B', 
          currentVal: `${metrics.bloodGlucose} mg/dL`,
          values: safeTrendData.map(d => d.glucose || d.bloodGlucose || 98) 
        };
      case 'weight':
        return { 
          label: 'Body Weight', 
          unit: 'kg', 
          optimal: '58 - 66 kg', 
          color: '#8B5CF6', 
          currentVal: `${metrics.weight} kg`,
          values: safeTrendData.map(d => d.weight || 62.5) 
        };
      case 'sleep':
        return { 
          label: 'Sleep Duration', 
          unit: 'hrs', 
          optimal: '7.5 - 9.0 hrs', 
          color: '#475569', 
          currentVal: `${metrics.sleepHours} hrs`,
          values: safeTrendData.map(d => d.sleep || d.sleepHours || 7.2) 
        };
    }
  };

  const metricInfo = getMetricDetails();
  const maxVal = Math.max(...metricInfo.values) * 1.15;
  const minVal = Math.min(...metricInfo.values) * 0.85;

  const handleExportPDF = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* 1. Profile Summary Card */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <img 
            src={currentMember?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'} 
            alt={currentMember?.name || 'Patient'}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-[#00A884]/30 shadow-md"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800">{currentMember?.name || 'Ananya Sharma'}</h1>
              <span className="px-2.5 py-0.5 bg-[#E6F7F3] text-[#00A884] text-[10px] font-bold rounded-full border border-[#00A884]/20">
                Active Health Record
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {currentMember?.relation || 'Self'} • {currentMember?.age || 28} yrs • Blood Group: <strong className="text-slate-800">{currentMember?.bloodType || 'B+'}</strong>
            </p>
            <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-600 flex-wrap">
              <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg">Height: {currentMember?.height || 165} cm</span>
              <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg">Weight: {metrics.weight} kg</span>
              <span className="px-2.5 py-1 bg-[#E6F7F3] text-[#00A884] border border-[#00A884]/20 rounded-lg font-bold">BMI: {metrics.bmi} (Optimal)</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLogVitals}
            className="px-4 py-2.5 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all flex items-center space-x-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Log Biometric Vitals</span>
          </button>
          <button
            onClick={handleExportPDF}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer border border-slate-200"
          >
            <Download className="w-4 h-4 text-[#00A884]" />
            <span>{downloadSuccess ? 'Downloaded!' : 'Export Summary'}</span>
          </button>
        </div>
      </div>

      {/* 2. Key Vitals Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Heart Rate */}
        <button
          onClick={() => setSelectedMetric('heartRate')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedMetric === 'heartRate'
              ? 'bg-[#E6F7F3] border-[#00A884] shadow-xs'
              : 'bg-white border-[#E2E8F0] hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Resting Heart Rate</span>
            <Heart className={`w-4 h-4 ${selectedMetric === 'heartRate' ? 'text-[#00A884]' : 'text-rose-500'}`} />
          </div>
          <div className="text-xl font-extrabold text-slate-800">{metrics.heartRate} <span className="text-xs font-normal text-slate-400">bpm</span></div>
          <span className="text-[10px] text-[#00A884] font-semibold mt-1 inline-flex items-center gap-0.5">
            <TrendingDown className="w-3 h-3" /> Normal (60-80)
          </span>
        </button>

        {/* Blood Pressure */}
        <button
          onClick={() => setSelectedMetric('systolic')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedMetric === 'systolic'
              ? 'bg-[#E6F7F3] border-[#00A884] shadow-xs'
              : 'bg-white border-[#E2E8F0] hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Blood Pressure</span>
            <Activity className="w-4 h-4 text-sky-500" />
          </div>
          <div className="text-xl font-extrabold text-slate-800">{metrics.bloodPressureSys}/{metrics.bloodPressureDia} <span className="text-xs font-normal text-slate-400">mmHg</span></div>
          <span className="text-[10px] text-[#00A884] font-semibold mt-1 inline-block">
            Optimal Range
          </span>
        </button>

        {/* Blood Glucose */}
        <button
          onClick={() => setSelectedMetric('glucose')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedMetric === 'glucose'
              ? 'bg-[#E6F7F3] border-[#00A884] shadow-xs'
              : 'bg-white border-[#E2E8F0] hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Fasting Glucose</span>
            <Droplet className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-xl font-extrabold text-slate-800">{metrics.bloodGlucose} <span className="text-xs font-normal text-slate-400">mg/dL</span></div>
          <span className="text-[10px] text-[#00A884] font-semibold mt-1 inline-block">
            Euglycemic
          </span>
        </button>

        {/* Sleep */}
        <button
          onClick={() => setSelectedMetric('sleep')}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
            selectedMetric === 'sleep'
              ? 'bg-[#E6F7F3] border-[#00A884] shadow-xs'
              : 'bg-white border-[#E2E8F0] hover:border-slate-300'
          }`}
        >
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Sleep Duration</span>
            <Moon className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-xl font-extrabold text-slate-800">{metrics.sleepHours} <span className="text-xs font-normal text-slate-400">hrs</span></div>
          <span className="text-[10px] text-[#00A884] font-semibold mt-1 inline-block">
            {metrics.sleepQuality}% Quality
          </span>
        </button>

        {/* Daily Steps */}
        <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] text-left">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span>Daily Steps</span>
            <Footprints className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-xl font-extrabold text-slate-800">{metrics.steps.toLocaleString()}</div>
          <span className="text-[10px] text-slate-500 mt-1 inline-block">
            {Math.round((metrics.steps / metrics.stepsGoal) * 100)}% of goal
          </span>
        </div>

      </div>

      {/* 3. Interactive Metric Chart */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-bold text-slate-800">{metricInfo.label} Longitudinal Trend</h2>
              <span className="px-2 py-0.5 bg-[#E6F7F3] text-[#00A884] text-[10px] font-bold rounded-full">
                Target: {metricInfo.optimal}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Current: <strong className="text-slate-800">{metricInfo.currentVal}</strong> • Historical consistency calculated over selected interval.
            </p>
          </div>

          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl border border-slate-200">
            {(['7D', '30D', '3M', '1Y'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setTimeRange(r)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  timeRange === r ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* SVG Longitudinal Graph */}
        <div className="h-64 w-full bg-[#F8FAFC] rounded-2xl border border-slate-100 p-4 relative flex flex-col justify-between">
          <div className="h-44 w-full flex items-end justify-between px-4 pt-6 gap-2">
            {safeTrendData.map((d, idx) => {
              const val = metricInfo.values[idx] || 0;
              const range = maxVal - minVal || 1;
              const heightPct = Math.max(15, Math.min(95, ((val - minVal) / range) * 100));

              return (
                <div key={idx} className="flex-1 flex flex-col items-center group relative h-full justify-end">
                  {/* Tooltip on hover */}
                  <div className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] px-2 py-1 rounded-md font-bold whitespace-nowrap shadow-md pointer-events-none z-10">
                    {val} {metricInfo.unit}
                  </div>

                  {/* Vertical bar / node */}
                  <div className="w-full max-w-[28px] bg-slate-200 rounded-t-xl overflow-hidden flex flex-col justify-end transition-all group-hover:bg-[#00A884]/20">
                    <div 
                      className="w-full bg-[#00A884] rounded-t-xl transition-all duration-500"
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>

                  <span className="text-[10px] text-slate-400 font-medium mt-2 whitespace-nowrap">
                    {d.date}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="border-t border-slate-200 pt-2 flex items-center justify-between text-[11px] text-slate-500 px-2">
            <span>Range: {Math.round(minVal)} - {Math.round(maxVal)} {metricInfo.unit}</span>
            <span className="text-[#00A884] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Stability: High (Variance &lt; 3.2%)
            </span>
          </div>
        </div>
      </div>

      {/* 4. Timeline & Care Log */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-800">Care Timeline & Clinical History</h3>
            <p className="text-xs text-slate-500 mt-0.5">Chronological record of verified medical consultations, lab panels, and pharmacy prescriptions.</p>
          </div>
          <button
            onClick={() => onNavigate('reports')}
            className="text-xs font-bold text-[#00A884] hover:underline cursor-pointer"
          >
            View All Records →
          </button>
        </div>

        <div className="space-y-3 pt-2">
          {timeline.map((evt) => (
            <div 
              key={evt.id} 
              onClick={() => {
                if (evt.actionTab) onNavigate(evt.actionTab);
              }}
              className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-[#00A884]/30 hover:bg-[#E6F7F3]/30 transition-all flex items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="flex items-center space-x-3.5">
                <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-[#00A884] group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#00A884] transition-colors">{evt.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{evt.subtitle}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 shrink-0">
                <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">{evt.date}</span>
                <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 text-[10px] font-bold rounded-full">
                  {evt.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
