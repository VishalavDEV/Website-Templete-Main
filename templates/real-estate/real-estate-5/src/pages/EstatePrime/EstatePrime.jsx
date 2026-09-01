import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Heart, Sliders, X, Phone, MapPin, Grid, Layers } from "lucide-react";
import { estatePrimeData } from "../../data/estatePrime";

export default function EstatePrime() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [activeFormTab, setActiveFormTab] = useState("enquiry"); // "enquiry" or "visit"
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");
  const [bottomFormSubmitting, setBottomFormSubmitting] = useState(false);
  const [bottomFormSuccess, setBottomFormSuccess] = useState("");
  
  // Search state
  const [searchLocation, setSearchLocation] = useState("All");
  const [searchType, setSearchType] = useState("All");
  const [searchPrice, setSearchPrice] = useState("All");
  
  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => {
      const updated = prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id];
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

  // Filter properties
  const filteredProperties = estatePrimeData.properties.filter(prop => {
    const locMatch = searchLocation === "All" || prop.location.includes(searchLocation);
    const typeMatch = searchType === "All" || prop.propertyType === searchType;
    let priceMatch = true;
    if (searchPrice !== "All") {
      const priceVal = prop.rawPrice;
      if (searchPrice === "Under 3 Cr") priceMatch = priceVal < 30000000;
      else if (searchPrice === "3 Cr - 4 Cr") priceMatch = priceVal >= 30000000 && priceVal <= 40000000;
      else if (searchPrice === "Over 4 Cr") priceMatch = priceVal > 40000000;
    }
    return locMatch && typeMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950">
      
      {/* 19. Unique Navigation: Classic Editorial Horizontal Menu */}
      <nav className="border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md sticky top-0 z-40 py-6 px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center font-bold text-neutral-950 font-serif">
            E
          </div>
          <span className="font-serif text-lg tracking-wider font-bold group-hover:text-amber-400 transition-colors duration-300">
            ESTATE PRIME
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest font-mono text-neutral-400 uppercase">
          <a href="#hero" className="hover:text-amber-500 transition-colors duration-300">Overview</a>
          <a href="#properties" className="hover:text-amber-500 transition-colors duration-300">Properties</a>
          <a href="#about" className="hover:text-amber-500 transition-colors duration-300">About</a>
          <a href="#agents" className="hover:text-amber-500 transition-colors duration-300">Agents</a>
          <a href="#cta" className="hover:text-amber-500 transition-colors duration-300">Enquire</a>
        </div>

        <Link to="/" className="text-xs font-mono tracking-widest border border-amber-500/30 hover:border-amber-500 px-4 py-2 rounded text-amber-500 transition-all duration-300">
          MARKETPLACE
        </Link>
      </nav>

      {/* 20. Split Screen Hero Layout */}
      <header id="hero" className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Parallax Image Zoom with Animated Gold Border */}
        <div className="relative overflow-hidden group h-[50vh] lg:h-auto border-b lg:border-b-0 lg:border-r border-neutral-800">
          <div className="absolute inset-4 border border-amber-500/20 group-hover:border-amber-500/60 transition-all duration-1000 z-10 pointer-events-none" />
          <motion.img 
            src={estatePrimeData.hero.image} 
            alt="Estate Prime Luxury Villa"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="w-full h-full object-cover origin-center transition-transform duration-10000 ease-linear transform group-hover:scale-105"
          />
          {/* Hero interactive overlay information */}
          <div className="absolute bottom-8 left-8 right-8 z-20 bg-neutral-950/80 backdrop-blur-md p-6 border border-neutral-800 rounded">
            <span className="text-[10px] font-mono tracking-widest text-amber-500 uppercase">Featured Architecture</span>
            <h3 className="font-serif text-xl text-white mt-1">The Crest Mansion, Pasadena</h3>
            <p className="text-xs text-neutral-400 mt-2 font-light">Custom timber details & geothermal heat pool.</p>
          </div>
        </div>

        {/* Right Side: Editorial Headline and Property Search Filter */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-12 md:py-20 bg-neutral-950">
          <div className="max-w-xl">
            <span className="text-xs font-mono tracking-[0.2em] text-amber-500 uppercase">ESTATE PRIME RESIDENTIAL</span>
            
            <div className="w-12 h-[1px] bg-amber-500 my-6" />
            
            <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-white leading-tight font-light mt-4">
              EXCEPTIONAL HOMES
            </h2>
            <h3 className="text-xl font-sans text-neutral-400 font-light mt-4 mb-12">
              Find a place worth calling home.
            </h3>

            {/* 21. Working Property Search Panel */}
            <div className="bg-neutral-900 border border-neutral-800 p-6 rounded shadow-xl relative z-20">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono tracking-widest text-neutral-400 uppercase pb-2 border-b border-neutral-800">
                <Search className="w-4 h-4 text-amber-500" />
                <span>Search Collections</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Location Filter */}
                <div>
                  <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-1">Location</label>
                  <select 
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-300 focus:outline-none focus:border-amber-500"
                  >
                    <option value="All">All Locations</option>
                    <option value="Whitefield">Whitefield</option>
                    <option value="Sarjapur">Sarjapur</option>
                    <option value="Indiranagar">Indiranagar</option>
                  </select>
                </div>

                {/* Property Type Filter */}
                <div>
                  <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-1">Property Type</label>
                  <select 
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-300 focus:outline-none focus:border-amber-500"
                  >
                    <option value="All">All Types</option>
                    <option value="Villa">Villas</option>
                    <option value="Estate">Estates</option>
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-1">Budget</label>
                  <select 
                    value={searchPrice}
                    onChange={(e) => setSearchPrice(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-300 focus:outline-none focus:border-amber-500"
                  >
                    <option value="All">All Prices</option>
                    <option value="Under 3 Cr">Under ₹3 Cr</option>
                    <option value="3 Cr - 4 Cr">₹3 Cr - ₹4 Cr</option>
                    <option value="Over 4 Cr">Over ₹4 Cr</option>
                  </select>
                </div>

              </div>
              
              <div className="mt-4 pt-4 border-t border-neutral-800/40 flex justify-between items-center">
                <span className="text-[10px] font-mono text-neutral-500">
                  {filteredProperties.length} matches found
                </span>
                <a href="#properties" className="bg-amber-500 text-neutral-950 font-mono tracking-widest text-xs px-6 py-2.5 rounded font-semibold hover:bg-amber-400 transition-colors duration-300 uppercase">
                  Apply Search
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Featured Properties Section */}
      <section id="properties" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-500 uppercase">Curated Portfolios</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-2">FEATURED PROPERTIES</h2>
          </div>
          <div className="h-[1px] flex-grow bg-neutral-800 mx-8 hidden lg:block" />
          <span className="text-xs font-mono text-neutral-500">ESTATE PRIME EXCLUSIVES</span>
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
                  className="group cursor-pointer bg-neutral-950 border border-neutral-800 hover:border-amber-500/40 rounded overflow-hidden flex flex-col justify-between"
                >
                  {/* Card Image Container */}
                  <div className="relative h-[280px] overflow-hidden bg-neutral-900">
                    <img 
                      src={property.image} 
                      alt={property.title} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Favorite Button */}
                    <button 
                      onClick={(e) => toggleFavorite(property.id, e)}
                      className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-neutral-950/80 backdrop-blur-md flex items-center justify-center border border-neutral-850 hover:border-amber-500 transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-amber-500 text-amber-500" : "text-neutral-400"}`} />
                    </button>
                    
                    {/* Type overlay */}
                    <div className="absolute bottom-4 left-4 px-2 py-0.5 bg-neutral-900/90 text-amber-500 text-[10px] tracking-widest font-mono uppercase rounded">
                      {property.type}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="font-serif text-lg text-white group-hover:text-amber-500 transition-colors duration-300">
                          {property.title}
                        </h4>
                        <span className="font-mono text-amber-500 font-semibold">{property.price}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-xs text-neutral-400 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                        <span>{property.location}</span>
                      </div>

                      <p className="text-xs text-neutral-400 font-light line-clamp-2 mb-6">
                        {property.description}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="pt-4 border-t border-neutral-850 flex items-center justify-between text-neutral-500 text-[10px] font-mono">
                      <div className="flex gap-4">
                        <span>{property.beds} BEDS</span>
                        <span>{property.baths} BATHS</span>
                        <span>{property.area}</span>
                      </div>
                      <span className="text-amber-500 group-hover:underline">VIEW INFO</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-neutral-500 font-mono text-sm">
                No properties match your search criteria.
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-neutral-950 py-24 border-t border-neutral-850">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-amber-500" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-amber-500" />
            <img 
              src={estatePrimeData.interiors[0]} 
              alt="Luxury Living Interior" 
              className="w-full h-[400px] object-cover rounded shadow-2xl brightness-90"
            />
          </div>

          <div className="max-w-xl">
            <span className="text-xs font-mono tracking-widest text-amber-500 uppercase">Our Legacy</span>
            <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-2 mb-6">DESIGNED FOR LEGACY</h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
              At Estate Prime, we believe a home is more than steel and stone. It is a canvas for generation-building, an architectural statement of your values, and a sanctuary from the noise.
            </p>
            <p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">
              For over two decades, our agency has curated exclusive residential transactions across the California coast, providing unparalleled discretion, design consultation, and market analytics.
            </p>
            <div className="flex gap-8 border-t border-neutral-850 pt-8">
              <div>
                <span className="block font-serif text-2xl text-white font-bold">$2.4B+</span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">Volume Exceeded</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-white font-bold">250+</span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">Transactions Closed</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-white font-bold">98%</span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">Retention Rate</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase">Expert Guidance</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-2">OUR LEADERS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {estatePrimeData.agents.map((agent, idx) => (
            <div key={idx} className="group bg-neutral-950 border border-neutral-850 p-4 rounded text-center">
              <div className="relative overflow-hidden h-[360px] w-full rounded mb-6 bg-neutral-900">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-serif text-xl text-white">{agent.name}</h4>
              <span className="text-xs font-mono text-amber-500 block mt-1">{agent.role}</span>
              <div className="mt-4 pt-4 border-t border-neutral-900/60 flex items-center justify-center gap-2 text-xs font-mono text-neutral-450 hover:text-amber-500 cursor-pointer">
                <Phone className="w-3.5 h-3.5" />
                <span>Enquire Private Portfolio</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-950 py-24 border-t border-b border-neutral-850">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase">Client Notes</span>
          <p className="font-serif text-xl md:text-2xl italic text-neutral-200 mt-6 leading-relaxed">
            "{estatePrimeData.testimonials[0].text}"
          </p>
          <div className="w-8 h-[1px] bg-amber-500 mx-auto my-6" />
          <h5 className="font-mono text-xs text-white uppercase tracking-widest">
            {estatePrimeData.testimonials[0].client}
          </h5>
          <span className="text-[10px] font-mono text-neutral-500 uppercase mt-1 block">
            {estatePrimeData.testimonials[0].role}
          </span>
        </div>
      </section>

      {/* 23. Property Detail Interaction Drawer / Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex justify-end"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-neutral-900 h-full overflow-y-auto border-l border-neutral-800 p-8 md:p-12 text-neutral-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-amber-500 uppercase">Residential Details</span>
                    <h3 className="font-serif text-3xl text-white mt-1">{selectedProperty.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedProperty(null)}
                    className="p-2 border border-neutral-800 hover:border-amber-500 rounded text-neutral-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative h-[340px] rounded overflow-hidden mb-8 bg-neutral-950 group">
                  <img 
                    src={selectedProperty.images?.[activeImgIdx] || selectedProperty.image} 
                    alt={selectedProperty.title} 
                    className="w-full h-full object-cover" 
                  />
                  {selectedProperty.images && selectedProperty.images.length > 1 && (
                    <>
                      <button 
                        onClick={() => setActiveImgIdx(prev => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-900/80 hover:bg-amber-500 hover:text-neutral-950 text-white flex items-center justify-center transition-colors font-mono"
                      >
                        &larr;
                      </button>
                      <button 
                        onClick={() => setActiveImgIdx(prev => (prev + 1) % selectedProperty.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-900/80 hover:bg-amber-500 hover:text-neutral-950 text-white flex items-center justify-center transition-colors font-mono"
                      >
                        &rarr;
                      </button>
                      <div className="absolute bottom-2 right-2 bg-neutral-900/80 px-2 py-0.5 rounded text-[10px] font-mono text-amber-500">
                        {activeImgIdx + 1} / {selectedProperty.images.length}
                      </div>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4 border-b border-neutral-850 pb-6 mb-6 text-center">
                  <div className="p-3 bg-neutral-950 rounded">
                    <span className="block font-serif text-lg text-white">{selectedProperty.bedrooms || selectedProperty.beds}</span>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase">Bedrooms</span>
                  </div>
                  <div className="p-3 bg-neutral-950 rounded">
                    <span className="block font-serif text-lg text-white">{selectedProperty.bathrooms || selectedProperty.baths}</span>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase">Bathrooms</span>
                  </div>
                  <div className="p-3 bg-neutral-950 rounded">
                    <span className="block font-serif text-lg text-white">{selectedProperty.area}</span>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase">Lot Size</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="font-mono text-xs text-amber-500 uppercase tracking-widest mb-3">Description</h5>
                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {selectedProperty.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h5 className="font-mono text-xs text-amber-500 uppercase tracking-widest mb-3">Key Features</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProperty.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="w-1 h-1 rounded-full bg-amber-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Tabs */}
                <div className="mt-8 pt-8 border-t border-neutral-850">
                  <div className="flex border-b border-neutral-800 mb-6">
                    <button 
                      onClick={() => { setActiveFormTab("enquiry"); setFormSuccess(""); setFormError(""); }}
                      className={`pb-2 pr-6 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "enquiry" ? "border-amber-500 text-white" : "border-transparent text-neutral-500"}`}
                    >
                      Enquire Now
                    </button>
                    <button 
                      onClick={() => { setActiveFormTab("visit"); setFormSuccess(""); setFormError(""); }}
                      className={`pb-2 px-6 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "visit" ? "border-amber-500 text-white" : "border-transparent text-neutral-500"}`}
                    >
                      Schedule Visit
                    </button>
                  </div>

                  {formSuccess ? (
                    <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 p-4 rounded text-xs font-mono">
                      {formSuccess}
                    </div>
                  ) : (
                    <form 
                      onSubmit={async (e) => { 
                        e.preventDefault(); 
                        setFormSubmitting(true);
                        setFormError("");
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
                          <label className="block text-[9px] font-mono text-neutral-500 uppercase mb-1">Name</label>
                          <input required type="text" className="w-full bg-neutral-950 border border-neutral-850 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500" />
                        </div>
                        <div>
                          <label className="block text-[9px] font-mono text-neutral-500 uppercase mb-1">Phone</label>
                          <input required type="tel" className="w-full bg-neutral-950 border border-neutral-850 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-[9px] font-mono text-neutral-500 uppercase mb-1">Email</label>
                        <input required type="email" className="w-full bg-neutral-950 border border-neutral-850 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500" />
                      </div>

                      {activeFormTab === "enquiry" ? (
                        <div>
                          <label className="block text-[9px] font-mono text-neutral-500 uppercase mb-1">Message</label>
                          <textarea 
                            required 
                            rows={3} 
                            defaultValue={`I am interested in ${selectedProperty.title} (ID: ${selectedProperty.id}) located in ${selectedProperty.location}. Please send me the brochure.`}
                            className="w-full bg-neutral-950 border border-neutral-850 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[9px] font-mono text-neutral-500 uppercase mb-1">Preferred Date</label>
                            <input required type="date" className="w-full bg-neutral-950 border border-neutral-850 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500" />
                          </div>
                          <div>
                            <label className="block text-[9px] font-mono text-neutral-500 uppercase mb-1">Preferred Time</label>
                            <input required type="time" className="w-full bg-neutral-950 border border-neutral-850 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500" />
                          </div>
                        </div>
                      )}

                      <button 
                        type="submit" 
                        disabled={formSubmitting}
                        className="w-full bg-amber-500 text-neutral-950 font-mono tracking-widest text-xs py-2.5 rounded font-bold hover:bg-amber-400 disabled:opacity-50 transition-colors uppercase"
                      >
                        {formSubmitting ? "Submitting..." : activeFormTab === "enquiry" ? "Send Inquiry" : "Schedule Private Tour"}
                      </button>
                    </form>
                  )}
                </div>

              </div>

              {/* Private Booking Contact Area */}
              <div className="pt-8 border-t border-neutral-850">
                <div className="flex justify-between items-center gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase">Valuation Price</span>
                    <span className="block font-serif text-2xl text-amber-500 font-semibold">{selectedProperty.price}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Enquire Form */}
      <section id="cta" className="py-24 px-6 md:px-12 max-w-3xl mx-auto border-t border-neutral-800">
        <div className="text-center mb-12">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase">Exclusive Inquiries</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-2">ENQUIRE TODAY</h2>
          <p className="text-xs font-sans text-neutral-400 mt-3 font-light">
            Fill in the details below to receive our confidential physical catalog.
          </p>
        </div>

        {bottomFormSuccess ? (
          <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 p-6 rounded text-center font-mono text-sm">
            {bottomFormSuccess}
          </div>
        ) : (
          <form 
            onSubmit={async (e) => { 
              e.preventDefault(); 
              setBottomFormSubmitting(true);
              await new Promise(r => setTimeout(r, 1000));
              setBottomFormSubmitting(false);
              setBottomFormSuccess("Your enquiry has been received.");
            }} 
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-2">Full Name</label>
                <input required type="text" className="w-full bg-neutral-950 border border-neutral-850 rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white" />
              </div>
              <div>
                <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-2">Email Address</label>
                <input required type="email" className="w-full bg-neutral-950 border border-neutral-850 rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-2">Confidential Message</label>
              <textarea required rows={4} className="w-full bg-neutral-950 border border-neutral-850 rounded px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-white" placeholder="Specify your desired location or residential asset..."></textarea>
            </div>
            <button 
              type="submit" 
              disabled={bottomFormSubmitting}
              className="w-full bg-amber-500 text-neutral-950 font-mono tracking-widest text-xs py-4 rounded font-bold hover:bg-amber-400 disabled:opacity-50 transition-colors uppercase"
            >
              {bottomFormSubmitting ? "Submitting Confidential Inquiry..." : "Submit Confidential Inquiry"}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-850 py-16 px-6 md:px-12 text-center text-xs font-mono text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            © {new Date().getFullYear()} ESTATE PRIME REAL ESTATE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6 uppercase tracking-wider">
            <Link to="/" className="text-amber-500 hover:underline">Marketplace selector</Link>
            <span>Confidential Portfolio</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
