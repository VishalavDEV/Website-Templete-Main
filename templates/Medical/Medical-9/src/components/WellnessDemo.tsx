import React, { useState } from 'react';
import { Sliders, Moon, Zap, Utensils, Smile, Pill, AlertCircle, RefreshCw } from 'lucide-react';

export const WellnessDemo: React.FC = () => {
  const [sleep, setSleep] = useState<number>(7.5);
  const [activity, setActivity] = useState<number>(45);
  const [nutrition, setNutrition] = useState<number>(8);
  const [stress, setStress] = useState<number>(4); // 1 = Low stress, 10 = High stress
  const [adherence, setAdherence] = useState<number>(95);

  // Compute calculated score
  const sleepPoints = sleep >= 7 && sleep <= 9 ? 20 : Math.max(8, 20 - Math.abs(8 - sleep) * 3);
  const activityPoints = Math.min(20, Math.round((activity / 60) * 20));
  const nutritionPoints = nutrition * 2;
  const stressPoints = Math.round((11 - stress) * 2);
  const adherencePoints = Math.round((adherence / 100) * 20);

  const totalScore = Math.min(100, Math.max(0, Math.round(
    sleepPoints + activityPoints + nutritionPoints + stressPoints + adherencePoints
  )));

  const getScoreStatus = (score: number) => {
    if (score >= 85) return { label: 'Optimal Lifestyle Synergy', color: 'text-[#C97873]', bg: 'bg-[#FAF0EE]' };
    if (score >= 70) return { label: 'Balanced Glycemic Foundation', color: 'text-[#542F3B]', bg: 'bg-[#F2ECE9]' };
    return { label: 'Opportunity for Optimization', color: 'text-amber-800', bg: 'bg-amber-50' };
  };

  const status = getScoreStatus(totalScore);

  const resetSliders = () => {
    setSleep(7.5);
    setActivity(45);
    setNutrition(8);
    setStress(4);
    setAdherence(95);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Text & Interactive Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0EE] border border-[#C97873]/25 text-[#542F3B] text-xs font-bold">
              <Sliders className="w-3.5 h-3.5 text-[#C97873]" />
              <span>Interactive Lifestyle Balance Simulator</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#542F3B] leading-tight">
              Explore your <br />
              <span className="italic font-normal text-[#C97873]">lifestyle balance.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#70696C] font-sans font-normal leading-relaxed">
              Blood glucose is influenced by more than just meal choices. Sleep duration, physical movement, stress hormones, and medication timing work together in a dynamic ecosystem.
            </p>

            {/* Score Display Card */}
            <div className={`p-6 rounded-2xl border border-[#E5DDD8] ${status.bg} transition-all duration-300 shadow-sm`}>
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase font-bold text-[#70696C]">Calculated Balance Index</span>
                <button
                  onClick={resetSliders}
                  className="text-xs text-[#C97873] hover:underline flex items-center gap-1 font-bold focus-visible:ring-2 focus-visible:ring-[#C97873]"
                >
                  <RefreshCw className="w-3 h-3" /> Reset
                </button>
              </div>

              <div className="flex items-baseline gap-2 mt-2">
                <span className="font-serif text-5xl font-bold text-[#542F3B]">{totalScore}</span>
                <span className="text-lg font-sans font-semibold text-[#70696C]">/ 100</span>
              </div>

              <div className={`mt-3 inline-block px-3 py-1 rounded-md text-xs font-bold ${status.color} bg-white shadow-xs`}>
                {status.label}
              </div>
            </div>

          </div>

          {/* RIGHT: Sliders Grid Controls */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#E5DDD8] space-y-6">
            
            {/* Slider 1: Sleep */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#542F3B]">
                <span className="flex items-center gap-2">
                  <Moon className="w-4 h-4 text-[#C97873]" /> Sleep Duration
                </span>
                <span className="text-[#C97873] font-mono">{sleep} hrs / night</span>
              </div>
              <input
                type="range"
                min="4"
                max="10"
                step="0.5"
                value={sleep}
                onChange={(e) => setSleep(parseFloat(e.target.value))}
                className="w-full accent-[#C97873] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#70696C]">
                <span>4 hrs</span>
                <span>7-9 hrs (Ideal)</span>
                <span>10 hrs</span>
              </div>
            </div>

            {/* Slider 2: Activity */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#542F3B]">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#C97873]" /> Daily Physical Movement
                </span>
                <span className="text-[#C97873] font-mono">{activity} mins / day</span>
              </div>
              <input
                type="range"
                min="0"
                max="120"
                step="5"
                value={activity}
                onChange={(e) => setActivity(parseInt(e.target.value))}
                className="w-full accent-[#C97873] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#70696C]">
                <span>Sedentary (0m)</span>
                <span>30-60 mins (Optimal)</span>
                <span>120+ mins</span>
              </div>
            </div>

            {/* Slider 3: Nutrition */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#542F3B]">
                <span className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#C97873]" /> Glycemic Meal Quality
                </span>
                <span className="text-[#C97873] font-mono">{nutrition} / 10 Rating</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={nutrition}
                onChange={(e) => setNutrition(parseInt(e.target.value))}
                className="w-full accent-[#C97873] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#70696C]">
                <span>Processed Carbs</span>
                <span>Plate Method Balanced</span>
                <span>Whole Foods (10/10)</span>
              </div>
            </div>

            {/* Slider 4: Stress */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#542F3B]">
                <span className="flex items-center gap-2">
                  <Smile className="w-4 h-4 text-[#C97873]" /> Perceived Stress Level
                </span>
                <span className="text-[#C97873] font-mono">Level {stress} / 10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={stress}
                onChange={(e) => setStress(parseInt(e.target.value))}
                className="w-full accent-[#C97873] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#70696C]">
                <span>Low / Relaxed (1)</span>
                <span>Moderate</span>
                <span>High Cortisol (10)</span>
              </div>
            </div>

            {/* Slider 5: Medication Adherence */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-[#542F3B]">
                <span className="flex items-center gap-2">
                  <Pill className="w-4 h-4 text-[#C97873]" /> Medication / Sensor Consistency
                </span>
                <span className="text-[#C97873] font-mono">{adherence}% Adherence</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                step="5"
                value={adherence}
                onChange={(e) => setAdherence(parseInt(e.target.value))}
                className="w-full accent-[#C97873] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#70696C]">
                <span>50% (Irregular)</span>
                <span>80%</span>
                <span>100% (Strict Routine)</span>
              </div>
            </div>

            {/* Required Disclaimer */}
            <div className="p-3 bg-[#F2ECE9] rounded-xl text-[11px] text-[#70696C] border border-[#E5DDD8] flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#C97873] shrink-0" />
              <span>
                <strong>Educational Disclaimer:</strong> This interactive demo is for illustration only and does not diagnose or assess medical conditions.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
