import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, CheckCircle2, AlertCircle, Briefcase } from 'lucide-react';
import { JobItem } from '../../data/jobs';
import { submitJobApplication } from '../../services/api';
import { Button } from '../common/Button';

const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required (min 2 chars)'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please provide a contact phone number'),
  experienceYears: z.number().min(0, 'Experience must be at least 0 years'),
  linkedinUrl: z.string().url('Please enter a valid URL').or(z.literal('')).optional(),
  portfolioUrl: z.string().url('Please enter a valid URL').or(z.literal('')).optional(),
  coverNote: z.string().optional()
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface JobApplicationModalProps {
  job: JobItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ job, isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [appId, setAppId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      experienceYears: 4,
      linkedinUrl: '',
      portfolioUrl: '',
      coverNote: ''
    }
  });

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      setErrorMsg('');
      const res = await submitJobApplication({
        jobId: job?.jobId || 'general-application',
        ...data,
        resumeFileName: selectedFile ? selectedFile.name : 'resume.pdf'
      });
      setAppId(res.applicationId);
      setIsSuccess(true);
      reset();
      setSelectedFile(null);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 text-slate-900"
          >
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for applying to Straventa. Your tracking reference is{' '}
                  <span className="font-mono text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{appId}</span>.
                </p>
                <p className="text-xs text-slate-500">
                  Our talent acquisition team will review your qualifications and reach out within 3 business days.
                </p>
                <div className="pt-4">
                  <Button variant="primary" onClick={handleModalClose}>
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 inline-flex items-center gap-1 mb-2">
                    <Briefcase className="w-3 h-3 text-slate-600" /> {job ? job.title : 'General Application'}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">Apply for Position</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {job ? `${job.department} · ${job.location}` : 'Join our high-impact engineering team'}
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        {...register('fullName')}
                        placeholder="John Doe"
                        className={`w-full bg-slate-50 border ${
                          errors.fullName ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-zinc-900`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="john@example.com"
                        className={`w-full bg-slate-50 border ${
                          errors.email ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-zinc-900`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        {...register('phone')}
                        placeholder="+1 (555) 123-4567"
                        className={`w-full bg-slate-50 border ${
                          errors.phone ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-zinc-900`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Years of Experience *</label>
                      <input
                        type="number"
                        {...register('experienceYears', { valueAsNumber: true })}
                        className={`w-full bg-slate-50 border ${
                          errors.experienceYears ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-zinc-900`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">LinkedIn Profile URL</label>
                      <input
                        type="url"
                        {...register('linkedinUrl')}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-zinc-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">GitHub / Portfolio URL</label>
                      <input
                        type="url"
                        {...register('portfolioUrl')}
                        placeholder="https://github.com/..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-zinc-900"
                      />
                    </div>
                  </div>

                  {/* Resume Upload Box */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Resume / CV (PDF, DOCX)</label>
                    <div className="relative border-2 border-dashed border-slate-200 hover:border-slate-400 rounded-xl p-4 text-center cursor-pointer transition bg-slate-50">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1.5" />
                      <p className="text-xs text-slate-600">
                        {selectedFile ? (
                          <span className="text-slate-900 font-semibold">{selectedFile.name} ({(selectedFile.size / 1024).toFixed(0)} KB)</span>
                        ) : (
                          <>Drag &amp; drop your resume, or <span className="text-slate-900 underline font-medium">browse files</span></>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Cover Note */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Brief Cover Note</label>
                    <textarea
                      rows={3}
                      {...register('coverNote')}
                      placeholder="Share a brief overview of your most impactful engineering projects or why you'd like to join Straventa..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-zinc-900 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <Button type="button" variant="ghost" onClick={handleModalClose}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary" isLoading={isSubmitting}>
                      Submit Application
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
