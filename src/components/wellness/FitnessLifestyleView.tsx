import React, { useState } from 'react';
import { 
  Dumbbell, 
  Flame, 
  Footprints, 
  Clock, 
  TrendingUp, 
  CheckCircle2, 
  Play, 
  X, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';
import { WorkoutRoutine, HealthMetrics } from '../../types';

interface FitnessLifestyleViewProps {
  metrics: HealthMetrics;
  routines: WorkoutRoutine[];
}

export const FitnessLifestyleView: React.FC<FitnessLifestyleViewProps> = ({
  metrics,
  routines,
}) => {
  const [selectedRoutine, setSelectedRoutine] = useState<WorkoutRoutine | null>(null);
  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);

  // Weekly steps bar chart mock data
  const weeklySteps = [
    { day: 'Mon', steps: 8900, target: 10000 },
    { day: 'Tue', steps: 10450, target: 10000 },
    { day: 'Wed', steps: 7800, target: 10000 },
    { day: 'Thu', steps: 9200, target: 10000 },
    { day: 'Fri', steps: 11100, target: 10000 },
    { day: 'Sat', steps: 12400, target: 10000 },
    { day: 'Sun', steps: 8420, target: 10000 },
  ];

  return (
    <div className="space-y-8 pb-16">
      
      {/* Banner */}
      <div className="bg-[#2D2A26] text-white p-8 rounded-3xl border border-[#E5E2D9]/30 relative overflow-hidden shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5E7153]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#5E7153]/30 border border-[#A3B18A]/40 text-[#E5E2D9] text-xs font-semibold">
            <Dumbbell className="w-3.5 h-3.5 text-[#A3B18A]" />
            <span>Zone-2 Aerobic & Longevity Protocols</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] tracking-tight text-white">
            Fitness, Mobility & Movement
          </h1>
          <p className="text-sm text-[#E5E2D9]/85 leading-relaxed">
            Optimize VO2 max, preserve lean musculoskeletal density, and track cardiovascular capacity with evidence-based movement routines.
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs bg-white/10 p-3 rounded-2xl backdrop-blur-md relative z-10 border border-white/10">
          <Flame className="w-5 h-5 text-[#D4A373]" />
          <div>
            <span className="font-bold text-white block">Daily Active Calorie Burn</span>
            <span className="text-[#E5E2D9]">{metrics.caloriesBurned} kcal expended today</span>
          </div>
        </div>
      </div>

      {/* 1. Daily Activity Rings & Weekly Step Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Activity Rings Grid */}
        <div className="bg-white rounded-3xl border border-[#E5E2D9] p-6 shadow-xs space-y-5">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-[#FEF6ED] text-[#D4A373] border border-[#E5E2D9] rounded-xl">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#2D2A26] font-['Outfit',sans-serif]">Daily Movement Targets</h2>
              <p className="text-xs text-[#7A766F]">Live synchronization with wearable sensor</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Steps Ring */}
            <div className="p-3.5 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9] space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#2D2A26] flex items-center gap-1.5">
                  <Footprints className="w-4 h-4 text-[#5E7153]" /> Steps
                </span>
                <span className="font-semibold text-[#5E7153]">{metrics.steps.toLocaleString()} / 10,000</span>
              </div>
              <div className="w-full bg-[#E5E2D9] h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#5E7153] h-full rounded-full" style={{ width: `${(metrics.steps / 10000) * 100}%` }} />
              </div>
            </div>

            {/* Active Minutes */}
            <div className="p-3.5 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9] space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#2D2A26] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#A3B18A]" /> Active Zone Minutes
                </span>
                <span className="font-semibold text-[#5E7153]">{metrics.activeMinutes} / {metrics.activeMinutesGoal} mins</span>
              </div>
              <div className="w-full bg-[#E5E2D9] h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#A3B18A] h-full rounded-full" style={{ width: `${(metrics.activeMinutes / metrics.activeMinutesGoal) * 100}%` }} />
              </div>
            </div>

            {/* Active Calories */}
            <div className="p-3.5 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9] space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#2D2A26] flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#D4A373]" /> Calorie Expenditure
                </span>
                <span className="font-semibold text-[#D4A373]">{metrics.caloriesBurned} / 600 kcal</span>
              </div>
              <div className="w-full bg-[#E5E2D9] h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#D4A373] h-full rounded-full" style={{ width: `${(metrics.caloriesBurned / 600) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Step Volume Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-[#E5E2D9] p-6 shadow-xs space-y-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-[#2D2A26] font-['Outfit',sans-serif]">
                Weekly Step Consistency (7 Days)
              </h2>
              <p className="text-xs text-[#7A766F]">Target baseline: 10,000 steps daily for longevity</p>
            </div>
            <span className="text-xs font-bold text-[#5E7153] bg-[#F1F3EE] px-3 py-1 rounded-full border border-[#E5E2D9]">
              Avg: 9,895 steps / day
            </span>
          </div>

          {/* Bar Chart Container */}
          <div className="h-44 flex items-end justify-between gap-3 pt-4 px-2">
            {weeklySteps.map((ws, i) => {
              const heightPercent = Math.min((ws.steps / 14000) * 100, 100);
              const reached = ws.steps >= ws.target;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <span className="text-[10px] font-bold text-[#7A766F] group-hover:text-[#2D2A26]">
                    {(ws.steps / 1000).toFixed(1)}k
                  </span>
                  <div className="w-full max-w-[36px] bg-[#F9F8F6] border border-[#E5E2D9] rounded-xl h-32 flex flex-col justify-end p-1">
                    <div 
                      className={`w-full rounded-lg transition-all duration-500 ${
                        reached ? 'bg-[#5E7153] group-hover:bg-[#4D5E44]' : 'bg-[#D4A373] group-hover:bg-[#c29365]'
                      }`}
                      style={{ height: `${heightPercent}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-[#2D2A26]">{ws.day}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* 2. Curated Workout Protocols */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-[#2D2A26] font-['Outfit',sans-serif]">Prescribed Fitness Routines</h2>
          <p className="text-xs text-[#7A766F]">Doctor-approved protocols for mitochondrial biogenesis and joint stability</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {routines.map((rt) => (
            <div
              key={rt.id}
              onClick={() => {
                setSelectedRoutine(rt);
                setActiveExerciseIndex(0);
              }}
              className="bg-white rounded-3xl border border-[#E5E2D9] overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-40 overflow-hidden bg-[#F9F8F6]">
                  <img 
                    src={rt.image} 
                    alt={rt.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#2D2A26] border border-[#E5E2D9]">
                    {rt.duration}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#5E7153]">
                    <span>{rt.level}</span>
                    <span className="text-[#7A766F]">{rt.caloriesBurn} kcal</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#2D2A26] group-hover:text-[#5E7153] transition-colors leading-snug">
                    {rt.title}
                  </h3>
                  <p className="text-xs text-[#7A766F] line-clamp-2">
                    {rt.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 flex items-center justify-between text-xs font-bold text-[#5E7153]">
                <span>Start Routine</span>
                <Play className="w-3.5 h-3.5 fill-[#5E7153]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Routine Detail & Exercise Player Modal */}
      {selectedRoutine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E5E2D9] overflow-hidden max-h-[85vh] flex flex-col">
            
            <div className="relative h-44 bg-[#2D2A26] shrink-0">
              <img src={selectedRoutine.image} alt={selectedRoutine.title} className="w-full h-full object-cover opacity-80" />
              <button
                onClick={() => setSelectedRoutine(null)}
                className="absolute top-4 right-4 p-2 bg-[#2D2A26]/80 text-white rounded-full hover:bg-[#2D2A26] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#5E7153] rounded text-white">
                  {selectedRoutine.level} • {selectedRoutine.duration}
                </span>
                <h2 className="text-xl font-bold font-['Outfit',sans-serif] mt-1 text-white">{selectedRoutine.title}</h2>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs text-[#2D2A26]">
              <p className="leading-relaxed bg-[#F9F8F6] p-3 rounded-2xl border border-[#E5E2D9] text-[#2D2A26]">
                {selectedRoutine.description}
              </p>

              <div>
                <h4 className="font-bold text-sm text-[#2D2A26] font-['Outfit',sans-serif] mb-3">
                  Exercise Sequence ({selectedRoutine.exercises.length} Movements)
                </h4>
                
                <div className="space-y-2.5">
                  {selectedRoutine.exercises.map((ex, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveExerciseIndex(idx)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        activeExerciseIndex === idx
                          ? 'bg-[#F1F3EE] border-[#5E7153] text-[#2D2A26] font-bold'
                          : 'bg-[#F9F8F6] border-[#E5E2D9] text-[#7A766F] hover:bg-[#F1F3EE] hover:text-[#2D2A26]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-6 h-6 rounded-full bg-white border border-[#E5E2D9] flex items-center justify-center font-bold text-xs text-[#2D2A26]">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-[#2D2A26]">{ex.name}</div>
                          <div className="text-[10px] text-[#7A766F]">{ex.reps}</div>
                        </div>
                      </div>
                      <span className="text-xs text-[#7A766F] font-medium">{ex.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    alert(`Workout '${selectedRoutine.title}' started! Timer running in background.`);
                    setSelectedRoutine(null);
                  }}
                  className="w-full py-3 bg-[#5E7153] hover:bg-[#4D5E44] text-white rounded-2xl text-xs font-bold shadow-md flex items-center justify-center space-x-2 cursor-pointer transition-colors"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Begin Guided Workout Timer</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
