import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Sprout, Wind, Sun, Droplets, Info, Heart, ArrowRight } from "lucide-react";
import { terraData } from "../../data/terra";

export default function TerraLiving() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [activeFormTab, setActiveFormTab] = useState("enquiry"); // "enquiry" or "visit"
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");
  
  // Search / Filters state
  const [filterSolarOnly, setFilterSolarOnly] = useState(false);
  const [filterNaturalOnly, setFilterNaturalOnly] = useState(false);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => {
      const updated = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const handleSelectProperty = (prop) => {
    setSelectedProperty(prop);
    setActiveImgIdx(0);
    setActiveFormTab("enquiry");
    setFormSuccess("");
    setFormError("");
  };

  const filteredProperties = terraData.properties.filter(prop => {
    if (filterSolarOnly && !prop.ecoAttributes.solar) return false;
    if (filterNaturalOnly && !prop.ecoAttributes.naturalMaterials) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F6F5F2] text-[#2D3934] font-sans selection:bg-emerald-700 selection:text-white">
      
      {/* 19. Organic Rounded Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <nav className="bg-white/80 backdrop-blur-md border border-emerald-900/5 rounded-2xl px-6 py-4 flex justify-between items-center shadow-sm">
          <Link to="/" className="flex items-center gap-2 group text-emerald-800 font-bold">
            <Sprout className="w-5 h-5 text-emerald-600 animate-pulse" />
            <span className="font-display tracking-widest text-sm uppercase">
              TERRA_LIVING
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-widest text-emerald-900/60 uppercase">
            <a href="#hero" className="hover:text-emerald-700 transition-colors">Overview</a>
            <a href="#properties" className="hover:text-emerald-700 transition-colors">Eco Catalog</a>
            <a href="#materials" className="hover:text-emerald-700 transition-colors">Bio-Materials</a>
            <a href="#agents" className="hover:text-emerald-700 transition-colors">Advisors</a>
          </div>

          <Link to="/" className="text-[10px] font-mono tracking-widest bg-emerald-750 border border-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-full transition-colors uppercase">
            Market
          </Link>
        </nav>
      </div>

      {/* 20. Nature + Home Hero Section */}
      <header id="hero" className="max-w-6xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 border border-emerald-200 rounded-full text-xs font-mono text-emerald-800">
            <Wind className="w-3.5 h-3.5" />
            <span>100% CARBON NEUTRAL PROPERTIES</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-light text-[#1F2C27] tracking-tight leading-tight">
            ORGANIC HOMES IN HARMONY WITH <span className="text-emerald-700 font-normal">NATURE.</span>
          </h1>

          <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-light">
            {terraData.hero.subtitle} Crafted from timber, earth, and light to achieve high efficiency, healthy air volume, and circular lifespan.
          </p>

          {/* Animated Sustainability Statistics */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-950/5">
            {terraData.hero.sustainabilityStats.map((stat, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-emerald-900/5">
                <span className="block text-xl font-bold text-emerald-800">{stat.rating}</span>
                <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mt-1">{stat.metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Parallax Organic Image Composition */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative overflow-hidden aspect-[4/3] rounded-3xl bg-neutral-200 shadow-xl border border-emerald-900/5">
            <motion.img 
              src={terraData.hero.image} 
              alt="Sustainable woodland home" 
              initial={{ scale: 1.1, opacity: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Organic Element Tag */}
          <div className="absolute -bottom-6 -right-6 bg-white border border-emerald-900/5 p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-xs">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-mono text-neutral-500 uppercase">Energy Resource</span>
              <span className="text-xs font-bold text-[#1F2C27]">Zero-Grid Active Solar Arrays</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sustainable Search and Properties Catalog */}
      <section id="properties" className="max-w-6xl mx-auto px-6 py-20 border-t border-emerald-900/5">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-emerald-700 uppercase">Certified Catalog</span>
            <h2 className="text-3xl md:text-5xl font-light text-[#1F2C27] tracking-tight mt-2">SUSTAINABLE LIVING</h2>
          </div>

          {/* 21. Working Sustainability Filters */}
          <div className="flex flex-wrap items-center gap-4 bg-white p-3 rounded-2xl border border-emerald-900/5">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Filters:</span>
            
            <label className="flex items-center gap-2 text-xs font-mono cursor-pointer">
              <input 
                type="checkbox" 
                checked={filterSolarOnly}
                onChange={(e) => setFilterSolarOnly(e.target.checked)}
                className="rounded border-emerald-350 text-emerald-600 focus:ring-emerald-500" 
              />
              <span className="uppercase tracking-wider">Active Solar</span>
            </label>

            <label className="flex items-center gap-2 text-xs font-mono cursor-pointer">
              <input 
                type="checkbox" 
                checked={filterNaturalOnly}
                onChange={(e) => setFilterNaturalOnly(e.target.checked)}
                className="rounded border-emerald-350 text-emerald-600 focus:ring-emerald-500" 
              />
              <span className="uppercase tracking-wider">Natural Timber</span>
            </label>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleSelectProperty(property)}
                  className="group cursor-pointer bg-white border border-emerald-900/5 hover:border-emerald-600/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-[240px] overflow-hidden bg-neutral-100">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700" />
                    
                    <button 
                      onClick={(e) => toggleFavorite(property.id, e)}
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-emerald-700 shadow-sm"
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-emerald-600 text-emerald-600" : ""}`} />
                    </button>
                    
                    <span className="absolute bottom-4 left-4 bg-emerald-50 text-emerald-800 border border-emerald-100 font-mono text-[9px] px-2 py-0.5 rounded-full font-bold uppercase">
                      {property.type}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold text-[#1F2C27] text-base group-hover:text-emerald-700 transition-colors">
                        {property.title}
                      </h4>
                      <span className="font-mono text-emerald-700 text-sm font-bold">{property.price}</span>
                    </div>

                    <p className="text-xs text-neutral-500 font-light line-clamp-2 mb-6">
                      {property.description}
                    </p>

                    <div className="pt-4 border-t border-emerald-950/5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <div className="flex gap-4">
                        <span>{property.beds} BD</span>
                        <span>{property.baths} BA</span>
                        <span>{property.area}</span>
                      </div>
                      <span className="text-emerald-600 font-bold group-hover:underline">ECO SPEC</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-neutral-500 font-mono text-sm">
                No active eco properties matching the checked criteria.
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Materials Cards Section */}
      <section id="materials" className="bg-[#1E2C26] text-white py-24 border-t border-emerald-950 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Circular Sourcing</span>
            <h3 className="text-3xl md:text-5xl font-light text-white tracking-tight mt-2 leading-tight">
              INTERACTIVE BIO-MATERIALS
            </h3>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Every Terra structure registers a digital material passport, tracking sourcing locations, carbon capture yields, and demolition recyclability indices.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {terraData.materials.map((mat, i) => (
              <div key={i} className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-3xl flex flex-col justify-between h-[220px]">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-450 mb-4 font-mono font-bold text-xs">
                  0{i + 1}
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm mb-1">{mat.name}</h5>
                  <p className="text-[11px] text-neutral-400 font-light leading-relaxed">{mat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Advisors Section */}
      <section id="agents" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-xs font-mono tracking-widest text-emerald-700 uppercase">Eco Partners</span>
          <h2 className="text-3xl md:text-5xl font-light text-[#1F2C27] tracking-tight mt-2">OUR SPECIALISTS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {terraData.agents.map((agent, i) => (
            <div key={i} className="bg-white border border-emerald-900/5 p-4 rounded-3xl text-center shadow-sm">
              <div className="relative overflow-hidden aspect-[4/5] rounded-2xl bg-neutral-100 mb-4">
                <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-[#1F2C27] text-base">{agent.name}</h4>
              <span className="text-xs font-mono text-emerald-700">{agent.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 23. Terra Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProperty(null)}
            className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-emerald-900/5 rounded-3xl max-w-xl w-full p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-2xl relative text-[#2D3934]"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-neutral-200 hover:border-emerald-600 text-neutral-400 hover:text-[#2D3934] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest block mb-1">
                Eco Certified Unit
              </span>
              
              <h3 className="font-bold text-2xl text-[#1F2C27] mb-4">
                {selectedProperty.title}
              </h3>

              <div className="relative h-[220px] rounded-2xl overflow-hidden mb-6 bg-neutral-100 group">
                <img src={selectedProperty.images?.[activeImgIdx] || selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
                {selectedProperty.images && selectedProperty.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-emerald-600 hover:text-white text-emerald-950 flex items-center justify-center shadow transition-colors font-mono"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev + 1) % selectedProperty.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-emerald-600 hover:text-white text-emerald-950 flex items-center justify-center shadow transition-colors font-mono"
                    >
                      &rarr;
                    </button>
                    <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-800">
                      {activeImgIdx + 1} / {selectedProperty.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 border border-emerald-100 p-4 rounded-2xl bg-emerald-50/40 mb-6 font-mono text-xs text-neutral-600">
                <div>
                  <span className="text-[9px] uppercase block">Acquisition Bid</span>
                  <span className="font-bold text-base text-emerald-800">{selectedProperty.price}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase block">Zoned Location</span>
                  <span className="font-bold text-sm text-[#1F2C27]">{selectedProperty.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs mb-6">
                <div className="bg-emerald-50/40 p-2 rounded-xl border border-emerald-100">
                  <span className="block font-bold text-emerald-850">{selectedProperty.bedrooms || selectedProperty.beds} BHK</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Size</span>
                </div>
                <div className="bg-emerald-50/40 p-2 rounded-xl border border-emerald-100">
                  <span className="block font-bold text-emerald-850">{selectedProperty.bathrooms || selectedProperty.baths}</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Baths</span>
                </div>
                <div className="bg-emerald-50/40 p-2 rounded-xl border border-emerald-100">
                  <span className="block font-bold text-emerald-850">{selectedProperty.area}</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Area</span>
                </div>
              </div>

              <div className="mb-6 space-y-4 text-xs font-light text-neutral-600 leading-relaxed">
                <p>{selectedProperty.description}</p>
                
                <div>
                  <span className="font-mono text-[10px] text-emerald-700 uppercase tracking-widest block mb-2">Sustainable Attributes</span>
                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px] text-neutral-700">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span>Solar powered: {selectedProperty.ecoAttributes.solar ? "Yes" : "Optional"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span>Green roof: {selectedProperty.ecoAttributes.greenRoof ? "Yes" : "Optional"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Tabs */}
              <div className="mt-6 pt-6 border-t border-neutral-100">
                <div className="flex border-b border-neutral-200 mb-4">
                  <button 
                    onClick={() => { setActiveFormTab("enquiry"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 pr-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "enquiry" ? "border-emerald-600 text-emerald-950" : "border-transparent text-neutral-400"}`}
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => { setActiveFormTab("visit"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 px-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "visit" ? "border-emerald-600 text-emerald-950" : "border-transparent text-neutral-400"}`}
                  >
                    Schedule Visit
                  </button>
                </div>

                {formSuccess ? (
                  <div className="bg-emerald-950/10 border border-emerald-500/20 text-emerald-800 p-4 rounded-2xl text-xs font-mono text-center">
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
                        <label className="block text-[8px] font-mono text-neutral-450 uppercase mb-1">Name</label>
                        <input required type="text" className="w-full bg-[#FAF9F6] border border-neutral-200 rounded-xl px-2.5 py-1.5 text-xs text-[#2D3934] focus:outline-none focus:border-emerald-600" />
                      </div>
                      <div>
                        <label className="block text-[8px] font-mono text-neutral-450 uppercase mb-1">Phone</label>
                        <input required type="tel" className="w-full bg-[#FAF9F6] border border-neutral-200 rounded-xl px-2.5 py-1.5 text-xs text-[#2D3934] focus:outline-none focus:border-emerald-600" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[8px] font-mono text-neutral-450 uppercase mb-1">Email</label>
                      <input required type="email" className="w-full bg-[#FAF9F6] border border-neutral-200 rounded-xl px-2.5 py-1.5 text-xs text-[#2D3934] focus:outline-none focus:border-emerald-600" />
                    </div>

                    {activeFormTab === "enquiry" ? (
                      <div>
                        <label className="block text-[8px] font-mono text-neutral-450 uppercase mb-1">Message</label>
                        <textarea 
                          required 
                          rows={2} 
                          defaultValue={`I am interested in ${selectedProperty.title} (ID: ${selectedProperty.id}) in ${selectedProperty.location}.`}
                          className="w-full bg-[#FAF9F6] border border-neutral-200 rounded-xl px-2.5 py-1.5 text-xs text-[#2D3934] focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[8px] font-mono text-neutral-450 uppercase mb-1">Date</label>
                          <input required type="date" className="w-full bg-[#FAF9F6] border border-neutral-200 rounded-xl px-2.5 py-1.5 text-xs text-[#2D3934] focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-[8px] font-mono text-neutral-450 uppercase mb-1">Time</label>
                          <input required type="time" className="w-full bg-[#FAF9F6] border border-neutral-200 rounded-xl px-2.5 py-1.5 text-xs text-[#2D3934] focus:outline-none" />
                        </div>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={formSubmitting}
                      className="w-full bg-[#1E2C26] text-white font-mono font-bold tracking-widest text-xs py-3 rounded-2xl hover:bg-emerald-950 disabled:opacity-50 transition-colors uppercase"
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
      <footer className="bg-[#1E2C26] border-t border-emerald-950 py-12 px-6 text-center text-xs font-mono text-neutral-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} TERRA LIVING HOLDINGS. CARBON CERTIFIED.</span>
          <div className="flex gap-4">
            <Link to="/" className="text-emerald-400 hover:underline">Select Template</Link>
            <span>Confidential Sourcing</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
