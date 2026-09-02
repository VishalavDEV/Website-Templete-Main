import React, { useState } from 'react';
import { 
  Pill, 
  Check, 
  Plus, 
  Clock, 
  AlertCircle, 
  Sun,
  Sunrise,
  Sunset,
  Moon,
  Sparkles
} from 'lucide-react';
import { Medication } from '../types';

interface MedicationChecklistProps {
  medications: Medication[];
  onToggleMedication: (id: string) => void;
  onOpenAddModal: () => void;
}

export const MedicationChecklist: React.FC<MedicationChecklistProps> = ({
  medications,
  onToggleMedication,
  onOpenAddModal,
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const completedCount = medications.filter(m => m.completed).length;
  const totalCount = medications.length;
  const adherenceRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const filteredMedications = medications.filter(m => {
    if (filter === 'pending') return !m.completed;
    if (filter === 'completed') return m.completed;
    return true;
  });

  const getTimingIcon = (timing: string) => {
    switch (timing) {
      case 'morning':
        return <Sunrise className="w-3.5 h-3.5 text-amber-500" />;
      case 'afternoon':
        return <Sun className="w-3.5 h-3.5 text-orange-500" />;
      case 'evening':
        return <Sunset className="w-3.5 h-3.5 text-sky-500" />;
      case 'bedtime':
      default:
        return <Moon className="w-3.5 h-3.5 text-indigo-500" />;
    }
  };

  return (
    <div 
      id="medication-reminder-checklist-card"
      className="bg-white rounded-3xl border border-slate-100 p-5 sm:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full"
    >
      {/* Card Header with Adherence Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Pill className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 text-base font-['Outfit']">Medication Reminder</h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                Today's Schedule
              </span>
            </div>
            <p className="text-xs text-slate-500">Track doses, time cues & prescription refills</p>
          </div>
        </div>

        {/* Add Medication CTA */}
        <button
          onClick={onOpenAddModal}
          id="add-medication-checklist-btn"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 transition-all cursor-pointer shadow-xs active:scale-98 self-start sm:self-auto"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Dose</span>
        </button>
      </div>

      {/* Daily Adherence Progress Bar */}
      <div className="my-4 p-3.5 rounded-2xl bg-gradient-to-r from-teal-50/70 to-cyan-50/50 border border-teal-100/70">
        <div className="flex items-center justify-between text-xs mb-1.5 font-semibold text-slate-700">
          <span className="flex items-center gap-1 text-teal-800">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Today's Adherence Score
          </span>
          <span className="text-teal-900 font-extrabold">{completedCount} of {totalCount} Taken ({adherenceRate}%)</span>
        </div>
        <div className="w-full h-2.5 bg-white rounded-full overflow-hidden p-0.5 border border-teal-200/50">
          <div
            className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${adherenceRate}%` }}
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            filter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          All ({medications.length})
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            filter === 'pending' ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Due ({medications.filter(m => !m.completed).length})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
            filter === 'completed' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          Taken ({completedCount})
        </button>
      </div>

      {/* Medication List */}
      <div className="space-y-2.5 flex-1 overflow-y-auto pr-0.5 max-h-[360px]">
        {filteredMedications.map((med) => (
          <div
            key={med.id}
            onClick={() => onToggleMedication(med.id)}
            className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 group ${
              med.completed
                ? 'bg-slate-50/60 border-slate-200/60 opacity-85'
                : 'bg-white hover:bg-teal-50/30 border-slate-200 hover:border-teal-300 shadow-xs'
            }`}
          >
            {/* Custom Checkbox */}
            <div className="pt-0.5 shrink-0">
              <button
                type="button"
                className={`w-5 h-5 rounded-lg flex items-center justify-center transition-all ${
                  med.completed
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'border-2 border-slate-300 group-hover:border-teal-500 bg-white'
                }`}
              >
                {med.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </button>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-bold text-slate-900 ${med.completed ? 'line-through text-slate-400' : ''}`}>
                  {med.name}
                </span>
                <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.2 rounded-md">
                  {med.dosage}
                </span>
              </div>

              <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                {med.instructions}
              </p>

              <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-500 flex-wrap">
                <span className="flex items-center gap-1 font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                  {getTimingIcon(med.timing)}
                  <span>{med.timeLabel}</span>
                </span>

                {med.remainingDays <= 14 ? (
                  <span className="flex items-center gap-1 text-amber-700 bg-amber-50 font-semibold px-2 py-0.5 rounded-md">
                    <AlertCircle className="w-3 h-3 text-amber-600" />
                    {med.remainingDays} days left (Refill soon)
                  </span>
                ) : (
                  <span className="text-slate-400">
                    {med.remainingDays} days remaining
                  </span>
                )}
              </div>
            </div>

            {/* Quick Status */}
            <div className="shrink-0 text-right">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                med.completed 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : 'bg-teal-100 text-teal-800'
              }`}>
                {med.completed ? 'Completed' : 'Due Now'}
              </span>
            </div>
          </div>
        ))}

        {filteredMedications.length === 0 && (
          <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <Pill className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-50" />
            <p className="text-xs font-semibold text-slate-600">No medications found in this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};
