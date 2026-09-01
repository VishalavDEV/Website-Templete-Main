import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ArrowRight, Compass, Maximize2, Shield, Eye } from "lucide-react";
import { luxoraData } from "../../data/luxora";

export default function LuxoraEstates() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [activeFormTab, setActiveFormTab] = useState("enquiry"); // "enquiry" or "visit"
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");
  
  // Custom cursor position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveringCard, setHoveringCard] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSelectProperty = (prop) => {
    setSelectedProperty(prop);
    setActiveImgIdx(0);
    setActiveFormTab("enquiry");
    setFormSuccess("");
    setFormError("");
  };

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => {
      const updated = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  // Filter properties
  const filteredProperties = luxoraData.properties.filter(prop => {
    return activeCategory === "All" || prop.propertyType === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-neutral-900 font-serif relative overflow-x-hidden selection:bg-[#C5A880] selection:text-white">
      
      {/* 25. Cursor-Following Detail Indicator */}
      {hoveringCard && (
        <div 
          className="fixed w-20 h-20 rounded-full bg-black/80 backdrop-blur-sm border border-neutral-700 text-white flex items-center justify-center pointer-events-none z-50 text-[10px] font-mono tracking-widest uppercase transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{ left: mousePos.x, top: mousePos.y }}
        >
          View
        </div>
      )}

      {/* 19. Transparent Minimal Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-40 py-8 px-6 md:px-16 flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-xl tracking-[0.25em] font-bold text-neutral-900 hover:text-[#C5A880] transition-colors">
          LUXORA
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] font-sans tracking-[0.25em] text-neutral-500 uppercase">
          <a href="#hero" className="hover:text-neutral-900 transition-colors">Art of Living</a>
          <a href="#portfolio" className="hover:text-neutral-900 transition-colors">Portfolio</a>
          <a href="#curation" className="hover:text-neutral-900 transition-colors">Interiors</a>
          <a href="#agents" className="hover:text-neutral-900 transition-colors">Acquisitions</a>
        </div>

        <Link to="/" className="text-[10px] font-sans tracking-[0.2em] uppercase border-b border-neutral-900 py-1 hover:text-[#C5A880] hover:border-[#C5A880] transition-all">
          MARKETPLACE
        </Link>
      </nav>

      {/* 20. Full-Screen Cinematic Hero */}
      <header id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-neutral-900">
          <motion.img 
            src={luxoraData.hero.image} 
            alt="Minimal luxury interior"
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 0.85 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="w-full h-full object-cover brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-[#FAF9F5]/10" />
        </div>

        <div className="relative z-10 text-center max-w-5xl px-6 pt-16 text-white">
          <span className="text-[11px] font-sans tracking-[0.3em] text-[#E2D0B6] uppercase block mb-6">
            LUXORA PRIVATE SUITE
          </span>
          
          <h1 className="text-5xl md:text-8xl tracking-[0.05em] font-normal leading-[1.1] uppercase">
            THE ART<br />
            <span className="italic font-light tracking-[0.1em] text-[#E2D0B6]">OF LIVING.</span>
          </h1>
          
          <div className="w-16 h-[1px] bg-[#E2D0B6] mx-auto my-10" />
          
          <p className="text-sm md:text-base font-sans tracking-wide text-neutral-300 font-light max-w-xl mx-auto">
            {luxoraData.hero.subtitle}
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-neutral-400 text-xs font-sans tracking-widest flex items-center gap-2">
          <Compass className="w-4 h-4 animate-spin-slow" />
          <span>SCROLL DOWN TO REVEAL</span>
        </div>
      </header>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="text-xs font-sans tracking-[0.25em] text-[#C5A880] uppercase">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-normal tracking-[0.08em] text-neutral-900 mt-3 uppercase">
            THE SIGNATURES
          </h2>
          
          {/* Filtering Toggles */}
          <div className="flex justify-center gap-8 mt-12 text-[10px] font-sans tracking-[0.2em] text-neutral-400 uppercase">
            {["All", "Mansion", "Retreat", "Estate"].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2 transition-colors border-b ${activeCategory === cat ? "text-neutral-900 border-neutral-900" : "border-transparent hover:text-neutral-900"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Layout: Looks like a luxury magazine spread */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property, idx) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onClick={() => { handleSelectProperty(property); setHoveringCard(false); }}
                onMouseEnter={() => setHoveringCard(true)}
                onMouseLeave={() => setHoveringCard(false)}
                className="cursor-pointer group flex flex-col justify-between"
              >
                {/* 22. Luxury Magazine Spread Card */}
                <div className="relative overflow-hidden aspect-[3/4] bg-neutral-100 shadow-sm border border-neutral-200/40">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transform scale-100 group-hover:scale-103 transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Subtle Light Overlay */}
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-700" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white z-20 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase">VIEW SPECIFICATIONS</span>
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="text-xl font-normal tracking-wide text-neutral-900">
                      {property.title}
                    </h3>
                    <span className="font-sans text-xs tracking-widest text-[#C5A880] font-semibold">
                      {property.price}
                    </span>
                  </div>
                  
                  <p className="text-[10px] font-sans tracking-widest text-neutral-400 uppercase">
                    {property.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Curation / Interiors Reveal Section */}
      <section id="curation" className="bg-black text-white py-32 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          <div className="lg:col-span-5 max-w-md">
            <span className="text-xs font-sans tracking-[0.3em] text-[#E2D0B6] uppercase">The Philosophy</span>
            <h3 className="text-3xl md:text-5xl font-normal tracking-wide text-white mt-2 mb-6 leading-tight uppercase">
              CURATED INTERIORS
            </h3>
            <p className="text-sm font-sans tracking-wide text-neutral-400 font-light leading-relaxed mb-6">
              Our architectural collections are selected for spatial clarity, premium timber profiles, and pure natural light.
            </p>
            <p className="text-sm font-sans tracking-wide text-neutral-450 font-light leading-relaxed mb-8">
              We collaborate with premier Italian furniture designers to deliver bespoke, pre-arranged interiors ready for modern curation.
            </p>
            
            <div className="space-y-4">
              {[
                { label: "Bespoke Travertine Finishes", val: "Hand-finished travertine slabs cut in Tivoli, Italy." },
                { label: "Organic Silk Floor Coverings", val: "Hand-loomed in Kyoto from raw, non-dyed silk threads." }
              ].map((item, idx) => (
                <div key={idx} className="border-t border-neutral-900 pt-4">
                  <span className="block text-[11px] font-sans tracking-widest text-[#E2D0B6] uppercase mb-1">{item.label}</span>
                  <p className="text-xs font-sans text-neutral-500 font-light">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img 
                src={luxoraData.interiors[0]} 
                alt="Luxury living detail" 
                className="w-full h-[320px] object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="p-4 border border-neutral-900 bg-neutral-950">
                <span className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase block mb-1">Curation Asset 01</span>
                <p className="text-xs text-neutral-300 font-sans font-light">Natural light optimization on north facades.</p>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <img 
                src={luxoraData.interiors[1]} 
                alt="Luxury dining detail" 
                className="w-full h-[320px] object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="p-4 border border-neutral-900 bg-neutral-950">
                <span className="font-sans text-[10px] tracking-widest text-neutral-500 uppercase block mb-1">Curation Asset 02</span>
                <p className="text-xs text-neutral-300 font-sans font-light">Custom timber profiles with shadow-line tracks.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-32 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-sans tracking-[0.25em] text-[#C5A880] uppercase">Trust Advisors</span>
          <h2 className="text-3xl md:text-5xl font-normal tracking-[0.08em] text-neutral-900 mt-2 uppercase">
            PRIVATE CLIENT REPRESENTATION
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {luxoraData.agents.map((agent, i) => (
            <div key={i} className="text-center group">
              <div className="relative overflow-hidden aspect-[4/5] bg-neutral-100 mb-6 border border-neutral-200">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform scale-100 group-hover:scale-102"
                />
              </div>
              <h4 className="text-xl font-normal tracking-wide text-neutral-900">{agent.name}</h4>
              <span className="text-[10px] font-sans text-neutral-500 block uppercase tracking-widest mt-1">
                {agent.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 23. Luxury Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#FAF9F5] overflow-y-auto"
            onClick={() => setSelectedProperty(null)}
          >
            {/* Modal Navigation */}
            <div className="sticky top-0 z-30 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-neutral-200/60 py-6 px-6 md:px-16 flex justify-between items-center max-w-7xl mx-auto">
              <span className="text-sm tracking-[0.3em] font-semibold text-neutral-950 uppercase">SPECIFICATIONS</span>
              <button 
                onClick={() => setSelectedProperty(null)}
                className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase hover:text-[#C5A880] transition-colors"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <main className="max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              <div className="lg:col-span-7">
                <div className="relative aspect-[3/2] rounded overflow-hidden bg-neutral-100 border border-neutral-200 mb-8 group">
                  <img src={selectedProperty.images?.[activeImgIdx] || selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
                  {selectedProperty.images && selectedProperty.images.length > 1 && (
                    <>
                      <button 
                        onClick={() => setActiveImgIdx(prev => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-[#C5A880] text-white flex items-center justify-center transition-colors font-mono"
                      >
                        &larr;
                      </button>
                      <button 
                        onClick={() => setActiveImgIdx(prev => (prev + 1) % selectedProperty.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-[#C5A880] text-white flex items-center justify-center transition-colors font-mono"
                      >
                        &rarr;
                      </button>
                      <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-0.5 rounded text-[10px] font-mono text-[#E2D0B6]">
                        {activeImgIdx + 1} / {selectedProperty.images.length}
                      </div>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-6 border-t border-b border-neutral-200 py-6 text-center text-xs font-sans tracking-widest text-neutral-600">
                  <div>
                    <span className="block text-xl font-serif text-neutral-900 mb-1">{selectedProperty.bedrooms || selectedProperty.beds}</span>
                    <span>BEDROOMS</span>
                  </div>
                  <div>
                    <span className="block text-xl font-serif text-neutral-900 mb-1">{selectedProperty.bathrooms || selectedProperty.baths}</span>
                    <span>BATHROOMS</span>
                  </div>
                  <div>
                    <span className="block text-xl font-serif text-neutral-900 mb-1">{selectedProperty.area}</span>
                    <span>TOTAL AREA</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-sans tracking-[0.25em] text-[#C5A880] uppercase block mb-2">
                    {selectedProperty.propertyType || selectedProperty.type} Portfolio
                  </span>
                  
                  <h2 className="text-3xl md:text-5xl font-normal tracking-wide text-neutral-900 mb-4 uppercase">
                    {selectedProperty.title}
                  </h2>
                  
                  <span className="block font-sans text-xl font-semibold tracking-wider text-[#C5A880] mb-8">
                    {selectedProperty.price}
                  </span>

                  <div className="mb-8">
                    <span className="text-[10px] font-sans tracking-[0.25em] text-neutral-400 uppercase block mb-2">Location</span>
                    <p className="text-sm font-sans tracking-wide text-neutral-800 leading-relaxed font-light">
                      {selectedProperty.location}
                    </p>
                  </div>

                  <div className="mb-8">
                    <span className="text-[10px] font-sans tracking-[0.25em] text-neutral-400 uppercase block mb-2">Spatial Analysis</span>
                    <p className="text-sm font-sans tracking-wide text-neutral-600 leading-relaxed font-light">
                      {selectedProperty.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-sans tracking-[0.25em] text-neutral-400 uppercase block mb-3">Key Features</span>
                    <div className="grid grid-cols-2 gap-2 text-xs font-sans text-neutral-700 font-light">
                      {(selectedProperty.amenities || selectedProperty.features).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Form Tabs */}
                <div className="mt-8 pt-8 border-t border-neutral-200">
                  <div className="flex border-b border-neutral-200 mb-6">
                    <button 
                      onClick={() => { setActiveFormTab("enquiry"); setFormSuccess(""); setFormError(""); }}
                      className={`pb-2 pr-6 text-xs font-sans tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "enquiry" ? "border-[#C5A880] text-neutral-900" : "border-transparent text-neutral-400"}`}
                    >
                      Enquire Now
                    </button>
                    <button 
                      onClick={() => { setActiveFormTab("visit"); setFormSuccess(""); setFormError(""); }}
                      className={`pb-2 px-6 text-xs font-sans tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "visit" ? "border-[#C5A880] text-neutral-900" : "border-transparent text-neutral-400"}`}
                    >
                      Schedule Visit
                    </button>
                  </div>

                  {formSuccess ? (
                    <div className="bg-[#E2D0B6]/10 border border-[#C5A880]/30 text-[#8B5A2B] p-4 rounded text-xs font-mono text-center">
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
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[8px] font-sans tracking-widest text-neutral-400 uppercase mb-1">Name</label>
                          <input required type="text" className="w-full bg-[#FAF9F5] border border-neutral-200 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C5A880]" />
                        </div>
                        <div>
                          <label className="block text-[8px] font-sans tracking-widest text-neutral-400 uppercase mb-1">Phone</label>
                          <input required type="tel" className="w-full bg-[#FAF9F5] border border-neutral-200 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C5A880]" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-[8px] font-sans tracking-widest text-neutral-400 uppercase mb-1">Email</label>
                        <input required type="email" className="w-full bg-[#FAF9F5] border border-neutral-200 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C5A880]" />
                      </div>

                      {activeFormTab === "enquiry" ? (
                        <div>
                          <label className="block text-[8px] font-sans tracking-widest text-neutral-400 uppercase mb-1">Confidential Inquiry</label>
                          <textarea 
                            required 
                            rows={3} 
                            defaultValue={`I am interested in acquiring the private portfolio item: ${selectedProperty.title} (ID: ${selectedProperty.id}). Please send the physical brochure and prospectus.`}
                            className="w-full bg-[#FAF9F5] border border-neutral-200 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C5A880]"
                          />
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[8px] font-sans tracking-widest text-neutral-400 uppercase mb-1">Date</label>
                            <input required type="date" className="w-full bg-[#FAF9F5] border border-neutral-200 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C5A880]" />
                          </div>
                          <div>
                            <label className="block text-[8px] font-sans tracking-widest text-neutral-400 uppercase mb-1">Time</label>
                            <input required type="time" className="w-full bg-[#FAF9F5] border border-neutral-200 rounded px-3 py-2 text-xs text-neutral-900 focus:outline-none focus:border-[#C5A880]" />
                          </div>
                        </div>
                      )}

                      <button 
                        type="submit" 
                        disabled={formSubmitting}
                        className="w-full bg-black text-white font-sans tracking-[0.2em] text-xs py-3.5 rounded font-bold hover:bg-neutral-800 disabled:opacity-50 transition-colors uppercase"
                      >
                        {formSubmitting ? "Submitting Request..." : activeFormTab === "enquiry" ? "Request Prospectus" : "Book Private Tour"}
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 md:px-16 text-center text-xs font-sans tracking-[0.2em] text-neutral-500 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span>© {new Date().getFullYear()} LUXORA ESTATE HOLDINGS. PRIVATE.</span>
          <div className="flex gap-8 uppercase">
            <Link to="/" className="text-[#E2D0B6] hover:underline">Marketplace</Link>
            <span>TERMS OF ENGAGEMENT</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
