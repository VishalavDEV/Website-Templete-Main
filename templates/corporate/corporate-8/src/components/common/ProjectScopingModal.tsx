import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, Send, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "./Button";

export interface ProjectScopingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectScopingModal: React.FC<ProjectScopingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    practice: "AI & Intelligent Systems",
    budget: "$150,000 – $500,000",
    timeline: "Within 3 Months",
    brief: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const practiceOptions = [
    "AI & Intelligent Systems",
    "Digital Products & Platforms",
    "Cloud & Resilient Infrastructure",
    "Data Lakehouse & Streaming",
    "Zero-Trust Cybersecurity",
    "Enterprise Core Transformation"
  ];

  const budgetOptions = [
    "$75,000 – $150,000",
    "$150,000 – $500,000",
    "$500,000 – $1,500,000",
    "$1,500,000+"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate enterprise lead ingestion
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      practice: "AI & Intelligent Systems",
      budget: "$150,000 – $500,000",
      timeline: "Within 3 Months",
      brief: ""
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#121316]/80 backdrop-blur-xs"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#E6E2D8] shadow-2xl rounded-xs overflow-hidden z-10 my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#E6E2D8] bg-[#F4F1EA]">
              <div>
                <div className="flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-widest text-[#0A2E23] mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E23]" />
                  <span>Executive Engagement // Scoping</span>
                </div>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316]">
                  Initiate Architectural Dialogue
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xs hover:bg-[#E8E4DA] text-[#5E636E] hover:text-[#121316] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#0A2E23]/10 text-[#0A2E23] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif-editorial text-2xl text-[#121316]">
                      Inquiry Received & Routing to Practice Principal
                    </h4>
                    <p className="text-sm text-[#5E636E] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#121316]">{formData.name}</strong>. A Vertexa Principal Systems Architect will review your technical brief and respond within 24 business hours.
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button variant="primary" onClick={handleReset}>
                      Return to Website
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Katherine Sterling"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@enterprise.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1.5">
                        Organization / Enterprise *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Global Bank"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1.5">
                        Role / Title
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. CTO / Head of Architecture"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
                      />
                    </div>
                  </div>

                  {/* Practice selector */}
                  <div>
                    <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-2">
                      Primary Engineering Capability Requested
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {practiceOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, practice: opt })}
                          className={`px-3 py-2 text-left font-mono-tech text-xs border rounded-xs transition-all cursor-pointer ${
                            formData.practice === opt
                              ? "bg-[#0A2E23] text-[#CCF34A] border-[#0A2E23] font-semibold"
                              : "bg-white text-[#5E636E] border-[#E6E2D8] hover:border-[#121316]/40"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1.5">
                        Anticipated Capital Allocation
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs font-mono-tech"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs font-mono-tech"
                      >
                        <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                        <option value="Within 3 Months">Within 3 Months</option>
                        <option value="Q3/Q4 Strategic Roadmap">Q3/Q4 Strategic Roadmap</option>
                        <option value="Exploratory Architecture Review">Exploratory Architecture Review</option>
                      </select>
                    </div>
                  </div>

                  {/* Problem Brief */}
                  <div>
                    <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1.5">
                      System Bottleneck or Strategic Objective *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      placeholder="Briefly describe the architectural challenge, throughput targets, or modernization goals..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
                    />
                  </div>

                  {/* Security Note & Action */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E6E2D8]">
                    <div className="flex items-center gap-2 text-xs text-[#7C828D]">
                      <ShieldCheck className="w-4 h-4 text-[#0A2E23] shrink-0" />
                      <span>Enterprise Mutual NDA guaranteed prior to code access.</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <Button variant="ghost" size="md" type="button" onClick={onClose}>
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        size="md"
                        type="submit"
                        isLoading={isSubmitting}
                        icon={<Send className="w-3.5 h-3.5" />}
                        className="w-full sm:w-auto"
                      >
                        Submit Technical Scoping
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
