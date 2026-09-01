import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { PageHeader } from '../components/common/PageHeader';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { CheckCircle2, ShieldAlert, PhoneCall, ArrowRight } from 'lucide-react';
import { siteSettings } from '../data/siteData';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug) || services[0];
  const relatedServices = services.filter(s => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 py-4 sm:py-6">
      <PageHeader 
        title={service.name} 
        subtitle={service.shortDescription}
        breadcrumbItems={[
          { label: 'Services', path: '/services' },
          { label: service.name }
        ]}
      />

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
        <ScrollReveal animation="fade-up" duration={700} className="lg:col-span-8 floating-window bg-white p-6 sm:p-10">
          <div className="rounded-2xl overflow-hidden shadow-md mb-8 h-72 sm:h-96 bg-slate-100 border border-slate-200">
            <img 
              src={service.image} 
              alt={service.name} 
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800";
              }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight">About {service.name}</h2>
          <p className="text-slate-600 text-base leading-relaxed mb-8">
            {service.description}
          </p>

          {service.keyPoints && (
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5">Key Service Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyPoints.map((point, idx) => (
                  <ScrollReveal key={idx} animation="pop" delay={idx * 60}>
                    <div className="floating-card bg-slate-50/70 p-4 flex items-center gap-3 h-full">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-800 text-sm">{point}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </ScrollReveal>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <ScrollReveal animation="slide-right" delay={150}>
            <div className="floating-window bg-red-50/90 p-6 sm:p-8 border border-red-200/80 text-center">
              <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 shadow-xs">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <h3 className="font-black text-lg text-slate-900 mb-2">Emergency Assistance</h3>
              <p className="text-slate-600 text-xs mb-5 leading-relaxed">Available 24/7 for urgent and critical care situations.</p>
              <a 
                href={`tel:${siteSettings.emergencyPhone}`} 
                className="inline-flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-colors text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{siteSettings.emergencyPhone}</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-right" delay={250}>
            <div className="floating-window bg-white p-6 sm:p-8">
              <h3 className="font-black text-lg text-slate-900 mb-4">Other Services</h3>
              <div className="flex flex-col gap-2">
                {relatedServices.map(srv => (
                  <Link
                    key={srv.id}
                    to={`/services/${srv.slug}`}
                    className="px-4 py-3 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-200/80 font-bold text-sm text-slate-700 hover:text-blue-600 transition-all flex justify-between items-center"
                  >
                    <span>{srv.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
