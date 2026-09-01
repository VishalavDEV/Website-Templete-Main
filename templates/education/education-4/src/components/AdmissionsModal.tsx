import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  Award, 
  Sparkles, 
  Download,
  ShieldCheck
} from 'lucide-react';
import { COURSES_DATA, UNIVERSITY_INFO } from '../data/universityData';
import { Course } from '../types';

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: Course | null;
}

export const AdmissionsModal: React.FC<AdmissionsModalProps> = ({
  isOpen,
  onClose,
  preselectedCourse
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    courseId: preselectedCourse?.id || COURSES_DATA[0].id,
    semester: 'Fall 2026 (Priority Enrollment)',
    fullName: '',
    email: '',
    phone: '',
    citizenship: 'United States',
    educationLevel: 'Undergraduate / College',
    scholarshipRequested: true,
    learningMode: 'Hybrid (Campus + Online Live)',
    agreeTerms: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      const appNum = `SP-${Math.floor(100000 + Math.random() * 900000)}`;
      setApplicationNumber(appNum);
      setIsSubmitted(true);
    }
  };

  const selectedCourseObj = COURSES_DATA.find((p) => p.id === formData.courseId) || COURSES_DATA[0];

  const resetForm = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto font-['Plus_Jakarta_Sans',sans-serif]">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Banner in Navy with Crimson accents */}
        <div className="bg-[#1e2738] text-white p-6 relative">
          <button
            onClick={resetForm}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#ec1c4e] flex items-center justify-center text-white shadow-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">
                StudyPress Admissions & Course Booking
              </h2>
              <p className="text-xs text-slate-300">
                Official Application Portal • Academic Year 2026–2027
              </p>
            </div>
          </div>

          {/* Step Progress */}
          {!isSubmitted && (
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-700 text-xs">
              <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#ec1c4e] font-bold' : 'text-slate-500'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-[#ec1c4e] text-white' : 'bg-slate-800 text-slate-500'}`}>1</span>
                <span>Course & Term</span>
              </div>
              <div className="w-8 h-[1px] bg-slate-700" />
              <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#ec1c4e] font-bold' : 'text-slate-500'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-[#ec1c4e] text-white' : 'bg-slate-800 text-slate-500'}`}>2</span>
                <span>Student Details</span>
              </div>
              <div className="w-8 h-[1px] bg-slate-700" />
              <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#ec1c4e] font-bold' : 'text-slate-500'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-[#ec1c4e] text-white' : 'bg-slate-800 text-slate-500'}`}>3</span>
                <span>Review & Confirm</span>
              </div>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 text-slate-900">
          {isSubmitted ? (
            /* Success View */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-rose-100 text-[#ec1c4e] flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                Booking Application Confirmed!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Thank you for applying to StudyPress University. Your student record is registered and an admissions counselor will reach out within 24 hours.
              </p>

              {/* Receipt Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-left max-w-md mx-auto mb-6 text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-slate-900">{applicationNumber}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Applicant:</span>
                  <span className="font-semibold text-slate-800">{formData.fullName || 'Candidate'}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Selected Program:</span>
                  <span className="font-semibold text-slate-800">{selectedCourseObj.title}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="text-slate-500">Enrollment Term:</span>
                  <span className="font-semibold text-[#ec1c4e]">{formData.semester}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Financial Aid Request:</span>
                  <span className="font-semibold text-emerald-600">Pending Evaluation ($0 Fee)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Print Receipt</span>
                </button>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-[#ec1c4e] hover:bg-[#d81544] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md"
                >
                  Done & Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleNextStep} className="space-y-6">
              {/* Step 1 */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Select Desired Course / Degree Program
                    </label>
                    <select
                      value={formData.courseId}
                      onChange={(e) => handleInputChange('courseId', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#ec1c4e]"
                    >
                      {COURSES_DATA.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.title} — {course.price} ({course.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Target Enrollment Semester
                      </label>
                      <select
                        value={formData.semester}
                        onChange={(e) => handleInputChange('semester', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#ec1c4e]"
                      >
                        <option value="Fall 2026 (Priority Enrollment)">Fall 2026 (Starts August)</option>
                        <option value="Spring 2027 (Regular Intake)">Spring 2027 (Starts January)</option>
                        <option value="Summer 2027 (Accelerated)">Summer 2027 (Online & Lab)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Learning Mode
                      </label>
                      <select
                        value={formData.learningMode}
                        onChange={(e) => handleInputChange('learningMode', e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#ec1c4e]"
                      >
                        <option value="Hybrid (Campus + Online Live)">Hybrid (Campus + Live Seminars)</option>
                        <option value="100% Online Global">100% Online Global Distance</option>
                        <option value="Full-Time On Campus">Full-Time On-Campus Residency</option>
                      </select>
                    </div>
                  </div>

                  {/* Course Preview */}
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-3 text-xs text-slate-800">
                    <Sparkles className="w-5 h-5 text-[#ec1c4e] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 mb-0.5">
                        Course Tuition: {selectedCourseObj.price} • Duration: {selectedCourseObj.duration}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        Instructor: {selectedCourseObj.instructor.name} ({selectedCourseObj.instructor.title})
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Legal Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="e.g. Alexander Vance"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#ec1c4e]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="alex@example.com"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#ec1c4e]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 234-5678"
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#ec1c4e]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Current Academic Background / College
                    </label>
                    <input
                      type="text"
                      value={formData.educationLevel}
                      onChange={(e) => handleInputChange('educationLevel', e.target.value)}
                      placeholder="e.g. High School Senior / College Graduate"
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-[#ec1c4e]"
                    />
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                    <h4 className="font-bold text-slate-900 mb-1">Booking Overview</h4>
                    <p className="text-slate-600">
                      <strong>Selected Course:</strong> {selectedCourseObj.title}
                    </p>
                    <p className="text-slate-600">
                      <strong>Tuition Fee:</strong> {selectedCourseObj.price}
                    </p>
                    <p className="text-slate-600">
                      <strong>Target Term:</strong> {formData.semester} ({formData.learningMode})
                    </p>
                    <p className="text-slate-600">
                      <strong>Applicant:</strong> {formData.fullName || 'Not provided'} ({formData.email})
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700">
                      <input
                        type="checkbox"
                        checked={formData.scholarshipRequested}
                        onChange={(e) => handleInputChange('scholarshipRequested', e.target.checked)}
                        className="rounded text-[#ec1c4e]"
                      />
                      <span>Evaluate my application for StudyPress Merit & Need-Based Grants.</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700">
                      <input
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                        className="rounded text-[#ec1c4e]"
                      />
                      <span>I agree to the StudyPress Academic Code and Terms of Service.</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Bottom Navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#ec1c4e] hover:bg-[#d81544] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{step === 3 ? 'Confirm & Submit Application' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
