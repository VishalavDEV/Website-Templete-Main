import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ClipboardList, Info, AlertTriangle, Compass, RefreshCw } from 'lucide-react';

export default function TravelGuide() {
  const [packCategory, setPackCategory] = useState('Beach');
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Physical Passport & copies', category: 'All', checked: true },
    { id: 2, text: 'Visa approval documents', category: 'All', checked: true },
    { id: 3, text: 'Universal power plug grids', category: 'All', checked: false },
    { id: 4, text: 'First-aid kit & prescriptions', category: 'All', checked: false },
    { id: 5, text: 'Swimsuits & sun hats', category: 'Beach', checked: false },
    { id: 6, text: 'Sunscreen lotion SPF 50+', category: 'Beach', checked: false },
    { id: 7, text: 'Dry bag for electronics', category: 'Beach', checked: false },
    { id: 8, text: 'Water-resistant windcheater', category: 'Mountains', checked: false },
    { id: 9, text: 'Sturdy hiking boots & poles', category: 'Mountains', checked: false },
    { id: 10, text: 'Thermal underwear layers', category: 'Mountains', checked: false },
    { id: 11, text: 'Chic urban outfits & sneakers', category: 'Cities', checked: false },
    { id: 12, text: 'Offline navigation map downloads', category: 'Cities', checked: false },
    { id: 13, text: 'Lightweight hiking backpacks', category: 'Adventure', checked: false },
    { id: 14, text: 'Bug spray & tick repellents', category: 'Adventure', checked: false },
    { id: 15, text: 'Pocket knife & multi-tools', category: 'Adventure', checked: false }
  ]);

  const handleToggle = (id) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleReset = () => {
    setChecklist(checklist.map((item) => ({ ...item, checked: false })));
  };

  const categories = ['Beach', 'Mountains', 'Cities', 'Adventure'];

  const filteredChecklist = checklist.filter(
    (item) => item.category === 'All' || item.category === packCategory
  );

  return (
    <div className="relative min-h-screen bg-gradient-soft text-stone-800 pt-28 pb-20 px-6">
      <div className="absolute inset-0 bg-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side - Guide Header & Advisories */}
        <div className="lg:col-span-5">
          <div className="max-w-md mb-8">
            <span className="text-xs font-bold text-[#ff2a74] uppercase tracking-widest font-heading">Travel Smart</span>
            <h1 className="text-3xl sm:text-4xl font-heading font-black text-stone-850 mt-1">
              Travel Guide.
            </h1>
            <p className="text-xs text-stone-500 mt-3 leading-relaxed font-medium">
              Read up on passport requirements, safety advisories, and use our interactive digital packer to organize your bag coordinates.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            
            {/* Advisory card 1 */}
            <div className="p-5 bg-white border border-stone-200 rounded-2xl flex gap-3 text-xs leading-relaxed font-semibold text-stone-600 shadow-sm">
              <Info className="text-[#0066ff] shrink-0" size={16} />
              <div>
                <h4 className="font-heading font-extrabold text-stone-800 mb-1">Visa & Passports</h4>
                <p className="font-medium text-stone-500">
                  Passports must maintain at least 6 months validity from departure dates. Check electronic travel authority (eTA) regulations for your destination country.
                </p>
              </div>
            </div>

            {/* Advisory card 2 */}
            <div className="p-5 bg-white border border-stone-200 rounded-2xl flex gap-3 text-xs leading-relaxed font-semibold text-stone-600 shadow-sm">
              <AlertTriangle className="text-[#ff2a74] shrink-0" size={16} />
              <div>
                <h4 className="font-heading font-extrabold text-stone-800 mb-1">Insurance & Vaccination</h4>
                <p className="font-medium text-stone-500">
                  Comprehensive travel protection is strongly recommended. Review localized vaccine rules prior to checking in at terminal gates.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Interactive Checklist */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-stone-200 p-6 rounded-3xl shadow-sm relative">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <ClipboardList className="text-[#ff2a74]" size={20} />
                <h3 className="font-heading font-extrabold text-lg text-stone-850">Digital Packer Checklist</h3>
              </div>
              <button
                onClick={handleReset}
                className="text-[10px] uppercase font-bold text-stone-400 hover:text-[#ff2a74] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw size={10} />
                <span>Reset Items</span>
              </button>
            </div>

            {/* Category Select tabs */}
            <div className="flex border-b border-stone-150 gap-4 mb-6 text-xs font-semibold overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPackCategory(cat)}
                  className={`pb-2.5 px-1 relative transition-colors cursor-pointer shrink-0 ${
                    packCategory === cat ? 'text-[#ff2a74]' : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  {cat} Gear
                  {packCategory === cat && (
                    <motion.div
                      layoutId="guideTabLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff2a74]"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Packing List Items */}
            <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto pr-2">
              <AnimatePresence mode="popLayout">
                {filteredChecklist.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    onClick={() => handleToggle(item.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                      item.checked
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700 line-through'
                        : 'bg-stone-50 border-stone-150 text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center transition-colors ${
                      item.checked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-stone-300'
                    }`}>
                      {item.checked && <Check size={10} className="stroke-[3]" />}
                    </div>
                    <span className="text-xs font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Checklist Progress Indicator */}
            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400 font-bold">
              <span>CHECKED OFF: {filteredChecklist.filter(i => i.checked).length} / {filteredChecklist.length}</span>
              <span className="text-[#ff2a74]">Ready to Pack</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
