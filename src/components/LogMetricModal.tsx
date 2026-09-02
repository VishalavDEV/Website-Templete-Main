import React, { useState } from 'react';
import { 
  Activity, 
  Heart, 
  Zap, 
  Wind, 
  X, 
  Check, 
  Plus, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { MetricReading } from '../types';

interface LogMetricModalProps {
  initialMetricId?: string;
  onClose: () => void;
  onSaveMetric: (id: string, value: string, notes?: string) => void;
}

export const LogMetricModal: React.FC<LogMetricModalProps> = ({
  initialMetricId = 'bp',
  onClose,
  onSaveMetric,
}) => {
  const [selectedType, setSelectedType] = useState<string>(initialMetricId);
  const [val1, setVal1] = useState('118');
  const [val2, setVal2] = useState('76');
  const [singleVal, setSingleVal] = useState('72');
  const [notes, setNotes] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    let finalValue = singleVal;
    if (selectedType === 'bp') {
      finalValue = `${val1}/${val2}`;
    }
    onSaveMetric(selectedType, finalValue, notes);
    onClose();
  };

  return (
    <div 
      id="log-metric-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4"
    >
      <div className="bg-white max-w-md w-full rounded-3xl p-6 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-150 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">Log Health Metric</h3>
            <p className="text-xs text-slate-500">Record new biometric data into your medical file</p>
          </div>
        </div>

        {/* Metric Type Selector */}
        <div className="grid grid-cols-4 gap-2 mb-5">
          {[
            { id: 'bp', label: 'Blood Pressure', icon: Activity, unit: 'mmHg' },
            { id: 'hr', label: 'Heart Rate', icon: Heart, unit: 'bpm' },
            { id: 'glucose', label: 'Glucose', icon: Zap, unit: 'mg/dL' },
            { id: 'spo2', label: 'SpO2 Oxygen', icon: Wind, unit: '%' },
          ].map(t => {
            const IconComp = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setSelectedType(t.id);
                  if (t.id === 'hr') setSingleVal('72');
                  if (t.id === 'glucose') setSingleVal('94');
                  if (t.id === 'spo2') setSingleVal('99');
                }}
                className={`p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-1 text-center transition-all cursor-pointer ${
                  selectedType === t.id
                    ? 'bg-teal-500 text-white border-teal-500 shadow-md shadow-teal-500/20'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span className="text-[10px] font-bold leading-tight">{t.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="space-y-4">
          {selectedType === 'bp' ? (
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">
                Systolic / Diastolic (mmHg)
              </label>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <span className="text-[10px] text-slate-400 block mb-1">Systolic (Top)</span>
                  <input
                    type="number"
                    value={val1}
                    onChange={(e) => setVal1(e.target.value)}
                    required
                    placeholder="120"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-teal-500"
                  />
                </div>
                <span className="text-xl font-bold text-slate-300 pt-4">/</span>
                <div className="flex-1">
                  <span className="text-[10px] text-slate-400 block mb-1">Diastolic (Bottom)</span>
                  <input
                    type="number"
                    value={val2}
                    onChange={(e) => setVal2(e.target.value)}
                    required
                    placeholder="80"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-700">
                Measurement Value ({selectedType === 'hr' ? 'bpm' : selectedType === 'glucose' ? 'mg/dL' : '%'})
              </label>
              <input
                type="number"
                value={singleVal}
                onChange={(e) => setSingleVal(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:border-teal-500"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Context / Device (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Taken post-morning coffee, Omron Bluetooth cuff"
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="pt-2 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-teal-500/20 cursor-pointer"
            >
              Save Metric
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
