import React from 'react';
import { useWellness } from '../context/WellnessContext';
import { X, Clock, Flame, Check, Utensils } from 'lucide-react';

export const RecipeDetailModal: React.FC = () => {
  const { selectedRecipe, setSelectedRecipe, toggleRecipeLogged } = useWellness();

  if (!selectedRecipe) return null;

  return (
    <div
      onClick={() => setSelectedRecipe(null)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Banner image */}
        <div className="relative h-48 w-full bg-slate-100 shrink-0">
          <img
            src={selectedRecipe.imageUrl}
            alt={selectedRecipe.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setSelectedRecipe(null)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-4 flex gap-1.5">
            {selectedRecipe.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold bg-white/95 text-slate-800 px-2.5 py-0.5 rounded-full shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div>
            <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold mb-1">
              <span className="flex items-center gap-1 text-emerald-600 font-bold uppercase tracking-wider">
                <Utensils className="w-3.5 h-3.5" />
                {selectedRecipe.mealType}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {selectedRecipe.prepTimeMinutes} mins prep
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-amber-600 font-bold">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                {selectedRecipe.calories} kcal
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">{selectedRecipe.title}</h3>
          </div>

          {/* Macro Breakdown Chips */}
          <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase">Protein</div>
              <div className="text-lg font-black text-slate-800">{selectedRecipe.proteinGrams}g</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase">Carbs</div>
              <div className="text-lg font-black text-slate-800">{selectedRecipe.carbsGrams}g</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 font-bold uppercase">Fats</div>
              <div className="text-lg font-black text-slate-800">{selectedRecipe.fatGrams}g</div>
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Wholesome Ingredients
            </h4>
            <ul className="space-y-1.5">
              {selectedRecipe.ingredients.map((ing, i) => (
                <li key={i} className="text-xs font-medium text-slate-700 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Preparation Steps
            </h4>
            <ol className="space-y-2">
              {selectedRecipe.instructions.map((step, idx) => (
                <li key={idx} className="text-xs text-slate-600 flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer Log Action */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex gap-3 shrink-0">
          <button
            onClick={() => setSelectedRecipe(null)}
            className="flex-1 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              toggleRecipeLogged(selectedRecipe.id);
            }}
            className={`flex-1 py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
              selectedRecipe.loggedToday
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-200'
            }`}
          >
            {selectedRecipe.loggedToday ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" /> Logged for Today
              </>
            ) : (
              'Log to Today’s Meals'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
