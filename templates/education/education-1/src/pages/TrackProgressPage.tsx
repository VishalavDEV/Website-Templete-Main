import React, { useState } from 'react';
import { PageId, StudentProfile } from '../types';
import { GradientText } from '../components/reactbits/GradientText';
import {
  BarChart3,
  Flame,
  Clock,
  Award,
  CheckCircle2,
  Play,
  Download,
  Lock,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  LogOut,
  User,
  KeyRound,
  IdCard,
  Zap,
  BookOpen,
  Calendar,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_STUDENTS } from '../data/edupathData';

interface TrackProgressPageProps {
  currentStudent?: StudentProfile | null;
  onNavigate: (page: PageId) => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onLoginStudent: (student: StudentProfile | string) => void;
  onLogout?: () => void;
}

export const TrackProgressPage: React.FC<TrackProgressPageProps> = ({
  currentStudent,
  onNavigate,
  onOpenAuth,
  onLoginStudent,
  onLogout,
}) => {
  // Local form state for in-page student ID login gate
  const [studentIdInput, setStudentIdInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [gateError, setGateError] = useState<string | null>(null);

  // Student specific course progress state
  const [coursesProgress, setCoursesProgress] = useState([
    {
      id: 'course-1',
      title: 'Data Science & Neural Pipelines',
      category: 'Data & Analytics',
      progress: 68,
      lessonsCompleted: 8,
      totalLessons: 12,
      lastActive: 'Today, 2 hours ago',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'course-4',
      title: 'Design Systems & Component Architecture',
      category: 'Design & UX',
      progress: 35,
      lessonsCompleted: 10,
      totalLessons: 30,
      lastActive: 'Yesterday',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'course-2',
      title: 'Digital Marketing & Growth Engine',
      category: 'Marketing',
      progress: 100,
      lessonsCompleted: 28,
      totalLessons: 28,
      lastActive: 'Aug 18, 2026',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    },
  ]);

  const [activeQuizQuestion, setActiveQuizQuestion] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const quizQuestions = [
    {
      question: 'Which Python library is primarily used for tabular DataFrame manipulations in Data Science?',
      options: ['NumPy', 'Pandas', 'Flask', 'Matplotlib'],
      correctAnswer: 1,
    },
    {
      question: 'In UX Design, what is the primary purpose of low-fidelity wireframing?',
      options: [
        'Finalizing brand color palettes',
        'Testing information hierarchy and layout structure early',
        'Writing production CSS code',
        'Creating high-res vector marketing illustrations',
      ],
      correctAnswer: 1,
    },
  ];

  const handleUpdateProgress = (index: number) => {
    const updated = [...coursesProgress];
    if (updated[index].progress < 100) {
      updated[index].progress = Math.min(100, updated[index].progress + 15);
      if (updated[index].progress === 100) {
        try {
          confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
        } catch (e) {}
      }
      setCoursesProgress(updated);
    }
  };

  const handleQuizSubmit = () => {
    if (selectedQuizOption !== null) {
      setQuizSubmitted(true);
      if (selectedQuizOption === quizQuestions[activeQuizQuestion].correctAnswer) {
        try {
          confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
        } catch (e) {}
      }
    }
  };

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentIdInput.trim()) {
      setGateError('Please enter a valid Student ID or Email.');
      return;
    }

    const matched = SAMPLE_STUDENTS.find(
      (s) =>
        s.studentId.toLowerCase() === studentIdInput.trim().toLowerCase() ||
        s.email.toLowerCase() === studentIdInput.trim().toLowerCase()
    );

    if (matched) {
      setGateError(null);
      onLoginStudent(matched);
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch (e) {}
    } else {
      // Create authenticated profile with custom ID
      const customStudent: StudentProfile = {
        studentId: studentIdInput.trim().toUpperCase().startsWith('SKL-')
          ? studentIdInput.trim().toUpperCase()
          : `SKL-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        name: studentIdInput.split('@')[0],
        email: studentIdInput.includes('@') ? studentIdInput : `${studentIdInput.toLowerCase()}@skillora.edu`,
        passwordHint: '••••••••',
        program: 'General Technology Studies',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        enrolledCoursesCount: 3,
        completedHours: 12,
        currentStreakDays: 5,
        badge: 'Active Scholar',
      };
      setGateError(null);
      onLoginStudent(customStudent);
      try {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  const handleQuickSampleLogin = (sample: StudentProfile) => {
    setGateError(null);
    onLoginStudent(sample);
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
  };

  // =========================================================================
  // 1. LOCKED / PRIVATE GATE VIEW (Shown when student is not logged in)
  // =========================================================================
  if (!currentStudent) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Security Gate Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden text-center space-y-6">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/70 rounded-full blur-3xl pointer-events-none" />

            {/* Lock Badge */}
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto shadow-xs">
              <Lock className="w-8 h-8 text-indigo-600" />
            </div>

            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold border border-indigo-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>PRIVATE STUDENT PORTAL • ACCESS RESTRICTED</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
                Student Login Required
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The Student Dashboard is confidential and not accessible publicly. It contains personal academic progress, enrolled syllabus metrics, active quiz scores, and verified digital certificates.
              </p>
            </div>

            {/* In-Page Student ID Login Form */}
            <div className="max-w-md mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <IdCard className="w-4 h-4 text-indigo-600" />
                  <span>Enter Student Credentials</span>
                </span>
                <span className="text-[10px] font-mono text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                  Student Portal
                </span>
              </div>

              {gateError && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                  {gateError}
                </div>
              )}

              <form onSubmit={handleGateSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-mono">
                    Student ID or University Email *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={studentIdInput}
                      onChange={(e) => setStudentIdInput(e.target.value)}
                      placeholder="e.g. SKL-2026-8891"
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs bg-white border border-slate-300 text-slate-900 rounded-xl focus:border-indigo-600 focus:outline-hidden font-mono placeholder:text-slate-400"
                    />
                    <IdCard className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-mono">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="Demo: student123"
                      className="w-full pl-9 pr-3.5 py-2.5 text-xs bg-white border border-slate-300 text-slate-900 rounded-xl focus:border-indigo-600 focus:outline-hidden font-mono placeholder:text-slate-400"
                    />
                    <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Unlock Student Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Sample Student Accounts - 1-Click Fast Login Section */}
            <div className="pt-4 border-t border-slate-100 text-left space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  <span>Try With Sample Student IDs (1-Click Login)</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  Instant Test Accounts
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {SAMPLE_STUDENTS.map((sample) => (
                  <div
                    key={sample.studentId}
                    className="bg-slate-50 hover:bg-indigo-50/60 p-4 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all flex flex-col justify-between gap-3 text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={sample.avatar}
                        alt={sample.name}
                        className="w-10 h-10 rounded-xl object-cover border border-slate-200 shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          {sample.name}
                        </p>
                        <p className="text-[11px] font-mono font-bold text-indigo-600">
                          {sample.studentId}
                        </p>
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-600 font-medium">
                      <p className="truncate">{sample.program}</p>
                      <p className="text-slate-400 font-mono mt-0.5">
                        Streak: {sample.currentStreakDays}d • {sample.completedHours}h logged
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleQuickSampleLogin(sample)}
                      className="w-full py-2 bg-white group-hover:bg-indigo-600 text-indigo-700 group-hover:text-white border border-indigo-200 group-hover:border-indigo-600 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-400 group-hover:fill-amber-300 group-hover:text-amber-300" />
                      <span>Log In as {sample.name.split(' ')[0]}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Public catalog back link */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate('courses')}
                className="text-xs text-slate-500 hover:text-indigo-600 transition-colors font-medium cursor-pointer"
              >
                ← Return to Public Course Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. AUTHENTICATED STUDENT DASHBOARD VIEW (Shown when student is logged in)
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 space-y-10 pb-16">
      {/* Authenticated Student Banner */}
      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-indigo-400 shadow-md shrink-0">
                  <img
                    src={currentStudent.avatar}
                    alt={currentStudent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      ACTIVE STUDENT
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/10 text-indigo-200 border border-white/10">
                      ID: {currentStudent.studentId}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-200 border border-amber-400/30">
                      {currentStudent.badge}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
                    {currentStudent.name}
                  </h1>

                  <p className="text-xs sm:text-sm text-indigo-200 font-medium">
                    Program: <strong className="text-white">{currentStudent.program}</strong> • {currentStudent.email}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <button
                  onClick={() => onNavigate('create-plan')}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/20 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Calendar className="w-4 h-4 text-indigo-200" />
                  <span>My AI Plan</span>
                </button>
                {onLogout && (
                  <button
                    onClick={onLogout}
                    className="px-4 py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded-xl text-xs font-bold border border-red-500/30 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center font-bold">
              <Flame className="w-6 h-6 fill-orange-500 text-orange-500" />
            </div>
            <div className="text-left">
              <span className="text-2xl font-extrabold text-slate-900 font-mono">
                {currentStudent.currentStreakDays} Days
              </span>
              <p className="text-[10px] font-mono text-slate-500 font-bold uppercase">Daily Streak</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="text-2xl font-extrabold text-indigo-600 font-mono">
                {currentStudent.completedHours} hrs
              </span>
              <p className="text-[10px] font-mono text-slate-500 font-bold uppercase">Total Logged</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-600 flex items-center justify-center font-bold">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="text-2xl font-extrabold text-cyan-700 font-mono">
                {currentStudent.enrolledCoursesCount} Courses
              </span>
              <p className="text-[10px] font-mono text-slate-500 font-bold uppercase">Enrolled</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center font-bold">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="text-2xl font-extrabold text-purple-700 font-mono">1 Verified</span>
              <p className="text-[10px] font-mono text-slate-500 font-bold uppercase">Certificate</p>
            </div>
          </div>
        </div>
      </section>

      {/* In-Progress Courses & Quick Quiz Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Active Courses List (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                My Enrolled Courses ({currentStudent.name})
              </h3>
              <button
                onClick={() => onNavigate('courses')}
                className="text-xs font-mono text-indigo-600 hover:text-indigo-700 font-bold cursor-pointer"
              >
                + Browse More Courses
              </button>
            </div>

            <div className="space-y-4">
              {coursesProgress.map((course, idx) => (
                <div
                  key={course.id}
                  className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-3"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-16 h-16 rounded-2xl object-cover border border-slate-200"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
                          {course.category}
                        </span>
                        <span className="text-xs font-mono font-bold text-indigo-600">
                          {course.progress}%
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 truncate pt-1">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono">
                        {course.lessonsCompleted} of {course.totalLessons} lessons finished
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Last active: {course.lastActive}</span>
                      <span>Target: Completion in 2 weeks</span>
                    </div>
                  </div>

                  {/* Course Action */}
                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    {course.progress === 100 ? (
                      <button
                        onClick={() => setShowCertificate(true)}
                        className="px-3.5 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>View Verified Certificate</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUpdateProgress(idx)}
                        className="px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-indigo-700" />
                        <span>Resume Lesson ({course.progress}%)</span>
                      </button>
                    )}

                    <span className="text-xs text-slate-400 font-mono">
                      Student ID: {currentStudent.studentId}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Knowledge Quiz & Verified Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Verified Digital Credentials Box */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
                  OFFICIAL CREDENTIALS
                </span>
                <span className="text-xs font-mono text-emerald-600 font-bold">1 Verified</span>
              </div>

              <div className="p-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-2xl border border-indigo-100 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      Digital Marketing & Growth Engine
                    </h4>
                    <p className="text-[10px] text-slate-500 font-mono">
                      Awarded to: <strong>{currentStudent.name}</strong> ({currentStudent.studentId})
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-indigo-100/80">
                  <span className="text-[10px] font-mono text-slate-500">
                    Hash: #SKL-{currentStudent.studentId.replace('SKL-', '')}-VERIFIED
                  </span>
                  <button
                    onClick={() => setShowCertificate(true)}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer flex items-center gap-1"
                  >
                    <span>View PDF</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Daily Recall Quiz */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md">
                  DAILY RECALL QUIZ
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Q{activeQuizQuestion + 1} of {quizQuestions.length}
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {quizQuestions[activeQuizQuestion].question}
              </h4>

              {/* Options */}
              <div className="space-y-2">
                {quizQuestions[activeQuizQuestion].options.map((option, idx) => {
                  let optionStyles = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

                  if (quizSubmitted) {
                    if (idx === quizQuestions[activeQuizQuestion].correctAnswer) {
                      optionStyles = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                    } else if (selectedQuizOption === idx) {
                      optionStyles = 'bg-red-50 border-red-300 text-red-900';
                    }
                  } else if (selectedQuizOption === idx) {
                    optionStyles = 'bg-indigo-50 border-indigo-500 text-indigo-900 font-semibold';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={quizSubmitted}
                      onClick={() => setSelectedQuizOption(idx)}
                      className={`w-full text-left p-3 text-xs rounded-xl border transition-colors cursor-pointer ${optionStyles}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {/* Quiz Submit Button */}
              <div>
                {quizSubmitted ? (
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-emerald-600 text-center font-mono">
                      {selectedQuizOption === quizQuestions[activeQuizQuestion].correctAnswer
                        ? '✨ Correct! +25 Skill XP added to profile.'
                        : 'Review the module notes to reinforce this concept.'}
                    </p>
                    <button
                      onClick={() => {
                        setSelectedQuizOption(null);
                        setQuizSubmitted(false);
                        setActiveQuizQuestion((prev) => (prev + 1) % quizQuestions.length);
                      }}
                      className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs rounded-xl cursor-pointer transition-colors border border-slate-200"
                    >
                      Next Question
                    </button>
                  </div>
                ) : (
                  <button
                    disabled={selectedQuizOption === null}
                    onClick={handleQuizSubmit}
                    className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors cursor-pointer"
                  >
                    Submit Answer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Viewer Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-xl w-full border border-slate-200 shadow-2xl text-center space-y-6 text-slate-900">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center mx-auto shadow-xs">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-widest bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full inline-block">
                Official Verified Certificate
              </span>
              <h2 className="text-2xl font-bold text-slate-900 font-display">
                Digital Marketing & Growth Engine
              </h2>
              <p className="text-xs text-slate-600">
                Awarded to <strong className="text-slate-900">{currentStudent.name}</strong> (Student ID: <strong className="text-indigo-600 font-mono">{currentStudent.studentId}</strong>) for mastering full-funnel acquisition, SEO optimization, and attribution modeling with distinction.
              </p>
            </div>

            <div className="py-3 px-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 font-mono flex justify-between">
              <span>Credential ID: <strong className="text-slate-900">SKL-{currentStudent.studentId.replace('SKL-', '')}-VERIFIED</strong></span>
              <span>Issued: <strong className="text-slate-900">August 2026</strong></span>
            </div>

            {downloadSuccess && (
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certificate PDF successfully generated and saved for {currentStudent.name}!</span>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setDownloadSuccess(true);
                  try {
                    confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
                  } catch (e) {}
                  setTimeout(() => {
                    setDownloadSuccess(false);
                    setShowCertificate(false);
                  }, 1500);
                }}
                className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => {
                  setDownloadSuccess(false);
                  setShowCertificate(false);
                }}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl cursor-pointer transition-colors border border-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
