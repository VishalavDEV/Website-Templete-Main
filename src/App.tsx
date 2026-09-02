/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { WellnessProvider, useWellness } from './context/WellnessContext';
import { Navbar } from './components/Navbar';
import { LogActivityModal } from './components/LogActivityModal';
import { BreathingExerciseModal } from './components/BreathingExerciseModal';
import { WorkoutPlayerModal } from './components/WorkoutPlayerModal';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { SearchModal } from './components/SearchModal';
import { LoginModal } from './components/LoginModal';

import { HomeView } from './views/HomeView';
import { DashboardView } from './views/DashboardView';
import { FitnessView } from './views/FitnessView';
import { NutritionView } from './views/NutritionView';
import { SleepView } from './views/SleepView';
import { MindfulnessView } from './views/MindfulnessView';
import { HabitsView } from './views/HabitsView';
import { ChallengesView } from './views/ChallengesView';
import { PassportView } from './views/PassportView';
import { InsightsView } from './views/InsightsView';
import { NearbyView } from './views/NearbyView';

import {
  CheckCircle,
  ShieldCheck,
  Heart,
  Sparkles,
  Compass,
  LayoutDashboard,
  Dumbbell,
  Apple,
  CheckSquare,
  Plus,
} from 'lucide-react';

const MainAppContent: React.FC = () => {
  const {
    activeTab,
    toastMessage,
    setActiveTab,
    isSearchOpen,
    setIsSearchOpen,
    isLogActivityOpen,
    setIsLogActivityOpen,
    isBreathingModalOpen,
    setIsBreathingModalOpen,
    isLoginModalOpen,
    setIsLoginModalOpen,
    activeWorkoutModal,
    setActiveWorkoutModal,
    selectedRecipe,
    setSelectedRecipe,
  } = useWellness();

  // Handle global Escape key to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isSearchOpen) setIsSearchOpen(false);
        if (isLogActivityOpen) setIsLogActivityOpen(false);
        if (isBreathingModalOpen) setIsBreathingModalOpen(false);
        if (isLoginModalOpen) setIsLoginModalOpen(false);
        if (activeWorkoutModal) setActiveWorkoutModal(null);
        if (selectedRecipe) setSelectedRecipe(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isSearchOpen,
    setIsSearchOpen,
    isLogActivityOpen,
    setIsLogActivityOpen,
    isBreathingModalOpen,
    setIsBreathingModalOpen,
    isLoginModalOpen,
    setIsLoginModalOpen,
    activeWorkoutModal,
    setActiveWorkoutModal,
    selectedRecipe,
    setSelectedRecipe,
  ]);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'dashboard':
        return <DashboardView />;
      case 'fitness':
        return <FitnessView />;
      case 'nutrition':
        return <NutritionView />;
      case 'sleep':
        return <SleepView />;
      case 'mindfulness':
        return <MindfulnessView />;
      case 'habits':
        return <HabitsView />;
      case 'challenges':
        return <ChallengesView />;
      case 'passport':
        return <PassportView />;
      case 'insights':
        return <InsightsView />;
      case 'nearby':
        return <NearbyView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700/60 max-w-md">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></div>
            <p className="text-xs sm:text-sm font-semibold text-slate-100">{toastMessage}</p>
          </div>
        </div>
      )}

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 pb-28 xl:pb-12">
        {renderActiveTab()}
      </main>

      {/* Mobile & Tablet Bottom Navigation Bar (Visible on screens below xl) */}
      <nav
        id="mobile-bottom-nav"
        className="xl:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/80 px-2 py-2 shadow-2xl flex items-center justify-around"
      >
        {[
          { tab: 'home' as const, label: 'Home', icon: <Compass className="w-5 h-5" /> },
          { tab: 'dashboard' as const, label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
          { tab: 'fitness' as const, label: 'Fitness', icon: <Dumbbell className="w-5 h-5" /> },
          { tab: 'nutrition' as const, label: 'Nutrition', icon: <Apple className="w-5 h-5" /> },
          { tab: 'habits' as const, label: 'Habits', icon: <CheckSquare className="w-5 h-5" /> },
        ].map((item) => {
          const isActive = activeTab === item.tab;
          return (
            <button
              key={item.tab}
              id={`bottom-nav-${item.tab}`}
              onClick={() => setActiveTab(item.tab)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all cursor-pointer ${
                isActive
                  ? 'text-emerald-700 font-extrabold scale-105'
                  : 'text-slate-400 hover:text-slate-600 font-semibold'
              }`}
            >
              <div
                className={`p-1 rounded-xl transition-colors ${
                  isActive ? 'bg-emerald-50 text-emerald-600' : ''
                }`}
              >
                {item.icon}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
            </button>
          );
        })}

        {/* Quick Log Action on Mobile */}
        <button
          onClick={() => setIsLogActivityOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl text-emerald-600 font-bold hover:scale-105 transition-all cursor-pointer"
          title="Quick Log"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-200">
            <Plus className="w-4 h-4 stroke-[3]" />
          </div>
          <span className="text-[10px] tracking-tight mt-0.5 text-slate-700 font-bold">Log</span>
        </button>
      </nav>

      {/* Modern Lifestyle Footer */}
      <footer className="bg-white border-t border-slate-100 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center shadow-md shadow-emerald-200 shrink-0">
                <div className="w-3.5 h-3.5 bg-white rounded-xs rotate-45"></div>
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-slate-900 block leading-none">
                  VITALIA
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Everyday Wellness Companion
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-slate-500">
              <button onClick={() => setActiveTab('home')} className="hover:text-emerald-700 cursor-pointer">
                Home
              </button>
              <button onClick={() => setActiveTab('dashboard')} className="hover:text-emerald-700 cursor-pointer">
                Daily Dashboard
              </button>
              <button onClick={() => setActiveTab('fitness')} className="hover:text-emerald-700 cursor-pointer">
                Fitness Hub
              </button>
              <button onClick={() => setActiveTab('nutrition')} className="hover:text-emerald-700 cursor-pointer">
                Nutrition & Water
              </button>
              <button onClick={() => setActiveTab('sleep')} className="hover:text-emerald-700 cursor-pointer">
                Sleep & Rest
              </button>
              <button onClick={() => setActiveTab('mindfulness')} className="hover:text-emerald-700 cursor-pointer">
                Mindfulness
              </button>
              <button onClick={() => setActiveTab('habits')} className="hover:text-emerald-700 cursor-pointer">
                Habit Builder
              </button>
              <button onClick={() => setActiveTab('challenges')} className="hover:text-emerald-700 cursor-pointer">
                Challenges
              </button>
              <button onClick={() => setActiveTab('passport')} className="hover:text-emerald-700 cursor-pointer">
                Health Passport
              </button>
              <button onClick={() => setActiveTab('nearby')} className="hover:text-emerald-700 cursor-pointer">
                Nearby Spaces
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Vitalia Lifestyle Technologies. Designed for preventative, everyday vitality.</p>
            <p className="flex items-center gap-1 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Lifestyle wellness platform — non-clinical, zero medical prescriptions.</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Global Interactive Modals */}
      <LogActivityModal />
      <BreathingExerciseModal />
      <WorkoutPlayerModal />
      <RecipeDetailModal />
      <SearchModal />
      <LoginModal />
    </div>
  );
};

export default function App() {
  return (
    <WellnessProvider>
      <MainAppContent />
    </WellnessProvider>
  );
}
