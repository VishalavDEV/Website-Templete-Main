import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { X, Calculator, CheckCircle2, Building, Home, Factory, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useQuoteModal } from '../../context/QuoteModalContext';
import { useToast } from '../../context/ToastContext';
import { api } from '../../services/api';
import { Button } from './Button';

const quoteSchema = z.object({
  buildingType: z.enum(['commercial', 'industrial', 'residential']),
  roofType: z.string().min(1, 'Please select a roofing material'),
  roofAreaSqFt: z.number().min(500, 'Minimum area is 500 sq ft').max(1000000, 'Max area is 1,000,000 sq ft'),
  currentCondition: z.string().min(1, 'Please select current condition'),
  slope: z.enum(['flat', 'low-slope', 'steep']),
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid work email required'),
  phone: z.string().min(10, 'Valid phone number required'),
  address: z.string().min(5, 'Project site address required'),
  timeframe: z.string().optional()
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export const QuoteModal: React.FC = () => {
  const { isOpen, closeQuoteModal, preselectedService } = useQuoteModal();
  const { showToast } = useToast();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimateResult, setEstimateResult] = useState<{
    estimatedTotal: number;
    estimatedRangeLow: number;
    estimatedRangeHigh: number;
    estimateId: string;
    projectedLifespanYears: number;
  } | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors }
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      buildingType: 'commercial',
      roofType: 'TPO Single-Ply Membrane',
      roofAreaSqFt: 15000,
      currentCondition: 'Aging / Moderate Leaks',
      slope: 'flat',
      fullName: '',
      email: '',
      phone: '',
      address: '',
      timeframe: 'Immediate (Within 30 Days)'
    }
  });

  const selectedBuildingType = watch('buildingType');
  const selectedRoofType = watch('roofType');
  const selectedArea = watch('roofAreaSqFt');

  useEffect(() => {
    if (preselectedService) {
      if (preselectedService.toLowerCase().includes('metal')) {
        setValue('roofType', 'Standing Seam Galvalume Metal');
      } else if (preselectedService.toLowerCase().includes('tpo') || preselectedService.toLowerCase().includes('flat')) {
        setValue('roofType', 'TPO Single-Ply Membrane');
      } else if (preselectedService.toLowerCase().includes('solar') || preselectedService.toLowerCase().includes('cool')) {
        setValue('roofType', 'Fluid Silicone Cool Roof Coating');
      }
    }
  }, [preselectedService, setValue]);

  const onCalculateAndSubmit = async (values: QuoteFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await api.calculateQuote({
        buildingType: values.buildingType,
        roofAreaSqFt: values.roofAreaSqFt,
        roofType: values.roofType,
        currentCondition: values.currentCondition,
        slope: values.slope,
        additionalServices: ['Infrared Drone Inspection', '10-Yr Preventive Plan'],
        contactInfo: {
          name: values.fullName,
          email: values.email,
          phone: values.phone,
          address: values.address
        }
      });

      setEstimateResult(res);
      setStep(3);
      showToast('success', 'Instant Estimate Generated', `Proposal #${res.estimateId} created for ${values.fullName}`);
    } catch (err: any) {
      showToast('error', 'Calculation Error', err.message || 'Unable to generate quote at this time.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    closeQuoteModal();
    setTimeout(() => {
      setStep(1);
      setEstimateResult(null);
      reset();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-auto"
          >
            {/* Header */}
            <div className="bg-[#0B1325] text-white p-6 sm:p-8 flex items-start justify-between relative">
              <div className="pr-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider bg-amber-500 text-slate-950 uppercase">
                    Aurox Estimator Engine
                  </span>
                  <span className="text-xs text-slate-400">ASTM / RSMeans Calibrated</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Get Free Instant Project Quote
                </h3>
                <p className="text-slate-300 text-sm mt-1">
                  Receive an instant algorithmic budget estimate and certified engineering scope within 60 seconds.
                </p>
              </div>

              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper Progress Bar */}
            <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span className={`flex items-center gap-1.5 ${step >= 1 ? 'text-amber-600 font-bold' : ''}`}>
                <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px]">1</span>
                Project Specs
              </span>
              <span className="text-slate-300">───</span>
              <span className={`flex items-center gap-1.5 ${step >= 2 ? 'text-amber-600 font-bold' : ''}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-amber-500 text-slate-950' : 'bg-slate-300 text-slate-700'}`}>2</span>
                Site Details
              </span>
              <span className="text-slate-300">───</span>
              <span className={`flex items-center gap-1.5 ${step === 3 ? 'text-emerald-600 font-bold' : ''}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 3 ? 'bg-emerald-500 text-white' : 'bg-slate-300 text-slate-700'}`}>3</span>
                Instant Budget
              </span>
            </div>

            {/* Step Forms */}
            <form onSubmit={handleSubmit(onCalculateAndSubmit)} className="p-6 sm:p-8">
              {step === 1 && (
                <div className="space-y-6">
                  {/* Building Type Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      1. Building Classification
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { type: 'commercial', label: 'Commercial Office/Retail', icon: Building },
                        { type: 'industrial', label: 'Industrial/Warehouse', icon: Factory },
                        { type: 'residential', label: 'Residential/Multi-family', icon: Home },
                      ].map(({ type, label, icon: Icon }) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setValue('buildingType', type as any)}
                          className={`p-3.5 rounded-xl border text-center flex flex-col items-center gap-2 transition-all ${
                            selectedBuildingType === type
                              ? 'border-amber-500 bg-amber-50/70 text-slate-950 font-bold ring-2 ring-amber-500/20'
                              : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${selectedBuildingType === type ? 'text-amber-600' : 'text-slate-400'}`} />
                          <span className="text-xs">{label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Material Type Dropdown */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      2. Roofing Material / System
                    </label>
                    <select
                      {...register('roofType')}
                      className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    >
                      <option value="TPO Single-Ply Membrane">Carlisle / GAF 80-mil TPO Single-Ply (Standard Commercial)</option>
                      <option value="Standing Seam Galvalume Metal">Architectural 24-Ga Standing Seam Metal (50+ Yr)</option>
                      <option value="PVC Chemical-Resistant">PVC / KEE Chemical & Grease Resistant Membrane</option>
                      <option value="Fluid Silicone Cool Roof Coating">High-Solids Silicone Cool Fluid Restoration</option>
                      <option value="EPDM Rubber System">EPDM 60-mil Synthetic Rubber Cold Weather System</option>
                      <option value="Structural Tear-Off & Deck Replacement">Full Structural Tear-Off Down to Steel/Wood Deck</option>
                    </select>
                  </div>

                  {/* Area Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        3. Approximate Roof Area (Sq Ft)
                      </label>
                      <span className="text-sm font-extrabold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                        {Number(selectedArea || 15000).toLocaleString()} sq ft
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="150000"
                      step="1000"
                      value={selectedArea || 15000}
                      onChange={(e) => setValue('roofAreaSqFt', Number(e.target.value))}
                      className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                      <span>1,000 sq ft</span>
                      <span>50,000 sq ft</span>
                      <span>150,000+ sq ft</span>
                    </div>
                  </div>

                  {/* Slope and Condition */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Roof Pitch / Slope
                      </label>
                      <select
                        {...register('slope')}
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      >
                        <option value="flat">Flat (0 - 1/2 : 12)</option>
                        <option value="low-slope">Low-Slope (1:12 - 3:12)</option>
                        <option value="steep">Steep Slope (&gt; 4:12)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Current Roof Condition
                      </label>
                      <select
                        {...register('currentCondition')}
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      >
                        <option value="Aging / Moderate Leaks">Aging / Moderate Leaks (15+ yrs)</option>
                        <option value="Severe Damage">Severe Storm / Hail Punctures</option>
                        <option value="Good / Needs Preventive Coat">Fair / Scheduled Re-coat</option>
                        <option value="New Construction">New Construction Bare Deck</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => setStep(2)}
                      withArrow
                    >
                      Continue to Site Details
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500 mb-2">
                    Where should we deliver your itemized engineering budget and schedule your complimentary aerial drone scan?
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        {...register('fullName')}
                        placeholder="Marcus Vance"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                      {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="m.vance@company.com"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        {...register('phone')}
                        placeholder="(303) 555-0142"
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Desired Timeline</label>
                      <select
                        {...register('timeframe')}
                        className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      >
                        <option value="Immediate (Within 30 Days)">Immediate (Emergency / Within 30 Days)</option>
                        <option value="1 to 3 Months">1 to 3 Months</option>
                        <option value="Next Fiscal Year Budgeting">Next Fiscal Year Budgeting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Facility Address / City, State *</label>
                    <input
                      type="text"
                      {...register('address')}
                      placeholder="e.g. 4280 Industrial Pkwy, Denver, CO"
                      className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                    {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>}
                  </div>

                  <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>Includes free FLIR drone IR thermal leak mapping ($850 value) with all commercial proposals.</span>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                    >
                      ← Back to Specs
                    </button>

                    <Button
                      type="submit"
                      variant="primary"
                      isLoading={isSubmitting}
                      icon={<Calculator className="w-4 h-4" />}
                    >
                      Calculate & Generate Estimate
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && estimateResult && (
                <div className="text-center space-y-6 py-2">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs uppercase font-bold tracking-widest text-slate-400">
                      Estimate ID: {estimateResult.estimateId}
                    </span>
                    <h4 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-1">
                      ${estimateResult.estimatedTotal.toLocaleString()}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Projected Range: ${estimateResult.estimatedRangeLow.toLocaleString()} – ${estimateResult.estimatedRangeHigh.toLocaleString()} (Labor, Materials & NDL Warranty Included)
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs">
                    <div>
                      <span className="text-slate-500">System Selected:</span>
                      <p className="font-bold text-slate-900">{selectedRoofType}</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Calculated Area:</span>
                      <p className="font-bold text-slate-900">{Number(selectedArea).toLocaleString()} sq ft</p>
                    </div>
                    <div>
                      <span className="text-slate-500">System Longevity:</span>
                      <p className="font-bold text-emerald-700">{estimateResult.projectedLifespanYears} Year Warranty Life</p>
                    </div>
                    <div>
                      <span className="text-slate-500">Next Step:</span>
                      <p className="font-bold text-amber-700">Engineer Site Dispatch</p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="secondary" onClick={handleClose}>
                      Done & Close
                    </Button>
                    <Button
                      variant="primary"
                      to="/contact"
                      onClick={handleClose}
                      withDiagonalArrow
                    >
                      Speak with Senior Estimator
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
