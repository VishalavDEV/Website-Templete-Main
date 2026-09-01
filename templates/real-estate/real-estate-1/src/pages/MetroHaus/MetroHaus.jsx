import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Heart, Sliders, Play, Plus, Phone } from "lucide-react";
import { metrohausData } from "../../data/metrohaus";

export default function MetroHaus() {
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
  
  // Search / Room count filters
  const [activeBedrooms, setActiveBedrooms] = useState("All");
  const [priceBudget, setPriceBudget] = useState(25000000); // 2.5 Crore max limit default

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

  const filteredProperties = metrohausData.properties.filter(prop => {
    const bedroomsCount = prop.bedrooms || prop.beds;
    const bedMatch = activeBedrooms === "All" || bedroomsCount.toString() === activeBedrooms;
    const priceVal = prop.rawPrice;
    return bedMatch && priceVal <= priceBudget;
  });

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-red-500 selection:text-white">
      
      {/* 19. Modern Compact Navigation */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <nav className="bg-black text-white rounded-xl px-6 py-4 flex justify-between items-center shadow-md">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-4 h-4 bg-red-500 rounded-none rotate-45 transform" />
            <span className="font-display font-black tracking-tight text-base uppercase text-white group-hover:text-red-500 transition-colors">
              METROHAUS
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
            <a href="#hero" className="hover:text-white transition-colors">Catalog</a>
            <a href="#properties" className="hover:text-white transition-colors">Apartments</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#agents" className="hover:text-white transition-colors">Team</a>
          </div>

          <Link to="/" className="text-[10px] font-mono tracking-widest text-red-500 hover:text-white transition-colors uppercase">
            Exit
          </Link>
        </nav>
      </div>

      {/* 20. Typography + Apartment Image Hero */}
      <header id="hero" className="max-w-5xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Large Bold Block Text */}
        <div className="space-y-6">
          <div className="bg-red-500 text-white text-[10px] font-mono tracking-widest px-3 py-1 inline-block font-bold uppercase">
            Active Urban Living
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-neutral-900 leading-none">
            CITY.<br />
            STYLE.<br />
            <span className="text-red-500">HOME.</span>
          </h1>
          
          <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-sm">
            {metrohausData.hero.subtitle} Bold floor plans constructed for creators, founders, and active city dwellers.
          </p>

          <div className="flex gap-4">
            <a href="#properties" className="bg-black text-white text-xs font-mono tracking-widest px-6 py-4 font-bold hover:bg-neutral-800 transition-colors uppercase">
              Browse Listings
            </a>
            <a href="#gallery" className="border border-neutral-300 text-neutral-900 text-xs font-mono tracking-widest px-6 py-4 font-bold hover:bg-neutral-50 transition-colors uppercase">
              View Interiors
            </a>
          </div>
        </div>

        {/* Right Side: Aspect Box Frame */}
        <div className="relative border-4 border-black p-2">
          <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
            <img src={metrohausData.hero.image} alt="Metrohaus style exterior" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-red-500 text-white font-mono text-xs p-3 font-bold uppercase">
            Rent/Buy
          </div>
        </div>

      </header>

      {/* Room Filters & Properties Section */}
      <section id="properties" className="bg-neutral-50 py-24 px-6 md:px-12 border-t border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-red-500 uppercase">Urban Spaces</span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-neutral-900 mt-2 uppercase">
                APARTMENT FINDER
              </h2>
            </div>

            {/* Room Count Selectors */}
            <div className="flex items-center gap-2 bg-neutral-200/60 p-1 rounded-lg">
              {["All", "1", "2"].map(num => (
                <button
                  key={num}
                  onClick={() => setActiveBedrooms(num)}
                  className={`text-[10px] font-mono tracking-widest px-4 py-2 rounded font-bold uppercase transition-colors ${activeBedrooms === num ? "bg-red-500 text-white" : "text-neutral-600 hover:text-neutral-900"}`}
                >
                  {num === "All" ? "All Beds" : `${num} Bed`}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Limit Slider */}
          <div className="mb-12 max-w-sm">
            <div className="flex justify-between items-center text-xs font-mono text-neutral-500 mb-2">
              <span>MAX BUDGET:</span>
              <span className="text-red-500 font-bold">
                {priceBudget >= 10000000 ? `₹${(priceBudget / 10000000).toFixed(2)} Cr` : `₹${(priceBudget / 100000).toFixed(0)} Lakh`}
              </span>
            </div>
            <input 
              type="range"
              min={5000000}
              max={25000000}
              step={1000000}
              value={priceBudget}
              onChange={(e) => setPriceBudget(Number(e.target.value))}
              className="w-full accent-red-500 h-1.5 bg-neutral-200 rounded-lg cursor-pointer"
            />
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
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    onClick={() => handleSelectProperty(property)}
                    className="group cursor-pointer bg-white border border-neutral-200 hover:border-red-500/40 rounded-xl overflow-hidden flex flex-col justify-between"
                  >
                    <div className="relative h-[220px] overflow-hidden bg-neutral-100">
                      <img src={property.image} alt={property.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500" />
                      
                      <button 
                        onClick={(e) => toggleFavorite(property.id, e)}
                        className="absolute top-4 right-4 z-20 w-8 h-8 rounded bg-white flex items-center justify-center text-neutral-450 hover:text-red-500 shadow"
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : ""}`} />
                      </button>

                      <span className="absolute bottom-4 left-4 bg-red-500 text-white font-mono text-[9px] px-2 py-0.5 font-bold uppercase">
                        {property.type}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-display font-bold text-neutral-900 text-base group-hover:text-red-500 transition-colors">
                          {property.title}
                        </h4>
                        <span className="font-mono text-red-500 font-bold">{property.price}</span>
                      </div>

                      <p className="text-xs text-neutral-500 font-light line-clamp-2 mb-6">
                        {property.description}
                      </p>

                      <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                        <div className="flex gap-4">
                          <span>{property.beds} BD</span>
                          <span>{property.baths} BA</span>
                          <span>{property.area}</span>
                        </div>
                        <span className="text-red-500 font-bold group-hover:underline">VIEW</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center text-neutral-400 font-mono text-sm">
                  No apartments matching the bedroom count/budget.
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-mono tracking-widest text-red-500 uppercase">Interactive Spaces</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-neutral-900 mt-2 uppercase">
            DWELLING GALLERY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden bg-neutral-900 h-[280px]">
            <img src={metrohausData.interiors[0]} alt="Interior space yellow chair" className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-mono text-xs tracking-widest font-bold uppercase">
              Lounge Layout
            </div>
          </div>
          <div className="relative group overflow-hidden bg-neutral-900 h-[280px]">
            <img src={metrohausData.interiors[1]} alt="Interior space brick bath" className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-mono text-xs tracking-widest font-bold uppercase">
              Bath Layout
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-24 bg-black text-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <span className="text-xs font-mono tracking-widest text-red-500 uppercase">Consultation Team</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white mt-2 uppercase">
              MEET THE LIFESTYLE SPECIALISTS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-2xl mx-auto md:mx-0">
            {metrohausData.agents.map((agent, i) => (
              <div key={i} className="group bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex flex-col justify-between">
                <div className="relative overflow-hidden aspect-[4/5] rounded bg-neutral-950 mb-4">
                  <img src={agent.image} alt={agent.name} className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-base">{agent.name}</h4>
                  <span className="text-xs font-mono text-red-500">{agent.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 23. Metrohaus Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProperty(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-neutral-200 rounded-2xl max-w-xl w-full p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-2xl relative text-neutral-900"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-neutral-200 hover:border-red-500 text-neutral-400 hover:text-neutral-900 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block mb-1">
                {selectedProperty.type} Space Specs
              </span>
              
              <h3 className="font-display font-black text-2xl text-neutral-900 mb-4">
                {selectedProperty.title}
              </h3>

              <div className="relative h-[220px] rounded-xl overflow-hidden mb-6 bg-neutral-100 group">
                <img src={selectedProperty.images?.[activeImgIdx] || selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
                {selectedProperty.images && selectedProperty.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-red-500 hover:text-white text-neutral-950 flex items-center justify-center shadow transition-colors font-mono"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev + 1) % selectedProperty.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-red-500 hover:text-white text-neutral-950 flex items-center justify-center shadow transition-colors font-mono"
                    >
                      &rarr;
                    </button>
                    <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-0.5 rounded text-[10px] font-mono text-red-500">
                      {activeImgIdx + 1} / {selectedProperty.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 border border-neutral-200 p-4 rounded-xl bg-neutral-50 mb-6 font-mono text-xs text-neutral-600">
                <div>
                  <span className="text-[9px] uppercase block">Valued Price</span>
                  <span className="font-bold text-base text-red-500">{selectedProperty.price}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase block">Urban Center</span>
                  <span className="font-bold text-sm text-neutral-900">{selectedProperty.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs mb-6">
                <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-200">
                  <span className="block font-bold text-neutral-850">{selectedProperty.bedrooms || selectedProperty.beds} BHK</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Structure</span>
                </div>
                <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-200">
                  <span className="block font-bold text-neutral-850">{selectedProperty.bathrooms || selectedProperty.baths}</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Baths</span>
                </div>
                <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-200">
                  <span className="block font-bold text-neutral-850">{selectedProperty.area}</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Area</span>
                </div>
              </div>

              <div className="mb-6 space-y-4 text-xs font-light text-neutral-600 leading-relaxed">
                <p>{selectedProperty.description}</p>
                
                <div>
                  <span className="font-mono text-[10px] text-red-500 uppercase tracking-widest block mb-2">Internal features</span>
                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px] text-neutral-700">
                    {(selectedProperty.amenities || selectedProperty.features).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-none rotate-45 transform" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Tabs */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex border-b border-neutral-200 mb-4">
                  <button 
                    onClick={() => { setActiveFormTab("enquiry"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 pr-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "enquiry" ? "border-red-500 text-neutral-900 font-bold" : "border-transparent text-neutral-400"}`}
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => { setActiveFormTab("visit"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 px-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "visit" ? "border-red-500 text-neutral-900 font-bold" : "border-transparent text-neutral-400"}`}
                  >
                    Schedule Visit
                  </button>
                </div>

                {formSuccess ? (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded text-xs font-mono text-center">
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
                        <input required type="text" className="w-full bg-[#FAF9F6] border border-neutral-250 rounded px-2.5 py-1.5 text-xs text-neutral-900 focus:outline-none focus:border-red-500" />
                      </div>
                      <div>
                        <label className="block text-[8px] font-mono text-neutral-450 uppercase mb-1">Phone</label>
                        <input required type="tel" className="w-full bg-[#FAF9F6] border border-neutral-250 rounded px-2.5 py-1.5 text-xs text-neutral-900 focus:outline-none focus:border-red-500" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[8px] font-mono text-neutral-450 uppercase mb-1">Email</label>
                      <input required type="email" className="w-full bg-[#FAF9F6] border border-neutral-250 rounded px-2.5 py-1.5 text-xs text-neutral-900 focus:outline-none focus:border-red-500" />
                    </div>

                    {activeFormTab === "enquiry" ? (
                      <div>
                        <label className="block text-[8px] font-mono text-neutral-450 uppercase mb-1">Message</label>
                        <textarea 
                          required 
                          rows={2} 
                          defaultValue={`I am interested in MetroHaus unit: ${selectedProperty.title} (ID: ${selectedProperty.id}).`}
                          className="w-full bg-[#FAF9F6] border border-neutral-250 rounded px-2.5 py-1.5 text-xs text-neutral-900 focus:outline-none focus:border-red-500"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[8px] font-mono text-neutral-450 uppercase mb-1">Date</label>
                          <input required type="date" className="w-full bg-[#FAF9F6] border border-neutral-250 rounded px-2.5 py-1.5 text-xs text-neutral-900 focus:outline-none focus:border-red-500" />
                        </div>
                        <div>
                          <label className="block text-[8px] font-mono text-neutral-450 uppercase mb-1">Time</label>
                          <input required type="time" className="w-full bg-[#FAF9F6] border border-neutral-250 rounded px-2.5 py-1.5 text-xs text-neutral-900 focus:outline-none focus:border-red-500" />
                        </div>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={formSubmitting}
                      className="w-full bg-red-500 text-white font-mono font-bold tracking-widest text-xs py-3 rounded hover:bg-red-650 transition-colors uppercase"
                    >
                      {formSubmitting ? "Submitting Request..." : activeFormTab === "enquiry" ? "Send Sourcing Inquiry" : "Book Private Tour"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 text-center text-xs font-mono text-neutral-500 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} METROHAUS APARTMENT BRAND.</span>
          <div className="flex gap-4">
            <Link to="/" className="text-red-500 hover:underline">Select Template</Link>
            <span>Confidential Sourcing</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
