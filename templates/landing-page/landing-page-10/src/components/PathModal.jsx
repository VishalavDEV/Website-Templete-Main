import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, RefreshCw, Compass, ShieldCheck } from 'lucide-react';

export default function PathModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    experience: '',
    habitPriority: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const resetForm = () => {
    setStep(1);
    setAnswers({ goal: '', experience: '', habitPriority: '' });
    setSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const goals = [
    { id: 'strength', title: 'Sustainable Strength', desc: 'Build power & joint resilience without injuries' },
    { id: 'recovery', title: 'Better Recovery & Sleep', desc: 'Lower stress levels and improve HRV' },
    { id: 'consistency', title: 'Consistent Habits', desc: 'Stop restarting and integrate movement into life' }
  ];

  const experiences = [
    { id: 'beginner', title: 'Starting Fresh', desc: 'Returning to movement after a break or seeking guidance' },
    { id: 'intermediate', title: 'Regular Movement', desc: 'Currently active but lacking structured progression' },
    { id: 'advanced', title: 'Peak Vitality', desc: 'Seeking biometrics, concierge support & lifelong optimization' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#F3F0E8] text-[#171816] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#171816]/20 relative flex flex-col"
      >
        {/* Top Header */}
        <div className="p-6 bg-[#171816] text-[#F3F0E8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B56F4D]" />
            <span className="text-xs font-heading font-bold uppercase tracking-widest">
              AURELIS PATH FINDER
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="p-8 sm:p-12">
          {!submitted ? (
            <div className="space-y-8">
              {/* Progress Steps Indicator */}
              <div className="flex items-center justify-between text-xs font-mono text-[#171816]/60 pb-4 border-b border-[#171816]/10">
                <span>STEP 0{step} OF 02</span>
                <span>{step === 1 ? 'Primary Focus' : 'Experience Level'}</span>
              </div>

              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-heading font-bold text-[#171816]">
                    What is your primary wellness outcome?
                  </h3>
                  <div className="space-y-3">
                    {goals.map((g) => (
                      <button
                        key={g.id}
                        onClick={() => {
                          setAnswers({ ...answers, goal: g.id });
                          setStep(2);
                        }}
                        className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                          answers.goal === g.id
                            ? 'bg-[#171816] text-[#F3F0E8] border-[#171816]'
                            : 'bg-[#ECE8DE] text-[#171816] border-[#171816]/10 hover:border-[#171816]/40'
                        }`}
                      >
                        <div>
                          <p className="font-heading font-bold text-base">{g.title}</p>
                          <p className="text-xs font-light opacity-80">{g.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#B56F4D]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-heading font-bold text-[#171816]">
                    How would you describe your current schedule?
                  </h3>
                  <div className="space-y-3">
                    {experiences.map((exp) => (
                      <button
                        key={exp.id}
                        onClick={() => {
                          setAnswers({ ...answers, experience: exp.id });
                          setSubmitted(true);
                        }}
                        className="w-full p-4 rounded-2xl border bg-[#ECE8DE] text-[#171816] border-[#171816]/10 hover:bg-[#171816] hover:text-[#F3F0E8] transition-all duration-300 flex items-center justify-between text-left group"
                      >
                        <div>
                          <p className="font-heading font-bold text-base">{exp.title}</p>
                          <p className="text-xs font-light opacity-80">{exp.desc}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#B56F4D] group-hover:translate-x-1 transition-transform" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-[#3E5142] text-white flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-emerald-300" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B56F4D]">
                  RECOMMENDED PATHWAY
                </span>
                <h3 className="text-3xl font-heading font-extrabold text-[#171816]">
                  {answers.experience === 'advanced' ? 'PROGRAM 03 — EVOLVE' : answers.goal === 'consistency' ? 'PROGRAM 01 — FOUNDATION' : 'PROGRAM 02 — MOMENTUM'}
                </h3>
                <p className="text-sm font-light text-[#171816]/80 max-w-md mx-auto">
                  Based on your responses, our coaching lead will prepare a personalized baseline consultation.
                </p>
              </div>

              <div className="bg-[#ECE8DE] p-6 rounded-2xl border border-[#171816]/10 text-left space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#171816]/60">Consultation Protocol:</span>
                  <span className="font-bold text-[#171816]">1-on-1 Strategy Sync</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#171816]/60">Contact Email:</span>
                  <span className="font-mono text-[#B56F4D]">hello@aurelis.studio</span>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full py-4 bg-[#171816] text-[#F3F0E8] rounded-full font-medium tracking-wide uppercase text-xs hover:bg-[#3E5142] transition-colors"
              >
                Close & Explore Program
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
