import React, { useState } from 'react';
import { X, BookOpen, Plus, Zap, Clock, Calendar } from 'lucide-react';
import { SymptomLog } from '../../types';

interface AddSymptomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (log: SymptomLog) => void;
}

export const AddSymptomModal: React.FC<AddSymptomModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [symptom, setSymptom] = useState('Headache');
  const [customSymptom, setCustomSymptom] = useState('');
  const [severity, setSeverity] = useState(3);
  const [duration, setDuration] = useState('3 hours');
  const [trigger, setTrigger] = useState('Poor sleep');
  const [notes, setNotes] = useState('');
  const [reliefFactor, setReliefFactor] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalSymptom = symptom === 'Other' ? (customSymptom || 'Unspecified Observation') : symptom;

    const newLog: SymptomLog = {
      id: `sym_${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      symptom: finalSymptom,
      severity,
      duration: duration || '1-2 hours',
      trigger: trigger || undefined,
      notes: notes || undefined,
      reliefFactor: reliefFactor || undefined,
      mood: severity >= 4 ? 'Poor' : severity === 3 ? 'Moderate' : 'Good',
    };

    onAdd(newLog);
    onClose();
  };

  const commonSymptoms = ['Headache', 'Fatigue', 'Mild Wheezing', 'Back Pain', 'Acid Reflux', 'Joint Stiffness', 'Other'];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#E5E2DD] p-6 sm:p-8 shadow-2xl space-y-5 text-[#2D3A2D]">
        
        <div className="flex items-center justify-between pb-3 border-b border-[#E5E2DD]">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-[#A8904F]" />
            <h2 className="text-xl font-bold font-serif text-[#2D3A2D]">
              Log Symptom Observation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#F5F2ED] text-[#5A5A40]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          <div>
            <label className="block font-semibold text-[#2D3A2D] mb-1.5">Symptom Type</label>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {commonSymptoms.map((sym) => (
                <button
                  type="button"
                  key={sym}
                  onClick={() => setSymptom(sym)}
                  className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                    symptom === sym
                      ? 'bg-[#2D3A2D] text-white shadow-xs'
                      : 'bg-[#F5F2ED] text-[#5A5A40] hover:bg-[#E5E2DD] border border-[#E5E2DD]'
                  }`}
                >
                  {sym}
                </button>
              ))}
            </div>
            {symptom === 'Other' && (
              <input
                type="text"
                required
                placeholder="Specify symptom..."
                value={customSymptom}
                onChange={(e) => setCustomSymptom(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              />
            )}
          </div>

          {/* Severity Selector 1 to 5 */}
          <div className="p-3.5 rounded-xl bg-[#F5F2ED] border border-[#E5E2DD] space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-[#2D3A2D]">Severity Intensity</label>
              <span className="font-mono font-bold text-[#A8904F]">{severity} / 5</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              {[1, 2, 3, 4, 5].map((lvl) => (
                <button
                  type="button"
                  key={lvl}
                  onClick={() => setSeverity(lvl)}
                  className={`flex-1 py-2 rounded-xl font-bold font-mono transition-all ${
                    severity === lvl
                      ? lvl >= 4
                        ? 'bg-red-700 text-white'
                        : lvl === 3
                        ? 'bg-[#A8904F] text-white'
                        : 'bg-[#2D3A2D] text-white'
                      : 'bg-white text-[#5A5A40] border border-[#E5E2DD] hover:bg-[#E5E2DD]'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-[#5A5A40]">
              <span>Mild / Barely Noticeable</span>
              <span>Severe / Interfering</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Duration</label>
              <input
                type="text"
                placeholder="e.g. 3 hours, 45 mins"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#2D3A2D] mb-1">Suspected Trigger</label>
              <input
                type="text"
                placeholder="e.g. Screen glare, Poor sleep"
                value={trigger}
                onChange={(e) => setTrigger(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#2D3A2D] mb-1">Observation Notes</label>
            <textarea
              rows={2}
              placeholder="e.g. Felt after a long workday, throbbing sensation in temples."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#2D3A2D] mb-1">Relief Factor (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Hydrated with 500ml water, 20-min dark room rest"
              value={reliefFactor}
              onChange={(e) => setReliefFactor(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F5F2ED] border border-[#E5E2DD] rounded-xl text-[#2D3A2D] focus:outline-hidden focus:ring-2 focus:ring-[#2D3A2D]/20"
            />
          </div>

          <div className="pt-3 border-t border-[#E5E2DD] flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-[#5A5A40] hover:bg-[#F5F2ED]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#2D3A2D] hover:bg-[#1F2B1F] text-white text-xs font-bold shadow-sm flex items-center space-x-1.5"
            >
              <Plus className="w-3.5 h-3.5 text-[#A8904F]" />
              <span>Record Entry</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
