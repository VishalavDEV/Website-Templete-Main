import React, { useState } from 'react';
import {
  BookOpen,
  GraduationCap,
  PlayCircle,
  HelpCircle,
  CheckCircle2,
  Search,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Award,
  Layers,
  TrendingUp,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { ActiveTab } from '../../types';
import { EDUCATION_MODULES, GLOSSARY_TERMS } from '../../data/mockData';

interface EducationViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  openBookingModal: () => void;
}

export const EducationView: React.FC<EducationViewProps> = ({ setActiveTab, openBookingModal }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [glossarySearch, setGlossarySearch] = useState<string>('');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  // Interactive Quiz State
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const quizQuestions = [
    {
      question: 'What does a Sharpe Ratio of 1.84 indicate about an investment strategy?',
      options: [
        'The fund is guaranteed never to lose principal value.',
        'The strategy generates exceptional excess returns per unit of total risk compared to the risk-free rate.',
        'The portfolio is 100% invested in high-risk derivative contracts.',
        'The fund charges 1.84% annual management fee.',
      ],
      correctIndex: 1,
      explanation: 'A Sharpe Ratio above 1.5 indicates strong risk-adjusted alpha, delivering high excess return for each unit of standard deviation volatility.',
    },
    {
      question: 'Why do sophisticated investors use duration matching in fixed income?',
      options: [
        'To eliminate equity market taxes completely.',
        'To insulate portfolio cash flows against interest rate shifts by matching liability payout timelines.',
        'To force mutual funds to rebalance on a daily basis.',
        'To speculate on short-term cryptocurrency swings.',
      ],
      correctIndex: 1,
      explanation: 'Duration matching ensures bond maturities align with anticipated future capital withdrawals, neutralizing interest rate volatility.',
    },
    {
      question: 'What is the primary distinction between Realized vs. Unrealized Capital Gains?',
      options: [
        'Realized gains occur only when an asset is liquidated; unrealized gains reflect paper mark-to-market appreciation.',
        'Realized gains are not subject to sovereign tax.',
        'Unrealized gains can be withdrawn directly as cash.',
        'There is no difference between them.',
      ],
      correctIndex: 0,
      explanation: 'Unrealized gains exist on paper as your portfolio appreciates. Capital gains tax is only triggered when positions are closed (realized).',
    },
  ];

  const handleSelectOption = (optIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentQuestion]: optIndex }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) score += 1;
    });
    return Math.round((score / quizQuestions.length) * 100);
  };

  const filteredGlossary = GLOSSARY_TERMS.filter(
    (t) =>
      t.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      t.definition.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      t.category.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  const filteredModules = EDUCATION_MODULES.filter((mod) => {
    if (selectedDifficulty === 'All') return true;
    return mod.level === selectedDifficulty;
  });

  return (
    <div className="w-full py-10 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Institutional Masterclass &amp; Academy
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Investor Education &amp; Wealth Academy
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Master asset allocation, macroeconomic indicators, private equity structuring, and risk analytics through curated masterclasses.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex justify-center gap-2 mt-8">
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedDifficulty(lvl)}
              className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all ${
                selectedDifficulty === lvl
                  ? 'bg-slate-900 text-amber-400 shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {lvl === 'All' ? 'All Learning Tiers' : `${lvl} Level`}
            </button>
          ))}
        </div>
      </section>

      {/* 1. Education Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((mod) => (
            <div
              key={mod.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      mod.level === 'Beginner'
                        ? 'bg-emerald-100 text-emerald-800'
                        : mod.level === 'Intermediate'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {mod.level}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold">{mod.duration}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                  {mod.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{mod.description}</p>

                <div className="space-y-1 pt-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Curriculum Modules:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {mod.topics.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-amber-600 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <button
                  onClick={openBookingModal}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Start Course Module &rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Interactive Knowledge Assessment Quiz */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-400 text-slate-950 rounded-xl">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Quantitative Financial Literacy Assessment
                </h3>
                <p className="text-xs text-slate-400">
                  Test your understanding of risk parameters, alpha measurement, and portfolio duration.
                </p>
              </div>
            </div>
            {!quizFinished && (
              <span className="text-xs font-mono font-bold text-amber-400 bg-slate-800 px-3 py-1 rounded-lg">
                Question {currentQuestion + 1} / {quizQuestions.length}
              </span>
            )}
          </div>

          {!quizFinished ? (
            <div className="space-y-6">
              <h4 className="font-display text-lg font-bold text-white">
                {quizQuestions[currentQuestion].question}
              </h4>

              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestion] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-3.5 rounded-xl text-left text-xs transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 font-bold border-amber-300'
                          : 'bg-slate-800/80 text-slate-200 hover:bg-slate-800 border-slate-700'
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-slate-950 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-[11px] text-slate-400">
                  Select your answer to proceed to the next module.
                </span>
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-500 text-slate-950 disabled:opacity-40 transition-colors"
                >
                  {currentQuestion === quizQuestions.length - 1 ? 'Calculate Score' : 'Next Question &rarr;'}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4 animate-in fade-in">
              <div className="w-14 h-14 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center mx-auto font-display text-2xl font-bold">
                {calculateScore()}%
              </div>
              <h4 className="font-display text-2xl font-bold text-white">
                Assessment Complete!
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                You scored <strong>{calculateScore()}%</strong>. Based on your quantitative proficiency, we recommend reviewing our <strong>Advanced Quantitative Alpha</strong> and <strong>Private Credit</strong> strategies.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSelectedAnswers({});
                    setCurrentQuestion(0);
                    setQuizFinished(false);
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl"
                >
                  Retake Assessment
                </button>
                <button
                  onClick={openBookingModal}
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-bold rounded-xl"
                >
                  Discuss Score with Advisor &rarr;
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Comprehensive Financial Glossary (20+ terms) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Institutional Financial Glossary
              </h3>
              <p className="text-xs text-slate-500">
                Authoritative definitions of key wealth management, valuation, and derivatives terminology.
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search glossary terms (e.g., Alpha, Duration)..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-slate-50"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {filteredGlossary.map((item) => {
              const isExpanded = expandedTerm === item.term;
              return (
                <div
                  key={item.term}
                  onClick={() => setExpandedTerm(isExpanded ? null : item.term)}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-all cursor-pointer space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-slate-900">
                      {item.term}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-slate-600 border border-slate-200">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.definition}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
