import React, { useState, useEffect } from 'react';
import {
  Star,
  Calendar,
  Clock,
  MapPin,
  Building,
  Award,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Phone,
  ShieldCheck
} from 'lucide-react';
import { Doctor, DoctorAvailability } from '../../types';
import { ApiService } from '../../services/api';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ThreeDCard } from '../../components/common/ThreeDCard';

interface DoctorDetailPageProps {
  doctorId: string;
  onNavigate: (view: string, params?: Record<string, string>) => void;
  onOpenBooking: (prefill?: { doctorId?: string; departmentId?: string }) => void;
}

export const DoctorDetailPage: React.FC<DoctorDetailPageProps> = ({
  doctorId,
  onNavigate,
  onOpenBooking
}) => {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [availabilities, setAvailabilities] = useState<DoctorAvailability[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        setLoading(true);
        const [doc, avails] = await Promise.all([
          ApiService.getDoctorById(doctorId),
          ApiService.getDoctorAvailability(doctorId)
        ]);
        if (doc) setDoctor(doc);
        setAvailabilities(avails);
      } catch (err) {
        console.error('Failed to load doctor profile', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoc();
  }, [doctorId]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="h-96 bg-slate-100 rounded-3xl animate-pulse" />
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Doctor Profile Not Found</h2>
        <p className="text-sm text-slate-600">The requested doctor could not be located in our directory.</p>
        <Button variant="primary" onClick={() => onNavigate('doctors')}>
          Back to Doctors Directory
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Back Navigation */}
      <ScrollReveal direction="down">
        <div>
          <Button
            variant="ghost"
            size="sm"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
            onClick={() => onNavigate('doctors')}
          >
            Back to Doctor Directory
          </Button>
        </div>
      </ScrollReveal>

      {/* Main Profile Header Banner */}
      <ScrollReveal direction="3d">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 relative">
              <ThreeDCard intensity={15}>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-4/5 relative">
                  <ImageWithFallback
                    src={doctor.photo_url}
                    alt={doctor.name}
                    fallbackType="doctor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 z-10">
                    <Badge variant={doctor.available_today ? 'emerald' : 'slate'} size="sm" dot>
                      {doctor.available_today ? 'Available Today' : 'Scheduled Slots'}
                    </Badge>
                  </div>
                </div>
              </ThreeDCard>
            </div>

            <div className="md:col-span-8 space-y-5">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="teal" size="sm">
                    {doctor.department_name}
                  </Badge>
                  <div className="flex items-center text-amber-500 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-current mr-1" />
                    <span>{doctor.rating}</span>
                    <span className="text-slate-400 font-normal ml-1">({doctor.review_count} reviews)</span>
                  </div>
                </div>

                <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-2">
                  {doctor.name}
                </h1>
                <p className="text-sm font-bold text-teal-700 mt-1">{doctor.specialization}</p>
                <p className="text-xs text-slate-500 mt-0.5">{doctor.qualification}</p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {doctor.bio}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Experience</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">{doctor.experience_years}+ Years</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Consultation Fee</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">₹{doctor.consultation_fee} / Visit</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Clinic Suite</span>
                  <span className="font-bold text-slate-900 text-sm mt-0.5 block">{doctor.room_number || 'Suite 204'}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-wrap pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  leftIcon={<Calendar className="w-5 h-5" />}
                  onClick={() => onOpenBooking({ doctorId: doctor.doctor_id, departmentId: doctor.department_id })}
                  className="shadow-teal-600/20"
                >
                  Book Appointment with {doctor.name.split(' ')[0]}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Weekly Availability Timetable */}
      <ScrollReveal direction="up" delay={100}>
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Weekly OPD Consultation Schedule</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Regular outpatient timings. Emergency procedures take priority.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, idx) => {
              const avail = availabilities.find(a => a.day_of_week === day && a.is_active);
              return (
                <ThreeDCard key={day} intensity={6}>
                  <div
                    className={`p-3.5 rounded-xl border text-center h-full ${
                      avail
                        ? 'border-teal-200 bg-teal-50/40 text-slate-800 font-medium'
                        : 'border-slate-100 bg-slate-50/50 text-slate-400 opacity-60'
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-wider">{day}</p>
                    {avail ? (
                      <p className="text-xs font-semibold text-teal-800 mt-1">
                        {avail.start_time} – {avail.end_time}
                      </p>
                    ) : (
                      <p className="text-xs text-slate-400 mt-1">Off Clinic</p>
                    )}
                  </div>
                </ThreeDCard>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
