import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Building2, ShieldCheck, AreaChart, Eye, DollarSign } from "lucide-react";
import { skylineData } from "../../data/skyline";

export default function SkylineCollective() {
  const [selectedFloor, setSelectedFloor] = useState(skylineData.hero.buildingDetails.floors[0]);
  const [selectedProp, setSelectedProp] = useState(null);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [activeFormTab, setActiveFormTab] = useState("enquiry"); // "enquiry" or "visit"
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");
  
  // Quick filters for properties
  const [activeType, setActiveType] = useState("All");

  const handleSelectProperty = (prop) => {
    setSelectedProp(prop);
    setActiveImgIdx(0);
    setActiveFormTab("enquiry");
    setFormSuccess("");
    setFormError("");
  };

  const filteredProperties = skylineData.properties.filter(prop => {
    return activeType === "All" || prop.propertyType === activeType;
  });

  return (
    <div className="min-h-screen bg-[#070D19] text-[#E0E1DD] font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 19. Architectural Grid Navigation */}
      <nav className="border-b border-[#1A2E40] bg-[#070D19]/90 backdrop-blur-md sticky top-0 z-40 px-6 md:px-12 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <Building2 className="w-6 h-6 text-blue-500 group-hover:rotate-12 transition-transform" />
          <span className="font-mono font-bold tracking-[0.25em] text-sm text-white">
            SKYLINE_COLLECTIVE
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-widest text-[#8899A6] uppercase">
          <a href="#visualizer" className="hover:text-blue-500 transition-colors">Floor Visualizer</a>
          <a href="#units" className="hover:text-blue-500 transition-colors">Available Units</a>
          <a href="#analytics" className="hover:text-blue-500 transition-colors">Tech Spec</a>
          <a href="#acquisitions" className="hover:text-blue-500 transition-colors">Advisors</a>
        </div>

        <Link to="/" className="text-xs font-mono tracking-widest border border-blue-500/40 hover:border-blue-500 px-4 py-2 rounded text-blue-500 transition-all duration-300">
          SELECT BRAND
        </Link>
      </nav>

      {/* 20. Skyscraper Exterior Grid Hero */}
      <header className="relative min-h-[90vh] flex items-center justify-center py-16 px-6 border-b border-[#1A2E40] bg-[#0B132B]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-xs font-mono text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
              <span>METROPOLITAN LANDMARKS</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-none uppercase">
              HIGH-RISE<br />
              METROPOLITAN<br />
              <span className="text-blue-500 font-mono">COLLECTIVES</span>
            </h1>
            
            <p className="text-sm text-[#8899A6] max-w-xl font-light leading-relaxed">
              {skylineData.hero.subtitle} Fully automated building envelopes constructed using structural carbon frameworks.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-[#1A2E40]">
              <div>
                <span className="block text-2xl font-mono text-white font-bold">140+</span>
                <span className="text-[10px] font-mono text-[#8899A6] uppercase">Storeys Engineered</span>
              </div>
              <div>
                <span className="block text-2xl font-mono text-white font-bold">0.8s</span>
                <span className="text-[10px] font-mono text-[#8899A6] uppercase">Elevator Transit</span>
              </div>
              <div>
                <span className="block text-2xl font-mono text-white font-bold">Gold</span>
                <span className="text-[10px] font-mono text-[#8899A6] uppercase">LEED Architectural Rating</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-[#1A2E40] aspect-[4/5] bg-[#070D19]">
            <img 
              src={skylineData.hero.image} 
              alt="Skyscraper glass structure"
              className="w-full h-full object-cover brightness-75 scale-100 hover:scale-102 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D19] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-[#070D19]/90 border border-[#1A2E40] p-4 rounded-xl backdrop-blur-md">
              <span className="text-[10px] font-mono text-blue-500 uppercase block mb-1">Building Anchor</span>
              <span className="text-sm font-semibold text-white">The Helix Tower, SF Harbour</span>
            </div>
          </div>

        </div>
      </header>

      {/* 12. Interactive Building Visualization Section */}
      <section id="visualizer" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#1A2E40]">
        <div className="mb-16 text-center lg:text-left">
          <span className="text-xs font-mono tracking-widest text-blue-500 uppercase">Tower Visualizer</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-2 uppercase">
            CLICKABLE UNIT SCHEMATICS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Floor selector panel: graphical wireframe representation */}
          <div className="lg:col-span-4 bg-[#0A1629] border border-[#1A2E40] p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#8899A6] uppercase block mb-4">Select Building Floor</span>
              
              <div className="space-y-2">
                {skylineData.hero.buildingDetails.floors.map((fl) => (
                  <button
                    key={fl.floor}
                    onClick={() => setSelectedFloor(fl)}
                    className={`w-full p-4 rounded-lg border font-mono text-xs flex justify-between items-center transition-all ${selectedFloor.floor === fl.floor ? "bg-blue-600 border-blue-500 text-white font-bold" : "bg-[#070D19]/60 border-[#1A2E40] text-[#8899A6] hover:border-neutral-700"}`}
                  >
                    <span>FLOOR {fl.floor}</span>
                    <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase ${fl.status === "Available" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                      {fl.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[10px] font-mono text-[#8899A6] mt-6 pt-4 border-t border-[#1A2E40]/60">
              Interactive wireframe updates unit pricing, square footage, and configurations instantly.
            </div>
          </div>

          {/* Unit details rendering with Framer Motion transitions */}
          <div className="lg:col-span-8 bg-[#0B132B] border border-[#1A2E40] rounded-2xl p-6 md:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[#070D19]/40 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFloor.floor}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 space-y-6"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">
                      UNIT SPECIFICATIONS
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-1">
                      {selectedFloor.unit} (Floor {selectedFloor.floor})
                    </h3>
                  </div>
                  
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-[#8899A6] uppercase block">Starting Bid</span>
                    <span className="text-2xl font-mono text-blue-400 font-bold">{selectedFloor.price}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-b border-[#1A2E40]/60 font-mono text-xs text-[#8899A6]">
                  <div>
                    <span className="block text-white text-base font-bold">{selectedFloor.sqft}</span>
                    <span>TOTAL AREA</span>
                  </div>
                  <div>
                    <span className="block text-white text-base font-bold">{selectedFloor.beds}</span>
                    <span>BEDROOMS</span>
                  </div>
                  <div>
                    <span className="block text-white text-base font-bold">{selectedFloor.baths}</span>
                    <span>BATHROOMS</span>
                  </div>
                  <div>
                    <span className="block text-white text-base font-bold">{selectedFloor.status}</span>
                    <span>AVAILABILITY</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-blue-500 uppercase mb-2">Automated Tech Pack</h4>
                  <ul className="text-xs text-[#8899A6] space-y-2 list-disc list-inside">
                    <li>Dynamic glass auto-tinting based on UV sensors</li>
                    <li>Integrated private fiber terminal with symmetric 10Gbps bandwidth</li>
                    <li>Keyless biometric entry and autonomous drone-delivery docking</li>
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-8 border-t border-[#1A2E40]/60 mt-8 relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <span className="text-xs font-mono text-[#8899A6]">
                Secure escrow holding contract required for viewings.
              </span>
              
              <button 
                disabled={selectedFloor.status !== "Available"}
                onClick={() => alert(`Enquiry generated for Floor ${selectedFloor.floor} - ${selectedFloor.unit}.`)}
                className={`font-mono text-xs px-6 py-3 rounded uppercase font-bold tracking-widest transition-colors ${selectedFloor.status === "Available" ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-neutral-800 text-neutral-500 cursor-not-allowed"}`}
              >
                {selectedFloor.status === "Available" ? "Lock Escrow Viewing" : "Unit Sold Out"}
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Available Units Cards Section */}
      <section id="units" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-500 uppercase">Available Units</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-2 uppercase">
              PORTFOLIO LISTINGS
            </h2>
          </div>
          
          <div className="flex gap-4 font-mono text-xs">
            {["All", "Penthouse", "Duplex", "Apartment"].map(t => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-3 py-1.5 rounded border transition-colors ${activeType === t ? "bg-blue-600/20 border-blue-500 text-blue-400 font-bold" : "border-[#1A2E40] text-[#8899A6] hover:border-neutral-700"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <div 
              key={property.id}
              onClick={() => handleSelectProperty(property)}
              className="group cursor-pointer bg-[#0A1629] border border-[#1A2E40] hover:border-blue-500/40 rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-[250px] overflow-hidden bg-neutral-950">
                <img src={property.image} alt={property.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700" />
                <span className="absolute bottom-4 left-4 bg-[#070D19] border border-blue-500/30 text-blue-400 font-mono text-[9px] px-2 py-0.5 rounded font-bold uppercase">
                  {property.type}
                </span>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="font-bold text-white text-base group-hover:text-blue-500 transition-colors">
                    {property.title}
                  </h4>
                  <span className="font-mono text-blue-400 text-sm font-bold">{property.price}</span>
                </div>

                <p className="text-xs text-[#8899A6] font-light line-clamp-2 mb-6">
                  {property.description}
                </p>

                <div className="pt-4 border-t border-[#1A2E40]/60 flex items-center justify-between text-[10px] font-mono text-[#8899A6]">
                  <div className="flex gap-4">
                    <span>{property.beds} BEDS</span>
                    <span>{property.baths} BATHS</span>
                    <span>{property.area}</span>
                  </div>
                  <span className="text-blue-500 font-bold group-hover:underline">ANALYSIS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics specs section */}
      <section id="analytics" className="bg-[#0B132B] py-24 border-t border-b border-[#1A2E40] px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-500 uppercase">Structural integrity</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-2 mb-6 uppercase">
              METROPOLITAN SPECIFICATION
            </h3>
            
            <div className="space-y-6">
              {[
                { title: "Carbon Framework Core", desc: "Super-lightweight carbon matrices reinforcing structural stability against seismic and high-wind shear forces." },
                { title: "Triple glazed Argon Windows", desc: "Seals heat, blocks 99% UV light and dampens sound level by up to 55 decibels." },
                { title: "Autonomous Facility Bots", desc: "Independent drone cleaning and engineering agents operating on private rails across the external facade." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-xs font-mono text-blue-400 font-bold shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base mb-1">{item.title}</h5>
                    <p className="text-xs text-[#8899A6] font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src={skylineData.interiors[0]} alt="Interior lounge high-rise" className="w-full h-[280px] object-cover rounded-xl border border-[#1A2E40]" />
            <img src={skylineData.interiors[1]} alt="Interior balcony condo" className="w-full h-[280px] object-cover rounded-xl border border-[#1A2E40] mt-12" />
          </div>
        </div>
      </section>

      {/* 23. Skyline Property Details Modal */}
      <AnimatePresence>
        {selectedProp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProp(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A1629] border border-[#1A2E40] rounded-2xl max-w-xl w-full p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-2xl relative text-[#E0E1DD]"
            >
              <button 
                onClick={() => setSelectedProp(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#1A2E40] hover:border-blue-500 text-[#8899A6] hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest block mb-1">
                {selectedProp.propertyType || selectedProp.type} Engineering Report
              </span>
              
              <h3 className="font-bold text-2xl text-white mb-4">
                {selectedProp.title}
              </h3>

              <div className="relative h-[220px] rounded-xl overflow-hidden mb-6 bg-neutral-950 border border-[#1A2E40] group">
                <img 
                  src={selectedProp.images?.[activeImgIdx] || selectedProp.image} 
                  alt={selectedProp.title} 
                  className="w-full h-full object-cover" 
                />
                {selectedProp.images && selectedProp.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev - 1 + selectedProp.images.length) % selectedProp.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#070D19]/90 hover:bg-blue-500 text-white flex items-center justify-center transition-colors font-mono"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev + 1) % selectedProp.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#070D19]/90 hover:bg-blue-500 text-white flex items-center justify-center transition-colors font-mono"
                    >
                      &rarr;
                    </button>
                    <div className="absolute bottom-2 right-2 bg-[#070D19]/90 px-2 py-0.5 rounded text-[10px] font-mono text-blue-500">
                      {activeImgIdx + 1} / {selectedProp.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 border border-[#1A2E40] p-4 rounded-xl bg-[#070D19] mb-6">
                <div>
                  <span className="text-[9px] font-mono text-[#8899A6] uppercase block">Acquisition Value</span>
                  <span className="font-mono font-bold text-lg text-blue-400">{selectedProp.price}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#8899A6] uppercase block">Zoning Vector</span>
                  <span className="font-bold text-sm text-white">{selectedProp.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs mb-6">
                <div className="bg-[#070D19] p-2 rounded-lg border border-[#1A2E40]">
                  <span className="block font-bold text-white">{selectedProp.bedrooms || selectedProp.beds} BHK</span>
                  <span className="text-[8px] font-mono text-[#8899A6] uppercase">Structure</span>
                </div>
                <div className="bg-[#070D19] p-2 rounded-lg border border-[#1A2E40]">
                  <span className="block font-bold text-white">{selectedProp.bathrooms || selectedProp.baths}</span>
                  <span className="text-[8px] font-mono text-[#8899A6] uppercase">Baths</span>
                </div>
                <div className="bg-[#070D19] p-2 rounded-lg border border-[#1A2E40]">
                  <span className="block font-bold text-white">{selectedProp.area}</span>
                  <span className="text-[8px] font-mono text-[#8899A6] uppercase">Area</span>
                </div>
              </div>

              <div className="mb-6 space-y-4 text-xs font-light text-[#8899A6] leading-relaxed">
                <p>{selectedProp.description}</p>
                
                <div>
                  <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest block mb-2">Systems Enabled</span>
                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px] text-neutral-300">
                    {(selectedProp.amenities || selectedProp.features).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Tabs */}
              <div className="mt-6 pt-6 border-t border-[#1A2E40]">
                <div className="flex border-b border-[#1A2E40] mb-4">
                  <button 
                    onClick={() => { setActiveFormTab("enquiry"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 pr-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "enquiry" ? "border-blue-500 text-white" : "border-transparent text-[#8899A6]"}`}
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => { setActiveFormTab("visit"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 px-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "visit" ? "border-blue-500 text-white" : "border-transparent text-[#8899A6]"}`}
                  >
                    Schedule Visit
                  </button>
                </div>

                {formSuccess ? (
                  <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-xs font-mono text-center">
                    {formSuccess}
                  </div>
                ) : (
                  <form 
                    onSubmit={async (e) => { 
                      e.preventDefault(); 
                      setFormSubmitting(true);
                      await new Promise(r => setTimeout(r, 1000));
                      setFormSubmitting(false);
                      if (activeFormTab === "enquiry") {
                        setFormSuccess("Your enquiry has been received.");
                      } else {
                        setFormSuccess("Your property visit request has been submitted.");
                      }
                    }}
                    className="space-y-3"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[8px] font-mono text-[#8899A6] uppercase mb-1">Name</label>
                        <input required type="text" className="w-full bg-[#070D19] border border-[#1A2E40] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500" />
                      </div>
                      <div>
                        <label className="block text-[8px] font-mono text-[#8899A6] uppercase mb-1">Phone</label>
                        <input required type="tel" className="w-full bg-[#070D19] border border-[#1A2E40] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[8px] font-mono text-[#8899A6] uppercase mb-1">Email</label>
                      <input required type="email" className="w-full bg-[#070D19] border border-[#1A2E40] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500" />
                    </div>

                    {activeFormTab === "enquiry" ? (
                      <div>
                        <label className="block text-[8px] font-mono text-[#8899A6] uppercase mb-1">Message</label>
                        <textarea 
                          required 
                          rows={2} 
                          defaultValue={`I am interested in unit: ${selectedProp.title} (ID: ${selectedProp.id}) on ${selectedProp.location}.`}
                          className="w-full bg-[#070D19] border border-[#1A2E40] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[8px] font-mono text-[#8899A6] uppercase mb-1">Date</label>
                          <input required type="date" className="w-full bg-[#070D19] border border-[#1A2E40] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-[8px] font-mono text-[#8899A6] uppercase mb-1">Time</label>
                          <input required type="time" className="w-full bg-[#070D19] border border-[#1A2E40] rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none" />
                        </div>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={formSubmitting}
                      className="w-full bg-blue-600 text-white font-mono font-bold tracking-widest text-xs py-3 rounded-xl hover:bg-blue-500 disabled:opacity-50 transition-colors uppercase"
                    >
                      {formSubmitting ? "Submitting..." : activeFormTab === "enquiry" ? "Send Enquiry" : "Book Private Tour"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#070D19] border-t border-[#1A2E40] py-12 px-6 text-center text-xs font-mono text-[#8899A6]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} SKYLINE COLLECTIVE INC. ALL DATA LOGGED.</span>
          <div className="flex gap-4">
            <Link to="/" className="text-blue-500 hover:underline">Select Brand</Link>
            <span>Confidential System</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
