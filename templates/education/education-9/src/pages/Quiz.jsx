import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Award, CheckCircle2, XCircle, ArrowRight, RefreshCw, HelpCircle, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { api } from '../services/api';

export default function Quiz() {
  const [quiz, setQuiz] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadQuiz() {
      try {
        const data = await api.getQuizzes();
        if (data && data.length > 0) {
          setQuiz(data[0]);
          setTimeLeft(data[0].timeLimitSeconds);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadQuiz();
  }, []);

  // Timer countdown hook
  useEffect(() => {
    if (loading || !quiz || finished) return;
    
    if (timeLeft <= 0) {
      setFinished(true);
      triggerConfettiFinish(score);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, loading, quiz, finished, score]);

  const triggerConfettiFinish = (finalScore) => {
    // Trigger confetti if they scored well!
    if (finalScore >= 2) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleAnswerSelect = (optionIdx) => {
    if (answered) return;
    setSelectedAnswer(optionIdx);
  };

  const handleConfirmAnswer = () => {
    if (selectedAnswer === null || answered) return;
    
    const correctIdx = quiz.questions[currentIdx].correctAnswerIndex;
    if (selectedAnswer === correctIdx) {
      setScore(prev => prev + 1);
    }
    setAnswered(true);
  };

  const handleNext = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    
    if (currentIdx < quiz.questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setFinished(true);
      triggerConfettiFinish(score + (selectedAnswer === quiz.questions[currentIdx].correctAnswerIndex ? 1 : 0));
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setTimeLeft(quiz?.timeLimitSeconds || 120);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-sky-200 border-t-sky-500 animate-spin" />
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm font-semibold">Failed to load quiz. Please try again.</p>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentIdx];
  const progressPercent = ((currentIdx + (answered ? 1 : 0)) / quiz.questions.length) * 100;

  return (
    <div className="relative min-h-screen pt-28 pb-16 px-6 font-outfit">
      <div className="max-w-2xl mx-auto relative z-10">
        
        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key="quiz-body"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-6 sm:p-8 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-lg space-y-6"
            >
              {/* Header: Title and Timer */}
              <div className="flex items-center justify-between border-b border-sky-50 pb-4">
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-sky-50 text-sky-600 text-[10px] font-bold uppercase tracking-wider">
                    {quiz.category}
                  </span>
                  <h2 className="font-extrabold text-sm text-education-navy mt-1">{quiz.title}</h2>
                </div>
                
                {/* Timer Clock */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-50 text-sky-600 font-mono text-xs font-bold">
                  <Timer size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
                  <span>
                    {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] text-gray-400 font-semibold">
                  <span>Question {currentIdx + 1} of {quiz.questions.length}</span>
                  <span>{Math.round(progressPercent)}% Complete</span>
                </div>
                <div className="w-full h-1.5 bg-sky-50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="py-4">
                <h3 className="text-base font-extrabold text-education-navy leading-relaxed">
                  {currentQuestion.text}
                </h3>
              </div>

              {/* Option cards */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  let cardStyle = "border-sky-100/50 bg-white/40 hover:bg-sky-50/20";
                  if (selectedAnswer === idx) {
                    cardStyle = "border-sky-400 bg-sky-50/50";
                  }
                  
                  if (answered) {
                    const isCorrect = idx === currentQuestion.correctAnswerIndex;
                    const isSelected = selectedAnswer === idx;
                    if (isCorrect) {
                      cardStyle = "border-green-300 bg-green-50/60 text-green-800";
                    } else if (isSelected) {
                      cardStyle = "border-red-300 bg-red-50/60 text-red-800";
                    } else {
                      cardStyle = "border-sky-100/30 bg-white/20 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={answered}
                      onClick={() => handleAnswerSelect(idx)}
                      className={`w-full p-4 rounded-2xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${cardStyle}`}
                    >
                      <span>{option}</span>
                      {answered && idx === currentQuestion.correctAnswerIndex && (
                        <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      )}
                      {answered && selectedAnswer === idx && idx !== currentQuestion.correctAnswerIndex && (
                        <XCircle size={16} className="text-red-500 flex-shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Next Action button */}
              <div className="pt-4 flex justify-end">
                {!answered ? (
                  <button
                    onClick={handleConfirmAnswer}
                    disabled={selectedAnswer === null}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-400 to-cyan-400 hover:shadow-md disabled:opacity-50 transition-all uppercase tracking-wide"
                  >
                    Confirm Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-400 to-cyan-400 hover:shadow-md transition-all flex items-center gap-1.5 uppercase tracking-wide"
                  >
                    {currentIdx === quiz.questions.length - 1 ? 'Finish Assessment' : 'Next Question'}
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>

            </motion.div>
          ) : (
            <motion.div
              key="quiz-result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-8 rounded-3xl border border-sky-100 bg-white/70 backdrop-blur-md shadow-xl text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 to-cyan-400 text-white flex items-center justify-center mx-auto shadow-lg shadow-sky-200">
                <Award size={30} className="animate-bounce" />
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-black text-education-navy">
                  Congratulations!
                </h1>
                <p className="text-xs text-education-navy/70 leading-relaxed max-w-sm mx-auto">
                  You Completed the Challenge. Daily consistent practice builds deep mastery.
                </p>
              </div>

              {/* Score card grid */}
              <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto text-xs font-semibold pt-4">
                <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100/30">
                  <span className="text-[10px] text-gray-400 block mb-1">Score Card</span>
                  <span className="text-base font-extrabold text-education-navy">
                    {score} / {quiz.questions.length}
                  </span>
                </div>
                <div className="p-4 bg-orange-50/40 rounded-2xl border border-orange-100/20">
                  <span className="text-[10px] text-orange-400 block mb-1">Streak Unlocked</span>
                  <span className="text-base font-extrabold text-orange-600 flex items-center justify-center gap-0.5">
                    <Flame size={16} /> +1 Day
                  </span>
                </div>
              </div>

              <div className="pt-6 flex justify-center gap-4">
                <button
                  onClick={handleRestart}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-sky-600 bg-sky-50 hover:bg-sky-100 transition-colors flex items-center gap-1.5"
                >
                  <RefreshCw size={12} /> Restart Quiz
                </button>
                <Link
                  to="/achievements"
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-tr from-sky-400 to-cyan-400 hover:shadow-lg transition-all"
                >
                  View My Badges
                </Link>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
