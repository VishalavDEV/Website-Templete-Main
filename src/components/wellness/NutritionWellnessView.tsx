import React, { useState } from 'react';
import { 
  Apple, 
  Droplets, 
  Flame, 
  Sparkles, 
  Check, 
  Plus, 
  Clock, 
  ChevronRight, 
  Heart, 
  BookOpen, 
  X,
  Users,
  ShieldCheck
} from 'lucide-react';
import { NutritionPlan, Recipe, WellnessChallenge, HealthMetrics } from '../../types';

interface NutritionWellnessViewProps {
  metrics: HealthMetrics;
  nutritionPlans: NutritionPlan[];
  recipes: Recipe[];
  challenges: WellnessChallenge[];
  onUpdateMetrics: (newMetrics: HealthMetrics) => void;
  onJoinChallenge: (challengeId: string) => void;
}

export const NutritionWellnessView: React.FC<NutritionWellnessViewProps> = ({
  metrics,
  nutritionPlans,
  recipes,
  challenges,
  onUpdateMetrics,
  onJoinChallenge,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState(nutritionPlans[0]?.id || '');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeTab, setActiveTab] = useState<'tracker' | 'plans' | 'recipes' | 'challenges'>('tracker');

  const selectedPlan = nutritionPlans.find(p => p.id === selectedPlanId) || nutritionPlans[0];

  const handleAddWater = (ml: number) => {
    const nextVal = Math.min(metrics.hydrationCurrent + ml, 4000);
    onUpdateMetrics({
      ...metrics,
      hydrationCurrent: nextVal,
    });
  };

  const handleResetWater = () => {
    onUpdateMetrics({
      ...metrics,
      hydrationCurrent: 0,
    });
  };

  // Mock Macro Totals
  const targetCalories = 2200;
  const currentCalories = 1680;
  const proteinCurrent = 110;
  const proteinTarget = 140; // g
  const carbsCurrent = 165;
  const carbsTarget = 220; // g
  const fatCurrent = 54;
  const fatTarget = 70; // g

  return (
    <div className="space-y-8 pb-16">
      
      {/* Banner */}
      <div className="bg-[#2D2A26] text-white p-8 rounded-3xl border border-[#E5E2D9]/30 relative overflow-hidden shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5E7153]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#5E7153]/30 border border-[#A3B18A]/40 text-[#E5E2D9] text-xs font-semibold">
            <Apple className="w-3.5 h-3.5 text-[#A3B18A]" />
            <span>Metabolic Precision & Clinical Nutrition</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] tracking-tight text-white">
            Nutrition, Diet & Hydration
          </h1>
          <p className="text-sm text-[#E5E2D9]/85 leading-relaxed">
            Fuel your longevity with biomarker-aligned meal protocols, macronutrient balance, anti-inflammatory recipes, and daily cellular hydration tracking.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center space-x-1.5 bg-white/10 p-1.5 rounded-2xl backdrop-blur-md relative z-10 border border-white/10">
          {[
            { key: 'tracker', label: 'Macros & Water' },
            { key: 'plans', label: 'Diet Protocols' },
            { key: 'recipes', label: 'Recipe Vault' },
            { key: 'challenges', label: 'Challenges' },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[#5E7153] text-white shadow-xs'
                  : 'text-[#E5E2D9] hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 1. MACROS & WATER TRACKER */}
      {activeTab === 'tracker' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Daily Macros Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-[#E5E2D9] p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-[#FEF6ED] text-[#D4A373] border border-[#E5E2D9] rounded-xl">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#2D2A26] font-['Outfit',sans-serif]">
                    Macronutrient Balance Today
                  </h2>
                  <p className="text-xs text-[#7A766F]">Target calibrated to resting metabolic rate & activity</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#2D2A26] bg-[#F9F8F6] border border-[#E5E2D9] px-3 py-1 rounded-full">
                {currentCalories} / {targetCalories} kcal
              </span>
            </div>

            {/* Calorie Progress */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-[#2D2A26]">
                <span>Energy Budget</span>
                <span>{Math.round((currentCalories / targetCalories) * 100)}%</span>
              </div>
              <div className="w-full bg-[#F9F8F6] border border-[#E5E2D9] h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-[#D4A373] h-full rounded-full transition-all duration-500" 
                  style={{ width: `${(currentCalories / targetCalories) * 100}%` }}
                />
              </div>
            </div>

            {/* 3 Macro Progress Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              
              {/* Protein */}
              <div className="p-4 rounded-2xl bg-[#F9F8F6] border border-[#E5E2D9] space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-[#2D2A26]">Protein</span>
                  <span className="font-semibold text-[#5E7153]">{proteinCurrent}g / {proteinTarget}g</span>
                </div>
                <div className="w-full bg-[#E5E2D9] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#5E7153] h-full rounded-full" style={{ width: `${(proteinCurrent / proteinTarget) * 100}%` }} />
                </div>
                <p className="text-[10px] text-[#7A766F]">Muscle synthesis & cellular repair</p>
              </div>

              {/* Carbs */}
              <div className="p-4 rounded-2xl bg-[#F9F8F6] border border-[#E5E2D9] space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-[#2D2A26]">Complex Carbs</span>
                  <span className="font-semibold text-[#D4A373]">{carbsCurrent}g / {carbsTarget}g</span>
                </div>
                <div className="w-full bg-[#E5E2D9] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#D4A373] h-full rounded-full" style={{ width: `${(carbsCurrent / carbsTarget) * 100}%` }} />
                </div>
                <p className="text-[10px] text-[#7A766F]">Glycogen & fiber metabolism</p>
              </div>

              {/* Fats */}
              <div className="p-4 rounded-2xl bg-[#F9F8F6] border border-[#E5E2D9] space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-[#2D2A26]">Healthy Fats</span>
                  <span className="font-semibold text-[#A3B18A]">{fatCurrent}g / {fatTarget}g</span>
                </div>
                <div className="w-full bg-[#E5E2D9] h-2 rounded-full overflow-hidden">
                  <div className="bg-[#A3B18A] h-full rounded-full" style={{ width: `${(fatCurrent / fatTarget) * 100}%` }} />
                </div>
                <p className="text-[10px] text-[#7A766F]">Hormone synthesis & Omega-3</p>
              </div>

            </div>
          </div>

          {/* Hydration Tracker Bottle */}
          <div className="bg-white rounded-3xl border border-[#E5E2D9] p-6 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Droplets className="w-5 h-5 text-[#5E7153]" />
                <h3 className="text-base font-bold text-[#2D2A26] font-['Outfit',sans-serif]">Cellular Hydration</h3>
              </div>
              <button 
                onClick={handleResetWater}
                className="text-[11px] text-[#7A766F] hover:text-[#2D2A26] cursor-pointer"
              >
                Reset
              </button>
            </div>

            <div className="flex items-center justify-center space-x-6 py-2">
              {/* Visual Water Level Cylinder */}
              <div className="relative w-16 h-36 bg-[#F9F8F6] rounded-2xl border-2 border-[#E5E2D9] overflow-hidden flex flex-col justify-end">
                <div 
                  className="w-full bg-gradient-to-t from-[#5E7153] to-[#A3B18A] transition-all duration-500"
                  style={{ height: `${Math.min((metrics.hydrationCurrent / metrics.hydrationGoal) * 100, 100)}%` }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-xs font-extrabold text-[#2D2A26] drop-shadow-xs">
                  {Math.round((metrics.hydrationCurrent / metrics.hydrationGoal) * 100)}%
                </span>
              </div>

              <div>
                <div className="text-2xl font-black text-[#2D2A26] font-['Outfit',sans-serif]">
                  {metrics.hydrationCurrent} <span className="text-xs font-semibold text-[#7A766F]">ml</span>
                </div>
                <p className="text-xs text-[#7A766F]">Target: {metrics.hydrationGoal} ml</p>
                <p className="text-[11px] text-[#5E7153] font-medium mt-1">
                  {metrics.hydrationGoal - metrics.hydrationCurrent > 0 
                    ? `${metrics.hydrationGoal - metrics.hydrationCurrent}ml to go`
                    : 'Goal completed! 💧'}
                </p>
              </div>
            </div>

            {/* Quick Add Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleAddWater(250)}
                className="py-2.5 bg-[#F1F3EE] hover:bg-[#E5E2D9] text-[#5E7153] rounded-xl text-xs font-bold border border-[#E5E2D9] transition-colors cursor-pointer"
              >
                + 250 ml (Glass)
              </button>
              <button
                onClick={() => handleAddWater(500)}
                className="py-2.5 bg-[#5E7153] hover:bg-[#4D5E44] text-white rounded-xl text-xs font-bold shadow-xs transition-colors cursor-pointer"
              >
                + 500 ml (Bottle)
              </button>
            </div>
          </div>

        </div>
      )}

      {/* 2. DIET PROTOCOLS */}
      {activeTab === 'plans' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nutritionPlans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between ${
                selectedPlanId === plan.id
                  ? 'bg-[#F1F3EE] border-[#5E7153] shadow-xs ring-1 ring-[#5E7153]'
                  : 'bg-white border-[#E5E2D9] hover:border-[#A3B18A]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FEF6ED] text-[#D4A373] border border-[#D4A373]/30">
                    Clinical Protocol
                  </span>
                  <span className="text-xs font-bold text-[#2D2A26]">
                    {plan.caloriesTarget} kcal / day
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#2D2A26] font-['Outfit',sans-serif]">{plan.title}</h3>
                <p className="text-xs text-[#7A766F] leading-relaxed">{plan.description}</p>

                {/* Macro Split Badge */}
                <div className="flex items-center gap-2 text-xs pt-1">
                  <span className="px-2 py-0.5 bg-white border border-[#E5E2D9] rounded text-[#2D2A26] font-semibold">
                    Carbs: {plan.macroSplit.carbs}%
                  </span>
                  <span className="px-2 py-0.5 bg-white border border-[#E5E2D9] rounded text-[#2D2A26] font-semibold">
                    Protein: {plan.macroSplit.protein}%
                  </span>
                  <span className="px-2 py-0.5 bg-white border border-[#E5E2D9] rounded text-[#2D2A26] font-semibold">
                    Fats: {plan.macroSplit.fats}%
                  </span>
                </div>

                {/* Focus Foods */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-[#7A766F] uppercase tracking-wider block mb-1">
                    Key Therapeutic Ingredients
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {plan.focusFoods.map(food => (
                      <span key={food} className="px-2.5 py-0.5 bg-white border border-[#E5E2D9] rounded-full text-xs text-[#2D2A26] font-medium">
                        🌿 {food}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E2D9] mt-4 flex items-center justify-between">
                <span className="text-xs font-bold text-[#5E7153]">
                  {selectedPlanId === plan.id ? '✓ Currently Active Protocol' : 'Select Protocol'}
                </span>
                <ChevronRight className="w-4 h-4 text-[#5E7153]" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 3. RECIPES VAULT */}
      {activeTab === 'recipes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recipes.map((rec) => (
            <div
              key={rec.id}
              onClick={() => setSelectedRecipe(rec)}
              className="bg-white rounded-3xl border border-[#E5E2D9] overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-[#F9F8F6]">
                  <img 
                    src={rec.image} 
                    alt={rec.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#2D2A26] border border-[#E5E2D9]">
                    {rec.prepTime}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A373]">
                    {rec.dietType}
                  </span>
                  <h3 className="text-base font-bold text-[#2D2A26] group-hover:text-[#5E7153] transition-colors leading-snug">
                    {rec.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-xs text-[#7A766F] pt-1">
                    <span className="font-bold text-[#2D2A26]">{rec.calories} kcal</span>
                    <span>•</span>
                    <span>P: {rec.protein}g</span>
                    <span>•</span>
                    <span>C: {rec.carbs}g</span>
                    <span>•</span>
                    <span>F: {rec.fat}g</span>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-bold text-[#5E7153] border-t border-[#E5E2D9]">
                <span>View Ingredients & Steps</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. ACTIVE CHALLENGES */}
      {activeTab === 'challenges' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {challenges.map((ch) => (
            <div
              key={ch.id}
              className="bg-white rounded-3xl border border-[#E5E2D9] p-6 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F1F3EE] text-[#5E7153] text-[10px] font-bold border border-[#E5E2D9]">
                    {ch.daysTotal} Days Challenge
                  </span>
                  <span className="text-xs text-[#7A766F] font-medium flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#7A766F]" /> {ch.participantsCount.toLocaleString()}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#2D2A26] font-['Outfit',sans-serif]">{ch.title}</h3>
                <p className="text-xs text-[#7A766F] leading-relaxed">{ch.description}</p>

                {ch.joined && (
                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs font-bold text-[#5E7153]">
                      <span>Day {ch.daysCompleted} of {ch.daysTotal}</span>
                      <span>{Math.round((ch.daysCompleted / ch.daysTotal) * 100)}%</span>
                    </div>
                    <div className="w-full bg-[#F1F3EE] h-2 rounded-full overflow-hidden border border-[#E5E2D9]">
                      <div 
                        className="bg-[#5E7153] h-full rounded-full" 
                        style={{ width: `${(ch.daysCompleted / ch.daysTotal) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => onJoinChallenge(ch.id)}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  ch.joined
                    ? 'bg-[#F1F3EE] text-[#5E7153] border border-[#A3B18A]'
                    : 'bg-[#5E7153] hover:bg-[#4D5E44] text-white shadow-xs'
                }`}
              >
                {ch.joined ? '✓ Active Challenge (Keep Going)' : 'Join Community Challenge'}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E5E2D9] overflow-hidden max-h-[85vh] flex flex-col">
            <div className="relative h-48 bg-[#2D2A26] shrink-0">
              <img src={selectedRecipe.image} alt={selectedRecipe.title} className="w-full h-full object-cover opacity-90" />
              <button
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 p-2 bg-[#2D2A26]/80 text-white rounded-full hover:bg-[#2D2A26] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#5E7153] rounded text-white">
                  {selectedRecipe.dietType}
                </span>
                <h2 className="text-xl font-bold font-['Outfit',sans-serif] mt-1 text-white">{selectedRecipe.title}</h2>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-xs text-[#2D2A26]">
              {/* Macros Row */}
              <div className="grid grid-cols-4 gap-2 text-center p-3 bg-[#F9F8F6] rounded-2xl border border-[#E5E2D9]">
                <div>
                  <span className="text-[10px] text-[#7A766F] block">Calories</span>
                  <strong className="text-sm text-[#2D2A26]">{selectedRecipe.calories} kcal</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#7A766F] block">Protein</span>
                  <strong className="text-sm text-[#5E7153]">{selectedRecipe.protein}g</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#7A766F] block">Carbs</span>
                  <strong className="text-sm text-[#D4A373]">{selectedRecipe.carbs}g</strong>
                </div>
                <div>
                  <span className="text-[10px] text-[#7A766F] block">Fats</span>
                  <strong className="text-sm text-[#A3B18A]">{selectedRecipe.fat}g</strong>
                </div>
              </div>

              {/* Ingredients */}
              <div>
                <h4 className="font-bold text-sm text-[#2D2A26] font-['Outfit',sans-serif] mb-2">Ingredients</h4>
                <ul className="space-y-1.5">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5E7153]" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div>
                <h4 className="font-bold text-sm text-[#2D2A26] font-['Outfit',sans-serif] mb-2">Preparation Instructions</h4>
                <ol className="space-y-2">
                  {selectedRecipe.instructions.map((step, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="font-bold text-[#5E7153] shrink-0">{i + 1}.</span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
