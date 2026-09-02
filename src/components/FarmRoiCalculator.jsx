import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  DollarSign, 
  Droplets, 
  Leaf, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Info,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { calculatorCropData } from '../data/content';

export default function FarmRoiCalculator({ onOpenContact }) {
  const [acreage, setAcreage] = useState(750);
  const [selectedCropId, setSelectedCropId] = useState('corn-grain');
  const [calculatedUnlocked, setCalculatedUnlocked] = useState(false);

  const selectedCrop = useMemo(() => {
    return calculatorCropData.find(c => c.id === selectedCropId) || calculatorCropData[0];
  }, [selectedCropId]);

  // Calculations
  const calculations = useMemo(() => {
    const waterSaved = acreage * selectedCrop.waterSavingsGallonsPerAcre;
    const carbonTons = (acreage * selectedCrop.carbonTonsPerAcre).toFixed(1);
    const carbonRevenue = Math.round(carbonTons * 45); // $45 per ton carbon credit
    const directCostSavings = acreage * selectedCrop.costSavingsPerAcre;
    const estimatedYieldLiftValue = Math.round(acreage * selectedCrop.costSavingsPerAcre * 1.85);
    const totalEstimatedAnnualGain = directCostSavings + estimatedYieldLiftValue + carbonRevenue;

    return {
      waterSaved: Math.round(waterSaved),
      carbonTons,
      carbonRevenue,
      directCostSavings,
      totalEstimatedAnnualGain,
      yieldPercent: Math.round(selectedCrop.baseYieldIncrease * 100),
      organicPremium: selectedCrop.organicPremiumPercent
    };
  }, [acreage, selectedCrop]);

  const handleRunAudit = () => {
    setCalculatedUnlocked(true);
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#2D6A4F', '#E9C46A', '#52B788', '#DDA15E']
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#F4EFE6] relative overflow-hidden scroll-mt-20 md:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-100 border border-forest-200 text-forest-800 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Calculator className="w-3.5 h-3.5 text-forest-700" />
            <span>Interactive Profit & Eco Estimator</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-forest-950 tracking-tight leading-tight mb-4"
          >
            Calculate Your Farm's <br />
            <span className="text-forest-700 italic">Net Economic & Carbon Upside</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-earth-700"
          >
            Adjust your acreage and select your crop classification to project annual input cost reductions, certified organic premiums, and verified soil carbon dividends.
          </motion.p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-forest-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-6 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-forest-100">
              <h3 className="text-xl font-bold font-display text-forest-950 mb-6 flex items-center gap-2">
                <span>1. Select Crop & Farm Parameters</span>
              </h3>

              {/* Crop Selector Buttons */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-forest-700 mb-3">
                  Primary Crop Vertical
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {calculatorCropData.map((crop) => (
                    <button
                      key={crop.id}
                      onClick={() => setSelectedCropId(crop.id)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs sm:text-sm font-semibold flex items-center justify-between ${
                        selectedCropId === crop.id
                          ? 'bg-forest-800 text-white border-forest-800 shadow-md'
                          : 'bg-forest-50/70 text-forest-900 border-forest-200/80 hover:bg-forest-100'
                      }`}
                    >
                      <span className="truncate pr-2">{crop.name}</span>
                      {selectedCropId === crop.id && (
                        <Check className="w-4 h-4 text-wheat-400 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Acreage Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-forest-700">
                    Active Farm Acreage
                  </label>
                  <div className="px-3.5 py-1 rounded-xl bg-forest-800 text-wheat-400 font-bold font-display text-base">
                    {acreage.toLocaleString()} Acres
                  </div>
                </div>

                <input
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={acreage}
                  onChange={(e) => setAcreage(Number(e.target.value))}
                  className="w-full h-3 bg-forest-100 rounded-lg appearance-none cursor-pointer accent-forest-700"
                />

                <div className="flex justify-between text-xs text-earth-600 mt-2 font-medium">
                  <span>50 Acres (Family Plot)</span>
                  <span>2,500 Acres</span>
                  <span>10,000+ Acres (Commercial Co-Op)</span>
                </div>
              </div>

              {/* Crop Specs Highlights */}
              <div className="p-4 bg-forest-50 rounded-2xl border border-forest-100 space-y-2 text-xs">
                <div className="flex justify-between text-forest-800">
                  <span className="text-earth-700">Estimated Yield Lift Rate:</span>
                  <span className="font-bold text-forest-950">+{calculations.yieldPercent}% Harvest Volume</span>
                </div>
                <div className="flex justify-between text-forest-800">
                  <span className="text-earth-700">Organic Market Price Advantage:</span>
                  <span className="font-bold text-forest-950">+{calculations.organicPremium}% Premium / Bushel</span>
                </div>
                <div className="flex justify-between text-forest-800">
                  <span className="text-earth-700">Soil Carbon Sequestration Rate:</span>
                  <span className="font-bold text-forest-950">{selectedCrop.carbonTonsPerAcre} Tons CO2e / Acre / Yr</span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleRunAudit}
                  className="w-full inline-flex items-center justify-center gap-2 bg-forest-800 hover:bg-forest-900 text-white font-bold py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-glow-green transition-all"
                >
                  <Sparkles className="w-4 h-4 text-wheat-400" />
                  <span>Update Projection Model</span>
                </button>
              </div>
            </div>

            {/* Right Column: Projected ROI Dashboard */}
            <div className="lg:col-span-6 p-6 sm:p-10 bg-gradient-to-br from-forest-950 to-forest-900 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    Projected Annual Upside (12-Month Model)
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-forest-800 border border-forest-700 text-forest-300">
                    Based on 2025-2026 Partner Data
                  </span>
                </div>

                {/* Big Total Value */}
                <div className="mb-8 p-6 rounded-3xl bg-forest-900/90 border border-emerald-500/30 shadow-inner">
                  <span className="text-xs font-semibold text-forest-300 uppercase tracking-wider block mb-1">
                    Estimated Total Net Annual Margin Lift
                  </span>
                  <div className="text-4xl sm:text-5xl font-extrabold font-display text-gradient-gold">
                    ${calculations.totalEstimatedAnnualGain.toLocaleString()}
                  </div>
                  <p className="text-xs text-forest-300 mt-2">
                    Combined value from input chemical replacement, yield boost, and carbon credits.
                  </p>
                </div>

                {/* Breakdown Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Water saved */}
                  <div className="p-4 rounded-2xl bg-forest-900/70 border border-forest-700/60">
                    <div className="flex items-center gap-2 text-teal-400 text-xs font-bold mb-1">
                      <Droplets className="w-4 h-4" />
                      <span>Water Conserved</span>
                    </div>
                    <div className="text-2xl font-bold font-display text-white">
                      {calculations.waterSaved.toLocaleString()} <span className="text-xs font-normal text-forest-300">Gal</span>
                    </div>
                  </div>

                  {/* Carbon Sequestration */}
                  <div className="p-4 rounded-2xl bg-forest-900/70 border border-forest-700/60">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                      <Leaf className="w-4 h-4" />
                      <span>Carbon Sequestered</span>
                    </div>
                    <div className="text-2xl font-bold font-display text-white">
                      {calculations.carbonTons} <span className="text-xs font-normal text-forest-300">Tons CO2e</span>
                    </div>
                  </div>

                  {/* Direct Input Cost Savings */}
                  <div className="p-4 rounded-2xl bg-forest-900/70 border border-forest-700/60">
                    <div className="flex items-center gap-2 text-wheat-400 text-xs font-bold mb-1">
                      <DollarSign className="w-4 h-4" />
                      <span>Fertilizer Cost Savings</span>
                    </div>
                    <div className="text-2xl font-bold font-display text-white">
                      ${calculations.directCostSavings.toLocaleString()}
                    </div>
                  </div>

                  {/* Carbon Credit Revenue */}
                  <div className="p-4 rounded-2xl bg-forest-900/70 border border-forest-700/60">
                    <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>Carbon Credit Dividend</span>
                    </div>
                    <div className="text-2xl font-bold font-display text-white">
                      ${calculations.carbonRevenue.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-forest-300 text-center sm:text-left">
                  Receive a customized GIS soil map and hardware deployment plan.
                </div>
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-wheat-500 to-wheat-600 hover:from-wheat-400 hover:to-wheat-500 text-forest-950 font-bold px-6 py-3 rounded-full text-xs shadow-lg hover:shadow-glow-amber transition-all whitespace-nowrap"
                >
                  <span>Lock in Custom Field Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
