import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDoctor } from '../services/api';
import { PageHeader } from '../components/common/PageHeader';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { DoctorDetailSkeleton } from '../components/skeletons';
import { 
  Award, Clock, Globe, Calendar, PhoneCall, ArrowRight 
} from 'lucide-react';
import { Doctor } from '../types';

export const DoctorDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    if (slug) {
      getDoctor(slug).then(data => {
        if (isMounted) {
          setDoctor(data || null);
          setIsLoading(false);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
        <PageHeader 
          title="Doctor Profile" 
          subtitle="Loading professional credentials and consultation schedule..."
          breadcrumbItems={[
            { label: 'Doctors', path: '/doctors' },
            { label: 'Loading...' }
          ]}
        />
        <DoctorDetailSkeleton />
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
        <PageHeader 
          title="Doctor Not Found" 
          subtitle="We could not find the specialist you were searching for."
          breadcrumbItems={[
            { label: 'Doctors', path: '/doctors' },
            { label: 'Not Found' }
          ]}
        />
        <div className="floating-window bg-white p-12 text-center">
          <p className="text-slate-600 mb-6">The requested doctor profile could not be located in our directory.</p>
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            <span>Back to All Doctors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title={`Dr. ${doctor.firstName} ${doctor.lastName}`} 
        subtitle={`${doctor.specialization} • ${doctor.qualification}`}
        breadcrumbItems={[
          { label: 'Doctors', path: '/doctors' },
          { label: `Dr. ${doctor.firstName} ${doctor.lastName}` }
        ]}
      />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
        <ScrollReveal animation="fade-up" duration={700} className="lg:col-span-4 flex flex-col gap-6">
          <div className="floating-card bg-white p-0 overflow-hidden">
            <div className="h-80 bg-slate-100 overflow-hidden">
              <img 
                src={doctor.image} 
                alt={`Dr. ${doctor.firstName} ${doctor.lastName}`}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800";
                }}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <span className="bg-blue-50 text-blue-600 font-bold text-xs px-3 py-1 rounded-full inline-block mb-3 border border-blue-100">
                {doctor.departmentName}
              </span>
              <h3 className="text-2xl font-black text-slate-900 mb-1">Dr. {doctor.firstName} {doctor.lastName}</h3>
              <p className="text-blue-600 font-bold text-sm mb-4">{doctor.specialization}</p>

              <div className="flex flex-col gap-3 py-4 border-t border-slate-100 text-sm">
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <Award className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{doctor.experience}</span>
                </div>
                {doctor.languages && (
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Languages: {doctor.languages.join(', ')}</span>
                  </div>
                )}
                {doctor.availableDays && (
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{doctor.availableDays}</span>
                  </div>
                )}
              </div>

              <Link
                to={`/appointment?department=${encodeURIComponent(doctor.departmentName)}&doctor=${encodeURIComponent(doctor.slug)}`}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8">
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="floating-window bg-white p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Professional Biography</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {doctor.bio}
              </p>
              <h4 className="font-black text-slate-900 text-lg mb-2">Qualifications</h4>
              <p className="text-slate-600 text-sm mb-6">{doctor.qualification}</p>

              <h4 className="font-black text-slate-900 text-lg mb-3">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Advanced Diagnosis', 'Patient Counseling', 'Preventive Care', 'Clinical Management'].map((exp, idx) => (
                  <span key={idx} className="bg-slate-50 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 border border-slate-200">
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="pop" delay={250}>
            <div className="floating-window-dark bg-blue-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black mb-2">Ready to Consult Dr. {doctor.lastName}?</h3>
                <p className="text-blue-100 text-sm sm:text-base">Schedule your appointment online instantly or call our helpdesk.</p>
              </div>
              <div className="flex gap-4 shrink-0">
                <Link
                  to="/appointment"
                  className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl shadow-md transition-all duration-300 hover:scale-105"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
