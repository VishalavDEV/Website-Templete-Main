import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, MapPin, X, ArrowRight, Heart, Award, Sparkles, Navigation } from "lucide-react";
import { urbanovaData } from "../../data/urbanova";

export default function Urbanova() {
  const [selectedProp, setSelectedProp] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [activeFormTab, setActiveFormTab] = useState("enquiry"); // "enquiry" or "visit"
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");
  
  // Search states
  const [activeType, setActiveType] = useState("All");
  const [maxPrice, setMaxPrice] = useState(40000000); // 4 Crore default max
  
  // Active map zone
  const [activeZone, setActiveZone] = useState("Downtown");

  const toggleFav = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => {
      const updated = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const handleSelectProperty = (prop) => {
    setSelectedProp(prop);
    setActiveImgIdx(0);
    setActiveFormTab("enquiry");
    setFormSuccess("");
    setFormError("");
  };

  // Filter properties
  const filteredProperties = urbanovaData.properties.filter(prop => {
    const typeMatch = activeType === "All" || prop.propertyType === activeType;
    const priceVal = prop.rawPrice;
    return typeMatch && priceVal <= maxPrice;
  });

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-orange-500 selection:text-black">
      
      {/* 19. Floating Dark Navigation Bar */}
      <div className="fixed top-6 left-6 right-6 z-40 max-w-5xl mx-auto">
        <nav className="bg-neutral-900/80 backdrop-blur-lg border border-neutral-800 rounded-full px-6 py-4 flex justify-between items-center shadow-2xl">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
            <span className="font-display font-black tracking-tighter text-lg uppercase text-white group-hover:text-orange-500 transition-colors">
              URBANOVA
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            <a href="#hero" className="hover:text-orange-500 transition-colors">Pulse</a>
            <a href="#properties" className="hover:text-orange-500 transition-colors">Carousels</a>
            <a href="#stats" className="hover:text-orange-500 transition-colors">Statistics</a>
            <a href="#zones" className="hover:text-orange-500 transition-colors">Zoning</a>
          </div>

          <Link to="/" className="text-[10px] font-mono tracking-widest bg-orange-500 text-black px-4 py-2 rounded-full font-bold hover:bg-orange-400 transition-colors">
            SELECT
          </Link>
        </nav>
      </div>

      {/* 20. Full-Screen City Hero */}
      <header id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
        
        {/* Background Image with zoom */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            src={urbanovaData.hero.image} 
            alt="City view night"
            initial={{ scale: 1.15, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/60" />
        </div>

        {/* Oversized Typography */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-mono tracking-[0.2em] px-3 py-1 rounded mb-6 uppercase">
              Urbanova Residences
            </span>
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tight text-white leading-none uppercase select-none">
              LIVE<br />
              ABOVE<br />
              THE<br />
              <span className="text-orange-500">CITY.</span>
            </h1>
          </div>

          {/* Floating Property Card */}
          <div className="lg:col-span-4 bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 p-6 rounded-2xl shadow-2xl relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-black text-xs shadow-lg">
              ★
            </div>
            
            <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest block mb-1">
              Top Floor Suite Available
            </span>
            <h3 className="font-display font-semibold text-lg text-white mb-2">
              Helix Luxury Penthouse
            </h3>
            <p className="text-xs text-neutral-450 font-light mb-4">
              Private helipad access & high tech environment, located in Manhattan, NY.
            </p>
            <div className="flex justify-between items-center text-xs font-mono pt-4 border-t border-neutral-800">
              <span className="text-orange-500 font-bold">$1,450,000</span>
              <a href="#properties" className="text-white hover:text-orange-500 transition-colors flex items-center gap-1">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 21. Animated City Statistics (Bottom Bar) */}
        <div className="absolute bottom-0 left-0 right-0 bg-neutral-900/60 backdrop-blur-lg border-t border-neutral-800/60 py-6">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-4 text-center">
            {urbanovaData.hero.stats.map((stat, idx) => (
              <div key={idx}>
                <span className="block text-2xl md:text-3xl font-display font-black text-orange-500">
                  {stat.value}
                </span>
                <span className="text-[9px] md:text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </header>

      {/* Working Search & Properties Section */}
      <section id="properties" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-orange-500 uppercase">Urban Directory</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight mt-2 uppercase">
              CAROUSEL COLLECTION
            </h2>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-3 bg-neutral-900 p-1.5 rounded-full border border-neutral-800">
            {["All", "Apartment", "Loft", "Flat"].map(t => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`text-[10px] font-mono tracking-widest px-4 py-2 rounded-full font-bold uppercase transition-colors ${activeType === t ? "bg-orange-500 text-black" : "text-neutral-400 hover:text-white"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>        {/* Price Slider */}
        <div className="mb-12 max-w-md bg-neutral-900/40 border border-neutral-900 p-4 rounded-xl">
          <div className="flex justify-between items-center text-xs font-mono text-neutral-400 mb-2">
            <span>MAX PRICE BUDGET:</span>
            <span className="text-orange-500 font-bold">
              {maxPrice >= 10000000 ? `₹${(maxPrice / 10000000).toFixed(2)} Cr` : `₹${(maxPrice / 100000).toFixed(0)} Lakh`}
            </span>
          </div>
          <input 
            type="range"
            min={10000000}
            max={40000000}
            step={1000000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-orange-500 h-1 bg-neutral-800 rounded-lg cursor-pointer"
          />
        </div>

        {/* 22. Horizontal Property Slider / Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.length > 0 ? (
              filteredProperties.map(property => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleSelectProperty(property)}
                  className="group cursor-pointer bg-neutral-900 border border-neutral-800/60 hover:border-orange-500/40 rounded-2xl overflow-hidden flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative h-[250px] overflow-hidden bg-neutral-950">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Favorite overlay */}
                    <button 
                      onClick={(e) => toggleFav(property.id, e)}
                      className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center text-neutral-400 hover:text-white"
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-orange-500 text-orange-500" : ""}`} />
                    </button>
                    
                    <span className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest bg-orange-500 text-black px-2 py-0.5 rounded font-bold uppercase">
                      {property.type}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-display font-bold text-white text-lg group-hover:text-orange-500 transition-colors">
                        {property.title}
                      </h4>
                      <span className="font-mono text-orange-500 font-bold">{property.price}</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-neutral-400 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{property.location}</span>
                    </div>

                    <p className="text-xs text-neutral-400 font-light line-clamp-2 mb-6">
                      {property.description}
                    </p>

                    <div className="flex justify-between items-center text-[10px] font-mono text-neutral-500 pt-4 border-t border-neutral-850">
                      <div className="flex gap-4">
                        <span>{property.beds} BD</span>
                        <span>{property.baths} BA</span>
                        <span>{property.area}</span>
                      </div>
                      <span className="text-orange-500 font-bold group-hover:underline">VIEW</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-neutral-500 font-mono text-sm">
                No city lofts matching the price criteria.
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Interactive Map-Style Zoning Section */}
      <section id="zones" className="py-24 bg-neutral-900 border-t border-b border-neutral-800 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-xs font-mono tracking-widest text-orange-500 uppercase">Urban Plan Map</span>
            <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight mt-2 mb-6 uppercase">
              INTERACTIVE ZONES
            </h3>
            
            <div className="space-y-4">
              {[
                { name: "Downtown Zone", desc: "Zoned primarily for high-rise commercial structures and ultra luxury penthouses. Walkability score of 98%." },
                { name: "East District", desc: "Creative tech-hubs, concrete apartments, and local organic co-operatives. Transit score of 94%." },
                { name: "Harbor Quarter", desc: "Premium coastal structures, private yacht slips, and boardwalk retail units." }
              ].map(zone => (
                <div 
                  key={zone.name}
                  onClick={() => setActiveZone(zone.name)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${activeZone === zone.name ? "bg-neutral-950 border-orange-500 shadow-xl" : "bg-neutral-950/40 border-neutral-800 hover:border-neutral-700"}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Navigation className="w-4 h-4 text-orange-500" />
                    <h5 className="font-display font-bold text-white text-base">{zone.name}</h5>
                  </div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">{zone.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Graphical Map Representation */}
          <div className="relative h-[400px] w-full rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden p-8 flex items-center justify-center">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
            
            {/* Vector Shapes Representing Zones */}
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
              {/* Downtown shape */}
              <motion.div 
                animate={{ scale: activeZone === "Downtown Zone" ? 1.05 : 1 }}
                className={`absolute w-36 h-36 rounded-full border border-dashed flex items-center justify-center ${activeZone === "Downtown Zone" ? "bg-orange-500/20 border-orange-500" : "bg-neutral-900/60 border-neutral-800"}`}
              >
                <span className="text-[10px] font-mono tracking-widest text-white uppercase">DOWNTOWN</span>
              </motion.div>

              {/* East Zone shape */}
              <motion.div 
                animate={{ scale: activeZone === "East District" ? 1.05 : 1 }}
                className={`absolute top-0 right-0 w-32 h-32 rounded-lg border border-dashed flex items-center justify-center ${activeZone === "East District" ? "bg-orange-500/20 border-orange-500" : "bg-neutral-900/60 border-neutral-800"}`}
              >
                <span className="text-[10px] font-mono tracking-widest text-white uppercase">EAST ZONE</span>
              </motion.div>

              {/* Harbor Quarter shape */}
              <motion.div 
                animate={{ scale: activeZone === "Harbor Quarter" ? 1.05 : 1 }}
                className={`absolute bottom-0 left-4 w-32 h-28 rounded-tl-3xl rounded-br-3xl border border-dashed flex items-center justify-center ${activeZone === "Harbor Quarter" ? "bg-orange-500/20 border-orange-500" : "bg-neutral-900/60 border-neutral-800"}`}
              >
                <span className="text-[10px] font-mono tracking-widest text-white uppercase">HARBOR</span>
              </motion.div>
            </div>
            
            <div className="absolute bottom-4 right-4 text-[10px] font-mono text-neutral-500">
              Active: {activeZone} Map Projection
            </div>
          </div>

        </div>
      </section>

      {/* Agents Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div>
          <span className="text-xs font-mono tracking-widest text-orange-500 uppercase">Brokerage Team</span>
          <h3 className="text-3xl md:text-5xl font-display font-black text-white tracking-tight mt-2 uppercase">
            URBAN LEASING
          </h3>
          <p className="text-sm text-neutral-400 font-light mt-4 leading-relaxed">
            Our specialist urban consultants navigate commercial zoning, residential rental compliance, and tax-advantage acquisitions.
          </p>
        </div>

        {urbanovaData.agents.map((agent, i) => (
          <div key={i} className="group bg-neutral-900 border border-neutral-850 p-4 rounded-2xl flex flex-col justify-between">
            <div className="relative h-[280px] overflow-hidden rounded-xl bg-neutral-950 mb-4">
              <img src={agent.image} alt={agent.name} className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base">{agent.name}</h4>
              <span className="text-xs font-mono text-orange-500">{agent.role}</span>
            </div>
          </div>
        ))}
      </section>

      {/* 23. Property Details Modal */}
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
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-xl w-full p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProp(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-neutral-800 hover:border-orange-500 text-neutral-400 hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest block mb-1">
                {selectedProp.propertyType} Specifications
              </span>
              <h3 className="font-display font-black text-2xl text-white mb-4">
                {selectedProp.title}
              </h3>

              <div className="relative h-[240px] rounded-2xl overflow-hidden mb-6 bg-neutral-950 group">
                <img 
                  src={selectedProp.images?.[activeImgIdx] || selectedProp.image} 
                  alt={selectedProp.title} 
                  className="w-full h-full object-cover" 
                />
                {selectedProp.images && selectedProp.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev - 1 + selectedProp.images.length) % selectedProp.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-950/80 hover:bg-orange-500 hover:text-black text-white flex items-center justify-center transition-colors font-mono"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev + 1) % selectedProp.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-950/80 hover:bg-orange-500 hover:text-black text-white flex items-center justify-center transition-colors font-mono"
                    >
                      &rarr;
                    </button>
                    <div className="absolute bottom-2 right-2 bg-neutral-950/80 px-2 py-0.5 rounded text-[10px] font-mono text-orange-500">
                      {activeImgIdx + 1} / {selectedProp.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-between items-center bg-neutral-950 p-4 rounded-xl border border-neutral-850 mb-6">
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase">Purchase Price</span>
                  <span className="block font-display font-black text-xl text-orange-500">{selectedProp.price}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-neutral-500 uppercase">Zoned District</span>
                  <span className="block font-display font-bold text-sm text-white">{selectedProp.location.split(",")[0]}</span>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-neutral-950 p-2 rounded-lg border border-neutral-850">
                  <span className="block font-bold text-white">{selectedProp.bedrooms || selectedProp.beds} BHK</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Size</span>
                </div>
                <div className="bg-neutral-950 p-2 rounded-lg border border-neutral-850">
                  <span className="block font-bold text-white">{selectedProp.bathrooms || selectedProp.baths}</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Baths</span>
                </div>
                <div className="bg-neutral-950 p-2 rounded-lg border border-neutral-850">
                  <span className="block font-bold text-white">{selectedProp.area}</span>
                  <span className="text-[8px] font-mono text-neutral-500 uppercase">Area</span>
                </div>
              </div>

              <div className="mb-6">
                <h5 className="font-mono text-xs text-neutral-450 uppercase mb-2">Description</h5>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {selectedProp.description}
                </p>
              </div>

              <div className="mb-6">
                <h5 className="font-mono text-xs text-neutral-450 uppercase mb-2">Internal Amenities</h5>
                <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
                  {(selectedProp.amenities || selectedProp.features).map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Tabs */}
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <div className="flex border-b border-neutral-800 mb-4">
                  <button 
                    onClick={() => { setActiveFormTab("enquiry"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 pr-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "enquiry" ? "border-orange-500 text-white" : "border-transparent text-neutral-500"}`}
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => { setActiveFormTab("visit"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 px-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "visit" ? "border-orange-500 text-white" : "border-transparent text-neutral-500"}`}
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
                        <label className="block text-[8px] font-mono text-neutral-500 uppercase mb-1">Name</label>
                        <input required type="text" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-orange-500" />
                      </div>
                      <div>
                        <label className="block text-[8px] font-mono text-neutral-500 uppercase mb-1">Phone</label>
                        <input required type="tel" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-orange-500" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[8px] font-mono text-neutral-500 uppercase mb-1">Email</label>
                      <input required type="email" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-orange-500" />
                    </div>

                    {activeFormTab === "enquiry" ? (
                      <div>
                        <label className="block text-[8px] font-mono text-neutral-500 uppercase mb-1">Message</label>
                        <textarea 
                          required 
                          rows={2} 
                          defaultValue={`I am interested in the ${selectedProp.propertyType}: ${selectedProp.title} (ID: ${selectedProp.id}).`}
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[8px] font-mono text-neutral-500 uppercase mb-1">Date</label>
                          <input required type="date" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-[8px] font-mono text-neutral-500 uppercase mb-1">Time</label>
                          <input required type="time" className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none" />
                        </div>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={formSubmitting}
                      className="w-full bg-orange-500 text-black font-mono font-bold tracking-widest text-xs py-3 rounded-xl hover:bg-orange-400 disabled:opacity-50 transition-colors uppercase"
                    >
                      {formSubmitting ? "Submitting..." : activeFormTab === "enquiry" ? "Send Enquiry" : "Schedule Private Tour"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 py-12 px-6 text-center text-xs font-mono text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} URBANOVA CORP. REGISTERED TRADEMARK.</span>
          <div className="flex gap-4">
            <Link to="/" className="text-orange-500 hover:underline">Select Template</Link>
            <span>Confidentiality Agreements Apply</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
