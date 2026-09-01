import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Calendar, Heart, Shield, Award, MapPin } from "lucide-react";
import { heritageData } from "../../data/heritage";

export default function HeritageHomes() {
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
  
  // Search / Style Filters
  const [activeStyle, setActiveStyle] = useState("All");
  const [searchLocation, setSearchLocation] = useState("All");

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

  const filteredProperties = heritageData.properties.filter(prop => {
    const styleMatch = activeStyle === "All" || prop.propertyType === activeStyle;
    const locMatch = searchLocation === "All" || prop.location.includes(searchLocation);
    return styleMatch && locMatch;
  });

  return (
    <div className="min-h-screen bg-[#F4F0EA] text-[#3E2723] font-serif selection:bg-[#8B5A2B] selection:text-white">
      
      {/* 19. Classic Serif-Inspired Navigation */}
      <nav className="border-b border-[#E0D8CE] bg-[#F4F0EA]/95 backdrop-blur-md sticky top-0 z-40 py-6 px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-start group">
          <span className="font-serif italic text-lg tracking-wide font-semibold text-[#4E342E] group-hover:text-[#8B5A2B] transition-colors">
            Heritage Homes
          </span>
          <span className="text-[9px] font-sans tracking-[0.25em] text-[#8B5A2B] uppercase">ESTABLISHED 1892</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] font-sans tracking-widest text-[#7D6B58] uppercase">
          <a href="#hero" className="hover:text-[#4E342E] transition-colors">Timeless</a>
          <a href="#timeline" className="hover:text-[#4E342E] transition-colors">Timeline</a>
          <a href="#properties" className="hover:text-[#4E342E] transition-colors">Manors</a>
          <a href="#agents" className="hover:text-[#4E342E] transition-colors">Partners</a>
        </div>

        <Link to="/" className="text-[10px] font-sans tracking-widest text-[#8B5A2B] hover:text-[#4E342E] transition-colors uppercase border border-[#8B5A2B]/40 hover:border-[#8B5A2B] px-4 py-2 rounded">
          MARKETPLACE
        </Link>
      </nav>

      {/* 20. Classic Editorial Hero Layout */}
      <header id="hero" className="max-w-6xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative overflow-hidden aspect-[4/3] rounded-lg shadow-xl border border-[#E0D8CE]">
          <motion.img 
            src={heritageData.hero.image} 
            alt="Classic cottage manor" 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6">
          <span className="text-xs font-sans tracking-[0.25em] text-[#8B5A2B] uppercase block">
            THE HERITAGE COLLECTION
          </span>
          
          <h1 className="text-4xl md:text-6xl font-serif text-[#3E2723] tracking-tight leading-tight font-light">
            TIMELESS CHARACTERS OF <span className="italic">ENDURING QUALITY.</span>
          </h1>

          <p className="text-sm font-sans tracking-wide text-[#7D6B58] font-light leading-relaxed">
            {heritageData.hero.subtitle} We represent historic structures built with native materials, preserved features, and warm landscaping.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#E0D8CE] font-sans text-xs">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#8B5A2B]" />
              <div>
                <span className="block font-bold text-[#4E342E]">Registered Historic</span>
                <span className="text-[10px] text-neutral-500">Certified Properties</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#8B5A2B]" />
              <div>
                <span className="block font-bold text-[#4E342E]">Preservation First</span>
                <span className="text-[10px] text-neutral-500">Original Restoration Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Historical Timeline Accordion */}
      <section id="timeline" className="bg-[#EBE5DB] py-20 px-6 md:px-12 border-t border-b border-[#E0D8CE]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-sans tracking-[0.25em] text-[#8B5A2B] uppercase">Our Journey</span>
            <h3 className="text-2xl md:text-4xl font-serif text-[#3E2723] tracking-tight mt-2 uppercase">
              TIMELINE OF LANDMARKS
            </h3>
          </div>

          <div className="space-y-4">
            {heritageData.hero.historyTimeline.map((item, idx) => (
              <div key={idx} className="bg-[#F4F0EA] p-5 rounded-lg border border-[#E0D8CE] flex gap-6 items-start">
                <div className="w-12 h-12 rounded bg-[#4E342E] flex items-center justify-center font-sans font-bold text-white text-xs shrink-0 shadow">
                  {item.year}
                </div>
                <div>
                  <h5 className="font-serif font-bold text-base text-[#3E2723] mb-1">{item.title}</h5>
                  <p className="text-xs font-sans text-[#7D6B58] font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Search and Property Directory */}
      <section id="properties" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-sans tracking-[0.25em] text-[#8B5A2B] uppercase">Historic Registry</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#3E2723] tracking-tight mt-2 uppercase">
              HERITAGE PROPERTIES
            </h2>
          </div>

          {/* Style filters */}
          <div className="flex flex-wrap gap-4 font-sans text-xs">
            {/* Style Selector */}
            <div>
              <label className="block text-[10px] font-sans text-[#8B5A2B] uppercase mb-1">Architecture Style</label>
              <select 
                value={activeStyle}
                onChange={(e) => setActiveStyle(e.target.value)}
                className="bg-white border border-[#E0D8CE] rounded px-3 py-2 text-xs focus:outline-none"
              >
                <option value="All">All Styles</option>
                <option value="Manor">Manors</option>
                <option value="Colonial">Colonials</option>
                <option value="Tudor">Tudors</option>
              </select>
            </div>

            {/* Location Selector */}
            <div>
              <label className="block text-[10px] font-sans text-[#8B5A2B] uppercase mb-1">District</label>
              <select 
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="bg-white border border-[#E0D8CE] rounded px-3 py-2 text-xs focus:outline-none"
              >
                <option value="All">All Districts</option>
                <option value="Savannah">Savannah</option>
                <option value="Charleston">Charleston</option>
                <option value="Boston">Boston</option>
              </select>
            </div>
          </div>
        </div>

        {/* Properties list */}
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
                  className="group cursor-pointer bg-white border border-[#E0D8CE] hover:border-[#8B5A2B]/40 rounded-lg overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative h-[250px] overflow-hidden bg-neutral-100 border-b border-[#E0D8CE]">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700" />
                    
                    <button 
                      onClick={(e) => toggleFavorite(property.id, e)}
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded bg-white flex items-center justify-center text-neutral-400 hover:text-[#8B5A2B] shadow-sm"
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-[#8B5A2B] text-[#8B5A2B]" : ""}`} />
                    </button>
                    
                    <span className="absolute bottom-4 left-4 bg-[#4E342E] text-white font-sans text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">
                      {property.type}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-serif font-bold text-[#3E2723] text-lg group-hover:text-[#8B5A2B] transition-colors">
                        {property.title}
                      </h4>
                      <span className="font-sans text-[#8B5A2B] text-sm font-bold">{property.price}</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-[#7D6B58] mb-4 font-sans">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{property.location}</span>
                    </div>

                    <p className="text-xs text-[#7D6B58] font-sans font-light line-clamp-2 mb-6">
                      {property.description}
                    </p>

                    <div className="pt-4 border-t border-[#E0D8CE] flex items-center justify-between text-[10px] font-sans text-neutral-450 uppercase">
                      <div className="flex gap-4">
                        <span>{property.beds} BD</span>
                        <span>{property.baths} BA</span>
                        <span>{property.area}</span>
                      </div>
                      <span className="text-[#8B5A2B] font-bold group-hover:underline">PROSPECT</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-neutral-450 font-sans text-sm">
                No historic manors match your search variables.
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Detail Gallery Section */}
      <section className="bg-[#EBE5DB] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-md">
            <span className="text-xs font-sans tracking-[0.25em] text-[#8B5A2B] uppercase">Material Studies</span>
            <h3 className="text-2xl md:text-4xl font-serif text-[#3E2723] tracking-tight mt-2 mb-6 uppercase">
              ARCHITECTURAL COMPOSITIONS
            </h3>
            <p className="text-xs font-sans tracking-wide text-[#7D6B58] font-light leading-relaxed mb-6">
              Our restorer teams evaluate historical foundations, original plaster mold contours, and native cedar structural trunks.
            </p>
            
            <div className="p-4 border-l-2 border-[#8B5A2B] bg-[#F4F0EA]">
              <span className="font-sans text-[10px] tracking-widest text-[#8B5A2B] uppercase block mb-1">Restoration Ethics</span>
              <p className="text-xs font-sans text-[#7D6B58] font-light">Original layout preserving keeps structural timber profiles entirely intact.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <img src={heritageData.interiors[0]} alt="Classic study fireplace" className="w-full h-[260px] object-cover rounded-lg border border-[#E0D8CE]" />
            <img src={heritageData.interiors[1]} alt="Traditional living room" className="w-full h-[260px] object-cover rounded-lg border border-[#E0D8CE]" />
          </div>

        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-xs font-sans tracking-[0.25em] text-[#8B5A2B] uppercase">Managing Partners</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#3E2723] tracking-tight mt-2">OUR BROKERS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {heritageData.agents.map((agent, i) => (
            <div key={i} className="bg-white border border-[#E0D8CE] p-4 rounded-lg text-center shadow-sm">
              <div className="relative overflow-hidden aspect-[4/5] rounded bg-neutral-100 mb-4">
                <img src={agent.image} alt={agent.name} className="w-full h-full object-cover grayscale" />
              </div>
              <h4 className="font-serif font-bold text-[#3E2723] text-lg">{agent.name}</h4>
              <span className="text-xs font-sans text-[#8B5A2B]">{agent.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 23. Heritage Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProperty(null)}
            className="fixed inset-0 z-50 bg-[#3E2723]/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F4F0EA] border border-[#E0D8CE] rounded-xl max-w-xl w-full p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-2xl relative text-[#3E2723]"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#E0D8CE] hover:border-[#8B5A2B] text-neutral-500 hover:text-[#3E2723] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-sans text-[#8B5A2B] uppercase tracking-widest block mb-1">
                Historic Prospect {selectedProperty.id}
              </span>
              
              <h3 className="font-serif font-bold text-2xl text-[#3E2723] mb-4">
                {selectedProperty.title}
              </h3>

              <div className="relative h-[220px] rounded overflow-hidden mb-6 bg-neutral-100 border border-[#E0D8CE] group">
                <img src={selectedProperty.images?.[activeImgIdx] || selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
                {selectedProperty.images && selectedProperty.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-[#8B5A2B] hover:text-white text-neutral-950 flex items-center justify-center shadow transition-colors font-mono animate-none"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev + 1) % selectedProperty.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-[#8B5A2B] hover:text-white text-neutral-950 flex items-center justify-center shadow transition-colors font-mono animate-none"
                    >
                      &rarr;
                    </button>
                    <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-0.5 rounded text-[10px] font-mono text-[#8B5A2B]">
                      {activeImgIdx + 1} / {selectedProperty.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 border border-[#E0D8CE] p-4 rounded bg-[#EBE5DB] mb-6 font-sans text-xs text-neutral-600">
                <div>
                  <span className="text-[9px] uppercase block">Acquisition Reserve</span>
                  <span className="font-bold text-base text-[#4E342E]">{selectedProperty.price}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase block">Neighborhood Zoned</span>
                  <span className="font-bold text-sm text-[#3E2723]">{selectedProperty.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs mb-6">
                <div className="bg-[#EBE5DB] p-2 rounded border border-[#E0D8CE]">
                  <span className="block font-bold text-[#4E342E]">{selectedProperty.bedrooms || selectedProperty.beds} BHK</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Structure</span>
                </div>
                <div className="bg-[#EBE5DB] p-2 rounded border border-[#E0D8CE]">
                  <span className="block font-bold text-[#4E342E]">{selectedProperty.bathrooms || selectedProperty.baths}</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Baths</span>
                </div>
                <div className="bg-[#EBE5DB] p-2 rounded border border-[#E0D8CE]">
                  <span className="block font-bold text-[#4E342E]">{selectedProperty.area}</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Area</span>
                </div>
              </div>

              <div className="mb-6 space-y-4 font-sans text-xs font-light text-neutral-600 leading-relaxed">
                <p>{selectedProperty.description}</p>
                
                <div>
                  <span className="font-serif font-bold text-[10px] text-[#8B5A2B] uppercase tracking-widest block mb-2">Original Features Preserved</span>
                  <div className="grid grid-cols-2 gap-1.5 text-[11px] text-[#4E342E]">
                    {(selectedProperty.amenities || selectedProperty.features).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Tabs */}
              <div className="mt-6 pt-6 border-t border-[#E0D8CE]">
                <div className="flex border-b border-[#E0D8CE] mb-4">
                  <button 
                    onClick={() => { setActiveFormTab("enquiry"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 pr-4 text-xs font-sans tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "enquiry" ? "border-[#8B5A2B] text-[#3E2723] font-bold" : "border-transparent text-neutral-400"}`}
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => { setActiveFormTab("visit"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 px-4 text-xs font-sans tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "visit" ? "border-[#8B5A2B] text-[#3E2723] font-bold" : "border-transparent text-neutral-400"}`}
                  >
                    Schedule Visit
                  </button>
                </div>

                {formSuccess ? (
                  <div className="bg-[#EBE5DB] border border-[#E0D8CE] text-[#8B5A2B] p-4 rounded text-xs font-mono text-center">
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
                        <label className="block text-[8px] font-sans tracking-widest text-[#7D6B58] uppercase mb-1">Name</label>
                        <input required type="text" className="w-full bg-[#F4F0EA] border border-[#E0D8CE] rounded px-2.5 py-1.5 text-xs text-[#3E2723] focus:outline-none focus:border-[#8B5A2B]" />
                      </div>
                      <div>
                        <label className="block text-[8px] font-sans tracking-widest text-[#7D6B58] uppercase mb-1">Phone</label>
                        <input required type="tel" className="w-full bg-[#F4F0EA] border border-[#E0D8CE] rounded px-2.5 py-1.5 text-xs text-[#3E2723] focus:outline-none focus:border-[#8B5A2B]" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[8px] font-sans tracking-widest text-[#7D6B58] uppercase mb-1">Email</label>
                      <input required type="email" className="w-full bg-[#F4F0EA] border border-[#E0D8CE] rounded px-2.5 py-1.5 text-xs text-[#3E2723] focus:outline-none focus:border-[#8B5A2B]" />
                    </div>

                    {activeFormTab === "enquiry" ? (
                      <div>
                        <label className="block text-[8px] font-sans tracking-widest text-[#7D6B58] uppercase mb-1">Message</label>
                        <textarea 
                          required 
                          rows={2} 
                          defaultValue={`I am interested in Heritage estate: ${selectedProperty.title} (ID: ${selectedProperty.id}).`}
                          className="w-full bg-[#F4F0EA] border border-[#E0D8CE] rounded px-2.5 py-1.5 text-xs text-[#3E2723] focus:outline-none focus:border-[#8B5A2B]"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[8px] font-sans tracking-widest text-[#7D6B58] uppercase mb-1">Date</label>
                          <input required type="date" className="w-full bg-[#F4F0EA] border border-[#E0D8CE] rounded px-2.5 py-1.5 text-xs text-[#3E2723] focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-[8px] font-sans tracking-widest text-[#7D6B58] uppercase mb-1">Time</label>
                          <input required type="time" className="w-full bg-[#F4F0EA] border border-[#E0D8CE] rounded px-2.5 py-1.5 text-xs text-[#3E2723] focus:outline-none" />
                        </div>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={formSubmitting}
                      className="w-full bg-[#4E342E] text-white font-sans font-bold tracking-widest text-xs py-3 rounded hover:bg-[#3E2723] disabled:opacity-50 transition-colors uppercase"
                    >
                      {formSubmitting ? "Submitting Request..." : activeFormTab === "enquiry" ? "Send Acquisition Enquiry" : "Schedule Private Viewing"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#4E342E] text-white py-12 px-6 text-center text-xs font-sans tracking-widest text-neutral-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} HERITAGE HOMES PARTNERSHIP. REGISTERED TRUST.</span>
          <div className="flex gap-4">
            <Link to="/" className="text-[#C5A880] hover:underline">Select Template</Link>
            <span>Historic Charters Apply</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
