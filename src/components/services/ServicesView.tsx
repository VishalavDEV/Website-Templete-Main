import React, { useState } from 'react';
import { 
  Search, 
  Stethoscope, 
  FlaskConical, 
  Smile, 
  Apple, 
  Dumbbell, 
  Home, 
  Heart, 
  ShieldAlert, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Users, 
  Pill,
  Bot
} from 'lucide-react';
import { HealthcareService, NavigationTab } from '../../types';

interface ServicesViewProps {
  services?: any[];
  onNavigate: (tab: NavigationTab) => void;
  onBookService?: (service: any) => void;
  onOpenBookModal?: () => void;
  onOpenUploadReport?: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  services = [],
  onNavigate,
  onBookService,
  onOpenBookModal,
  onOpenUploadReport,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Consultations',
    'Diagnostics',
    'Mental Health',
    'Nutrition',
    'Pharmacy',
    'Family Care',
    'Fitness',
  ];

  const getServiceIcon = (iconName?: string, cat?: string) => {
    switch ((iconName || '').toLowerCase()) {
      case 'stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'flaskconical': return <FlaskConical className="w-6 h-6" />;
      case 'pill': return <Pill className="w-6 h-6" />;
      case 'smile': return <Smile className="w-6 h-6" />;
      case 'apple': return <Apple className="w-6 h-6" />;
      case 'dumbbell': return <Dumbbell className="w-6 h-6" />;
      case 'users': return <Users className="w-6 h-6" />;
      case 'sparkles': return <Sparkles className="w-6 h-6" />;
      default: {
        const catLower = (cat || '').toLowerCase();
        if (catLower.includes('diag') || catLower.includes('lab')) return <FlaskConical className="w-6 h-6" />;
        if (catLower.includes('mental')) return <Smile className="w-6 h-6" />;
        if (catLower.includes('nutri')) return <Apple className="w-6 h-6" />;
        if (catLower.includes('pharm')) return <Pill className="w-6 h-6" />;
        return <Stethoscope className="w-6 h-6" />;
      }
    }
  };

  const filteredServices = (services || []).filter((srv) => {
    if (!srv) return false;
    const title = srv.name || srv.title || '';
    const desc = srv.description || srv.tagline || '';
    const category = srv.category || '';
    const features = Array.isArray(srv.features) ? srv.features : [];
    const query = (searchQuery || '').toLowerCase();
    const selCat = (selectedCategory || 'All').toLowerCase();

    const matchesCategory = selectedCategory === 'All' || 
      category.toLowerCase().includes(selCat) ||
      title.toLowerCase().includes(selCat);

    const matchesSearch = title.toLowerCase().includes(query) ||
      desc.toLowerCase().includes(query) ||
      features.some((f: any) => typeof f === 'string' && f.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const handleAction = (srv: any) => {
    if (srv.actionUrl) {
      onNavigate(srv.actionUrl as NavigationTab);
      return;
    }
    if (srv.actionType === 'book_test' && onOpenUploadReport) {
      onNavigate('reports');
      return;
    }
    if (srv.actionType === 'order_medicine') {
      onNavigate('pharmacy');
      return;
    }
    if (onBookService) {
      onBookService(srv);
    } else if (onOpenBookModal) {
      onOpenBookModal();
    } else {
      onNavigate('appointments');
    }
  };

  return (
    <div className="space-y-6 pb-16">
      
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-xs relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F7F3] border border-[#00A884]/20 text-[#00A884] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#00A884]" />
            <span>Comprehensive Care Directory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Healthcare & Wellness Services
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            Transparent pricing, certified clinical specialists, and friction-free booking across telemedicine, home diagnostics, pharmacy, and wellness.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('appointments')}
            className="px-4 py-2.5 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center space-x-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Doctor</span>
          </button>
          <button
            onClick={() => onNavigate('reports')}
            className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 cursor-pointer"
          >
            <FlaskConical className="w-4 h-4 text-[#00A884]" />
            <span>Book Lab Test</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by specialty, test name, or condition (e.g. Cardiology, MRI, Therapy, Nutrition)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#00A884] outline-none"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#00A884] text-white shadow-xs'
                  : 'bg-[#F8FAFC] border border-[#E2E8F0] text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredServices.map((srv) => {
          const title = srv.name || srv.title || 'Health Service';
          const desc = srv.description || srv.tagline || '';
          const price = srv.price || srv.pricing || 'Free / Included';
          const badge = srv.badge || (srv.popular ? 'Popular' : null);
          const features: string[] = srv.features || [];

          return (
            <div
              key={srv.id}
              className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Card Header */}
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-[#E6F7F3] rounded-2xl text-[#00A884] border border-[#00A884]/20 group-hover:scale-105 transition-transform">
                    {getServiceIcon(srv.iconName, srv.category)}
                  </div>
                  {badge && (
                    <span className="px-2.5 py-0.5 bg-[#E6F7F3] text-[#00A884] text-[10px] font-bold rounded-full border border-[#00A884]/20">
                      {badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {srv.category || 'Clinical Care'}
                  </span>
                  <h3 className="text-base font-bold text-slate-800 mt-0.5 group-hover:text-[#00A884] transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Features List */}
                {features.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {features.map((feat: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00A884] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Pricing & Booking CTA */}
              <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Pricing</span>
                  <span className="text-sm font-bold text-slate-800">{price}</span>
                </div>

                <button
                  onClick={() => handleAction(srv)}
                  className="px-4 py-2 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>{srv.actionLabel || 'Access Service'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredServices.length === 0 && (
        <div className="p-12 text-center bg-white rounded-3xl border border-[#E2E8F0] space-y-3">
          <Search className="w-8 h-8 mx-auto text-slate-300" />
          <h3 className="text-sm font-bold text-slate-800">No matching services found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query or explore all categories to view our full clinical catalog.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="px-4 py-2 bg-[#00A884] text-white text-xs font-bold rounded-xl cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Quality Standards Banner */}
      <div className="bg-[#E6F7F3] border border-[#00A884]/20 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-[#00A884] text-white rounded-2xl">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">The HealthPlus Clinical Standard</h4>
            <p className="text-xs text-slate-600 mt-0.5">
              100% HIPAA-compliant, board-certified physician network with CLIA-certified pathology partner laboratories.
            </p>
          </div>
        </div>
        <button
          onClick={() => onNavigate('hub')}
          className="px-4 py-2 bg-white border border-[#00A884]/30 hover:bg-slate-50 text-[#00A884] font-bold rounded-xl text-xs shrink-0 cursor-pointer"
        >
          Read Clinical Standards
        </button>
      </div>

    </div>
  );
};
