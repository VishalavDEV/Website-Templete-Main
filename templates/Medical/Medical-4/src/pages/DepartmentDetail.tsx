import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDepartment, getDepartments, getDoctors } from '../services/api';
import { PageHeader } from '../components/common/PageHeader';
import { DoctorCard } from '../components/cards/DoctorCard';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { DepartmentDetailSkeleton } from '../components/skeletons';
import { CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';
import { siteSettings } from '../data/siteData';
import { Department, Doctor } from '../types';

export const DepartmentDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [department, setDepartment] = useState<Department | null>(null);
  const [allDepartments, setAllDepartments] = useState<Department[]>([]);
  const [departmentDoctors, setDepartmentDoctors] = useState<Doctor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    Promise.all([
      slug ? getDepartment(slug) : Promise.resolve(undefined),
      getDepartments(),
      getDoctors()
    ]).then(([currentDept, depts, allDocs]) => {
      if (isMounted) {
        setDepartment(currentDept || null);
        setAllDepartments(depts);
        if (currentDept) {
          const docs = allDocs.filter(d => 
            d.departmentId === currentDept.id || 
            d.departmentName.toLowerCase() === currentDept.name.toLowerCase()
          );
          setDepartmentDoctors(docs);
        }
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
        <PageHeader 
          title="Department Overview" 
          subtitle="Loading specialized medical services and specialist roster..."
          breadcrumbItems={[
            { label: 'Departments', path: '/departments' },
            { label: 'Loading...' }
          ]}
        />
        <DepartmentDetailSkeleton />
      </div>
    );
  }

  if (!department) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
        <PageHeader 
          title="Department Not Found" 
          subtitle="We could not find the medical department you were looking for."
          breadcrumbItems={[
            { label: 'Departments', path: '/departments' },
            { label: 'Not Found' }
          ]}
        />
        <div className="floating-window bg-white p-12 text-center">
          <p className="text-slate-600 mb-6">The requested department could not be located in our directory.</p>
          <Link
            to="/departments"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            <span>Browse All Departments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title={department.name} 
        subtitle={department.shortDescription}
        breadcrumbItems={[
          { label: 'Departments', path: '/departments' },
          { label: department.name }
        ]}
      />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
        <ScrollReveal animation="fade-up" duration={700} className="lg:col-span-8 floating-window bg-white p-6 sm:p-10">
          <div className="rounded-2xl overflow-hidden shadow-md mb-8 h-72 sm:h-96 bg-slate-100 border border-slate-200">
            <img 
              src={department.image} 
              alt={department.name} 
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800";
              }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">Overview of {department.name}</h2>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            {department.description}
          </p>

          {department.services && (
            <div className="mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5">Key Services & Procedures</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {department.services.map((svc, idx) => (
                  <ScrollReveal key={idx} animation="pop" delay={idx * 60}>
                    <div className="floating-card bg-slate-50/70 p-4 flex items-center gap-3 h-full">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-800 text-sm">{svc}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {department.highlights && (
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-blue-50/70 p-6 sm:p-8 rounded-2xl border border-blue-100">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4">Why Choose Our {department.name} Team?</h3>
                <ul className="flex flex-col gap-3">
                  {department.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></div>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          )}
        </ScrollReveal>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <ScrollReveal animation="slide-right" delay={150}>
            <div className="floating-window bg-white p-6 sm:p-8">
              <h3 className="font-black text-lg text-slate-900 mb-4">All Departments</h3>
              <div className="flex flex-col gap-2">
                {allDepartments.map(dept => (
                  <Link
                    key={dept.id}
                    to={`/departments/${dept.slug}`}
                    className={`px-4 py-3 rounded-xl font-bold text-sm transition-all flex justify-between items-center ${dept.slug === department.slug ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80'}`}
                  >
                    <span>{dept.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-right" delay={250}>
            <div className="floating-window-dark bg-blue-900 text-white p-8 rounded-3xl text-center">
              <h3 className="font-black text-xl mb-3">Need Consultation?</h3>
              <p className="text-blue-100 text-sm mb-6">Schedule an appointment with our specialist doctors today.</p>
              <Link
                to={`/appointment?department=${encodeURIComponent(department.slug)}`}
                className="block bg-white text-blue-900 font-bold py-3.5 px-6 rounded-xl shadow-md hover:bg-blue-50 transition-colors mb-4"
              >
                Book Appointment for {department.name}
              </Link>
              <a 
                href={`tel:${siteSettings.phone}`} 
                className="inline-flex items-center gap-2 text-blue-200 text-sm font-semibold hover:text-white transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{siteSettings.phone}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Meet Specialists Floating Window */}
      {departmentDoctors.length > 0 && (
        <ScrollReveal animation="pop" duration={800} as="section" className="floating-window bg-white p-8 sm:p-12 lg:p-14">
          <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider block mb-2">Specialists</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">Meet Our {department.name} Specialists</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {departmentDoctors.map((doc, idx) => (
              <ScrollReveal key={doc.id} animation="pop" delay={idx * 100}>
                <DoctorCard doctor={doc} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      )}
    </div>
  );
};
