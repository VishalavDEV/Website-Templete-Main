import React, { useState } from 'react';
import { PageId } from '../types';
import { GradientText } from '../components/reactbits/GradientText';
import {
  Map,
  Sparkles,
  CheckCircle2,
  Download,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CreatePlanPageProps {
  onNavigate: (page: PageId) => void;
}

export const CreatePlanPage: React.FC<CreatePlanPageProps> = ({ onNavigate }) => {
  const [careerGoal, setCareerGoal] = useState('Full-Stack Software Engineer');
  const [skillLevel, setSkillLevel] = useState('Beginner (Some Coding Experience)');
  const [weeklyHours, setWeeklyHours] = useState(8);
  const [customGoal, setCustomGoal] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState<any | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const careerOptions = [
    'Full-Stack Software Engineer',
    'AI & Machine Learning Specialist',
    'Product (UX/UI) Designer',
    'Growth & Digital Marketing Lead',
    'Data Scientist & Analytics Engineer',
    'Technical Product Manager',
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedPlan({
        targetRole: customGoal.trim() || careerGoal,
        level: skillLevel,
        weeklyCommitment: weeklyHours,
        totalWeeks: weeklyHours >= 12 ? 10 : weeklyHours >= 8 ? 14 : 18,
        phases: [
          {
            phase: 'Phase 1 (Weeks 1-3)',
            title: 'Core Foundations & Mental Models',
            focus: 'Synthesizing essential syntax, mental models, and environment setups.',
            milestones: [
              'Complete Data Science Essentials / Syntax Masterclass',
              'Set up local development sandbox and version control workflows',
              'Pass baseline quiz evaluation (85%+ score)',
            ],
          },
          {
            phase: 'Phase 2 (Weeks 4-7)',
            title: 'Practical Project Building & Data Structures',
            focus: 'Translating concepts into end-to-end working interfaces.',
            milestones: [
              'Build responsive multi-page dashboard application',
              'Integrate real-time APIs and clean error states',
              'Schedule 1:1 portfolio review with a faculty mentor',
            ],
          },
          {
            phase: 'Phase 3 (Weeks 8-11)',
            title: 'Advanced Architecture & Production Readiness',
            focus: 'Scaling systems, security best practices, and performance tuning.',
            milestones: [
              'Deploy capstone project with automated CI/CD pipeline',
              'Conduct usability testing and performance audits',
              'Finalize resume case study and GitHub documentation',
            ],
          },
          {
            phase: 'Phase 4 (Weeks 12-14)',
            title: 'Mock Technical Interviews & Career Launch',
            focus: 'System design questions, whiteboard coding, and salary negotiation.',
            milestones: [
              'Complete 3 live mock interview sessions',
              'Submit verified capstone for industry credential',
              'Apply to verified hiring partner network',
            ],
          },
        ],
      });

      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      } catch (e) {}
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 space-y-12 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider border border-indigo-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI CURRICULUM ARCHITECT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-slate-900">
            Create Your Custom{' '}
            <GradientText colors={['#4F46E5', '#7C3AED', '#2563EB', '#4F46E5']}>
              Learning Plan
            </GradientText>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Input your career target, weekly schedule, and current expertise. Our system will architect an adaptive milestone syllabus aligned with industry requirements.
          </p>
        </div>
      </section>

      {/* Main Generator Form & Output */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Configuration Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 text-left">
            <div className="space-y-1 pb-4 border-b border-slate-200">
              <h3 className="text-base font-bold text-slate-900 font-display">
                Plan Preferences
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Customize your roadmap constraints
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-5">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                  Target Career Outcome *
                </label>
                <select
                  value={careerGoal}
                  onChange={(e) => setCareerGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-hidden font-medium text-slate-900"
                >
                  {careerOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                  Or specify a custom focus topic:
                </label>
                <input
                  type="text"
                  value={customGoal}
                  onChange={(e) => setCustomGoal(e.target.value)}
                  placeholder="e.g. Distributed Systems & High-Load Architecture"
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-hidden text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 mb-1.5">
                  Current Skill Level *
                </label>
                <select
                  value={skillLevel}
                  onChange={(e) => setSkillLevel(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-hidden font-medium text-slate-900"
                >
                  <option value="Complete Beginner (Zero Background)">
                    Complete Beginner (Zero Background)
                  </option>
                  <option value="Beginner (Some Coding / Design Experience)">
                    Beginner (Some Coding / Design Experience)
                  </option>
                  <option value="Intermediate (Practicing Professional)">
                    Intermediate (Practicing Professional)
                  </option>
                  <option value="Advanced (Upskilling to Senior / Staff)">
                    Advanced (Upskilling to Senior / Staff)
                  </option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700">
                    Weekly Commitment: <strong className="text-indigo-600 font-mono">{weeklyHours} Hours/Week</strong>
                  </label>
                </div>
                <input
                  type="range"
                  min={4}
                  max={25}
                  step={1}
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>4 hrs (Light)</span>
                  <span>10 hrs (Recommended)</span>
                  <span>25 hrs (Intensive)</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-indigo-600/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Architecting Custom Plan...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Personalized Syllabus</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result Card (7 cols) */}
          <div className="lg:col-span-7 text-left">
            {generatedPlan ? (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6 animate-in fade-in duration-300">
                {/* Result Header */}
                <div className="space-y-3 pb-6 border-b border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                      Personalized Roadmap
                    </span>
                    <span className="text-xs font-mono font-bold text-indigo-600">
                      {generatedPlan.totalWeeks} Weeks Total Timeline
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 font-display">
                    {generatedPlan.targetRole}
                  </h2>
                  <p className="text-xs text-slate-600 font-mono">
                    Paced for <strong className="text-indigo-600">{generatedPlan.weeklyCommitment} hours/week</strong> ({generatedPlan.level})
                  </p>
                </div>

                {/* Phases Breakdown */}
                <div className="space-y-4">
                  {generatedPlan.phases.map((phase: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-indigo-700 uppercase font-mono">
                          {phase.phase}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 font-display">
                        {phase.title}
                      </h4>
                      <p className="text-xs text-slate-600">
                        {phase.focus}
                      </p>
                      <ul className="space-y-1.5 pt-1">
                        {phase.milestones.map((item: string, iIdx: number) => (
                          <li
                            key={iIdx}
                            className="flex items-start gap-2 text-xs text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate('track-progress')}
                    className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer"
                  >
                    Save & Track in My Dashboard
                  </button>
                  <button
                    onClick={() => alert('Plan exported successfully!')}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 border border-slate-200"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Schedule</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-slate-50 rounded-3xl p-10 border border-dashed border-slate-300 text-center space-y-3">
                <Map className="w-12 h-12 text-slate-400 mx-auto" />
                <h3 className="text-base font-bold text-slate-900">
                  Ready to Architect Your Roadmap
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Select your preferences on the left and click "Generate Personalized Syllabus" to produce a tailored milestone schedule.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
