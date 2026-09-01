import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Eye, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";
import { monumentData } from "../../data/monument";

export default function MonumentEstates() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activePropertyIndex, setActivePropertyIndex] = useState(0);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [activeFormTab, setActiveFormTab] = useState("enquiry"); // "enquiry" or "visit"
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");

  // Auto-slide properties in Monument luxury slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePropertyIndex(prev => (prev + 1) % monumentData.properties.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const activeProperty = monumentData.properties[activePropertyIndex];

  const handleSelectProperty = (prop) => {
    setSelectedProperty(prop);
    setActiveImgIdx(0);
    setActiveFormTab("enquiry");
    setFormSuccess("");
    setFormError("");
  };

  return (
    <div className="min-h-screen bg-black text-neutral-100 font-serif selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
      {/* 19. Ultra-Minimal Luxury Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40 py-8 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-lg tracking-[0.3em] font-normal text-white hover:text-amber-500 transition-colors uppercase">
          MONUMENT
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] font-sans tracking-[0.3em] text-neutral-500 uppercase">
          <a href="#hero" className="hover:text-white transition-colors">Manifesto</a>
          <a href="#slider" className="hover:text-white transition-colors">Portfolios</a>
          <a href="#curators" className="hover:text-white transition-colors">Elite advisors</a>
        </div>

        <Link to="/" className="text-[10px] font-sans tracking-[0.2em] border-b border-amber-500 text-amber-500 pb-1 hover:text-white hover:border-white transition-colors uppercase">
          Exit
        </Link>
      </nav>

      {/* 20. Full-Screen Luxury Cinematic Hero */}
      <header id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-neutral-950">
          <motion.img 
            src={monumentData.hero.image} 
            alt="Spectacular infinity pool estate" 
            initial={{ scale: 1.15, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/80" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          <span className="text-xs font-sans tracking-[0.4em] text-amber-500 uppercase block mb-6 animate-pulse">
            PRIVATE LISTING AGENTS
          </span>
          
          <h1 className="text-6xl md:text-9xl tracking-[0.08em] font-normal leading-[1.05] uppercase text-white font-serif">
            BEYOND<br />
            <span className="italic font-light tracking-[0.15em] text-amber-500">ORDINARY.</span>
          </h1>
          
          <div className="w-20 h-[1px] bg-amber-500/50 mx-auto my-12" />
          
          <p className="text-sm md:text-base font-sans tracking-widest text-neutral-400 font-light max-w-xl mx-auto">
            {monumentData.hero.subtitle} We deal exclusively in architectural landmarks that defy normal spatial limits.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-neutral-600 text-xs font-sans tracking-widest uppercase">
          ESCROW VERIFICATION MANDATORY FOR DISCLOSURES
        </div>
      </header>

      {/* 22. Cinematic Property Slider Section */}
      <section id="slider" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] text-amber-500 uppercase">Featured Assets</span>
            <h2 className="text-4xl md:text-6xl font-normal tracking-wide text-white mt-3 uppercase">
              THE MONOLITHS
            </h2>
          </div>
          <span className="text-xs font-sans tracking-[0.2em] text-neutral-500 uppercase">
            0{activePropertyIndex + 1} / 0{monumentData.properties.length} Active Slides
          </span>
        </div>

        {/* Big Interactive Slider Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Big Image Display with distortion/reveal styling */}
          <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900 border border-neutral-900 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProperty.id}
                src={activeProperty.image}
                alt={activeProperty.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
              <button 
                onClick={() => handleSelectProperty(activeProperty)}
                className="bg-black/80 backdrop-blur-md border border-amber-500/30 hover:border-amber-500 text-amber-500 font-sans tracking-widest text-[10px] px-6 py-3 rounded uppercase font-bold flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>EXPOSE DETAILS</span>
              </button>
            </div>
          </div>

          {/* Slider textual details panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-sans tracking-[0.25em] text-amber-500 uppercase block">
                {activeProperty.type}
              </span>
              <h3 className="text-3xl font-normal text-white uppercase tracking-wider">
                {activeProperty.title}
              </h3>
              <span className="block font-sans text-xl font-bold tracking-widest text-amber-500">
                {activeProperty.price}
              </span>
            </div>

            <p className="text-sm font-sans tracking-wide text-neutral-400 font-light leading-relaxed">
              {activeProperty.description}
            </p>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-sans tracking-widest text-neutral-500 uppercase border-t border-b border-neutral-900 py-4">
              <div>
                <span className="block text-white text-base font-serif mb-1">{activeProperty.beds}</span>
                <span>BEDS</span>
              </div>
              <div>
                <span className="block text-white text-base font-serif mb-1">{activeProperty.baths}</span>
                <span>BATHS</span>
              </div>
              <div>
                <span className="block text-white text-base font-serif mb-1">{activeProperty.area.split(" ")[0]}</span>
                <span>SQFT</span>
              </div>
            </div>

            {/* Slider bullet controls */}
            <div className="flex gap-2 justify-center lg:justify-start">
              {monumentData.properties.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePropertyIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${activePropertyIndex === idx ? "bg-amber-500 w-8" : "bg-neutral-800"}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-neutral-950 py-32 border-t border-b border-neutral-900 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-sans tracking-[0.3em] text-amber-500 uppercase">Private Curation</span>
            <h3 className="text-3xl md:text-5xl font-normal tracking-wide text-white leading-tight uppercase">
              SUBTERRANEAN RESTORATION
            </h3>
            
            <p className="text-sm font-sans tracking-wide text-neutral-400 font-light leading-relaxed">
              Our bespoke monument restorer agents advise private family offices on structuring secure subterranean vaults, armored shelters, and indoor gold vault spaces.
            </p>

            <div className="p-4 border border-neutral-900 bg-black flex gap-3 items-start">
              <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <span className="block font-sans text-xs tracking-widest text-white uppercase mb-1">Fortification standards</span>
                <p className="text-xs font-sans text-neutral-500 font-light">Custom electromagnetic shielding and triple filtration air locks built as standard.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img src={monumentData.interiors[0]} alt="Ultra luxury bedroom black gold" className="w-full h-[320px] object-cover rounded-lg border border-neutral-900" />
              <span className="text-[10px] font-sans tracking-widest text-neutral-500 uppercase block text-center">Suite Asset 01</span>
            </div>
            <div className="space-y-4 pt-12">
              <img src={monumentData.interiors[1]} alt="Ultra luxury bathroom gold" className="w-full h-[320px] object-cover rounded-lg border border-neutral-900" />
              <span className="text-[10px] font-sans tracking-widest text-neutral-500 uppercase block text-center">Suite Asset 02</span>
            </div>
          </div>

        </div>
      </section>

      {/* Agents Section */}
      <section id="curators" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-xs font-sans tracking-[0.3em] text-amber-500 uppercase">Acquisitions Group</span>
          <h2 className="text-4xl font-normal tracking-wide text-white uppercase">
            OUR GLOBAL MANAGING BROKERS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 max-w-3xl mx-auto">
          {monumentData.agents.map((agent, i) => (
            <div key={i} className="group text-center">
              <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 mb-6 border border-neutral-900 rounded-xl">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 transform scale-100 group-hover:scale-102"
                />
              </div>
              <h4 className="text-2xl font-normal tracking-wide text-white">{agent.name}</h4>
              <span className="text-[10px] font-sans text-amber-500 block uppercase tracking-widest mt-1">
                {agent.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Private Tour Request Form */}
      <section className="py-24 px-6 max-w-3xl mx-auto border-t border-neutral-900">
        <div className="text-center mb-16">
          <span className="text-xs font-sans tracking-[0.35em] text-amber-500 uppercase">Confidential Verification</span>
          <h2 className="text-3xl md:text-5xl font-normal text-white mt-3 uppercase tracking-wider">
            REQUEST A CONFIDENTIAL VIEWING
          </h2>
          <p className="text-xs font-sans text-neutral-500 mt-4 tracking-widest font-light leading-relaxed">
            All private viewings require a certified asset and escrow statement verifying capability prior to landmark disclosure.
          </p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert("Verification details submitted. Global Elite Advisor will call you."); }} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-sans tracking-widest text-neutral-500 uppercase mb-2">Escrow Bank Officer</label>
              <input required type="text" className="w-full bg-[#0A0A0A] border border-neutral-900 rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white font-sans" />
            </div>
            <div>
              <label className="block text-[10px] font-sans tracking-widest text-neutral-500 uppercase mb-2">Escrow Officer Email</label>
              <input required type="email" className="w-full bg-[#0A0A0A] border border-neutral-900 rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white font-sans" />
            </div>
          </div>
          <button type="submit" className="w-full bg-amber-500 text-black font-sans tracking-widest text-xs py-4 rounded font-bold hover:bg-amber-400 transition-colors uppercase">
            Submit Escrow Credentials
          </button>
        </form>
      </section>

      {/* 23. Monument Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProperty(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0A0A] border border-neutral-900 rounded-2xl max-w-xl w-full p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-2xl relative text-neutral-100"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-neutral-900 hover:border-amber-500 text-[#8892B0] hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-sans tracking-widest text-amber-500 uppercase block mb-1">
                {selectedProperty.type} Landmark Details
              </span>
              
              <h3 className="font-serif text-2xl text-white mb-4">
                {selectedProperty.title}
              </h3>

              <div className="relative h-[220px] rounded-xl overflow-hidden mb-6 bg-neutral-950 border border-neutral-900 group">
                <img src={selectedProperty.images?.[activeImgIdx] || selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
                {selectedProperty.images && selectedProperty.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/90 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-colors font-mono"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev + 1) % selectedProperty.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/90 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-colors font-mono"
                    >
                      &rarr;
                    </button>
                    <div className="absolute bottom-2 right-2 bg-black/90 px-2 py-0.5 rounded text-[10px] font-mono text-amber-500">
                      {activeImgIdx + 1} / {selectedProperty.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 border border-neutral-900 p-4 rounded-xl bg-black mb-6 font-mono text-xs">
                <div>
                  <span className="text-[9px] uppercase tracking-wider block">Acquisition Value</span>
                  <span className="font-bold text-base text-amber-500">{selectedProperty.price}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider block">Region Zoned</span>
                  <span className="font-bold text-sm text-white">{selectedProperty.location.split(",")[0]}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs mb-6 font-mono text-neutral-500">
                <div className="bg-black p-2 rounded-lg border border-neutral-900">
                  <span className="block font-bold text-white">{selectedProperty.bedrooms || selectedProperty.beds} BHK</span>
                  <span className="text-[8px] uppercase">Structure</span>
                </div>
                <div className="bg-black p-2 rounded-lg border border-neutral-900">
                  <span className="block font-bold text-white">{selectedProperty.bathrooms || selectedProperty.baths}</span>
                  <span className="text-[8px] uppercase">Baths</span>
                </div>
                <div className="bg-black p-2 rounded-lg border border-neutral-900">
                  <span className="block font-bold text-white">{selectedProperty.area}</span>
                  <span className="text-[8px] uppercase">Area</span>
                </div>
              </div>

              <div className="mb-6 space-y-4 text-xs font-light text-neutral-400 leading-relaxed font-sans">
                <p>{selectedProperty.description}</p>
                
                <div>
                  <span className="font-sans text-[10px] text-amber-500 uppercase tracking-widest block mb-2">Systems Included</span>
                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px] text-neutral-350">
                    {(selectedProperty.amenities || selectedProperty.features).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Tabs */}
              <div className="mt-6 pt-6 border-t border-neutral-900">
                <div className="flex border-b border-neutral-900 mb-4">
                  <button 
                    onClick={() => { setActiveFormTab("enquiry"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 pr-4 text-xs font-sans tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "enquiry" ? "border-amber-500 text-white font-bold" : "border-transparent text-neutral-500"}`}
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => { setActiveFormTab("visit"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 px-4 text-xs font-sans tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "visit" ? "border-amber-500 text-white font-bold" : "border-transparent text-neutral-400"}`}
                  >
                    Schedule Visit
                  </button>
                </div>

                {formSuccess ? (
                  <div className="bg-black border border-amber-500/20 text-amber-500 p-4 rounded text-xs font-mono text-center">
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
                    className="space-y-3 font-sans"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[8px] font-sans tracking-widest text-neutral-500 uppercase mb-1">Name</label>
                        <input required type="text" className="w-full bg-black border border-neutral-900 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500" />
                      </div>
                      <div>
                        <label className="block text-[8px] font-sans tracking-widest text-neutral-500 uppercase mb-1">Phone</label>
                        <input required type="tel" className="w-full bg-black border border-neutral-900 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[8px] font-sans tracking-widest text-neutral-500 uppercase mb-1">Email</label>
                      <input required type="email" className="w-full bg-black border border-neutral-900 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500" />
                    </div>

                    {activeFormTab === "enquiry" ? (
                      <div>
                        <label className="block text-[8px] font-sans tracking-widest text-neutral-500 uppercase mb-1">Message</label>
                        <textarea 
                          required 
                          rows={2} 
                          defaultValue={`I am interested in acquiring the private asset: ${selectedProperty.title} (ID: ${selectedProperty.id}).`}
                          className="w-full bg-black border border-neutral-900 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[8px] font-sans tracking-widest text-neutral-500 uppercase mb-1">Date</label>
                          <input required type="date" className="w-full bg-black border border-neutral-900 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500" />
                        </div>
                        <div>
                          <label className="block text-[8px] font-sans tracking-widest text-neutral-500 uppercase mb-1">Time</label>
                          <input required type="time" className="w-full bg-black border border-neutral-900 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500" />
                        </div>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={formSubmitting}
                      className="w-full bg-amber-500 text-black font-sans font-bold tracking-widest text-xs py-3 rounded hover:bg-amber-400 disabled:opacity-50 transition-colors uppercase"
                    >
                      {formSubmitting ? "Submitting..." : activeFormTab === "enquiry" ? "Send Acquisition Inquiry" : "Schedule Private viewing"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-black border-t border-neutral-900 py-16 px-6 text-center text-xs font-sans tracking-[0.2em] text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span>© {new Date().getFullYear()} MONUMENT ESTATES LTD. VALUATION PRIVILEGES MANDATORY.</span>
          <div className="flex gap-4">
            <Link to="/" className="text-amber-500 hover:underline">Select Template</Link>
            <span>Legal Notices</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
