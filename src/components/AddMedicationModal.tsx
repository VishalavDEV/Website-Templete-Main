import React, { useState } from 'react';
import { 
  Pill, 
  X, 
  Clock, 
  Check, 
  Calendar,
  Sun,
  Sunrise,
  Sunset,
  Moon
} from 'lucide-react';
import { Medication } from '../types';

interface AddMedicationModalProps {
  onClose: () => void;
  onAddMedication: (medication: Medication) => void;
}

export const AddMedicationModal: React.FC<AddMedicationModalProps> = ({
  onClose,
  onAddMedication,
}) => {
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('25 mg');
  const [timing, setTiming] = useState<'morning' | 'afternoon' | 'evening' | 'bedtime'>('morning');
  const [timeLabel, setTimeLabel] = useState('08:00 AM');
  const [frequency, setFrequency] = useState('Once Daily');
  const [instructions, setInstructions] = useState('Take with full glass of water after meal');
  const [remainingDays, setRemainingDays] = useState('30');
  const [category, setCategory] = useState('General Health');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddMedication({
      id: `med-${Date.now()}`,
      name: name.trim(),
      dosage: dosage.trim() || '10 mg',
      frequency,
      timing,
      timeLabel,
      instructions: instructions.trim() || 'Take as directed by clinician',
      completed: false,
      remainingDays: parseInt(remainingDays, 10) || 30,
      totalPills: (parseInt(remainingDays, 10) || 30) * 2,
      category,
    });
    onClose();
  };

  return (
    <div 
      id="add-medication-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4"
    >
      <div className="bg-white max-w-md w-full rounded-3xl p-6 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-150 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
            <Pill className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">Add Medication Dose</h3>
            <p className="text-xs text-slate-500">Set reminder cues and tracking for your prescription</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Medication Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Lisinopril, Rosuvastatin, Vitamin D3"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Dosage</label>
              <input
                type="text"
                required
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
                placeholder="e.g. 10 mg, 500 mcg"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Frequency</label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-teal-500"
              >
                <option value="Once Daily">Once Daily</option>
                <option value="Twice Daily">Twice Daily</option>
                <option value="Every 8 Hours">Every 8 Hours</option>
                <option value="As Needed">As Needed</option>
              </select>
            </div>
          </div>

          {/* Time & Timing slot */}
          <div>
            <label className="block font-bold text-slate-700 mb-1.5">Schedule Timing</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { id: 'morning', label: 'Morning', icon: Sunrise, defaultTime: '08:00 AM' },
                { id: 'afternoon', label: 'Afternoon', icon: Sun, defaultTime: '01:30 PM' },
                { id: 'evening', label: 'Evening', icon: Sunset, defaultTime: '07:00 PM' },
                { id: 'bedtime', label: 'Bedtime', icon: Moon, defaultTime: '10:00 PM' },
              ].map(t => {
                const IconComp = t.icon;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setTiming(t.id as any);
                      setTimeLabel(t.defaultTime);
                    }}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      timing === t.id
                        ? 'bg-teal-500 text-white border-teal-500 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold">{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Reminder Time</label>
              <input
                type="text"
                value={timeLabel}
                onChange={(e) => setTimeLabel(e.target.value)}
                placeholder="08:00 AM"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">Days of Supply Remaining</label>
              <input
                type="number"
                value={remainingDays}
                onChange={(e) => setRemainingDays(e.target.value)}
                placeholder="30"
                className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Special Instructions</label>
            <input
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g. Take with meal, avoid citrus juice..."
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="pt-3 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-2xl text-xs transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-bold rounded-2xl text-xs transition-all shadow-md shadow-teal-500/20 cursor-pointer"
            >
              Add to Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
