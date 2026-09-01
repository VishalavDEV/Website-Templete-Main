import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MessageSquare, Flame, Moon, Sparkles, HeartPulse, ChevronRight, Edit3 } from 'lucide-react';

export default function CoachingJournal() {
  const [activeWeek, setActiveWeek] = useState(1);

  const WEEKS_DATA = {
    1: {
      weekTitle: 'Week 01 — Baseline Discovery',
      phase: 'Initial Alignment',
      recoveryScore: 68,
      habitsCompleted: '3 / 7 Days',
      coachMessage: 'Focus on setting your bed routine by 10:30 PM. No heavy workouts this week—just movement screens and joint mobility.',
      coachName: 'Nora Hale',
      trainingFocus: 'Movement Screen & Gentle Postural Prep',
      reflectionNote: 'Felt tight in lower back; coach adjusted hip flexor mobility drills.',
      habitRings: [
        { label: 'Hydration Anchor', percent: 60, done: true },
        { label: '10:30 PM Sleep Cutoff', percent: 40, done: false },
        { label: 'Morning Mobility 20min', percent: 70, done: true }
      ]
    },
    4: {
      weekTitle: 'Week 04 — Establishing Rhythm',
      phase: 'Consistent Momentum',
      recoveryScore: 82,
      habitsCompleted: '5 / 7 Days',
      coachMessage: 'Your movement velocity on squats looks smooth. We are adding mild resistance while keeping your recovery metrics stable.',
      coachName: 'Nora Hale',
      trainingFocus: 'Controlled Resistance & Core Stability',
      reflectionNote: 'Sleep pattern is stabilizing. Waking up naturally 10 minutes before alarm.',
      habitRings: [
        { label: 'Hydration Anchor', percent: 90, done: true },
        { label: '10:30 PM Sleep Cutoff', percent: 80, done: true },
        { label: 'Morning Mobility 20min', percent: 85, done: true }
      ]
    },
    8: {
      weekTitle: 'Week 08 — Structural Progression',
      phase: 'Physical Resilience',
      recoveryScore: 89,
      habitsCompleted: '6 / 7 Days',
      coachMessage: 'Notice how your afternoon energy slump has vanished? That is your nutrition timing working in sync with your training stimulus.',
      coachName: 'Elias Rowan',
      trainingFocus: 'Full-Body Compound Movement & Energy Pacing',
      reflectionNote: 'Workout consistency feels effortless now. Food choices feel intuitive.',
      habitRings: [
        { label: 'Hydration Anchor', percent: 95, done: true },
        { label: '10:30 PM Sleep Cutoff', percent: 90, done: true },
        { label: 'Morning Mobility 20min', percent: 95, done: true }
      ]
    },
    12: {
      weekTitle: 'Week 12 — Lifestyle Autonomy',
      phase: 'Sustainable Habit Mastery',
      recoveryScore: 94,
      habitsCompleted: '7 / 7 Days',
      coachMessage: 'You have built an autonomous health system. You now possess the tools to navigate travel, stressful weeks, and routine changes with confidence.',
      coachName: 'Sienna Vale',
      trainingFocus: 'Long-Term Athletic Independence & Vitality',
      reflectionNote: 'AURELIS is no longer a program—it is simply how I live every day.',
      habitRings: [
        { label: 'Hydration Anchor', percent: 100, done: true },
        { label: '10:30 PM Sleep Cutoff', percent: 95, done: true },
        { label: 'Morning Mobility 20min', percent: 100, done: true }
      ]
    }
  };

  const currentData = WEEKS_DATA[activeWeek];

  return (
    <section id="coaching-experience" className="py-24 md:py-36 bg-[#F3F0E8] text-[#171816] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B56F4D] font-mono font-bold block mb-3">
            THE COACHING EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-[#171816]">
            Coaching that adapts <span className="editorial-italic font-normal text-[#3E5142]">to real life.</span>
          </h2>
          <p className="mt-4 text-base text-[#171816]/75 font-light leading-relaxed">
            No rigid, cold SaaS dashboards. Instead, an intimate digital wellness journal that evolves week by week alongside your physical journey.
          </p>
        </div>

        {/* Timeline Progression Controls */}
        <div className="flex items-center justify-between bg-[#D8D4C8]/50 p-2 rounded-2xl mb-12 border border-[#171816]/10">
          {[1, 4, 8, 12].map((week) => (
            <button
              key={week}
              onClick={() => setActiveWeek(week)}
              className={`flex-1 py-3 sm:py-4 rounded-xl transition-all duration-300 font-mono text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-2 ${
                activeWeek === week
                  ? 'bg-[#171816] text-[#F3F0E8] shadow-md scale-[1.01]'
                  : 'text-[#171816]/60 hover:text-[#171816] hover:bg-[#F3F0E8]/60'
              }`}
            >
              <span>WEEK 0{week < 10 ? `0${week}` : week}</span>
              <span className="text-[10px] font-normal opacity-70 hidden sm:inline">
                ({week === 1 ? 'Start' : week === 4 ? 'Momentum' : week === 8 ? 'Resilience' : 'Mastery'})
              </span>
            </button>
          ))}
        </div>

        {/* Tactile Wellness Journal Card View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWeek}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="bg-[#ECE8DE] border border-[#171816]/15 rounded-3xl p-6 sm:p-12 shadow-xl relative"
          >
            {/* Journal Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#171816]/15 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3E5142] text-[#F3F0E8] flex items-center justify-center font-heading font-bold text-sm">
                  W{activeWeek}
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-[#171816]">
                    {currentData.weekTitle}
                  </h3>
                  <span className="text-xs text-[#B56F4D] font-mono uppercase tracking-wider">
                    {currentData.phase}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="px-3 py-1.5 rounded-full bg-[#171816]/5 border border-[#171816]/10 flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-emerald-700" />
                  <span>Recovery Score: <strong>{currentData.recoveryScore}%</strong></span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-[#171816]/5 border border-[#171816]/10 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B56F4D]" />
                  <span>Habit Sync: <strong>{currentData.habitsCompleted}</strong></span>
                </div>
              </div>
            </div>

            {/* Journal Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
              {/* Left Column: Habit Rings & Progress */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#F3F0E8] p-6 rounded-2xl border border-[#171816]/10 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#171816]/60">
                    <span>Habit Tracker</span>
                    <span>Weekly Progression</span>
                  </div>

                  <div className="space-y-4">
                    {currentData.habitRings.map((habit, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-xs font-medium">
                          <span>{habit.label}</span>
                          <span className="font-mono text-[#B56F4D]">{habit.percent}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#D8D4C8] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${habit.percent}%` }}
                            transition={{ duration: 0.8, delay: idx * 0.15 }}
                            className="h-full bg-[#3E5142] rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Training Plan Summary Card */}
                <div className="bg-[#F3F0E8] p-6 rounded-2xl border border-[#171816]/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#B56F4D] block mb-2">
                    Custom Movement Focus
                  </span>
                  <p className="text-base font-heading font-semibold text-[#171816]">
                    {currentData.trainingFocus}
                  </p>
                </div>
              </div>

              {/* Right Column: Coach Note & Handwritten-Style Journal Reflection */}
              <div className="lg:col-span-7 space-y-6">
                {/* Coach Message Bubble */}
                <div className="bg-[#3E5142] text-[#F3F0E8] p-6 rounded-2xl shadow-md relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#B56F4D] flex items-center justify-center text-xs font-bold text-white font-mono">
                      CH
                    </div>
                    <div>
                      <p className="text-xs font-semibold">{currentData.coachName}</p>
                      <p className="text-[10px] font-mono text-white/70">AURELIS Lead Coach</p>
                    </div>
                  </div>
                  <p className="text-sm font-light leading-relaxed text-white/90 italic">
                    "{currentData.coachMessage}"
                  </p>
                </div>

                {/* Member Reflection Journal Entry */}
                <div className="bg-[#F3F0E8] p-6 rounded-2xl border border-[#171816]/10 space-y-3 relative">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#171816]/60">
                    <Edit3 className="w-3.5 h-3.5 text-[#B56F4D]" />
                    <span>Personal Reflection Note</span>
                  </div>
                  <p className="editorial-italic text-lg text-[#171816] leading-relaxed">
                    "{currentData.reflectionNote}"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
