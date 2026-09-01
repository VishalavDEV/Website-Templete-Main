import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Flame, Zap, Shield, Trophy, HelpCircle, CheckCircle2, Star, Download, Sparkles } from 'lucide-react';
import { api } from '../services/api';

const BADGE_ICONS = {
  Award: Award,
  Flame: Flame,
  Zap: Zap,
  HelpCircle: HelpCircle,
  Trophy: Trophy
};

export default function Achievements() {
  const [achievements, setAchievements] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAchievements() {
      try {
        const data = await api.getAchievements();
        setAchievements(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadAchievements();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin" />
      </div>
    );
  }

  if (!achievements) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm font-semibold">Failed to load achievements. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 font-outfit">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-600 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles size={12} />
            Gamified Progress
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-education-navy"
          >
            Milestones & Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-education-navy/70 leading-relaxed"
          >
            Unlock milestones, track your learning streak, and collect badges to verify your subject mastery.
          </motion.p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stats & Certificates */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Stats */}
            <div className="p-6 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-sm grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-sky-50/40 rounded-xl">
                <span className="text-[10px] text-gray-400 block font-semibold mb-0.5">Total Points</span>
                <span className="text-lg font-bold text-education-navy">{achievements.points} XP</span>
              </div>
              <div className="text-center p-3 bg-orange-50/30 rounded-xl">
                <span className="text-[10px] text-orange-400 block font-semibold mb-0.5">Study Streak</span>
                <span className="text-lg font-bold text-orange-600">🔥 {achievements.learningStreak} Days</span>
              </div>
              <div className="text-center p-3 bg-sky-50/40 rounded-xl col-span-2">
                <span className="text-[10px] text-gray-400 block font-semibold mb-0.5">Completed Modules</span>
                <span className="text-sm font-bold text-education-navy">{achievements.completedCoursesCount} Courses verified</span>
              </div>
            </div>

            {/* Certificates */}
            <div className="p-6 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-sm space-y-4">
              <h3 className="font-bold text-sm text-education-navy">Earned Certificates</h3>
              <div className="space-y-3">
                {achievements.certificates.map(cert => (
                  <div key={cert.id} className="p-3.5 rounded-2xl bg-sky-50/50 flex items-center justify-between border border-sky-100/30 gap-4">
                    <div className="space-y-1">
                      <h4 className="font-bold text-xs text-education-navy leading-tight">{cert.courseTitle}</h4>
                      <span className="text-[9px] text-gray-400">Issued: {cert.issueDate}</span>
                    </div>
                    <button
                      onClick={() => alert("Downloading certificate: " + cert.courseTitle)}
                      className="p-2 rounded-xl bg-white text-sky-500 hover:bg-sky-100 shadow-sm border border-sky-100 transition-colors"
                    >
                      <Download size={13} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Path connecting level badges */}
          <div className="lg:col-span-8 p-6 sm:p-10 rounded-[36px] border border-sky-100 bg-white/70 backdrop-blur-md shadow-sm space-y-8">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-extrabold text-base text-education-navy">Gamified Progression Path</h3>
              <p className="text-xs text-education-navy/60">Unlock master ranks by scoring points and resolving challenges.</p>
            </div>

            {/* Flowchart levels: Beginner -> Master */}
            <div className="relative py-4 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4 overflow-x-auto">
              {achievements.badges.map((badge, index) => {
                const Icon = BADGE_ICONS[badge.iconName] || Award;
                const isLocked = badge.unlockedDate === 'Locked';
                const isLast = index === achievements.badges.length - 1;

                return (
                  <React.Fragment key={badge.id}>
                    {/* Badge Node */}
                    <div className="flex flex-col items-center text-center flex-shrink-0 w-28 relative">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm relative z-10 transition-transform hover:scale-105 duration-300 ${
                        isLocked 
                          ? 'bg-gray-50 border-gray-100 text-gray-300 opacity-60' 
                          : 'bg-gradient-to-tr from-sky-400 to-cyan-400 border-transparent text-white'
                      }`}>
                        <Icon size={24} />
                      </div>
                      
                      <div className="mt-3 space-y-0.5 max-w-[110px]">
                        <h4 className="font-bold text-xs text-education-navy leading-tight">{badge.name}</h4>
                        <p className="text-[9px] text-gray-400 leading-snug line-clamp-2">{badge.description}</p>
                        <span className={`text-[8px] font-bold block uppercase tracking-wider ${
                          isLocked ? 'text-gray-400' : 'text-sky-500'
                        }`}>
                          {badge.level}
                        </span>
                      </div>
                    </div>

                    {/* Connecting line */}
                    {!isLast && (
                      <div className={`flex-shrink-0 w-0.5 h-6 md:w-10 md:h-0.5 relative z-0 ${
                        isLocked ? 'bg-gray-100' : 'bg-gradient-to-r from-sky-300 to-cyan-300'
                      } hidden md:block`}>
                        {/* Flow highlight animation dot */}
                        {!isLocked && (
                          <motion.div
                            animate={{ left: ['0%', '100%'] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400"
                          />
                        )}
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
