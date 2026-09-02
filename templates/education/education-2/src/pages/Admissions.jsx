import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, CheckCircle2, FileText, Calendar, ShieldCheck, 
  ArrowRight, ArrowLeft, Upload, Sparkles, Lock, Award, Clock
} from 'lucide-react';

import SectionTitle from '../components/SectionTitle';

export default function Admissions() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: 'Artificial Intelligence & Deep Learning Masterclass',
    educationLevel: "Bachelor's Degree",
    experience: '1-3 Years',
    statement: '',
    agreeTerms: false
  });

  const stepsList = [
    { num: 1, name: "Personal Details" },
    { num: 2, name: "Academic History" },
    { num: 3, name: "Program Selection" },
    { num: 4, name: "Review & Submit" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen space-y-20">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Enrollment Portal 2026-2027"
          title="Begin Your Academic"
          highlight="Application Today"
          subtitle="Join thousands of students building high-impact careers in AI, Software Engineering, Data Science, and Executive Leadership."
          center
        />

        {/* 4-Step Process Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { num: "01", title: "Select Program", desc: "Choose from our accredited masterclasses or degree tracks." },
            { num: "02", title: "Complete Application", desc: "Fill in your background details and personal statement." },
            { num: "03", title: "Document Review", desc: "Our admissions committee reviews submissions within 24 hours." },
            { num: "04", title: "Enroll & Access", desc: "Receive official acceptance credentials and access your dashboard." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative">
              <span className="text-3xl font-black text-primary-600/30 block mb-2">{item.num}</span>
              <h4 className="font-extrabold text-slate-900 text-base mb-1">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Application Form Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl relative overflow-hidden">
          
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>

              <h3 className="text-3xl font-extrabold text-slate-900">Application Submitted!</h3>

              <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
                Thank you for applying to EduPrime, <span className="font-bold text-slate-900">{formData.firstName} {formData.lastName}</span>. Your application for <span className="font-bold text-primary-600">{formData.program}</span> has been logged under Application Reference ID <span className="font-mono font-bold text-slate-800">#EDU-2026-9842</span>.
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicant:</span>
                  <span className="font-bold text-slate-800">{formData.firstName} {formData.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Email:</span>
                  <span className="font-semibold text-slate-700">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Status:</span>
                  <span className="font-bold text-emerald-600">Under Committee Review</span>
                </div>
              </div>

              <button
                onClick={() => { setSubmitted(false); setStep(1); }}
                className="px-8 py-3.5 bg-primary-600 text-white font-bold rounded-xl text-xs shadow-md shadow-primary-600/30"
              >
                Submit New Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Stepper Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  {stepsList.map((s) => (
                    <div key={s.num} className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                        step >= s.num ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-400'
                      }`}>
                        {s.num}
                      </div>
                      <span className="text-xs font-semibold text-slate-700 hidden sm:inline">{s.name}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-600 transition-all duration-500"
                    style={{ width: `${(step / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Step 1: Personal Details */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Step 1: Personal Information</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Miller"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="david@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Academic History */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Step 2: Educational Background & Work History</h4>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Highest Qualification Completed</label>
                    <select
                      value={formData.educationLevel}
                      onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
                    >
                      <option value="High School / GED">High School / GED</option>
                      <option value="Associate Degree">Associate Degree</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="Doctorate / Ph.D.">Doctorate / Ph.D.</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Years of Professional Experience</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
                    >
                      <option value="0 (Student / Fresh Graduate)">0 (Student / Fresh Graduate)</option>
                      <option value="1-3 Years">1-3 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Program Selection */}
              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Step 3: Program Selection & Motivation Statement</h4>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Select Primary Target Program *</label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
                    >
                      <option value="Artificial Intelligence & Deep Learning Masterclass">Artificial Intelligence & Deep Learning Masterclass</option>
                      <option value="Full-Stack Web Development: React & Next.js Pro">Full-Stack Web Development: React & Next.js Pro</option>
                      <option value="Executive Data Science & Big Data Analytics">Executive Data Science & Big Data Analytics</option>
                      <option value="Cybersecurity Leadership & Ethical Hacking">Cybersecurity Leadership & Ethical Hacking</option>
                      <option value="UI/UX Design Systems & Product Strategy">UI/UX Design Systems & Product Strategy</option>
                      <option value="Cloud Architect: AWS, Docker & Kubernetes">Cloud Architect: AWS, Docker & Kubernetes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Brief Statement of Intent (Optional)</label>
                    <textarea
                      rows="4"
                      placeholder="Why do you wish to join this program? What are your career objectives?"
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {step === 4 && (
                <div className="space-y-6">
                  <h4 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Step 4: Review Your Details & Submit</h4>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 text-xs">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Applicant Name:</span>
                      <span className="font-bold text-slate-900">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Email:</span>
                      <span className="font-bold text-slate-900">{formData.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Selected Program:</span>
                      <span className="font-bold text-primary-600">{formData.program}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Qualification:</span>
                      <span className="font-bold text-slate-900">{formData.educationLevel}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-0.5 rounded text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="terms" className="text-xs text-slate-600 leading-relaxed">
                      I declare that all information submitted is accurate. I agree to EduPrime's Academic Honor Code and Terms of Admission.
                    </label>
                  </div>
                </div>
              )}

              {/* Controls Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 rounded-xl border border-slate-200 font-bold text-xs text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous Step
                  </button>
                ) : <div></div>}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-8 py-3.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 ml-auto"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!formData.agreeTerms}
                    className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 ml-auto"
                  >
                    Submit Application Now
                    <Sparkles className="w-4 h-4" />
                  </button>
                )}
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
