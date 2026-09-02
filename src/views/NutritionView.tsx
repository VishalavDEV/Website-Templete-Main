import React, { useState } from 'react';
import { useWellness } from '../context/WellnessContext';
import { RecipeItem } from '../types/wellness';
import {
  Apple,
  Droplets,
  Plus,
  Clock,
  Flame,
  Check,
  Utensils,
  Sparkles,
  Info,
} from 'lucide-react';

export const NutritionView: React.FC = () => {
  const {
    recipes,
    setSelectedRecipe,
    toggleRecipeLogged,
    metrics,
    addWater,
  } = useWellness();

  const [filterMealType, setFilterMealType] = useState<string>('all');

  const filteredRecipes = recipes.filter((r) => {
    if (filterMealType === 'all') return true;
    return r.mealType === filterMealType;
  });

  // Calculate current logged calories and macros from logged recipes
  const loggedRecipes = recipes.filter((r) => r.loggedToday);
  const totalCalories = loggedRecipes.reduce((sum, r) => sum + r.calories, 0);
  const totalProtein = loggedRecipes.reduce((sum, r) => sum + r.proteinGrams, 0);
  const totalCarbs = loggedRecipes.reduce((sum, r) => sum + r.carbsGrams, 0);
  const totalFat = loggedRecipes.reduce((sum, r) => sum + r.fatGrams, 0);

  // Water glasses calculation: 1 glass = 250ml (0.25L)
  const totalGlassesTarget = Math.round(metrics.waterGoalLiters / 0.25); // 12 glasses
  const currentGlasses = Math.min(totalGlassesTarget, Math.floor(metrics.waterLiters / 0.25));

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-[11px] font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Nourishing Fuel & Hydration
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2">
            Whole Food Nutrition Hub
          </h1>
          <p className="text-slate-500 text-sm font-medium mt-1">
            Colorful prebiotic botanicals, high-omega recipes, and cellular hydration tracking.
          </p>
        </div>

        {/* Macro Summary Pill */}
        <div className="flex gap-2 sm:gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-xs">
          <div className="text-center px-3 border-r border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Calories</span>
            <div className="text-base font-black text-slate-800">{totalCalories || 800} kcal</div>
          </div>
          <div className="text-center px-3 border-r border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Protein</span>
            <div className="text-base font-black text-emerald-700">{totalProtein || 48}g</div>
          </div>
          <div className="text-center px-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Hydration</span>
            <div className="text-base font-black text-blue-600">{metrics.waterLiters}L</div>
          </div>
        </div>
      </div>

      {/* Interactive Water Tracker Section */}
      <div className="bg-gradient-to-br from-blue-900 to-sky-900 text-white rounded-[2.5rem] p-8 shadow-xl shadow-blue-900/10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-sky-300">
              <Droplets className="w-4 h-4 text-sky-300" /> Interactive Hydration Station
            </div>
            <h2 className="text-3xl font-black">
              {metrics.waterLiters} <span className="text-sky-300 text-xl font-normal">/ {metrics.waterGoalLiters} Liters</span>
            </h2>
            <p className="text-xs text-sky-100/90 leading-relaxed font-medium">
              Tap any glass below to instantly log 250ml of pure water. Proper hydration prevents brain fog, improves digestion, and lubricates joint cartilage.
            </p>
          </div>

          {/* Quick Add Buttons */}
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => addWater(0.25)}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-bold transition-colors border border-white/10 cursor-pointer"
            >
              +1 Glass (250ml)
            </button>
            <button
              onClick={() => addWater(0.5)}
              className="px-6 py-3 bg-sky-400 hover:bg-sky-300 text-slate-950 rounded-2xl text-xs font-black transition-colors shadow-md cursor-pointer"
            >
              +Flask (500ml)
            </button>
          </div>
        </div>

        {/* 12 Interactive Water Glasses Grid */}
        <div className="mt-8 pt-6 border-t border-sky-800/80">
          <div className="text-xs font-bold text-sky-200 mb-3 flex items-center justify-between">
            <span>Daily Glass Progress ({currentGlasses} of {totalGlassesTarget} completed)</span>
            <span className="text-[11px] font-semibold text-sky-300">
              {Math.round((metrics.waterLiters / metrics.waterGoalLiters) * 100)}% of goal
            </span>
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-12 gap-2.5">
            {Array.from({ length: totalGlassesTarget }).map((_, idx) => {
              const isFilled = idx < currentGlasses;
              return (
                <button
                  key={idx}
                  onClick={() => addWater(0.25)}
                  className={`p-3 rounded-2xl border flex flex-col items-center justify-center transition-all cursor-pointer group ${
                    isFilled
                      ? 'bg-sky-400 border-sky-300 text-slate-950 shadow-md shadow-sky-500/20'
                      : 'bg-sky-950/40 border-sky-800 text-sky-400 hover:bg-sky-900/60'
                  }`}
                  title={`Glass ${idx + 1}: ${isFilled ? 'Hydrated' : 'Click to log 250ml'}`}
                >
                  <Droplets
                    className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                      isFilled ? 'fill-current' : ''
                    }`}
                  />
                  <span className="text-[9px] font-bold mt-1">250ml</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Meal Filters & Recipe Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {[
              { id: 'all', label: 'All Recipes' },
              { id: 'breakfast', label: 'Breakfast Fuel' },
              { id: 'lunch', label: 'Lunch Nourish Bowls' },
              { id: 'dinner', label: 'Dinner & Recovery' },
              { id: 'snack', label: 'Healthy Snacks' },
            ].map((meal) => (
              <button
                key={meal.id}
                onClick={() => setFilterMealType(meal.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  filterMealType === meal.id
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-200'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {meal.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-400 font-semibold">
            {filteredRecipes.length} nutrient-dense ideas
          </span>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-all"
            >
              {/* Left Photo */}
              <div className="relative w-full sm:w-56 h-48 sm:h-auto bg-slate-100 shrink-0 overflow-hidden">
                <img
                  src={recipe.imageUrl}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-slate-900 px-2.5 py-0.5 rounded-full shadow-xs">
                  {recipe.mealType}
                </span>
              </div>

              {/* Right Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold mb-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {recipe.prepTimeMinutes}m prep
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-600 font-bold">
                      <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      {recipe.calories} kcal
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {recipe.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {recipe.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Macro breakdown */}
                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl text-center text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block">Protein</span>
                    <span className="font-extrabold text-slate-800">{recipe.proteinGrams}g</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block">Carbs</span>
                    <span className="font-extrabold text-slate-800">{recipe.carbsGrams}g</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block">Fats</span>
                    <span className="font-extrabold text-slate-800">{recipe.fatGrams}g</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => setSelectedRecipe(recipe)}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                  >
                    View Recipe
                  </button>

                  <button
                    onClick={() => toggleRecipeLogged(recipe.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                      recipe.loggedToday
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-xs'
                    }`}
                  >
                    {recipe.loggedToday ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Logged
                      </>
                    ) : (
                      'Log Meal'
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
