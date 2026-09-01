import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import { Button } from "../common/Button";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid corporate email address"),
  company: z.string().min(2, "Organization name is required"),
  role: z.string().optional(),
  phone: z.string().optional(),
  practice: z.string().min(1, "Please select an engineering practice"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select an implementation timeline"),
  message: z.string().min(10, "Please provide at least a brief description of your system objectives (min 10 characters)")
});

type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactFormProps {
  initialPractice?: string;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialPractice = "AI & Intelligent Systems", className = "" }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      practice: initialPractice,
      budget: "$150,000 – $500,000",
      timeline: "Within 3 Months"
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate lead submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white border border-[#E6E2D8] p-8 sm:p-12 rounded-xs text-center space-y-6 ${className}`}>
        <div className="w-16 h-16 rounded-full bg-[#0A2E23]/10 text-[#0A2E23] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="font-serif-editorial text-3xl text-[#121316]">
            Architectural Engagement Initiated
          </h3>
          <p className="text-sm text-[#5E636E] leading-relaxed">
            Your project brief has been assigned to our practice leads. A Vertexa Principal Systems Architect will schedule a 45-minute technical discovery session with your team within 24 hours.
          </p>
        </div>
        <Button variant="primary" onClick={handleReset}>
          Submit Another Brief
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`bg-white border border-[#E6E2D8] p-6 sm:p-10 rounded-xs space-y-6 ${className}`}
    >
      <div className="border-b border-[#E6E2D8] pb-4">
        <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#121316]">
          Direct Scoping & Architecture RFP
        </h3>
        <p className="text-xs sm:text-sm text-[#5E636E] mt-1">
          Complete the form below for technical consultation, RFP submissions, or emergency systems review.
        </p>
      </div>

      {/* Full Name & Corporate Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            Full Name *
          </label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="e.g. Katherine Sterling"
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-mono-tech">
              <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            Corporate Email *
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="name@enterprise.com"
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-mono-tech">
              <AlertCircle className="w-3 h-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Organization & Role */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            Organization / Enterprise *
          </label>
          <input
            type="text"
            {...register("company")}
            placeholder="e.g. Vanguard Logistics Corp"
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-mono-tech">
              <AlertCircle className="w-3 h-3" /> {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            Job Title / Position
          </label>
          <input
            type="text"
            {...register("role")}
            placeholder="e.g. VP of Cloud Engineering"
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
          />
        </div>
      </div>

      {/* Practice Selector */}
      <div>
        <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
          Primary Engineering Practice *
        </label>
        <select
          {...register("practice")}
          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs font-mono-tech"
        >
          <option value="AI & Intelligent Systems">AI & Intelligent Systems</option>
          <option value="Digital Products & Platforms">Digital Products & Platforms</option>
          <option value="Cloud & Resilient Infrastructure">Cloud & Resilient Infrastructure</option>
          <option value="Data Lakehouse & Streaming">Data Lakehouse & Streaming</option>
          <option value="Zero-Trust Cybersecurity">Zero-Trust Cybersecurity</option>
          <option value="Enterprise Core Transformation">Enterprise Core Transformation</option>
        </select>
      </div>

      {/* Budget & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            Anticipated Investment Budget
          </label>
          <select
            {...register("budget")}
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs font-mono-tech"
          >
            <option value="$75,000 – $150,000">$75,000 – $150,000</option>
            <option value="$150,000 – $500,000">$150,000 – $500,000</option>
            <option value="$500,000 – $1,500,000">$500,000 – $1,500,000</option>
            <option value="$1,500,000+">$1,500,000+ (Multi-Year Modernization)</option>
          </select>
        </div>

        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            Target Execution Timeline
          </label>
          <select
            {...register("timeline")}
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs font-mono-tech"
          >
            <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
            <option value="Within 3 Months">Within 3 Months</option>
            <option value="Q3/Q4 Strategic Roadmap">Q3/Q4 Strategic Roadmap</option>
            <option value="Exploratory Architecture Review">Exploratory Architecture Review</option>
          </select>
        </div>
      </div>

      {/* Project Brief Message */}
      <div>
        <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
          System Requirements or Challenge Summary *
        </label>
        <textarea
          rows={4}
          {...register("message")}
          placeholder="Describe existing architecture bottlenecks, throughput targets, cloud migration goals, or compliance mandates..."
          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-mono-tech">
            <AlertCircle className="w-3 h-3" /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Assurance and Submit Button */}
      <div className="pt-4 border-t border-[#E6E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-[#7C828D]">
          <ShieldCheck className="w-4 h-4 text-[#0A2E23] shrink-0" />
          <span>Strict Enterprise Confidentiality & Mutual NDA standard.</span>
        </div>

        <Button
          variant="primary"
          size="lg"
          type="submit"
          isLoading={isSubmitting}
          icon={<Send className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          Submit Architecture Brief
        </Button>
      </div>
    </form>
  );
};
