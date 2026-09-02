import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, Sparkles, Send, FileText, Check, AlertCircle, Copy } from 'lucide-react';
import { ContactFormData, ContactSubmissionRecord } from '../types';
import { mockApi } from '../services/mockApi';
import { audioService } from '../utils/audio';

const SERVICE_OPTIONS = [
  'Brand Strategy',
  'Visual Identity',
  'Website',
  'Web Application',
  'Development',
  'Motion & 3D Video',
  'Growth Marketing',
  'Other / Custom'
];

const BUDGET_OPTIONS = [
  '$25,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000 – $250,000',
  '$250,000+'
];

const TIMELINE_OPTIONS = [
  '1 – 2 Months (Expedited)',
  '3 – 4 Months (Standard)',
  '5 – 6 Months (Comprehensive)',
  'Flexible / In Planning'
];

interface ContactWizardProps {
  onViewHistory?: () => void;
  onNavigateHome?: () => void;
}

export function ContactWizard({ onViewHistory, onNavigateHome }: ContactWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    services: ['Website', 'Visual Identity'],
    budget: '$50,000 – $100,000',
    timeline: '3 – 4 Months (Standard)',
    details: ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    message: string;
    record: ContactSubmissionRecord;
  } | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const totalSteps = 7;

  const handleNext = () => {
    setErrorMsg('');

    // Step-by-step validations
    if (currentStep === 1) {
      if (!formData.name.trim()) {
        setErrorMsg('Please provide your name.');
        return;
      }
    } else if (currentStep === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        setErrorMsg('Please provide a valid business email address.');
        return;
      }
    } else if (currentStep === 3) {
      if (formData.services.length === 0) {
        setErrorMsg('Please select at least one service discipline.');
        return;
      }
    }

    audioService.playClick();
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    setErrorMsg('');
    if (currentStep > 1) {
      audioService.playClick();
      setCurrentStep(prev => prev - 1);
    }
  };

  const toggleService = (srv: string) => {
    audioService.playHover();
    setFormData(prev => {
      const exists = prev.services.includes(srv);
      if (exists) {
        return { ...prev, services: prev.services.filter(s => s !== srv) };
      } else {
        return { ...prev, services: [...prev.services, srv] };
      }
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await mockApi.submitContactForm(formData);
      setIsSubmitting(false);
      setSubmissionResult(response);
      audioService.playSuccess();
    } catch (err: unknown) {
      setIsSubmitting(false);
      setErrorMsg((err as Error)?.message || 'Something went wrong while submitting. Please retry.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar & Header */}
      {!submissionResult && (
        <div className="mb-8">
          <div className="flex items-center justify-between font-mono text-xs text-gray-400 mb-2">
            <span className="text-violet-400 font-bold tracking-wider">
              STEP {currentStep} OF {totalSteps}
            </span>
            <span>{Math.round((currentStep / totalSteps) * 100)}% COMPLETE</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400"
              initial={{ width: '14%' }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Main Wizard Container */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#12141F] border border-white/10 shadow-2xl relative min-h-[420px] flex flex-col justify-between">
        {/* Error Alert */}
        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl bg-rose-950/60 border border-rose-800/50 text-rose-300 text-xs font-mono flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Loading Overlay */}
        {isSubmitting && (
          <div className="absolute inset-0 z-20 bg-[#12141F]/90 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-8 text-center">
            <Loader2 className="w-10 h-10 text-violet-400 animate-spin mb-4" />
            <h4 className="text-lg font-bold text-white">Sending your project brief...</h4>
            <p className="text-xs font-mono text-gray-400 mt-2">
              Encrypting requirements and routing to Horizon partner desks.
            </p>
          </div>
        )}

        {/* Success Screen */}
        {submissionResult ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl shadow-emerald-950/50">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                Project Brief Received
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Thanks, {formData.name}.
              </h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto mt-2 leading-relaxed">
                {submissionResult.message}
              </p>
            </div>

            {/* Generated Reference Number Card */}
            <div className="p-4 rounded-2xl bg-[#171A29] border border-white/10 max-w-sm mx-auto flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] font-mono text-gray-500 uppercase block">Tracking Reference</span>
                <span className="font-mono text-base font-bold text-violet-400">
                  {submissionResult.referenceId}
                </span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(submissionResult.referenceId);
                  setCopiedRef(true);
                  setTimeout(() => setCopiedRef(false), 2000);
                  audioService.playClick();
                }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all text-xs font-mono flex items-center gap-1"
                title="Copy reference number"
              >
                {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedRef ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  if (onViewHistory) onViewHistory();
                }}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>View Stored Inquiries</span>
              </button>

              <button
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                }}
                className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs uppercase font-semibold tracking-wider transition-all shadow-lg"
              >
                <span>Return to Homepage</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* Step-By-Step Form Pages */
          <div className="flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {/* Step 1: Name & Company */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Let's start with your name.</h3>
                    <p className="text-sm text-gray-400 mt-1">Who will we be collaborating with?</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        onKeyDown={e => e.key === 'Enter' && handleNext()}
                        placeholder="Elena Vance"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#161925] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 text-base"
                        autoFocus
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-gray-400 mb-2">
                        Company or Project Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        onKeyDown={e => e.key === 'Enter' && handleNext()}
                        placeholder="Nova Robotics"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#161925] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 text-base"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Email */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">What's your email?</h3>
                    <p className="text-sm text-gray-400 mt-1">Where can our partners send the initial proposal?</p>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-400 mb-2">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      onKeyDown={e => e.key === 'Enter' && handleNext()}
                      placeholder="elena@novarobotics.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#161925] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 text-base"
                      autoFocus
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Disciplines Needed */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">What do you need?</h3>
                    <p className="text-sm text-gray-400 mt-1">Select all creative and technical areas that apply.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                    {SERVICE_OPTIONS.map((srv) => {
                      const isSelected = formData.services.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-violet-600/20 border-violet-500 text-white shadow-md shadow-violet-950/40'
                              : 'bg-[#161925] border-white/8 text-gray-400 hover:text-gray-200 hover:border-white/20'
                          }`}
                        >
                          <span>{srv}</span>
                          {isSelected && <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 4: Budget */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Estimated budget</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Helps us recommend the right team composition and sprint velocity.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {BUDGET_OPTIONS.map((b) => {
                      const isSelected = formData.budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => {
                            audioService.playHover();
                            setFormData({ ...formData, budget: b });
                          }}
                          className={`w-full p-4 rounded-xl border text-left text-sm font-mono transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-violet-600/20 border-violet-500 text-white font-bold'
                              : 'bg-[#161925] border-white/8 text-gray-300 hover:border-white/20'
                          }`}
                        >
                          <span>{b}</span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-violet-400 bg-violet-500' : 'border-gray-600'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 5: Timeline */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Target launch timeline</h3>
                    <p className="text-sm text-gray-400 mt-1">When do you envision unveiling this project?</p>
                  </div>

                  <div className="space-y-3">
                    {TIMELINE_OPTIONS.map((t) => {
                      const isSelected = formData.timeline === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            audioService.playHover();
                            setFormData({ ...formData, timeline: t });
                          }}
                          className={`w-full p-4 rounded-xl border text-left text-sm font-mono transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-violet-600/20 border-violet-500 text-white font-bold'
                              : 'bg-[#161925] border-white/8 text-gray-300 hover:border-white/20'
                          }`}
                        >
                          <span>{t}</span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-violet-400 bg-violet-500' : 'border-gray-600'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Step 6: Project Details */}
              {currentStep === 6 && (
                <motion.div
                  key="step6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Tell us about your project</h3>
                    <p className="text-sm text-gray-400 mt-1">
                      What are your core goals, references, or existing roadblocks?
                    </p>
                  </div>

                  <div>
                    <textarea
                      rows={5}
                      value={formData.details}
                      onChange={e => setFormData({ ...formData, details: e.target.value })}
                      placeholder="We are building a category-defining spatial AI company and need an identity system and sub-100ms web experience ready for our Series B unveiling..."
                      className="w-full p-4 rounded-xl bg-[#161925] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 text-sm leading-relaxed"
                      autoFocus
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 7: Review & Submit */}
              {currentStep === 7 && (
                <motion.div
                  key="step7"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to submit brief?</h3>
                    <p className="text-sm text-gray-400 mt-1">Review your summary before initiating transmission.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#161925] border border-white/8 space-y-3 font-mono text-xs">
                    <div className="flex justify-between border-b border-white/6 pb-2">
                      <span className="text-gray-500">Contact</span>
                      <span className="text-white font-bold">{formData.name} ({formData.email})</span>
                    </div>
                    {formData.company && (
                      <div className="flex justify-between border-b border-white/6 pb-2">
                        <span className="text-gray-500">Company</span>
                        <span className="text-gray-200">{formData.company}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-b border-white/6 pb-2">
                      <span className="text-gray-500">Services</span>
                      <span className="text-violet-400">{formData.services.join(', ')}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/6 pb-2">
                      <span className="text-gray-500">Budget</span>
                      <span className="text-gray-200">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Timeline</span>
                      <span className="text-gray-200">{formData.timeline}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-white/8 mt-6">
              {currentStep > 1 ? (
                <button
                  type="button"
                  id="wizard-prev-btn"
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                id="wizard-next-btn"
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-violet-600/30"
              >
                <span>{currentStep === totalSteps ? 'Submit Project Brief' : 'Continue'}</span>
                {currentStep === totalSteps ? <Send className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
