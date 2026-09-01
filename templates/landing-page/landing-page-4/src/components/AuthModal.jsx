import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, ArrowRight, CheckCircle2, Shield, Users, Sparkles, Lock, Building, Mail } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import confetti from 'canvas-confetti';

export default function AuthModal() {
  const { authModalState, closeAuthModal, showToast } = useModal();
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(authModalState.initialPlan || 'growth');
  const [workspaceName, setWorkspaceName] = useState('');
  const [email, setEmail] = useState('');
  const [teamSize, setTeamSize] = useState('5-20');
  const [isLoading, setIsLoading] = useState(false);

  if (!authModalState.isOpen) return null;

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!email.trim() || !email.includes('@')) {
        showToast('Please enter a valid work email address.', 'error');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!workspaceName.trim()) {
        showToast('Please enter a workspace name.', 'error');
        return;
      }
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep(3);
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#F5A900', '#FFC247', '#FFFFFF', '#FF8A00']
          });
        } catch (err) {}
        showToast(`🎉 Workspace "${workspaceName}" provisioned with 14-day ${selectedPlan.toUpperCase()} trial!`);
      }, 1000);
    }
  };

  const handleFinish = () => {
    closeAuthModal();
    setStep(1);
    setEmail('');
    setWorkspaceName('');
    showToast('🚀 Launching your Flowzen cloud workspace sandbox...');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeAuthModal}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative w-full max-w-lg rounded-3xl bg-[#0c0c10]/95 border border-white/15 shadow-2xl shadow-black/95 backdrop-blur-2xl p-6 md:p-8 z-10 overflow-hidden text-left"
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Zap className="w-4 h-4 text-black fill-black" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">Get Started with Flowzen</h3>
            <p className="text-xs text-zinc-400">14-day free trial • No credit card required</p>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between gap-2 mb-6">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex-1 flex flex-col gap-1.5">
              <div className={`h-1.5 rounded-full transition-colors ${
                step >= num ? 'bg-amber-400' : 'bg-white/10'
              }`}></div>
              <span className="text-[10px] font-mono text-zinc-400 uppercase">
                {num === 1 ? '01 Account' : num === 2 ? '02 Workspace' : '03 Ready'}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Work Email & Plan Confirmation */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Work Email
              </label>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus-within:border-amber-500/50">
                <Mail size={16} className="text-zinc-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
                  autoFocus
                />
              </div>
            </div>

            {/* Selected Plan Choice */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Selected Plan
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'starter', name: 'Starter', price: '$19/mo' },
                  { id: 'growth', name: 'Growth', price: '$49/mo (Popular)' },
                  { id: 'scale', name: 'Scale', price: 'Custom SLA' }
                ].map((plan) => (
                  <button
                    type="button"
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      selectedPlan === plan.id
                        ? 'bg-amber-500/15 border-amber-500/50 text-white'
                        : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{plan.name}</div>
                    <div className="text-[10px] text-amber-400/90 font-mono mt-0.5">{plan.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* SSO Shortcut */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Continue to Workspace Setup
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="text-center text-[11px] text-zinc-500 pt-1">
              By signing up, you agree to Flowzen's Terms & Security Policies.
            </div>
          </form>
        )}

        {/* Step 2: Workspace Details */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Company / Workspace Name
              </label>
              <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 focus-within:border-amber-500/50">
                <Building size={16} className="text-zinc-400" />
                <input
                  type="text"
                  required
                  value={workspaceName}
                  onChange={(e) => setWorkspaceName(e.target.value)}
                  placeholder="Acme Engineering Labs"
                  className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
                  autoFocus
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Team Size
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['1-5', '5-20', '20-50', '50+'].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => setTeamSize(size)}
                    className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                      teamSize === size
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-3 rounded-xl text-xs font-semibold bg-white/[0.05] text-zinc-300 hover:text-white border border-white/10"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-grow py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <span>Provisioning Cloud Stack...</span>
                ) : (
                  <>
                    <span>Create & Launch Workspace</span>
                    <Sparkles size={15} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success & Sandbox Ready */}
        {step === 3 && (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
              <CheckCircle2 size={30} />
            </div>

            <h4 className="text-xl font-bold text-white">Your Workspace Is Ready!</h4>
            
            <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              We've created <span className="text-amber-400 font-semibold">{workspaceName}</span> with 200+ pre-installed automation templates and a 14-day Growth trial.
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-400 text-left space-y-1">
              <div className="text-emerald-400">✓ Single-Tenant Encrypted DB: Ready</div>
              <div className="text-emerald-400">✓ Webhook Dispatcher: Active (12ms)</div>
              <div className="text-emerald-400">✓ AI Workflow Copilot: Enabled</div>
            </div>

            <button
              onClick={handleFinish}
              className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-lg shadow-amber-500/30 hover:scale-[1.02] transition-all cursor-pointer"
            >
              Open Flowzen Cloud Console →
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
}
