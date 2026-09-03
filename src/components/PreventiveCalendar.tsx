import React, { useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  AlertCircle,
  Plus,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Award,
  Activity,
  Heart,
  Stethoscope,
  Filter,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PreventiveItem, PreventionStatus, PreventionCategory } from '../types';

interface PreventiveCalendarProps {
  items: PreventiveItem[];
  onSchedulePrevention: () => void;
  onToggleComplete: (id: string) => void;
}

export const PreventiveCalendar: React.FC<PreventiveCalendarProps> = ({
  items,
  onSchedulePrevention,
  onToggleComplete,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.status === activeFilter;
  });

  const handleComplete = (id: string, currentStatus: PreventionStatus) => {
    if (currentStatus !== 'completed') {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#2D5A3F', '#D4AF37', '#8DA385', '#F5EFEB'],
        });
      } catch (e) {
        // fallback
      }
    }
    onToggleComplete(id);
  };

  // Compute progress numbers
  const screeningsTotal = items.filter(i => i.category === 'Screening').length || 6;
  const screeningsDone = items.filter(i => i.category === 'Screening' && i.status === 'completed').length || 4;

  const vaccinesTotal = items.filter(i => i.category === 'Vaccination').length || 7;
  const vaccinesDone = items.filter(i => i.category === 'Vaccination' && i.status === 'completed').length || 5;

  const assessmentsTotal = items.filter(i => i.category === 'Assessment' || i.category === 'Checkup').length || 4;
  const assessmentsDone = items.filter(i => (i.category === 'Assessment' || i.category === 'Checkup') && i.status === 'completed').length || 3;

  const overallProgress = Math.round(
    ((screeningsDone + vaccinesDone + assessmentsDone) / (screeningsTotal + vaccinesTotal + assessmentsTotal)) * 100
  );

  const getStatusBadge = (status: PreventionStatus) => {
    switch (status) {
      case 'completed':
        return {
          label: 'Completed',
          className: 'bg-[#E2F1E6] text-[#225035] border-[#BDE0C7]',
          icon: CheckCircle2,
        };
      case 'due_soon':
        return {
          label: 'Due Soon',
          className: 'bg-[#FDF0DB] text-[#935D12] border-[#F2D7A5]',
          icon: Clock,
        };
      case 'upcoming':
        return {
          label: 'Upcoming',
          className: 'bg-[#EBF1FA] text-[#1E4B7A] border-[#C8DBEE]',
          icon: CalendarDays,
        };
      case 'recommended':
        return {
          label: 'Recommended',
          className: 'bg-[#F2EDFB] text-[#5A3896] border-[#D9C9F2]',
          icon: Sparkles,
        };
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5E2DD]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#A8904F] uppercase tracking-wider">
            <CalendarDays className="w-4 h-4 text-[#A8904F]" />
            <span>Proactive Longevity & Screening Cadence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#2D3A2D] mt-1">
            Preventive Care Calendar
          </h1>
          <p className="text-sm text-[#5A5A40] mt-1 max-w-2xl">
            Stay ahead of chronic risks with age- and risk-tailored health screenings, immunizations, and annual biomarker assessments.
          </p>
        </div>

        {/* Action Button */}
        <button
          id="plan-my-prevention-btn"
          onClick={onSchedulePrevention}
          className="px-5 py-2.5 rounded-xl bg-[#2D3A2D] hover:bg-[#1F2B1F] text-xs font-semibold text-white flex items-center space-x-2 shadow-sm transition-all shrink-0"
        >
          <Plus className="w-4 h-4 text-[#A8904F]" />
          <span>Plan My Prevention</span>
        </button>
      </div>

      {/* 2026 Yearly Prevention Progress Card */}
      <div className="rounded-2xl bg-[#2D3A2D] text-white p-6 sm:p-8 border border-white/10 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#A8904F] uppercase tracking-widest">
              <Award className="w-4 h-4" />
              <span>Annual Health Milestone</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-1">
              2026 Prevention Progress
            </h2>
            <p className="text-xs text-white/70 mt-1 max-w-md">
              You have fulfilled {screeningsDone + vaccinesDone + assessmentsDone} of {screeningsTotal + vaccinesTotal + assessmentsTotal} proactive longevity goals scheduled for 2026.
            </p>
          </div>

          {/* Progress Counters Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 shrink-0">
            
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <p className="text-[10px] text-white/60 uppercase font-mono tracking-wider font-semibold">Screenings</p>
              <p className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                {screeningsDone}<span className="text-sm font-normal text-white/50">/{screeningsTotal}</span>
              </p>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-[#A8904F] h-full rounded-full transition-all duration-500"
                  style={{ width: `${(screeningsDone / screeningsTotal) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <p className="text-[10px] text-white/60 uppercase font-mono tracking-wider font-semibold">Vaccines</p>
              <p className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                {vaccinesDone}<span className="text-sm font-normal text-white/50">/{vaccinesTotal}</span>
              </p>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(vaccinesDone / vaccinesTotal) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-center">
              <p className="text-[10px] text-white/60 uppercase font-mono tracking-wider font-semibold">Checkups</p>
              <p className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                {assessmentsDone}<span className="text-sm font-normal text-white/50">/{assessmentsTotal}</span>
              </p>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-amber-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(assessmentsDone / assessmentsTotal) * 100}%` }}
                />
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-1">
        {[
          { id: 'all', label: 'All Actions' },
          { id: 'due_soon', label: 'Due Soon' },
          { id: 'upcoming', label: 'Upcoming' },
          { id: 'recommended', label: 'Recommended' },
          { id: 'completed', label: 'Completed' },
        ].map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-[#2D3A2D] text-white border-[#2D3A2D] shadow-xs'
                  : 'bg-white text-[#5A5A40] border-[#E5E2DD] hover:bg-[#F5F2ED]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Preventive Timeline Items */}
      <div className="space-y-4">
        {filteredItems.map((item) => {
          const badge = getStatusBadge(item.status);
          const BadgeIcon = badge.icon;

          return (
            <div
              key={item.id}
              className={`group p-5 rounded-2xl border transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                item.status === 'completed'
                  ? 'bg-white/60 border-[#E5E2DD] opacity-80'
                  : 'bg-white border-[#E5E2DD] hover:border-[#2D3A2D] shadow-sm hover:shadow-md'
              }`}
            >
              
              {/* Date & Info */}
              <div className="flex items-start space-x-4">
                
                {/* Date Block */}
                <div className="w-14 h-14 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] flex flex-col items-center justify-center shrink-0 text-[#2D3A2D]">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#5A5A40]">
                    {item.dueDate.split(' ')[0]}
                  </span>
                  <span className="text-lg font-bold font-serif leading-none mt-0.5">
                    {item.dueDate.split(' ')[1]?.replace(',', '') || '01'}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${badge.className}`}>
                      <BadgeIcon className="w-3 h-3" />
                      <span>{badge.label}</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#5A5A40]">
                      {item.category} • {item.frequency}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-serif text-[#2D3A2D] group-hover:text-[#2D3A2D] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5A5A40] max-w-2xl">
                    {item.description}
                  </p>

                  <p className="text-[11px] text-[#5A5A40]">
                    Target Provider: <strong className="font-medium text-[#2D3A2D]">{item.provider}</strong>
                    {item.notes && <span> — {item.notes}</span>}
                  </p>
                </div>

              </div>

              {/* Action Toggle */}
              <div className="flex items-center space-x-2 shrink-0 self-end md:self-center">
                <button
                  onClick={() => handleComplete(item.id, item.status)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                    item.status === 'completed'
                      ? 'bg-green-100 text-green-900 border border-green-200'
                      : 'bg-[#2D3A2D] text-white hover:bg-[#1F2B1F] shadow-xs'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.status === 'completed' ? 'Completed' : 'Mark Done'}</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
