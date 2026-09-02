import React, { useState, useMemo } from 'react';
import { useWellness } from '../context/WellnessContext';
import { NavTab } from '../types/wellness';
import { Search, X, Dumbbell, Apple, Trophy, MapPin, CheckSquare, Sparkles } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    setActiveTab,
    workouts,
    recipes,
    challenges,
    nearbyLocations,
    habits,
    setSelectedRecipe,
    setActiveWorkoutModal,
  } = useWellness();

  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const results: {
      id: string;
      title: string;
      subtitle: string;
      category: string;
      icon: React.ReactNode;
      action: () => void;
    }[] = [];

    // Search Workouts
    workouts.forEach((w) => {
      if (w.title.toLowerCase().includes(q) || w.category.toLowerCase().includes(q)) {
        results.push({
          id: w.id,
          title: w.title,
          subtitle: `${w.durationMinutes}m · ${w.level} · ${w.category}`,
          category: 'Fitness',
          icon: <Dumbbell className="w-4 h-4 text-emerald-600" />,
          action: () => {
            setActiveTab('fitness');
            setActiveWorkoutModal(w);
            setIsSearchOpen(false);
          },
        });
      }
    });

    // Search Recipes
    recipes.forEach((r) => {
      if (r.title.toLowerCase().includes(q) || r.mealType.toLowerCase().includes(q) || r.tags.some(t => t.toLowerCase().includes(q))) {
        results.push({
          id: r.id,
          title: r.title,
          subtitle: `${r.calories} kcal · ${r.prepTimeMinutes}m · ${r.mealType}`,
          category: 'Nutrition',
          icon: <Apple className="w-4 h-4 text-amber-500" />,
          action: () => {
            setActiveTab('nutrition');
            setSelectedRecipe(r);
            setIsSearchOpen(false);
          },
        });
      }
    });

    // Search Habits
    habits.forEach((h) => {
      if (h.title.toLowerCase().includes(q) || h.category.toLowerCase().includes(q)) {
        results.push({
          id: h.id,
          title: h.title,
          subtitle: `Streak: ${h.streak} days · ${h.targetDescription}`,
          category: 'Habit',
          icon: <CheckSquare className="w-4 h-4 text-blue-500" />,
          action: () => {
            setActiveTab('habits');
            setIsSearchOpen(false);
          },
        });
      }
    });

    // Search Challenges
    challenges.forEach((c) => {
      if (c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)) {
        results.push({
          id: c.id,
          title: c.title,
          subtitle: `${c.totalDays} Days · ${c.participantsCount} participants`,
          category: 'Challenge',
          icon: <Trophy className="w-4 h-4 text-purple-500" />,
          action: () => {
            setActiveTab('challenges');
            setIsSearchOpen(false);
          },
        });
      }
    });

    // Search Nearby
    nearbyLocations.forEach((l) => {
      if (l.name.toLowerCase().includes(q) || l.category.toLowerCase().includes(q) || l.address.toLowerCase().includes(q)) {
        results.push({
          id: l.id,
          title: l.name,
          subtitle: `${l.distanceMiles} mi · ${l.category} · ${l.rating} ★`,
          category: 'Nearby',
          icon: <MapPin className="w-4 h-4 text-rose-500" />,
          action: () => {
            setActiveTab('nearby');
            setIsSearchOpen(false);
          },
        });
      }
    });

    return results.slice(0, 8);
  }, [query, workouts, recipes, habits, challenges, nearbyLocations, setActiveTab, setSelectedRecipe, setActiveWorkoutModal, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  return (
    <div
      onClick={() => setIsSearchOpen(false)}
      className="fixed inset-0 z-50 flex items-start justify-center pt-8 sm:pt-20 p-3 sm:p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 w-full max-w-xl max-h-[88vh] overflow-y-auto flex flex-col"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-6 py-4 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search workouts, wholesome recipes, habits, challenges, nearby..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Shortcuts when empty */}
        {!query.trim() && (
          <div className="p-6 space-y-4">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Quick Hubs
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { tab: 'fitness' as NavTab, label: 'Workouts & Yoga', icon: '🏃' },
                { tab: 'nutrition' as NavTab, label: 'Clean Recipes', icon: '🥗' },
                { tab: 'mindfulness' as NavTab, label: 'Breathwork & Calm', icon: '🌿' },
                { tab: 'habits' as NavTab, label: 'Habit Tracker', icon: '⚡' },
                { tab: 'sleep' as NavTab, label: 'Sleep & Recovery', icon: '🌙' },
                { tab: 'nearby' as NavTab, label: 'Nearby Studios', icon: '📍' },
              ].map((shortcut) => (
                <button
                  key={shortcut.tab}
                  onClick={() => {
                    setActiveTab(shortcut.tab);
                    setIsSearchOpen(false);
                  }}
                  className="p-3 bg-slate-50 hover:bg-emerald-50/70 border border-slate-100 hover:border-emerald-200 rounded-2xl text-left transition-all cursor-pointer group"
                >
                  <span className="text-xl block mb-1">{shortcut.icon}</span>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                    {shortcut.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query.trim() && (
          <div className="p-4 divide-y divide-slate-100 max-h-96 overflow-y-auto">
            {searchResults.length > 0 ? (
              searchResults.map((res) => (
                <button
                  key={res.id}
                  onClick={res.action}
                  className="w-full text-left p-3 hover:bg-emerald-50/60 rounded-xl transition-colors flex items-center gap-3 cursor-pointer group"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-white flex items-center justify-center shrink-0 border border-slate-200/40">
                    {res.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-800 truncate group-hover:text-emerald-700">
                        {res.title}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        {res.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 truncate">{res.subtitle}</p>
                  </div>
                </button>
              ))
            ) : (
              <div className="py-8 text-center text-slate-400 text-xs">
                <Sparkles className="w-6 h-6 mx-auto text-slate-300 mb-2" />
                No results found for "{query}". Try "yoga", "salmon", "water", or "park".
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
