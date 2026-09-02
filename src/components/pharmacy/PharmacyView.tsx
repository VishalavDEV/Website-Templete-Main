import React, { useState } from 'react';
import { 
  Pill, 
  Search, 
  UploadCloud, 
  Check, 
  Clock, 
  Plus, 
  ShoppingCart, 
  RefreshCw, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  Flame,
  Calendar,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Medication, PillReminder, NavigationTab } from '../../types';

interface PharmacyViewProps {
  medications?: Medication[];
  reminders?: PillReminder[];
  onToggleReminder?: (reminderId: string) => void;
  onNavigate?: (tab: NavigationTab) => void;
}

export const PharmacyView: React.FC<PharmacyViewProps> = ({
  medications = [],
  reminders = [],
  onToggleReminder,
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState<{ [id: string]: number }>({});
  const [uploadRxOpen, setUploadRxOpen] = useState(false);
  const [rxSuccess, setRxSuccess] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const categories = ['All', 'Maintenance', 'Cardiovascular', 'Metabolic', 'Supplements', 'Allergy'];

  const filteredMeds = (medications || []).filter(m => {
    if (!m) return false;
    const cat = m.category || '';
    const name = m.name || '';
    const dosage = m.dosage || '';
    const instructions = m.instructions || '';
    const query = (searchQuery || '').toLowerCase();
    const selCat = (selectedCategory || 'All').toLowerCase();

    const matchesCat = selectedCategory === 'All' || cat.toLowerCase() === selCat;
    const matchesSearch = name.toLowerCase().includes(query) ||
                          dosage.toLowerCase().includes(query) ||
                          instructions.toLowerCase().includes(query);
    return matchesCat && matchesSearch;
  });

  const handleAddToCart = (id: string) => {
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const totalCartCount: number = (Object.values(cart) as number[]).reduce((a, b) => a + b, 0);

  const handleCheckout = () => {
    setOrderPlaced(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      setCart({});
      setOrderPlaced(false);
    }, 2500);
  };

  const takenCount = reminders.filter(r => r.taken).length;
  const adherencePercent = reminders.length > 0 ? Math.round((takenCount / reminders.length) * 100) : 100;

  return (
    <div className="space-y-6 pb-16">
      
      {/* Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-xs relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6F7F3] border border-[#00A884]/20 text-[#00A884] text-xs font-semibold">
            <Pill className="w-3.5 h-3.5 text-[#00A884]" />
            <span>Digital Pharmacy & Smart Refills</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Prescriptions & Wellness Pharmacy
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            Automated prescription synchronization with your doctors, daily adherence tracking, and free temperature-controlled delivery.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 relative z-10">
          <button
            onClick={() => setUploadRxOpen(true)}
            className="px-4 py-2.5 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all flex items-center space-x-2 cursor-pointer"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Upload Doctor's Rx</span>
          </button>
          {onNavigate && (
            <button
              onClick={() => onNavigate('appointments')}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#00A884]" />
              <span>Request Rx from Doctor</span>
            </button>
          )}
        </div>
      </div>

      {/* 1. Daily Pill Reminder & Adherence Widget */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-[#E6F7F3] text-[#00A884] border border-[#00A884]/20 rounded-xl">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-800">
                Today's Medication Schedule
              </h2>
              <p className="text-xs text-slate-500">Check off your daily doses to keep your treatment active</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <span className="text-xs font-bold text-slate-800 block">Adherence: {adherencePercent}%</span>
              <span className="text-[10px] text-slate-400">{takenCount} of {reminders.length} doses logged</span>
            </div>
            <div className="w-16 bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
              <div 
                className="bg-[#00A884] h-full rounded-full transition-all duration-500" 
                style={{ width: `${adherencePercent}%` }} 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {reminders.map((rem) => (
            <div 
              key={rem.id}
              onClick={() => onToggleReminder && onToggleReminder(rem.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                rem.taken 
                  ? 'bg-[#E6F7F3]/60 border-[#00A884]/40 text-slate-700' 
                  : 'bg-[#F8FAFC] border-slate-200 hover:border-[#00A884]'
              }`}
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className={`p-2 rounded-xl border shrink-0 ${
                  rem.taken ? 'bg-[#00A884] text-white border-[#00A884]' : 'bg-white text-slate-400 border-slate-200'
                }`}>
                  <Check className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <h4 className={`text-xs font-bold truncate ${rem.taken ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                    {rem.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">{rem.dosage} • {rem.time}</p>
                </div>
              </div>

              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase shrink-0 ${
                rem.taken ? 'bg-[#E6F7F3] text-[#00A884]' : 'bg-white border border-slate-200 text-slate-500'
              }`}>
                {rem.taken ? 'Taken' : 'Due'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Pharmacy Catalog & Search */}
      <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-800">Prescription Refills & OTC Wellness</h3>
            <p className="text-xs text-slate-500 mt-0.5">Direct manufacturer certified medicine delivery with batch verification</p>
          </div>

          {/* Cart Floating / Header Indicator */}
          {totalCartCount > 0 && (
            <button
              onClick={handleCheckout}
              className="px-4 py-2 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center space-x-2 animate-bounce cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Checkout ({totalCartCount} items)</span>
            </button>
          )}
        </div>

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search medication name, strength, active salt (e.g. Metformin, Atorvastatin, Vitamin D3)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#00A884] outline-none"
            />
          </div>

          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00A884] text-white shadow-xs'
                    : 'bg-[#F8FAFC] border border-[#E2E8F0] text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Medications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMeds.map((med) => {
            const countInCart = cart[med.id] || 0;
            return (
              <div 
                key={med.id}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#00A884]/40 hover:bg-white transition-all flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="p-2.5 bg-[#E6F7F3] rounded-xl text-[#00A884] border border-[#00A884]/20 group-hover:scale-105 transition-transform">
                      <Pill className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                      {med.category}
                    </span>
                  </div>

                  <div className="mt-3">
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#00A884] transition-colors">{med.name}</h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">{med.dosage} • {med.frequency}</p>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{med.instructions}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">Refill Status</span>
                    <span className="text-xs font-bold text-[#00A884]">
                      {med.remainingDays ? `${med.remainingDays} days left` : 'Refill Available'}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(med.id)}
                    className="px-3.5 py-1.5 bg-[#00A884] hover:bg-[#009272] text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center space-x-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{countInCart > 0 ? `Added (${countInCart})` : 'Order Refill'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {orderPlaced && (
          <div className="p-4 bg-[#E6F7F3] border border-[#00A884]/30 rounded-2xl text-center space-y-1 animate-in fade-in">
            <CheckCircle2 className="w-6 h-6 text-[#00A884] mx-auto" />
            <h4 className="text-sm font-bold text-slate-800">Order Placed Successfully!</h4>
            <p className="text-xs text-slate-600">Your prescription delivery is scheduled for dispatch today.</p>
          </div>
        )}
      </div>

      {/* Upload Rx Modal */}
      {uploadRxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <UploadCloud className="w-5 h-5 text-[#00A884]" />
                <h3 className="font-bold text-base text-slate-800">Upload Doctor's Prescription</h3>
              </div>
              <button
                onClick={() => setUploadRxOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {rxSuccess ? (
              <div className="p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#00A884] mx-auto animate-bounce" />
                <h4 className="font-bold text-base text-slate-800">Prescription Received!</h4>
                <p className="text-xs text-slate-500">
                  Our licensed clinical pharmacists will verify the prescription and add your medications to your dashboard.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div 
                  onClick={() => {
                    setRxSuccess(true);
                    setTimeout(() => {
                      setRxSuccess(false);
                      setUploadRxOpen(false);
                    }, 1800);
                  }}
                  className="border-2 border-dashed border-[#00A884]/40 hover:border-[#00A884] bg-[#E6F7F3]/30 p-8 rounded-2xl text-center cursor-pointer transition-colors space-y-2"
                >
                  <UploadCloud className="w-8 h-8 text-[#00A884] mx-auto" />
                  <p className="text-xs font-bold text-slate-800">Click or drag & drop prescription image or PDF</p>
                  <span className="text-[10px] text-slate-400">Supports JPG, PNG, PDF up to 15MB</span>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  Must include doctor's signature, registration number, and clear clinic header.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
