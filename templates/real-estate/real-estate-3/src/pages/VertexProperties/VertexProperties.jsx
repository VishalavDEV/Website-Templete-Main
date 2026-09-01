import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Calculator, ChartBar, CheckSquare, Square, Check, MapPin, Building, Percent } from "lucide-react";
import { vertexData } from "../../data/vertex";

export default function VertexProperties() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [activeFormTab, setActiveFormTab] = useState("enquiry"); // "enquiry" or "visit"
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");

  // Comparison State
  const [comparisonList, setComparisonList] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  // ROI Calculator State
  const [calcAmount, setCalcAmount] = useState(15000000); // 15M default
  const [calcYield, setCalcYield] = useState(6.5); // 6.5% default

  const toggleCompare = (property, e) => {
    e.stopPropagation();
    if (comparisonList.some(p => p.id === property.id)) {
      setComparisonList(comparisonList.filter(p => p.id !== property.id));
    } else {
      if (comparisonList.length >= 2) {
        alert("You can compare a maximum of 2 commercial properties at once.");
        return;
      }
      setComparisonList([...comparisonList, property]);
    }
  };

  const calculateROI = () => {
    const annualRent = (calcAmount * (calcYield / 100)).toFixed(0);
    const monthlyRent = (annualRent / 12).toFixed(0);
    return {
      annual: Number(annualRent).toLocaleString(),
      monthly: Number(monthlyRent).toLocaleString()
    };
  };

  const handleSelectProperty = (prop) => {
    setSelectedProperty(prop);
    setActiveImgIdx(0);
    setActiveFormTab("enquiry");
    setFormSuccess("");
    setFormError("");
  };

  const filteredProperties = vertexData.properties.filter(prop => {
    return activeTab === "All" || prop.propertyType === activeTab;
  });

  return (
    <div className="min-h-screen bg-[#0A192F] text-[#8892B0] font-sans selection:bg-cyan-500 selection:text-[#0A192F]">
      
      {/* 19. Corporate Structured Navigation */}
      <nav className="border-b border-[#172A45] bg-[#0A192F]/95 backdrop-blur-md sticky top-0 z-40 py-5 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 group text-white">
          <Building className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span className="font-mono font-bold tracking-[0.2em] text-sm uppercase">
            VERTEX_PROPERTIES
          </span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-widest text-[#8892B0] uppercase">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">Sectors</a>
          <a href="#calculator" className="hover:text-cyan-400 transition-colors">Yield Calc</a>
          <a href="#catalog" className="hover:text-cyan-400 transition-colors">Acquisitions</a>
          <a href="#stats" className="hover:text-cyan-400 transition-colors">Market Stats</a>
        </div>

        <Link to="/" className="text-xs font-mono tracking-widest text-cyan-400 border border-cyan-400/40 hover:border-cyan-400 px-4 py-2 rounded transition-all">
          MARKETPLACE
        </Link>
      </nav>

      {/* 20. Commercial Dashboard Hero Layout */}
      <header id="hero" className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Sectors display */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs font-mono text-cyan-400">
            <span>Vertex Capital Partners</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-none uppercase">
            COMMERCIAL ACQUISITIONS & <span className="text-cyan-400 font-mono">VALUATIONS.</span>
          </h1>

          <p className="text-sm text-[#8892B0] max-w-xl font-light leading-relaxed">
            {vertexData.hero.subtitle} We advise global investment funds on acquiring institutional offices, retail strips, and logistics depots.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono">
            {["OFFICE", "RETAIL", "INDUSTRIAL", "INVESTMENT"].map(sec => (
              <div key={sec} className="p-3 border border-[#172A45] bg-[#112240] rounded text-white text-[10px] tracking-widest font-bold">
                {sec}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Boardroom image block */}
        <div className="lg:col-span-5 relative aspect-[4/3] rounded overflow-hidden border border-[#172A45] bg-[#112240]">
          <img src={vertexData.hero.image} alt="Boardroom commercial tower" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent" />
        </div>

      </header>

      {/* 16. Investment & Yield Calculator Section */}
      <section id="calculator" className="bg-[#112240] py-20 border-t border-b border-[#172A45] px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-cyan-400">
              <Calculator className="w-4 h-4" />
              <span>COMMERCIAL CALCULATIONS</span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight uppercase">
              YIELD VALUER
            </h3>
            
            <p className="text-xs text-[#8892B0] font-light mt-3 leading-relaxed">
              Drag the inputs below to calculate estimated annual rents and cash flows based on prevailing capital rates.
            </p>

            <div className="mt-8 space-y-6">
              {/* Acquisition Amount */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2 text-white">
                  <span>CAPITAL BID AMOUNT:</span>
                  <span className="text-cyan-400 font-bold">${(calcAmount / 1000000).toFixed(1)}M</span>
                </div>
                <input 
                  type="range"
                  min={5000000}
                  max={50000000}
                  step={1000000}
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-1.5 bg-[#0A192F] rounded cursor-pointer"
                />
              </div>

              {/* Target Yield */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-2 text-white">
                  <span>TARGET CAP RATE (YIELD):</span>
                  <span className="text-cyan-400 font-bold">{calcYield}%</span>
                </div>
                <input 
                  type="range"
                  min={4.0}
                  max={10.0}
                  step={0.1}
                  value={calcYield}
                  onChange={(e) => setCalcYield(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-1.5 bg-[#0A192F] rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-[#0A192F] border border-[#172A45] p-6 rounded-xl space-y-4">
            <h5 className="font-mono text-xs text-white uppercase tracking-widest border-b border-[#172A45] pb-2">
              Yield Output Summary
            </h5>
            
            <div>
              <span className="text-[10px] font-mono text-[#8892B0] uppercase block">Estimated Annual Net Rent</span>
              <span className="text-3xl font-mono text-cyan-400 font-bold">${calculateROI().annual}</span>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#8892B0] uppercase block">Estimated Monthly Cash Yield</span>
              <span className="text-xl font-mono text-white font-bold">${calculateROI().monthly}</span>
            </div>

            <div className="text-[10px] font-mono text-[#8892B0] leading-relaxed pt-2 border-t border-[#172A45]/45">
              Calculations represent Triple-Net (NNN) yield models before financing variables or local zoning tax deductions are computed.
            </div>
          </div>

        </div>
      </section>

      {/* Property Catalog Section */}
      <section id="catalog" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">Institutional Assets</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-2 uppercase">
              PORTFOLIO LISTINGS
            </h2>
          </div>

          {/* Sector Selector */}
          <div className="flex gap-4 font-mono text-xs">
            {["All", "Office", "Retail", "Industrial"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded border transition-colors ${activeTab === tab ? "bg-cyan-500/10 border-cyan-400 text-cyan-400 font-bold" : "border-[#172A45] text-[#8892B0] hover:border-neutral-700"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Trigger Banner */}
        {comparisonList.length > 0 && (
          <div className="mb-8 p-4 bg-[#112240] border border-[#172A45] rounded-xl flex justify-between items-center gap-4">
            <div className="text-xs font-mono text-white flex items-center gap-2">
              <Check className="w-4 h-4 text-cyan-400" />
              <span>{comparisonList.length} Property Selected for comparison</span>
            </div>
            <button 
              onClick={() => setShowComparison(true)}
              className="bg-cyan-500 text-[#0A192F] font-mono text-xs font-bold tracking-widest px-4 py-2 rounded hover:bg-cyan-400"
            >
              Compare Side-by-Side
            </button>
          </div>
        )}

        {/* Commercial list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <div 
              key={property.id}
              onClick={() => handleSelectProperty(property)}
              className="group cursor-pointer bg-[#112240] border border-[#172A45] hover:border-cyan-400/40 rounded-xl overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-[240px] overflow-hidden bg-neutral-950">
                <img src={property.image} alt={property.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700" />
                
                {/* Checkbox compare button */}
                <button
                  onClick={(e) => toggleCompare(property, e)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 rounded bg-[#0A192F] flex items-center justify-center text-cyan-400 border border-[#172A45]"
                >
                  {comparisonList.some(p => p.id === property.id) ? (
                    <CheckSquare className="w-4 h-4 fill-cyan-500/10" />
                  ) : (
                    <Square className="w-4 h-4 text-neutral-450" />
                  )}
                </button>

                <span className="absolute bottom-4 left-4 bg-cyan-500 text-[#0A192F] font-mono text-[9px] px-2 py-0.5 rounded font-bold uppercase">
                  {property.type}
                </span>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                    {property.title}
                  </h4>
                  <span className="font-mono text-cyan-400 text-sm font-bold">{property.price}</span>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#8892B0] mb-4 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{property.location.split(",")[0]}</span>
                </div>

                <div className="pt-4 border-t border-[#172A45] flex items-center justify-between text-[10px] font-mono">
                  <div>
                    <span className="block text-white">CAP Rate: {property.capRate}</span>
                    <span>Occupancy: {property.occupancy}</span>
                  </div>
                  <span className="text-cyan-400 font-bold group-hover:underline">ACQUISITIONS</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Market Statistics CSS Chart section */}
      <section id="stats" className="bg-[#112240] py-24 border-t border-[#172A45] px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-cyan-400">
              <ChartBar className="w-4 h-4" />
              <span>MARKET STABILITY</span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight uppercase">
              VACANCY INDICATORS
            </h3>
            
            <p className="text-xs text-[#8892B0] font-light mt-3 leading-relaxed">
              Prevailing logistics, retail, and office vacancy index values logged across target Boston sectors.
            </p>
          </div>

          {/* Animated CSS Bars */}
          <div className="space-y-4 font-mono text-xs">
            {vertexData.marketStats.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1 text-white uppercase text-[10px]">
                  <span>{item.sector} (Yield: {item.yield})</span>
                  <span>Vacancy: {item.vacancy}</span>
                </div>
                <div className="w-full bg-[#0A192F] rounded-full h-3 border border-[#172A45] overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: idx === 0 ? "85%" : idx === 1 ? "42%" : "38%" }}
                    transition={{ duration: 1.2 }}
                    className="bg-cyan-500 h-full rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Drawer Modal */}
      <AnimatePresence>
        {showComparison && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowComparison(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A192F] border border-[#172A45] rounded-2xl max-w-4xl w-full p-6 md:p-10 overflow-y-auto max-h-[90vh] shadow-2xl relative text-[#8892B0]"
            >
              <button 
                onClick={() => setShowComparison(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#172A45] hover:border-cyan-400 text-[#8892B0] hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <h3 className="font-bold text-2xl text-white mb-6 uppercase tracking-wider text-center">
                COMMERCIAL COMPARISON
              </h3>

              {comparisonList.length >= 1 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#172A45] font-mono text-xs">
                  {comparisonList.map((property) => (
                    <div key={property.id} className="space-y-4 px-4 pt-4 md:pt-0">
                      <div className="aspect-[16/9] rounded-lg overflow-hidden border border-[#172A45] bg-[#112240]">
                        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-bold text-white text-lg">{property.title}</h4>
                      
                      <div className="space-y-2 border-t border-[#172A45]/45 pt-4">
                        <div className="flex justify-between"><span>Purchase Price:</span><span className="text-cyan-400 font-bold">{property.price}</span></div>
                        <div className="flex justify-between"><span>Capital Yield rate:</span><span className="text-white">{property.capRate}</span></div>
                        <div className="flex justify-between"><span>Occupancy Index:</span><span className="text-white">{property.occupancy}</span></div>
                        <div className="flex justify-between"><span>Building Size:</span><span className="text-white">{property.area}</span></div>
                        <div className="flex justify-between"><span>District:</span><span className="text-white">{property.location}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  Select properties to proceed with structural valuations comparisons.
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 23. Vertex Property Details Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProperty(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#112240] border border-[#172A45] rounded-2xl max-w-xl w-full p-6 md:p-8 overflow-y-auto max-h-[90vh] shadow-2xl relative text-[#8892B0]"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#172A45] hover:border-cyan-400 text-neutral-450 hover:text-white flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                {selectedProperty.type} Asset Specifications
              </span>
              
              <h3 className="font-bold text-2xl text-white mb-4">
                {selectedProperty.title}
              </h3>

              <div className="relative h-[220px] rounded-xl overflow-hidden mb-6 bg-neutral-950 border border-[#172A45] group">
                <img src={selectedProperty.images?.[activeImgIdx] || selectedProperty.image} alt={selectedProperty.title} className="w-full h-full object-cover" />
                {selectedProperty.images && selectedProperty.images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev - 1 + selectedProperty.images.length) % selectedProperty.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0A192F]/90 hover:bg-cyan-400 hover:text-[#0A192F] text-white flex items-center justify-center transition-colors font-mono"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={() => setActiveImgIdx(prev => (prev + 1) % selectedProperty.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0A192F]/90 hover:bg-cyan-400 hover:text-[#0A192F] text-white flex items-center justify-center transition-colors font-mono"
                    >
                      &rarr;
                    </button>
                    <div className="absolute bottom-2 right-2 bg-[#0A192F]/90 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400">
                      {activeImgIdx + 1} / {selectedProperty.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 border border-[#172A45] p-4 rounded-xl bg-[#0A192F] mb-6 font-mono text-xs">
                <div>
                  <span className="text-[9px] uppercase block">Acquisition Valuation</span>
                  <span className="font-bold text-base text-cyan-400">{selectedProperty.price}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase block">Zoned Location</span>
                  <span className="font-bold text-sm text-white">{selectedProperty.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs mb-6 font-mono text-[#8892B0]">
                <div className="bg-[#0A192F] p-2 rounded-lg border border-[#172A45]">
                  <span className="block font-bold text-cyan-400">{selectedProperty.bedrooms || selectedProperty.beds} BHK</span>
                  <span className="text-[8px] uppercase">Structure</span>
                </div>
                <div className="bg-[#0A192F] p-2 rounded-lg border border-[#172A45]">
                  <span className="block font-bold text-cyan-400">{selectedProperty.bathrooms || selectedProperty.baths}</span>
                  <span className="text-[8px] uppercase">Baths</span>
                </div>
                <div className="bg-[#0A192F] p-2 rounded-lg border border-[#172A45]">
                  <span className="block font-bold text-cyan-400">{selectedProperty.area}</span>
                  <span className="text-[8px] uppercase">Area</span>
                </div>
              </div>

              <div className="mb-6 space-y-4 text-xs font-light leading-relaxed">
                <p>{selectedProperty.description}</p>
                
                <div className="grid grid-cols-2 gap-4 bg-[#0A192F]/65 p-4 border border-[#172A45]/45 rounded-lg">
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-[#8892B0]">Capitalization Rate</span>
                    <span className="block text-sm font-bold text-cyan-400 font-mono">{selectedProperty.capRate}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-[#8892B0]">Occupancy rate</span>
                    <span className="block text-sm font-bold text-white font-mono">{selectedProperty.occupancy}</span>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block mb-2">Systems & Certs</span>
                  <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px] text-neutral-300">
                    {(selectedProperty.amenities || selectedProperty.features).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-none rotate-45 transform" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Tabs */}
              <div className="mt-6 pt-6 border-t border-[#172A45]">
                <div className="flex border-b border-[#172A45] mb-4">
                  <button 
                    onClick={() => { setActiveFormTab("enquiry"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 pr-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "enquiry" ? "border-cyan-400 text-white" : "border-transparent text-[#8892B0]"}`}
                  >
                    Enquire Now
                  </button>
                  <button 
                    onClick={() => { setActiveFormTab("visit"); setFormSuccess(""); setFormError(""); }}
                    className={`pb-2 px-4 text-xs font-mono tracking-widest uppercase border-b-2 transition-colors ${activeFormTab === "visit" ? "border-cyan-400 text-white" : "border-transparent text-[#8892B0]"}`}
                  >
                    Schedule Visit
                  </button>
                </div>

                {formSuccess ? (
                  <div className="bg-[#0A192F] border border-cyan-500/20 text-cyan-400 p-4 rounded-xl text-xs font-mono text-center">
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
                        <label className="block text-[8px] font-mono text-[#8892B0] uppercase mb-1">Name</label>
                        <input required type="text" className="w-full bg-[#0A192F] border border-[#172A45] rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-400" />
                      </div>
                      <div>
                        <label className="block text-[8px] font-mono text-[#8892B0] uppercase mb-1">Phone</label>
                        <input required type="tel" className="w-full bg-[#0A192F] border border-[#172A45] rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-400" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[8px] font-mono text-[#8892B0] uppercase mb-1">Email</label>
                      <input required type="email" className="w-full bg-[#0A192F] border border-[#172A45] rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-400" />
                    </div>

                    {activeFormTab === "enquiry" ? (
                      <div>
                        <label className="block text-[8px] font-mono text-[#8892B0] uppercase mb-1">Message</label>
                        <textarea 
                          required 
                          rows={2} 
                          defaultValue={`I am interested in acquiring the commercial asset: ${selectedProperty.title} (ID: ${selectedProperty.id}). Please send detailed cap rate analysis.`}
                          className="w-full bg-[#0A192F] border border-[#172A45] rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[8px] font-mono text-[#8892B0] uppercase mb-1">Date</label>
                          <input required type="date" className="w-full bg-[#0A192F] border border-[#172A45] rounded px-2.5 py-1.5 text-xs text-white focus:outline-none" />
                        </div>
                        <div>
                          <label className="block text-[8px] font-mono text-[#8892B0] uppercase mb-1">Time</label>
                          <input required type="time" className="w-full bg-[#0A192F] border border-[#172A45] rounded px-2.5 py-1.5 text-xs text-white focus:outline-none" />
                        </div>
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={formSubmitting}
                      className="w-full bg-cyan-500 text-[#0A192F] font-mono font-bold tracking-widest text-xs py-3 rounded hover:bg-cyan-450 transition-colors uppercase disabled:opacity-50"
                    >
                      {formSubmitting ? "Submitting..." : activeFormTab === "enquiry" ? "Send Acquisition Sourcing Enquiry" : "Book Site Tour"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#0A192F] border-t border-[#172A45] py-12 px-6 text-center text-xs font-mono text-[#8892B0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© {new Date().getFullYear()} VERTEX CAPITAL PROPERTIES. SEC REGULATED.</span>
          <div className="flex gap-4">
            <Link to="/" className="text-cyan-400 hover:underline">Select Template</Link>
            <span>Regulatory Filings Logged</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
