import React from 'react';
import { useWellness } from '../context/WellnessContext';
import {
  ArrowRight,
  Sparkles,
  Dumbbell,
  Apple,
  Moon,
  Smile,
  ShieldCheck,
  TrendingUp,
  Compass,
  Trophy,
  CheckCircle2,
  MapPin,
  UserCheck,
  LogIn,
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { setActiveTab, setIsLogActivityOpen, setIsLoginModalOpen, metrics, userName } = useWellness();

  return (
    <div className="space-y-16 pb-20 animate-in fade-in duration-300">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-12 lg:pt-10 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>The Modern Lifestyle & Longevity Platform</span>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                  <span className="text-emerald-600 font-bold">●</span>
                  <span>Default Login View</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.1]">
                Build a Healthier Life, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  One Day at a Time.
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
                A digital wellness companion engineered to harmonize your everyday fitness,
                nourishing nutrition, restorative sleep, calm mindfulness, and positive habit architecture.
                No clinical jargon—just sustainable vitality.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  id="hero-start-journey-btn"
                  onClick={() => setActiveTab('dashboard')}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-xs sm:text-sm shadow-xl shadow-emerald-200 flex items-center justify-center gap-2 group transition-all cursor-pointer"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-member-login-btn"
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-5 sm:px-6 py-3.5 sm:py-4 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 rounded-2xl font-bold text-xs sm:text-sm shadow-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <UserCheck className="w-4 h-4 text-emerald-600" />
                  <span>Member Sign In</span>
                </button>

                <button
                  id="hero-explore-wellness-btn"
                  onClick={() => {
                    const el = document.getElementById('core-pillars');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 sm:px-6 py-3.5 sm:py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-2xl font-bold text-xs sm:text-sm shadow-sm transition-colors cursor-pointer text-center"
                >
                  Explore Pillars
                </button>
              </div>

              {/* Quick proof stats */}
              <div className="pt-6 grid grid-cols-3 gap-2 sm:gap-4 border-t border-slate-100">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">92%</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-semibold mt-0.5">Habit Retention</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">4.9 ★</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-semibold mt-0.5">Lifestyle Rating</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">100%</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-semibold mt-0.5">Preventative Focus</div>
                </div>
              </div>
            </div>

            {/* Right Visual Column with Geometric Floating Cards */}
            <div className="lg:col-span-6 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-md sm:max-w-lg lg:max-w-none">
                {/* Main Lifestyle Hero Photo */}
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] bg-emerald-50">
                  <img
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=85"
                    alt="Active outdoor yoga & lifestyle wellness"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300">
                      Preventative Living
                    </span>
                    <h3 className="text-base sm:text-lg font-bold">Awaken Vitality in Mind & Body</h3>
                  </div>
                </div>

                {/* Floating Metric Card 1: Wellness Score */}
                <div className="absolute -top-4 -left-2 sm:-top-6 sm:-left-6 bg-white/95 backdrop-blur-md p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-black text-base sm:text-lg shadow-md shadow-emerald-200">
                    {metrics.wellnessScore}
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Wellness Index
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800">Optimal Zone</span>
                  </div>
                </div>

                {/* Floating Metric Card 2: Steps & Movement */}
                <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-3 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 font-bold">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Active Strides
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-slate-800">
                      {metrics.steps.toLocaleString()} / 10k
                    </span>
                  </div>
                </div>

                {/* Floating Metric Card 3: Hydration Pill */}
                <div className="hidden sm:flex absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 bg-blue-600 text-white py-2 px-3.5 rounded-2xl shadow-lg shadow-blue-300/50 items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-200 animate-ping"></div>
                  <span className="text-xs font-bold">{metrics.waterLiters}L Hydrated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE LIFESTYLE PILLARS */}
      <section id="core-pillars" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Comprehensive Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Six Pillars of Everyday Wellness
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium mt-2 leading-relaxed">
            Engineered to guide your daily choices without rigid regimens or clinical stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Daily Wellness Dashboard */}
          <div
            onClick={() => setActiveTab('dashboard')}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Personalized Dashboard
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                Real-time composite score balancing steps, hydration, restorative sleep, exercise, and mood check-ins.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>View Your Command Center</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Fitness Hub */}
          <div
            onClick={() => setActiveTab('fitness')}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Movement & Fitness Hub
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                Accessible beginner flows, home mobility routines, outdoor brisk walk targets, and full step timers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>Explore Workouts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Nutrition Hub */}
          <div
            onClick={() => setActiveTab('nutrition')}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Apple className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Nourishing Nutrition
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                Prebiotic bowls, wild salmon recipes, antioxidant smoothies, and effortless hydration bottle counters.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>Browse Whole Recipes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Sleep & Recovery */}
          <div
            onClick={() => setActiveTab('sleep')}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Moon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Sleep & Circadian Rhythm
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                Sleep duration, bedtime consistency score, wind-down routine checklist, and relaxation soundscapes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>Rest & Recovery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Mental Wellness */}
          <div
            onClick={() => setActiveTab('mindfulness')}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Mindfulness & Mood
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                Interactive box breathing pacer, emotional check-ins, gratitude journaling, and nervous system reset.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>Center Your Mind</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 6: Habit Builder & Challenges */}
          <div
            onClick={() => setActiveTab('challenges')}
            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Habits & Challenges
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">
                Multi-day community sprints: 7-Day Hydration, 30-Day Walking, Better Sleep, and custom streak logs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>Join Active Sprints</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. LIFESTYLE VS CLINICAL DISTINCTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 text-white rounded-[2.5rem] p-8 sm:p-12 shadow-2xl shadow-emerald-900/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-300">
              Preventative Lifestyle Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-black leading-tight">
              Health Isn't Created in a Clinic — It's Cultivated in Everyday Habits.
            </h2>
            <p className="text-sm text-emerald-100 leading-relaxed font-medium">
              Traditional healthcare focuses on treating disease after symptoms arise.
              Vitalia exists for the other 99% of your life: the water you sip, the morning sunlight you absorb,
              the steps you take with friends, and the deep restorative sleep you protect.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Medical Prescriptions</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Positive Habit Streaks</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Whole Body Energy</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
            <button
              onClick={() => setActiveTab('passport')}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-extrabold text-sm rounded-2xl transition-colors shadow-lg shadow-emerald-950/40 cursor-pointer"
            >
              View Your Health Passport →
            </button>
          </div>
        </div>
      </section>

      {/* 4. NEARBY LIFESTYLE DISCOVERY TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center shrink-0">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Explore Nearby Wellness Spaces</h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Discover sunlit yoga lofts, running tracks, scenic botanical trails, and organic harvest kitchens in your neighborhood.
              </p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('nearby')}
            className="shrink-0 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-2xl transition-colors cursor-pointer"
          >
            Find Nearby Spaces →
          </button>
        </div>
      </section>
    </div>
  );
};
