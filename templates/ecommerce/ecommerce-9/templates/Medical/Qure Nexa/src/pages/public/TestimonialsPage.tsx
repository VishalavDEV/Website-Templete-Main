import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, Plus, CheckCircle2, User } from 'lucide-react';
import { Testimonial } from '../../types';
import { ApiService } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { Input, Textarea, Select } from '../../components/common/Input';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';

export const TestimonialsPage: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const { user } = useAuth();
  const { success, error: toastError } = useToast();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Form State
  const [patientName, setPatientName] = useState(user?.name || '');
  const [doctorName, setDoctorName] = useState('');
  const [departmentName, setDepartmentName] = useState('General Medicine');
  const [rating, setRating] = useState(5);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true);
        const data = await ApiService.getTestimonials(true);
        setTestimonials(data);
      } catch (err) {
        console.error('Failed to load testimonials', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTests();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !feedback) {
      toastError('Missing Fields', 'Please provide your name and review feedback.');
      return;
    }
    try {
      setIsSubmitting(true);
      await ApiService.submitTestimonial({
        patient_id: user?.user_id || `pat-guest-${Date.now()}`,
        patient_name: patientName,
        doctor_name: doctorName || undefined,
        department_name: departmentName,
        rating,
        feedback
      });
      success('Review Submitted for Moderation', 'Thank you! Your review will appear after administrative approval.');
      setIsSubmitModalOpen(false);
      setFeedback('');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Submission failed';
      toastError('Error', msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 shadow-md">
        <ScrollReveal direction="3d">
          <div className="max-w-5xl mx-auto text-center space-y-3 relative z-10">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest bg-teal-500/20 px-3.5 py-1.5 rounded-full border border-teal-400/30">
              Patient Stories & Reviews
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Loved & Trusted by Thousands of Families
            </h1>
            <p className="text-teal-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Read first-hand accounts of patient recoveries, surgical outcomes, and the compassionate care delivered by our clinical faculty.
            </p>
            <div className="pt-2">
              <Button
                variant="secondary"
                size="md"
                leftIcon={<Plus className="w-4 h-4" />}
                onClick={() => setIsSubmitModalOpen(true)}
                className="bg-white hover:bg-slate-100 text-teal-900 font-bold rounded-full shadow-md"
              >
                Share Your Experience
              </Button>
            </div>
          </div>
        </ScrollReveal>
        <div className="absolute right-[-60px] top-[-60px] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-[30%] bottom-[-60px] w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      {/* Testimonials List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-48 bg-slate-100 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <ScrollReveal key={t.id} direction="3d" delay={idx * 60}>
                <ThreeDCard intensity={12}>
                  <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-amber-400">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-[11px] text-slate-400">{t.created_at}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                        "{t.feedback}"
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                      <ImageWithFallback
                        src={t.patient_avatar || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'}
                        alt={t.patient_name}
                        fallbackType="user"
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-teal-500/20"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{t.patient_name}</h4>
                        <p className="text-[11px] text-teal-700 font-semibold">{t.doctor_name || t.department_name}</p>
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* Review Submission Modal */}
      <Modal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        title="Leave Patient Feedback"
        subtitle="Your review helps prospective patients and supports our medical staff."
        maxWidth="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Your Full Name"
            required
            value={patientName}
            onChange={e => setPatientName(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Doctor Name (Optional)"
              placeholder="e.g. Dr. David Chen"
              value={doctorName}
              onChange={e => setDoctorName(e.target.value)}
            />
            <Select
              label="Department"
              value={departmentName}
              onChange={e => setDepartmentName(e.target.value)}
              options={[
                { value: 'Cardiology & Heart Institute', label: 'Cardiology' },
                { value: 'Orthopedics & Joint Replacement', label: 'Orthopedics' },
                { value: 'Pediatrics & Neonatal Care', label: 'Pediatrics' },
                { value: 'Neurology & Neurosurgery', label: 'Neurology' },
                { value: 'Dermatology & Skin Science', label: 'Dermatology' },
                { value: 'Emergency & Trauma Care', label: 'Emergency' }
              ]}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Star Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 text-2xl cursor-pointer"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-bold text-slate-700 ml-2">{rating} out of 5</span>
            </div>
          </div>

          <Textarea
            label="Your Feedback / Testimonial"
            required
            rows={4}
            placeholder="Describe your treatment experience, staff attentiveness, or outcome..."
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
          />

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <Button variant="outline" size="md" onClick={() => setIsSubmitModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" size="md" type="submit" isLoading={isSubmitting}>
              Submit Review
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
