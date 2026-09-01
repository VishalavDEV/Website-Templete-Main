import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, GraduationCap, Laptop, Lightbulb, Code, Globe, HelpCircle, Flame, ArrowRight, Sparkles, Award } from 'lucide-react';
import { api } from '../services/api';

// Stats counters component
function StatCounter({ target, label, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // Extract digit values (e.g. 100 or 10 from 10K or 100+)
    const end = parseInt(target.replace(/[^0-9]/g, ''), 10);
    if (start === end) return;

    const totalDuration = 2000; // 2 seconds
    const incrementTime = Math.max(Math.floor(totalDuration / end), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 80); // Speed up
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center p-6 rounded-2xl border border-sky-100/50 bg-white/50 backdrop-blur-sm">
      <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500 font-outfit mb-1">
        {count}{suffix}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-education-navy/70 uppercase tracking-wider font-outfit">{label}</div>
    </div>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]);
  const [streakCount, setStreakCount] = useState(12);
  const [challengeSolved, setChallengeSolved] = useState(false);
  const [challengeAnswer, setChallengeAnswer] = useState('');

  // Daily Challenge Quiz
  const handleSolveChallenge = (e) => {
    e.preventDefault();
    if (challengeAnswer.toLowerCase().includes('react')) {
      setChallengeSolved(true);
      setStreakCount(13); // increment streak!
    } else {
      alert("Oops! Think about the frontend framework we are currently building this site on. 😉");
    }
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 px-6 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[75vh]">
        
        {/* Hero Text */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-sky-200/50 bg-sky-50/50 text-sky-600 font-outfit text-xs font-semibold"
          >
            <Sparkles size={12} className="animate-spin" style={{ animationDuration: '4s' }} />
            The Future of E-Learning
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-education-navy leading-[1.1] font-outfit"
          >
            Learn Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 drop-shadow-sm">
              Boundaries.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-education-navy/70 leading-relaxed max-w-xl mx-auto lg:mx-0 font-outfit"
          >
            Discover knowledge, build skills, and transform your future through a highly interactive, animated learning universe. Start floating through concepts today!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Link
              to="/courses"
              className="px-6 py-3 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-sky-400 to-cyan-400 shadow-lg shadow-sky-200 hover:shadow-xl hover:shadow-sky-300 hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center gap-1.5 font-outfit"
            >
              Explore Courses
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/quiz"
              className="px-6 py-3 rounded-2xl font-bold text-sm text-sky-600 bg-sky-50 hover:bg-sky-100 transition-colors font-outfit"
            >
              Start Learning
            </Link>
          </motion.div>
        </div>

        {/* Hero Environment (Floating 3D-Style Book with flying items) */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[350px] sm:min-h-[450px]">
          {/* Main Book Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -12, 0],
              rotateY: [0, 5, 0],
              transition: {
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                rotateY: { repeat: Infinity, duration: 8, ease: "easeInOut" },
                default: { duration: 0.8 }
              }
            }}
            className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-sky-200/50 to-cyan-200/40 rounded-[40px] border border-white/60 shadow-2xl flex items-center justify-center backdrop-blur-sm"
          >
            <BookOpen size={120} className="text-sky-500/80 filter drop-shadow-md animate-pulse" />

            {/* Flying Elements Emerging from Book */}
            {/* 1. Graduation Cap */}
            <motion.div
              animate={{ y: [0, -70, 0], x: [0, -60, 0], rotate: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute top-10 left-10 p-3 rounded-xl bg-white shadow-lg border border-sky-50 text-sky-500"
            >
              <GraduationCap size={20} />
            </motion.div>

            {/* 2. Laptop */}
            <motion.div
              animate={{ y: [0, -90, 0], x: [0, 60, 0], rotate: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute top-12 right-8 p-3 rounded-xl bg-white shadow-lg border border-sky-50 text-cyan-500"
            >
              <Laptop size={20} />
            </motion.div>

            {/* 3. Lightbulb */}
            <motion.div
              animate={{ y: [0, 80, 0], x: [0, -80, 0], rotate: [0, -25, 0] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-12 left-6 p-3 rounded-xl bg-white shadow-lg border border-sky-50 text-yellow-500"
            >
              <Lightbulb size={20} className="animate-pulse" />
            </motion.div>

            {/* 4. Code Tag */}
            <motion.div
              animate={{ y: [0, 90, 0], x: [0, 70, 0], rotate: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-10 right-10 p-3 rounded-xl bg-white shadow-lg border border-sky-50 text-blue-500"
            >
              <Code size={20} />
            </motion.div>

            {/* 5. Math symbol */}
            <motion.div
              animate={{ y: [0, -120, 0], x: [0, 10, 0], scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
              className="absolute -top-10 font-bold font-mono text-xl text-sky-500/80 bg-white/75 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-white"
            >
              π
            </motion.div>
          </motion.div>

          {/* Halo Glow effect */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-sky-200/20 blur-[80px] z-0 animate-pulse-slow" />
        </div>
      </div>

      {/* 2. STATS SECTION */}
      <div className="max-w-7xl mx-auto mt-20 sm:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        <StatCounter target="10000" label="Active Students" suffix="+" />
        <StatCounter target="250" label="Premium Courses" suffix="+" />
        <StatCounter target="100" label="Expert Mentors" suffix="+" />
        <StatCounter target="95" label="Success Rate" suffix="%" />
      </div>

      {/* 3. CORE DESIGN CONCEPT: LEARNING IN MOTION (Interactive Globe & Challenge) */}
      <div className="max-w-7xl mx-auto mt-28 sm:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Interactive Learning Globe */}
        <div className="lg:col-span-6 flex flex-col items-center text-center space-y-6">
          <div className="max-w-md space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-education-navy font-outfit">
              Interactive Learning Globe
            </h2>
            <p className="text-sm text-education-navy/70 leading-relaxed font-outfit">
              Observe how knowledge spreads. The map below shows active students connecting across different coordinates in our digital campus.
            </p>
          </div>

          {/* Rotating Globe SVG */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-sky-50/40 rounded-full border border-sky-100/60 shadow-inner flex items-center justify-center overflow-hidden">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              viewBox="0 0 100 100"
              className="w-4/5 h-4/5 text-sky-200/60"
            >
              {/* Globe grid circles */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.3" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.4" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.4" />
              
              {/* Fake Continent Paths */}
              <path d="M20,40 Q25,25 45,30 T60,20 T75,35 T55,50 T40,65 Z" fill="currentColor" opacity="0.3" />
              <path d="M30,70 Q45,80 65,75 T75,60 T60,50 T40,55 Z" fill="currentColor" opacity="0.3" />
            </motion.svg>

            {/* Glowing Pulsing Nodes */}
            <div className="absolute top-[35%] left-[28%] w-3 h-3 rounded-full bg-cyan-400 border border-white animate-ping" />
            <div className="absolute top-[35%] left-[28%] w-3 h-3 rounded-full bg-cyan-500 border border-white shadow-md shadow-cyan-200" />

            <div className="absolute top-[60%] right-[32%] w-3 h-3 rounded-full bg-sky-400 border border-white animate-ping" style={{ animationDelay: '0.8s' }} />
            <div className="absolute top-[60%] right-[32%] w-3 h-3 rounded-full bg-sky-500 border border-white shadow-md shadow-sky-200" />

            <div className="absolute bottom-[28%] left-[45%] w-3 h-3 rounded-full bg-blue-400 border border-white animate-ping" style={{ animationDelay: '1.5s' }} />
            <div className="absolute bottom-[28%] left-[45%] w-3 h-3 rounded-full bg-blue-500 border border-white shadow-md shadow-blue-200" />
            
            <div className="absolute top-[20%] right-[40%] w-2 h-2 rounded-full bg-cyan-400 border border-white" />
          </div>
        </div>

        {/* Daily Learning Challenge & Streak Indicator */}
        <div className="lg:col-span-6 space-y-6">
          {/* Streak Indicator */}
          <div className="flex items-center justify-between p-4.5 rounded-2xl border border-orange-100 bg-orange-50/40 backdrop-blur-sm max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-2.5 font-outfit">
              <div className="w-10 h-10 rounded-xl bg-orange-100/60 flex items-center justify-center text-orange-500 shadow-sm">
                <Flame size={20} className="animate-bounce" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-education-navy">Daily Streak</h4>
                <p className="text-xs text-education-navy/70">Solve challenges daily to build your streak.</p>
              </div>
            </div>
            <span className="font-extrabold text-orange-600 text-lg font-mono">
              🔥 {streakCount} Days
            </span>
          </div>

          {/* Challenge Card */}
          <div className="p-6 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-lg max-w-md mx-auto lg:mx-0 font-outfit">
            <div className="flex items-center gap-2 mb-3.5">
              <Award size={18} className="text-sky-500 animate-pulse" />
              <h3 className="font-bold text-base text-education-navy">Daily Learning Challenge</h3>
            </div>
            
            {!challengeSolved ? (
              <form onSubmit={handleSolveChallenge} className="space-y-4">
                <p className="text-xs leading-relaxed text-education-navy/75">
                  <strong>Challenge question:</strong> Which frontend Javascript library/framework is being used to render this animated interface? (Hint: React, Angular, or Vue?)
                </p>
                <input
                  type="text"
                  required
                  placeholder="Your answer..."
                  value={challengeAnswer}
                  onChange={(e) => setChallengeAnswer(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-sky-100 bg-white focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-400 to-cyan-400 hover:shadow-md transition-all uppercase tracking-wide"
                >
                  Submit Challenge
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-4 space-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto text-green-500 shadow-sm">
                  ✓
                </div>
                <h4 className="font-bold text-sm text-green-600">Challenge Completed!</h4>
                <p className="text-xs text-education-navy/70 leading-relaxed">
                  Congratulations! You've unlocked today's flame. Your learning streak has reached <strong>13 days</strong>.
                </p>
              </motion.div>
            )}
          </div>
        </div>

      </div>

      {/* Animated Scroll Indicator */}
      <div className="flex justify-center mt-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] uppercase tracking-wider font-semibold font-outfit text-education-navy/60">Scroll to Explore</span>
          <div className="w-5 h-9 rounded-full border border-sky-400 flex justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-sky-500"
            />
          </div>
        </motion.div>
      </div>

    </div>
  );
}
