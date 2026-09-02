import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle, UploadCloud } from "lucide-react";
import { Button } from "../common/Button";

const jobSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email address is required"),
  phone: z.string().min(5, "Contact phone number is required"),
  linkedIn: z.string().url("Please enter a valid LinkedIn URL").or(z.string().min(5)),
  githubOrPortfolio: z.string().optional(),
  yearsExperience: z.string().min(1, "Please specify your years of relevant experience"),
  note: z.string().min(10, "Please share a brief note on why you'd like to build systems with Vertexa")
});

type JobFormData = z.infer<typeof jobSchema>;

export interface JobApplicationFormProps {
  jobTitle: string;
  jobDepartment: string;
  className?: string;
}

export const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ jobTitle, jobDepartment, className = "" }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      yearsExperience: "5-8 Years"
    }
  });

  const onSubmit = async (data: JobFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFileName(null);
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
            Application Received
          </h3>
          <p className="text-sm text-[#5E636E] leading-relaxed">
            Thank you for applying to the <strong className="text-[#121316]">{jobTitle}</strong> position. Our engineering talent lead will review your background and reach out within 3 business days.
          </p>
        </div>
        <Button variant="secondary" onClick={handleReset}>
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`bg-white border border-[#E6E2D8] p-6 sm:p-8 rounded-xs space-y-6 ${className}`}
    >
      <div className="border-b border-[#E6E2D8] pb-4">
        <div className="font-mono-tech text-[10px] uppercase text-[#0A2E23] font-bold">
          DEPARTMENT // {jobDepartment.toUpperCase()}
        </div>
        <h3 className="font-serif-editorial text-2xl text-[#121316]">
          Apply for: {jobTitle}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            Full Name *
          </label>
          <input
            type="text"
            {...register("fullName")}
            placeholder="Dr. Alexander Vance"
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 font-mono-tech">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            Email Address *
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="alex.vance@domain.com"
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 font-mono-tech">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            Phone Number *
          </label>
          <input
            type="text"
            {...register("phone")}
            placeholder="+1 (555) 019-2834"
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 font-mono-tech">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            Relevant Experience
          </label>
          <select
            {...register("yearsExperience")}
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs font-mono-tech"
          >
            <option value="3-5 Years">3-5 Years</option>
            <option value="5-8 Years">5-8 Years</option>
            <option value="8-12 Years">8-12 Years (Staff / Principal)</option>
            <option value="12+ Years">12+ Years (Distinguished / Leadership)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            LinkedIn Profile URL *
          </label>
          <input
            type="text"
            {...register("linkedIn")}
            placeholder="https://linkedin.com/in/username"
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
          />
          {errors.linkedIn && (
            <p className="mt-1 text-xs text-red-600 font-mono-tech">{errors.linkedIn.message}</p>
          )}
        </div>

        <div>
          <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
            GitHub / Portfolio URL
          </label>
          <input
            type="text"
            {...register("githubOrPortfolio")}
            placeholder="https://github.com/username"
            className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
          />
        </div>
      </div>

      {/* Resume Upload / Attach simulation */}
      <div>
        <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
          Resume / CV Document (PDF or DOCX)
        </label>
        <div className="border-2 border-dashed border-[#E6E2D8] hover:border-[#0A2E23] p-4 text-center rounded-xs transition-colors cursor-pointer bg-[#FAF8F5]">
          <input
            type="file"
            id="cv-upload"
            className="hidden"
            accept=".pdf,.docx,.doc"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFileName(e.target.files[0].name);
              }
            }}
          />
          <label htmlFor="cv-upload" className="cursor-pointer flex flex-col items-center gap-1.5 text-xs text-[#5E636E]">
            <UploadCloud className="w-5 h-5 text-[#0A2E23]" />
            {fileName ? (
              <span className="font-mono-tech font-bold text-[#0A2E23]">{fileName}</span>
            ) : (
              <span>Click or drag and drop your resume file (PDF/DOCX max 10MB)</span>
            )}
          </label>
        </div>
      </div>

      <div>
        <label className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5E636E] mb-1">
          Candidate Statement / Note *
        </label>
        <textarea
          rows={3}
          {...register("note")}
          placeholder="Tell us about the most complex technical system or bottleneck you've engineered..."
          className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#E6E2D8] focus:border-[#0A2E23] focus:outline-none text-sm text-[#121316] rounded-xs"
        />
        {errors.note && (
          <p className="mt-1 text-xs text-red-600 font-mono-tech">{errors.note.message}</p>
        )}
      </div>

      <div className="pt-2">
        <Button
          variant="primary"
          size="lg"
          type="submit"
          isLoading={isSubmitting}
          icon={<Send className="w-4 h-4" />}
          className="w-full"
        >
          Submit Candidate Profile
        </Button>
      </div>
    </form>
  );
};
