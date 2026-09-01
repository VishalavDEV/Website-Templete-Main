import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { departments } from '../data/departments';
import { doctors } from '../data/doctors';
import { submitAppointment } from '../services/api';
import { siteSettings } from '../data/siteData';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { Phone, Mail, Clock, CheckCircle2, AlertCircle, Loader2, Sparkles, UserCheck } from 'lucide-react';

export const Appointment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const departmentParam = searchParams.get('department');
  const doctorParam = searchParams.get('doctor');

  // Find initial department from query param if available
  const getInitialDepartment = () => {
    if (departmentParam) {
      const matchedDept = departments.find(
        d => d.name.toLowerCase() === departmentParam.toLowerCase() ||
             d.slug.toLowerCase() === departmentParam.toLowerCase()
      );
      if (matchedDept) return matchedDept.name;
    }
    if (doctorParam) {
      const matchedDoc = doctors.find(
        d => d.slug.toLowerCase() === doctorParam.toLowerCase() ||
             `${d.firstName} ${d.lastName}`.toLowerCase() === doctorParam.toLowerCase()
      );
      if (matchedDoc) return matchedDoc.departmentName;
    }
    return departments[0].name;
  };

  // Find initial doctor from query param if available
  const getInitialDoctor = () => {
    if (doctorParam) {
      const matchedDoc = doctors.find(
        d => d.slug.toLowerCase() === doctorParam.toLowerCase() ||
             `${d.firstName} ${d.lastName}`.toLowerCase() === doctorParam.toLowerCase() ||
             `dr. ${d.firstName} ${d.lastName}`.toLowerCase() === doctorParam.toLowerCase()
      );
      if (matchedDoc) return `Dr. ${matchedDoc.firstName} ${matchedDoc.lastName}`;
    }
    return 'Any Available Doctor';
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: getInitialDepartment(),
    doctor: getInitialDoctor(),
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 1:00 PM)',
    reason: '',
    message: ''
  });

  // Update when URL search parameters change
  useEffect(() => {
    const initialDept = getInitialDepartment();
    const initialDoc = getInitialDoctor();
    setFormData(prev => ({
      ...prev,
      department: initialDept,
      doctor: initialDoc
    }));
  }, [departmentParam, doctorParam]);

  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<{ message: string; appointmentId?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Filter doctors that belong to selected department
  const filteredDoctors = doctors.filter(
    doc => doc.departmentName.toLowerCase() === formData.department.toLowerCase()
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'department') {
      // If department changes, check if current doctor is in new department
      const docInNewDept = doctors.find(
        d => `Dr. ${d.firstName} ${d.lastName}` === formData.doctor && 
             d.departmentName.toLowerCase() === value.toLowerCase()
      );
      setFormData(prev => ({
        ...prev,
        department: value,
        doctor: docInNewDept ? prev.doctor : 'Any Available Doctor'
      }));
    } else if (name === 'doctor') {
      // If a specific doctor is picked, automatically sync the department
      if (value !== 'Any Available Doctor') {
        const pickedDoc = doctors.find(d => `Dr. ${d.firstName} ${d.lastName}` === value);
        setFormData(prev => ({
          ...prev,
          doctor: value,
          department: pickedDoc ? pickedDoc.departmentName : prev.department
        }));
      } else {
        setFormData(prev => ({ ...prev, doctor: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.preferredDate || !formData.reason) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    try {
      const result = await submitAppointment(formData);
      if (result.success) {
        setSuccessResult({ message: result.message, appointmentId: result.appointmentId });
      } else {
        setError('Failed to submit appointment. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const selectedDepartmentObj = departments.find(
    d => d.name.toLowerCase() === formData.department.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title="Book an Appointment" 
        subtitle={
          departmentParam 
            ? `Schedule your consultation with the Department of ${formData.department}.`
            : "Choose a department and preferred doctor to request a consultation."
        }
        breadcrumbItems={[
          { label: 'Departments', path: '/departments' },
          ...(departmentParam && selectedDepartmentObj ? [{ label: selectedDepartmentObj.name, path: `/departments/${selectedDepartmentObj.slug}` }] : []),
          { label: 'Book Appointment' }
        ]}
      />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
        {/* Form Floating Window */}
        <ScrollReveal animation="fade-up" duration={700} className="lg:col-span-8 floating-window bg-white p-8 sm:p-12">
          {successResult ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Appointment Requested Successfully!</h3>
              <p className="text-slate-600 text-base mb-6">{successResult.message}</p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 max-w-md mx-auto text-left mb-8 text-sm flex flex-col gap-2.5">
                <p><strong className="text-slate-900">Patient Name:</strong> <span className="text-slate-700">{formData.fullName}</span></p>
                <p><strong className="text-slate-900">Department:</strong> <span className="text-blue-600 font-bold">{formData.department}</span></p>
                <p><strong className="text-slate-900">Doctor:</strong> <span className="text-slate-700">{formData.doctor}</span></p>
                <p><strong className="text-slate-900">Preferred Date:</strong> <span className="text-slate-700">{formData.preferredDate}</span></p>
                <p><strong className="text-slate-900">Time Slot:</strong> <span className="text-slate-700">{formData.preferredTime}</span></p>
              </div>
              <button
                onClick={() => {
                  setSuccessResult(null);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    department: departments[0].name,
                    doctor: 'Any Available Doctor',
                    preferredDate: '',
                    preferredTime: 'Morning (9:00 AM - 1:00 PM)',
                    reason: '',
                    message: ''
                  });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block">Online Scheduling</span>
                  {departmentParam && (
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full border border-blue-200 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-blue-600" />
                      {formData.department} Pre-selected
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 tracking-tight">Patient Consultation Request</h3>
                <p className="text-slate-600 text-sm">Fill out the details below and our scheduling team will confirm your slot.</p>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-center gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input 
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter patient full name"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Select Department *</label>
                  <select 
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-blue-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors font-medium text-slate-900"
                  >
                    {departments.map(dept => (
                      <option key={dept.id} value={dept.name}>{dept.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Preferred Doctor {filteredDoctors.length > 0 && `(${filteredDoctors.length} available in ${formData.department})`}
                  </label>
                  <select 
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors"
                  >
                    <option value="Any Available Doctor">Any Available Doctor</option>
                    {filteredDoctors.map(doc => (
                      <option key={doc.id} value={`Dr. ${doc.firstName} ${doc.lastName}`}>
                        Dr. {doc.firstName} {doc.lastName} ({doc.specialization})
                      </option>
                    ))}
                    {doctors
                      .filter(d => d.departmentName.toLowerCase() !== formData.department.toLowerCase())
                      .map(doc => (
                        <option key={doc.id} value={`Dr. ${doc.firstName} ${doc.lastName}`}>
                          Dr. {doc.firstName} {doc.lastName} ({doc.departmentName})
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date *</label>
                  <input 
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Time Slot *</label>
                <select 
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors"
                >
                  <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                  <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Reason for Visit / Symptoms *</label>
                <input 
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="e.g. Chest discomfort, routine checkup, pediatric fever"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Additional Notes (Optional)</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Provide any additional medical history or notes..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                <span>Request Appointment for {formData.department}</span>
              </button>
            </form>
          )}
        </ScrollReveal>

        {/* Side Info Floating Windows */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {selectedDepartmentObj && (
            <ScrollReveal animation="slide-right" delay={100}>
              <div className="floating-window bg-white p-6 border-2 border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-blue-600 font-bold uppercase tracking-wider block">Selected Wing</span>
                    <h4 className="font-black text-slate-900 text-base">{selectedDepartmentObj.name}</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {selectedDepartmentObj.shortDescription}
                </p>
                <Link
                  to={`/departments/${selectedDepartmentObj.slug}`}
                  className="text-xs text-blue-600 font-bold hover:underline"
                >
                  View Department Details & Specialists →
                </Link>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal animation="slide-right" delay={150}>
            <div className="floating-window bg-white p-8">
              <h3 className="text-xl font-black text-slate-900 mb-6 pb-2 border-b border-slate-100">Appointment Support</h3>
              <div className="flex flex-col gap-5 text-sm text-slate-600">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">Helpline</span>
                    <a href={`tel:${siteSettings.phone}`} className="font-black text-slate-900 hover:text-blue-600 text-base">{siteSettings.phone}</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">Email</span>
                    <a href={`mailto:${siteSettings.email}`} className="font-black text-slate-900 hover:text-blue-600">{siteSettings.email}</a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-right" delay={250}>
            <div className="floating-window-dark bg-blue-900 text-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-black">Opening Hours</h3>
              </div>
              <div className="flex flex-col gap-3 text-sm text-blue-100">
                <div className="flex justify-between pb-2 border-b border-blue-800/80">
                  <span>Mon - Fri:</span>
                  <span className="font-bold text-white">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-blue-800/80">
                  <span>Saturday:</span>
                  <span className="font-bold text-white">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-bold text-emerald-400">Emergency Only</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
