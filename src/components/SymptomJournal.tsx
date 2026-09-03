import React, { useState } from 'react';
import {
  BookOpen,
  Plus,
  BarChart3,
  Calendar,
  Clock,
  Zap,
  Activity,
  Trash2,
  Smile,
  Meh,
  Frown,
  CheckCircle2,
  Info,
  Layers,
  ChevronDown,
} from 'lucide-react';
import { SymptomLog } from '../types';

interface SymptomJournalProps {
  logs: SymptomLog[];
  onAddLog: () => void;
  onDeleteLog: (id: string) => void;
}

export const SymptomJournal: React.FC<SymptomJournalProps> = ({
  logs,
  onAddLog,
  onDeleteLog,
}) => {
  const [showPatterns, setShowPatterns] = useState<boolean>(true);

  // Compute pattern statistics
  const symptomFrequencies = logs.reduce((acc, curr) => {
    acc[curr.symptom] = (acc[curr.symptom] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const sortedPatterns: [string, number][] = (Object.entries(symptomFrequencies) as [string, number][]).sort(
    (a, b) => b[1] - a[1]
  );

  const freqValues = Object.values(symptomFrequencies) as number[];
  const maxFreq = freqValues.length > 0 ? Math.max(...freqValues, 1) : 1;

  const renderSeverityDots = (severity: number) => {
    return (
      <div className="flex items-center space-x-1" title={`Severity ${severity}/5`}>
        {[1, 2, 3, 4, 5].map((dot) => (
          <span
            key={dot}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              dot <= severity
                ? severity >= 4
                  ? 'bg-red-700'
                  : severity === 3
                  ? 'bg-[#A8904F]'
                  : 'bg-emerald-600'
                : 'bg-[#E5E2DD]'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5E2DD]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-[#A8904F] uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#A8904F]" />
            <span>Self-Observed Longitudinal Health Data</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-[#2D3A2D] mt-1">
            Your Symptom Journal
          </h1>
          <p className="text-sm text-[#5A5A40] mt-1 max-w-2xl">
            Track daily bodily sensations, headache triggers, and respiratory patterns to build an accurate clinical picture for consultations.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={() => setShowPatterns(!showPatterns)}
            className="px-4 py-2 rounded-xl bg-[#F5F2ED] hover:bg-[#E5E2DD] text-xs font-semibold text-[#2D3A2D] border border-[#E5E2DD] flex items-center space-x-1.5 transition-all shadow-xs"
          >
            <BarChart3 className="w-3.5 h-3.5 text-[#A8904F]" />
            <span>{showPatterns ? 'Hide Patterns' : 'View Patterns'}</span>
          </button>

          <button
            id="add-symptom-entry-btn"
            onClick={onAddLog}
            className="px-5 py-2 rounded-xl bg-[#2D3A2D] hover:bg-[#1F2B1F] text-xs font-semibold text-white flex items-center space-x-2 shadow-sm transition-all"
          >
            <Plus className="w-4 h-4 text-[#A8904F]" />
            <span>Add Entry</span>
          </button>
        </div>
      </div>

      {/* Patterns & Frequency Insights Panel */}
      {showPatterns && (
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E2DD] shadow-sm space-y-5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DD]">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-[#A8904F]" />
              <span className="text-sm font-bold font-serif text-[#2D3A2D]">
                Symptom Patterns This Month
              </span>
            </div>
            <span className="text-xs text-[#5A5A40] font-mono">
              {logs.length} Total Observations Recorded
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sortedPatterns.map(([symptom, count]) => (
              <div
                key={symptom}
                className="p-4 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#2D3A2D]">{symptom}</span>
                  <span className="text-xs font-mono font-bold text-[#2D3A2D] bg-white border border-[#E5E2DD] px-2 py-0.5 rounded-md">
                    {count} {count === 1 ? 'time' : 'times'}
                  </span>
                </div>
                <div className="w-full bg-[#E5E2DD] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#2D3A2D] h-full rounded-full transition-all duration-500"
                    style={{ width: `${(count / maxFreq) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Symptom Journal Entries Timeline Feed */}
      <div className="space-y-4">
        <h3 className="text-base font-bold font-serif text-[#2D3A2D]">
          Observation History
        </h3>

        {logs.length === 0 ? (
          <div className="p-12 rounded-2xl bg-white border border-[#E5E2DD] text-center space-y-3 shadow-xs">
            <BookOpen className="w-8 h-8 text-[#5A5A40] mx-auto" />
            <p className="text-sm font-bold font-serif text-[#2D3A2D]">Your journal is currently clean</p>
            <p className="text-xs text-[#5A5A40]">Log any headache, fatigue, or discomfort as soon as it occurs.</p>
            <button
              onClick={onAddLog}
              className="text-xs font-bold text-[#A8904F] underline"
            >
              Add your first entry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {logs.map((log) => (
              <div
                key={log.id}
                className="p-5 rounded-2xl bg-white border border-[#E5E2DD] hover:border-[#2D3A2D] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div>
                  
                  {/* Top Bar: Symptom Name & Date */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold font-serif text-[#2D3A2D]">
                        {log.symptom}
                      </h4>
                      <p className="text-[11px] text-[#5A5A40] font-mono mt-0.5">
                        {log.date} at {log.time} • {log.duration}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] text-[#5A5A40] font-mono uppercase font-semibold">Severity</p>
                      <div className="mt-1">{renderSeverityDots(log.severity)}</div>
                    </div>
                  </div>

                  {/* Trigger Callout */}
                  {log.trigger && (
                    <div className="mt-3 p-2.5 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] text-xs text-[#5A5A40] flex items-start space-x-2">
                      <Zap className="w-3.5 h-3.5 text-[#A8904F] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#2D3A2D]">Trigger:</strong> {log.trigger}
                      </div>
                    </div>
                  )}

                  {/* Notes */}
                  {log.notes && (
                    <p className="mt-3 text-xs text-[#5A5A40] leading-relaxed">
                      {log.notes}
                    </p>
                  )}

                  {/* Relief factor */}
                  {log.reliefFactor && (
                    <p className="mt-2 text-[11px] text-[#5A5A40]">
                      <strong>Relief:</strong> {log.reliefFactor}
                    </p>
                  )}

                </div>

                {/* Footer delete */}
                <div className="pt-2 border-t border-[#E5E2DD] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#5A5A40]">
                    Mood: <strong className="text-[#2D3A2D]">{log.mood || 'Moderate'}</strong>
                  </span>
                  <button
                    onClick={() => onDeleteLog(log.id)}
                    className="p-1 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                    title="Delete entry"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* Helpful Clinical Guidance Note */}
      <div className="p-4 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] flex items-start space-x-3 text-xs text-[#5A5A40]">
        <Info className="w-4 h-4 text-[#A8904F] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Clinical Communication Note:</strong> Tracking symptoms can help you communicate more clearly with a healthcare professional during routine checkups, identifying subtle environmental triggers or allergy patterns.
        </p>
      </div>

    </div>
  );
};
