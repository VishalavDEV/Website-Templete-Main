import React, { useState } from 'react';
import {
  HeartPulse,
  Mail,
  Lock,
  User,
  Phone,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Input, Select } from '../../components/common/Input';
import { UserRole } from '../../types';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';

interface RegisterPageProps {
  onNavigate: (view: string) => void;
  onRegisterSuccess: () => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate, onRegisterSuccess }) => {
  const { register } = useAuth();
  const { success, error: toastError } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dob: '1995-06-15',
    gender: 'Male' as 'Male' | 'Female' | 'Other',
    blood_group: 'O+'
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      toastError('Missing Fields', 'Please complete all required fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toastError('Password Mismatch', 'Your passwords do not match.');
      return;
    }

    try {
      setIsLoading(true);
      const user = await register({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: UserRole.PATIENT,
        dob: formData.dob,
        gender: formData.gender,
        blood_group: formData.blood_group
      });

      success('Account Created!', `Welcome to Qure Nexa, ${user.name}!`);
      onRegisterSuccess();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Registration failed';
      toastError('Error', msg);
    } finally {
      setIsLoading(false);
    }
  };

  const featuredDoctors = [
    {
      name: 'Dr. Aisha Malik',
      role: 'Pediatric Neurologist',
      fee: '₹1550',
      rating: '4.95',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Interventional Cardiologist',
      fee: '₹1500',
      rating: '4.98',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Dr. Jonathan Sterling',
      role: 'Chief Neurosurgeon',
      fee: '₹2000',
      rating: '4.99',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Doctor Showcase & Trust Card */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="3d">
              <div className="space-y-3">
                <div
                  onClick={() => onNavigate('home')}
                  className="inline-flex items-center gap-2 cursor-pointer group mb-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-900 tracking-tight">
                    Medi<span className="text-teal-600">Pulse</span>
                  </span>
                </div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  Join 50,000+ Patients receiving Expert Healthcare
                </h1>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Create your patient portal account to consult top board-certified doctors, track medical records, and manage OPD appointments.
                </p>
              </div>
            </ScrollReveal>

            {/* Featured Doctors Stack */}
            <ScrollReveal direction="3d" delay={150}>
              <ThreeDCard intensity={10}>
                <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-teal-950 p-6 rounded-3xl text-white shadow-xl space-y-4 border border-teal-800/50">
                  <div className="flex items-center justify-between border-b border-teal-800/60 pb-3">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-teal-400" />
                      <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                        Available Specialists Today
                      </span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                      150+ Active
                    </span>
                  </div>

                  <div className="space-y-3">
                    {featuredDoctors.map((doc, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center gap-3.5 hover:bg-white/15 transition-all"
                      >
                        <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 ring-2 ring-teal-400/30">
                          <ImageWithFallback
                            src={doc.image}
                            alt={doc.name}
                            fallbackType="doctor"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-white truncate">{doc.name}</h4>
                            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
                              <Star className="w-3 h-3 fill-current" />
                              <span>{doc.rating}</span>
                            </div>
                          </div>
                          <p className="text-[11px] text-teal-200 font-medium truncate">{doc.role}</p>
                          <p className="text-[10px] text-slate-300 mt-0.5">Consultation Fee: {doc.fee}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 24/7 Digital Prescriptions
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> HIPAA Compliant
                    </span>
                  </div>
                </div>
              </ThreeDCard>
            </ScrollReveal>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="3d" delay={100}>
              <ThreeDCard intensity={8}>
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-6">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                      Create Patient Account
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out your registration details to gain instant portal access.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      label="Full Legal Name"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      leftIcon={<User className="w-4 h-4 text-slate-400" />}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Email Address"
                        type="email"
                        required
                        placeholder="e.g. eleanor@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        leftIcon={<Mail className="w-4 h-4 text-slate-400" />}
                      />
                      <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        leftIcon={<Phone className="w-4 h-4 text-slate-400" />}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Input
                        label="Date of Birth"
                        type="date"
                        required
                        value={formData.dob}
                        onChange={e => setFormData({ ...formData, dob: e.target.value })}
                      />
                      <Select
                        label="Gender"
                        value={formData.gender}
                        onChange={e => setFormData({ ...formData, gender: e.target.value as 'Male' | 'Female' | 'Other' })}
                        options={[
                          { value: 'Male', label: 'Male' },
                          { value: 'Female', label: 'Female' },
                          { value: 'Other', label: 'Other' }
                        ]}
                      />
                      <Select
                        label="Blood Group"
                        value={formData.blood_group}
                        onChange={e => setFormData({ ...formData, blood_group: e.target.value })}
                        options={[
                          { value: 'A+', label: 'A+' },
                          { value: 'A-', label: 'A-' },
                          { value: 'B+', label: 'B+' },
                          { value: 'B-', label: 'B-' },
                          { value: 'O+', label: 'O+' },
                          { value: 'O-', label: 'O-' },
                          { value: 'AB+', label: 'AB+' },
                          { value: 'AB-', label: 'AB-' }
                        ]}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        label="Create Password"
                        type="password"
                        required
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                        leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
                      />
                      <Input
                        label="Confirm Password"
                        type="password"
                        required
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                        leftIcon={<Lock className="w-4 h-4 text-slate-400" />}
                      />
                    </div>

                    <div className="text-[11px] text-slate-500 pt-1">
                      By creating an account, you agree to Qure Nexa's{' '}
                      <span className="text-teal-700 font-medium">HIPAA Privacy Policy</span> and{' '}
                      <span className="text-teal-700 font-medium">Patient Terms of Care</span>.
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      isLoading={isLoading}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Complete Registration & Access Portal
                    </Button>
                  </form>

                  <div className="text-center pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <span>Already have an account? </span>
                    <button
                      type="button"
                      onClick={() => onNavigate('login')}
                      className="text-teal-700 font-bold hover:underline cursor-pointer"
                    >
                      Sign In to Medical Portal
                    </button>
                  </div>
                </div>
              </ThreeDCard>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
};
