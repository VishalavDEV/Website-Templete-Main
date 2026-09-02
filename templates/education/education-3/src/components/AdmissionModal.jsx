import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, User, BookOpen, GraduationCap, ShieldCheck } from 'lucide-react';
import { PROGRAM_TIMELINE } from '../data/programs';

export default function AdmissionModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    programId: PROGRAM_TIMELINE[0].id,
    studyMode: 'Hybrid',
    degreeBackground: '',
    gpa: '',
    motivation: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedId, setSubmittedId] = useState(null);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateStep = (currentStep) => {
    const errs = {};
    if (currentStep === 1) {
      if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
      if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
      if (!formData.country.trim()) errs.country = 'Country is required';
    } else if (currentStep === 2) {
      if (!formData.programId) errs.programId = 'Please select a program';
    } else if (currentStep === 3) {
      if (!formData.degreeBackground.trim()) errs.degreeBackground = 'Prior education background required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 4) {
        setStep(prev => prev + 1);
      } else {
        // Complete Submission
        const generatedAppId = 'AETH-2026-' + Math.floor(100000 + Math.random() * 900000);
        setSubmittedId(generatedAppId);
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const handleReset = () => {
    setSubmittedId(null);
    setStep(1);
    onClose();
  };

  const selectedProgramObj = PROGRAM_TIMELINE.find(p => p.id === formData.programId) || PROGRAM_TIMELINE[0];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl rounded-3xl glass-panel border border-electric-500/40 p-6 sm:p-10 bg-slate-900 shadow-2xl overflow-hidden my-8"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submittedId ? (
          <div>
            {/* Header & Stepper Indicator */}
            <div className="mb-8 space-y-2">
              <div className="flex items-center gap-2 text-electric-400 text-xs font-mono tracking-widest uppercase">
                <Sparkles className="w-4 h-4" />
                <span>ADMISSION PORTAL 2026</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Apply for Fellowship & Programs.
              </h3>

              {/* Progress Bar */}
              <div className="pt-4">
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span>STEP {step} OF 4: {step === 1 ? 'PERSONAL DETAILS' : step === 2 ? 'PROGRAM CHOICE' : step === 3 ? 'EDUCATION' : 'CONFIRMATION'}</span>
                  <span>{step * 25}% COMPLETE</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-electric-500 to-violetAccent-500 transition-all duration-500"
                    style={{ width: `${step * 25}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Form Step Contents */}
            <div className="space-y-6 min-h-[300px]">
              
              {/* STEP 1: Personal Details */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-400"
                    />
                    {errors.fullName && <span className="text-xs text-rose-400 mt-1 block">{errors.fullName}</span>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="eleanor@university.edu"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-400"
                      />
                      {errors.email && <span className="text-xs text-rose-400 mt-1 block">{errors.email}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                        Country of Residence *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="e.g. Switzerland / United States"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-400"
                      />
                      {errors.country && <span className="text-xs text-rose-400 mt-1 block">{errors.country}</span>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Program Selection */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                      Select Academic Program *
                    </label>
                    <div className="space-y-2.5 max-h-60 overflow-y-auto pr-2 no-scrollbar">
                      {PROGRAM_TIMELINE.map((prog) => (
                        <div
                          key={prog.id}
                          onClick={() => setFormData(prev => ({ ...prev, programId: prog.id }))}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                            formData.programId === prog.id
                              ? 'bg-electric-500/20 border-electric-400 text-white'
                              : 'bg-slate-950/60 border-white/10 text-slate-300 hover:border-white/20'
                          }`}
                        >
                          <div>
                            <div className="text-xs font-mono text-electric-300 font-bold">{prog.category}</div>
                            <div className="text-sm font-bold font-display">{prog.title}</div>
                            <div className="text-[10px] text-slate-400 font-mono">{prog.duration}</div>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            formData.programId === prog.id ? 'border-electric-400 bg-electric-500 text-white' : 'border-slate-600'
                          }`}>
                            {formData.programId === prog.id && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Preferred Mode of Residency
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Hybrid Spatial Campus', 'Full Remote Residency'].map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, studyMode: mode }))}
                          className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                            formData.studyMode === mode
                              ? 'bg-electric-600 text-white border-electric-400'
                              : 'bg-slate-950 border-white/10 text-slate-300'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Education Background */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Highest Prior Academic Degree / Institution *
                    </label>
                    <input
                      type="text"
                      name="degreeBackground"
                      value={formData.degreeBackground}
                      onChange={handleChange}
                      placeholder="e.g. B.S. in Applied Physics - ETH Zurich"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-400"
                    />
                    {errors.degreeBackground && <span className="text-xs text-rose-400 mt-1 block">{errors.degreeBackground}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                      Statement of Research Intent (Optional)
                    </label>
                    <textarea
                      name="motivation"
                      rows="3"
                      value={formData.motivation}
                      onChange={handleChange}
                      placeholder="Briefly describe your research interests or project goals..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-white/10 text-white text-sm focus:outline-none focus:border-electric-400 resize-none"
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 4: Review & Submit */}
              {step === 4 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-white/10 space-y-3 text-xs font-mono">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400">Applicant:</span>
                      <span className="text-white font-bold">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400">Contact Email:</span>
                      <span className="text-cyan-300">{formData.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-slate-400">Program:</span>
                      <span className="text-electric-400 font-bold">{selectedProgramObj.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Study Mode:</span>
                      <span className="text-violetAccent-400">{formData.studyMode}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>No registration fee required. Application processed instantly on-site.</span>
                  </div>
                </motion.div>
              )}

            </div>

            {/* Modal Controls */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={handlePrev}
                  className="px-4 py-2.5 rounded-xl glass-panel border border-white/10 text-slate-300 text-xs font-semibold flex items-center gap-2 hover:bg-white/5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>PREVIOUS</span>
                </button>
              ) : <div />}

              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-electric-600 to-violetAccent-600 hover:from-electric-500 hover:to-violetAccent-500 text-white font-bold text-xs tracking-wider flex items-center gap-2 shadow-lg shadow-electric-500/20"
              >
                <span>{step === 4 ? 'SUBMIT APPLICATION' : 'CONTINUE STEP'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center shadow-xl shadow-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                APPLICATION SUBMITTED SUCCESSFULLY
              </span>
              <h3 className="text-3xl font-extrabold text-white font-display">
                Welcome to Aetheria.
              </h3>
              <p className="text-slate-300 text-sm font-light max-w-md mx-auto">
                Your application docket <span className="font-mono text-electric-400 font-bold">{submittedId}</span> has been logged. An academic advisor will reach out to schedule your preliminary symposium interview.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-slate-400 max-w-md mx-auto">
              Selected Program: <span className="text-white font-bold">{selectedProgramObj.title}</span>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-electric-600 hover:bg-electric-500 text-white font-bold text-xs tracking-wider shadow-lg shadow-electric-500/30"
            >
              RETURN TO PLATFORM
            </button>
          </motion.div>
        )}

      </motion.div>
    </div>
  );
}
