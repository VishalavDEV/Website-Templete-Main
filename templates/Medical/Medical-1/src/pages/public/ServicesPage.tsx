import React, { useState, useEffect } from 'react';
import {
  Activity,
  Calendar,
  Clock,
  IndianRupee,
  Info,
  CheckCircle2,
  Building,
  ArrowRight,
  Sparkles,
  HeartPulse,
  Brain,
  Bone,
  Baby,
  Ambulance,
  Stethoscope,
  Smile
} from 'lucide-react';
import { Service } from '../../types';
import { ApiService } from '../../services/api';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';
import { Card } from '../../components/common/Card';
import { ScrollReveal } from '../../components/common/ScrollReveal';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (view: string, params?: Record<string, string>) => void;
  onOpenBooking: (prefill?: { doctorId?: string; departmentId?: string }) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [detailService, setDetailService] = useState<Service | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await ApiService.getServices();
        setServices(data);
      } catch (err) {
        console.error('Error loading services', err);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const categories = ['All', 'Emergency', 'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology', 'General Medicine', 'Dental Care'];

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase() || s.name.toLowerCase().includes(selectedCategory.toLowerCase()));

  const getServiceIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'emergency': return Ambulance;
      case 'cardiology': return HeartPulse;
      case 'neurology': return Brain;
      case 'orthopedics': return Bone;
      case 'pediatrics': return Baby;
      case 'dermatology': return Sparkles;
      case 'dental care': return Smile;
      default: return Stethoscope;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 shadow-md">
        <ScrollReveal direction="up" delay={50}>
          <div className="max-w-5xl mx-auto text-center space-y-3 relative z-10">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest bg-teal-500/20 px-3.5 py-1.5 rounded-full border border-teal-400/30">
              Clinical Services
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Comprehensive Medical Treatments
            </h1>
            <p className="text-teal-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              From routine diagnostics to complex robotic surgical interventions, explore our full spectrum of specialized healthcare services.
            </p>
          </div>
        </ScrollReveal>
        <div className="absolute right-[-60px] top-[-60px] w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-[30%] bottom-[-60px] w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none"></div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filter Pills */}
        <ScrollReveal direction="up" delay={80}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-teal-600 text-white shadow-sm scale-[1.02]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-72 bg-slate-100 rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((srv, idx) => {
                const IconComponent = getServiceIcon(srv.category);
                return (
                  <ScrollReveal key={srv.service_id} direction="up" delay={idx * 50}>
                    <Card
                      hover
                      onClick={() => setDetailService(srv)}
                      className="p-0 flex flex-col justify-between hover-lift h-full overflow-hidden border border-slate-200/90 shadow-md group cursor-pointer"
                    >
                      <div>
                        {/* Treatment Header Image */}
                        <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                          <ImageWithFallback
                            src={srv.image_url}
                            alt={srv.name}
                            fallbackType="treatment"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                          <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-teal-700 flex items-center justify-center shadow-md">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="absolute top-3 right-3">
                            <Badge variant="teal" size="sm" className="shadow-md font-bold uppercase tracking-wider">
                              {srv.category}
                            </Badge>
                          </div>
                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <span className="text-[11px] font-semibold text-teal-200 tracking-wide block drop-shadow-sm">
                              {srv.department_name}
                            </span>
                          </div>
                        </div>

                        <div className="p-5">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                            {srv.name}
                          </h3>
                          <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed font-medium">
                            {srv.description}
                          </p>
                        </div>
                      </div>

                      <div className="px-5 pb-5 pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50/50">
                        <div>
                          <span className="text-slate-400 block text-[11px] font-medium">Estimate Range</span>
                          <span className="font-extrabold text-slate-900">{srv.price_range}</span>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setDetailService(srv)} className="rounded-xl font-bold">
                          Details &rarr;
                        </Button>
                      </div>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Service Detail Modal */}
      {detailService && (
        <Modal
          isOpen={!!detailService}
          onClose={() => setDetailService(null)}
          title={detailService.name}
          subtitle={`Department: ${detailService.department_name} • Category: ${detailService.category}`}
          maxWidth="2xl"
        >
          <div className="space-y-6">
            {detailService.image_url && (
              <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden shadow-md">
                <ImageWithFallback
                  src={detailService.image_url}
                  alt={detailService.name}
                  fallbackType="treatment"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white font-bold text-lg drop-shadow-md">{detailService.name}</span>
                </div>
              </div>
            )}
            <p className="text-sm text-slate-700 leading-relaxed">
              {detailService.description}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Estimated Duration</span>
                <span className="font-bold text-slate-900 text-sm flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  {detailService.duration}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Estimated Pricing</span>
                <span className="font-bold text-slate-900 text-sm flex items-center gap-1 mt-0.5">
                  <IndianRupee className="w-3.5 h-3.5 text-teal-600" />
                  {detailService.price_range}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-400 block font-medium">Insurance Coverage</span>
                <span className="font-bold text-emerald-700 text-sm flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Covered (Major Plans)
                </span>
              </div>
            </div>

            {/* Key Features */}
            {detailService.key_features && detailService.key_features.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Clinical Highlights & Technologies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {detailService.key_features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preparation Instructions */}
            {detailService.preparation_instructions && (
              <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900">
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <Info className="w-4 h-4 text-amber-700" />
                  Patient Preparation Guidelines:
                </div>
                <p className="text-amber-800 leading-relaxed">
                  {detailService.preparation_instructions}
                </p>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <Button variant="outline" size="md" onClick={() => setDetailService(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                size="md"
                leftIcon={<Calendar className="w-4 h-4" />}
                onClick={() => {
                  const deptId = detailService.department_id;
                  setDetailService(null);
                  onOpenBooking({ departmentId: deptId });
                }}
              >
                Book for this Service
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
