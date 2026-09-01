import React, { useState } from 'react';
import { Activity, Calculator, CheckCircle2, RefreshCw } from 'lucide-react';

export const HealthCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('70');
  const [height, setHeight] = useState<string>('175');
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // cm to m
    if (!w || !h || h <= 0) return;

    const bmi = w / (h * h);
    const rounded = Math.round(bmi * 10) / 10;
    setBmiResult(rounded);

    if (rounded < 18.5) {
      setCategory('Underweight (Consider nutritional consultation)');
    } else if (rounded >= 18.5 && rounded < 25) {
      setCategory('Normal Weight (Maintain healthy lifestyle)');
    } else if (rounded >= 25 && rounded < 30) {
      setCategory('Overweight (Consider wellness & diet guidance)');
    } else {
      setCategory('Obese (Consult our cardiology or wellness specialists)');
    }
  };

  return (
    <div className="floating-window-dark bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 text-xs font-bold px-3.5 py-1.5 rounded-full mb-4 border border-blue-400/30">
            <Calculator className="w-3.5 h-3.5" /> Interactive Health Tool
          </div>
          <h3 className="text-2xl sm:text-3xl font-black mb-3 tracking-tight">BMI & Wellness Calculator</h3>
          <p className="text-blue-100 text-sm leading-relaxed mb-6">
            Calculate your Body Mass Index (BMI) to understand your weight status and take proactive steps toward better health with AuraHealth.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs text-blue-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant calculation based on WHO standards</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-blue-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct recommendation for specialist consultation</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl">
          <form onSubmit={calculateBMI} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">
                Weight (kg): <span className="text-white font-black">{weight} kg</span>
              </label>
              <input
                type="range"
                min="30"
                max="180"
                value={weight}
                onChange={e => setWeight(e.target.value)}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-blue-200 mb-2">
                Height (cm): <span className="text-white font-black">{height} cm</span>
              </label>
              <input
                type="range"
                min="120"
                max="220"
                value={height}
                onChange={e => setHeight(e.target.value)}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-102 text-sm"
            >
              Calculate BMI Now
            </button>
          </form>

          {bmiResult !== null && (
            <div className="mt-6 pt-6 border-t border-white/20 text-center animate-fadeIn">
              <div className="text-xs uppercase tracking-wider text-blue-200 mb-1 font-bold">Your BMI Score</div>
              <div className="text-4xl font-black text-white mb-2">{bmiResult}</div>
              <p className="text-sm font-bold text-emerald-300">{category}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
