import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Heart, MapPin, Smile, Star, ShieldAlert } from "lucide-react";
import { havenData } from "../../data/haven";

export default function HavenRealty() {
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
  
  // Search / school rating states
  const [minSchoolRating, setMinSchoolRating] = useState("All");

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

  const filteredProperties = havenData.properties.filter(prop => {
    if (minSchoolRating === "All") return true;
    if (minSchoolRating === "10") return prop.schoolRating === "10/10";
    if (minSchoolRating === "9") return prop.schoolRating === "9/10" || prop.schoolRating === "10/10";
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C3E50] font-sans selection:bg-orange-500 selection:text-white">
      
      {/* 19. Friendly Rounded Navigation */}
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <nav className="bg-white border border-[#EBE4D8] rounded-full px-6 py-4 flex justify-between items-center shadow-sm">
          <Link to="/" className="flex items-center gap-2 group text-orange-650 font-bold">
            <Smile className="w-5 h-5 text-orange-500" />
            <span className="font-display tracking-widest text-sm uppercase">
              HAVEN_REALTY
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-widest text-[#7D8B96] uppercase">
            <a href="#hero" className="hover:text-orange-500 transition-colors">Overview</a>
            <a href="#properties" className="hover:text-orange-500 transition-colors">Family Catalog</a>
            <a href="#neighborhoods" className="hover:text-orange-500 transition-colors">Schools & Parks</a>
            <a href="#agents" className="hover:text-orange-500 transition-colors">Advisors</a>
          </div>

          <Link to="/" className="text-[10px] font-mono tracking-widest bg-orange-500 text-white px-4 py-2 rounded-full font-bold hover:bg-orange-600 transition-colors uppercase">
            Market
          </Link>
        </nav>
      </div>

      {/* 20. Family Home Hero Layout */}
      <header id="hero" className="max-w-6xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FDF2E9] border border-orange-200 rounded-full text-xs font-mono text-orange-700">
            <span>FAMILY FIRST HOUSING</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-[#1A2530] tracking-tight leading-tight">
            A HOME FOR <span className="text-orange-600">EVERY CHAPTER</span> OF YOUR LIFE.
          </h1>

          <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-light">
            {havenData.hero.subtitle} We discover homes positioned near premium elementary schools, quiet cul-de-sacs, and neighborhood parks.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#EBE4D8]">
            <div>
              <span className="block text-2xl font-bold text-orange-600">Top 10%</span>
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mt-1">School Districts</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-orange-600">Safe Areas</span>
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mt-1">Cul-de-sacs</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-orange-600">Walkable</span>
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mt-1">Parks & Pools</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden aspect-[4/3] rounded-3xl bg-neutral-200 shadow-lg border border-[#EBE4D8]">
            <motion.img 
              src={havenData.hero.image} 
              alt="Suburban family home lawn" 
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* School Districts and Properties Section */}
      <section id="properties" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#EBE4D8]">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-orange-600 uppercase">Suburban Directory</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A2530] tracking-tight mt-2 uppercase">
              FAMILY HOMES
            </h2>
          </div>

          {/* School filter */}
          <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-[#EBE4D8]">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest px-2">School Proximity:</span>
            {["All", "9", "10"].map(rating => (
              <button
                key={rating}
                onClick={() => setMinSchoolRating(rating)}
                className={`text-[10px] font-mono tracking-widest px-4 py-2 rounded-lg font-bold uppercase transition-colors ${minSchoolRating === rating ? "bg-orange-500 text-white" : "text-neutral-500 hover:text-neutral-900"}`}
              >
                {rating === "All" ? "All Ratings" : `${rating}+ Rating`}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map(property => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleSelectProperty(property)}
                className="group cursor-pointer bg-white border border-[#EBE4D8] hover:border-orange-500/35 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-[240px] overflow-hidden bg-neutral-100 border-b border-[#EBE4D8]">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700" />
                  
                  <button 
                    onClick={(e) => toggleFavorite(property.id, e)}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-neutral-400 hover:text-orange-500 shadow-sm"
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-orange-500 text-orange-500" : ""}`} />
                  </button>
                  
                  <span className="absolute bottom-4 left-4 bg-[#FDF2E9] text-orange-700 border border-orange-100 font-mono text-[9px] px-2 py-0.5 rounded-full font-bold uppercase">
                    School rating: {property.schoolRating}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-[#1A2530] text-base group-hover:text-orange-500 transition-colors">
                      {property.title}
                    </h4>
                    <span className="font-mono text-orange-600 text-sm font-bold">{property.price}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-neutral-500 mb-4 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{property.location}</span>
                  </div>

                  <p className="text-xs text-neutral-500 font-light line-clamp-2 mb-6">
                    {property.description}
                  </p>

                  <div className="pt-4 border-t border-[#EBE4D8] flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <div className="flex gap-4">
                      <span>{property.beds} BD</span>
                      <span>{property.baths} BA</span>
                      <span>{property.area}</span>
                    </div>
                    <span className="text-orange-600 font-bold group-hover:underline">VIEW</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Neighborhood and parks section */}
      <section id="neighborhoods" className="bg-white py-24 px-6 md:px-12 border-t border-b border-[#EBE4D8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-md">
            <span className="text-xs font-mono tracking-widest text-orange-600 uppercase">Suburban Parks</span>
            <h3 className="text-3xl md:text-5xl font-bold text-[#1A2530] tracking-tight mt-2 mb-6 uppercase">
              NEIGHBORHOOD CARDS
            </h3>
            
            <div className="space-y-4">
              {[
                { name: "Safety Patrol Zones", desc: "Zoned residential districts featuring neighborhood crime prevention networks and regular evening patrols." },
                { name: "Community Recreational Areas", desc: "Local tennis courts, children's park zones, and shared swimming pools certified by safety directors." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-[#FAF8F5] border border-[#EBE4D8] rounded-xl flex gap-3">
                  <Star className="w-5 h-5 text-orange-500 shrink-0" />
                  <div>
                    <h5 className="font-bold text-xs uppercase mb-1">{item.name}</h5>
                    <p className="text-xs text-neutral-500 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <img src={havenData.interiors[0]} alt="Family kitchen interior" className="w-full h-[280px] object-cover rounded-2xl border border-[#EBE4D8]" />
            <img src={havenData.interiors[1]} alt="Kids bedroom interior" className="w-full h-[280px] object-cover rounded-2xl border border-[#EBE4D8] mt-8" />
          </div>

        </div>
      </section>

      {/* Advisors Section */}
      <section id="agents" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-xs font-mono tracking-widest text-orange-600 uppercase">Brokerage Advisors</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A2530] tracking-tight mt-2">OUR SPECIALISTS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {havenData.agents.map((agent, i) => (
            <div key={i} className="bg-white border border-[#EBE4D8] p-4 rounded-3xl text-center shadow-sm">
              <div className="relative overflow-hidden aspect-[4/5] rounded-2xl bg-neutral-105 mb-4">
                <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-[#1A2530] text-base">{agent.name}</h4>
              <span className="text-xs font-mono text-orange-650">{agent.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 23. Haven Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProperty(null)}
            className="fixed inset-0 z-50 bg-[#1A2530]/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border border-[#EBE4D8] rounded-3xl max-w-xl w-full p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-2xl relative text-[#2C3E50]"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-neutral-200 hover:border-orange-500 text-neutral-400 hover:text-neutral-900 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-mono text-orange-650 uppercase tracking-widest block mb-1">
                Family Suburban Residence
              </span>
              
              <h3 className="font-bold text-2xl text-[#1A2530] mb-4">
                {selectedProperty.title}
              </h3>

              <div className="relative h-[220px] rounded-2xl overflow-hidden mb-6 bg-neutral-100 group">
                <img src={selectedProperty.images?.[activeImgIdx] || selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
                {selectedProperty.images && selectedProperty.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-orange-500 hover:text-white text-[#2C3E50] flex items-center justify-center shadow transition-colors font-mono"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev + 1) % selectedProperty.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-orange-500 hover:text-white text-[#2C3E50] flex items-center justify-center shadow transition-colors font-mono"
                    >
                      &rarr;
                    </button>
                    <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-0.5 rounded text-[10px] font-mono text-orange-650">
                      {activeImgIdx + 1} / {selectedProperty.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 border border-[#EBE4D8] p-4 rounded-2xl bg-[#FAF8F5] mb-6 font-mono text-xs text-neutral-600">
                <div>
                  <span className="text-[9px] uppercase block">Valued Bid Price</span>
                  <span className="font-bold text-base text-orange-650">{selectedProperty.price}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase block">Suburban Neighborhood</span>
                  <span className="font-bold text-sm text-[#1A2530]">{selectedProperty.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs mb-6 font-mono text-neutral-500">
                <div className="bg-[#FAF8F5] p-2 rounded-xl border border-[#EBE4D8]">
                  <span className="block font-bold text-[#1A2530]">{selectedProperty.bedrooms || selectedProperty.beds} BHK</span>
                  <span className="text-[8px] uppercase">Beds</span>
                </div>
                <div className="bg-[#FAF8F5] p-2 rounded-xl border border-[#EBE4D8]">
                  <span className="block font-bold text-[#1A2530]">{selectedProperty.bathrooms || selectedProperty.baths}</span>
                  <span className="text-[8px] uppercase">Baths</span>
                </div>
                <div className="bg-[#FAF8F5] p-2 rounded-xl border border-[#EBE4D8]">
                  <span className="block font-bold text-[#1A2530]">{selectedProperty.area}</span>
                  <span className="text-[8px] uppercase">Area</span>
                </div>
              </div>

              <div className="mb-6 space-y-4 text-xs font-light text-neutral-600 leading-relaxed">
                <p>{selectedProperty.description}</p>
                
                <div className="grid grid-cols-2 gap-4 bg-orange-50/20 p-4 border border-orange-100/60 rounded-xl">
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-neutral-500">School Rating</span>
                    <span className="block text-sm font-bold text-orange-650 font-mono">{selectedProperty.schoolRating}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-neutral-500">Park Proximity</span>
                    <span className="block text-sm font-bold text-[#1A2530] font-mono">{selectedProperty.parkProximity}</span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-orange-600 uppercase tracking-widest block mb-2">Internal Amenities</span>
                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px] text-neutral-700">
                    {(selectedProperty.amenities || selectedProperty.features).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Tabs */}
              <div className="mt-6 pt-6 border-t border-[#EBE4D8]">
                <div className="flex border-b border-[#EBE4D8] mb-4">
                  <button 
                    onClick={() => { setActiveFormTab("enquiry"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 pr-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "enquiry" ? "border-orange-500 text-orange-650 font-bold" : "border-transparent text-neutral-400"}`}
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => { setActiveFormTab("visit"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 px-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "visit" ? "border-orange-500 text-orange-650 font-bold" : "border-transparent text-neutral-400"}`}
                  >
                    Schedule Visit
                  </button>
                </div>

                {formSuccess ? (
                  <div className="bg-orange-50 border border-orange-200 text-orange-850 p-4 rounded text-xs font-mono text-center">
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
                        <label className="block text-[8px] font-mono text-[#7D8B96] uppercase mb-1">Name</label>
                        <input required type="text" className="w-full bg-[#FAF8F5] border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-[#2C3E50] focus:outline-none focus:border-orange-500" />
                      </div>
                      <div>
                        <label className="block text-[8px] font-mono text-[#7D8B96] uppercase mb-1">Phone</label>
                        <input required type="tel" className="w-full bg-[#FAF8F5] border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-[#2C3E50] focus:outline-none focus:border-orange-500" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[8px] font-mono text-[#7D8B96] uppercase mb-1">Email</label>
                      <input required type="email" className="w-full bg-[#FAF8F5] border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-[#2C3E50] focus:outline-none focus:border-orange-500" />
                    </div>

                    {activeFormTab === "enquiry" ? (
                      <div>
                        <label className="block text-[8px] font-mono text-[#7D8B96] uppercase mb-1">Message</label>
                        <textarea 
                          required 
                          rows={2} 
                          defaultValue={`I am interested in Haven unit: ${selectedProperty.title} (ID: ${selectedProperty.id}).`}
                          className="w-full bg-[#FAF8F5] border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-[#2C3E50] focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[8px] font-mono text-[#7D8B96] uppercase mb-1">Date</label>
                          <input required type="date" className="w-full bg-[#FAF8F5] border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-[#2C3E50] focus:outline-none focus:border-orange-500" />
                        </div>
                        <div>
                          <label className="block text-[8px] font-mono text-[#7D8B96] uppercase mb-1">Time</label>
                          <input required type="time" className="w-full bg-[#FAF8F5] border border-neutral-200 rounded px-2.5 py-1.5 text-xs text-[#2C3E50] focus:outline-none focus:border-orange-500" />
                        </div>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={formSubmitting}
                      className="w-full bg-[#2C3E50] text-white font-mono font-bold tracking-widest text-xs py-3 rounded hover:bg-[#1A2530] transition-colors uppercase disabled:opacity-50"
                    >
                      {formSubmitting ? "Submitting Request..." : activeFormTab === "enquiry" ? "Send Proximity Enquiry" : "Schedule Private viewing"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-[#EBE4D8] py-12 px-6 text-center text-xs font-mono text-[#7D8B96]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} HAVEN REALTY ADVISORS.</span>
          <div className="flex gap-4">
            <Link to="/" className="text-orange-500 hover:underline">Select Template</Link>
            <span>Suburban Guides</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
