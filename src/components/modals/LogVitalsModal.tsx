import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Activity, 
  Droplet, 
  Scale, 
  Moon, 
  Footprints, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { HealthMetrics } from '../../types';

interface LogVitalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMetrics: HealthMetrics;
  onSaveMetrics: (newMetrics: HealthMetrics) => void;
}

export const LogVitalsModal: React.FC<LogVitalsModalProps> = ({
  isOpen,
  onClose,
  currentMetrics,
  onSaveMetrics,
}) => {
  const [heartRate, setHeartRate] = useState(currentMetrics.heartRate.toString());
  const [bloodPressureSys, setBloodPressureSys] = useState(currentMetrics.bloodPressureSys.toString());
  const [bloodPressureDia, setBloodPressureDia] = useState(currentMetrics.bloodPressureDia.toString());
  const [bloodGlucose, setBloodGlucose] = useState(currentMetrics.bloodGlucose.toString());
  const [weight, setWeight] = useState(currentMetrics.weight.toString());
  const [sleepHours, setSleepHours] = useState(currentMetrics.sleepHours.toString());
  const [steps, setSteps] = useState(currentMetrics.steps.toString());

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const wt = parseFloat(weight) || currentMetrics.weight;
    const htInMeters = currentMetrics.height / 100;
    const calculatedBmi = parseFloat((wt / (htInMeters * htInMeters)).toFixed(1));

    const updated: HealthMetrics = {
      ...currentMetrics,
      heartRate: parseInt(heartRate) || currentMetrics.heartRate,
      bloodPressureSys: parseInt(bloodPressureSys) || currentMetrics.bloodPressureSys,
      bloodPressureDia: parseInt(bloodPressureDia) || currentMetrics.bloodPressureDia,
      bloodGlucose: parseInt(bloodGlucose) || currentMetrics.bloodGlucose,
      weight: wt,
      bmi: calculatedBmi,
      sleepHours: parseFloat(sleepHours) || currentMetrics.sleepHours,
      steps: parseInt(steps) || currentMetrics.steps,
    };

    onSaveMetrics(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 bg-[#2D2A26] text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <Activity className="w-5 h-5 text-[#A3B18A]" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-['Outfit',sans-serif] text-white">Log Daily Health Vitals</h2>
              <p className="text-xs text-[#E5E2D9]">Updates live charts and AI assistant context</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[#E5E2D9] hover:text-white rounded-lg hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Heart Rate */}
            <div className="p-3.5 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9]">
              <label className="text-xs font-bold text-[#2D2A26] flex items-center space-x-1.5 mb-1.5">
                <Heart className="w-4 h-4 text-[#BC8A7E]" />
                <span>Resting Heart Rate (BPM)</span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={heartRate}
                  onChange={(e) => setHeartRate(e.target.value)}
                  min="40"
                  max="200"
                  className="w-full px-3 py-1.5 bg-white border border-[#E5E2D9] rounded-xl text-sm font-semibold text-[#2D2A26] focus:outline-none focus:border-[#5E7153]"
                />
                <span className="text-xs text-[#7A766F] font-medium">bpm</span>
              </div>
            </div>

            {/* Blood Glucose */}
            <div className="p-3.5 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9]">
              <label className="text-xs font-bold text-[#2D2A26] flex items-center space-x-1.5 mb-1.5">
                <Droplet className="w-4 h-4 text-[#D4A373]" />
                <span>Fasting Blood Glucose</span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={bloodGlucose}
                  onChange={(e) => setBloodGlucose(e.target.value)}
                  min="50"
                  max="400"
                  className="w-full px-3 py-1.5 bg-white border border-[#E5E2D9] rounded-xl text-sm font-semibold text-[#2D2A26] focus:outline-none focus:border-[#5E7153]"
                />
                <span className="text-xs text-[#7A766F] font-medium">mg/dL</span>
              </div>
            </div>

            {/* Blood Pressure Systolic */}
            <div className="p-3.5 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9]">
              <label className="text-xs font-bold text-[#2D2A26] flex items-center space-x-1.5 mb-1.5">
                <Activity className="w-4 h-4 text-[#5E7153]" />
                <span>BP Systolic (Upper)</span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={bloodPressureSys}
                  onChange={(e) => setBloodPressureSys(e.target.value)}
                  min="80"
                  max="220"
                  className="w-full px-3 py-1.5 bg-white border border-[#E5E2D9] rounded-xl text-sm font-semibold text-[#2D2A26] focus:outline-none focus:border-[#5E7153]"
                />
                <span className="text-xs text-[#7A766F] font-medium">mmHg</span>
              </div>
            </div>

            {/* Blood Pressure Diastolic */}
            <div className="p-3.5 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9]">
              <label className="text-xs font-bold text-[#2D2A26] flex items-center space-x-1.5 mb-1.5">
                <Activity className="w-4 h-4 text-[#5E7153]" />
                <span>BP Diastolic (Lower)</span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={bloodPressureDia}
                  onChange={(e) => setBloodPressureDia(e.target.value)}
                  min="50"
                  max="140"
                  className="w-full px-3 py-1.5 bg-white border border-[#E5E2D9] rounded-xl text-sm font-semibold text-[#2D2A26] focus:outline-none focus:border-[#5E7153]"
                />
                <span className="text-xs text-[#7A766F] font-medium">mmHg</span>
              </div>
            </div>

            {/* Weight */}
            <div className="p-3.5 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9]">
              <label className="text-xs font-bold text-[#2D2A26] flex items-center space-x-1.5 mb-1.5">
                <Scale className="w-4 h-4 text-[#A3B18A]" />
                <span>Body Weight</span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  min="30"
                  max="250"
                  className="w-full px-3 py-1.5 bg-white border border-[#E5E2D9] rounded-xl text-sm font-semibold text-[#2D2A26] focus:outline-none focus:border-[#5E7153]"
                />
                <span className="text-xs text-[#7A766F] font-medium">kg</span>
              </div>
            </div>

            {/* Sleep Hours */}
            <div className="p-3.5 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9]">
              <label className="text-xs font-bold text-[#2D2A26] flex items-center space-x-1.5 mb-1.5">
                <Moon className="w-4 h-4 text-[#5E7153]" />
                <span>Sleep Duration</span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  step="0.1"
                  value={sleepHours}
                  onChange={(e) => setSleepHours(e.target.value)}
                  min="1"
                  max="16"
                  className="w-full px-3 py-1.5 bg-white border border-[#E5E2D9] rounded-xl text-sm font-semibold text-[#2D2A26] focus:outline-none focus:border-[#5E7153]"
                />
                <span className="text-xs text-[#7A766F] font-medium">hours</span>
              </div>
            </div>

            {/* Steps */}
            <div className="p-3.5 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9] sm:col-span-2">
              <label className="text-xs font-bold text-[#2D2A26] flex items-center space-x-1.5 mb-1.5">
                <Footprints className="w-4 h-4 text-[#5E7153]" />
                <span>Daily Steps Count</span>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                  min="0"
                  max="50000"
                  className="w-full px-3 py-1.5 bg-white border border-[#E5E2D9] rounded-xl text-sm font-semibold text-[#2D2A26] focus:outline-none focus:border-[#5E7153]"
                />
                <span className="text-xs text-[#7A766F] font-medium">steps</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#F1F3EE] rounded-xl border border-[#E5E2D9] flex items-center space-x-2 text-xs text-[#2D2A26] font-medium">
            <Sparkles className="w-4 h-4 text-[#5E7153] shrink-0" />
            <span>Logged metrics synchronize securely with your physician's longitudinal dashboard.</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-[#7A766F] hover:text-[#2D2A26] rounded-xl hover:bg-[#F1F3EE] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#5E7153] hover:bg-[#4D5E44] text-white rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Save & Update Vitals</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
