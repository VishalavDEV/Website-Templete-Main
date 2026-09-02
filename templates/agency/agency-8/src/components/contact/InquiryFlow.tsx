import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { InquiryData, CursorType } from '../../types';
import { OptionSelector } from './OptionSelector';
import { ContactDetails } from './ContactDetails';
import { InquiryReview } from './InquiryReview';
import { SuccessState } from './SuccessState';
import { InquiryStep } from './InquiryStep';
import { Sparkles, Check } from 'lucide-react';

interface InquiryFlowProps {
  setCursorType: (type: CursorType, text?: string) => void;
  onNavigateHome: () => void;
}

export const InquiryFlow: React.FC<InquiryFlowProps> = ({
  setCursorType,
  onNavigateHome,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<InquiryData>({
    services: ['Digital Design', 'Web Development'],
    projectType: 'A Website',
    scale: 'Growing Initiative',
    timeline: 'Within 1–3 Months',
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryData, string>>>({});

  // Options Definitions
  const serviceOptions = [
    'Brand Strategy',
    'Brand Identity',
    'Digital Design',
    'Web Development',
    'Creative Technology',
    'Content & Motion',
    'Something Else',
  ];

  const projectTypeOptions = [
    'A New Brand',
    'A Website',
    'A Digital Product',
    'A Campaign',
    'An Experience',
    'Something New',
  ];

  const scaleOptions = [
    'Exploring',
    'Small Project',
    'Growing Initiative',
    'Major Transformation',
  ];

  const timelineOptions = [
    'As Soon As Possible',
    'Within 1–3 Months',
    '3–6 Months',
    'Just Exploring',
  ];

  // Validation
  const validateStep5 = () => {
    const newErrors: Partial<Record<keyof InquiryData, string>> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Please enter at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && formData.services.length === 0) return;
    if (currentStep === 2 && !formData.projectType) return;
    if (currentStep === 3 && !formData.scale) return;
    if (currentStep === 4 && !formData.timeline) return;
    if (currentStep === 5) {
      const isValid = validateStep5();
      if (!isValid) return;
    }

    setDirection(1);
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleJumpToStep = (step: number) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      if (exists) {
        return {
          ...prev,
          services: prev.services.filter((s) => s !== service),
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, service],
        };
      }
    });
  };

  const handleFieldChange = (field: keyof InquiryData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate frontend submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      services: [],
      projectType: '',
      scale: '',
      timeline: '',
      name: '',
      email: '',
      company: '',
      website: '',
      message: '',
    });
    setErrors({});
  };

  // Keyboard navigation on Enter key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        // If focused in textarea, allow enter for newlines
        const activeTag = document.activeElement?.tagName.toLowerCase();
        if (activeTag === 'textarea') return;

        if (currentStep < 5) {
          e.preventDefault();
          handleNext();
        } else if (currentStep === 5) {
          // If in step 5, check validation
          if (formData.name && formData.email && formData.message) {
            e.preventDefault();
            handleNext();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, formData]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  return (
    <section id="inquiry-section" className="py-20 bg-[#080808] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {!isSubmitted && (
          <div className="space-y-10 mb-12">
            {/* Editorial Intro Banner */}
            <div className="space-y-4 border-b border-[#ffffff15] pb-10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] text-[#0066FF]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE INQUIRY FLOW</span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#FAF9F6] leading-[0.95]">
                TELL US <br />
                A LITTLE ABOUT IT.
              </h2>
              <p className="text-base sm:text-lg text-[#888888] font-normal max-w-xl">
                Answer a few quick questions. We'll use them to understand what you're looking for and prepare our first discussion.
              </p>
            </div>

            {/* Step Progress Tabs Bar */}
            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
              {[1, 2, 3, 4, 5, 6].map((stepNum) => {
                const stepNames = ['SERVICES', 'PRODUCT', 'SCALE', 'TIMELINE', 'DETAILS', 'REVIEW'];
                const isCurrent = currentStep === stepNum;
                const isCompleted = currentStep > stepNum;

                return (
                  <button
                    key={stepNum}
                    type="button"
                    onClick={() => {
                      if (stepNum < currentStep) {
                        handleJumpToStep(stepNum);
                      }
                    }}
                    disabled={stepNum > currentStep}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                      isCurrent
                        ? 'bg-white/10 text-white font-bold border border-white/20'
                        : isCompleted
                        ? 'text-[#0066FF] hover:text-white cursor-pointer'
                        : 'text-[#888888]/50 cursor-not-allowed'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] bg-white/5 border border-white/10">
                      {isCompleted ? <Check className="w-2.5 h-2.5 text-[#0066FF]" /> : stepNum}
                    </span>
                    <span className="hidden md:inline">{stepNames[stepNum - 1]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Dynamic Form Content */}
        <AnimatePresence mode="wait" custom={direction}>
          {isSubmitted ? (
            <SuccessState
              key="success-state"
              onReset={handleReset}
              onNavigateHome={onNavigateHome}
              setCursorType={setCursorType}
            />
          ) : currentStep === 1 ? (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <InquiryStep
                stepNumber={1}
                totalSteps={5}
                question="WHAT CAN WE HELP YOU WITH?"
                subtitle="Select all areas that apply to your upcoming initiative."
                onNext={handleNext}
                canProceed={formData.services.length > 0}
                setCursorType={setCursorType}
              >
                <OptionSelector
                  options={serviceOptions}
                  selected={formData.services}
                  multiSelect={true}
                  onSelect={handleServiceToggle}
                  setCursorType={setCursorType}
                />
              </InquiryStep>
            </motion.div>
          ) : currentStep === 2 ? (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <InquiryStep
                stepNumber={2}
                totalSteps={5}
                question="WHAT ARE YOU BUILDING?"
                subtitle="Choose the primary format of your initiative."
                onNext={handleNext}
                onPrev={handlePrev}
                canProceed={Boolean(formData.projectType)}
                setCursorType={setCursorType}
              >
                <OptionSelector
                  options={projectTypeOptions}
                  selected={formData.projectType}
                  multiSelect={false}
                  onSelect={(opt) => setFormData((prev) => ({ ...prev, projectType: opt }))}
                  setCursorType={setCursorType}
                />
              </InquiryStep>
            </motion.div>
          ) : currentStep === 3 ? (
            <motion.div
              key="step-3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <InquiryStep
                stepNumber={3}
                totalSteps={5}
                question="WHAT'S THE SCALE?"
                subtitle="This helps us allocate appropriate studio resources and team leads."
                onNext={handleNext}
                onPrev={handlePrev}
                canProceed={Boolean(formData.scale)}
                setCursorType={setCursorType}
              >
                <OptionSelector
                  options={scaleOptions}
                  selected={formData.scale}
                  multiSelect={false}
                  onSelect={(opt) => setFormData((prev) => ({ ...prev, scale: opt }))}
                  setCursorType={setCursorType}
                />
              </InquiryStep>
            </motion.div>
          ) : currentStep === 4 ? (
            <motion.div
              key="step-4"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <InquiryStep
                stepNumber={4}
                totalSteps={5}
                question="WHEN ARE YOU LOOKING TO START?"
                subtitle="Select your preferred project kick-off timeframe."
                onNext={handleNext}
                onPrev={handlePrev}
                canProceed={Boolean(formData.timeline)}
                setCursorType={setCursorType}
              >
                <OptionSelector
                  options={timelineOptions}
                  selected={formData.timeline}
                  multiSelect={false}
                  onSelect={(opt) => setFormData((prev) => ({ ...prev, timeline: opt }))}
                  setCursorType={setCursorType}
                />
              </InquiryStep>
            </motion.div>
          ) : currentStep === 5 ? (
            <motion.div
              key="step-5"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <InquiryStep
                stepNumber={5}
                totalSteps={5}
                question="AND WHO ARE WE TALKING TO?"
                subtitle="Provide your contact details and a concise brief of your objectives."
                onNext={handleNext}
                onPrev={handlePrev}
                nextButtonLabel="REVIEW INQUIRY"
                canProceed={Boolean(formData.name.trim() && formData.email.trim() && formData.message.trim())}
                setCursorType={setCursorType}
              >
                <ContactDetails
                  formData={formData}
                  onChange={handleFieldChange}
                  errors={errors}
                  setCursorType={setCursorType}
                />
              </InquiryStep>
            </motion.div>
          ) : (
            <motion.div
              key="step-6-review"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#0066FF]">
                    STEP 06 // FINAL REVIEW
                  </span>
                  <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FAF9F6]">
                    YOUR PROJECT
                  </h3>
                  <p className="text-sm text-[#888888] font-mono">
                    Please review your selections before sending the inquiry.
                  </p>
                </div>

                <InquiryReview
                  formData={formData}
                  onEdit={handleJumpToStep}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  setCursorType={setCursorType}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
