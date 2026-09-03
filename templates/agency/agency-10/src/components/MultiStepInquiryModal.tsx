import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Globe, 
  Smartphone, 
  Zap, 
  Cloud, 
  ShieldCheck,
  Check,
  Calendar,
  Lock
} from 'lucide-react';

interface MultiStepInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MultiStepInquiryModal: React.FC<MultiStepInquiryModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 5;

  // Form State
  const [projectType, setProjectType] = useState<string>('Artificial Intelligence & LLMs');
  const [projectStage, setProjectStage] = useState<string>('Existing Product Modernization');
  const [budget, setBudget] = useState<string>('$50,000 - $100,000');
  const [timeline, setTimeline] = useState<string>('1 - 3 Months');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const projectTypeOptions = [
    { label: 'Artificial Intelligence & LLMs', icon: 'Brain', desc: 'RAG, custom fine-tuning, autonomous agents, neural models' },
    { label: 'Enterprise Software & Distributed Systems', icon: 'Cpu', desc: 'High-throughput APIs, streaming data, microservices' },
    { label: 'Web Application Development', icon: 'Globe', desc: 'Modern React/Next.js SaaS, complex interactive portals' },
    { label: 'Mobile Application Development', icon: 'Smartphone', desc: 'Cross-platform React Native / native iOS and Android' },
    { label: 'Business Process Automation', icon: 'Zap', desc: 'Automated document extraction, ERP integrations, robotics' },
    { label: 'Cloud Infrastructure & DevOps', icon: 'Cloud', desc: 'Kubernetes, Terraform, AWS/GCP migration, zero-downtime' },
  ];

  const stageOptions = [
    { label: 'Greenfield Concept / Idea', desc: 'We need technical discovery, architecture design, and an MVP blueprint.' },
    { label: 'MVP Ready for Scaling', desc: 'We have early user traction and need production hardening and scalability.' },
    { label: 'Existing Product Modernization', desc: 'We need to integrate AI, refactor architecture, or solve concurrency.' },
    { label: 'Enterprise Scale Expansion', desc: 'High-volume institutional system requiring dedicated senior pod support.' },
  ];

  const budgetOptions = [
    { label: '$25,000 - $50,000', desc: 'Ideal for 4-6 week sprint MVP or targeted AI feasibility PoC.' },
    { label: '$50,000 - $100,000', desc: 'Complete production-grade web or AI application with automated testing.' },
    { label: '$100,000 - $250,000', desc: 'Full-scale enterprise digital product with distributed backend & multi-tier SLAs.' },
    { label: '$250,000+', desc: 'Multi-quarter strategic transformation with dedicated engineering pods.' },
  ];

  const timelineOptions = [
    { label: 'Immediate (&lt; 2 weeks)', desc: 'Accelerated onboarding for critical sprint deadlines.' },
    { label: '1 - 3 Months', desc: 'Standard phased discovery, architecture, and sprint execution.' },
    { label: '3 - 6 Months', desc: 'Comprehensive enterprise product rollout.' },
    { label: 'Flexible / Strategic', desc: 'Long-term advisory and architectural partnership.' },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetModal = () => {
    setCurrentStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="inquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        id="inquiry-modal-card"
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-150 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono font-bold flex items-center justify-center text-xs">
              AX
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 font-display">Start a Project</span>
              <span className="text-[11px] text-slate-600 ml-2 font-mono">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
          </div>
          <button
            onClick={resetModal}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-slate-100">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Submission Confirmation Screen */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 font-display">
                Project Scope Transmitted
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{name || 'Leader'}</span>. Your technical brief has been assigned to our principal solutions engineering pod.
              </p>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto space-y-2.5 text-xs text-slate-700 mt-6">
                <p className="font-bold text-slate-900 font-mono uppercase text-[11px]">
                  Next 24 Hours Sequence:
                </p>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Technical feasibility &amp; compute budget review</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>NDA mutual execution sent to {email || 'your email'}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>30-minute architecture discovery meeting invitation</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={resetModal}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs cursor-pointer hover:bg-slate-800"
                >
                  Return to Axiom Studio
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1: Project Type */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-blue-600 font-bold uppercase">Step 01</span>
                    <h3 className="text-xl font-bold text-slate-950 font-display mt-0.5">
                      What type of product or system are you building?
                    </h3>
                    <p className="text-xs text-slate-500">Select the primary technical discipline.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {projectTypeOptions.map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => setProjectType(opt.label)}
                        className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                          projectType === opt.label
                            ? 'bg-blue-50/50 border-blue-500 shadow-xs ring-1 ring-blue-500'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <p className="text-xs font-bold text-slate-900">{opt.label}</p>
                        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Project Stage */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-blue-600 font-bold uppercase">Step 02</span>
                    <h3 className="text-xl font-bold text-slate-950 font-display mt-0.5">
                      What stage is this initiative currently in?
                    </h3>
                    <p className="text-xs text-slate-500">Helps us assemble the right architecture pod.</p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {stageOptions.map((stage) => (
                      <button
                        key={stage.label}
                        type="button"
                        onClick={() => setProjectStage(stage.label)}
                        className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                          projectStage === stage.label
                            ? 'bg-blue-50/50 border-blue-500 shadow-xs ring-1 ring-blue-500'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-900">{stage.label}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{stage.desc}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${projectStage === stage.label ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'}`}>
                          {projectStage === stage.label && <Check className="w-2.5 h-2.5" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Estimated Budget */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-blue-600 font-bold uppercase">Step 03</span>
                    <h3 className="text-xl font-bold text-slate-950 font-display mt-0.5">
                      What is your anticipated engineering budget?
                    </h3>
                    <p className="text-xs text-slate-500">We calibrate architectural complexity and sprint duration to your range.</p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {budgetOptions.map((b) => (
                      <button
                        key={b.label}
                        type="button"
                        onClick={() => setBudget(b.label)}
                        className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                          budget === b.label
                            ? 'bg-blue-50/50 border-blue-500 shadow-xs ring-1 ring-blue-500'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <p className="text-xs font-bold text-slate-900 font-mono">{b.label}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{b.desc}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${budget === b.label ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300'}`}>
                          {budget === b.label && <Check className="w-2.5 h-2.5" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Timeline */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-blue-600 font-bold uppercase">Step 04</span>
                    <h3 className="text-xl font-bold text-slate-950 font-display mt-0.5">
                      Target Deployment Horizon
                    </h3>
                    <p className="text-xs text-slate-500">When do you need production deliverables shipped?</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {timelineOptions.map((t) => (
                      <button
                        key={t.label}
                        type="button"
                        onClick={() => setTimeline(t.label)}
                        className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                          timeline === t.label
                            ? 'bg-blue-50/50 border-blue-500 shadow-xs ring-1 ring-blue-500'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <p className="text-xs font-bold text-slate-900">{t.label}</p>
                        <p className="text-[11px] text-slate-500 mt-1">{t.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: Contact Details */}
              {currentStep === 5 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs font-mono text-blue-600 font-bold uppercase">Step 05</span>
                    <h3 className="text-xl font-bold text-slate-950 font-display mt-0.5">
                      Where should our engineers transmit the discovery brief?
                    </h3>
                    <p className="text-xs text-slate-500">We keep your information strictly confidential.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. Morgan Blake"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="morgan@enterprise.com"
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Organization Name"
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Brief System Summary (Optional)</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Any specific API requirements, model checkpoints, or latency targets..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600">
                    <span>Summary: {projectType.split(' ')[0]} &bull; {budget}</span>
                    <span className="text-emerald-600 font-bold">24hr Triage</span>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {!isSubmitted && (
          <div className="px-6 py-4 border-t border-slate-150 bg-slate-50/70 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
              >
                <span>Submit Technical Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
